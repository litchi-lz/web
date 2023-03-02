import{a as e,b as n,G as a}from"./index.cc4d245b.js";const o={class:"markdown-body"},r=a(`<h5>\u8001\u7248\u5B89\u88C5sass</h5><h5>VUE \u63D0\u793A Failed to resolve Loader: sass-loader</h5><h6>\u67E5\u627E\u95EE\u9898\uFF1A\u8BF4\u660E\u9879\u76EE\u4E2D\u6CA1\u6709 sass-loader\u4F9D\u8D56\uFF0C\u7531\u4E8Esass-loader\u9700\u8981node-sass\u7EC4\u4EF6,\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5B89\u88C5\u7684\u662F\u4E24\u4E2A\u7EC4\u4EF6\uFF1A</h6><pre><code class="language-js">node-sass

sass-loader
</code></pre><hr><h5>\u4F46\u4E0D\u80FD\u76F4\u63A5\u5B89\u88C5\u6700\u65B0\u7684\uFF1A</h5><pre><code class="language-js">
npm i node-sass -D

npm i sass-loader -D

\u8FD9\u6837\u4F1A\u62A5\u9519\uFF1ASyntax Error: TypeError: this.getOptions is not a function
</code></pre><hr><h5>\u7ED3\u5408\u62A5\u9519\u539F\u56E0\u5F97\u51FA\uFF1A</h5><pre><code class="language-js">
\u5B89\u88C5\u65F6\u6307\u5B9A\u7248\u672C\u5373\u4E0D\u4F1A\u51FA\u73B0Syntax Error: TypeError: this.getOptions is not a function

npm i -D sass-loader@8.x // \u5B89\u88C5

npm i -D node-sass@4.14.1 // \u5B89\u88C5

</code></pre><hr><h5>\u65B0\u7248\u5B89\u88C5sass</h5><pre><code>npm i -D sass
</code></pre><hr><h5>\u540C\u7406\u4E5F\u53EF\u80FD\u662Fless-loader\u5BFC\u81F4\u7684</h5><p>\u901A\u5E38\u63D0\u793A</p><pre><code class="language-js">Syntax Error: TypeError: this.getOptions is not a function

\u63D0\u793A\u8BED\u6CD5\u9519\u8BEF\u90FD\u662F \u7248\u672C\u95EE\u9898

</code></pre><hr><h5>\u6240\u4EE5\u89E3\u51B3\u95EE\u9898\u4E0E\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u8BB0\u5F97\u6307\u5B9A\u7248\u672C\uFF0C\u4E0D\u8981\u6700\u65B0\u7248\u7684\u76F4\u63A5\u5B89\u88C5</h5><h6>\u901A\u8FC7\u964D\u7EA7\u7248\u672C\u53F7\u662F\u6700\u5FEB\u6377\u7684\u65B9\u6CD5</h6><pre><code class="language-js">\u5378\u8F7D less-loader

npm uninstall --save less-loader
</code></pre><hr><h5>\u5B89\u88C5\u4E00\u4E2A\u4F4E\u7248\u672C\u7684</h5><pre><code class="language-js">npm install -D less-loader@7.3.0
</code></pre><hr>`,25),t=[r],i={__name:"vue3-scss",setup(c,{expose:s}){return s({frontmatter:{}}),(l,p)=>(e(),n("div",o,t))}};export{i as default};
