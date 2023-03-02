import{a as t,b as a,e}from"./index.cc4d245b.js";const l={class:"markdown-body"},o=e("h4",null,"1.\u81EA\u5B9A\u4E49watch\u5C5E\u6027",-1),c=e("h6",null,"watch.js\u6587\u4EF6",-1),s=e("hr",null,null,-1),r=e("pre",null,[e("code",{class:"language-JavaScript"},`const observe = (obj, key, watchFun, deep, page) =>
{
  let val = obj[key];
  if (val != null && typeof val === "object" && deep)
  {
    Object.keys(val).forEach((item) => {
      observe(val, item, watchFun, deep, page);
    });
  }
  
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    set: (value) =>
    {
      watchFun.call(page, value, val);
      val = value;
      if (deep)
      {
        observe(obj, key, watchFun, deep, page);
      }
    },
    get: () => {
      return val;
    }
  });
}
  
/**
 * @name: \u81EA\u5B9A\u4E49watch \u76D1\u542C\u5C5E\u6027
 * @author: camellia
 * @date: 2021-11-12
 */
const setWatcher = (page) =>
{
  let data = page.data;
  let watch = page.watch;
  Object.keys(watch).forEach((item) => {
    let targetData = data;
    let keys = item.split(".");
    for (let i = 0; i < keys.length - 1; i++)
    {
      targetData = targetData[keys[i]];
    }
    let targetKey = keys[keys.length - 1];
    let watchFun = watch[item].handler || watch[item];
    let deep = watch[item].deep;
    observe(targetData, targetKey, watchFun, deep, page);
  });
}
  
module.exports = {
  setWatcher
};

`)],-1),h=e("h4",null,"2. \u8C03\u7528\u6587\u4EF6",-1),d=e("hr",null,null,-1),i=e("pre",null,[e("code",{class:"language-javascript"},`// \u5F15\u5165\u81EA\u5B9A\u4E49\u76D1\u542C\u5C5E\u6027
const watch = require("../../utils/watch.js");
Page({
  data: {
    name: "\u65F6\u95F4\u91CC\u7684"
  },
  //\u5728onload\u4E2D\u5B9E\u4F8B\u5316\u76D1\u542C\u51FD\u6570
  onLoad() {
    watch.setWatcher(this);
  },
  //\u8C03\u7528watch\u76D1\u542C\u5C5E\u6027
  watch: {
    name: function(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
});

`)],-1),u=[o,c,s,r,h,d,i],v={__name:"wx-watch",setup(p,{expose:n}){return n({frontmatter:{}}),(w,g)=>(t(),a("div",l,u))}};export{v as default};
