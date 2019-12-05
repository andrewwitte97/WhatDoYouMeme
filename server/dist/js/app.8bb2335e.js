(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"592d9119"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"206d":function(t,e,a){"use strict";var n=a("4413"),s=a.n(n);s.a},4413:function(t,e,a){},"568f":function(t,e,a){"use strict";var n=a("c457"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Header"),a("Nav"),a("router-view"),a("MyFooter")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{"exact-active-class":"active",to:"/"}},[a("i",{staticClass:"fas fa-home fa-pull-left"}),t._v(" Home ")]),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){e.preventDefault(),t.isOpen=!t.isOpen}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])],1),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isOpen},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{"exact-active-class":"active",to:"/about"}},[a("i",{staticClass:"fab fa-vuejs fa-pull-left"}),t._v(" About ")]),a("router-link",{staticClass:"navbar-item",attrs:{"exact-active-class":"active",to:"/game"}},[a("i",{staticClass:"fas fa-ghost fa-pull-left"}),t._v(" Game ")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" More ")]),a("div",{staticClass:"navbar-dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[a("i",{staticClass:"fab fa-vuejs fa-pull-left"}),t._v(" About ")]),a("a",{staticClass:"navbar-item"},[t._v(" Jobs ")]),a("a",{staticClass:"navbar-item"},[t._v(" Contact ")]),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[t._v(" Report an issue ")])],1)])],1),t._m(0)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[a("a",{staticClass:"button is-primary"},[a("strong",[t._v("Sign up")])]),a("a",{staticClass:"button is-light"},[t._v(" Log in ")])])])])}],c={data:function(){return{isOpen:!1}}},l=c,u=(a("5b49"),a("2877")),p=Object(u["a"])(l,i,o,!1,null,null,null),f=p.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level"},[n("a",{attrs:{href:"/"}},[n("img",{staticStyle:{height:"18px"},attrs:{alt:"Vue logo",src:a("cf05")}}),t._v(" W.D.Y.M. ")])])}],d={},h=Object(u["a"])(d,v,m,!1,null,null,null),b=h.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[t._v("What do you meme")]),t._v(" by "),a("a",{attrs:{href:"https://jgthms.com"}},[t._v("Andrew Witte")]),t._v(". The source code is licensed "),a("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". The website content is licensed "),a("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(". ")])])])])}],g={},y=Object(u["a"])(g,_,C,!1,null,null,null),x=y.exports,w={components:{Nav:f,Header:b,MyFooter:x}},O=w,j=Object(u["a"])(O,s,r,!1,null,null,null),k=j.exports,P=(a("d3b7"),a("8c4f")),E=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),S=(a("96cf"),a("89ba"));function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?$(a,!0).forEach((function(e){Object(E["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var M="/gameApi/";function D(t,e){return R.apply(this,arguments)}function R(){return R=Object(S["a"])(regeneratorRuntime.mark((function t(e,a){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s={authorization:"bearer "+T.User_Id},!a){t.next=7;break}return t.next=4,fetch(M+e,{method:"POST",cache:"no-cache",headers:I({},s,{"Content-Type":"application/json"}),body:JSON.stringify(a)});case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,fetch(M+e,{headers:s});case 9:n=t.sent;case 10:if(!n.ok){t.next=16;break}return t.next=13,n.json();case 13:return t.abrupt("return",t.sent);case 16:return t.next=18,n.json();case 18:throw t.sent;case 19:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}var T={User_Id:null},U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("section",{staticClass:"hero is-large is-primary is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"}),a("h2",{staticClass:"subtitle"},[t._v(" Primary bold subtitle ")])])])])])}],J={name:"home",components:{}},N=J,A=Object(u["a"])(N,U,G,!1,null,null,null),F=A.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"is-size-1"},[t._v(" This is the Game Page ")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-quarter"},[a("ul",{staticClass:"panel"},[a("p",{staticClass:"panel-heading"},[t._v(" Players ")]),t._l(t.game.Players,(function(e,n){return a("li",{key:n,staticClass:"panel-block",class:{"is-active":n==t.game.Dealer,"has-text-primary":n==t.me.User_Id}},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas",class:n==t.game.Dealer?"fa-user-secret":"fa-user",attrs:{"aria-hidden":"true"}})]),t._v(" "+t._s(e.name)+" ")])}))],2),a("ul",{staticClass:"panel"},[a("p",{staticClass:"panel-heading"},[t._v(" My Hand ")]),t._l(t.My_Captions,(function(e,n){return a("li",{key:n,staticClass:"panel-block is-active",on:{click:function(a){return t.submitCaption(e,n)}}},[t._v(" "+t._s(e)+" ")])}))],2)]),a("div",{staticClass:"column"},[a("div",{staticClass:"box is-clickable",on:{click:t.pictureClicked}},[t.game.Picture_In_Play?a("img",{staticClass:"image is-fullwidth",attrs:{alt:"Current Picture in Play",src:t.game.Picture_In_Play}}):a("div",{staticClass:"notification is-primary"},[t._v(" Flip First Picture ")])]),a("ul",{staticClass:"panel"},[a("p",{staticClass:"panel-heading"},[t._v(" Captions In Play ")]),t._l(t.game.Captions_In_Play,(function(e,n){return a("li",{key:n,staticClass:"panel-block is-active",class:{"has-background-warning":n==t.game.Caption_Chosen}},[a("div",{staticClass:"is-expanded"},[t._v(t._s(e.text))]),a("span",{staticClass:"tag ",class:t.game.Caption_Chosen>-1?"is-primary":"is-light"},[t._v(t._s(e.player))]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.me.User_Id==t.game.Dealer&&-1==t.game.Caption_Chosen,expression:"me.User_Id == game.Dealer && game.Caption_Chosen == -1"}],staticClass:"button is-small is-primary",attrs:{disabled:t.game.Captions_In_Play.length<t.game.Players.length-1},on:{click:function(e){return e.preventDefault(),t.chooseCaption(n)}}},[t._v(" Choose ")])])}))],2)])])])},L=[],z=(a("a434"),a("9f12"),{User:T,Get_Hand:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return D("hand")},Flip_Picture:function(){return D("picture/flip")},Submit_Caption:function(t){return D("captions_in_play",{text:t})},Choose_Caption:function(t){return D("caption_chosen",{id:t})},Join:function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,D("players",{name:e});case 2:a=t.sent,n=a.player_id,T.User_Id=n,pt.push({name:"game"});case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),Get_State:function(){return D("")}}),B=a("5363"),W=a.n(B),Y={data:function(){return{game:{},My_Captions:[],me:z.User}},created:function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z.Get_Hand();case 2:this.My_Captions=t.sent,setInterval(Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z.Get_State();case 2:return t.abrupt("return",e.game=t.sent);case 3:case"end":return t.stop()}}),t)}))),2e3);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{pictureClicked:function(){z.Flip_Picture().catch((function(t){return W.a.create({text:t.message,type:"error"})}))},submitCaption:function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z.Submit_Caption(e);case 3:t.sent,this.My_Captions.splice(a,1),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),W.a.create({text:t.t0.message,type:"error"});case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(e,a){return t.apply(this,arguments)}return e}(),chooseCaption:function(t){z.Choose_Caption(t).catch((function(t){return W.a.create({text:t.message,type:"error"})}))}}},q=Y,V=(a("568f"),Object(u["a"])(q,H,L,!1,null,null,null)),K=V.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"is-size-1"},[t._v(" Login ")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-third is-offset-one-third"},[a("ul",{staticClass:"panel"},[a("p",{staticClass:"panel-heading"},[t._v(" Login ")]),a("form",{staticClass:"panel-block",on:{submit:function(e){return e.preventDefault(),t.join(e)}}},[a("div",{staticClass:"field",class:{"is-danger":t.error}},[a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._m(0),t._m(1)]),t._m(2)]),a("p",{staticClass:"help is-danger"},[t._v(t._s(t.error))])])])])])])])},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-exclamation-triangle"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control"},[a("button",{staticClass:"button is-info"},[t._v(" Login ")])])}],Z=(a("b0c0"),{data:function(){return{name:"",error:""}},methods:{join:function(){var t=this;z.Join(this.name).catch((function(e){console.error(e),t.error=e.message}))}}}),tt=Z,et=(a("206d"),Object(u["a"])(tt,Q,X,!1,null,null,null)),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"is-size-1"},[t._v(" Choose a game to Join ")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-third is-offset-one-third"},[a("ul",{staticClass:"panel"},[a("p",{staticClass:"panel-heading"},[t._v(" Games ")]),a("div",{staticClass:"panel-block"},[t._v(" Right now there is only one game. "),a("router-link",{staticClass:"button is-primary",attrs:{to:"/game"}},[t._v("Go")])],1)])])])])},st=[],rt={},it=rt,ot=Object(u["a"])(it,nt,st,!1,null,null,null),ct=ot.exports;n["a"].use(P["a"]);var lt=[{path:"/",name:"home",component:F},{path:"/game",name:"game",component:K,beforeEnter:function(t,e,a){null==T.User_Id?a({name:"login"}):a()}},{path:"/login",name:"login",component:at},{path:"/join",name:"join-game",component:ct},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ut=new P["a"]({mode:"history",base:"/",routes:lt}),pt=ut;a("15f5"),a("92c6"),a("f20d");n["a"].config.productionTip=!1,new n["a"]({router:pt,render:function(t){return t(k)}}).$mount("#app")},"58de":function(t,e,a){},"5b49":function(t,e,a){"use strict";var n=a("58de"),s=a.n(n);s.a},c457:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8bb2335e.js.map