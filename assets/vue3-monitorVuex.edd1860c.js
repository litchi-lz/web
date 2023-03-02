import{a as s,b as n,e}from"./index.cc4d245b.js";const o={class:"markdown-body"},r=e("h6",null,".vue\u6587\u4EF6",-1),a=e("hr",null,null,-1),c=e("pre",null,[e("code",{class:"language-js"},`import { reactive, onMounted, watch,watchEffect,} from "vue";
export default {
  setup(props) {
    const OverviewList = reactive({
      blogs: [],
      sketchType: "",
    });
    //\u65B9\u6CD51
    watch(()=>store.state.article.articleType,(newValue,oldValue)=>{
        OverviewList.blogs = muster[OverviewList.sketchType]
     })
    //\u65B9\u6CD52(\u63A8\u8350)
    watchEffect(() => {
      OverviewList.sketchType = store.state.article.articleType;
      OverviewList.blogs = muster[OverviewList.sketchType];
    });
    return {
      ...toRefs(OverviewList),
      goDetails,
    };
  },
};
`)],-1),i=[r,a,c],h={__name:"vue3-monitorVuex",setup(l,{expose:t}){return t({frontmatter:{}}),(v,p)=>(s(),n("div",o,i))}};export{h as default};
