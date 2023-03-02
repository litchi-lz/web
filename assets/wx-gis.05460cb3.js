import{a as t,b as o,e as n}from"./index.cc4d245b.js";const s={class:"markdown-body"},a=n("h4",null,"1.\u6CE8\u518C\u817E\u8BAF\u4F4D\u7F6E\u670D\u52A1",-1),l=n("pre",null,[n("code",null,`    - 1.\u521B\u5EFA\u5E94\u7528
    - 2.\u6DFB\u52A0key
    - 3.key\u7F16\u8F91
    - 4.WebServiceAPI \u8BBE\u7F6E \u6388\u6743IP
    - 5.\u586B\u5199\u670D\u52A1\u5668\u57DF\u540D
    - 6.\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F-\u6388\u6743Appid
`)],-1),r=n("hr",null,null,-1),c=n("h4",null,"2.wxml\u6587\u4EF6",-1),d=n("pre",null,[n("code",{class:"language-html"},`<view class="" hover-class="none" hover-stop-propagation="false" style="width: 100%; height: 100%;">
  <map id="map" longitude="{{longitude}}" latitude=" {{latitude}}" bindmarkertap="clickMap" markers="{{markers}}" scale="4" style="width: 100%; height: 100%;"></map>
</view>
`)],-1),i=n("hr",null,null,-1),u=n("h4",null,"3.js\u6587\u4EF6",-1),p=n("pre",null,[n("code",{class:"language-js"},`import {bdMapToTxMap} from './transform'        //\u7ECF\u7EAC\u5EA6\u7CBE\u786E\u8F6C\u6362
const app = getApp();
Page({
  data: {
    longitude: 121.368146, //\u9ED8\u8BA4\u5B9A\u4F4D\u7ECF\u5EA6
    latitude: 31.134899, //\u9ED8\u8BA4\u5B9A\u4F4D\u7EAC\u5EA6
    markers: [],
  },
  
  // \u70B9\u51FB\u6807\u8BB0\u70B9\u65F6\u89E6\u53D1
  clickMap(e) {
    const latitude = 114.65;
    const longitude = 268.36;
    let locationString = latitude + "," + longitude;
    wx.request({
      url: "https://apis.map.qq.com/ws/geocoder/v1/",
      data: {
        key: "****",  //\u817E\u8BAF\u670D\u52A1\u4E2D\u5FC3\u7684key
        location: locationString,
      },
      method: "GET",
      success: (r) => {
        //\u8F93\u51FA\u4E00\u4E0B\u4F4D\u7F6E\u4FE1\u606F
        console.log(r);
        let address = r.data.result.address;
        console.log("\u7528\u6237\u4F4D\u7F6E\u4FE1\u606F", r.data.result.address);
        wx.openLocation({
          latitude,
          longitude,
          name: address,
          scale: 18,
        });
      },
      catch: (r) => {
        console.log(r)
      },
    });
  },
});

`)],-1),h=[a,l,r,c,d,i,u,p],f={__name:"wx-gis",setup(_,{expose:e}){return e({frontmatter:{}}),(g,k)=>(t(),o("div",s,h))}};export{f as default};
