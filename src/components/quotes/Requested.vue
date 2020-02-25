<template>
	<div class="requested-container">
		<div class="actions-container">
			<button>
				<font-awesome-icon icon="people-carry" /> By Supplier
			</button>
			<button>
				<font-awesome-icon icon="boxes" /> By Product
			</button>
			<button class="plan">
				<font-awesome-icon icon="lightbulb" /> Hexie smart combo plan</button>
		</div>

		<QuoteTable
			v-for="(quote, key) in quotes"
			:key="key"
			class="table"
			:quote="quote"
		/>

	</div>
</template>

<script>
import QuoteTable from '@/components/layouts/QuoteTable'

export default {
	data () {
		return {
			quotes: [
				{
					name: 'Honest Buildings',
					isAccredited: true,
					status: 'Received quote',
					dateSent: 'Jul 14, 5:45 AM',
					dateReceived: 'Jul 17, 11:30 PM',
					reference: '#474733-1',

					products: [
						{
							code: 'H-2734',
							name: 'Portable Folding Safety Barrier with Casters',
							img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq9nn85psUH7dQQnOGy2HX4YPuA6KPQtN5TP9ES2K4UvIBBJlH',
							category: 'Safety Guards / Barriers',
							qty: 50,
							buyPerUnit: 117.00,
							sellPerUnit: 249.00,
							availability: 'In stock',
							lastBestQuote: 150.00
						},

						{
							code: 'H-2734',
							name: 'Portable Folding Safety Barrier with Casters',
							img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLWBFISgNpv1_C0-6pKvGK-4LXuS_Uq3ZJNkt7PWglPy3wmeYu',
							category: 'Safety Guards / Barriers',
							qty: 50,
							buyPerUnit: 117.00,
							sellPerUnit: 115.00,
							availability: 'In stock',
							lastBestQuote: 150.00
						}
					]
				},

				{
					name: 'Honest Buildings',
					isAccredited: true,
					status: 'Received quote',
					dateSent: 'Jul 14, 5:45 AM',
					dateReceived: 'Jul 17, 11:30 PM',
					reference: '#474733-1',

					products: [
						{
							code: 'H-2734',
							name: 'Portable Folding Safety Barrier with Casters',
							img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq9nn85psUH7dQQnOGy2HX4YPuA6KPQtN5TP9ES2K4UvIBBJlH',
							category: 'Safety Guards / Barriers',
							qty: 50,
							buyPerUnit: 117.00,
							sellPerUnit: 249.00,
							availability: 'In stock',
							lastBestQuote: 150.00
						},

						{
							code: 'H-2734',
							name: 'Portable Folding Safety Barrier with Casters',
							img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLWBFISgNpv1_C0-6pKvGK-4LXuS_Uq3ZJNkt7PWglPy3wmeYu',
							category: 'Safety Guards / Barriers',
							qty: 50,
							buyPerUnit: 117.00,
							sellPerUnit: 115.00,
							availability: 'In stock',
							lastBestQuote: 150.00
						}
					]
				}
			]

		}
	},

	components: {
		QuoteTable
	},
}
</script>

<style lang="scss" scope>
.requested-container {
	.actions-container {
		display: flex;
		flex: 1 1 auto;

		button {
			background: #007bff 0% 0% no-repeat padding-box;
			border-radius: 24px;
			padding: 10px 20px;
			color: #fff;
			margin-right: 10px;
			cursor: pointer;

			&.plan {
				margin-left: auto;
				background: #593ec2 0% 0% no-repeat padding-box;
				border-radius: 4px;
			}
		}
	}

	.table {
		margin: 20px 0;
	}
}
</style>