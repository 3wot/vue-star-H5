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
<!-- 			<yd-cell-group v-if="CurrentOperationName">
		        <yd-cell-item type="label">
		            <span slot="left">当前操作：</span>
		            <span slot="right">{{CurrentOperationName}}</span>
		        </yd-cell-item>
		    </yd-cell-group> -->
		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">报单ID：</span>
		            <span slot="right">{{$route.params.id}}</span>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">客户电话：</span>
		            <span slot="right">{{BorrowerMobile}}</span>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">报单状态：</span>
		            <span slot="right">{{Status == 0 ? '进行中' : (Status == 1 ? '正常结案' : '中途结案')}}</span>
		        </yd-cell-item>
		    </yd-cell-group>
			<yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">最后操作：</span>
		            <span slot="right">{{LastOperationName}}</span>
		        </yd-cell-item>
		    </yd-cell-group>
			
			<ImgLook v-if="HouseValuationImageUrl" title="房屋估值报告：" :arr="HouseValuationImageUrl" :arrc="C_HouseValuationImageUrl"></ImgLook>
			<ImgLook v-if="FirstAuditionImageUrl" title="一审报告：" :arr="FirstAuditionImageUrl" :arrc="C_FirstAuditionImageUrl"></ImgLook>
			<yd-cell-group>
	             <yd-accordion>
			        <yd-accordion-item title="一审确认意见：">
			            <div style="padding-left: .48rem;">
			                <p class="p-left">{{FirstAuditionConfirmComment}}</p>
			            </div>
			        </yd-accordion-item>
			    </yd-accordion>
			</yd-cell-group>
			<yd-cell-group>
	             <yd-accordion>
			        <yd-accordion-item title="销售立项意见：">
			            <div style="padding-left: .48rem;">
			                <p class="p-left">{{SaleOrderValidationComment}}</p>
			            </div>
			        </yd-accordion-item>
			    </yd-accordion>
			</yd-cell-group>
			<!-- <ImgLook v-if="" title="立项报告" :arr="HouseValuationImageUrl" :arrc="C_HouseValuationImageUrl"></ImgLook> -->
			<ImgLook v-if="SecondAuditionImageUrl" title="二审：" :arr="SecondAuditionImageUrl" :arrc="C_SecondAuditionImageUrl"></ImgLook>
			
			<yd-cell-group>
	             <yd-accordion>
			        <yd-accordion-item title="二审意见：">
			            <div style="padding-left: .48rem;">
			                <p class="p-left">{{SecondAuditionComment}}</p>
			            </div>
			        </yd-accordion-item>
			    </yd-accordion>
			</yd-cell-group>
			<yd-cell-group>
	             <yd-accordion>
			        <yd-accordion-item title="二审确认意见：">
			            <div style="padding-left: .48rem;">
			                <p class="p-left">{{SecondAuditionConfirmComment}}</p>
			            </div>
			        </yd-accordion-item>
			    </yd-accordion>
			</yd-cell-group>
			<yd-cell-group>
	             <yd-accordion>
			        <yd-accordion-item title="联系产品供应方意见：">
			            <div style="padding-left: .48rem;">
			                <p class="p-left">{{ContactProductProviderComment}}</p>
			            </div>
			        </yd-accordion-item>
			    </yd-accordion>
			</yd-cell-group>
			

			<yd-cell-group v-if="MatchProducts">
	             <yd-accordion>
			        <yd-accordion-item title="匹配产品：">
			            <div style="padding-left: .48rem;">
			                <p class="p-left" v-for="(item,index) in MatchProducts" :key="index">{{item}}</p>
			            </div>
			        </yd-accordion-item>
			    </yd-accordion>
			</yd-cell-group>
			<yd-cell-group>
	             <yd-accordion>
			        <yd-accordion-item title="匹配产品确认意见：">
			            <div style="padding-left: .48rem;">
			                <p class="p-left">{{ConfirmMatchProductComment}}</p>
			            </div>
			        </yd-accordion-item>
			    </yd-accordion>
			</yd-cell-group>
			

			<ImgLook v-if="HouseVisitImageUrls" title="下户照片：" :arr="HouseVisitImageUrls" :arrc="C_HouseVisitImageUrls"></ImgLook>
			<yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">是否通过批贷：</span>
		            <span slot="right">{{IsLoanApproved ? '通过' : "未通过"}}</span>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group v-if="!IsLoanApproved">
	             <yd-accordion>
			        <yd-accordion-item title="贷款拒绝意见：">
			            <div style="padding-left: .48rem;">
			                <p class="p-left">{{LoanRejectionComment}}</p>
			            </div>
			        </yd-accordion-item>
			    </yd-accordion>
			</yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">批贷金额(万元)：</span>
		            <span slot="right">{{LoanAmount}}</span>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">批贷期限(月)：</span>
		            <span slot="right">{{LoanPeriodInMonth}}</span>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">批贷月利率(%)：</span>
		            <span slot="right">{{LoanInterest}}</span>
		        </yd-cell-item>
		    </yd-cell-group>
		    <ImgLook v-if="LoanApprovalImageUrls" title="批贷函：" :arr="LoanApprovalImageUrls" :arrc="C_LoanApprovalImageUrls"></ImgLook>
		    <ImgLook v-if="ContractImageUrls" title="合同照片：" :arr="ContractImageUrls" :arrc="C_ContractImageUrls"></ImgLook>
		    <ImgLook v-if="SignContractImageUrls" title="公证面签现场照片：" :arr="SignContractImageUrls" :arrc="C_SignContractImageUrls"></ImgLook>
		    <ImgLook v-if="PledgeImageUrls" title="进抵现场照片：" :arr="PledgeImageUrls" :arrc="C_PledgeImageUrls"></ImgLook>
		    <ImgLook v-if="LoanReceivedImageUrls" title="放款现场照片：" :arr="LoanReceivedImageUrls" :arrc="C_LoanReceivedImageUrls"></ImgLook>
		    
		    <ImgLook v-if="BorrowerIDNOImageUrls" title="客户身份证照片：" :arr="BorrowerIDNOImageUrls" :arrc="C_BorrowerIDNOImageUrls"></ImgLook>
		    <ImgLook v-if="BorrowerSpouseIDNOImageUrls" title="客户配偶身份证照片：" :arr="BorrowerSpouseIDNOImageUrls" :arrc="C_BorrowerSpouseIDNOImageUrls"></ImgLook>
		    <ImgLook v-if="PermanentResidenceBookImageUrls" title="客户户口本照片：" :arr="PermanentResidenceBookImageUrls" :arrc="C_PermanentResidenceBookImageUrls"></ImgLook>
		    <ImgLook v-if="SpousePermanentResidenceBookImageUrls" title="客户配偶户口本照片：" :arr="SpousePermanentResidenceBookImageUrls" :arrc="C_SpousePermanentResidenceBookImageUrls"></ImgLook>
		    <ImgLook v-if="MarriageCertificateImageUrls" title="客户婚姻证明材料照片：" :arr="MarriageCertificateImageUrls" :arrc="C_MarriageCertificateImageUrls"></ImgLook>

		    <ImgLook v-if="SpouseMarriageCertificateImageUrls" title="客户配偶婚姻证明材料照片：" :arr="SpouseMarriageCertificateImageUrls" :arrc="C_SpouseMarriageCertificateImageUrls"></ImgLook>
		    <ImgLook v-if="HouseCertificateImageUrls" title="房产证照片：" :arr="HouseCertificateImageUrls" :arrc="C_HouseCertificateImageUrls"></ImgLook>
		    <ImgLook v-if="RentalContractImageUrls" title="房屋租赁合同照片：" :arr="RentalContractImageUrls" :arrc="C_RentalContractImageUrls"></ImgLook>
		    <ImgLook v-if="BuyContractImageUrls" title="原始购房合同照片：" :arr="BuyContractImageUrls" :arrc="C_BuyContractImageUrls"></ImgLook>
		    <ImgLook v-if="DeedTaxInvoiceImageUrls" title="契税发票照片：" :arr="DeedTaxInvoiceImageUrls" :arrc="C_DeedTaxInvoiceImageUrls"></ImgLook>

		    <ImgLook v-if="LoanContractImageUrls" title="上家借款合同照片：" :arr="LoanContractImageUrls" :arrc="C_LoanContractImageUrls"></ImgLook>
			<ImgLook v-if="LoanPaidOffCertificateImageUrls" title="上家结清证明照片：" :arr="LoanPaidOffCertificateImageUrls" :arrc="C_LoanPaidOffCertificateImageUrls"></ImgLook>
		    <ImgLook v-if="BankAccountStatementImageUrls" title="银行流水照片：" :arr="BankAccountStatementImageUrls" :arrc="C_BankAccountStatementImageUrls"></ImgLook>
		    <ImgLook v-if="PersonalCreditReportImageUrls" title="客户征信报告照片：" :arr="PersonalCreditReportImageUrls" :arrc="C_PersonalCreditReportImageUrls"></ImgLook>
		    <ImgLook v-if="SpousePersonalCreditReportImageUrls" title="客户配偶征信报告照片：" :arr="SpousePersonalCreditReportImageUrls" :arrc="C_SpousePersonalCreditReportImageUrls"></ImgLook>

		    <ImgLook v-if="CompanyLicenseImageUrl" title="公司营业执照副本照片：" :arr="CompanyLicenseImageUrl" :arrc="C_CompanyLicenseImageUrl"></ImgLook>
		    <ImgLook v-if="CompanyCreditReportImageUrls" title="企业征信照片：" :arr="CompanyCreditReportImageUrls" :arrc="C_CompanyCreditReportImageUrls"></ImgLook>
		    <ImgLook v-if="CompanyBankAccountStatementImageUrls" title="对公流水照片：" :arr="CompanyBankAccountStatementImageUrls" :arrc="C_CompanyBankAccountStatementImageUrls"></ImgLook>
		    <ImgLook v-if="BuySellContractImageUrls" title="购销合同照片：" :arr="BuySellContractImageUrls" :arrc="C_BuySellContractImageUrls"></ImgLook>
		    <ImgLook v-if="GuarantorProofDocumentImageUrls" title="担保人财产共有人同意提供担保的书面文件：" :arr="GuarantorProofDocumentImageUrls" :arrc="C_GuarantorProofDocumentImageUrls"></ImgLook>

		    <ImgLook v-if="BankCardImageUrl" title="还款卡照片：" :arr="BankCardImageUrl" :arrc="C_BankCardImageUrl"></ImgLook>
		    <ImgLook v-if="CompanyHoldingCertificateImageUrls" title="实控人证明照片：" :arr="CompanyHoldingCertificateImageUrls" :arrc="C_CompanyHoldingCertificateImageUrls"></ImgLook>
		    <ImgLook v-if="CompanyFinancialStatementImageUrls" title="企业财务报表照片：" :arr="CompanyFinancialStatementImageUrls" :arrc="C_CompanyFinancialStatementImageUrls"></ImgLook>
		    <ImgLook v-if="LawsuitFinishCertificateImageUrls" title="诉讼结案证明照片：" :arr="LawsuitFinishCertificateImageUrls" :arrc="C_LawsuitFinishCertificateImageUrls"></ImgLook>
		    <ImgLook v-if="OtherCertificateImageUrls" title="其他照片：" :arr="OtherCertificateImageUrls" :arrc="C_OtherCertificateImageUrls"></ImgLook>

		</yd-layout>

	</div>
</template>

<script>
// import Router from 'vue-router'
import ImgLook from './ImgLook'


export default {
	components:{
		ImgLook,
	},
	name: 'Look',
	data () {
		return {
			LastOperationName: '',
			CurrentOperationName: '', // 当前操作名称,
			Status: '', // 报单状态: [], 0，正在进行中，1，正常结案，2，中途结案
			HouseValuationImageUrl: '', // 房屋估值报告照片url
			C_HouseValuationImageUrl: '', // 房屋估值报告照片缩略图url
			// HouseValuationOperatorName: [], // 房屋估值操作人名称
			// HouseValuationDateTime: [], // 房屋估值日期时间
			FirstAuditionImageUrl: '', // 一审报告照片url
			C_FirstAuditionImageUrl: '', // 一审报告照片缩略图url
			// FirstAuditionOperatorName: [], // 一审操作人名称
			// FirstAuditionImageDateTime: [], // 一审时间
			OrderValidationImageUrl: '', // 立项报告照片url
			C_OrderValidationImageUrl: '', // 立项报告照片缩略图url
			// OrderValidationOperatorName: [], // 立项操作人名称
			// OrderValidationDateTime: [], // 立项时间
			SecondAuditionImageUrl: '', // 二审照片url
			C_SecondAuditionImageUrl: '', // 二审照片缩略图url
			// SecondAuditionOperatorName: [], // 二审操作人名称
			// SecondAuditionDateTime: [], // 二审日期时间
			MatchProducts: [], // 匹配产品数组
			// MatchProductOperatorName: [], // 匹配产品操作人
			// MatchProductDateTime: [], // 匹配产品操作时间
			HouseVisitImageUrls: [], // 下户照片url
			C_HouseVisitImageUrls: [], // 下户照片缩略图url
			// HouseVisitOperatorName: [], // 下户操作人
			// HouseVisitDateTime: [], // 下户操作时间
			IsLoanApproved: '', // 是否批贷通过
			LoanApprovalImageUrls: [], // 批贷函照片url
			C_LoanApprovalImageUrls: [], // 批贷函照片缩略图url
			LoanAmount: '', // 批贷金额
			LoanPeriodInMonth: '', // 批贷期限
			LoanInterest: '', // 批贷利率
			// LoanApprovalOperatorName: [], // 批贷(产品终审)操作人
			// LoanApprovalDateTime: [], // 批贷(产品终审)操作时间
			ContractImageUrls: [], // 合同照片url
			C_ContractImageUrls: [], // 合同照片缩略图url
			// ContractOperatorName: [], // 打印合同操作人
			// ContractDateTime: [], // 打印合同操作时间
			SignContractImageUrls: [], // 公证面签现场照片url
			C_SignContractImageUrls: [], // 公证面签现场照片缩略图url
			// SignContractOperatorName: [], // 公证面签操作人
			// SignContractDateTime: [], // 公证面签操作时间
			PledgeImageUrls: [], // 进抵现场照片url
			C_PledgeImageUrls: [], // 进抵现场照片缩略图url
			// PledgeOperatorName: [], // 进抵操作人
			// PledgeDateTime: [], // 进抵操作时间
			LoanReceivedImageUrls: [], // 放款现场照片url
			C_LoanReceivedImageUrls: [], // 放款现场照片缩略图url
			// LoanReceivedOperatorName: [], // 放款操作人
			// LoanReceivedDateTime: [], // 放款操作时间
			
			BorrowerIDNOImageUrls: [], // 客户身份证照片url
			BorrowerSpouseIDNOImageUrls: [], // 客户配偶身份证照片url
			PermanentResidenceBookImageUrls: [], // 客户户口本照片url
			SpousePermanentResidenceBookImageUrls: [], // 客户配偶户口本照片url
			MarriageCertificateImageUrls: [], // 客户婚姻证明材料照片url

			SpouseMarriageCertificateImageUrls: [], // 客户配偶婚姻证明材料照片url
			HouseCertificateImageUrls: [], // 房产证照片url
			RentalContractImageUrls: [], // 房屋租赁合同照片url
			BuyContractImageUrls: [], // 原始购房合同照片url
			DeedTaxInvoiceImageUrls: [], // 契税发票照片url

			LoanContractImageUrls: [], // 上家借款合同照片url
			LoanPaidOffCertificateImageUrls: [], // 上家结清证明照片url
			BankAccountStatementImageUrls: [], // 银行流水照片url
			PersonalCreditReportImageUrls: [], // 客户征信报告照片url
			SpousePersonalCreditReportImageUrls: [], // 客户配偶征信报告照片url
			CompanyLicenseImageUrl: [], // 公司营业执照副本照片url
			CompanyCreditReportImageUrls: [], // 企业征信照片url
			CompanyBankAccountStatementImageUrls: [], // 对公流水照片url
			BuySellContractImageUrls: [], // 购销合同照片url
			GuarantorProofDocumentImageUrls: [], // 担保人财产共有人同意提供担保的书面文件照片url
			BankCardImageUrl: [], // 还款卡照片url
			CompanyHoldingCertificateImageUrls: [], // 实控人证明照片url
			CompanyFinancialStatementImageUrls: [], // 企业财务报表照片url
			LawsuitFinishCertificateImageUrls: [], // 诉讼结案证明照片url
			OtherCertificateImageUrls: [], // 其它照片url

			C_BorrowerIDNOImageUrls: [], // 客户身份证照片缩略图url
			C_BorrowerSpouseIDNOImageUrls: [], // 客户配偶身份证照片缩略图url
			C_PermanentResidenceBookImageUrls: [], // 客户户口本照片缩略图url
			C_SpousePermanentResidenceBookImageUrls: [], // 客户配偶户口本照片缩略图url
			C_MarriageCertificateImageUrls: [], // 客户婚姻证明材料照片缩略图url
			C_SpouseMarriageCertificateImageUrls: [], // 客户配偶婚姻证明材料照片缩略图url
			C_HouseCertificateImageUrls: [], // 房产证照片缩略图url
			C_RentalContractImageUrls: [], // 房屋租赁合同照片缩略图url
			C_BuyContractImageUrls: [], // 原始购房合同照片缩略图url
			C_DeedTaxInvoiceImageUrls: [], // 契税发票照片缩略图url
			C_LoanContractImageUrls: [], // 上家借款合同照片缩略图url
			C_LoanPaidOffCertificateImageUrls: [], // 上家结清证明照片缩略图url
			C_BankAccountStatementImageUrls: [], // 银行流水照片缩略图url
			C_PersonalCreditReportImageUrls: [], // 客户征信报告照片缩略图url
			C_SpousePersonalCreditReportImageUrls: [], // 客户配偶征信报告照片缩略图url
			C_CompanyLicenseImageUrl: [], // 公司营业执照副本照片缩略图url
			C_CompanyCreditReportImageUrls: [], // 企业征信照片缩略图url
			C_CompanyBankAccountStatementImageUrls: [], // 对公流水照片缩略图url
			C_BuySellContractImageUrls: [], // 购销合同照片缩略图url
			C_GuarantorProofDocumentImageUrls: [], // 担保人财产共有人同意提供担保的书面文件照片缩略图url
			C_BankCardImageUrl: [], // 还款卡照片缩略图url
			C_CompanyHoldingCertificateImageUrls: [], // 实控人证明照片缩略图url
			C_CompanyFinancialStatementImageUrls: [], // 企业财务报表照片缩略图url
			C_LawsuitFinishCertificateImageUrls: [], // 诉讼结案证明照片缩略图url
			C_OtherCertificateImageUrls: [], // 其它照片缩略图url


			BorrowerMobile: '',
			FirstAuditionConfirmComment: '',
			SaleOrderValidationComment: '',
			SecondAuditionComment: '',
			SecondAuditionConfirmComment: '',
			ContactProductProviderComment: '',
			ConfirmMatchProductComment: '',
			LoanRejectionComment: '',
		}
	},
	mounted () {
		this.init()
	},
	methods:{
		
		// 返回
		gotoIndex() {
			// const { id, hid } = this.$route.params
   //          // 跳到首页
			// this.$router.push({ name :'opList',params: { id, hid }})
			this.$router.go(-1)
		},

		// 格式化
		format (dd) {
			if (dd) {
				const kk = Object.keys(dd)
				kk.map(item => {
					if (dd[item] == null && item.indexOf('Url')!=-1) {
						dd[item] = []
					}
				})
				return dd
			}
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
					const formatData = this.format(res.data)
					const {
						LastOperationName,
						CurrentOperationName, // 当前操作名称,
						Status, // 报单状态, 0，正在进行中，1，正常结案，2，中途结案
						HouseValuationImageUrl, // 房屋估值报告照片url
						C_HouseValuationImageUrl, // 房屋估值报告照片缩略图url
						// HouseValuationOperatorName, // 房屋估值操作人名称
						// HouseValuationDateTime, // 房屋估值日期时间
						FirstAuditionImageUrl, // 一审报告照片url
						C_FirstAuditionImageUrl, // 一审报告照片缩略图url
						// FirstAuditionOperatorName, // 一审操作人名称
						// FirstAuditionImageDateTime, // 一审时间
						OrderValidationImageUrl, // 立项报告照片url
						C_OrderValidationImageUrl, // 立项报告照片缩略图url
						// OrderValidationOperatorName, // 立项操作人名称
						// OrderValidationDateTime, // 立项时间
						SecondAuditionImageUrl, // 二审照片url
						C_SecondAuditionImageUrl, // 二审照片缩略图url
						// SecondAuditionOperatorName, // 二审操作人名称
						// SecondAuditionDateTime, // 二审日期时间
						MatchProducts, // 匹配产品数组
						// MatchProductOperatorName, // 匹配产品操作人
						// MatchProductDateTime, // 匹配产品操作时间
						HouseVisitImageUrls, // 下户照片url
						C_HouseVisitImageUrls, // 下户照片缩略图url
						// HouseVisitOperatorName, // 下户操作人
						// HouseVisitDateTime, // 下户操作时间
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

						BorrowerMobile, // 客户电话
						FirstAuditionConfirmComment,
						SaleOrderValidationComment,
						SecondAuditionComment,
						SecondAuditionConfirmComment,
						ContactProductProviderComment,
						ConfirmMatchProductComment,
						LoanRejectionComment,
					} = formatData || {}
					this.LastOperationName = LastOperationName
					this.CurrentOperationName = CurrentOperationName // 当前操作名称,
					this.Status = Status // 报单状态, 0，正在进行中，1，正常结案，2，中途结案
					this.HouseValuationImageUrl = HouseValuationImageUrl // 房屋估值报告照片url
					this.C_HouseValuationImageUrl = C_HouseValuationImageUrl // 房屋估值报告照片缩略图url
		
					this.FirstAuditionImageUrl = FirstAuditionImageUrl // 一审报告照片url
					this.C_FirstAuditionImageUrl = C_FirstAuditionImageUrl // 一审报告照片缩略图url
				
					this.OrderValidationImageUrl = OrderValidationImageUrl // 立项报告照片url
					this.C_OrderValidationImageUrl = C_OrderValidationImageUrl // 立项报告照片缩略图url
				
					this.SecondAuditionImageUrl = SecondAuditionImageUrl // 二审照片url
					this.C_SecondAuditionImageUrl = C_SecondAuditionImageUrl // 二审照片缩略图url
				
					this.MatchProducts = MatchProducts // 匹配产品数组
					
					this.HouseVisitImageUrls = HouseVisitImageUrls // 下户照片url
					this.C_HouseVisitImageUrls = C_HouseVisitImageUrls // 下户照片缩略图url

					this.IsLoanApproved = IsLoanApproved // 是否批贷通过
					this.LoanApprovalImageUrls = LoanApprovalImageUrls // 批贷函照片url
					this.C_LoanApprovalImageUrls = C_LoanApprovalImageUrls // 批贷函照片缩略图url
					this.LoanAmount = parseInt(LoanAmount) // 批贷金额
					this.LoanPeriodInMonth = LoanPeriodInMonth // 批贷期限
					this.LoanInterest = LoanInterest // 批贷利率
										
					this.ContractImageUrls = ContractImageUrls // 合同照片url
					this.C_ContractImageUrls = C_ContractImageUrls // 合同照片缩略图url
					
					this.SignContractImageUrls = SignContractImageUrls // 公证面签现场照片url
					this.C_SignContractImageUrls = C_SignContractImageUrls // 公证面签现场照片缩略图url
					
					this.PledgeImageUrls = PledgeImageUrls // 进抵现场照片url
					this.C_PledgeImageUrls = C_PledgeImageUrls // 进抵现场照片缩略图url
					
					this.LoanReceivedImageUrls = LoanReceivedImageUrls // 放款现场照片url
					this.C_LoanReceivedImageUrls = C_LoanReceivedImageUrls // 放款现场照片缩略图url
					
					this.BorrowerIDNOImageUrls = BorrowerIDNOImageUrls // 客户身份证照片url
					this.BorrowerSpouseIDNOImageUrls = BorrowerSpouseIDNOImageUrls // 客户配偶身份证照片url
					this.PermanentResidenceBookImageUrls = PermanentResidenceBookImageUrls // 客户户口本照片url
					this.SpousePermanentResidenceBookImageUrls = SpousePermanentResidenceBookImageUrls // 客户配偶户口本照片url
					this.MarriageCertificateImageUrls = MarriageCertificateImageUrls // 客户婚姻证明材料照片url
					this.SpouseMarriageCertificateImageUrls = SpouseMarriageCertificateImageUrls // 客户配偶婚姻证明材料照片url
					this.HouseCertificateImageUrls = HouseCertificateImageUrls // 房产证照片url
					this.RentalContractImageUrls = RentalContractImageUrls // 房屋租赁合同照片url
					this.BuyContractImageUrls = BuyContractImageUrls // 原始购房合同照片url
					this.DeedTaxInvoiceImageUrls = DeedTaxInvoiceImageUrls // 契税发票照片url
					this.LoanContractImageUrls = LoanContractImageUrls // 上家借款合同照片url
					this.LoanPaidOffCertificateImageUrls = LoanPaidOffCertificateImageUrls // 上家结清证明照片url
					this.BankAccountStatementImageUrls = BankAccountStatementImageUrls // 银行流水照片url
					this.PersonalCreditReportImageUrls = PersonalCreditReportImageUrls // 客户征信报告照片url
					this.SpousePersonalCreditReportImageUrls = SpousePersonalCreditReportImageUrls // 客户配偶征信报告照片url
					this.CompanyLicenseImageUrl = CompanyLicenseImageUrl // 公司营业执照副本照片url
					this.CompanyCreditReportImageUrls = CompanyCreditReportImageUrls // 企业征信照片url
					this.CompanyBankAccountStatementImageUrls = CompanyBankAccountStatementImageUrls // 对公流水照片url
					this.BuySellContractImageUrls = BuySellContractImageUrls // 购销合同照片url
					this.GuarantorProofDocumentImageUrls = GuarantorProofDocumentImageUrls // 担保人财产共有人同意提供担保的书面文件照片url
					this.BankCardImageUrl = BankCardImageUrl // 还款卡照片url
					this.CompanyHoldingCertificateImageUrls = CompanyHoldingCertificateImageUrls // 实控人证明照片url
					this.CompanyFinancialStatementImageUrls = CompanyFinancialStatementImageUrls // 企业财务报表照片url
					this.LawsuitFinishCertificateImageUrls = LawsuitFinishCertificateImageUrls // 诉讼结案证明照片url
					this.OtherCertificateImageUrls = OtherCertificateImageUrls // 其它照片url

					this.C_BorrowerIDNOImageUrls = C_BorrowerIDNOImageUrls // 客户身份证照片缩略图url
					this.C_BorrowerSpouseIDNOImageUrls = C_BorrowerSpouseIDNOImageUrls // 客户配偶身份证照片缩略图url
					this.C_PermanentResidenceBookImageUrls = C_PermanentResidenceBookImageUrls // 客户户口本照片缩略图url
					this.C_SpousePermanentResidenceBookImageUrls = C_SpousePermanentResidenceBookImageUrls // 客户配偶户口本照片缩略图url
					this.C_MarriageCertificateImageUrls = C_MarriageCertificateImageUrls // 客户婚姻证明材料照片缩略图url
					this.C_SpouseMarriageCertificateImageUrls = C_SpouseMarriageCertificateImageUrls // 客户配偶婚姻证明材料照片缩略图url
					this.C_HouseCertificateImageUrls = C_HouseCertificateImageUrls // 房产证照片缩略图url
					this.C_RentalContractImageUrls = C_RentalContractImageUrls // 房屋租赁合同照片缩略图url
					this.C_BuyContractImageUrls = C_BuyContractImageUrls // 原始购房合同照片缩略图url
					this.C_DeedTaxInvoiceImageUrls = C_DeedTaxInvoiceImageUrls // 契税发票照片缩略图url
					this.C_LoanContractImageUrls = C_LoanContractImageUrls // 上家借款合同照片缩略图url
					this.C_LoanPaidOffCertificateImageUrls = C_LoanPaidOffCertificateImageUrls // 上家结清证明照片缩略图url
					this.C_BankAccountStatementImageUrls = C_BankAccountStatementImageUrls // 银行流水照片缩略图url
					this.C_PersonalCreditReportImageUrls = C_PersonalCreditReportImageUrls // 客户征信报告照片缩略图url
					this.C_SpousePersonalCreditReportImageUrls = C_SpousePersonalCreditReportImageUrls // 客户配偶征信报告照片缩略图url
					this.C_CompanyLicenseImageUrl = C_CompanyLicenseImageUrl // 公司营业执照副本照片缩略图url
					this.C_CompanyCreditReportImageUrls = C_CompanyCreditReportImageUrls // 企业征信照片缩略图url
					this.C_CompanyBankAccountStatementImageUrls = C_CompanyBankAccountStatementImageUrls // 对公流水照片缩略图url
					this.C_BuySellContractImageUrls = C_BuySellContractImageUrls // 购销合同照片缩略图url
					this.C_GuarantorProofDocumentImageUrls = C_GuarantorProofDocumentImageUrls // 担保人财产共有人同意提供担保的书面文件照片缩略图url
					this.C_BankCardImageUrl = C_BankCardImageUrl // 还款卡照片缩略图url
					this.C_CompanyHoldingCertificateImageUrls = C_CompanyHoldingCertificateImageUrls // 实控人证明照片缩略图url
					this.C_CompanyFinancialStatementImageUrls = C_CompanyFinancialStatementImageUrls // 企业财务报表照片缩略图url
					this.C_LawsuitFinishCertificateImageUrls = C_LawsuitFinishCertificateImageUrls // 诉讼结案证明照片缩略图url
					this.C_OtherCertificateImageUrls = C_OtherCertificateImageUrls // 其它照片缩略图url

					this.BorrowerMobile = BorrowerMobile // 客户电话
					this.FirstAuditionConfirmComment = FirstAuditionConfirmComment
					this.SaleOrderValidationComment = SaleOrderValidationComment
					this.SecondAuditionComment = SecondAuditionComment
					this.SecondAuditionConfirmComment = SecondAuditionConfirmComment
					this.ContactProductProviderComment = ContactProductProviderComment
					this.ConfirmMatchProductComment = ConfirmMatchProductComment
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
.p-left {
	height: .8rem;
	line-height: 0.8rem;
	text-align: left;
}
</style>
