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


        
		<div v-if="arr.length < maxNum" class="upload-item" @click="upload">
			<img src="../../static/plus.png" alt="">
		</div>

		<div style="clear: both;"></div>

	</div>

</div>
	
</template>

<script>
// import Router from 'vue-router'
import URLS from '../router/link'

export default {
	components:{
	// Button,Field
	},
	name: 'ImgUpload',
	props: ['title','arr','arrc','required', 'max'],
	data () {
		return {
			maxNum : 999,
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
			this.add('http://zx.youzhu.com/uploadfile/2017/0326/20170326104024702.jpg')
		},

		// 添加
		add (url) {
			this.arr.push(url)
			if (this.arrc) {
				this.arrc.push(url)
			}
			
		},


		// 删除图片
		dele(idx) {
			this.arr.splice(idx,1)
			if (this.arrc) {
				this.arrc.splice(idx,1)	
			}
			
		},



	},


}
</script>

<style scoped>


</style>
