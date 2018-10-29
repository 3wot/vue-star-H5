<template>
	<div class="look">
		
		<yd-layout>
			<!-- 头 -->
			<yd-navbar slot="navbar" title="查看全部资料" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="gotoIndex">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>

			

			<!-- 内容 -->
			
			

		</yd-layout>

	</div>
</template>

<script>
// import Router from 'vue-router'
// import GETJSON from '../router/service'


export default {
	components:{

	},
	name: 'Look',
	data () {
		return {
			HouseValuationImageUrl, // 房屋估值报告照片url
			C_HouseValuationImageUrl, // 房屋估值报告照片缩略图url
			FirstAuditionImageUrl, // 一审报告照片url
			C_FirstAuditionImageUrl, // 一审报告照片缩略图url
			// OrderValidationImageUrl, // 立项报告照片url
			// C_OrderValidationImageUrl, // 立项报告照片缩略图url
			
			SecondAuditionImageUrl, // 二审照片url
			C_SecondAuditionImageUrl, // 二审照片缩略图url
			
			// MatchProducts, // 匹配产品数组
			// MatchProductOperatorName, // 匹配产品操作人
			// MatchProductDateTime, // 匹配产品操作时间
			HouseVisitImageUrls, // 下户照片url
			C_HouseVisitImageUrls, // 下户照片缩略图url
			
			IsLoanApproved, // 是否批贷通过
			LoanApprovalImageUrls, // 批贷函照片url
			C_LoanApprovalImageUrls, // 批贷函照片缩略图url
			LoanAmount, // 批贷金额
			LoanPeriodInMonth, // 批贷期限
			LoanInterest, // 批贷利率
			// LoanApprovalOperatorName, // 批贷(产品终审)操作人
			// LoanApprovalDateTime, // 批贷(产品终审)操作时间
			ContractImageUrls, // 合同照片url
			C_ContractImageUrls, // 合同照片缩略图url
			// ContractOperatorName, // 打印合同操作人
			// ContractDateTime, // 打印合同操作时间
			SignContractImageUrls, // 公证面签现场照片url
			C_SignContractImageUrls, // 公证面签现场照片缩略图url
			// SignContractOperatorName, // 公证面签操作人
			// SignContractDateTime, // 公证面签操作时间
			PledgeImageUrls, // 进抵现场照片url
			C_PledgeImageUrls, // 进抵现场照片缩略图url
			// PledgeOperatorName, // 进抵操作人
			// PledgeDateTime, // 进抵操作时间
			LoanReceivedImageUrls, // 放款现场照片url
			C_LoanReceivedImageUrls, // 放款现场照片缩略图url
			// LoanReceivedOperatorName, // 放款操作人
			// LoanReceivedDateTime, // 放款操作时间
		
			BorrowerIDNOImageUrls, // 客户身份证照片url
			BorrowerSpouseIDNOImageUrls, // 客户配偶身份证照片url
			PermanentResidenceBookImageUrls, // 客户户口本照片url
			SpousePermanentResidenceBookImageUrls, // 客户配偶户口本照片url
			MarriageCertificateImageUrls, // 客户婚姻证明材料照片url
			SpouseMarriageCertificateImageUrls, // 客户配偶婚姻证明材料照片url
			HouseCertificateImageUrls, // 房产证照片url
			RentalContractImageUrls, // 房屋租赁合同照片url
			BuyContractImageUrls, // 原始购房合同照片url
			DeedTaxInvoiceImageUrls, // 契税发票照片url
			LoanContractImageUrls, // 上家借款合同照片url
			LoanPaidOffCertificateImageUrls, // 上家结清证明照片url
			BankAccountStatementImageUrls, // 银行流水照片url
			PersonalCreditReportImageUrls, // 客户征信报告照片url
			SpousePersonalCreditReportImageUrls, // 客户配偶征信报告照片url
			CompanyLicenseImageUrl, // 公司营业执照副本照片url
			CompanyCreditReportImageUrls, // 企业征信照片url
			CompanyBankAccountStatementImageUrls, // 对公流水照片url
			BuySellContractImageUrls, // 购销合同照片url
			GuarantorProofDocumentImageUrls, // 担保人财产共有人同意提供担保的书面文件照片url
			BankCardImageUrl, // 还款卡照片url
			CompanyHoldingCertificateImageUrls, // 实控人证明照片url
			CompanyFinancialStatementImageUrls, // 企业财务报表照片url
			LawsuitFinishCertificateImageUrls, // 诉讼结案证明照片url
			OtherCertificateImageUrls, // 其它照片url

			C_BorrowerIDNOImageUrls, // 客户身份证照片缩略图url
			C_BorrowerSpouseIDNOImageUrls, // 客户配偶身份证照片缩略图url
			C_PermanentResidenceBookImageUrls, // 客户户口本照片缩略图url
			C_SpousePermanentResidenceBookImageUrls, // 客户配偶户口本照片缩略图url
			C_MarriageCertificateImageUrls, // 客户婚姻证明材料照片缩略图url
			C_SpouseMarriageCertificateImageUrls, // 客户配偶婚姻证明材料照片缩略图url
			C_HouseCertificateImageUrls, // 房产证照片缩略图url
			C_RentalContractImageUrls, // 房屋租赁合同照片缩略图url
			C_BuyContractImageUrls, // 原始购房合同照片缩略图url
			C_DeedTaxInvoiceImageUrls, // 契税发票照片缩略图url
			C_LoanContractImageUrls, // 上家借款合同照片缩略图url
			C_LoanPaidOffCertificateImageUrls, // 上家结清证明照片缩略图url
			C_BankAccountStatementImageUrls, // 银行流水照片缩略图url
			C_PersonalCreditReportImageUrls, // 客户征信报告照片缩略图url
			C_SpousePersonalCreditReportImageUrls, // 客户配偶征信报告照片缩略图url
			C_CompanyLicenseImageUrl, // 公司营业执照副本照片缩略图url
			C_CompanyCreditReportImageUrls, // 企业征信照片缩略图url
			C_CompanyBankAccountStatementImageUrls, // 对公流水照片缩略图url
			C_BuySellContractImageUrls, // 购销合同照片缩略图url
			C_GuarantorProofDocumentImageUrls, // 担保人财产共有人同意提供担保的书面文件照片缩略图url
			C_BankCardImageUrl, // 还款卡照片缩略图url
			C_CompanyHoldingCertificateImageUrls, // 实控人证明照片缩略图url
			C_CompanyFinancialStatementImageUrls, // 企业财务报表照片缩略图url
			C_LawsuitFinishCertificateImageUrls, // 诉讼结案证明照片缩略图url
			C_OtherCertificateImageUrls, // 其它照片缩略图url
		}
	},
	mounted () {
		
	},
	methods:{
		
		// 返回
		gotoIndex() {
			const { id, hid } = this.$route.params
            // 跳到首页
			this.$router.push({ name : 'opList',params: { id, hid }})
		},

		// 初始化
		init () {
			const { id, hid } = this.$route.params
			const param = {
				OrderId: id,
				// HouseId: hid,
			}
			this.pp('GetOrderInfo', param, res => {
				if (res.ret) {
					
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
.look {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}

</style>
