<template>
	<div class="confirm-first-check">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="初审确认" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="goBack">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>
			<!-- 脚 -->
			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>

        	 		<yd-button class="bottom-btn" size="large" @click.native="sub">确认</yd-button>	
        	 		<!-- <yd-button class="bottom-btn" size="large" @click.native="finish">完成</yd-button>	 -->

		        </yd-flexbox>
			</div>

			<!-- 内容 -->
			<yd-cell-group>
	            <yd-cell-item>
	                <span slot="left">操作人：</span>
	                <span slot="right">{{FirstAuditionOperatorName}}</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">操作时间：</span>
	                <span slot="right">{{FirstAuditionConfirmDateTime}}</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">初审报告：</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <img class="cv-img" slot="right" :src="FirstAuditionImageUrl">
	            </yd-cell-item>

	            <yd-cell-item>
	                <span slot="left">备注：</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <yd-textarea v-model="FirstAuditionConfirmComment" slot="right" placeholder="请输入备注"></yd-textarea>
	            </yd-cell-item>
	        </yd-cell-group>


	    </yd-layout>

	</div>
</template>

<script>


export default {
	components:{

	},
	name: 'ConfirmFirstCheck',
	data () {
		return {
			"C_FirstAuditionImageUrl": "",
            "FirstAuditionConfirmDateTime": "",
            "FirstAuditionImageUrl": "",
            "FirstAuditionOperatorId": "",
            "FirstAuditionOperatorName": "",

            FirstAuditionConfirmComment: '',
		}
	},
	mounted () {

		this.init()
	},
	methods:{
		// 跳到首页
		goBack() {
			this.$router.go(-1)
		},

		// 完成
		finish () {
			// 跳到首页
			this.$router.push({ name : 'opList' })
		},

		// 初始化
		init () {
			const id = this.$route.params.id
			const param = {
				OrderId: id,
			}
			this.pp('GetConfirmAuditBorrowerInfoParams', param, res => {
				if (res.ret) {
					const {
					 	C_FirstAuditionImageUrl,
					 	FirstAuditionConfirmDateTime,
					 	FirstAuditionImageUrl,
					 	FirstAuditionOperatorId,
					 	FirstAuditionOperatorName,
					} = res.data || {}
					this.C_FirstAuditionImageUrl = C_FirstAuditionImageUrl
					this.FirstAuditionConfirmDateTime = FirstAuditionConfirmDateTime
					this.FirstAuditionImageUrl = FirstAuditionImageUrl
					this.FirstAuditionOperatorId = FirstAuditionOperatorId
					this.FirstAuditionOperatorName = FirstAuditionOperatorName
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
			const OperationRecordId = oprid
			const FirstAuditionConfirmComment = this.FirstAuditionConfirmComment
			
			const param = {
				OrderId: id,
				OperationRecordId,
				FirstAuditionConfirmComment,
			}
			
			this.pp('CompleteConfirmAuditBorrowerInfo', param, res => {
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
.confirm-first-check {
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


</style>
