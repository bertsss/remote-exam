<template>
	<div class="header-container">
		<div
			class="actions-container"
			v-if="hasAction"
		>
			<button class="action">
				<font-awesome-icon
					icon="arrow-left"
					class="icon"
				/>
				Back to list
			</button>
			<button class="switch">
				<font-awesome-icon
					icon="sync-alt"
					class="icon"
				/>
				Quick switch
			</button>
		</div>

		<div class="option-container">
			<font-awesome-icon />
			<font-awesome-icon
				:icon="['far', 'bell']"
				class="notif-icon"
			/>
			<div class="account-container">
				<div class="photo-container">{{ user.initial }}</div>
				<div class="info-container">
					<span class="name">{{ user.name }}</span>
					<span class="section">{{ user.address }}</span>
				</div>
			</div>
			<font-awesome-icon
				icon="chevron-down"
				class="chevron"
			/>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			user: {
				name: 'Alex Grady',
				address: 'Packform LLC',
				initial: 'AG'
			},

			hasAction: true
		}
	}
}
</script>

<style lang="scss" scope>
.header-container {
	padding: 15px 0;
	display: flex;

	.actions-container {
		button {
			cursor: pointer;
			font-family: "Inter";
			border-radius: 4px;
			width: 150px;
			height: 40px;
			background-color: #e4e4e4;
			opacity: 1;

			.icon {
				margin-right: 20px;
			}

			&.action {
				background-color: #e4e4e4;
				margin-right: 10px;
			}

			&.switch {
				background-color: #007bff;
				color: #fff;
			}
		}
	}

	.option-container {
		display: flex;
		align-items: center;
		margin-left: auto;

		.notif-icon {
			cursor: pointer;
			color: #a2a2a2;
			font-size: 20px;
			margin-right: 40px;
		}

		.account-container {
			display: flex;
			align-items: center;

			.photo-container {
				cursor: pointer;
				width: 40px;
				height: 40px;
				background: #007bff 0% 0% no-repeat padding-box;
				border: 1px solid #e4e4e4;
				border-radius: 50%;
				opacity: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #ffffff;
				margin-right: 10px;
			}

			.info-container {
				font-size: 16px;
				display: flex;
				flex-direction: column;
				margin-right: 10px;

				.name {
					color: #333333;
				}

				.section {
					font-size: 12px;
					color: #7d7d7d;
				}
			}
		}

		.chevron {
			margin-left: 15px;
			cursor: pointer;
		}
	}
}
</style>