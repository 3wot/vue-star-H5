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
        	 		<yd-button class="bottom-btn" size="large" @click.native="sub">提交</yd-button>	
		        </yd-flexbox>
			</div>

			<!-- 内容 -->

			<div v-for="(item,index) in arr" :key="index">
				<p v-if="item.Comment" class="item-comment">备注：
					<span class="comment">{{item.Comment}}</span>
				</p>
				<ImgUpload :title="item.Name" :arr="item.ImageUrls" :arrc="item.C_ImageUrls"></ImgUpload>
			</div>
			<!-- <ImgUpload title="客户配偶身份证照片" :arr="arr1"></ImgUpload>
			<ImgUpload title="户口本照片" :arr="arr2"></ImgUpload>
			<ImgUpload title="婚姻证明材料照片" :arr="arr3"></ImgUpload>
			<ImgUpload title="房产证照片" :arr="arr4"></ImgUpload>
			<ImgUpload title="房屋租赁合同照片" :arr="arr5"></ImgUpload>
			<ImgUpload title="原始购房合同照片" :arr="arr6"></ImgUpload>
			<ImgUpload title="契税发票" :arr="arr7"></ImgUpload>
			<ImgUpload title="上家借款合同" :arr="arr8"></ImgUpload>
			<ImgUpload title="上家结清证明" :arr="arr9"></ImgUpload>
			<ImgUpload title="银行流水" :arr="arr10"></ImgUpload>
			<ImgUpload title="征信报告" :arr="arr11"></ImgUpload>
			<ImgUpload title="公司营业执照副本" :arr="arr12"></ImgUpload>
			<ImgUpload title="企业征信" :arr="arr13"></ImgUpload>
			<ImgUpload title="对公流水" :arr="arr14"></ImgUpload>
			<ImgUpload title="购销合同" :arr="arr15"></ImgUpload>
			<ImgUpload title="担保人财产共有人同意提供担保的书面文件" :arr="arr16"></ImgUpload>
			<ImgUpload title="还款卡" :arr="arr17"></ImgUpload>
			<ImgUpload title="实控人证明" :arr="arr18"></ImgUpload>
			<ImgUpload title="企业财务报表" :arr="arr19"></ImgUpload>
			<ImgUpload title="诉讼结案证明" :arr="arr20"></ImgUpload>
			<ImgUpload title="其它" :arr="arr21"></ImgUpload> -->

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
	name: 'AddData',
	data () {
		return {
			arr: [],
		}
	},
	mounted () {
		this.init()
	},
	methods:{
		// 返回
		gotoIndex() {
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

		// 初始化
		init () {
			const { id, hid } = this.$route.params
			const param = {
				OrderId: id,
				HouseId: hid,
			}
			this.pp('GetSubmittedMaterialList', param, res => {
				if (res.ret) {
					this.arr = this.format(res.data)
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 3000,
					})
				}
			})
		},

		// 格式化
		format (arr) {
			if (arr && arr.length) {
				arr.map(item => {
					if (!item.ImageUrls) {
						item.ImageUrls = []
						item.C_ImageUrls = []
					}
				})
				return arr
			} else {
				return []
			}
		},

		// 提交
		sub () {
			const { id, hid } = this.$route.params
			const arr = this.arr
			let Materials = []
			arr.map(item => {
				// { "Id" : "1", "ImageUrls" : ["ImageUrl1", "ImageUrl2"], "C_ImageUrls" : ["ImageUrl1", "ImageUrl2"] },
				const { Id, ImageUrls, C_ImageUrls } = item || {}
				Materials.push({
					Id,
					ImageUrls,
					C_ImageUrls,
				})
			})
			const param = {
				OrderId: id,
				HouseId: hid,
				Materials,
			}
			this.pp('SupplementMaterial', param, res => {
				if (res.ret) {
					this.$dialog.toast({
						mes: "提交成功",
						icon: 'none',
						timeout: 3000,
					})
					this.$router.push({ name : 'opList',params: { id, hid }})
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
.add-data {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.item-comment {
	background-color: #fff;
	text-align: left;
	height: auto;
	line-height: .6rem;
	padding-left: .24rem;
	color: #555;
    font-size: .28rem;
    margin-bottom: -0.2rem;
}
.comment {
	color: #777;
}

</style>
