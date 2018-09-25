<template>
	<div class="add-data">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="补充资料" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="gotoIndex">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>

			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>

        	 		<yd-button class="bottom-btn" size="large">提交</yd-button>	
        	 		<yd-button class="bottom-btn" size="large" @click.native="finish">完成</yd-button>	

		        </yd-flexbox>
			</div>

			<!-- 内容 -->
			<ImgUpload title="房产证照片" :arr="option2"></ImgUpload>

			<ImgUpload title="房产证照片" :arr=""></ImgUpload>

			<ImgUpload title="房产证照片" :arr="option2"></ImgUpload>

			<ImgUpload title="房产证照片" :arr="option2"></ImgUpload>

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
	name: 'AddData',
	data () {
		return {
			arr1 : [],
			arr2 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],

			arr1 : [],
			arr2 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			arr1 : [],
			// 客户配偶身份证照片
			// 户口本照片
			// 婚姻证明材料照片
			// 房产证照片
			// 房屋租赁合同照片
			// 原始购房合同照片
			// 契税发票
			// 上家借款合同
			// 上家结清证明
			// 银行流水

			// 征信报告
			// 公司营业执照副本
			// 企业征信
			// 对公流水
			// 购销合同
			// 担保人财产共有人同意提供担保的书面文件
			// 还款卡
			// 实控人证明
			// 企业财务报表
			// 诉讼结案证明

			// 其它

		}
	},
	mounted () {
		
	},
	methods:{
		gotoIndex() {
			this.$dialog.confirm({
                title: '提示',
                mes: '当前页面如有修改，将会丢失，你确定退出吗？',
                opts: () => {
                    // 跳到首页
					this.$router.push({ name : 'index' })
                }
            });
		},
		// 完成
		finish () {
			// 跳到首页
			this.$router.push({ name : 'index' })
		},


	},


}
</script>

<style scoped>
.add-data {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}


</style>
