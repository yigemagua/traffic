(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/invite/invite"],{"0e2a":function(t,e,n){},"290b":function(t,e,n){"use strict";n.r(e);var o=n("7296"),a=n("33c3");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("ab49");var r,d=n("f0c5"),u=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=u.exports},"33c3":function(t,e,n){"use strict";n.r(e);var o=n("d2a7"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"49eb":function(t,e,n){"use strict";(function(t){n("7482"),n("a9ff");o(n("66fd"));var e=o(n("290b"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},7296:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("invite.download"));t.$mp.data=Object.assign({},{$root:{m0:n}})},i=[]},ab49:function(t,e,n){"use strict";var o=n("0e2a"),a=n.n(o);a.a},d2a7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={computed:{uniStarterConfig:function(){return getApp().globalData.config}},data:function(){return{about:{},code:"",isIos:"",showMask:!1,downloadUrl:{ios:"",android:""}}},created:function(){this.about=this.uniStarterConfig.about,this.downloadUrl=this.uniStarterConfig.download,this.year=(new Date).getFullYear();var t=navigator.userAgent,e=t.toLowerCase();this.isWeixin=-1!=e.indexOf("micromessenger"),this.isIos=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},onLoad:function(t){var e=t.code;this.code=e,document.getElementById("openApp").style.display="none",document.getElementsByTagName("body")[0].style=""},methods:{download:function(){this.code&&t.setClipboardData({data:this.code,complete:function(e){console.log(e),t.hideToast(),document.getElementById("#clipboard").style.top="-999px",t.hideKeyboard()}}),this.isIos?window.location.href=this.downloadUrl.ios:this.isWeixin?this.showMask=!0:window.location.href=this.downloadUrl.android}}};e.default=n}).call(this,n("543d")["default"])}},[["49eb","common/runtime","common/vendor"]]]);