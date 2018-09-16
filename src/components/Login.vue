<template>
	<div class="login">
		<img class="bg" src="../../static/login.jpg">

		<div class="content-in">

        	<yd-cell-group class="m-t-h">
		        <yd-cell-item>
		            <span slot="left">账号：</span>
		            <yd-input slot="right" required v-model="name" max="20" placeholder="请输入用户名"></yd-input>
		        </yd-cell-item>

		        <yd-cell-item>
		            <span slot="left">密码：</span>
		            <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
		        </yd-cell-item>

		        <yd-cell-item>
		            <span slot="left">记住密码</span>
		            <yd-switch slot="right" v-model="remember"></yd-switch>
		        </yd-cell-item>

		    </yd-cell-group>

		    
	        <yd-button size="large" shape="circle" @click.native="handleLogin" type="primary">登录</yd-button>
		    

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
			remember: false,
		}
	},
	mounted () {
		// 获取记录的名字和密码
		this.getName()
	},
	methods:{
		
		// 记录名字和密码
		setName () {
			console.log('记录名字')
		},

		// 获取名字和密码
		getName () {

		},

		// 登录
		handleLogin () {
			const { password, name, remember } = this
			if (name && password) {


				// 记住密码
				if (remember) {
					this.setName()
				}
			} else {
				this.$dialog.toast({
					mes: '请输入用户名和密码',
					icon: 'none',
					timeout: 2000,
				})
			}
		},



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

.b-r-3 {
	border-radius: 3px;
}

.m-t-h {
	margin-top: 50%;
}


</style>
