<template>
    <div class="quote-wrapper">
        <div class="header">
            <span class="title">Quote from Honest Buildings</span>
            <span class="rank" >Accredited</span>

            <div class="info-container">
                <div class="status">
                    <span class="label">Status</span>
                    <span class="name">Received quote</span>
                </div>

                <div class="date-sent">
                    <span class="label">Date sent</span>
                    <span class="name">Jul 14, 5:45 AM</span>
                </div>

                <div class="date-received">
                    <span class="label">Date received</span>
                    <span class="name">Jul 17, 11:30 PM</span>
                </div>
            </div>
        </div>

        <table>
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
            <tr class="item">
                <td rowspan="2">
                    <div class="product">
                        <img src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.0-1/cp0/p24x24/65747875_2863570697002733_5530719547012677632_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=Xmi5ews3P8MAX-xjSOd&_nc_ht=scontent.fmnl17-2.fna&oh=1202e8745ed6693fbeffbbc7bb056c13&oe=5F01160D">
                        <div>
                            <h5 class="code">H-2734</h5>
                            <span class="name">Portable Folding Safety Barrier with Casters</span>
                            <span class="category">Category: Safety Guards / Barriers</span>
                        </div>
                    </div>
                </td>
                <td rowspan="2">50</td>
                <td class="bold orange">$117.00</td>
                <td class="bold orange">$5,850.00</td>
                <td class="bold blue">$249.00</td>
                <td class="bold blue">$12,450.00</td>
                <td class="bold">+ $6,600.00</td>
                <td><div class="percent-container">53.01%</div></td>
            </tr>
            <tr>
                <td class="availability" colspan="2">Availability: In stock</td>
                <td class="best-quote" colspan="4">Last best quote: <span>$150.00</span></td>
            </tr>
            <tr class="item">
                <td rowspan="2">
                    <div class="product">
                        <img src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.0-1/cp0/p24x24/65747875_2863570697002733_5530719547012677632_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=Xmi5ews3P8MAX-xjSOd&_nc_ht=scontent.fmnl17-2.fna&oh=1202e8745ed6693fbeffbbc7bb056c13&oe=5F01160D">
                        <div>
                            <h5 class="code">H-2734</h5>
                            <span class="name">Portable Folding Safety Barrier with Casters</span>
                            <span class="category">Category: Safety Guards / Barriers</span>
                        </div>
                    </div>
                </td>
                <td rowspan="2">50</td>
                <td class="bold orange">$117.00</td>
                <td class="bold orange">$5,850.00</td>
                <td class="bold blue">$249.00</td>
                <td class="bold blue">$12,450.00</td>
                <td class="bold">+ $6,600.00</td>
                <td><div class="percent-container">53.01%</div></td>
            </tr>
            <tr>
                <td class="availability" colspan="2">Availability: In stock</td>
                <td class="best-quote" colspan="4">Last best quote: <span>$150.00</span></td>
            </tr>
            <tr>
                <td rowspan="2">
                    <div class="product">
                        <img src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.0-1/cp0/p24x24/65747875_2863570697002733_5530719547012677632_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=Xmi5ews3P8MAX-xjSOd&_nc_ht=scontent.fmnl17-2.fna&oh=1202e8745ed6693fbeffbbc7bb056c13&oe=5F01160D">
                        <div>
                            <h5 class="code">H-2734</h5>
                            <span class="name">Shipping Cost</span>
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

        <table class="action-container">
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
                        <button class="view">View quote</button>
                        <button class="provide">Provide as supplier</button>
                        <button class="cancel">Cancel</button>
                    </div>
                </td>
                <td>#474733-1</td>
                <td class="bold">$56,800.00</td>
                <td class="bold">$85,750.00</td>
                <td class="bold">+ $28,950.00</td>
                <td><div class="percent-container">53.01%</div></td>
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
    }
}
</script>

<style lang="scss" scope>
    .quote-wrapper {
        background: #FFFFFF 0% 0% no-repeat;
        box-shadow: 0px 3px 6px #00000014;
        border: 1px solid #E4E4E4;
        border-radius: 4px;
        opacity: 1;
        padding: 0;

        .header {
            display: flex;
            align-items: center;
            padding: 20px 10px;
            border-bottom: #E4E4E4 1px solid;

            .title {
                font-size: 20px;
                margin-right: 20px;
            }

            .rank {
                background-color: #593EC2;
                border-radius: 10px;
                opacity: 1;
                font-size: 12px;
                color: #FFFFFF;
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
                        color: #7D7D7D;
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
                    background-color: #F3F3F4;
                }

                td {
                    border: 1px solid #E4E4E4;
                }

                .action-wrapper {
                    button {
                        border-radius: 4px;
                        padding: 10px;
                    }

                    .view {
                        background-color: #007BFF;
                        color: #ffffff;
                        margin-right: 10px;
                    }

                    .provide {
                        background-color: #E4E4E4;
                        color: #333333;
                        margin-right: 10px;
                    }

                    .cancel {
                        border: 1px solid #DC3545;
                        background-color: #ffff;
                        color: #DC3545;
                    }
                }
            }

            th {
                padding: 10px;
                font-size: 12px;
                font-weight: 400;
                color: #7D7D7D;

                &.orange {
                    background-color: #FFF6EB;
                }

                &.blue {
                    background-color: #E7F3FF;
                }
            }

            td {
                border-bottom: 1px solid #F3F3F4;
                color: #333333;
                font-size: 14px;
                padding: 10px;

                &.orange {
                    background-color: #FFF6EB;
                }

                &.blue {
                    background-color: #E7F3FF;
                }

                &.bold {
                    font-weight: 600;
                }

                &.availability {
                    font-size: 12px;
                    background-color: #FFC107;
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
                }


                h5 {
                    border: 1px solid #7D7D7D;
                    border-radius: 12px;
                    opacity: 1;
                    display: inline-block;
                    margin: 5px 0;
                    padding: 5px;
                    font-weight: 400;
                    color: #7D7D7D;
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
                    background-color: #28A745;
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