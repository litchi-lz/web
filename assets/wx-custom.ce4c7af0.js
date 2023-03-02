import{a,b as t,G as e}from"./index.cc4d245b.js";const o={class:"markdown-body"},s=e(`<h4>\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F</h4><h5>1. \u5168\u5C40\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\u6216\u8005\u5F53\u524D\u9875\u9762\u914D\u7F6E</h5><pre><code class="language-js">/** app.json */
&quot;window&quot;: {
    &quot;navigationStyle&quot;: &quot;custom&quot;
},

/** index.json */
{
  &quot;usingComponents&quot;: {
    &quot;nav-bar&quot;: &quot;/component/navbar/navbar&quot;
  },
  &quot;navigationStyle&quot;: &quot;custom&quot;
}
</code></pre><hr><h5>2. app.js\u9875\u9762\u4E2D\u83B7\u53D6\u8BBE\u5907\u9876\u90E8\u7A97\u53E3\u7684\u9AD8\u5EA6</h5><pre><code class="language-js">/** app.js*/

App({
 onLaunch: function(options) {
 var _this = this;
 //\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F \u83B7\u53D6\u8BBE\u5907\u9876\u90E8\u7A97\u53E3\u7684\u9AD8\u5EA6\uFF08\u4E0D\u540C\u8BBE\u5907\u7A97\u53E3\u9AD8\u5EA6\u4E0D\u4E00\u6837\uFF0C\u6839\u636E\u8FD9\u4E2A\u6765\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7684\u9AD8\u5EA6\uFF09
    wx.getSystemInfo({
    success: (res) =&gt; {
        // \u57FA\u7840\u5E93 2.1.0 \u5F00\u59CB\u652F\u6301wx.getMenuButtonBoundingClientRect()\uFF0C\u4F4E\u7248\u672C\u9700\u8981\u9002\u914D
         let custom = wx.getMenuButtonBoundingClientRect()
        // console.log(&#39;\u72B6\u6001\u680F\u9AD8\u5EA6&#39;,res.statusBarHeight)
        // console.log(&#39;\u53F3\u4E0A\u89D2\u80F6\u56CA\u6309\u94AE\u7684\u9AD8\u5EA6&#39;, custom.height)
        // console.log(&#39;\u53F3\u4E0A\u89D2\u80F6\u56CA\u6309\u94AE\u7684\u4E0A\u8FB9\u754C\u5750\u6807&#39;, custom.top)
        // console.log(&#39;\u53F3\u4E0A\u89D2\u80F6\u56CA\u6309\u94AE\u7684\u4E0B\u8FB9\u754C\u5750\u6807&#39;, custom.bottom)
        _this.globalData.statusBarHeight = res.statusBarHeight
        _this.globalData.navBarHeight = custom.height + (custom.top - res.statusBarHeight) * 2
     }
    })
},

 globalData: { // \u5168\u5C40\u6570\u636E
    statusBarHeight: 0,
    navBarHeight: 0,
 },
})
</code></pre><hr><h5>3. \u521B\u5EFA\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u76EE\u5F55\u4E3A /components/navbar</h5><pre><code class="language-html">
&lt;!-- \u9ED8\u8BA4\u4E3A\u9ED1\u8272\u7684\u8FD4\u56DE\u952E--&gt;
&lt;view class=&#39;nav-wrap nav-bgc-class&#39; style=&#39;height: {{statusBarHeight + navBarHeight}}px;&#39;&gt;
 &lt;!-- \u5DE6\u4E0A\u89D2\u7684\u8FD4\u56DE\u6309\u94AE \u5176\u4E2Dwx:if=&#39;{{navbarData.showCapsule}}&#39; \u662F\u63A7\u5236\u5DE6\u4E0A\u89D2\u6309\u94AE\u7684\u663E\u793A\u9690\u85CF\uFF0C1\u4E3A\u663E\u793A\uFF0C0\u4E3A\u9690\u85CF --&gt;
&lt;view class=&#39;nav-capsule&#39; style=&#39;margin-top: {{statusBarHeight}}px; height: {{navBarHeight}}px;&#39; wx:if=&#39;{{navbarData.showCapsule}}&#39; bindtap=&#39;_navback&#39;&gt;
 &lt;image class=&#39;back-pre ex-back-pre&#39; src=&#39;{{navbarData.backSrc || &quot;/img/back4.png&quot;}}&#39; mode=&#39;aspectFill&#39;&gt;&lt;/image&gt;
 &lt;/view&gt;
 &lt;!-- \u4E2D\u95F4\u7684\u6807\u9898 --&gt;
&lt;view class=&#39;nav-title nav-title-class&#39; style=&#39;margin-top: {{statusBarHeight}}px; height: {{navBarHeight}}px;&#39;&gt;{{navbarData.title}}&lt;/view&gt;
&lt;/view&gt;
</code></pre><hr><h5>4. navbar.js\u9875\u9762 (\u81EA\u5B9A\u4E49\u7EC4\u4EF6)</h5><pre><code class="language-js">
const app = getApp()
Component({
 // multipleSlots \u4E3A\u7EC4\u4EF6\u5F00\u542F\u591A\u63D2\u69FD\u6A21\u5F0F
options: {
    multipleSlots: true,
 },
 // externalClasses \u4E3A\u7EC4\u4EF6\u6307\u5B9A\u591A\u4E2A\u5916\u90E8\u6837\u5F0F\u7C7B
 externalClasses: [&#39;nav-bgc-class&#39;, &#39;nav-title-class&#39;,&#39;ex-back-pre&#39;],
 // properties \u7EC4\u4EF6\u7528\u6765\u50A8\u5B58\u5916\u90E8\u6570\u636E
 properties: {
     navbarData: { //navbarData  \u7531\u7236\u9875\u9762\u4F20\u9012\u7684\u6570\u636E\uFF0C\u53D8\u91CF\u540D\u5B57\u81EA\u547D\u540D
     type: Object,
     value: {},
     observer: function (newVal, oldVal) { }
     },
 },
 // \u7EC4\u4EF6\u7528\u6765\u50A8\u5B58\u5185\u90E8\u79C1\u6709\u6570\u636E
 data: {
     // \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7684\u9AD8\u5EA6
     statusBarHeight: app.globalData.statusBarHeight,
     navBarHeight: app.globalData.navBarHeight
 },
 // attached\u51FD\u6570 \u5F53\u7EC4\u4EF6\u8FDB\u5165\u9875\u9762\u8282\u70B9\u6811\u65F6\u89E6\u53D1\uFF0C\u53EF\u4EE5\u4F7F\u7528setData\uFF0C\u7EDD\u5927\u591A\u6570\u521D\u59CB\u5316\u5DE5\u4F5C\u5728\u8FD9\u4E2A\u65F6\u673A\u8FDB\u884C
 attached: function () {},
 // methods\u5BF9\u8C61 \u5B9A\u4E49\u7EC4\u4EF6\u5185\u7684\u5404\u79CD\u65B9\u6CD5
 methods: {
     // \u8FD4\u56DE\u952E\uFF0C\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u5C06\u8FD4\u56DE\u7684\u4E8B\u4EF6\u4EA4\u7ED9\u7236\u7EA7\u9875\u9762\u6765\u5206\u60C5\u51B5\u5B9A\u4E49
     _navback() {
        this.triggerEvent(&#39;goBack&#39;)
     }
 }
})
</code></pre><hr><h5>5. navbar.json\u9875\u9762 (\u81EA\u5B9A\u4E49\u7EC4\u4EF6)</h5><pre><code class="language-js">{
    &quot;component&quot;: true
}
</code></pre><hr><h5>6. navbar.wxss\u9875\u9762 (\u81EA\u5B9A\u4E49\u7EC4\u4EF6)</h5><pre><code class="language-css">/* \u9876\u90E8\u56FA\u5B9A\u5B9A\u4F4D \xA0 \u6807\u9898\u8981\u5C45\u4E2D \xA0 \u81EA\u5B9A\u4E49\u6309\u94AE\u548C\u6807\u9898\u8981\u548C\u53F3\u8FB9\u5FAE\u4FE1\u539F\u751F\u7684\u80F6\u56CA\u4E0A\u4E0B\u5BF9\u9F50 */
.nav-wrap {
 position: fixed;
 width: 750rpx;
 top: 0;
 left: 0;
 right: 0;
 background: #f4f4f4;
 /* background-color: pink; */
 z-index: 9999999;
 transform: translate3d(0, 0, 0);
}

/* \u8FD4\u56DE\u952E */
.nav-capsule {
 width: 140rpx;
 /* background-color: skyblue; */
 /* \u8BA9\u91CC\u9762\u7684\u56FE\u7247\u5143\u7D20\u5782\u76F4\u5C45\u4E2D */
 display: flex;
 align-items: center;
}

.back-pre {
 width: 100rpx;
 height: 68rpx;
 /* background-color: green; */
}

/* \u6807\u9898 */
.nav-title {
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 max-width: 400rpx;
 margin: auto;
 /* background-color: deeppink; */
 /* \u6C34\u5E73\u5782\u76F4\u5C45\u4E2D */
 display: flex;
 align-items: center;
 justify-content: space-around;
 /* \u8D85\u51FA\u90E8\u5206\u7701\u7565\u53F7\u663E\u793A */
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 /* \u5B57\u4F53\u8BBE\u7F6E */
 color: #111111;
 font-size: 32rpx;
 font-weight: 500;
}
</code></pre><hr><h5>7. \u5728\u5176\u5B83\u9875\u9762\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7EC4\u4EF6\uFF08\u9700\u8981\u4FEE\u6539\u9ED8\u8BA4\u6837\u5F0F)</h5><pre><code class="language-js">/* index.json */
{
    &quot;usingComponents&quot;: {
    &quot;nav-bar&quot;: &quot;/components/navbar/navbar&quot;,
 }
}
</code></pre><hr><h5>8. index.html\u9875\u9762\uFF08\u9700\u8981\u4FEE\u6539\u9ED8\u8BA4\u6837\u5F0F)</h5><pre><code class="language-html">&lt;!-- index.html --&gt;

&lt;!-- \u5F15\u5165\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7EC4\u4EF6 --&gt;
&lt;nav-bar bind:goBack=&quot;_goBack&quot; nav-bgc-class=&quot;ex-nav-bgc-class&quot; nav-title-class=&quot;ex-nav-title-class&quot; ex-back-pre=&quot;ex-back-pre&quot; navbar-data=&#39;{{nvabarData}}&#39;&gt;
&lt;/nav-bar&gt;

</code></pre><hr><h5>8. index.wxss\u9875\u9762\uFF08\u9700\u8981\u4FEE\u6539\u9ED8\u8BA4\u6837\u5F0F)</h5><pre><code class="language-css">/* \u9700\u8981\u4ECE\u5916\u90E8\u4F20\u5165\u5BFC\u822A\u680F\u7EC4\u4EF6\u7684\u6837\u5F0F */

/* \u5BFC\u822A\u680F\u80CC\u666F\u8272 */

.ex-nav-bgc-class {
 background: transparent !important;
}

/* \u5BFC\u822A\u680F\u6807\u9898\u989C\u8272 */

.ex-nav-title-class {
 color: #fff !important;
}

/* \u5BFC\u822A\u680F\u8FD4\u56DE\u952E\u6837\u5F0F */
.ex-back-pre {
 width: 60rpx!important;
 height: 60rpx!important;
 margin-top: 4rpx!important;
 padding: 40rpx!important;
}
</code></pre><hr><h5>9. index.js\u9875\u9762\uFF08\u9700\u8981\u4FEE\u6539\u9ED8\u8BA4\u6837\u5F0F)</h5><pre><code class="language-js">const app = getApp()
Page({
 /**
* \u9875\u9762\u7684\u521D\u59CB\u6570\u636E
*/
 data: {
 // \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u9700\u8981\u7684\u53C2\u6570
     nvabarData: {
     showCapsule: 1, //\u662F\u5426\u663E\u793A\u5DE6\u4E0A\u89D2\u56FE\u6807  1\u8868\u793A\u663E\u793A 0\u8868\u793A\u4E0D\u663E\u793A
     title: &#39;&#39;, //\u5BFC\u822A\u680F \u4E2D\u95F4\u7684\u6807\u9898
     backSrc: &#39;/img/back3.png&#39;// \u8FD4\u56DE\u952E\u7684\u6837\u5F0F
 },
 // \u6B64\u9875\u9762 \u9875\u9762\u5185\u5BB9\u8DDD\u6700\u9876\u90E8\u7684\u8DDD\u79BB
    height: app.globalData.statusBarHeight + app.globalData.navBarHeight,
 },

 /**
* \u751F\u547D\u5468\u671F\u51FD\u6570--\u76D1\u542C\u9875\u9762\u52A0\u8F7D
*/
 onLoad: function(options) {},

 // \u70B9\u51FB \u9876\u90E8\u8FD4\u56DE\u952E\u65F6 \u8981\u8FD4\u56DE\u7684\u9875\u9762
 _goBack() {
     wx.switchTab({
        url: &#39;/pages/mer_index/mer_index&#39;,
     })
 },
})

</code></pre><hr><h5>10. \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u53EF\u4EE5\u4E0D\u4F20\u6837\u5F0F\uFF0C\u8FD9\u65F6\u4F1A\u91C7\u7528\u9ED8\u8BA4\u6837\u5F0F</h5><pre><code class="language-html">&lt;!-- \u5F15\u5165\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7EC4\u4EF6 --&gt;
&lt;nav-bar bind:goBack=&quot;_goBack&quot; navbar-data=&#39;{{nvabarData}}&#39;&gt;&lt;/nav-bar&gt;


</code></pre><h5>11. \u9875\u9762\u4E2D\u9ED8\u8BA4</h5><pre><code class="language-js">const app = getApp()
Page({

 /**
* \u9875\u9762\u7684\u521D\u59CB\u6570\u636E
*/
data: {
// \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u9700\u8981\u7684\u53C2\u6570
     nvabarData: {
         showCapsule: 1, //\u662F\u5426\u663E\u793A\u5DE6\u4E0A\u89D2\u56FE\u6807  1\u8868\u793A\u663E\u793A 0\u8868\u793A\u4E0D\u663E\u793A
         title: &#39;\u73B0\u6709\u4ED3\u5355&#39;, //\u5BFC\u822A\u680F \u4E2D\u95F4\u7684\u6807\u9898
     },
// \u6B64\u9875\u9762 \u9875\u9762\u5185\u5BB9\u8DDD\u6700\u9876\u90E8\u7684\u8DDD\u79BB
    height: app.globalData.statusBarHeight + app.globalData.navBarHeight,
}
})
</code></pre>`,35),r=[s],u={__name:"wx-custom",setup(l,{expose:n}){return n({frontmatter:{}}),(i,p)=>(a(),t("div",o,r))}};export{u as default};
