<template>
	
<div class="upload-img">
 	
 	<div class="upload-title">
 		<!-- <span v-if="required" class="danger">* </span> -->
 		<span>{{title}}</span>
 	</div>

	<div class="upload-content">
		<yd-lightbox :num="imgArr.length">
			<div v-for="(item,index) in imgArr" :key="index" class="upload-item">
				<!-- <img :src="item"> -->
				<yd-lightbox-img :src="item" :original="imgArrc[index]"></yd-lightbox-img>
			</div>
		</yd-lightbox>

		<div style="clear: both;"></div>

	</div>

</div>
	
</template>

<script>

export default {
	components:{
		
	},
	name: 'ImgList',

	props: ['title','arr','arrc'],

	data () {
		return {
			
		}
	},
	computed:{
		imgArr:function(){
			if (this.arrc) {
				if (typeof this.arrc == 'string') {
					let a = []
					a.push(this.arrc)
					return a
				} else {
					return this.arrc
				}	
			} else {
				return []
			}
		},
		imgArrc:function(){
			if (this.arr) {
				if (typeof this.arr == 'string') {
					let a = []
					a.push(this.arr)
					return a
				} else {
					return this.arr
				}	
			} else {
				return []
			}
		},
	},
	mounted () {
		
	},

	methods:{
	



	},


}
</script>

<style scoped>


</style>
