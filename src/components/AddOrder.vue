<template>
	<div class="index">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="预报单" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="gotoIndex">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>

			<!-- 内容 -->
			<yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>所有权人：</span>
		            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入所有权人姓名"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>房屋坐落：</span>
		            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入房屋地址"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left">用途：</span>
		            <select slot="right" v-model="select1">
		               	<option v-for="item in option1">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>房屋建筑面积：</span>
		            <yd-input type="number" slot="right" required :show-required-icon="false"  placeholder="请输入房屋建筑面积"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>

		   	<div class="upload-img">
	   		 	<div class="upload-title"><span class="danger">* </span>房屋建筑面积：</div>
		   		<div class="upload-content">
		   			<div v-for="item in option1" class="upload-item">
		   				<yd-icon class="dele-icon" color="#5871f5" size=".4rem" name="error"></yd-icon>
		   				<img src="item">
		   			</div>
		   			
		   			<div class="upload-item">
		   				添加
		   			</div>

		   			<div style="clear: both;"></div>

		   		</div>

		   	</div>
		 	

	    </yd-layout>



	</div>
</template>

<script>
// import Router from 'vue-router'
import URLS from '../router/link'

export default {
	components:{
	// Button,Field
	},
	name: 'AddOrder',
	data () {
		return {
			select1 : '住宅',
			option1 : ['无','住宅','别墅','商业','公寓','办公'],
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


	},


}
</script>

<style scoped>
.index {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.danger {
	color: red;
	display: none;
}


</style>
