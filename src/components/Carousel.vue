<template>
    <Carousel autoplay v-model="currentItem" :autoplay-speed="autoplaySpeed" loop>
		<CarouselItem v-for="(item, index) in carouselItems" :key="index">
			<div class="comment">
				<p class="comment-text">"{{item.text}}"</p>
				<p class="comment-author">--{{item.author}}</p>
			</div>
		</CarouselItem>
    </Carousel>
</template>

<script>
    export default {
		props:{
			carouselItems:{
				type: Array,
				default: function(){
					return []
				}
			},
			autoplaySpeed: {
				type: Number,
				default: 2000
			}
		},
        data () {
            return {
                currentItem: 0
            }
        }
    }
</script>

<style scoped lang="less">
	.comment{
		text-align: left;
		height: 300px;
		padding: 40px 18%;
		background-color: #808695;
		p{
			font-size: 26px;
			color: white;
		}
	}
</style>