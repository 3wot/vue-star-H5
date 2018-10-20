<template>
	
<div class="upload-img">
 	
 	<div class="upload-title">
 		<span v-if="required" class="danger">* </span>
 		<span>{{title}}</span>
 	</div>

	<div class="upload-content">
		<div v-for="(item,index) in imgArr" :key="index" class="upload-item">
			<!-- <yd-icon class="dele-icon" @click.native="dele(index)" color="#5871f5" size=".4rem" name="error"></yd-icon> -->
			<img :src="item">
			<!-- {{item}} -->
		</div>
		
<!-- 		<div v-if="imgArr.length < maxNum" class="upload-item" @click="upload">
			<img src="../../static/plus.png" alt="">
		</div> -->

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
	name: 'ImgList',
	props: ['title','arr'],
	data () {
		return {
			imgArr : [],
			

		}
	},
	mounted () {
		this.imgArr = this.arr
		
	},
	methods:{
	



	},


}
</script>

<style scoped>


</style>
