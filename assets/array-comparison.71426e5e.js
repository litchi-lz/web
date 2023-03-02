import{a as n,b as t,G as a}from"./index.cc4d245b.js";const e={class:"markdown-body"},o=a(`<h4>js\u83B7\u53D6\u4E24\u4E2A\u6570\u7EC4\u53CA\u6570\u7EC4\u5BF9\u8C61\u4E2D\u76F8\u540C\u548C\u4E0D\u76F8\u540C\u7684\u503C</h4><hr><h5>1. \u83B7\u53D6\u4E24\u4E2A\u6570\u7EC4\u4E2D\u76F8\u540C\u7684\u5143\u7D20</h5><pre><code class="language-js">/**
 * 
 * @param {*} arr1 = [0,1,2,3,4,5] 
 * @param {*} arr2 = [0,4,6,1,3,9]
 * @returns \u83B7\u53D6\u4E24\u4E2A\u6570\u7EC4\u4E2D\u76F8\u540C\u7684\u5143\u7D20
 */
function getArrEqual(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i &lt; arr2.length; i++) {
        for (let j = 0; j &lt; arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                newArr.push(arr1[j]);
            }
        }
    }
    return newArr;
}
</code></pre><hr><h5>2. \u83B7\u53D6\u4E24\u4E2A\u6570\u7EC4\u4E2D\u4E0D\u76F8\u540C\u7684\u5143\u7D20</h5><pre><code class="language-js">/**
 * 
 * @param {*} arr1 = [0,1,2,3,4,5] 
 * @param {*} arr2 = [0,4,6,1,3,9] 
 * @returns \u83B7\u53D6\u4E24\u4E2A\u6570\u7EC4\u4E2D\u4E0D\u76F8\u540C\u7684\u5143\u7D20
 */
function getArrDifference(arr1, arr2) {
    return arr1.concat(arr2).filter(function (v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v);
    });
}
</code></pre><hr><h5>3. \u83B7\u53D6\u4E24\u4E2A\u6570\u7EC4\u5BF9\u8C61\u4E2D\u76F8\u540C\u7684\u503C</h5><pre><code class="language-js">/**
 * 
 * @param {*} arr1 = [ {&quot;id&quot;: &quot;A&quot;},{&quot;id&quot;: &quot;B&quot;}]; 
 * @param {*} arr2 = [ {&quot;id&quot;: &quot;A&quot;}, {&quot;id&quot;: &quot;B&quot;},{&quot;id&quot;: &quot;C&quot;}];
 * @returns \u83B7\u53D6\u4E24\u4E2A\u6570\u7EC4\u5BF9\u8C61\u4E2D\u76F8\u540C\u7684\u503C
 */
function getSameArrObj(arr1, arr2) {
    var result = [];
    for (var i = 0; i &lt; arr2.length; i++) {
        var obj = arr2[i];
        var id = obj.id;
        var isExist = false;
        for (var j = 0; j &lt; arr1.length; j++) {
            var aj = arr1[j];
            var n = aj.id;
            if (n == id) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            result.push(obj);
        }
    }
    return result;
}
</code></pre><hr><h5>3. \u83B7\u53D6\u4E24\u4E2A\u6570\u7EC4\u5BF9\u8C61\u4E2D\u76F8\u540C\u7684\u503C</h5><pre><code class="language-js">/**
 * 
 * @param {*} arr1 = [ {&quot;id&quot;: &quot;A&quot;},{&quot;id&quot;: &quot;B&quot;}]; 
 * @param {*} arr2 = [ {&quot;id&quot;: &quot;A&quot;}, {&quot;id&quot;: &quot;B&quot;},{&quot;id&quot;: &quot;C&quot;}];
 * @returns 
 */
function getDifArrObj(arr1, arr2) {
    var result = [];
    for (var i = 0; i &lt; arr2.length; i++) {
        var obj = arr2[i];
        var id = obj.id;
        var isExist = false;
        for (var j = 0; j &lt; arr1.length; j++) {
            var aj = arr1[j];
            var n = aj.id;
            if (n == id) {
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            result.push(obj);
        }
    }
    return result;
}
</code></pre><hr><h5>4. \u6570\u7EC4\u5BF9\u8C61\u4E2D\u66F4\u5177\u67D0\u4E2A\u503C\u8FDB\u884C\u6392\u5E8F</h5><pre><code class="language-js">function compare(property) {
	return function (value1, value2) {
		let v1 = value1[property];
		let v2 = value2[property];
		return v1 - v2
	}
}
</code></pre>`,16),u=[o],d={__name:"array-comparison",setup(i,{expose:r}){return r({frontmatter:{}}),(l,c)=>(n(),t("div",e,u))}};export{d as default};
