<template>
	<div class="home">
		<div class="header">
			<div class="customer-container">
				<div class="customer-name">
					<span class="label">Customer:
						<span class="name">Pro Industrial</span>
						<font-awesome-icon
							icon="info-circle"
							class="info"
						/>
					</span>
				</div>

				<div class="info-container">
					<div class="info">
						<span class="label">Customer PO: <span class="name">Ordering for Christmas Event</span></span>
					</div>

					<div class="packform-container">
						<span class="label">Packform reference: <span class="reference">#474733</span></span>
					</div>
				</div>
			</div>

			<div class="customer-table">
				<div class="head">Aug 13, 2018 - Aug 13, 2019 <span class="edit">(Edit)</span></div>
				<div class="table-info">
					<div class="total-spend">
						<h5>Total spend</h5>
						<span>$1,294,000.00</span>
					</div>

					<div class="margin-dollar">
						<h5>Margin $</h5>
						<span>$107,500.00</span>
					</div>

					<div class="margin-percent">
						<h5>Margin %</h5>
						<div class="percent-container">39.76%</div>
					</div>
				</div>
			</div>
		</div>

		<div class="tab-container">
			<div
				v-for="(item, key) in tabs"
				:key="key"
				:class="{'active' : tab === item.name}"
				@click="tab = item.name"
			>
				<font-awesome-icon
					:icon="item.icon"
					class="icon"
				/>
				{{ item.name }}
			</div>
		</div>

		<div class="quote-section">
			<div
				v-for="(item, key) in quotes"
				:key="key"
				:class="{'active' : quote === item}"
				@click="quote = item"
			>
				{{ item }}
			</div>
		</div>

		<New
			v-if="quote === 'New quote request'"
			class="quote-container"
		/>
		<Requested
			v-if="quote === 'Requested quotes'"
			class="quote-container"
		/>
		<Accepted
			v-if="quote === 'Accepted quotes'"
			class="quote-container"
		/>
	</div>
</template>

<script>
import Accepted from '@/components/quotes/Accepted'
import New from '@/components/quotes/New'
import Requested from '@/components/quotes/Requested'

export default {
	name: 'home',

	components: {
		Accepted,
		New,
		Requested
	},

	data () {
		return {
			tab: 'Overview',
			tabs: [
				{ name: 'Overview', icon: 'eye' },
				{ name: 'Products', icon: 'box' },
				{ name: 'Purchasing', icon: 'hand-holding-usd' },
				{ name: 'Schedule', icon: 'calendar-alt' },
				{ name: 'Messages', icon: 'comment-alt' }
			],

			quote: 'Requested quotes',
			quotes: [
				'New quote request',
				'Requested quotes',
				'Accepted quotes'
			]
		}
	}
}
</script>

<style lang="scss" scope>
.home {
	background-color: #ffffff;
	box-shadow: 0px 3px 12px #00000029;
	border-radius: 4px 4px 0px 0px;
	font-family: "Inter", sans-serif;

	.header {
		padding: 20px;
		display: flex;
		flex: 1 1 auto;

		span {
			&.label {
				color: #7d7d7d;
				font-size: 20px;
			}

			&.name {
				color: #333333;
			}
		}

		.customer-container {
			.customer-name {
				margin-bottom: 5px;

				.info {
					margin-left: 15px;
					cursor: pointer;
				}
			}

			.info-container {
				display: flex;
				span {
					font-size: 14px;
				}

				.info {
					padding-right: 40px;
					border-right: #7d7d7d 1px solid;
				}

				.packform-container {
					padding-left: 10px;
					span {
						&.reference {
							color: #593ec2;
							cursor: pointer;
						}
					}
				}
			}
		}

		.customer-table {
			margin-left: auto;
			text-align: center;
			font-size: 14px;

			.head {
				border: #e4e4e4 1px solid;
				border-radius: 4px 4px 0px 0px;
				background-color: #f3f3f4;
				color: #7d7d7d;
				padding: 5px;

				.edit {
					text-decoration: underline;
					cursor: pointer;
				}
			}

			.table-info {
				display: flex;
				border: #e4e4e4 1px solid;
				border-radius: 0px 0px 4px 4px;

				div {
					padding: 15px;

					&:not(:last-child) {
						border-right: #e4e4e4 1px solid;
					}
				}

				h5 {
					color: #7d7d7d;
					font-weight: 400;
					font-size: 12px;
					margin: 0 0 10px 0;
				}

				span {
					color: #333333;
					font-weight: bold;
				}

				.percent-container {
					background-color: #28a745;
					border-radius: 4px;
					opacity: 1;
					padding: 5px;
					font-size: 12px;
					color: #ffffff;
				}
			}
		}
	}

	.tab-container {
		padding: 0 20px;
		font-size: 14px;
		color: #333333;
		display: flex;

		div {
			margin-right: 50px;
			padding: 10px 0;
			cursor: pointer;

			.icon {
				margin-right: 5px;
			}

			&.active {
				color: #593ec2;
				border-bottom: #593ec2 3px solid;
			}
		}
	}

	.quote-section {
		padding: 15px 30px;
		font-size: 14px;
		color: #7d7d7d;
		display: flex;
		background-color: #f3f3f4;

		div {
			padding: 0 20px;
			cursor: pointer;

			&.active {
				color: #593ec2;
			}
		}
	}

	.quote-container {
		padding: 20px 20px 0 20px;
	}
}
</style>