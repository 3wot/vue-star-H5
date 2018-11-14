<template>
	<div class="login">
		<img class="bg" src="../../static/login.jpg">

		<div class="login-logo">
    		<img src="../../static/wlogo.png">
		</div>

		<div class="content-in">
        	<yd-cell-group class="m-t-h title-center" title="业务管理系统 1.0">
        		
		        <yd-cell-item>
		            <span slot="left">账号：</span>
		            <yd-input slot="right" required v-model="mobile" placeholder="请输入手机号"></yd-input>
		        </yd-cell-item>

		        <yd-cell-item>
		            <span slot="left">密码：</span>
		            <yd-input slot="right" type="password" required v-model="pwd" placeholder="请输入密码"></yd-input>
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
// import GETJSON from '../router/service'


export default {
	components:{
	// Button,Field
	},
	name: 'Login',
	data () {
		return {
			mobile: '',
			pwd: '',
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
			// console.log('记录名字')
			const data = {
				mobile: this.mobile,
				pwd: this.pwd
			}
			this.JCACHE.set('name', data)
		},

		// 获取名字和密码
		getName () {
			const data = this.JCACHE.get('name')
			// console.log('获取名字和密码',data)
			if (data) {
				const { mobile, pwd } = data
				this.mobile = mobile
				this.pwd = pwd	
			}
		},

		// 登录
		handleLogin () {
			const { pwd, mobile, remember } = this
			if (mobile && pwd) {
				const platform = "mobile"
				const param = {
					mobile,
					pwd,
					platform,
				}
				this.pp('Login', param, res => {
					if (res.ret) {
						const { 
							uid,
							token,
							OperatorRoleId,
							OperatorRoleName,
						} = res.data || {}

						USER_INFO.uid = uid
						USER_INFO.token = token
						USER_INFO.OperatorRoleId = OperatorRoleId
						USER_INFO.OperatorRoleName = OperatorRoleName
						
						window.sessionStorage.setItem('uid',uid)
						window.sessionStorage.setItem('token',token)
						window.sessionStorage.setItem('OperatorRoleId',OperatorRoleId)
						// 首页
						this.$router.push({ name : 'index' })
					} else {
						this.$dialog.toast({
							mes: res.msg,
							icon: 'none',
							timeout: 3000,
						})
					}
				})
				// 首页
				// this.$router.push({ name : 'index' })
				// 记住密码
				if (remember) {
					this.setName()
				}
			} else {
				this.$dialog.toast({
					mes: '请输入账号和密码',
					icon: 'none',
					timeout: 3000,
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
.login-logo {
	position: absolute;
	top: .8rem;
	left: 0px;
	right: 0px;
	text-align: center;
}
.login-logo img {
	width: 2rem;
	height: auto;
	margin: 0 auto;
}


</style>
