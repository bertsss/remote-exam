<template>
	<div class="app">
		<SideNavigation class="side-nav"/>

		<div class="content">
			<Header class="header" />
			<router-view />	
		</div>
	</div>
</template>

<script>
import SideNavigation from '@/components/layouts/SideNavigation.vue'
import Header from '@/components/layouts/Header.vue'

export default {
	name: 'app',
	components: {
		SideNavigation,
		Header
	}
}
</script>

<style lang="scss" scope>
.app {
	@import url('https://rsms.me/inter/inter.css');
	font-family: 'Inter', sans-serif;

	top: 0px;
	left: 0px;
	background: #F3F3F4 0% 0% no-repeat padding-box;
	opacity: 1;
	display: flex;

	.side-nav {
		width: 332px;
		height: 1008px;
	}

	.content {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		padding-right: 15px;
	}
}
</style>
