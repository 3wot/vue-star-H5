<template>
	<div class="confirm-valuation">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="估值确认" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="goBack">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>
			<!-- 脚 -->
			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>
        	 		<yd-button class="bottom-btn" size="large" @click.native="sub">确认</yd-button>	
        	 		<yd-button class="bottom-btn" size="large" type="danger" @click.native="finish">结案</yd-button>
		        </yd-flexbox>
			</div>
			<!-- 内容 -->
			<yd-cell-group>
	            <yd-cell-item>
	                <span slot="left">操作人：</span>
	                <span slot="right">{{HouseValuationOperatorName}}</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">操作时间：</span>
	                <span slot="right">{{HouseValuationDateTime}}</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">估值结果：</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <!-- <img class="cv-img" slot="right" :src="C_HouseValuationImageUrl"> -->
	                <yd-lightbox class="cv-img" slot="left">
						<yd-lightbox-img :src="C_HouseValuationImageUrl" :original="HouseValuationImageUrl"></yd-lightbox-img>
					</yd-lightbox>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">备注：</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <yd-textarea v-model="HouseValuationConfirmComment" slot="right" placeholder="请输入备注"></yd-textarea>
	            </yd-cell-item>
	        </yd-cell-group>
			
			<yd-popup v-model="finishVisible" position="center" width="90%" :close-on-masker="false">
	            <div class="finishBox">
	                <yd-cell-group>
	                	<yd-cell-item>
				            <span slot="left" class="finishTitle">点击确定，将直接结案，请您慎重操作！</span>
				        </yd-cell-item>
				        <yd-cell-item>
				            <yd-input slot="right" v-model="finishText" :show-clear-icon="false" :show-error-icon="false" :show-success-icon="false" :show-required-icon="false" placeholder="请输入结案理由"></yd-input>
				        </yd-cell-item>
				    </yd-cell-group>
			        <yd-button type="hollow" class="finishBtn" @click.native="finishNot">取消</yd-button>
			        <yd-button type="hollow" class="finishBtn" @click.native="finishOk">确定</yd-button>
	            </div>
        	</yd-popup>

	    </yd-layout>

	</div>
</template>

<script>

export default {
	components:{

	},
	name: 'ConfirmValuation',
	data () {
		return {
            "C_HouseValuationImageUrl": "",
            "HouseValuationImageUrl": "",
            "HouseValuationDateTime": "",
            "HouseValuationOperatorId": "",
            "HouseValuationOperatorName": "",
            "HouseValuationConfirmComment": "",
            finishVisible: false,
			finishText: '',
		}
	},
	mounted () {
		// this.testLogin()
		this.init()
	},
	methods:{

		// 检测登录
		testLogin () {
			if (USER_INFO.uid && USER_INFO.token) {

			} else {
				this.$router.push({ name : 'login' })
				this.$dialog.toast({
					mes: "您还没有登录哦",
					icon: 'none',
					timeout: 3000,
				})
			}
		},
		
		// 跳到首页
		goBack() {
			// this.$router.go(-1)
			const { id, hid, oprid } = this.$route.params
			this.$router.push({ name : 'opList', params: { id, hid }})
		},

		// 结案
		finish () {
			this.finishVisible = true
			this.finishText = ''
		},
		finishNot() {
			this.finishVisible = false
			this.finishText = ''
		},
		finishOk() {
			const { id, hid, oprid } = this.$route.params
			const CancelOrderComment = this.finishText
			const param = {
				OrderId: id,
				CancelOrderComment,
			}
			if (!CancelOrderComment) {
				this.$dialog.toast({
					mes: '请输入结案理由',
					icon: 'none',
					timeout: 3000,
				})
				return
			}
			this.pp('CancelOrder', param, res => {
				if (res.ret) {
					this.$dialog.toast({
						mes: '结案成功',
						icon: 'none',
						timeout: 3000,
					})
					this.$router.push({ name : 'index' })
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 3000,
					})
				}
			})
		},

		// 初始化
		init () {
			const id = this.$route.params.id
			const hid = this.$route.params.hid
			const param = {
				OrderId: id,
				HouseId: hid,
			}
			this.pp('GetConfirmHouseValuationParams', param, res => {
				if (res.ret) {
					const {
					 	C_HouseValuationImageUrl,
			            HouseValuationDateTime,
			            HouseValuationImageUrl,
			            HouseValuationOperatorId,
			            HouseValuationOperatorName,
					} = res.data || {}
					this.C_HouseValuationImageUrl = C_HouseValuationImageUrl
					this.HouseValuationDateTime = HouseValuationDateTime
					this.HouseValuationImageUrl = HouseValuationImageUrl
					this.HouseValuationOperatorId = HouseValuationOperatorId
					this.HouseValuationOperatorName = HouseValuationOperatorName
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 3000,
					})
				}
			})
		},

		// 确认
		sub () {
			const { id, hid, oprid } = this.$route.params
			const HouseValuationConfirmComment = this.HouseValuationConfirmComment

			const param = {
				OrderId: id,
				HouseId: hid,
				OperationRecordId: oprid,
				HouseValuationConfirmComment,
			}

			this.pp('CompleteConfirmHouseValuation', param, res => {
				if (res.ret) {
					// 跳到操作页面
					this.$router.push({ name : 'opList', params: { id, hid }})
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 3000,
					})
				}
			})
		},
	},


}
</script>

<style scoped>
.confirm-valuation {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.cv-img {
	width: 100%;
	height: auto;
	margin-bottom: .3rem;
}

.cv-img img {
	max-width: 100%;
	height: auto;
}

</style>
