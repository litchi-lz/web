import{a as t,b as e,G as o}from"./index.cc4d245b.js";const a={class:"markdown-body"},r=o(`<h5>1.\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7EC4\u4EF6</h5><h6>curve-control.json \u6587\u4EF6</h6><pre><code class="language-js">{
   &quot;component&quot;: true,
   &quot;usingComponents&quot;: {
    &quot;ec-canvas&quot;:&quot;../../ec-canvas/ec-canvas&quot;
   }
}
</code></pre><hr><h6>curve-control.wxml \u6587\u4EF6</h6><pre><code class="language-html">&lt;ec-canvas style=&quot;&quot; id=&quot;mychart-dom-line&quot; canvas-id=&quot;mychart-line&quot; ec=&quot;{{ ec }}&quot;&gt;&lt;/ec-canvas&gt;
</code></pre><hr><h6>curve-control.js \u6587\u4EF6</h6><pre><code class="language-js">// \u5F15\u5165echarts
import * as echarts from &#39;../../ec-canvas/echarts&#39;
const getPixelRatio = () =&gt; {
  let pixelRatio = 0
  wx.getSystemInfo({
    success: function (res) {
      pixelRatio = res.pixelRatio
    },
    fail: function () {
      pixelRatio = 0
    }
  })
  return pixelRatio
}
let dpr = getPixelRatio()

Component({
  /**
 * \u7EC4\u4EF6\u7684\u5C5E\u6027\u5217\u8868
 */
  properties: {
    dataList: { // \u56FE\u8868\u7684\u6570\u636E
      type: Array,
      value: [],
    },
    config: {  //\u4FEE\u6539\u914D\u7F6E\u4FE1\u606F
      type: Object,
      value: {}
    },
    yAxis: { // y\u8F74
      type: Object,
      value: {
        x: &#39;center&#39;,
        type: &#39;value&#39;,
        minInterval: 1,
        splitLine: { lineStyle: { type: &#39;dashed&#39; } },
        nameTextStyle: {
          fontSize: 10,
          color: &quot;#80858D&quot;
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: &quot;#80858D&quot;,
            width: 0,
            type: &quot;solid&quot;
          }
        },
        axisTick: {
          show: true
        }
      }
    },
    xAxis: {
      type: Array,
      value: [] //\u53EF\u8BBE\u7F6E\u9ED8\u8BA4\u503C
    },
    legend: {
      type: Array,
      value: [] //\u53EF\u8BBE\u7F6E\u9ED8\u8BA4\u503C
    },
    colorList: {
      type: Array,
      value: [&quot;#069bec&quot;, &quot;#ae45dc&quot;, &quot;#30a671&quot;, &quot;#e7d024&quot;, &quot;#f86515&quot;],
    }
  },

  /**
  * \u7EC4\u4EF6\u7684\u521D\u59CB\u6570\u636E
  */
  data: {
    ec: {
      onInit: null
    }
  },

  /**
   * \u76D1\u542CdataList \u6570\u636E\u7684\u53D8\u5316\u4ECE\u800C\u5BF9echarts \u7684\u91CD\u65B0\u6E32\u67D3 
   */
  observers: {
    &#39;dataList&#39;: function (dataList) {
      if (this.chart) {
        // \u5224\u65AD\u662F\u5426\u5DF2\u7ECF\u521D\u59CB\u5316\u8FC7\u56FE\u6807\uFF0C\u5982\u679C\u5DF2\u7ECF\u521D\u59CB\u5316\u8FC7\u4E86\uFF0C\u90A3\u5C31\u76F4\u63A5\u95EF\u5165\u5F53\u524D\u9700\u8981\u6E32\u67D3\u7684option
        this.chart.setOption(this.createOptions());
        return
      }

      this.setData({
        ec: {
          onInit: this.initChart.bind(this)
        }
      });

    }
  },
  lifetimes: {

  },
  /**
  * \u7EC4\u4EF6\u7684\u65B9\u6CD5\u5217\u8868
  */
  methods: {
    initChart(canvas, width, height, dpr) {

      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });

      canvas.setChart(chart);
      let option = this.createOptions();
      this.chart = chart;
      chart.setOption(option);
      return chart;
    },

    createOptions() {
      return {
        // \u8C03\u8272\u76D8\u989C\u8272\u5217\u8868
        color: this.data.colorList,
        legend: {
          data: this.data.legend,
          bottom: 0, // legend\u5728\u4E0B\u65B9
          left: &#39;center&#39;, // \u5C45\u4E2D
          icon: &#39;pin&#39;, // \u5C0F\u5706\u70B9
          backgroundColor: &#39;#fff&#39;,
          z: 100
        },
        grid: {
          top: &#39;10%&#39;,
          left: &#39;4%&#39;,
          height: 160,
          containLabel: true
        },
        tooltip: {
          // \u70B9\u51FB\u4E4B\u540E\u7684\u6D6E\u7A97
          show: true,
          trigger: &#39;axis&#39;,
          backgroundColor: &#39;rgba(0,0,0,0.6)&#39;,
          color: &quot;#fff&quot;,
          textStyle: {
            color: &quot;#fff&quot; //\u8BBE\u7F6E\u6587\u5B57\u989C\u8272
          },
        },
        xAxis: {
          type: &#39;category&#39;,
          boundaryGap: false,
          offset: 6,
          axisTick: {
            show: false
          },
          axisLine: {
            // x\u8F74\u7EBF\u7684\u989C\u8272\u4EE5\u53CA\u5BBD\u5EA6
            show: true,
            lineStyle: {
              color: &quot;#80858D&quot;,
              width: 1,
              type: &quot;solid&quot;
            }
          },
          // axisLabel:{
          //     interval: this.data.xAxis.length &gt; 9 ? Math.floor(this.data.xAxis.length / 4) : 0,
          //     showMinLabel: true,  //\u662F\u5426\u663E\u793A\u6700\u5C0F tick \u7684 label
          //   // showMaxLabel: true,  //\u662F\u5426\u663E\u793A\u6700\u5927 tick \u7684 label
          // },
          data: this.data.xAxis,
          // show: false
        },
        yAxis: this.data.yAxis,
        series: this.data.dataList
      }
    },
  }
})

</code></pre><hr><h5>2. \u5F53\u524D\u9875\u9762\u8FD9\u4F7F\u7528\u6539\u7EC4\u4EF6</h5><h6>index.json</h6><pre><code class="language-js">{
  &quot;usingComponents&quot;: {
    &quot;curve-control&quot;:&quot;/component/curve-control/curve-control&quot;
  },
}
</code></pre><hr><h6>index.wxml</h6><pre><code class="language-html">&lt;view class=&quot;echart_panel&quot;&gt;
      &lt;curve-control xAxis=&quot;{{currentxAxis}}&quot; dataList=&quot;{{currentSeries}}&quot; &gt;&lt;/curve-control&gt;
&lt;/view&gt;
/*\u7236\u5143\u7D20\u9700\u8981\u5BBD\u9AD8\uFF0C\u5426\u5219\u65E0\u6CD5\u663E\u793A*/
</code></pre><hr><pre><code class="language-js">
Page({

   /**
    * \u9875\u9762\u7684\u521D\u59CB\u6570\u636E
    */
 data: {
    currentxAxis:[],
    currentSeries:[],
    currentConfig:{},
   },
})
</code></pre>`,18),s=[r],d={__name:"wx-echarts",setup(i,{expose:n}){return n({frontmatter:{}}),(l,u)=>(t(),e("div",a,s))}};export{d as default};
