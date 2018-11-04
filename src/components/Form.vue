<template>
	<div class="index">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="正式报单" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="goBack">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>

			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>

        	 		<yd-button class="bottom-btn" size="large" @click.native="sub">提交</yd-button>	
        	 		<!-- <yd-button class="bottom-btn" size="large" @click.native="finish">完成</yd-button> -->

		        </yd-flexbox>
			</div>

			<!-- 内容 -->
			<yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>客户姓名：</span>
		            <yd-input slot="right" required v-model="BorrowerName" placeholder="请输入客户姓名"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>客户身份证号：</span>
		            <yd-input slot="right" :class="{'input-danger': ageTemp }" required v-model="BorrowerIDNO" placeholder="请输入客户身份证号"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>客户电话：</span>
		            <yd-input slot="right" required v-model="BorrowerMobile" placeholder="请输入客户电话"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left"><span class="danger">* </span>婚姻状况：</span>
		            <select slot="right" required v-model="BorrowerMarriageStatus">
		               	<option v-for="item in option1">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>

		    <div v-if="BorrowerMarriageStatus == '已婚'">

		    	<yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>配偶姓名：</span>
			            <yd-input slot="right" required v-model="BorrowerSpouseName" placeholder="请输入配偶姓名"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>配偶身份证号：</span>
			            <yd-input slot="right" required v-model="BorrowerSpouseIDNO"  placeholder="请输入配偶身份证号"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>配偶电话：</span>
			            <yd-input slot="right" required v-model="BorrowerSpouseMobile" placeholder="请输入配偶电话"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

		    </div>

		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left"><span class="danger">* </span>是否有公司：</span>
		            <yd-switch slot="right" v-model="HasCompany"></yd-switch>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group v-if="HasCompany">
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>企业名称：</span>
		            <yd-input slot="right" v-model="CompanyName" required  placeholder="请输入企业名称"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>

		    <ImgUpload required="1" title="客户身份证照片" :arr="BorrowerIDNOImageUrls" :arrc="C_BorrowerIDNOImageUrls"></ImgUpload>
		    <ImgUpload title="客户户口本照片" :arr="PermanentResidenceBookImageUrls" :arrc="C_PermanentResidenceBookImageUrls"></ImgUpload>
		    <ImgUpload required="1" title="客户婚姻证明材料照片" :arr="MarriageCertificateImageUrls" :arrc="C_MarriageCertificateImageUrls"></ImgUpload>
		    <ImgUpload required="1" title="客户征信报告照片" :arr="PersonalCreditReportImageUrls" :arrc="C_PersonalCreditReportImageUrls"></ImgUpload>
		    <ImgUpload title="配偶身份证照片" :arr="BorrowerSpouseIDNOImageUrls" :arrc="C_BorrowerSpouseIDNOImageUrls"></ImgUpload>
		    <ImgUpload title="配偶征信报告照片" :arr="SpousePersonalCreditReportImageUrls" :arrc="C_SpousePersonalCreditReportImageUrls"></ImgUpload>
		    <ImgUpload title="配偶户口本照片" :arr="SpousePermanentResidenceBookImageUrls" :arrc="C_SpousePermanentResidenceBookImageUrls"></ImgUpload>
			
	    </yd-layout>



	</div>
</template>

<script>
import ImgUpload from './ImgUpload'

export default {
	components:{
		ImgUpload
	},
	name: 'AddOrder',
	data () {
		return {
			option1: ['未婚','已婚','离异','丧偶'],
			// "OperationRecordId" : "4",
			"BorrowerName" : "",
			"BorrowerIDNO" : "",
			"BorrowerMobile" : "13888888888",
			"BorrowerMarriageStatus" : "",

			"BorrowerSpouseName" : "",
			"BorrowerSpouseIDNO" : "",
			"BorrowerSpouseMobile" : "",

			"HasCompany" : false,
			"CompanyName" : "",

			"BorrowerIDNOImageUrls" : [],
			"C_BorrowerIDNOImageUrls" : [],

			"BorrowerSpouseIDNOImageUrls" : [],
			"C_BorrowerSpouseIDNOImageUrls" : [],

			"PermanentResidenceBookImageUrls" : [],
			"C_PermanentResidenceBookImageUrls" : [],

			"SpousePermanentResidenceBookImageUrls" : [],
			"C_SpousePermanentResidenceBookImageUrls" : [],

			"PersonalCreditReportImageUrls" : [],
			"C_PersonalCreditReportImageUrls" : [],

			"MarriageCertificateImageUrls" : [],
			"C_MarriageCertificateImageUrls" : [],

			"SpousePersonalCreditReportImageUrls" : [],
			"C_SpousePersonalCreditReportImageUrls" : [],

		}
	},
	mounted () {
		
	},
	computed:{
		ageTemp:function(){
			const BorrowerIDNO = this.BorrowerIDNO
			if (BorrowerIDNO && BorrowerIDNO.length >= 14) {
				const year = BorrowerIDNO.slice(6,10)
				const mon = BorrowerIDNO.slice(10,12)
				const day = BorrowerIDNO.slice(12,14)
				const start = (+year + 18) + '/' + mon + '/'+ day
				const end = (+year + 65) + '/' + mon + '/'+ day
				const startTime = new Date(start).getTime()
				const endTime = new Date(end).getTime()
				const nowTime = new Date().getTime()
				console.log(start)
				if (nowTime<startTime || nowTime>endTime) {
					return true
				} else {
					return false
				}
			} else {
				return false
			}
		},
	},
	methods:{
		// 回退
		goBack() {
			// this.$router.go(-1)
			const { id, hid, oprid } = this.$route.params
			this.$router.push({ name : 'opList', params: { id, hid }})
		},

		// 提交
		sub () {
			const { id, hid, oprid } = this.$route.params
			
			const OrderId = id
			const OperationRecordId = oprid

			const { 
				BorrowerName,
				BorrowerIDNO,
				BorrowerMobile,
				BorrowerMarriageStatus,
				BorrowerSpouseName,
				BorrowerSpouseIDNO,
				BorrowerSpouseMobile,
				HasCompany,
				CompanyName,
				BorrowerIDNOImageUrls,
				C_BorrowerIDNOImageUrls,
				BorrowerSpouseIDNOImageUrls,
				C_BorrowerSpouseIDNOImageUrls,
				PermanentResidenceBookImageUrls,
				C_PermanentResidenceBookImageUrls,
				SpousePermanentResidenceBookImageUrls,
				C_SpousePermanentResidenceBookImageUrls,
				PersonalCreditReportImageUrls,
				C_PersonalCreditReportImageUrls,
				MarriageCertificateImageUrls,
				C_MarriageCertificateImageUrls,
				SpousePersonalCreditReportImageUrls,
				C_SpousePersonalCreditReportImageUrls,
			} = this
			// 拦截
			if (BorrowerName && BorrowerIDNO && BorrowerMobile && BorrowerMarriageStatus && BorrowerIDNOImageUrls.length && C_BorrowerIDNOImageUrls.length && MarriageCertificateImageUrls.length && C_MarriageCertificateImageUrls.length && PersonalCreditReportImageUrls.length && C_PersonalCreditReportImageUrls.length) {
			} else {
				this.$dialog.toast({
					mes: "请填写或者上传标红的项目！",
					icon: 'none',
					timeout: 3000,
				})
				return
			}
			if (BorrowerMarriageStatus == "已婚" && !(BorrowerSpouseName && BorrowerSpouseIDNO && BorrowerSpouseMobile)) {
				this.$dialog.toast({
					mes: "请填写或者上传标红的项目！",
					icon: 'none',
					timeout: 3000,
				})
				return
			}
			if (HasCompany && CompanyName=="") {
				this.$dialog.toast({
					mes: "请填写或者上传标红的项目！",
					icon: 'none',
					timeout: 3000,
				})
				return
			}

			const param = {
				OrderId,
				OperationRecordId,
				BorrowerName,
				BorrowerIDNO,
				BorrowerMobile,
				BorrowerMarriageStatus,
				BorrowerSpouseName,
				BorrowerSpouseIDNO,
				BorrowerSpouseMobile,
				HasCompany,
				CompanyName,
				BorrowerIDNOImageUrls,
				C_BorrowerIDNOImageUrls,
				BorrowerSpouseIDNOImageUrls,
				C_BorrowerSpouseIDNOImageUrls,
				PermanentResidenceBookImageUrls,
				C_PermanentResidenceBookImageUrls,
				SpousePermanentResidenceBookImageUrls,
				C_SpousePermanentResidenceBookImageUrls,
				PersonalCreditReportImageUrls,
				C_PersonalCreditReportImageUrls,
				MarriageCertificateImageUrls,
				C_MarriageCertificateImageUrls,
				SpousePersonalCreditReportImageUrls,
				C_SpousePersonalCreditReportImageUrls,
			}

			this.pp('SubmitBorrowerInfo', param, res => {
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

		// 完成
		finish () {
			// 跳到首页
			this.$router.push({ name : 'opList' })
		},


	},


}
</script>

<style scoped>
.index {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}


</style>
