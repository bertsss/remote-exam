<template>
	<div class="quote-wrapper">
		<div class="header">
			<span
				class="title"
				@click="isHidden = !isHidden"
			>
				<font-awesome-icon
					icon="caret-down"
					class="caret"
				/>
				Quote from {{ quote.name }}
			</span>
			<span
				class="rank"
				v-if="quote.isAccredited"
			>
				<font-awesome-icon icon="star" /> Accredited
			</span>

			<div class="info-container">
				<div class="status">
					<span class="label">Status</span>
					<span class="name">{{ quote.status }}</span>
				</div>

				<div class="date-sent">
					<span class="label">Date sent</span>
					<span class="name">{{ quote.dateSent }}</span>
				</div>

				<div class="date-received">
					<span class="label">Date received</span>
					<span class="name">{{ quote.dateReceived }}</span>
				</div>
			</div>
		</div>

		<table v-if="!isHidden">

			<tr>
				<th>Products</th>
				<th>Quantity</th>
				<th class="orange">Buy / Unit</th>
				<th class="orange">Buy total</th>
				<th class="blue">Sell / Unit</th>
				<th class="blue">Sell total</th>
				<th>Margin $</th>
				<th>Margin %</th>
			</tr>

			<tbody
				v-for="(item, key) in quote.products"
				:key="key"
			>

				<tr class="item">
					<td rowspan="2">
						<div class="product">
							<img :src="item.img">
							<div>
								<h5 class="code">{{ item.code }}</h5>
								<span class="name">
									{{ item.name }}
									<font-awesome-icon
										icon="info-circle"
										class="info"
									/>
								</span>
								<span class="category">Category: {{ item.category }}</span>
							</div>
						</div>
					</td>
					<td rowspan="2">{{ item.qty }}</td>
					<td class="bold orange">{{ item.buyPerUnit | formatNumber }}</td>
					<td class="bold orange">{{ buyTotal(item) | formatNumber }}</td>
					<td class="bold blue">{{ item.sellPerUnit | formatNumber }}</td>
					<td class="bold blue">{{ sellTotal(item) | formatNumber }}</td>
					<td class="bold">
						{{ item.sellPerUnit > item.buyPerUnit ? '+' : '-' }}
						{{ Math.abs(marginDollar(buyTotal(item), sellTotal(item))) | formatNumber }}
					</td>
					<td>
						<div class="percent-container">{{ marginPercent(marginDollar(buyTotal(item), sellTotal(item)), sellTotal(item)) + '%' }}</div>
					</td>
				</tr>

				<tr>
					<td
						class="availability"
						colspan="2"
					>
						Availability: {{ item.availability }}
					</td>
					<td
						class="best-quote"
						colspan="4"
					>
						Last best quote: <span>{{ item.lastBestQuote | formatNumber }}</span>
					</td>
				</tr>
			</tbody>

			<tr>
				<td rowspan="2">
					<div class="product">
						<img src="https://cdn4.iconfinder.com/data/icons/business-finance-1-1/128/shipping-fast-512.png">
						<div>
							<h5 class="code">Shipping/Fuel</h5>
							<span class="name">
								Shipping Cost
								<font-awesome-icon
									icon="info-circle"
									class="info"
								/>
							</span>
						</div>
					</div>
				</td>
				<td>1</td>
				<td>-</td>
				<td>-</td>
				<td>-</td>
				<td>$0.00</td>
				<td class="bold">-</td>
				<td>-</td>
			</tr>
		</table>

		<table
			class="action-container"
			v-if="!isHidden"
		>
			<tr>
				<th>Actions</th>
				<th>Quote reference</th>
				<th>Buy total amount</th>
				<th>Sell total amount</th>
				<th>Margin $</th>
				<th>Margin %</th>
			</tr>
			<tr>
				<td>
					<div class="action-wrapper">
						<button
							class="view"
							@click="viewQuote()"
						>
							<font-awesome-icon icon="eye" />
							View quote
						</button>
						<button
							class="provide"
							@click="provide()"
						>
							<font-awesome-icon icon="hand-holding-usd" />
							Provide as supplier
						</button>
						<button
							class="cancel"
							@click="cancel()"
						>
							<font-awesome-icon icon="ban" />
							Cancel
						</button>
					</div>
				</td>
				<td>{{ quote.reference }}</td>
				<td class="bold">{{ buyTotalSum | formatNumber }}</td>
				<td class="bold">{{ sellTotalSum | formatNumber }}</td>
				<td class="bold">
					{{ Math.abs(marginDollarSum) | formatNumber }}
				</td>
				<td>
					<div class="percent-container">{{ marginPercentSum + '%' }}</div>
				</td>
			</tr>
		</table>

	</div>
</template>

<script>
export default {
	props: {
		quote: {
			type: Object,
			required: true
		}
	},

	data () {
		return {
			isHidden: false
		}
	},

	computed: {
		buyTotalSum () {
			let sum = 0
			this.quote.products.forEach(item => {
				sum += this.buyTotal(item)
			})
			return sum
		},

		sellTotalSum () {
			let sum = 0
			this.quote.products.forEach(item => {
				sum += this.sellTotal(item)
			})
			return sum
		},

		marginDollarSum () {
			let sum = 0
			this.quote.products.forEach(item => {
				sum += this.marginDollar(this.buyTotal(item), this.sellTotal(item))
			})
			return sum
		},

		marginPercentSum () {
			let sum = 0
			this.quote.products.forEach(item => {
				sum += parseFloat(this.marginPercent(this.marginDollar(this.buyTotal(item), this.sellTotal(item)), this.sellTotal(item)))
			})
			return (sum / this.quote.products.length).toFixed(2)
		}
	},

	methods: {
		buyTotal (item) {
			return item.qty * item.buyPerUnit
		},

		sellTotal (item) {
			return item.qty * item.sellPerUnit
		},

		marginDollar (buy, sell) {
			return sell - buy
		},

		marginPercent (margin, sell) {
			return ((margin / sell) * 100).toFixed(2)
		},

		viewQuote () {
			console.log('view quote')
		},

		provide () {
			console.log('provide')
		},

		cancel () {
			console.log('cancel')
		},
	}
}
</script>

<style lang="scss" scope>
.quote-wrapper {
	background: #ffffff 0% 0% no-repeat;
	box-shadow: 0px 3px 6px #00000014;
	border: 1px solid #e4e4e4;
	border-radius: 4px;
	opacity: 1;
	padding: 0;

	.header {
		display: flex;
		align-items: center;
		padding: 20px 10px;
		border-bottom: #e4e4e4 1px solid;

		.caret {
			margin-right: 10px;
		}

		.title {
			cursor: pointer;
			font-size: 20px;
			margin-right: 20px;
		}

		.rank {
			background-color: #593ec2;
			border-radius: 10px;
			opacity: 1;
			font-size: 12px;
			color: #ffffff;
			padding: 5px 10px;
		}

		.info-container {
			display: flex;
			margin-left: auto;

			div {
				display: flex;
				flex-direction: column;

				&:not(:last-child) {
					margin-right: 20px;
				}
			}

			span {
				&.label {
					font-size: 12px;
					color: #7d7d7d;
					margin-bottom: 5px;
				}

				&.name {
					font-size: 14px;
					color: #333333;
				}
			}
		}
	}

	table {
		text-align: left;
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 10px;

		&.action-container {
			margin-bottom: 0;

			th {
				border: 1px solid rgb(248, 225, 225);
				background-color: #f3f3f4;
			}

			td {
				border: 1px solid #e4e4e4;
			}

			.action-wrapper {
				button {
					cursor: pointer;
					border-radius: 4px;
					padding: 10px;
				}

				.view {
					background-color: #007bff;
					color: #ffffff;
					margin-right: 10px;
				}

				.provide {
					background-color: #e4e4e4;
					color: #333333;
					margin-right: 10px;
				}

				.cancel {
					border: 1px solid #dc3545;
					background-color: #ffff;
					color: #dc3545;
				}
			}
		}

		th {
			padding: 10px;
			font-size: 12px;
			font-weight: 400;
			color: #7d7d7d;

			&.orange {
				background-color: #fff6eb;
			}

			&.blue {
				background-color: #e7f3ff;
			}
		}

		td {
			border-bottom: 1px solid #f3f3f4;
			color: #333333;
			font-size: 14px;
			padding: 10px;

			&.orange {
				background-color: #fff6eb;
			}

			&.blue {
				background-color: #e7f3ff;
			}

			&.bold {
				font-weight: 600;
			}

			&.availability {
				font-size: 12px;
				background-color: #ffc107;
			}

			&.best-quote {
				font-size: 12px;

				span {
					font-size: 14px;
					display: inline-block;
					font-weight: 600;
				}
			}

			.product {
				display: flex;
				align-items: center;

				.info {
					margin-left: 20px;
					cursor: pointer;
				}
			}

			h5 {
				border: 1px solid #7d7d7d;
				border-radius: 12px;
				opacity: 1;
				display: inline-block;
				margin: 5px 0;
				padding: 5px;
				font-weight: 400;
				color: #7d7d7d;
			}

			img {
				height: 30px;
				width: 30px;
				margin-right: 15px;
			}

			span {
				display: block;
				font-size: 14px;
				margin-bottom: 7px;

				&.category {
					font-size: 12px;
				}
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
</style>