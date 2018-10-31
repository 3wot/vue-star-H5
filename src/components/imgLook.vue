<template>
	
<div class="upload-img">
 	
 	<div class="upload-title" @click="toggle">
 		<span>{{title}} ({{imgArr.length}}张)</span>
 		<span class="pull-right">
 			
			<yd-icon name="more" color="#555" size="0.3rem"></yd-icon>
 		</span>
 	</div>

	<div class="upload-content" v-if="imgArr.length && showTemp">
		<yd-lightbox :num="imgArr.length">
			<div v-for="(item,index) in imgArr" :key="index" class="upload-item">
				<!-- <img :src="item"> -->
				<yd-lightbox-img :src="item" :original="arr[index]"></yd-lightbox-img>
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
			showTemp: false,
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
	},
	mounted () {
		
	},

	methods:{
		// 控制
		toggle () {
			this.showTemp = !this.showTemp
		},
		
	},


}
</script>

<style scoped>


</style>
