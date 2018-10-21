<template>
	
<div class="upload-img">
 	
 	<div class="upload-title">
 		<!-- <span v-if="required" class="danger">* </span> -->
 		<span>{{title}}</span>
 	</div>

	<div class="upload-content">
		<div v-for="(item,index) in imgArr" :key="index" class="upload-item">
			<img :src="item">
		</div>

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
