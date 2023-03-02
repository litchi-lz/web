import{a as o,b as a,G as r}from"./index.cc4d245b.js";const n={class:"markdown-body"},s=r(`<h5>1. \u7248\u672C\u63A7\u5236(\u591A\u6B21\u5C1D\u8BD5,\u7B26\u5408vue \u4E2D\u5C55\u793A\u3001\u8BFB\u53D6.md \u6587\u4EF6)</h5><pre><code class="language-js">node 12.16.2,
node-sass:^4.14.1,
sass-loader:^8.0.2, 
</code></pre><hr><h5>2. <a href="https://blog.csdn.net/weixin_42681555/article/details/121603656">\u4F7F\u7528\u6559\u7A0B\u94FE\u63A5</a></h5><hr><h5>3.\u7F16\u8BD1\u6253\u5305\u65F6\u51FA\u73B0</h5><pre><code class="language-js"> Cannot read property \u2018__vueMarkdownOptions__\u2018 of undefined
</code></pre><h5>\u89E3\u51B3\u529E\u6CD5vue.config.js\u6587\u4EF6\u4E2D\u914D\u7F6E</h5><pre><code class="language-js">
module.exports = {
  parallel: false,
};
</code></pre><hr><pre><code>vue cli \u5B98\u7F51\uFF1A\u662F\u5426\u4E3A Babel \u6216 TypeScript \u4F7F\u7528 thread-loader\u3002\u8BE5\u9009\u9879\u5728\u7CFB\u7EDF\u7684 CPU \u6709\u591A\u4E8E\u4E00\u4E2A\u5185\u6838\u65F6\u81EA\u52A8\u542F\u7528\uFF0C\u4EC5\u4F5C\u7528\u4E8E\u751F\u4EA7\u6784\u5EFA\u3002
</code></pre><hr><pre><code>\u7075\u5F02\u4E8B\u4EF6,\u4E0D\u52A0\u6709\u65F6\u5019\u4E5F\u6CA1\u95EE\u9898~~
</code></pre>`,13),t=[s],_={__name:"vue3-markdown",setup(c,{expose:e}){return e({frontmatter:{}}),(p,l)=>(o(),a("div",n,t))}};export{_ as default};
