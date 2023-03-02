import{a as e,b as t,G as o}from"./index.cc4d245b.js";const r={class:"markdown-body"},s=o(`<h4>1.\u6839\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2Aservers\u6587\u4EF6\u5939</h4><hr><h4>2.\u5728servers\u6587\u4EF6\u5939\u4E2D\u521B\u5EFAnetwork.js\u6587\u4EF6</h4><h6><em><strong>\u5C01\u88C5\u63A5\u53E3\u6587\u4EF6</strong></em></h6><pre><code class="language-js">//network.js
import { recentUrl} from &#39;./config.js&#39;

function recent(options) {
  return new Promise((resolve, reject) =&gt; {
    wx.request({
      url: recentUrl + options.url,
      header: {
        &#39;content-type&#39;: &#39;application/json&#39;,
      },
      method: options.method || &#39;get&#39;,
      data: options.data || {},
      success: function (res) {
        if (res.data.error === 5004) {
          wx.navigateTo({
            url: &quot;/pages/attestation/login/login&quot;
          });
        } else if (res.statusCode === 200) {
          resolve(res)
        }
      },
      fail: reject
    })
  })
}
export {
  recent,
};
</code></pre><hr><h6>\u67D0\u9875\u9762\u5355\u72EC\u5C01\u88C5\u63A5\u53E3</h6><pre><code class="language-js">//Interface.js
export function getinfo(param) {
  return request({
    url: &#39;/api/alarm/getinfo&#39;&#39;,
    method: &#39;POST&#39;,
    data: param
  })
}
</code></pre><hr><h4>3.\u5728\u9875\u9762\u4E2D\u8C03\u7528\u63A5\u53E3</h4><h6><em><strong>\u8C03\u7528\u63A5\u53E3\u6587\u4EF6</strong></em></h6><pre><code class="language-js">//index.js
import { getinfo} from &quot;../../servers/Interface.js&quot;;
Page({
   /**
    * \u751F\u547D\u5468\u671F\u51FD\u6570--\u76D1\u542C\u9875\u9762\u52A0\u8F7D
    */
   onLoad: function (options) {
    getinfo({data:2}).then((res)=&gt;{
        console.log(res)
    }).catch((err)=&gt;{
        console.log(err)
    })
   },
})

</code></pre>`,12),a=[s],g={__name:"wx-request",setup(c,{expose:n}){return n({frontmatter:{}}),(l,p)=>(e(),t("div",r,a))}};export{g as default};
