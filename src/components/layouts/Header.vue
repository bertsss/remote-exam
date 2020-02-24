<template>
    <div class="header-container">
        <div class="actions-container" v-if="hasAction">
            <button class="action">Back to list</button>
            <button class="switch">Quick switch</button>
        </div>

        <div class="option-container">
            <span class="notif-icon">notif</span>
            <div class="account-container">
                <div class="photo-container">{{ user.initial }}</div>
                <div class="info-container">
                    <span class="name">{{ user.name }}</span>
                    <span class="section">{{ user.address }}</span>
                </div>
            </div>
            <span>WE</span>
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
                font-family: 'Inter';
                border-radius: 4px;
                width: 150px;
                height: 40px;
                background-color: #E4E4E4;
                opacity: 1;

                &.action {
                    background-color: #E4E4E4;
                    margin-right: 10px;
                }

                &.switch {
                    background-color: #007BFF;
                    color: #fff;
                }
            }
        }

        .option-container {
            display: flex;
            align-items: center;
            margin-left: auto;

            .notif-icon {
                width: 40px;
                margin-right: 50px;
            }

            .account-container {
                display: flex;
                align-items: center;
                
                .photo-container {
                    width: 40px;
                    height: 40px;
                    background: #007BFF 0% 0% no-repeat padding-box;
                    border: 1px solid #E4E4E4;
                    border-radius: 50%;
                    opacity: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #FFFFFF;
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
                        color: #7D7D7D;
                    }
                }
            }
        }
    }
</style>