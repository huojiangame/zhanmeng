(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-gonglue-gonglue"],{"0888":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".uni-collapse-cell--open[data-v-13dc0ca6]{background-color:#fff}.collapse-content[data-v-13dc0ca6]{padding:%?10?% %?30?%;-webkit-user-select:text;user-select:text}.item-wrap[data-v-13dc0ca6]{color:#969799;padding-bottom:%?20?%}",""]),e.exports=t},"0dab":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={uniCollapse:n("34fa").default,uniCollapseItem:n("dfa0").default},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("uni-collapse",{attrs:{accordion:"true"}},e._l(e.gonglue,(function(t,a){return n("uni-collapse-item",{key:a,attrs:{title:t.title,open:0===a}},[n("v-uni-view",{staticClass:"collapse-content"},e._l(t.content,(function(t,a){return n("v-uni-view",{key:a,staticClass:"item-wrap"},[e._v(e._s(t))])})),1)],1)})),1)],1)},o=[]},2747:function(e,t,n){var a=n("0888");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var u=n("4f06").default;u("39be8032",a,!0,{sourceMap:!1,shadowMode:!1})},"41d1":function(e,t,n){"use strict";n.r(t);var a=n("ab43"),u=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=u.a},"5a1b":function(e,t,n){"use strict";var a=n("2747"),u=n.n(a);u.a},"75ed":function(e,t,n){"use strict";n.r(t);var a=n("0dab"),u=n("41d1");for(var o in u)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n("5a1b");var c=n("f0c5"),r=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"13dc0ca6",null,!1,a["a"],void 0);t["default"]=r.exports},ab43:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n("c7eb")),o=a(n("1da1")),c=n("0ea9"),r={data:function(){return{activeName:0,gonglue:"",desc:{summary:[]}}},onLoad:function(){this.handleGetGonglue()},methods:{handleGetGonglue:function(){var e=this;return(0,o.default)((0,u.default)().mark((function t(){return(0,u.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,c.getGonglue)();case 2:e.gonglue=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}};t.default=r}}]);