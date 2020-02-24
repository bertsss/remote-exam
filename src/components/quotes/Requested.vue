<template>
    <div class="requested-container">
        <div class="actions-container">
            <button>By Supplier</button>
            <button>By Product</button>
            <button class="plan">Hexie smart combo plan</button>
        </div>

        <QuoteTable class="table" />
    </div>
</template>

<script>
import QuoteTable from '@/components/layouts/QuoteTable'

export default {
    data () {
        return {
            qwe: true
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
                background: #007BFF 0% 0% no-repeat padding-box;
                border-radius: 24px;
                padding: 10px 20px;
                color: #fff;
                cursor: pointer;

                &.plan {
                    margin-left: auto;
                    background: #593EC2 0% 0% no-repeat padding-box;
                    border-radius: 4px;
                }
            }
            
        }
        
        .table {
            margin: 20px 0;
        }
    }
</style>