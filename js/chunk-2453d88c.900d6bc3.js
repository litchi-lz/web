(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2453d88c"],{"4c6b":function(e,c,t){},"5c64":function(e,c,t){"use strict";t.r(c);var n=t("7a23"),o={id:"md"};function r(e,c,t,r,a,d){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"sub-body",style:Object(n["normalizeStyle"])({width:e.screenW})},[Object(n["createElementVNode"])("div",{class:"markdown-body",style:Object(n["normalizeStyle"])({height:e.screenH,width:e.screenMdW})},[Object(n["createElementVNode"])("div",o,[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.parameter)))])],4)],4)}var a=t("5530"),d=t("5502"),s=t("6c02"),l=t("5a79"),i={setup:function(){var e=Object(d["b"])(),c=Object(s["c"])();console.log(c),Object(n["onBeforeMount"])((function(){console.log("我进来了");var n="".concat(document.documentElement.clientHeight),o="".concat(document.documentElement.clientWidth);console.log(n),t.screenH=n-80+"px",t.screenW=o-300+"px",t.screenMdW=(o-300)/1.3+"px",t.screenAW=(o-300)/2.1+"px",e.commit("article/labelchang",!1),t.parameter=c.query.mdId;var r=l["a"].service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout((function(){r.close()}),500)}));var t=Object(n["reactive"])({parameter:"WxRequest",screenH:0,screenW:0,screenMdW:0,screenAW:0});return Object(a["a"])({},Object(n["toRefs"])(t))}},b=(t("eedd"),t("d959")),u=t.n(b);const m=u()(i,[["render",r],["__scopeId","data-v-81236adc"]]);c["default"]=m},eedd:function(e,c,t){"use strict";t("4c6b")}}]);