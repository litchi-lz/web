(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06a3ba0c"],{7227:function(e,t,a){"use strict";var n=[{id:1,blogTitle:"原生接口的封装",blogDescribe:"基于小程序原生request封装Promise风格的请求,避免多级回调(回调地狱),对于网络请求错误统一处理分发",mdId:"WxRequest",createDate:"2021-11-12 20:11:13",watchCount:51},{id:2,blogTitle:"GIS地图及导航的使用",blogDescribe:"基于小程序原生组件map与腾讯位置服务实现定位及导航的功能",mdId:"WxGis",createDate:"2021-11-12 20:11:13",watchCount:51},{id:3,blogTitle:"自定义watch监听属性",blogDescribe:"通过Object.defineProperty()方法，来手动劫持对象的getter/setter，从而实现给对象赋值时(调用setter)执行watch对象中相对应的函数，达到监听效果",mdId:"WxWatch",createDate:"2022-6-28 09:11:13",watchCount:51},{id:3,blogTitle:"echarts的使用及踩坑",blogDescribe:"基于wx-echarts组件实现曲线图标等功能",mdId:"WxRequest",createDate:"2021-11-12 20:11:13",watchCount:51},{id:4,blogTitle:"域名不合法",blogDescribe:"公众平台配置域名后还是出现域名不合法错误",mdId:"WxRequest",createDate:"2021-11-12 20:11:13",watchCount:51},{id:5,blogTitle:"web-view提示已停止访问该网页",blogDescribe:"该网页涉及暴力，色情，低俗等内容",mdId:"微信小程序",createDate:"2021-11-12 20:11:13",watchCount:51}],r=[{id:1,blogTitle:"动态修改animation效果无效问题",blogDescribe:"动态修改animation效果无效问题(vue2与vue3通用)",mdId:"vue2-animation",createDate:"2021-11-12 20:11:13",addtrss:"https://blog.csdn.net/qq_38783557/article/details/124061163",watchCount:51},{id:2,blogTitle:"调试台无法选中该DOM",blogDescribe:"层级为一个原因",mdId:"微信小程序",createDate:"2021-11-12 20:11:13",watchCount:51},{id:3,blogTitle:"echarts的使用及踩坑",blogDescribe:"基于wx-echarts组件实现曲线图标等功能",mdId:"微信小程序",createDate:"2021-11-12 20:11:13",watchCount:51},{id:4,blogTitle:"域名不合法",blogDescribe:"公众平台配置域名后还是出现域名不合法错误",mdId:"微信小程序",createDate:"2021-11-12 20:11:13",watchCount:51},{id:5,blogTitle:"web-view提示已停止访问该网页",blogDescribe:"该网页涉及暴力，色情，低俗等内容",mdId:"微信小程序",createDate:"2021-11-12 20:11:13",watchCount:51}],s=[{id:1,blogTitle:"Vue3中监测Vuex中数据变化",blogDescribe:"监测Vuex中的某个值作为key,实时更新当前页面中的数据",mdId:"vue3-monitorVuex",createDate:"2022-6-21 13:41:33",watchCount:8},{id:2,blogTitle:"less中修改element-plus样式",blogDescribe:"修改elementplus样式在调试器中无法显示(vue2也适用)",mdId:"vue3-alterStyle",createDate:"2022-6-21 14:11:10",watchCount:51},{id:3,blogTitle:"vue打包Markdown文件报错",blogDescribe:"Cannot read property '__vueMarkdownOptions__' of undefined",mdId:"vue3-Markdown",address:" https://blog.csdn.net/weixin_42681555/article/details/121603656(使用),https://blog.csdn.net/weixin_42681555/article/details/121931367(误以为是node版本),",base:"node-sass:^4.14.1,sass-loader:^8.0.2, node 12.16.2",createDate:"2021-11-12 20:11:13",watchCount:51},{id:4,blogTitle:"SCSS安装及使用时报错",blogDescribe:"",mdId:"vue3-scss",createDate:"2021-11-12 20:11:13",address:"https://blog.51cto.com/u_15075520/4152764",watchCount:51},{id:5,blogTitle:"鼠标视觉差效果实现parallax-js",blogDescribe:"使用parallax及遇到点击无法触发事件问题",classId:"微信小程序",createDate:"https://codepen.io/alphardex/pens/public?cursor=ZD0xJm89MCZwPTEmdj01NTc3OTkwNQ==",address:"https://blog.csdn.net/qq_38057434/article/details/115962466",watchCount:51},{id:6,blogTitle:"Vue3打包文件后,",blogDescribe:"使用parallax及遇到点击无法触发事件问题",classId:"微信小程序",createDate:"https://codepen.io/alphardex/pens/public?cursor=ZD0xJm89MCZwPTEmdj01NTc3OTkwNQ==",address:"https://blog.csdn.net/qq_38057434/article/details/115962466",watchCount:51}];t["a"]={WeChatList:n,Vue2List:r,Vue3List:s}},c197:function(e,t,a){(function(t){var a="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++a}),e["__id"]},clone:function e(t,a){var n,s;switch(a=a||{},r.util.type(t)){case"Object":if(s=r.util.objId(t),a[s])return a[s];for(var i in n={},a[s]=n,t)t.hasOwnProperty(i)&&(n[i]=e(t[i],a));return n;case"Array":return s=r.util.objId(t),a[s]?a[s]:(n=[],a[s]=n,t.forEach((function(t,r){n[r]=e(t,a)})),n);default:return t}},getLanguage:function(e){while(e&&!t.test(e.className))e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}},isActive:function(e,t,a){var n="no-"+t;while(e){var r=e.classList;if(r.contains(t))return!0;if(r.contains(n))return!1;e=e.parentElement}return!!a}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var a=r.util.clone(r.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(e,t,a,n){n=n||r.languages;var s=n[e],i={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=s[l])}var u=n[e];return n[e]=i,r.languages.DFS(r.languages,(function(t,a){a===u&&t!=e&&(this[t]=i)})),i},DFS:function e(t,a,n,s){s=s||{};var i=r.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],n||l);var o=t[l],u=r.util.type(o);"Object"!==u||s[i(o)]?"Array"!==u||s[i(o)]||(s[i(o)]=!0,e(o,a,l,s)):(s[i(o)]=!0,e(o,a,null,s))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),r.hooks.run("before-all-elements-highlight",n);for(var s,i=0;s=n.elements[i++];)r.highlightElement(s,!0===t,n.callback)},highlightElement:function(a,n,s){var i=r.util.getLanguage(a),l=r.languages[i];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var o=a.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var u=a.textContent,c={element:a,language:i,grammar:l,code:u};function g(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),s&&s.call(c.element)}if(r.hooks.run("before-sanity-check",c),o=c.element.parentElement,o&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!c.code)return r.hooks.run("complete",c),void(s&&s.call(c.element));if(r.hooks.run("before-highlight",c),c.grammar)if(n&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){g(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else g(r.highlight(c.code,c.grammar,c.language));else g(r.util.encode(c.code))},highlight:function(e,t,a){var n={code:e,grammar:t,language:a};return r.hooks.run("before-tokenize",n),n.tokens=r.tokenize(n.code,n.grammar),r.hooks.run("after-tokenize",n),s.stringify(r.util.encode(n.tokens),n.language)},tokenize:function(e,t){var a=t.rest;if(a){for(var n in a)t[n]=a[n];delete t.rest}var r=new o;return u(r,r.head,e),l(e,r,t,r.head,0),g(r)},hooks:{all:{},add:function(e,t){var a=r.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=r.hooks.all[e];if(a&&a.length)for(var n,s=0;n=a[s++];)n(t)}},Token:s};function s(e,t,a,n){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length}function i(e,t,a,n){e.lastIndex=t;var r=e.exec(a);if(r&&n&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function l(e,t,a,n,o,g){for(var d in a)if(a.hasOwnProperty(d)&&a[d]){var p=a[d];p=Array.isArray(p)?p:[p];for(var h=0;h<p.length;++h){if(g&&g.cause==d+","+h)return;var f=p[h],m=f.inside,b=!!f.lookbehind,v=!!f.greedy,w=f.alias;if(v&&!f.pattern.global){var y=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,y+"g")}for(var x=f.pattern||f,k=n.next,F=o;k!==t.tail;F+=k.value.length,k=k.next){if(g&&F>=g.reach)break;var A=k.value;if(t.length>e.length)return;if(!(A instanceof s)){var D,$=1;if(v){if(D=i(x,F,e,b),!D)break;var C=D.index,S=D.index+D[0].length,T=F;T+=k.value.length;while(C>=T)k=k.next,T+=k.value.length;if(T-=k.value.length,F=T,k.value instanceof s)continue;for(var _=k;_!==t.tail&&(T<S||"string"===typeof _.value);_=_.next)$++,T+=_.value.length;$--,A=e.slice(F,T),D.index-=F}else if(D=i(x,0,A,b),!D)continue;C=D.index;var E=D[0],j=A.slice(0,C),I=A.slice(C+E.length),O=F+A.length;g&&O>g.reach&&(g.reach=O);var P=k.prev;j&&(P=u(t,P,j),F+=j.length),c(t,P,$);var N=new s(d,m?r.tokenize(E,m):E,w,E);if(k=u(t,P,N),I&&u(t,k,I),$>1){var q={cause:d+","+h,reach:O};l(e,t,a,k.prev,F,q),g&&q.reach>g.reach&&(g.reach=q.reach)}}}}}}function o(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,a){var n=t.next,r={value:a,prev:t,next:n};return t.next=r,n.prev=r,e.length++,r}function c(e,t,a){for(var n=t.next,r=0;r<a&&n!==e.tail;r++)n=n.next;t.next=n,n.prev=t,e.length-=r}function g(e){var t=[],a=e.head.next;while(a!==e.tail)t.push(a.value),a=a.next;return t}if(e.Prism=r,s.stringify=function e(t,a){if("string"==typeof t)return t;if(Array.isArray(t)){var n="";return t.forEach((function(t){n+=e(t,a)})),n}var s={type:t.type,content:e(t.content,a),tag:"span",classes:["token",t.type],attributes:{},language:a},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(s.classes,i):s.classes.push(i)),r.hooks.run("wrap",s);var l="";for(var o in s.attributes)l+=" "+o+'="'+(s.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+l+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),n=a.language,s=a.code,i=a.immediateClose;e.postMessage(r.highlight(s,r.languages[n],n)),i&&e.close()}),!1),r):r;var d=r.util.currentScript();function p(){r.manual||r.highlightAll()}if(d&&(r.filename=d.src,d.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var h=document.readyState;"loading"===h||"interactive"===h&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return r}(a);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup["tag"].inside["attr-value"].inside["entity"]=n.languages.markup["entity"],n.languages.markup["doctype"].inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if("undefined"!==typeof n&&"undefined"!==typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading…",t=function(e,t){return"✖ Error "+e+" while fetching file: "+t},a="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",i="loading",l="loaded",o="failed",u="pre[data-src]:not(["+s+'="'+l+'"]):not(['+s+'="'+i+'"])',c=/\blang(?:uage)?-([\w-]+)\b/i;n.hooks.add("before-highlightall",(function(e){e.selector+=", "+u})),n.hooks.add("before-sanity-check",(function(c){var g=c.element;if(g.matches(u)){c.code="",g.setAttribute(s,i);var p=g.appendChild(document.createElement("CODE"));p.textContent=e;var h=g.getAttribute("data-src"),f=c.language;if("none"===f){var m=(/\.(\w+)$/.exec(h)||[,"none"])[1];f=r[m]||m}d(p,f),d(g,f);var b=n.plugins.autoloader;b&&b.loadLanguages(f);var v=new XMLHttpRequest;v.open("GET",h,!0),v.onreadystatechange=function(){4==v.readyState&&(v.status<400&&v.responseText?(g.setAttribute(s,l),p.textContent=v.responseText,n.highlightElement(p)):(g.setAttribute(s,o),v.status>=400?p.textContent=t(v.status,v.statusText):p.textContent=a))},v.send(null)}})),n.plugins.fileHighlight={highlight:function(e){for(var t,a=(e||document).querySelectorAll(u),r=0;t=a[r++];)n.highlightElement(t)}};var g=!1;n.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}function d(e,t){var a=e.className;a=a.replace(c," ")+" language-"+t,e.className=a.replace(/\s+/g," ").trim()}}()}).call(this,a("c8ba"))},ef62:function(e,t,a){}}]);