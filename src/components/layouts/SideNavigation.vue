<template>
	<div class="side-nav">
        <div class="title">
            <p></p>
            <h1>Packform</h1>
        </div>

        <div class="item-container">
            <div class="item" 
                v-for="(item, key) in pages" 
                :key="key" 
                @click="active = item.route"
            >
                <span :class="{'active' : active === item.route}">{{ item.name }}</span>

                <ul 
                    v-if="item.children && active === item.route"
                    class="children-container"
                >
                    <li 
                        v-for="(item, key) in item.children" 
                        :key="key"
                        :class="{'active' : child === item.route}"
                        @click="child = item.route"
                    >
                        {{ item.name }}
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
                {name: 'Dashboard', route: '/dashboard'},

                {
                    name: 'Customers', 
                    route: '/customers', 
                    children: [
                        { name: 'Orders', route: '/orders'},
                        { name: 'Companies', route: '/companies'},
                        { name: 'Users', route: '/users'},
                        { name: 'Price Lists', route: '/price-lists'}
                    ]
                },
                
                {name: 'Suppliers', route: '/suppliers'},
                {name: 'Catalog', route: '/catalog'},
            ],

            active: '/customers',
            child: ''
		}
	},
}

</script>

<style lang="scss" scope>
    .side-nav {
        .title {
            display: flex;
            align-content: center;
            justify-content: center;

            p {
                width: 33px;
                height: 37px;
                margin-right: 5px;

                background: transparent linear-gradient(323deg, #7857F9 0%, #4C30BF 100%) 0% 0% no-repeat padding-box;
                opacity: 1;
            }

            h1 {
                color: #111111,
            }
        }

        .item-container {
            // margin-left: 80px;

            .item {
                padding: 13px 0 13px 70px;
                cursor: pointer;
                color: #7D7D7D;
                font-size: 16px;

                span {
                    padding-left: 20px;
                    &.active {
                        border-left: #593EC2 4px solid;
                        color: #333333;
                    }
                }

                .children-container {
                    list-style: none;
                    color: #7D7D7D;

                    li {
                        padding: 13px 0px;

                        &.active {
                            color: #333333;
                        }
                    }
                }

                &.active {
                    border-left: #593EC2 4px solid;
                    color: #333333;
                }
            }
        }
    }
</style>