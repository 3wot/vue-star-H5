<template>
	
<div class="upload-img">
 	
 	<div class="upload-title">
 		<span v-if="required" class="danger">* </span>
 		<span>{{title}}</span>
 	</div>

	<div class="upload-content">
		<yd-lightbox :num="arr.length">
			<div v-for="(item,index) in arrc" :key="index" class="upload-item">
				<yd-icon class="dele-icon" @click.native="dele(index)" color="#5871f5" size=".4rem" name="error"></yd-icon>
				
				<!-- <img :src="item"> -->
				<yd-lightbox-img :src="item" :original="arr[index]"></yd-lightbox-img>
			</div>
		</yd-lightbox>


        
		<div v-if="arr.length < maxNum" class="upload-item input-none">
			<!-- <img src="../../static/plus.png" alt=""> -->
			<el-upload
				:action="uploadUrl"
				:multiple="true"
				:limit="10"
				:show-file-list="false"
				:auto-upload="true"
				:http-request="fnUploadRequest"
				
				>
				<img src="../../static/plus.png" alt="">
			</el-upload>
		</div>

		<div style="clear: both;"></div>

	</div>

</div>
	
</template>

<script>
// import Router from 'vue-router'
import Vue from 'vue'
import $ from 'jquery'
import { Upload } from 'element-ui'
Vue.use(Upload)

export default {
	components:{
	// Button,Field
		Upload,
	},
	name: 'ImgUpload',
	props: ['title','arr','arrc','required', 'max'],
	data () {
		return {
			maxNum : 999,
			uploadUrl: 'http://www.windant.com:9005/UpLoadFile.ashx',
		}
	},
	mounted () {
		if (this.max) {
			this.maxNum = this.max
		}
	},
	methods:{
		// 点击上传
		upload () {
			// this.add('http://zx.youzhu.com/uploadfile/2017/0326/20170326104024702.jpg')
		},

		fnUploadRequest (option) {
      		const that = this
      		

      		let fd = new FormData()
      		const file = option.file
      		const { uid, token } = USER_INFO
      		const OrderId = window.sessionStorage.getItem('OrderId') + ""
      		const name = this.randomStr(5)
      		if (uid && token && OrderId) {

      		} else {
      			that.$dialog.toast({
					mes: "您没有登录,请您重新登录",
					icon: 'none',
					timeout: 3000,
				})
      			return
      		}
			// 添加loading
      		const length = that.arr.length
      		that.arr.push('../../static/loading.gif')
      		that.arrc.push('../../static/loading.gif')

      		fd.append('uid', uid)
      		fd.append('token', token)
      		fd.append('OrderId', OrderId)
      		fd.append(name, file)
      		
      		$.ajax({
		        type: "POST",
		        url: 'http://www.windant.com:9005/UpLoadFile.ashx',
		        contentType: false,
		        processData:false,
            	mimeType:"multipart/form-data",
		        data: fd,
		        dataType: "json",
		        success: function (res) {
		            if (res.ret == 'ok') {
		            	if (res.data && res.data.length) {
		            		res.data.map(item => {
		            			that.add(item.OSSFileUrl,item.C_OSSFileUrl,length)
		            		})
		            	}
		            } else {
		            	that.$dialog.toast({
							mes: file.name + "上传失败:" + res.msg,
							icon: 'none',
							timeout: 3000,
						})
		            	that.arr.splice(length,1)
						if (that.arrc) {
							that.arrc.splice(length,1)	
						}
		            }
		        },
		        error: function (err) {
		            that.$dialog.toast({
						mes: err,
						icon: 'none',
						timeout: 3000,
					})
		            that.arr.splice(length,1)
					if (that.arrc) {
						that.arrc.splice(length,1)	
					}
		        }
		    });
			
		},

		randomStr (len) {
			len = len || 32;
			var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
			var maxPos = chars.length;
			var pwd = '';
			for (let i = 0; i < len; i++) {
				pwd += chars.charAt(Math.floor(Math.random() * maxPos));
			}
			return pwd;
		},
		// 添加
		add (url,urlc,index) {
			if (index < this.arr.length) { // 没问题
				this.arr.splice(index,1,url)
				if (this.arrc) {
					this.arrc.splice(index,1,urlc)
				}	
			} else { // 出现失败
				let idxTemp
				this.arr.map((item,idx) => {
					if (item == '../../static/loading.gif') {
						idxTemp = idx
					}
				})
				this.arr.splice(idxTemp,1,url)
				if (this.arrc) {
					this.arrc.splice(idxTemp,1,urlc)
				}
			}
			
		},
		// 删除图片
		dele(idx) {
			const OSSFileUrl = this.arr[idx]
			this.arr.splice(idx,1)
			if (this.arrc) {
				this.arrc.splice(idx,1)	
			}
			
			let fd = new FormData()
      		const { uid, token } = USER_INFO
      		fd.append('uid', uid)
      		fd.append('token', token)
      		fd.append('OSSFileUrl',OSSFileUrl)
			$.ajax({
		        type: "POST",
		        url: 'http://www.windant.com:9005/DeleteFile.ashx',
		       	contentType: false,
		        processData:false,
            	mimeType:"multipart/form-data",
		        data: fd,
		        dataType: "json",
		        success: function (res) {
		            if (res.ret == 'ok') {
						console.log('删除图片成功')
					} else {
						console.log('删除图片失败')
					}
		        },
		        error: function (err) {
		           	console.log('删除图片失败:',err)
		        }
		    });
		},



	},


}
</script>

<style scoped>


</style>
