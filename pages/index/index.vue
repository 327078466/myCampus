<template>
	<view class="container">
		<scroll-view class="scroll-container" :scroll-top="scrollTop" scroll-y="true" @scrolltolower="enevtname">
			<!-- 上部分 -->
			<view class="top-section">
				<!-- 这里放置上部分的内容 -->
				<view class="top_left">
					<image src="/static/index_image/location.png" class="location_image"></image>
					<text class="address">{{address}}</text>
					<image src="/static/index_image//arrows.png" class="arrows_image"></image>
				</view>
				<view class="top_right">
					<view class="search-wrapper">
						<image src="/static/index_image/search.png" class="search-icon" />
						<input class="search-input" placeholder="搜索" />
					</view>
				</view>

			</view>
			<!-- 下部分 -->
			<view class="bottom-section">
				<!-- 这里放置下部分的内容 -->
				<view class="bottom-item">
					<view class="notice-container">
						<view class="left-part">
							<image src="/static/index_image/notice.png" class="left-image" />
							<view class="divider_y"></view>
						</view>
						<view class="right-part">
							<swiper circular="true" vertical="true" autoplay="true" interval="3000" duration="1000"
								class="swiperBox">
								<swiper-item>
									<text class="swipertext">小程序相关功能介绍，点击查看</text>
								</swiper-item>
								<swiper-item>
									<text class="swipertext">小程序相关功能介绍，点击查看2</text>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
				<view class="bottom-item">
					<view class="shop-rider-container">
						<!-- 上部分 -->
						<view class="shop-rider-top">
							<!-- 左部分 -->
							<image class="shop-rider-top-left-image" src="/static/index_image/rider.png"></image>
							<view class="shop-rider-top-left">
								<text style="margin-right: 100rpx;">骑手申请</text>
							</view>
							<!-- 右部分 -->
							<view class="shop-rider-top-right">
								<text style="margin-left: 80rpx;">商家入驻</text>
							</view>
							<image class="shop-rider-top-right-image" src="/static/index_image/shop.png"></image>
						</view>
						<view class="divider_x"></view>
						<!-- 下部分 -->
						<view class="shop-rider-font">
							<!-- 左部分 -->
							<view class="shop-rider-font-left">
								<image src="/static/index_image/shop-rider-left.png"></image>
							</view>
							<!-- 右部分 -->
							<view class="shop-rider-font-right">
								<image src="/static/index_image/shop-rider-right.png"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="bottom-item">
					<view class="catagory-container">
						<swiper class="catagory-container-swiper">
							<swiper-item v-for="(chunk, index) in chunks" :key="index">
								<!-- 在这里渲染每个chunk的内容 -->
								<!-- 第一行 -->
								<view class="chunk-container">
									<view class="chunk-row">
										<view v-for="(subItem, index) in chunk.slice(0, 5)" :key="subItem.id"
											class="chunk-item" @click="info(subItem.dictValue)">
											<view class="cake-mask">
												<image :src="subItem.remark"></image>
											</view>
											<text>
												{{ subItem.dictLabel }}
											</text>
										</view>
									</view>
									<!-- 第二行 -->
									<view class="chunk-row">
										<view v-for="(subItem, index) in chunk.slice(5, 10)" :key="subItem.id"
											class="chunk-item" @click="info(subItem.dictValue)">
											<view class="cake-mask">
												<image :src="subItem.remark"></image>
											</view>
											<text>
												{{ subItem.dictLabel}}
											</text>
										</view>
									</view>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
				<view class="bottom-item">
					<view class="special-container">
						<view class="special-top">
							<view class="special-top-left">
								<text style="font-size: 30rpx;color: #c35542;">天天特价</text>
								<text style="font-size: 20rpx; margin-left: 15rpx;color: #bf656c;">这里买更优惠</text>
							</view>
							<view class="special-top-right">
								<text style="font-size: 20rpx;color: #b95040;">更多 ></text>
							</view>
						</view>
						<view class="special-font">
							<scroll-view scroll-x="true" class="horizontal-scroll-view">
								<view class="special-swiper-font-view">
									<view v-for="(subItem, index) in foods" :key="index"
										class="special-swiper-font-view-view">
										<image :src="subItem.imageUrl" class="shop-image"></image>
										<text class="special-swiper-item-name">{{subItem.name}}</text>
										<view>
											<text
												style="margin-right: 15rpx;color: #bd5a4c;">{{subItem.discostPrice}}</text>
											<text class="text-with-line">{{subItem.originPrice}}</text>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</view>
				</view>
				<view class="near-shop-text-container">
					<text style="font-size: 30rpx;margin-left: 15rpx;">附近商家</text>
				</view>
				<view style="margin-top: 30rpx;">
					<view v-for="(shop,index) in shops" class="bottom-item">
						<view class="near-shop-container" @click="navigateToShop(shop)">
							<view class="near-shop-container-top">
								<image :src="shop.logo"></image>
								<view class="near-shop-container-top-left">
									<text style="font-weight: bold;font-size: 28rpx;">{{shop.storeName}}</text>
									<view
										style="display: flex;flex: none; margin-top: -8rpx;justify-content: space-between;">
										<view style="display: flex; align-items: center;">
											<image src="/static/index_image/favicate.png"
												style="width: 20rpx;height: 20rpx;margin-right: 8rpx;margin-left: 0rpx;">
											</image>
											<text style="font-size: 20rpx;color: #fedc62;">{{shop.favoriteNum}}</text>
											<text style="font-size: 20rpx;color: #adaeb0;margin-left: 20rpx;">月销热度{{shop.saleNum}}</text>
										</view>
										<view>
											<text v-if="shop.deliveryType ==='1'"
												class="near-shop-text-with-border">平台配送</text>
										</view>
									</view>
									<view style="margin-top: -15rpx;display: flex;justify-content: space-between; ">
										<view>
											<text
												style="font-size: 20rpx;color: #adaeb0;margin-left: 2rpx;">¥{{shop.startDeliveryPrice}}起送</text>
											<text
												style="font-size: 20rpx;color: #adaeb0;margin-left: 2rpx;margin-left: 20rpx;">配送费 ¥{{shop.deliveryPrice}}</text>
										</view>
										<view style="margin-right: 20rpx;display: flex;align-items: center;">
											<text
												style="font-size: 20rpx;color: #adaeb0;">{{shop.deliveryTime}}分钟</text>
											<view class="near-shop-divider_y"></view>
											<text style="font-size: 20rpx;color: #adaeb0;">{{shop.distance}} km</text>
										</view>
									</view>
									<view class="near-shop-container-top-left-text-container">
										<text class="near-shop-container-top-left-text-overflow">{{ shop.slogan}}</text>
									</view>
									<view v-if="shop.isHaoPin === '1'" class="bordered-view">
										<text
											style="font-size: 18rpx;color: #a05d60;padding-left: 5rpx">本店正在参与拼好饭活动，请速速围观！</text>
									</view>
								</view>
							</view>
							<view class="near-shop-container-font">
								<scroll-view scroll-x="true" class="near-shop-scroll-view">
									<view class="near-shop-swiper-font-view">
										<view v-for="(subItem, index) in foods" :key="index"
											class="near-shop-swiper-font-view-view">
											<image :src="subItem.imageUrl"></image>
											<text class="near-shop-swiper-item-name">{{subItem.name}}</text>
											<text
												style="color: #bd5a4c;text-align: center;">{{subItem.discostPrice}}</text>
										</view>
									</view>
								</scroll-view>
							</view>
						</view>

					</view>
					<!-- 如果 shops 为空，显示提示区域 -->
					<!-- 如果没有更多数据，显示提示区域 -->
					<view v-if="noMoreData" class="no-more">
						<text>没有更多了</text>
					</view>
				</view>
			</view>
		</scroll-view>

	</view>
</template>


<style>
	@import url('./index.css');

	.divBody .divMenu .mescro-uni {
		height: calc(100vh - var(--height));
	}
</style>
<script>
	import {
		getStoreApi,getLocation,getPlatformLabel
	} from '../../api/index';
	export default {
		data() {
			return {
				shops: [],
				scrollTop: 0, // 控制 scroll-view 的滚动位置
				page: 1, // 当前页数
				loading: false, // 数据是否正在加载
				noMoreData: false, // 是否还有更多数据
				address: '正在定位请稍等..',
				lat: '',
				lng: '',
				items: [],
				foods: [{
						name: '草莓桃桃茶',
						imageUrl: '/static/index_image/foot.png',
						discostPrice: '¥9.99',
						originPrice: '¥16.00'
					},
					{
						name: '草莓桃桃茶',
						imageUrl: '/static/index_image/foot.png',
						discostPrice: '¥9.99',
						originPrice: '¥16.00'
					},
					{
						name: '草莓桃桃茶',
						imageUrl: '/static/index_image/foot.png',
						discostPrice: '¥9.99',
						originPrice: '¥16.00'
					},
					{
						name: '草莓桃桃茶',
						imageUrl: '/static/index_image/foot.png',
						discostPrice: '¥9.99',
						originPrice: '¥16.00'
					},
					{
						name: '草莓桃桃茶',
						imageUrl: '/static/index_image/foot.png',
						discostPrice: '¥9.99',
						originPrice: '¥16.00'
					},
					{
						name: '草莓桃桃茶',
						imageUrl: '/static/index_image/foot.png',
						discostPrice: '¥9.99',
						originPrice: '¥16.00'
					},
					{
						name: '草莓桃桃茶',
						imageUrl: '/static/index_image/foot.png',
						discostPrice: '¥9.99',
						originPrice: '¥16.00'
					},
					{
						name: '草莓桃桃茶',
						imageUrl: '/static/index_image/foot.png',
						discostPrice: '¥9.99',
						originPrice: '¥16.00'
					}
					// 添加更多项...
				],

			};
		},
		created() {

		},
		mounted() {
			// 页面加载时设置 scrollTop 为 0
			this.scrollTop = 0;

		},
		onLoad() {
			
		},
		onReady() {
			// this.fetchData();
			this.getLocation();
			this.loadShops();
			this.platformLabel();
		},
		methods: {
			enevtname() {
				console.log('触底事件');
				this.loadShops(); // 用户滚动到底部时加载更多数据
			},
			info(value){
			  console.log("获取到标签键值" + value)	
			},
			async platformLabel(){
				const response =  await getPlatformLabel();
				
				if (response.code === 0) {
					this.items = response.data; // 解析接口返回的数据
				} else {
					this.items = [{
						name: '正餐便当',
						imageUrl: '/static/index_image/foot.png'
					},
					{
						name: '火锅冒菜',
						imageUrl: '/static/index_image/foot.png'
					},
					{
						name: '粥点面食',
						imageUrl: '/static/index_image/foot.png'
					},
					{
						name: '烧烤小吃',
						imageUrl: '/static/index_image/foot.png'
					},
					{
						name: '超市便利',
						imageUrl: '/static/index_image/foot.png'
					},
					{
						name: '奶茶饮品',
						imageUrl: '/static/index_image/foot.png'
					},
					{
						name: '炸鸡汉堡',
						imageUrl: '/static/index_image/foot.png'
					},
					{
						name: '鲜花蛋糕',
						imageUrl: '/static/index_image/foot.png'
					},
					{
						name: '超级会员',
						imageUrl: '/static/index_image/foot.png'
					},
					{
						name: '本地团购',
						imageUrl: '/static/index_image/foot.png'
					},
					{
						name: '超值夜宵',
						imageUrl: '/static/index_image/foot.png'
					},
					// 添加更多项...
				]
				}
			},
			async getLocation() {
				try {
					console.log("开始获取经纬度")
					const res = await new Promise((resolve, reject) => {
						uni.getLocation({
							type: 'wgs84',
							success: resolve,
							fail: reject
						});
					});
					this.lat = res.latitude;
					this.lng = res.longitude;
					console.log('获取位置成功：', this.lat, this.lng);
					// 获取地址信息
					await this.getAddress();
				} catch (err) {
					console.error('获取位置失败：', err);
					// 使用默认位置
					this.lat = 39.9042; // 默认经度（示例值）
					this.lng = 116.4074; // 默认纬度（示例值）
					console.log('使用默认位置：', this.lat, this.lng);
					// 获取默认地址信息
					await this.getAddress();
				}
			},
			async getAddress() {
				try {
					console.log("开始获取经纬度")
					const response = await getLocation({
						lat: this.lat,
						lng: this.lng
					});
					if (response.code === 0) {
						this.address = response.data.address;
						console.log('获取地址成功：', this.address);
					} else {
						console.error('获取地址失败：', response.message);
						this.address = '无法获取地址';
					}
				} catch (err) {
					console.error('请求地址失败：', err);
					this.address = '无法获取地址';
				}
			},
			async loadShops() {
				if (this.loading || this.noMoreData) return; // 防止重复加载
				this.loading = true;
				try {
					const response = await getStoreApi({
						page: this.page,
						limit: 5,
						lat: this.lat,
						lng: this.lng
					});
					if (response.code === 0) {
						const newShops = response.data.list; // 解析接口返回的数据
						if (newShops.length === 0) {
							this.noMoreData = true; // 没有更多数据
						} else {
							this.shops = this.shops.concat(newShops);
							this.page += 1; // 更新页数
						}
					} else {
						this.noMoreData = true; // 没有更多数据
					}
				} catch (error) {
					console.error('加载数据失败:', error);
				} finally {
					this.loading = false;
				}
			},

			// async fetchData() {

			// },
			navigateToShop(store) {
				const shopStr = encodeURIComponent(JSON.stringify(store))
				console.log("跳转页面")
				uni.navigateTo({
					url: `/pages/store_dish/index?store=${shopStr}`
				});
			},
		},
		computed: {
			chunks() {
				let chunkSize = 10;
				let result = [];
				for (let i = 0; i < Math.ceil(this.items.length / chunkSize); i++) {
					result.push(this.items.slice(i * chunkSize, (i + 1) * chunkSize));
				}
				return result;
			},
			foodchunks() {
				let chunkSize = 4;
				let result = [];
				for (let i = 0; i < Math.ceil(this.foods.length / chunkSize); i++) {
					result.push(this.foods.slice(i * chunkSize, (i + 1) * chunkSize));
				}
				return result;
			},
		},
	};
</script>
