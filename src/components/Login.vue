<template>
	<div class="login">
		<!-- <img class="bg" src="../../static/login.jpg"> -->

		<div class="content-in">

			<yd-cell-group>
		        <yd-cell-item>
		            <span slot="left">用户名：</span>
		            <yd-input slot="right" required v-model="name" max="20" placeholder="请输入用户名"></yd-input>
		        </yd-cell-item>

		        <yd-cell-item>
		            <span slot="left">密码：</span>
		            <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
		        </yd-cell-item>
		    
		    </yd-cell-group>


		</div>

	</div>
</template>

<script>
// import Router from 'vue-router'

export default {
	components:{
	// Button,Field
	},
	name: 'Login',
	data () {
		return {
			name: '',
			password: '',
		}
	},
	mounted () {
		
		this.getCodeImg()
	},
	methods:{
		
		// 获取图片
		getCodeImg() {

		}

	},


}
</script>

<style scoped>
.login {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}

.login img.bg {
	position: absolute;
	left: 0px;
	top: 0px;
	height: 100%;
	width: 100%;
}

.login .content-in{
	padding: 20px;
}


</style>
