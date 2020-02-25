<template>
	<div class="side-nav">
		<div class="title">
			<div class="hexagon"></div>
			<h1>Packform</h1>
		</div>

		<div class="item-container">
			<div
				class="item"
				v-for="(item, key) in pages"
				:key="key"
			>
				<span
					@click="goto(item.route)"
					:class="{'active' : $route.path === item.route}"
				>
					{{ item.name }}
				</span>

				<ul
					v-if="item.children"
					class="children-container"
				>
					<li
						v-for="(item, key) in item.children"
						:key="key"
						@click="goto(item.route)"
					>
						<span :class="{'active' : $route.path === item.route}">{{ item.name }}</span>
					</li>
				</ul>

			</div>
		</div>
	</div>
</template>
<script>

export default {
	data () {
		return {
			pages: [
				{ name: 'Dashboard', route: '/dashboard' },

				{
					name: 'Customers',
					route: '/customers',
					children: [
						{ name: 'Orders', route: '/orders' },
						{ name: 'Companies', route: '/companies' },
						{ name: 'Users', route: '/users' },
						{ name: 'Price Lists', route: '/price-lists' }
					]
				},

				{ name: 'Suppliers', route: '/suppliers' },
				{ name: 'Catalog', route: '/catalog' },
			],

			active: '',
			child: ''
		}
	},

	methods: {
		goto (loc) {
			this.$router.push(loc)
		}
	}
}

</script>

<style lang="scss" scope>
.side-nav {
	.title {
		display: flex;
		align-content: center;
		justify-content: center;

		.hexagon {
			position: relative;
			width: 33px;
			height: 19.05px;
			background-color: #4c30bf;
			margin: 9.53px 0;
			margin-top: 20px;
			margin-right: 15px;
		}

		.hexagon:before,
		.hexagon:after {
			content: "";
			position: absolute;
			width: 0;
			border-left: 16.5px solid transparent;
			border-right: 16.5px solid transparent;
		}

		.hexagon:before {
			bottom: 100%;
			border-bottom: 9.53px solid #4c30bf;
		}

		.hexagon:after {
			top: 100%;
			width: 0;
			border-top: 9.53px solid #4c30bf;
		}

		h1 {
			color: #111111;
		}
	}

	.item-container {
		// margin-left: 80px;

		.item {
			padding: 13px 0 13px 70px;
			cursor: pointer;
			color: #7d7d7d;
			font-size: 16px;

			span {
				padding-left: 20px;
				&.active {
					border-left: #593ec2 4px solid;
					color: #333333;
				}
			}

			.children-container {
				list-style: none;
				color: #7d7d7d;

				li {
					padding: 13px 0px;

					.active {
						color: #333333;
						border-left: #593ec2 4px solid;
						padding-left: 20px;
					}
				}
			}

			&.active {
				border-left: #593ec2 4px solid;
				color: #333333;
			}
		}
	}
}
</style>