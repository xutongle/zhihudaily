webpackJsonp([0,2],[,,,,,,,,function(t,s,e){"use strict";e.d(s,"a",function(){return i}),e.d(s,"b",function(){return a}),e.d(s,"c",function(){return n}),e.d(s,"d",function(){return c}),e.d(s,"e",function(){return o}),e.d(s,"f",function(){return r}),e.d(s,"g",function(){return l}),e.d(s,"h",function(){return u}),e.d(s,"i",function(){return d}),e.d(s,"j",function(){return h}),e.d(s,"k",function(){return v}),e.d(s,"l",function(){return f}),e.d(s,"m",function(){return _}),e.d(s,"n",function(){return p});var i="STORE_NEWS_INFO",a="SET_CURRENT_NEWS",n="TOGGLE_SIDEBAR",c="TOGGLE_NIGHT_PATTERN",o="SET_COLLECT_LIST",r="REDUCE_COLLECT_LIST",l="CONTINUE_LOAD_MORE",u="STOP_LOAD_MORE",d="TOGGLE_LIKED_BOX",h="TOGGLE_CTRL_BOX",v="SET_USER_INFO",f="TOGGLE_LOGIN_STATE",_="TOGGLE_QRCODE_SHOW",p="SET_COLUMN_TITLE"},,function(t,s,e){e(49);var i=e(0)(e(78),e(32),null,null);t.exports=i.exports},function(t,s,e){e(52);var i=e(0)(e(79),e(35),"data-v-56723dd0",null);t.exports=i.exports},function(t,s,e){e(48);var i=e(0)(e(82),e(31),"data-v-503b9654",null);t.exports=i.exports},function(t,s,e){e(59);var i=e(0)(e(83),e(42),"data-v-dba6e4e4",null);t.exports=i.exports},function(t,s,e){e(53);var i=e(0)(e(84),e(36),null,null);t.exports=i.exports},function(t,s,e){e(50);var i=e(0)(e(86),e(33),"data-v-50b8ea97",null);t.exports=i.exports},function(t,s,e){e(47);var i=e(0)(e(89),e(30),"data-v-3f046b70",null);t.exports=i.exports},function(t,s,e){e(46);var i=e(0)(e(91),e(29),"data-v-1fca30b1",null);t.exports=i.exports},function(t,s,e){e(54);var i=e(0)(e(92),e(37),null,null);t.exports=i.exports},function(t,s,e){e(56);var i=e(0)(e(93),e(39),"data-v-693784e9",null);t.exports=i.exports},,function(t,s,e){"use strict";var i=e(3),a=e(61),n=e(77),c=e(76);i.a.use(a.a);var o={curNews:{id:"",likes:"",comments:"",isLiked:"",isCollected:""},user:{name:"",password:""},columnTitle:"",news:[],collectList:[],isMaskShow:!1,isNightPattern:!1,isMoreShow:!1,isBoxShow:!1,isCtrlShow:!1,isUserLogin:!1,isQRCodeShow:!1};s.a=new a.a.Store({state:o,mutations:n.a,actions:c.a})},function(t,s,e){e(57);var i=e(0)(e(80),e(40),"data-v-c5918740",null);t.exports=i.exports},function(t,s,e){e(45);var i=e(0)(e(81),e(28),"data-v-188bc5ee",null);t.exports=i.exports},function(t,s,e){e(60);var i=e(0)(e(85),e(43),null,null);t.exports=i.exports},function(t,s,e){e(51);var i=e(0)(e(87),e(34),"data-v-52859913",null);t.exports=i.exports},function(t,s,e){e(58);var i=e(0)(e(88),e(41),"data-v-c827dc14",null);t.exports=i.exports},function(t,s,e){e(55);var i=e(0)(e(90),e(38),"data-v-61693d58",null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-article container-fluid"},[e("div",{staticClass:"list-group"},[e("h2",{staticClass:"text-center"},[t._v("今日新闻")]),t._v(" "),t._l(t.news,function(s){return e("div",{staticClass:"col-md-5 col-md-push-1 col-xs-12 cus-item list-group-item"},[e("router-link",{attrs:{to:{name:"article",params:{id:s.id}}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-8"},[e("h3",[t._v(t._s(s.title))])]),t._v(" "),e("div",{staticClass:"col-xs-4"},[e("img",{attrs:{src:s.images[0],alt:""}})])])])],1)})],2)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"cus-panel panel panel-info",on:{click:t.closeShareBox}},[t._m(0),t._v(" "),e("div",{staticClass:"cus-body panel-body"},[e("div",{staticClass:"cus-item1 row"},[e("div",{staticClass:"col-xs-4",on:{click:function(s){s.stopPropagation(),t.showQRCode(s)}}},[t._m(1),t._v(" "),e("p",{staticClass:"text-center"},[t._v("微信")])]),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),t._m(5)])]),t._v(" "),e("div",{staticClass:"mask"})])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"panel-heading"},[e("h2",{staticClass:"panel-title text-center"},[t._v("分 享")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"text-center",attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-wechat"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-4"},[e("a",{staticClass:"text-center",attrs:{href:"http://v.t.sina.com.cn/share/share.php?url=https://ntnyq.github.io&title='我的个人博客'",target:"_blank"}},[e("i",{staticClass:"fa fa-weibo"})]),t._v(" "),e("p",{staticClass:"text-center"},[t._v("微博")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-4"},[e("a",{staticClass:"text-center",attrs:{href:""}},[e("i",{staticClass:"fa fa-qq"})]),t._v(" "),e("p",{staticClass:"text-center"},[t._v("QQ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-item2 row"},[e("div",{staticClass:"col-xs-4"},[e("a",{staticClass:"text-center",attrs:{href:""}},[e("i",{staticClass:"fa fa-tencent-weibo"})]),t._v(" "),e("p",{staticClass:"text-center"},[t._v("腾讯微博")])]),t._v(" "),e("div",{staticClass:"col-xs-4"},[e("a",{staticClass:"text-center",attrs:{href:""}},[e("i",{staticClass:"fa fa-pencil"})]),t._v(" "),e("p",{staticClass:"text-center"},[t._v("有道云")])]),t._v(" "),e("div",{staticClass:"col-xs-4"},[e("a",{staticClass:"text-center",attrs:{href:""}},[e("i",{staticClass:"fa fa-github"})]),t._v(" "),e("p",{staticClass:"text-center"},[t._v("Github")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-item3 row"},[e("div",{staticClass:"col-xs-4"},[e("a",{staticClass:"text-center",attrs:{href:""}},[e("i",{staticClass:"fa fa-ellipsis-h"})]),t._v(" "),e("p",{staticClass:"text-center"},[t._v("更多")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-box container-fluid"},[e("div",{staticClass:"cus-group list-group"},[e("h3",{staticClass:"h3"},[t._v("常规")]),t._v(" "),e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"cus-check col-xs-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedList,expression:"checkedList"}],attrs:{id:"check1",type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.checkedList)?t._i(t.checkedList,"1")>-1:t.checkedList},on:{__c:function(s){var e=t.checkedList,i=s.target,a=!!i.checked;if(Array.isArray(e)){var n="1",c=t._i(e,n);a?c<0&&(t.checkedList=e.concat(n)):c>-1&&(t.checkedList=e.slice(0,c).concat(e.slice(c+1)))}else t.checkedList=a}}}),t._v(" "),e("label",{attrs:{for:"check1"},on:{click:function(t){}}})])])]),t._v(" "),e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row"},[t._m(1),t._v(" "),e("div",{staticClass:"cus-check col-xs-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedList,expression:"checkedList"}],attrs:{id:"check2",type:"checkbox",value:"2"},domProps:{checked:Array.isArray(t.checkedList)?t._i(t.checkedList,"2")>-1:t.checkedList},on:{__c:function(s){var e=t.checkedList,i=s.target,a=!!i.checked;if(Array.isArray(e)){var n="2",c=t._i(e,n);a?c<0&&(t.checkedList=e.concat(n)):c>-1&&(t.checkedList=e.slice(0,c).concat(e.slice(c+1)))}else t.checkedList=a}}}),t._v(" "),e("label",{attrs:{for:"check2"}})])])]),t._v(" "),e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row"},[t._m(2),t._v(" "),e("div",{staticClass:"cus-check col-xs-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedList,expression:"checkedList"}],attrs:{id:"check3",type:"checkbox",value:"3"},domProps:{checked:Array.isArray(t.checkedList)?t._i(t.checkedList,"3")>-1:t.checkedList},on:{__c:function(s){var e=t.checkedList,i=s.target,a=!!i.checked;if(Array.isArray(e)){var n="3",c=t._i(e,n);a?c<0&&(t.checkedList=e.concat(n)):c>-1&&(t.checkedList=e.slice(0,c).concat(e.slice(c+1)))}else t.checkedList=a}}}),t._v(" "),e("label",{attrs:{for:"check3"}})])])])]),t._v(" "),e("div",{staticClass:"cus-group list-group"},[e("h3",{staticClass:"h3"},[t._v("其他")]),t._v(" "),e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row"},[t._m(3),t._v(" "),e("div",{staticClass:"cus-check col-xs-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedList,expression:"checkedList"}],attrs:{id:"check4",type:"checkbox",value:"4"},domProps:{checked:Array.isArray(t.checkedList)?t._i(t.checkedList,"4")>-1:t.checkedList},on:{__c:function(s){var e=t.checkedList,i=s.target,a=!!i.checked;if(Array.isArray(e)){var n="4",c=t._i(e,n);a?c<0&&(t.checkedList=e.concat(n)):c>-1&&(t.checkedList=e.slice(0,c).concat(e.slice(c+1)))}else t.checkedList=a}}}),t._v(" "),e("label",{attrs:{for:"check4"}})])])]),t._v(" "),e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row"},[t._m(4),t._v(" "),e("div",{staticClass:"cus-check col-xs-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedList,expression:"checkedList"}],attrs:{id:"check5",type:"checkbox",value:"5"},domProps:{checked:Array.isArray(t.checkedList)?t._i(t.checkedList,"5")>-1:t.checkedList},on:{__c:function(s){var e=t.checkedList,i=s.target,a=!!i.checked;if(Array.isArray(e)){var n="5",c=t._i(e,n);a?c<0&&(t.checkedList=e.concat(n)):c>-1&&(t.checkedList=e.slice(0,c).concat(e.slice(c+1)))}else t.checkedList=a}}}),t._v(" "),e("label",{attrs:{for:"check5"}})])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)]),t._v(" "),e("div",{staticClass:"cus-group list-group"},[e("h3",{staticClass:"h3"},[t._v("反馈")]),t._v(" "),t._m(7),t._v(" "),e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"cus-about row"},[e("div",{staticClass:"col-xs-12 text-center"},[e("router-link",{attrs:{to:"/aboutme"}},[t._v("关于我")])],1)])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-9"},[e("h4",{staticClass:"h4"},[t._v("自动离线下载")]),t._v(" "),e("span",[t._v("仅wifi下可用，自动下载最新内容")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-9"},[e("h4",{staticClass:"h4"},[t._v("无图模式")]),t._v(" "),e("span",[t._v("2G/3G网络下不下载图片")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-9"},[e("h4",{staticClass:"h4"},[t._v("大字号")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-9"},[e("h4",{staticClass:"h4"},[t._v("推送消息")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-9"},[e("h4",{staticClass:"h4"},[t._v("点评分享到微博")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-9"},[e("h4",{staticClass:"h4"},[t._v("清除缓存")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-9"},[e("h4",{staticClass:"h4"},[t._v("检查更新")]),t._v(" "),e("span",[t._v("版本：2.6.2(763)")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-9"},[e("h4",{staticClass:"h4"},[t._v("意见反馈")])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-collect container-fluid"},[e("div",{staticClass:"list-group"},t._l(t.collectNews,function(s){return e("div",{staticClass:"col-md-5 col-md-push-1 col-xs-12 cus-item list-group-item"},[e("router-link",{attrs:{to:{name:"article",params:{id:s.id}}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-8"},[e("h3",[t._v(t._s(s.title))])]),t._v(" "),e("div",{staticClass:"col-xs-4"},[e("img",{attrs:{src:s.image,alt:""}})])])])],1)}))])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-wrapper container-fluid",class:{night:t.isNightPattern},on:{click:t.closeBox}},[e("news-header"),t._v(" "),e("router-view")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-home container-fluid"},[e("news-picture"),t._v(" "),e("news-article"),t._v(" "),e("news-sidebar"),t._v(" "),t._l(t.num,function(s){return e("news-load-more",{key:s,attrs:{newsIndex:t.startDate-s+1}})}),t._v(" "),t.num===t.limit?e("div",{staticClass:"cus-info"},[e("p",[t._v("抱歉，没有资源可以加载了")])]):t._e(),t._v(" "),t.isMaskShow?e("div",{staticClass:"mask",on:{click:t.toggleSidebar}}):t._e(),t._v(" "),e("app-loading",{attrs:{isShow:t.isLoadingShow}})],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-more container-fluid"},[e("div",{staticClass:"list-group"},[e("h2",{staticClass:"text-center"},[t._v(t._s(t.formatDate))]),t._v(" "),t._l(t.news,function(s){return e("div",{staticClass:"col-md-5 col-md-push-1 col-xs-12 cus-item list-group-item"},[e("router-link",{attrs:{to:{name:"article",params:{id:s.id}}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-8"},[e("h3",[t._v(t._s(s.title))])]),t._v(" "),e("div",{staticClass:"col-xs-4"},[e("img",{attrs:{src:s.images[0],alt:""}})])])])],1)})],2)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-me container-fluid"},[e("div",{staticClass:"cus-about"},[e("p",[t._v("本项目旨在学习vue框架,使用了")]),t._v(" "),e("p",[t._v("vue-cli脚手架")]),t._v(" "),e("p",[t._v("vuex 状态管理")]),t._v(" "),e("p",[t._v("vue-router 路由管理")]),t._v(" "),e("p",[t._v("vue-resource 资源请求")]),t._v(" "),e("p",[t._v("知乎API 提供数据")]),t._v(" "),e("p",[t._v("vue-devtools 调试代码")])]),t._v(" "),e("div",{staticClass:"cus-box"},[e("p",[e("i",{staticClass:"fa fa-user"}),t._v(" ntnyq")]),t._v(" "),e("p",[e("i",{staticClass:"fa fa-wechat"}),t._v(" ntn_yq")]),t._v(" "),e("p",[e("i",{staticClass:"fa fa-github"}),t._v(" "),e("a",{attrs:{href:"https://github.com/ntnyq",target:"_blank"}},[t._v("ntnyq")])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.isError?e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[e("h3",{staticClass:"h3 text-danger"},[t._v("提示")])]),t._v(" "),e("div",{staticClass:"panel-body"},[e("p",{staticClass:"text-info"},[t._v("本地版本的数据量有限，目前并没有这篇文章")])])])]):e("div",{staticClass:"cus-detail container-fluid"},[e("div",{staticClass:"row"},[e("img",{attrs:{src:t.picUrl,alt:""}})]),t._v(" "),e("div",{staticClass:"cus-text container",domProps:{innerHTML:t._s(t.context)}}),t._v(" "),e("transition",{attrs:{name:"show-box"}},[t.isBoxShow?e("div",{staticClass:"cus-tip"},[e("i",{staticClass:"fa fa-thumbs-up"}),t._v(" "+t._s(t.curNews.likes-1)+" + 1\n    ")]):t._e()]),t._v(" "),e("router-view"),t._v(" "),t.isQRCodeShow?e("div",{staticClass:"cus-img"},[e("img",{attrs:{src:"/static/img/wechat.jpg",alt:"微信二维码"}})]):t._e()],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div")},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-side container-fluid"},[e("transition",{attrs:{name:"show"}},[t.isSidebarShow?e("div",{staticClass:"cus-bar"},[e("div",{staticClass:"cus-user"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-3 center-block"},[e("img",{staticClass:"img-circle",attrs:{src:"/static/img/avatar.png",alt:"头像"}})]),t._v(" "),e("div",{staticClass:"col-xs-9"},[e("span",[t._v("小学生")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-6 text-center"},[e("router-link",{attrs:{to:"/collect"}},[e("i",{staticClass:"fa fa-star"}),t._v("我的收藏")])],1),t._v(" "),e("div",{staticClass:"col-xs-6 text-center"},[e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-download"}),t._v("离线下载")])])])]),t._v(" "),e("h3",{staticClass:"h3"},[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"fa fa-home"}),t._v("首 页")])],1),t._v(" "),e("div",{staticClass:"cus-channel"},[e("div",{staticClass:"list-group"},t._l(t.themes,function(s){return e("div",{staticClass:"cus-item list-group-item"},[e("router-link",{attrs:{to:{name:"column",params:{id:s.id}}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-9"},[e("span",[t._v(t._s(s.name))])]),t._v(" "),e("div",{staticClass:"col-xs-3"},[e("i",{staticClass:"fa fa-plus"})])])])],1)}))])]):t._e()])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-login container-fluid"},[e("h3",{staticClass:"h3 text-center"},[t._v("知乎日报")]),t._v(" "),e("form",{staticClass:"form-group",attrs:{role:"form"}},[e("label",{attrs:{for:"username"}},[t._v("用户名")]),t._v(" "),e("span",[t._v(t._s(t.usernameTip))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"用户名/手机号/邮箱"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),t._v(" "),e("form",{staticClass:"form-group",attrs:{role:"form"}},[e("label",{attrs:{for:"password"}},[t._v("密码")]),t._v(" "),e("span",[t._v(t._s(t.passwordTip))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"请输入您的密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"cus-btns btn-group"},[e("button",{staticClass:"btn btn-primary",on:{click:t.login}},[t._v("登 录")]),t._v(" "),e("button",{staticClass:"btn btn-info",on:{click:t.registerMember}},[t._v("注 册")])]),t._v(" "),e("p",[t._v("知乎日报不会未经同意通过您的账号发表任何消息")])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.isShow?e("div",{staticClass:"cus-loading"},[e("span",[t._v(t._s(t.text))]),t._v(" "),e("em",[t._v(t._s(t.copy))])]):t._e()},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cus-box"},[e("div",{staticClass:"cus-pic row clearfix"},t._l(t.pics,function(t){return e("img",{staticClass:"pull-left",attrs:{src:t,alt:"新闻轮播图"}})})),t._v(" "),e("ul",{staticClass:"cus-ctrls"},[e("li",{class:{active:0===t.idx}}),t._v(" "),e("li",{class:{active:1===t.idx}}),t._v(" "),e("li",{class:{active:2===t.idx}}),t._v(" "),e("li",{class:{active:3===t.idx}}),t._v(" "),e("li",{class:{active:4===t.idx}})])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.isError?e("div",{staticClass:"panel panel-danger"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[e("h2",[t._v("抱歉")])])]),t._v(" "),e("div",{staticClass:"panel-body"},[t._v("\n    本地数据有限，可能未保存此项目的json文件\n  ")])]):e("div",{staticClass:"cus-column container-fluid"},[e("div",{staticClass:"jumbotron"},[e("h2",{staticClass:"h2"},[e("i",{staticClass:"fa fa-tags"}),t._v(" "+t._s(t.columnInfo.name))]),t._v(" "),e("small",[e("i",{staticClass:"fa fa-quote-left"}),t._v(" "+t._s(t.columnInfo.description)+" "),e("i",{staticClass:"fa fa-quote-right"})])]),t._v(" "),e("div",{staticClass:"cus-table table table-hover"},[e("caption",{staticClass:"text-center text-info"},[t._v("主编介绍")]),t._v(" "),t._m(0),t._v(" "),e("tbody",t._l(t.columnInfo.editors,function(s){return e("tr",[e("td",[t._v(t._s(s.name))]),t._v(" "),e("td",[t._v(t._s(s.bio))])])}))]),t._v(" "),e("div",{staticClass:"list-group"},t._l(t.columnNews,function(s){return e("div",{staticClass:"cus-item list-group-item",class:{shake:t.isShake},attrs:{id:s.id},on:{click:t.startShake}},[e("h3",[e("i",{staticClass:"fa fa-volume-down"}),t._v(" "+t._s(s.title))])])}))])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",[t._v("昵称 "),e("i",{staticClass:"fa fa-user-o"})]),t._v(" "),e("th",[t._v("签名 "),e("i",{staticClass:"fa fa-paper-plane-o"})])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"cus-nav navbar navbar-fixed-top"},[e("div",{staticClass:"container-fluid"},[e("ul",{staticClass:"nav navbar-nav nav-pills pull-left"},["/home"===t.$route.path||"/"===t.$route.path?e("li",{on:{click:t.toggleSidebar}},[e("a",{attrs:{href:"javascript:;"}},[e("transition",{attrs:{name:"rotate"}},[t.isSidebarShow?t._e():e("i",{staticClass:"fa fa-navicon"})])],1)]):t._e(),t._v(" "),"/home"!==t.$route.path&&"/"!==t.$route.path?e("li",[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"fa fa-arrow-left"})])],1):t._e(),t._v(" "),""!==t.title?e("li",["/"===t.$route.path?e("router-link",{staticClass:"home",attrs:{to:"/home"}},[t._v(t._s(t.title))]):e("a",{staticClass:"home"},[t._v(t._s(t.title))])],1):t._e()]),t._v(" "),"/home"===t.$route.path||"/"===t.$route.path?e("ul",{staticClass:"nav navbar-nav nav-pills pull-right"},[e("li",[t.isUserLogin?t._e():e("router-link",{attrs:{to:"/login"}},[e("i",{staticClass:"fa fa-bell"})]),t._v(" "),t.isUserLogin?e("router-link",{attrs:{to:"/message"}},[e("i",{staticClass:"fa fa-bell"})]):t._e()],1),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:;"},on:{click:function(s){s.stopPropagation(),t.toggleCtrlBox(s)}}},[e("i",{staticClass:"fa fa-ellipsis-v"})])])]):t._e(),t._v(" "),"article"===t.$route.name||"share"===t.$route.name?e("ul",{staticClass:"nav navbar-nav nav-pills pull-right"},[e("li",[e("router-link",{attrs:{to:{name:"share"}}},[e("i",{staticClass:"fa fa-share-alt"})])],1),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:;"},on:{click:t.changeCollection}},[e("i",{staticClass:"fa fa-star",class:{collect:t.curNews.isCollected}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-commenting"}),t._v(" "),e("span",[t._v(t._s(t.curNews.comments))])])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:;"},on:{click:t.changeLikes}},[e("i",{staticClass:"likes fa fa-thumbs-up",class:{like:t.curNews.isLiked}}),t._v(" "),e("span",[t._v(t._s(t.curNews.likes))])])])]):t._e()]),t._v(" "),t.isCtrlShow?e("ul",{staticClass:"cus-ctrl nav nav-tabs nav-stacked"},[e("li",{on:{click:function(s){s.stopPropagation(),t.toggleNightPattern(s)}}},[e("a",{attrs:{href:"javascript:;"}},[t._v("夜间模式")])]),t._v(" "),e("li",{on:{click:function(s){s.stopPropagation(),t.toggleCtrlBox(s)}}},[e("router-link",{attrs:{to:"/setting"}},[t._v("设置选项")])],1)]):t._e()])},staticRenderFns:[]}},,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,,,,,,,,,,,,,,function(t,s,e){"use strict";var i=e(8);s.a={storeNewsInfo:function(t,s){(0,t.commit)(i.a,s)},setCurrentNews:function(t,s){(0,t.commit)(i.b,s)},toggleSidebar:function(t){(0,t.commit)(i.c)},toggleNightPattern:function(t){(0,t.commit)(i.d)},setCollectList:function(t){(0,t.commit)(i.e)},reduceCollectList:function(t,s){(0,t.commit)(i.f,s)},continueLoadMore:function(t){(0,t.commit)(i.g)},stopLoadMore:function(t){(0,t.commit)(i.h)},toggleLikedBox:function(t){(0,t.commit)(i.i)},toggleCtrlBox:function(t){(0,t.commit)(i.j)},setUserInfo:function(t,s){(0,t.commit)(i.k,s)},toggleLoginState:function(t){(0,t.commit)(i.l)},toggleQRCodeShow:function(t){(0,t.commit)(i.m)},setColumnTitle:function(t,s){(0,t.commit)(i.n,s)}}},function(t,s,e){"use strict";var i,a=e(75),n=e.n(a),c=e(8);s.a=i={},n()(i,c.a,function(t,s){var e=!0;t.news.forEach(function(t,i){t.id===s.id&&(e=!1)}),e&&t.news.push(s)}),n()(i,c.b,function(t,s){var e="";t.news.forEach(function(t,i){t.id===s&&(e=i)}),t.curNews=t.news[e]}),n()(i,c.c,function(t){t.isMaskShow=!t.isMaskShow}),n()(i,c.d,function(t){t.isNightPattern=!t.isNightPattern}),n()(i,c.e,function(t){t.news.forEach(function(s,e){s.isCollected&&t.collectList.indexOf(s.id)===-1&&t.collectList.push(s.id)})}),n()(i,c.f,function(t,s){t.collectList.splice(t.collectList.indexOf(s),1)}),n()(i,c.g,function(t){t.isMoreShow=!0}),n()(i,c.h,function(t){t.isMoreShow=!1}),n()(i,c.i,function(t){t.isBoxShow=!t.isBoxShow}),n()(i,c.j,function(t){t.isCtrlShow=!t.isCtrlShow}),n()(i,c.k,function(t,s){t.user.name=s.name,t.user.password=s.password}),n()(i,c.l,function(t){t.isUserLogin=!t.isUserLogin}),n()(i,c.m,function(t){t.isQRCodeShow=!t.isQRCodeShow}),n()(i,c.n,function(t,s){t.columnTitle=s})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(24),a=e.n(i);s.default={name:"App",components:{NewsHeader:a.a},computed:{isNightPattern:function(){return this.$store.state.isNightPattern},isCtrlShow:function(){return this.$store.state.isCtrlShow},isQRCodeShow:function(){return this.$store.state.isQRCodeShow}},methods:{closeBox:function(){this.isCtrlShow&&this.$store.dispatch("toggleCtrlBox"),this.isQRCodeShow&&this.$store.dispatch("toggleQRCodeShow")}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"AboutMe",data:function(){return{}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"AppLoading",data:function(){return{text:"© Fido Dido",copy:"By ntnyq"}},props:{isShow:{type:Boolean,required:!0}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"NewsArticle",data:function(){return{news:[]}},methods:{fetchData:function(){var t=this;this.$http.get("/static/20170308.json").then(function(s){t.news=s.body.stories},function(t){console.log(t)})}},created:function(){this.fetchData()}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"NewsCollection",data:function(){return{collectNews:[]}},computed:{collectList:function(){return this.$store.state.collectList}},methods:{fetchData:function(){var t=this;this.collectList.forEach(function(s,e){t.$http.get("/static/json/"+s+".json").then(function(s){t.collectNews.push(s.body)},function(t){console.log(t)})})}},created:function(){this.$store.dispatch("setCollectList"),this.fetchData()}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"NewsColumn",data:function(){return{columnId:"",columnNews:[],columnInfo:{},isShake:!1,isError:!1}},methods:{fetchData:function(){var t=this;this.columnId=this.$route.params.id,this.$http.get("/static/json/"+this.columnId+".json").then(function(s){t.columnNews=s.body.stories,t.columnInfo={description:s.body.description,name:s.body.name,editors:s.body.editors},t.$store.dispatch("setColumnTitle",t.columnInfo.name)},function(s){console.log(s),t.isError=!0})},startShake:function(){var t=this;this.isShake=!0,setTimeout(function(){t.isShake=!1},5e3)}},created:function(){this.fetchData()}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"NewsDetail",data:function(){return{newsid:"",context:"",picUrl:"",isError:!1}},computed:{isBoxShow:function(){return this.$store.state.isBoxShow},curNews:function(){return this.$store.state.curNews},isQRCodeShow:function(){return this.$store.state.isQRCodeShow}},methods:{fetchData:function(){var t=this;this.newsid=this.$route.params.id,this.$http.get("/static/json/"+this.newsid+".json").then(function(s){t.context=s.body.body,t.picUrl=s.body.image;var e={id:parseInt(t.$route.params.id),comments:s.body.extra.comments,likes:s.body.extra.popularity,isLiked:!1,isCollected:!1};t.$store.dispatch("storeNewsInfo",e),t.setCurrentNews()},function(s){console.log(s),t.isError=!0})},setCurrentNews:function(){this.$route.params.id&&(this.id=this.$route.params.id,this.$store.dispatch("setCurrentNews",this.id))}},watch:{$route:"fetchData",isBoxShow:function(){var t=this;this.isBoxShow&&setTimeout(function(){t.$store.dispatch("toggleLikedBox")},600)}},created:function(){this.fetchData()}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"NewsHeader",data:function(){return{title:"首页",id:""}},computed:{curNews:function(){return this.$store.state.curNews},isSidebarShow:function(){return this.$store.state.isShow},collectList:function(){return this.$store.state.collectList},isBoxShow:function(){return this.$store.state.isBoxShow},isCtrlShow:function(){return this.$store.state.isCtrlShow},isUserLogin:function(){return this.$store.state.isUserLogin},columnTitle:function(){return this.$store.state.columnTitle}},methods:{changeTitle:function(){switch(this.$route.path){case"/":this.title="首页";break;case"/home":this.title="首页";break;case"/setting":this.title="设置";break;case"/collect":this.title=this.collectList.length>0?this.collectList.length+"条收藏":"无收藏";break;case"/login":this.title="登录";break;case"/message":this.title="消息";break;case"/aboutme":this.title="关于我";break;default:this.title=""}this.title="column"===this.$route.name?this.columnTitle:this.title},changeLikes:function(){this.curNews.likes&&(this.curNews.isLiked?(this.curNews.likes-=1,this.curNews.isLiked=!1):(this.curNews.likes+=1,this.curNews.isLiked=!0,this.isBoxShow||this.$store.dispatch("toggleLikedBox")))},changeCollection:function(){this.curNews.isCollected?(this.curNews.isCollected=!1,this.$store.dispatch("reduceCollectList",this.id)):this.curNews.isCollected=!0},toggleSidebar:function(){this.$store.dispatch("toggleSidebar")},toggleNightPattern:function(){this.$store.dispatch("toggleCtrlBox"),this.$store.dispatch("toggleNightPattern")},toggleCtrlBox:function(){this.$store.dispatch("toggleCtrlBox")}},watch:{$route:"changeTitle",columnTitle:"changeTitle"},created:function(){this.id=this.$route.params.id}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(26),a=e.n(i),n=e(27),c=e.n(n),o=e(23),r=e.n(o),l=e(25),u=e.n(l),d=e(22),h=e.n(d);s.default={name:"NewsHome",components:{NewsPicture:a.a,NewsSidebar:c.a,NewsArticle:r.a,NewsLoadMore:u.a,AppLoading:h.a},data:function(){return{num:0,startDate:20170306,limit:4,isLoadingShow:!0}},methods:{toggleSidebar:function(){this.$store.dispatch("toggleSidebar")},handleScroll:function(){if("/"===this.$route.path||"/home"===this.$route.path){var t=document.querySelector(".cus-home");t.clientHeight+t.offsetTop-50<window.scrollY+document.documentElement.clientHeight&&this.num<this.limit&&(this.num++,this.isMoreShow||this.$store.dispatch("continueLoadMore"))}}},computed:{isMaskShow:function(){return this.$store.state.isMaskShow},isMoreShow:function(){return this.$store.state.isMoreShow}},created:function(){},mounted:function(){var t=this;"/"===this.$route.path&&window.addEventListener("scroll",this.handleScroll,!1),setTimeout(function(){t.isLoadingShow=!1},300)}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"NewsLoadMore",data:function(){return{date:"",news:[],times:0}},props:{newsIndex:{type:Number,required:!0}},computed:{formatDate:function(){var t=this.date.split("");return t.splice(4,0,"/"),t.splice(7,0,"/"),this.date.substring(4,6)+"月"+this.date.substring(6,8)+"日 星期"+"日一二三四五六".charAt(new Date(t.join("")).getDay())},isMoreShow:function(){return this.$store.state.isMoreShow}},methods:{fetchData:function(){var t=this;this.isMoreShow&&this.$http.get("/static/"+this.newsIndex+".json").then(function(s){t.news=s.body.stories,t.date=s.body.date,t.$store.dispatch("stopLoadMore")},function(t){console.log(t)})}},created:function(){this.fetchData()}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"NewsPicture",data:function(){return{pics:["/static/img/top1.jpg","/static/img/top2.jpg","/static/img/top3.jpg","/static/img/top4.jpg","/static/img/top5.jpg"],idx:0}},methods:{startTimer:function(){var t=this;setInterval(function(){t.idx++,t.idx%=5},2e3)}},created:function(){this.startTimer()}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"NewsSetting",data:function(){return{checkedList:[]}},beforeDestroy:function(){this.checkedList.length>0&&alert("被选中的项有: "+this.checkedList.sort(function(t,s){return t-s}))}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"NewsSidebar",data:function(){return{themes:[]}},methods:{fetchThemes:function(){var t=this;this.$http.get("/static/themes.json").then(function(s){t.themes=s.body.others},function(t){console.log(t)})}},computed:{isSidebarShow:function(){return this.$store.state.isMaskShow}},created:function(){this.fetchThemes()}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"ShareBox",data:function(){return{}},computed:{curNews:function(){return this.$store.state.curNews}},methods:{closeShareBox:function(){this.$router.push({name:"article"})},showQRCode:function(){this.$router.push({name:"article"}),this.$store.dispatch("toggleQRCodeShow")}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"SystemMessage",data:function(){return{}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"UserLogin",data:function(){return{username:"",password:"",usernameTip:"",passwordTip:""}},computed:{validateUserName:function(){var t=/^[a-zA-Z][a-zA-Z0-9_@.]{5,15}$/;return this.username.length<6||this.username.length>16?"用户名限制为6至16位":t.test(this.username)?void 0:"用户名只能由字母开始"},validatePassword:function(){var t=/^[a-zA-Z][(\w)!@#%]{9,15}$/;return this.password.length<10||this.password.length>16?"密码限制为10至16位":t.test(this.password)?void 0:"密码必须由字母开始"},userInfo:function(){return this.$store.state.user},isUserLogin:function(){return this.$store.state.isUserLogin}},methods:{login:function(){""===this.userInfo.name&&""===this.userInfo.password?alert("您尚未注册"):this.username===this.userInfo.name&&this.password===this.userInfo.password?this.isUserLogin||(alert("登录成功"),this.$store.dispatch("toggleLoginState")):this.username!==this.userInfo.name?this.usernameTip="用户名不正确":this.password!==this.userInfo.password&&(this.passwordTip="密码不正确")},registerMember:function(){if(this.usernameTip=this.validateUserName,this.passwordTip=this.validatePassword,!this.validateUserName&&!this.validatePassword){alert("注册成功，可登录");var t={name:this.username,password:this.password};this.$store.dispatch("setUserInfo",t),this.username="",this.password=""}}}}},function(t,s){},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(3),a=e(9),n=e.n(a),c=e(20),o=e(21),r=e(10),l=e.n(r),u=e(15),d=e.n(u),h=e(16),v=e.n(h),f=e(14),_=e.n(f),p=e(12),m=e.n(p),C=e(19),g=e.n(C),w=e(18),x=e.n(w),k=e(11),b=e.n(k),L=e(17),$=e.n(L),S=e(13),y=e.n(S);i.a.use(c.a),i.a.use(n.a);var N=[{path:"/",component:d.a},{path:"/home",component:d.a},{path:"/setting",component:v.a},{path:"/article/:id",name:"article",component:_.a,children:[{path:"share",name:"share",component:$.a}]},{path:"/collect",component:m.a},{path:"/login",component:g.a},{path:"/message",component:x.a},{path:"/aboutme",component:b.a},{path:"/column/:id",name:"column",component:y.a}],E=new c.a({mode:"history",routes:N});new i.a({router:E,store:o.a,render:function(t){return t(l.a)}}).$mount("#app")}],[95]);
//# sourceMappingURL=app.b43d6b51c666a99b89c6.js.map