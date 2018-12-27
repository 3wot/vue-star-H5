<template>
	<div class="confirm-last-check">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="产品终审结果确认" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
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
	                <span slot="right">{{LoanApprovalOperatorName}}</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">操作时间：</span>
	                <span slot="right">{{LoanApprovalDateTime}}</span>
	            </yd-cell-item>
				<yd-cell-item>
	                <span slot="left">终审意见：</span>
	                <span slot="right">{{IsLoanApproved ? '通过' : '拒绝'}}</span>
	            </yd-cell-item>

	            <div v-if="IsLoanApproved">
	            	<ImgList title="产品供应方批贷函：" :arr="LoanApprovalImageUrls" :arrc="C_LoanApprovalImageUrls"></ImgList>

		            <yd-cell-item>
		                <span slot="left">批贷金额(万元)：</span>
		                <span slot="right">{{LoanAmount}}</span>
		            </yd-cell-item>
		            <yd-cell-item>
		                <span slot="left">批贷期限(月)：</span>
		                <span slot="right">{{LoanPeriodInMonth}}</span>
		            </yd-cell-item>
		            <yd-cell-item>
		                <span slot="left">批贷月利率(%)：</span>
		                <span slot="right">{{LoanInterest}}</span>
		            </yd-cell-item>

	            </div>

	            <div v-if="!IsLoanApproved">
	            	<yd-cell-item >
		                <span slot="left">拒绝理由：</span>
		            </yd-cell-item>
		            <yd-cell-item>
			            <yd-textarea slot="right" :readonly="true" v-model="LoanRejectionComment" placeholder="无"></yd-textarea>
			        </yd-cell-item>	
	            </div>

	        </yd-cell-group>

	        <yd-cell-group>
	        	<yd-cell-item >
	                <span slot="left">产品终审确认备注：</span>
	            </yd-cell-item>
	            <yd-cell-item>
		            <yd-textarea slot="right" v-model="LoanApprovalConfirmComment" placeholder="请输入产品终审确认备注"></yd-textarea>
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
import ImgUpload from './ImgUpload'
import ImgList from './ImgList'



export default {
	components:{
		ImgUpload,
		ImgList,
	},
	name: 'ConfirmFirstCheck',
	data () {
		return {

			"C_LoanApprovalImageUrls": [],
            "IsLoanApproved": false,
            "LoanAmount": "",
            "LoanApprovalDateTime": "",
            "LoanApprovalImageUrls": [],
            "LoanApprovalOperatorId": "",
            "LoanApprovalOperatorName": "",
            "LoanInterest": "",
            "LoanPeriodInMonth": "",

            LoanRejectionComment:"",
            finishVisible: false,
            finishText: '',
            LoanApprovalConfirmComment: '',
		}
	},
	mounted () {
		this.init()
	},
	methods:{
		
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
			// const hid = this.$route.params.hid
			const param = {
				OrderId: id,
				// HouseId: hid,
			}
			this.pp('GetConfirmLoanApprovalParams', param, res => {
				if (res.ret) {
					const {
			            C_LoanApprovalImageUrls,
			            IsLoanApproved,
			            LoanAmount,

			            LoanApprovalDateTime,
			            LoanApprovalImageUrls,
			            LoanApprovalOperatorId,

			            LoanApprovalOperatorName,
			            LoanInterest,
			            LoanPeriodInMonth,
			            LoanRejectionComment,
					} = res.data || {}

					this.C_LoanApprovalImageUrls = C_LoanApprovalImageUrls
					this.IsLoanApproved = IsLoanApproved
					this.LoanAmount = parseInt(LoanAmount)

					this.LoanApprovalDateTime = LoanApprovalDateTime
					this.LoanApprovalImageUrls = LoanApprovalImageUrls
					this.LoanApprovalOperatorId = LoanApprovalOperatorId

					this.LoanApprovalOperatorName = LoanApprovalOperatorName
					this.LoanInterest = LoanInterest
					this.LoanPeriodInMonth = LoanPeriodInMonth
					this.LoanRejectionComment = LoanRejectionComment
					
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
			// const LoanRejectionComment = this.LoanRejectionComment
			const LoanApprovalConfirmComment = this.LoanApprovalConfirmComment
			if (!LoanApprovalConfirmComment) {
				this.$dialog.toast({
					mes: '请输入终审确认备注',
					icon: 'none',
					timeout: 3000,
				})
				return
			}
			const param = {
				OrderId: id,
				OperationRecordId: oprid,
				// LoanRejectionComment,
				LoanApprovalConfirmComment,
			}
			this.pp('CompleteConfirmLoanApproval', param, res => {
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
.confirm-last-check {
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
