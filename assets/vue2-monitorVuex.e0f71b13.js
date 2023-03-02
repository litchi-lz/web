import{a as e,b as o,e as n}from"./index.cc4d245b.js";const a={class:"markdown-body"},l=n("h4",null,"\u4F7F\u7528computed\u548Cwatch\u76D1\u542Cvuex\u6570\u636E\u53D8\u5316",-1),s=n("hr",null,null,-1),c=n("h4",null,"1. conputed\u4ECEVuex\u4E2D\u83B7\u53D6\u9700\u8981\u76D1\u542C\u7684\u5BF9\u8C61\uFF0C\u8D4B\u503C\u7ED9Obj\uFF1B",-1),d=n("pre",null,[n("code",{class:"language-javascript"},`export default{
    component:{},
    data(){
        return{}
    },
    computed:{
        Obj(){
            return this.$store.state.data.age
        }
    },
    watch:{
        Obj(newVal,oldVal){
            //\u53EF\u4EE5\u5BF9\u6570\u636E\u6267\u884C\u76F8\u5E94\u7684\u64CD\u4F5C
            console.log(newVal,oldVal)
        }
    },
    methods:{},
}

`)],-1),r=n("hr",null,null,-1),u=n("h4",null,"2. \u76F4\u63A5\u5BF9Vuex\u5BF9\u8C61\u8FDB\u884Cwatch\u76D1\u542C",-1),_=n("pre",null,[n("code",{class:"language-js"},`export default{
    component:{},
    data(){
        return{}
    },
    watch:{
        '$store.state.data.age'(newVal,oldVal){
            //\u5BF9\u6570\u636E\u6267\u884C\u64CD\u4F5C
            console.log(newVal,oldVal)
        }
    },
    methods:{}
}
`)],-1),h=[l,s,c,d,r,u,_],g={__name:"vue2-monitorVuex",setup(p,{expose:t}){return t({frontmatter:{}}),(m,V)=>(e(),o("div",a,h))}};export{g as default};
