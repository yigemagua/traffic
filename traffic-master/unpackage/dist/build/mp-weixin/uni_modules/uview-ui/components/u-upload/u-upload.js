(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-upload/u-upload"],{"0a80":function(t,e,i){"use strict";i.r(e);var n=i("e307"),a=i("142e");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("dba9");var u,o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"13af9513",null,!1,n["a"],u);e["default"]=r.exports},"142e":function(t,e,i){"use strict";i.r(e);var n=i("774c"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"774c":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("c411"),a=u(i("6c74")),s=u(i("a35f"));function u(t){return t&&t.__esModule?t:{default:t}}var o={name:"u-upload",mixins:[t.$u.mpMixin,t.$u.mixin,a.default,s.default],data:function(){return{lists:[],isInCount:!0}},watch:{fileList:{immediate:!0,handler:function(){this.formatFileList()}}},methods:{formatFileList:function(){var e=this,i=this.fileList,n=void 0===i?[]:i,a=this.maxCount,s=n.map((function(i){return Object.assign(Object.assign({},i),{isImage:"image"===e.accept||t.$u.test.image(i.url||i.thumb),isVideo:"video"===e.accept||t.$u.test.video(i.url||i.thumb),deletable:"boolean"===typeof i.deletable?i.deletable:e.deletable})}));this.lists=s,this.isInCount=s.length<a},chooseFile:function(){var e=this,i=this.maxCount,a=this.multiple,s=this.lists,u=this.disabled;if(!u){var o;try{o=t.$u.test.array(this.capture)?this.capture:this.capture.split(",")}catch(r){o=[]}(0,n.chooseFile)(Object.assign({accept:this.accept,multiple:this.multiple,capture:o,compressed:this.compressed,maxDuration:this.maxDuration,sizeType:this.sizeType,camera:this.camera},{maxCount:i-s.length})).then((function(t){e.onBeforeRead(a?t:t[0])})).catch((function(t){e.$emit("error",t)}))}},onBeforeRead:function(e){var i=this,n=this.beforeRead,a=this.useBeforeRead,s=!0;t.$u.test.func(n)&&(s=n(e,this.getDetail())),a&&(s=new Promise((function(t,n){i.$emit("beforeRead",Object.assign(Object.assign({file:e},i.getDetail()),{callback:function(e){e?t():n()}}))}))),s&&(t.$u.test.promise(s)?s.then((function(t){return i.onAfterRead(t||e)})):this.onAfterRead(e))},getDetail:function(t){return{name:this.name,index:null==t?this.fileList.length:t}},onAfterRead:function(t){var e=this.maxSize,i=this.afterRead,n=Array.isArray(t)?t.some((function(t){return t.size>e})):t.size>e;n?this.$emit("oversize",Object.assign({file:t},this.getDetail())):("function"===typeof i&&i(t,this.getDetail()),this.$emit("afterRead",Object.assign({file:t},this.getDetail())))},deleteItem:function(t){this.$emit("delete",Object.assign(Object.assign({},this.getDetail(t)),{file:this.fileList[t]}))},onPreviewImage:function(e){var i=this;e.isImage&&this.previewFullImage&&t.previewImage({urls:this.lists.filter((function(e){return"image"===i.accept||t.$u.test.image(e.url||e.thumb)})).map((function(t){return t.url||t.thumb})),current:e.url||e.thumb,fail:function(){t.$u.toast("预览图片失败")}})},onPreviewVideo:function(e){if(this.data.previewFullImage){var i=e.currentTarget.dataset.index,n=this.data.lists;wx.previewMedia({sources:n.filter((function(t){return isVideoFile(t)})).map((function(t){return Object.assign(Object.assign({},t),{type:"video"})})),current:i,fail:function(){t.$u.toast("预览视频失败")}})}},onClickPreview:function(t){var e=t.currentTarget.dataset.index,i=this.data.lists[e];this.$emit("clickPreview",Object.assign(Object.assign({},i),this.getDetail(e)))}}};e.default=o}).call(this,i("543d")["default"])},c820:function(t,e,i){},dba9:function(t,e,i){"use strict";var n=i("c820"),a=i.n(n);a.a},e307:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uIcon:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(i.bind(null,"52e4"))},uLoadingIcon:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(i.bind(null,"f069"))}},a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__get_style([t.$u.addStyle(t.customStyle)])),n=t.previewImage?t.__map(t.lists,(function(e,i){var n=t.__get_orig(e),a=e.isImage||e.type&&"image"===e.type?t.$u.addUnit(t.width):null,s=e.isImage||e.type&&"image"===e.type?t.$u.addUnit(t.height):null;return{$orig:n,g0:a,g1:s}})):null,a=!t.isInCount||t.$slots.default||t.$slots.$default?null:t.$u.addUnit(t.width),s=!t.isInCount||t.$slots.default||t.$slots.$default?null:t.$u.addUnit(t.height);t.$mp.data=Object.assign({},{$root:{s0:i,l0:n,g2:a,g3:s}})},s=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-upload/u-upload-create-component',
    {
        'uni_modules/uview-ui/components/u-upload/u-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0a80"))
        })
    },
    [['uni_modules/uview-ui/components/u-upload/u-upload-create-component']]
]);
