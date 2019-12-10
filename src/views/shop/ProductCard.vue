<template>
	<Card class="product">
	    <router-link :to="'/product-detail/' + info.id" class="product-main">
	        <img :src="info.image">
	        <h4>{{ info.name }}</h4>
	        <div class="product-main-color" :style="{ background: colors[info.color]}"></div>
	        <div class="product-main-cost">¥ {{ info.cost }}</div>
	        <div class="product-main-addcart" @click.prevent="handleCart">加入购物车</div>
	    </router-link>
	</Card>
</template>

<script>
	export default {
	    props: {
	        info: Object
	    },
	    data () {
	        return {
	            colors: {
	                '白色': '#ffffff',
	                '金色': '#dac272',
	                '蓝色': '#233472',
	                '红色': '#f2352e'
	            }
	        }
	    },
		methods: {
		    handleCart () {
		        this.$store.commit('addCart', this.info.id);
		    }
		}
	}
</script>

<style scoped lang="less">
    .product{
        width: 20%;
		display: inline-block;
		padding: 26px;
		.product-main{
		    display: block;
		    padding: 5px;
		    border: 1px solid #dddee1;
		    border-radius: 6px;
		    overflow: hidden;
		    background: #fff;
		    text-align: center;
		    position: relative;
			img{
				border-radius: 6px;
			    width: 100%;
			}
			h4{
			    color: #222;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			}
			&:hover {
				h4 {
					color: #0070c9;
				}
				.product-main-addcart{
				    display: inline-block;
				}
			}
			.product-main-color{
			    display: block;
			    width: 16px;
			    height: 16px;
			    border: 1px solid #dddee1;
			    border-radius: 50%;
			    margin: 6px auto;
			}
			.product-main-cost{
			    color: #de4037;
			    margin-top: 6px;
			}
			.product-main-addcart{
			    display: none;
			    padding: 4px 8px;
			    background: #2d8cf0;
			    color: #fff;
			    font-size: 12px;
			    border-radius: 3px;
			    cursor: pointer;
			    position: absolute;
			    top: 5px;
			    right: 5px;
			}
		}
    }
</style>