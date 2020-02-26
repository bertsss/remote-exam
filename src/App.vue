<template>
	<div class="app">
		<SideNavigation class="side-nav" />

		<div class="content">
			<Header class="header" />
			<router-view />
			<Footer />
		</div>
	</div>
</template>

<script>
import SideNavigation from '@/components/layouts/SideNavigation.vue'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer'

export default {
	name: 'app',
	components: {
		SideNavigation,
		Header,
		Footer
	},

	created() {
		// eslint-disable-next-line no-console
		console.log(process.env.VUE_APP_TITLE)
		// eslint-disable-next-line no-console
		console.log(process.env.NODE_ENV)
	}
}
</script>

<style lang="scss">
.app {
	@import url("https://rsms.me/inter/inter.css");
	font-family: "Inter", sans-serif;

	top: 0px;
	left: 0px;
	background: #f3f3f4 0% 0% no-repeat padding-box;
	opacity: 1;
	display: flex;

	button {
		border: none;
	}

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
