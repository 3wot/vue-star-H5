<template>
	<div class="set-up">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="立项" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="goBack">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>

			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>

        	 		<yd-button class="bottom-btn" size="large" @click.native="sub">提交</yd-button>	
        	 		<!-- <yd-button class="bottom-btn" size="large" @click.native="finish">完成</yd-button>	 -->

		        </yd-flexbox>
			</div>

			<!-- 内容 -->

<!-- 			<yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">用途：</span>
		            <select slot="right" v-model="Usage">
		               	<option v-for="item in option1">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group> -->

			<yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>申请贷款金额(万元)：</span>
		            <yd-input slot="right" type="number" required v-model="ExpectedBorrowAmount"  placeholder="请输入申请贷款金额(万元)"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>申请贷款期限(月)：</span>
		            <yd-input slot="right" type="number" required v-model="ExpectedBorrowPeriodInMonth" placeholder="请输入申请贷款期限(月)"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
		    
		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>借款用途：</span>
		            <select slot="right" required v-model="BorrowUsage">
		               	<option v-for="item in option2">{{item}}</option>
		            </select>
		        </yd-cell-item>
		        <yd-cell-item v-if="BorrowUsage == '其他'">
		            <yd-textarea slot="right" required v-model="BorrowUsageReal" placeholder="请输入借款用途"></yd-textarea>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>利息还款来源：</span>
		            <select slot="right" v-model="InterestReturnSource">
		               	<option v-for="item in option3">{{item}}</option>
		            </select>
		        </yd-cell-item>
		        <yd-cell-item v-if="InterestReturnSource == '其他'">
		            <yd-textarea slot="right" required v-model="InterestReturnSourceReal" placeholder="请输入利息还款来源"></yd-textarea>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>本金还款来源：</span>
		            <select slot="right" required v-model="PrincipalReturnSource">
		               	<option v-for="item in option4">{{item}}</option>
		            </select>
		        </yd-cell-item>
		        <yd-cell-item v-if="PrincipalReturnSource == '其他'">
		            <yd-textarea slot="right" required v-model="PrincipalReturnSourceReal" placeholder="请输入本金还款来源"></yd-textarea>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>共有情况：</span>
		            <select slot="right" required v-model="ShareOwnerInfo">
		               	<option v-for="item in option5">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>抵押物现状：</span>
		            <select slot="right" required v-model="PledgeInfo">
		               	<option v-for="item in option6">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>抵押状况：</span>
		            <select slot="right" required v-model="IsPledged">
		               	<option v-for="item in option7" :value="item.value">{{item.title}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>


		    <div v-if="IsPledged">

		    	<yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>抵押机构：</span>
			            <select slot="right" required v-model="PledgeOrgnization">
			               	<option v-for="item in option10">{{item}}</option>
			            </select>
			        </yd-cell-item>
			    </yd-cell-group>

		    	<yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>抵押金额(万元)：</span>
			            <yd-input slot="right" required v-model="PledgePrice"  placeholder="请输入抵押金额(万元)"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

				<yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>是否结清：</span>
			            <select slot="right" required v-model="IsLoanPaidOff">
			               	<option v-for="item in option8" :value="item.value">{{item.title}}</option>
			            </select>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>是否转单：</span>
			            <select slot="right" required v-model="IsZhuanDan">
			               	<option v-for="item in option8" :value="item.value">{{item.title}}</option>
			            </select>
			        </yd-cell-item>
			    </yd-cell-group>
		    	
		    </div>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left">是否有公司：</span>
		            <span slot="right">{{HasCompany ? '有' : '无'}}</span>
		        </yd-cell-item>
		    </yd-cell-group>

		    <div v-if="HasCompany">

		    	<yd-cell-group>
			        <yd-cell-item>
			            <span slot="left">企业统一社会信用代码：</span>
			            <!-- <yd-input slot="right" v-model="CompanySecurityIDNO"  placeholder="请输入企业统一社会信用代码"></yd-input> -->
			            <span slot="right">{{CompanySecurityIDNO || '-'}}</span>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left">企业电话：</span>
			            <yd-input slot="right" v-model="CompanyPhone"  placeholder="请输入企业电话"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>企业法定代表人姓名：</span>
			            <span slot="right">{{CompanyLegalPersonName}}</span>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left">企业法人身份证号：：</span>
			            <yd-input slot="right" required v-model="CompanyLegalPersonIDNO"  placeholder="请输入企业法人身份证号"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

				<ImgUpload title="公司营业执照副本" required="true" :max="1" :arr="CompanyLicenseImageUrl" :arrc="C_CompanyLicenseImageUrl"></ImgUpload>

				<ImgUpload title="企业章程" :arr="CompanyArticlesImageUrls" :arrc="C_CompanyArticlesImageUrls"></ImgUpload>

		    </div>

			<!-- <ImgUpload title="户口本" :arr="arr3"></ImgUpload> -->
			<!-- <ImgUpload title="婚姻证明材料" :arr="arr4"></ImgUpload> -->
			<ImgUpload title="银行流水" :arr="BankAccountStatementImageUrls" :arrc="C_BankAccountStatementImageUrls"></ImgUpload>
			<!-- <ImgUpload title="征信报告" :arr="arr6"></ImgUpload> -->

			<yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>客户需求侧重：</span>
		            <select slot="right" required v-model="LoanPriority">
		               	<option v-for="item in option9">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>销售经理立项建议：</span>
		        </yd-cell-item>
		         <yd-cell-item>
		            <yd-textarea slot="right" required v-model="SaleOrderValidationComment" placeholder="请输入立项建议"></yd-textarea>
		        </yd-cell-item>
		    </yd-cell-group>

	    </yd-layout>

	</div>
</template>

<script>
import URLS from '../router/link'
import ImgUpload from './ImgUpload'

export default {
	components:{
		ImgUpload
	// Button,Field
	},
	name: 'SetUpProject',
	data () {
		return {

			// "Usage" : "住宅",
			// option1 : ['住宅','别墅','商业','公寓','办公'],

			"ExpectedBorrowAmount" : "",
			"ExpectedBorrowPeriodInMonth" : "",

			"BorrowUsage" : "",
			"BorrowUsageReal" : "",
			option2 : ['买车','买房','公司经营周转','企业经营','其他'],

			"InterestReturnSource" : "",
			"InterestReturnSourceReal" : "",
			option3 : ['工资收入','经营收入','企业应收账款','其他'],

			"PrincipalReturnSource" : "",
			"PrincipalReturnSourceReal" : "",
			option4 : ['卖房款','企业应收账款','其他'],

			"ShareOwnerInfo" : "单独所有",
			option5 : ['单独所有','共有'],

			"PledgeInfo" : "自住",
			option6 : ['自住','出租','空置'],

			"IsPledged" : false,
			option7 : [{title:'已抵押',value:true},{title:'未抵押',value:false}],

			"PledgeOrgnization" : "银行",
			option10: ['银行','信托','法人','自然人','其他'],

			"PledgePrice" : "",
			"IsLoanPaidOff" : false,
			"IsZhuanDan" : false,
			option8 : [{title:'是',value:true},{title:'否',value:false}],

			"HasCompany" : false, // 获取回来

			"CompanySecurityIDNO" : "",
			"CompanyPhone" : "",
			"CompanyLegalPersonName" : "",
			"CompanyLegalPersonIDNO" : "",

			"CompanyLicenseImageUrl" : [],
			"C_CompanyLicenseImageUrl" : [],
			"CompanyArticlesImageUrls" : [],
			"C_CompanyArticlesImageUrls" : [],
			
			
			"BankAccountStatementImageUrls" : [],
			"C_BankAccountStatementImageUrls" : [],
			
			"LoanPriority" : "效率优先",
			option9 : ['成本优先','效率优先','成数优先'],
			"SaleOrderValidationComment" : "",
		}

	},
	mounted () {
		this.init()
	},
	methods:{
		goBack() {
			const { id, hid } = this.$route.params
			this.$dialog.confirm({
                title: '提示',
                mes: '当前页面如有修改，将会丢失，你确定退出吗？',
                opts: () => {
                    // 跳到首页
					this.$router.push({ name : 'opList',params: { id, hid }})
                }
            });
		},

		// 完成
		finish () {
			// 跳到首页
			this.$router.push({ name : 'opList' })
		},

		// 初始化// 获取是否有公司
		init () {
			const id = this.$route.params.id
			const hid = this.$route.params.hid
			const param = {
				OrderId: id,
				HouseId: hid,
			}
			this.pp('GetOrderValidationParams', param, res => {
				if (res.ret) {
					const { HasCompany, CompanySecurityIDNO, CompanyLegalPersonName } = res.data || {}
					this.HasCompany = HasCompany
					this.CompanySecurityIDNO = CompanySecurityIDNO
					this.CompanyLegalPersonName = CompanyLegalPersonName

				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 3000,
					})
				}
			})
		},

		// 提交
		sub () {
			const { id, hid, oprid } = this.$route.params
			
			const OrderId = id
			const HouseId = hid
			const OperationRecordId = oprid

			const { 					
				ExpectedBorrowAmount,
				ExpectedBorrowPeriodInMonth,
				BorrowUsage,
				BorrowUsageReal,
				
				InterestReturnSource,
				InterestReturnSourceReal,
				
				PrincipalReturnSource,
				PrincipalReturnSourceReal,
				
				ShareOwnerInfo,
			
				PledgeInfo,
				
				IsPledged,
				
				PledgeOrgnization,
				
				PledgePrice,
				IsLoanPaidOff,
				IsZhuanDan,
				
				HasCompany, // 获取回来

				CompanySecurityIDNO,
				CompanyPhone,
				CompanyLegalPersonName,
				CompanyLegalPersonIDNO,

				CompanyLicenseImageUrl,
				C_CompanyLicenseImageUrl,
				CompanyArticlesImageUrls,
				C_CompanyArticlesImageUrls,
				
				BankAccountStatementImageUrls,
				C_BankAccountStatementImageUrls,
				
				LoanPriority,
				SaleOrderValidationComment,
			} = this
			const param = {
				OrderId,
				HouseId,
				OperationRecordId,
				ExpectedBorrowAmount:parseInt(ExpectedBorrowAmount*10000),
				ExpectedBorrowPeriodInMonth,
				BorrowUsage : BorrowUsage == '其他' ? BorrowUsageReal : BorrowUsage,
				InterestReturnSource : InterestReturnSource == '其他' ? InterestReturnSourceReal : InterestReturnSource,
				PrincipalReturnSource : PrincipalReturnSource == '其他' ? PrincipalReturnSourceReal : PrincipalReturnSource,
				ShareOwnerInfo,
				PledgeInfo,
				IsPledged,
				PledgeOrgnization,
				PledgePrice:parseInt(PledgePrice*10000),
				IsLoanPaidOff,
				IsZhuanDan,
				HasCompany, // 获取回来
				CompanySecurityIDNO,
				CompanyPhone,
				CompanyLegalPersonName,
				CompanyLegalPersonIDNO,
				CompanyLicenseImageUrl:CompanyLicenseImageUrl.join(),
				C_CompanyLicenseImageUrl:C_CompanyLicenseImageUrl.join(),
				CompanyArticlesImageUrls,
				C_CompanyArticlesImageUrls,
				BankAccountStatementImageUrls,
				C_BankAccountStatementImageUrls,
				LoanPriority,
				SaleOrderValidationComment,
			}
			// 拦截
			if (ExpectedBorrowAmount && ExpectedBorrowPeriodInMonth && param.BorrowUsage && param.InterestReturnSource && param.PrincipalReturnSource && ShareOwnerInfo && PledgeInfo && LoanPriority && SaleOrderValidationComment) {
			} else {
				this.$dialog.toast({
					mes: "请填写或者上传标红的项目！",
					icon: 'none',
					timeout: 3000,
				})
				return
			}
			if (IsPledged && !(PledgeOrgnization && PledgePrice)) {
				this.$dialog.toast({
					mes: "请填写或者上传标红的项目！",
					icon: 'none',
					timeout: 3000,
				})
				return
			}
			if (HasCompany && !(param.CompanyLicenseImageUrl && param.C_CompanyLicenseImageUrl)) {
				this.$dialog.toast({
					mes: "请填写或者上传标红的项目！",
					icon: 'none',
					timeout: 3000,
				})
				return
			}
			if (UPLOAD_NUM) {
				this.$dialog.toast({
					mes: '还有图片正在上传！',
					icon: 'none',
					timeout: 3000,
				})
				return
			}
			
			this.pp('OrderValidation', param, res => {
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
.set-up {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}


</style>
