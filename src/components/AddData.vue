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
        	 		<yd-button class="bottom-btn" size="large" type="danger" @click.native="finish">结案</yd-button>
		        </yd-flexbox>
			</div>

			<!-- 内容 -->

			<div v-for="(item,index) in arr" :key="index">
				<p v-if="item.Comment" class="item-comment">备注：
					<span class="comment">{{item.Comment}}</span>
				</p>
				<ImgUpload :title="item.Name" :arr="item.ImageUrls" :arrc="item.C_ImageUrls"></ImgUpload>
			</div>
			
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
			finishVisible: false,
			finishText: '',
		}
	},
	mounted () {
		this.init()
	},
	methods:{
		
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
			let emptyTemp = false // 非空标志位
			arr.map(item => {
				// { "Id" : "1", "ImageUrls" : ["ImageUrl1", "ImageUrl2"], "C_ImageUrls" : ["ImageUrl1", "ImageUrl2"] },
				const { Id, ImageUrls, C_ImageUrls } = item || {}
				Materials.push({
					Id,
					ImageUrls,
					C_ImageUrls,
				})
				if (ImageUrls.length == 0 || C_ImageUrls == 0) { // 如果有空的
					emptyTemp = true
				}
			})
			if (emptyTemp) {
				this.$dialog.toast({
					mes: '您还有资料未补充，请补充后提交',
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
