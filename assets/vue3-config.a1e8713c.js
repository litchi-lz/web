import{a as o,b as s,e}from"./index.cc4d245b.js";const n={class:"markdown-body"},r=e("h5",null,"\u89E3\u51B3\u65B9\u6CD5",-1),c=e("h5",null,"1.\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\uFF0C\u65B0\u5EFA vue.config.js",-1),l=e("hr",null,null,-1),a=e("pre",null,[e("code",{class:"language-js"},`module.exports = {
    publicPath: './'
}
`)],-1),_=e("h5",null,"2.\u4FEE\u6539\u8DEF\u7531\u914D\u7F6E\uFF0Crouter/index.js",-1),u=e("pre",null,[e("code",null,`\u9ED8\u8BA4\u4F7F\u7528\u7684 createWebHistory\uFF0C\u5C31\u662F\u56E0\u4E3A\u4F7F\u7528\u7684 createWebHistory\uFF0C\u6240\u4EE5\u4E0D\u663E\u793A\u5185\u5BB9\uFF0C\u6211\u4EEC\u9700\u8981\u6539\u6210  createWebHashHistory
`)],-1),i=e("hr",null,null,-1),h=e("pre",null,[e("code",{class:"language-js"},`// 1.\u9700\u8981\u5F15\u5165 
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 2.\u4FEE\u6539\u914D\u7F6E
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
`)],-1),d=e("h5",null,"3.\u91CD\u65B0\u6253\u5305",-1),p=[r,c,l,a,_,u,i,h,d],g={__name:"vue3-config",setup(m,{expose:t}){return t({frontmatter:{}}),(H,f)=>(o(),s("div",n,p))}};export{g as default};
