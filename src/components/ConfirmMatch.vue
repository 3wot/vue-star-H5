<template>
	<div class="confirm-match">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="产品匹配确认" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="goBack">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>
			<!-- 脚 -->
			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>

        	 		<yd-button class="bottom-btn" size="large" @click.native="sub">提交</yd-button>	
        	 		<!-- <yd-button class="bottom-btn" size="large" @click.native="finish">完成</yd-button>	 -->

		        </yd-flexbox>
			</div>

			<!-- 内容 -->
			<yd-cell-group>
	            <yd-cell-item>
	                <span slot="left">操作人：</span>
	                <span slot="right">{{MatchProductOperatorName}}</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">操作时间：</span>
	                <span slot="right">{{MatchProductDateTime}}</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">匹配产品：</span>
	            </yd-cell-item>
	            <yd-cell-item v-for="(item,index) in MatchProducts" :key="index">
				    <yd-accordion slot="right">
				        <yd-accordion-item :title="item.Name +'（类别：'+ item.ClassName + '）'">
				            <div style="padding: .24rem;">
				                <p>{{item.Description}}</p>
				            </div>
				        </yd-accordion-item>
				    </yd-accordion>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">备注：</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <yd-textarea v-model="ConfirmMatchProductComment" slot="right" placeholder="请输入备注"></yd-textarea>
	            </yd-cell-item>
	        </yd-cell-group>


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
			ConfirmMatchProductComment: "",
            "MatchProductDateTime": "",
            "MatchProductOperatorId": "",
            "MatchProductOperatorName": "",
            "MatchProducts": [ 	
					{ "Id" : "", "Name": "银行产品1", "ClassName": "银行", "Description" : "这个是一段描述，可能很长~~s这个是一段描述，可能很长这个是一段描述，可能很长这个是一段描述，可能很长这个是一段描述，可能很长这个是一段描述，可能很长这个是一段描述，可能很长"},
					{ "Id" : "", "Name": "银行产品222", "ClassName": "银行22", "Description" : "这个是一段描述，可能很长~~s这个是一段描述，可能很长这个是一段描述，可能很长这个是一段描述，可能很长这个是一段描述，可能很长这个是一段描述，可能很长这个是一段描述，可能很长"},
				],
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
			// const hid = this.$route.params.hid
			const param = {
				OrderId: id,
				// HouseId: hid,
			}
			this.pp('GetConfirmProductMatchParams', param, res => {
				if (res.ret) {
					const {
			            MatchProductDateTime,
			            MatchProductOperatorId,
			            MatchProductOperatorName,
			            MatchProducts,
					} = res.data || {}
					this.MatchProductDateTime = MatchProductDateTime
					this.MatchProductOperatorId = MatchProductOperatorId
					this.MatchProductOperatorName = MatchProductOperatorName
					this.MatchProducts = MatchProducts
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 2000,
					})
				}
			})
		},

		// 确认
		sub () {
			const { id, oprid } = this.$route.params
			const ConfirmMatchProductComment = this.ConfirmMatchProductComment
			const param = {
				OrderId: id,
				OperationRecordId: oprid,
				ConfirmMatchProductComment,
			}
			this.pp('CompleteConfirmProductMatch', param, res => {
				if (res.ret) {
					// 跳到操作页面
					this.$router.push({ name : 'opList', params: { id, hid }})
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 2000,
					})
				}
			})
		},

	},


}
</script>

<style scoped>
.confirm-match {
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
