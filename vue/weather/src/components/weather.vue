<template>
  <div class="head">
      <div class="city-name">
          <i class="iconfont icon-daohangdizhi"></i>
          {{ state.city }}
      </div>
      <div class="city-change">
          <i class="iconfont icon-24gf-city"></i>
          切换城市
      </div>
  </div>
  <div class="main">
      <div class="weather-info">
          <p class="temp">{{ state.weather.temperature }}℃</p>
          <p class="info">{{ state.weather.weather }}</p>
          <div class="detail">
              <div class="item">
                  <i class="iconfont icon-shidu"></i>
                  <span>湿度</span>
                  <span>{{ state.weather.humidity }}%</span>
              </div>
              <div class="item">
                  <i class="iconfont icon-feng"></i>
                  <span>风向</span>
                  <span>{{ state.weather.windDirection }}</span>
              </div>
              <div class="item">
                  <i class="iconfont icon-fengli"></i>
                  <span>风力</span>
                  <span>{{ state.weather.windPower }}</span>
              </div>
          </div>
      </div>
      <div class="future-info"></div>
      <div class="container"></div>
  </div>

</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader';
import { onMounted, reactive } from 'vue';
const state = reactive({
  city: '北京市',
  weather: {}
})

onMounted(() => {
  window._AMapSecurityConfig = {
      securityJsCode: "f375d8ab96cab1667fe51ba04d59207f",
  };
  AMapLoader.load({
      key: "ff455c05650aa5e3ff8024b8b99b7293", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
      .then((AMap) => {
          // 获取定位
          getLocalCity(AMap)

      })



})

const getLocalCity = (AMap) => {
  AMap.plugin('AMap.CitySearch', function () {
      var citySearch = new AMap.CitySearch()
      citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
              console.log(result.city);
              state.city = result.city
              getWeather(AMap)
          }
      })
  })
}


const getWeather = (AMap) => {
  //加载天气查询插件
  AMap.plugin("AMap.Weather", function () {
      //创建天气查询实例
      var weather = new AMap.Weather();
      //执行实时天气信息查询
      weather.getLive(state.city, function (err, data) {
          console.log(err, data);
          //err 正确时返回 null
          //data 返回实时天气数据，返回数据见下表
          state.weather = data
      });
  });
}
</script>

<style lang="css" scoped>
.head {
  height: 53px;
  background: #8E6FF7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 15px;
}

.city-name {
  font-size: 18px;
}

.city-change {
  font-size: 14px;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px 4px 4px 4px;
}

.main {
  padding: 7px 16px 20px 16px;

}

.weather-info {
  width: 100%;
  height: 230px;
  background: linear-gradient(146deg, rgba(142, 111, 247, 0.1) 0%, rgba(142, 111, 247, 0.05) 100%), rgba(0, 0, 0, 0);
  border-radius: 16px 16px 16px 16px;
  padding: 24px;
  box-sizing: border-box;
}

.temp {
  font-family: Roboto, Roboto;
  font-weight: 300;
  font-size: 60px;
  color: #000000;
  line-height: 60px;
  text-align: center;
  font-style: normal;
  text-transform: none;
}

.info {
  font-family: Roboto, Roboto;
  font-weight: 400;
  font-size: 14px;
  color: #4B5563;
  line-height: 21px;
  text-align: center;
  font-style: normal;
  text-transform: none;
}

.detail {
  display: flex;
  margin-top: 24px;
}

.item {
  flex: 1;
  display: flex;
  /* 修改主轴方向 */
  flex-direction: column;
  /* 控制交叉轴居中 */
  align-items: center;
}

.item i {
  color: #8E6FF7;
}

.item span:nth-child(2) {
  font-size: 14px;
  color: #4B5563;
}

.item span:nth-child(3) {
  font-size: 16px;
  color: #000000;
}
</style>