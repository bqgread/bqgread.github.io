(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-logs"],{"2ea4":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".page[data-v-966a21a6]{min-height:100vh}.cu-list.menu>.cu-item .content[data-v-966a21a6]{font-size:inherit}.cu-list.menu>.cu-item[data-v-966a21a6]{background-color:inherit;color:inherit;font-size:inherit}",""]),t.exports=e},"91fe":function(t,e,a){"use strict";a.r(e);var n=a("af89"),o=a("facc");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("9be9");var r,u=a("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"966a21a6",null,!1,n["a"],r);e["default"]=c.exports},"9be9":function(t,e,a){"use strict";var n=a("e620"),o=a.n(n);o.a},af89:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:[t.backgroundcolor,t.textcolor,t.fontsize]},[a("cu-custom",{attrs:{bgColor:t.bgColor,isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",{class:[t.fontsize]},[t._v("浏览记录")])],1)],2),a("v-uni-view",{staticClass:"page",attrs:{"scroll-y":!0}},[a("v-uni-view",{staticClass:"cu-list menu card-menu margin-top"},[t._l(t.list,(function(e,n){return[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content",attrs:{"data-url":e.wxto},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto.apply(void 0,arguments)}}},[a("v-uni-text",[t._v(t._s(e.title))])],1)],1),n%50==9?a("v-uni-view"):t._e()]})),t.list.length?t._e():a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content text-center padding"},[a("v-uni-text",[t._v("阅读正文时自动添加。")])],1)],1),t.isIpx?a("v-uni-view",{staticClass:"cu-tabbar-height"}):t._e()],2)],1)],1)},i=[]},afc9:function(t,e,a){"use strict";var n=a("4ea4");a("26e9"),a("ac1f"),a("466d"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var o=n(a("1da1")),i=n(a("c086")),r=n(a("e143")),u={name:"logs",data:function(){return{backgroundcolor:this.backgroundcolor,fontsize:this.fontsize,textcolor:this.textcolor,cardCur:0,list:[],adshow:!0,dotStyle:!0,towerStart:0,direction:"",isIpx:this.isIpx}},computed:{banner_adid:function(){return r.default.prototype.appconfig?r.default.prototype.appconfig.list_banner:null},custom_adid:function(){return r.default.prototype.appconfig?r.default.prototype.appconfig.list_custom:null},video_adid:function(){return r.default.prototype.appconfig?r.default.prototype.appconfig.list_video:null},viewAdBgColor:function(){return"bg-black"==this.backgroundcolor||"bg-dark"==this.backgroundcolor||"bg-grey"==this.backgroundcolor||"bg-brown"==this.backgroundcolor?"black":"white"},bgColor:function(){return this.backgroundcolor+" "+this.textcolor+" "+this.fontsize}},methods:{adClose:function(){this.adshow=!1},click:function(t){var e=t.currentTarget.dataset.wxto,a=t.currentTarget.dataset.type,n=t.currentTarget.dataset.image;""!=e&&"link"==a?""!=r.default.prototype.jumpappid?uni.navigateToMiniProgram({appId:r.default.prototype.jumpappid,path:e,extraData:{from:"jumpappid"}}):""!=r.default.prototype.jumpwebpage?uni.setClipboardData({data:r.default.prototype.jumpwebpage+e,success:function(){uni.hideToast(),uni.showModal({title:"提示",content:r.default.prototype.jumpwebtips,showCancel:!1})}}):uni.navigateTo({url:e}):""!=n&&"image"==a&&uni.previewImage({current:n,urls:[n]})},goto:function(t){var e=t.currentTarget.dataset.url,a=e.match(/url=([^&]*)/i)[1];a&&(e=e.replace(a,encodeURIComponent(a))),""!=r.default.prototype.jumpappid?uni.navigateToMiniProgram({appId:r.default.prototype.jumpappid,path:e,extraData:{from:"jumpappid"}}):uni.navigateTo({url:e})},initload:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.GetLogs();case 2:t.list=e.sent,t.list.reverse();case 4:case"end":return e.stop()}}),e)})))()}},onShow:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.initload();case 1:case"end":return e.stop()}}),e)})))()},onLoad:function(){i.default.setNavigationBarColor()}};e.default=u},e620:function(t,e,a){var n=a("2ea4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("81914efa",n,!0,{sourceMap:!1,shadowMode:!1})},facc:function(t,e,a){"use strict";a.r(e);var n=a("afc9"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a}}]);