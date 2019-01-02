<template>
	<div class="add-order">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="预报单" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="gotoIndex">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>

			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>
        	 		<yd-button class="bottom-btn" size="large" @click.native="sub">提交</yd-button>	
		        </yd-flexbox>
			</div>

			<!-- 内容 -->
			<!-- <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>所有权人：</span>
		            <yd-input slot="right" v-model="OwnerName" required :show-required-icon="false"  placeholder="请输入所有权人姓名"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>房屋坐落：</span>
		            <yd-input slot="right" v-model="Location" required :show-required-icon="false"  placeholder="请输入房屋地址"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">用途：</span>
		            <select slot="right" v-model="Usage">
		               	<option v-for="item in option1">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>房屋建筑面积：</span>
		            <yd-input type="number" v-model="Area" slot="right" required :show-required-icon="false"  placeholder="请输入房屋建筑面积(m²)"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group> -->

			<ImgUpload title="房产证全套照片" :arr="HouseCertificateImageUrls" :arrc="C_HouseCertificateImageUrls"></ImgUpload>  

	    </yd-layout>



	</div>
</template>

<script>
import URLS from '../router/link'
import ImgUpload from './ImgUpload'

export default {
	components:{
		ImgUpload
	},
	name: 'AddOrder',
	data () {
		return {
			option1 : ['无','住宅','别墅','商业','公寓','办公'],
			"OwnerName" : "",
			"Location" : "",
			"Usage" : "",
			"Area" : "",
			"HouseCertificateImageUrls" : [],
			"C_HouseCertificateImageUrls" : [],
		}
	},
	mounted () {

		// this.testLogin()
	},
	methods:{

		// 去首页
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

		// 提交
		sub () {
			const {
				OwnerName,
				Location,
				Usage,
				Area,
				HouseCertificateImageUrls,
				C_HouseCertificateImageUrls,
			} = this || {}

			if (HouseCertificateImageUrls.length && C_HouseCertificateImageUrls) {
				
			} else {
				this.$dialog.toast({
					mes: '请上传房产证照片！',
					icon: 'none',
					timeout: 3000,
				})
				return
			}
			let UPLOAD_TEMP = false
			Object.keys(UPLOAD_NUM).forEach(k => {
				if (UPLOAD_NUM[k]) {
					UPLOAD_TEMP = true
				}
			})
			if (UPLOAD_TEMP) {
				this.$dialog.toast({
					mes: '还有图片正在上传！',
					icon: 'none',
					timeout: 3000,
				})
				return
			}

			const param = {
				// OwnerName,
				// Location,
				// Usage,
				// Area,
				HouseCertificateImageUrls,
				C_HouseCertificateImageUrls,
			}
			// console.log(param)
			this.pp('NewOrder', param, res => {
				if (res.ret) {
					// 首页
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

	},


}
</script>

<style scoped>
.add-order {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}


</style>
