<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}
.upload-img {
	background-color: #ffffff;
	margin-bottom: .2rem;
}
.upload-title {
	height: 1rem;
	line-height:1rem;
	text-align: left;
	padding-left: .24rem;
	color: #555;
    font-size: .28rem;
    white-space: nowrap;
}
.upload-content {
	padding: 0 .24rem;
	text-align: left;
}
.upload-item {
	height: 1.2rem;
	width: 1.2rem;
	margin-right: .2rem;
	margin-bottom: .2rem;
	float: left;
	position: relative;
	background-color: #ededed;
}
.upload-item img {
	height: 100%;
	width: 100%;
} 
.dele-icon {
	position: absolute;
	top: -0.2rem;
	right: -0.2rem;
}
</style>
