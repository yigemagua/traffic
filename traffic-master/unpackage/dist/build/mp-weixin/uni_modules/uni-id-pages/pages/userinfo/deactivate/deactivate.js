(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate"],{"416d":function(n,t,e){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}},onLoad:function(){},methods:{cancel:function(){n.navigateBack()},nextStep:function(){n.showModal({content:"已经仔细阅读注销提示，知晓可能带来的后果，并确认要注销",complete:function(t){if(t.confirm){e.database();var a=e.importObject("uni-id-co");a.closeAccount().then((function(t){console.log(t),n.showToast({title:"注销成功"}),n.removeStorageSync("uni_id_token"),n.setStorageSync("uni_id_token_expired",0),n.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})}))}else n.navigateBack()}})}}};t.default=a}).call(this,e("543d")["default"],e("a9ff")["default"])},5617:function(n,t,e){"use strict";e.r(t);var a=e("72e4"),u=e("c7fd");for(var o in u)"default"!==o&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("a008");var c,i=e("f0c5"),r=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=r.exports},6742:function(n,t,e){},"72e4":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var u=function(){var n=this,t=n.$createElement;n._self._c},o=[]},a008:function(n,t,e){"use strict";var a=e("6742"),u=e.n(a);u.a},c7fd:function(n,t,e){"use strict";e.r(t);var a=e("416d"),u=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=u.a},f38c:function(n,t,e){"use strict";(function(n){e("7482"),e("a9ff");a(e("66fd"));var t=a(e("5617"));function a(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])}},[["f38c","common/runtime","common/vendor"]]]);