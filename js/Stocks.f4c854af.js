(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Stocks"],{2977:function(t,a,e){"use strict";var s=e("83be"),n=e.n(s);n.a},"83be":function(t,a,e){},"958c":function(t,a,e){},a455:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container flex-center"},[t.$store.state.loading?t._e():e("Table",{attrs:{type:t.bids}}),t.$store.state.loading?e("Loader"):e("Table",{attrs:{type:t.asks}})],1)},n=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table"},[e("div",{staticClass:"table__container"},[e("table",{staticClass:"table__fixed"},[t._m(0),e("tbody",{staticClass:"table__body"},t._l(t.type,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"table__amount"},[e("span",[t._v(" "+t._s(parseFloat(a[1]).toFixed(2))+" ")])]),e("td",{staticClass:"table__price"},[e("span",[t._v(" "+t._s(parseFloat(a[0]).toFixed(7))+" ")])]),e("td",{staticClass:"table__total"},[e("span",[t._v(" "+t._s((parseFloat(a[1])*parseFloat(a[0])).toFixed(7))+" ")])])])})),0)])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"table__header"},[e("tr",[e("th",{staticClass:"table__amount"},[e("span",[t._v("Amount")])]),e("th",{staticClass:"table__price"},[e("span",[t._v("Price")])]),e("th",{staticClass:"table__total"},[e("span",[t._v("Total")])])])])}],i={name:"Table",props:{type:Array}},r=i,o=(e("2977"),e("2877")),_=Object(o["a"])(r,l,c,!1,null,"ac4311dc",null),b=_.exports,u=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loader"},[e("div",{staticClass:"lds-facebook"},[e("div"),e("div"),e("div")])])}],p=(e("ba4b"),{}),f=Object(o["a"])(p,u,d,!1,null,"7bb1c34e",null),v=f.exports,m={name:"Stocks",components:{Table:b,Loader:v},computed:{bids:function(){return this.$store.state.bids},asks:function(){return this.$store.state.asks}}},C=m,h=Object(o["a"])(C,s,n,!1,null,"37a4cfb2",null);a["default"]=h.exports},ba4b:function(t,a,e){"use strict";var s=e("958c"),n=e.n(s);n.a}}]);
//# sourceMappingURL=Stocks.f4c854af.js.map