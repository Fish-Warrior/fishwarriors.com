/*! For license information please see 7.aa95d286.chunk.js.LICENSE.txt */
(this["webpackJsonpbsc-dapp-example"]=this["webpackJsonpbsc-dapp-example"]||[]).push([[7],{1043:function(e,t,n){e.exports=n(1053)},1044:function(e,t,n){"use strict";var a=n(17),c=n(2),i=n(10);t.a=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){var t=document.getElementsByTagName("head")[0],n=document.createElement("link");return n.rel="stylesheet",n.type="text/css",n.href="".concat(e,"?v=").concat(i.b.gitCommitHash),n.media="all",t.appendChild(n),r(!0),function(){document.head.removeChild(n)}}),[e]),s}},1045:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),c=n.n(a),i=n(6),s=n(2),r=n.n(s),o=n(148),l=n(179),d=n(1050),u=n(10),h=n(26),f=(n(13),n(1043)),b=n.n(f),j=n(149),m=n(7);function p(e){var t=e.dropdownUrls,n=e.navUrls,a=r.a.useContext(o.a),s=a.account,f=a.isReady,p=a.balance,v=a.statusSell,g=a.sellToken,x=a.disconnect,O=a.connect;return r.a.useEffect((function(){setTimeout((function(){document.querySelectorAll("nav .nav-title a").forEach((function(e){e.getAttribute("href")==="".concat(window.location.pathname).concat(window.location.hash)&&e.click()}))}),200)}),[]),Object(m.jsx)("nav",{className:"navbar-dark bg-dark navbar-expand-sm",children:Object(m.jsx)("div",{"data-v-7462027c":!0,"data-v-11bc6412":!0,className:"nav-page",children:Object(m.jsxs)("div",{"data-v-7462027c":!0,className:"nav-fixed content_box m-0",children:[Object(m.jsx)("a",{"data-v-7462027c":!0,className:"nav-logo",href:"/",children:Object(m.jsx)("img",{"data-v-7462027c":!0,src:"img/logo.png"})}),Object(m.jsx)("div",{"data-v-7462027c":!0,className:"nav-title",children:n.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,n=e.href;return Object(m.jsx)("div",{"data-v-7462027c":!0,className:"nav-title-a",style:{padding:10},children:Object(m.jsx)(d.a,{"data-v-7462027c":!0,smooth:!0,to:n,children:t})},n)}))}),Object(m.jsx)("div",{"data-v-7462027c":!0,className:"nav-lan",children:Object(m.jsx)("div",{"data-v-7462027c":!0,className:"header-login",children:s&&s.address?Object(m.jsxs)("div",{className:j.isMobile?"invisible":"visible",children:[Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-4","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-list-4",children:Object(m.jsx)("ul",{className:"navbar-nav",children:Object(m.jsxs)("li",{className:"nav-item dropdown",children:[Object(m.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(m.jsx)("img",{src:new b.a(50,s.address).getImage(),width:50,height:50,className:"rounded-circle"})}),Object(m.jsxs)("div",{className:"dropdown-menu dropdown-menu-right text-center content_box","aria-labelledby":"navbarDropdownMenuLink",children:[Object(m.jsxs)("a",{className:"dropdown-item",disabled:"disabled",children:[Object(h.c)(s.address)," (",Object(h.a)(p,!1)," ",u.g.symbol,")"]}),t.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,n=e.href;return Object(m.jsx)(l.b,{to:n,className:"dropdown-item",children:t},n)})),v&&Object(m.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault();var t=Object(h.l)(function(){var e=Object(i.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(n).then((function(){t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Withdraw"}),Object(m.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),x()},children:"Disconnect"})]})]})})})]}):f&&Object(m.jsx)("a",{href:"#",className:j.isMobile?"invisible":"visible",onClick:function(e){e.preventDefault(),O()},children:Object(m.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 1em 0.5em 1em"},children:Object(m.jsx)("p",{style:{fontSize:"1.3em"},children:j.isMobile?"":"Connect Wallet"})})})})})]})})})}},1046:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(2);var a=n(10),c=n(149),i=n(466),s=n(7);function r(){return Object(s.jsxs)("div",{"data-v-c18f8362":!0,"data-v-11bc6412":!0,className:"footer-page",style:{textAlign:"center",marginBottom:c.isMobile?"116px":0},children:[Object(s.jsx)("div",{"data-v-c18f8362":!0,className:"imglogo",children:Object(s.jsx)("img",{"data-v-c18f8362":!0,src:"img/logo.png"})}),Object(s.jsxs)("div",{"data-v-c18f8362":!0,className:"email",children:["Contact us: ",Object(s.jsxs)("a",{href:"mailto: service@".concat(a.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"),className:"contact",children:["service@",a.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"]})]}),Object(s.jsxs)("div",{className:"social",children:[Object(s.jsx)("a",{href:a.b.socials.telegram,children:"Telegram"}),Object(s.jsx)("a",{href:a.b.socials.twitter,children:"Twitter"}),Object(s.jsx)("a",{href:a.b.socials.reddit,children:"Reddit"}),Object(s.jsx)("a",{href:a.b.socials.facebook,children:"Facebook"})]}),Object(s.jsxs)("div",{"data-v-c18f8362":!0,className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," ",a.g.name,". All rights reserved."]}),c.isMobile&&Object(s.jsx)("div",{style:{flex:"0 1 0%",position:"fixed",bottom:"0px",width:"100%",background:"#232125",zIndex:1e3},children:Object(s.jsx)(i.a,{})})]})}},1047:function(e,t,n){"use strict";n(2),n(1051);var a=n(7);t.a=function(e){var t=e.message,n=e.width,c=void 0===n?500:n;return Object(a.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative"},children:[Object(a.jsx)("img",{src:"img/empty.gif",style:{width:c},alt:""}),Object(a.jsx)("p",{style:{position:"absolute",bottom:c/15,fontSize:c/15},children:t})]})}},1048:function(e,t,n){"use strict";n(2),n(1052);var a=n(7);t.a=function(e){var t=e.message,n=void 0===t?"Loading...":t;e.width;return Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",minHeight:400},children:Object(a.jsx)("p",{style:{fontSize:22},children:n})})}},1049:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),c=n.n(a),i=n(6),s=n(2),r=n.n(s),o=n(10),l=n(1045),d=n(26),u=n(149),h=(n(13),n(1046)),f=n(148),b=n(1043),j=n.n(b),m=n(7);function p(e){var t=e.children,n=e.isReady,a=e.navUrls,s=e.dropdownUrls,b=e.showToolBar,p=void 0===b||b,v=e.title,g=r.a.useContext(f.a),x=g.account,O=g.balance,w=g.balanceBNB,y=g.statusSale,N=g.convertNumberToPrice,_=g.buyToken,E=g.totalSale,S=g.getTotalSale;return Object(m.jsx)("div",{"data-v-1398d974":!0,id:"app",className:"en application",children:Object(m.jsxs)("div",{"data-v-11bc6412":!0,"data-v-1398d974":!0,id:"homepage",className:"index-page",children:[n&&Object(m.jsx)(l.a,{navUrls:a,dropdownUrls:s}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{id:"fg3",className:"bg",src:"img/03.png"}),Object(m.jsx)("img",{id:"fg2",className:"bg",src:"img/02.png",style:{top:0}}),Object(m.jsx)("img",{id:"fg1",className:"bg",src:"img/01.png",style:{top:0}})]}),Object(m.jsx)("div",{style:{margin:"120px 0 40px 0"},children:v&&Object(m.jsx)("h2",{className:"gradient-heading",children:v})}),Object(m.jsx)("main",{style:{minHeight:"100vh",marginBottom:50},children:p?Object(m.jsx)(m.Fragment,{children:n&&x&&Object(m.jsx)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:Object(m.jsxs)("section",{className:"dashboard",children:[Object(m.jsxs)("header",{className:"booking-bar content_box m-0",children:[Object(m.jsxs)("div",{className:"booking-bar__info",children:[Object(m.jsx)("h2",{className:"booking-bar__heading",children:Object(m.jsxs)("p",{className:"styled-price",children:[o.g.name," (",o.g.symbol,")"]})}),Object(m.jsx)("p",{className:"booking-bar__sub-heading",children:Object(m.jsxs)("span",{className:"top-flight-card__heading",children:[Object(d.c)(o.g.address,u.isMobile?7:15),Object(m.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(o.g.address)},children:[" ",Object(m.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})})]}),Object(m.jsxs)("div",{className:"booking-bar__inputs",children:[Object(m.jsxs)("div",{className:"icon-input",children:[Object(m.jsxs)("p",{className:"top-flight-card__price styled-price",children:[N(O,!1),y&&"number"===typeof E&&Object(m.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault();var t=Object(d.j)(function(){var e=Object(i.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(n).then((function(){S(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E)},children:[" ",Object(m.jsx)("i",{className:"fas fa-plus-circle",style:{fontSize:"70%"}})]})]}),Object(m.jsx)("div",{className:"top-flight-card__info",children:Object(m.jsx)("p",{className:"top-flight-card__heading",children:o.g.symbol})})]}),Object(m.jsxs)("div",{className:"icon-input",children:[Object(m.jsx)("p",{className:"top-flight-card__price styled-price",children:N(w)}),Object(m.jsx)("div",{className:"top-flight-card__info",children:Object(m.jsx)("p",{className:"top-flight-card__heading",children:"BNB"})})]})]})]}),t,Object(m.jsxs)("aside",{className:"user-card content_box m-0",children:[Object(m.jsx)("figure",{className:"user-card__avatar",children:Object(m.jsx)("img",{src:new j.a(40,x.address).getImage(),width:"40",height:"40",className:"rounded-circle"})}),Object(m.jsxs)("div",{className:"p user-card__heading",children:["Hello, ",Object(m.jsxs)("span",{className:"user-card__name",children:[Object(d.c)(x.address,4),Object(m.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(x.address)},children:[" ",Object(m.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})]})]})]})})}):t})]}),Object(m.jsx)(h.a,{})]})})}},1050:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(2),c=n.n(a),i=(n(98),n(179)),s=function(){return(s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};var r="",o=null,l=null,d=null;function u(){r="",null!==o&&o.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function h(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function f(){var e=null;if("#"===r)e=document.body;else{var t=r.replace("#","");null===(e=document.getElementById(t))&&"#top"===r&&(e=document.body)}if(null!==e){d(e);var n=e.getAttribute("tabindex");return null!==n||h(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||h(e)||(e.blur(),e.removeAttribute("tabindex")),u(),!0}return!1}function b(e){return c.a.forwardRef((function(t,n){var a="";"string"===typeof t.to&&t.to.includes("#")?a="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(a=t.to.hash);var h={};e===i.c&&(h.isActive=function(e,t){return e&&e.isExact&&t.hash===a});var b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n}(t,["scroll","smooth","timeout","elementId"]);return c.a.createElement(e,s({},h,b,{onClick:function(e){var n;u(),r=t.elementId?"#"+t.elementId:a,t.onClick&&t.onClick(e),""===r||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(d=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===f()&&(null===o&&(o=new MutationObserver(f)),o.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout((function(){u()}),n||1e4))}),0))},ref:n}),t.children)}))}var j=b(i.b);b(i.c)},1051:function(e,t,n){},1052:function(e,t,n){},1053:function(e,t){e.exports=function(e){function t(a){if(n[a])return n[a].exports;var c=n[a]={exports:{},id:a,loaded:!1};return e[a].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(1));"undefined"!=typeof jQuery&&jQuery?jQuery.fn.gixi=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];e.seed=e.seed||this.data("gixiseed"),e.size=e.size||this.data("gixisize")||this.height(),e.size=Math.round(e.size),e.color=e.color||this.data("gixicolor");var t=new a.default(e.size,e.seed);"undefined"!==e.color&&(t.fillStyle=e.color);var n=t.getImage();"IMG"!==this.prop("tagName")?this.css({"background-image":"url("+n+")"}):this.attr("src",n)}:"undefined"!=typeof window?window.GIXI=a.default:e.exports=a.default,t.default=a.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function(){function e(t){n(this,e),this.r=Math.floor(200*t.random()),this.g=Math.floor(200*t.random()),this.b=Math.floor(200*t.random()),this.t=1}return a(e,[{key:"rgba",value:function(){return"rgba("+this.r+","+this.g+","+this.b+","+this.t+")"}}]),e}(),i=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?60:arguments[0],a=arguments.length<=1||void 0===arguments[1]?Math.random():arguments[1];n(this,e),this.w=t,this.h=t,this.PARTITIONS=3,this.LESS_SEED=6,this.BASE_SEED=5,this.SEED_H=this.h/this.BASE_SEED,this.SEED_W=this.w/this.BASE_SEED,this.random_seed=0,a=a.toString();for(var c=0;c<a.length;c++)this.random_seed+=a.charCodeAt(c)}return a(e,[{key:"random",value:function(){return this.random_seed=Math.sin(34812*this.random_seed+.3),Math.abs(this.random_seed)}},{key:"getImage",value:function(){var e,t=document.createElement("canvas");if(t.width=this.w,t.height=this.h,!t&&!t.getContext)throw new Error("Canvas does not supported");return this.drw=t.getContext("2d"),this.drw.fillStyle=this.fillStyle||new c(this).rgba(),this.map(this.grid()),e=t.toDataURL(),t=null,e}},{key:"draw",value:function(){this.drw.fillRect.apply(this.drw,arguments)}},{key:"map",value:function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++)!0===e[t][n]&&(this.draw(this.SEED_H*t,this.SEED_W*n,this.SEED_W,this.SEED_H),t<this.PARTITIONS-1&&this.draw(this.SEED_H*(this.PARTITIONS+1-t),this.SEED_W*n,this.SEED_W,this.SEED_H))}},{key:"grid",value:function(){for(var e=this,t=function(){for(var t=[],n=0;n<e.PARTITIONS;n++){t[n]=[];for(var a=0;a<e.BASE_SEED;a++)t[n][a]=!!Math.floor(2*e.random())}return t[e.PARTITIONS-1]=t[e.PARTITIONS-1].map((function(n,a){return t[e.PARTITIONS-2][a]!==n&&!!Math.floor(2*e.random())})),{map:t,dots:function(){return t.map((function(e){return e.reduce((function(e,t){return t?e+t:e}))})).reduce((function(e,t){return t+e}))},isFilledTop:function(){return t.map((function(e){return e[0]})).reduce((function(e,t){return!(!e&&!t)}))},isFilledBottom:function(){return t.map((function(e){return e[e.length-1]})).reduce((function(e,t){return!(!e&&!t)}))}}},n=t();n.dots()<this.LESS_SEED||!n.isFilledTop()||!n.isFilledBottom();)n=t();return n.map}}]),e}();t.default=i}])},1160:function(e,t,n){},1166:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n(0),c=n.n(a),i=n(6),s=n(17),r=n(2),o=n.n(r),l=n(1044),d=n(148),u=n(26),h=n(13),f=(n(1160),n(33)),b=n(1049),j=n(1047),m=n(1048),p=n(149),v=n(7);function g(){var e=Object(l.a)("css/dashboard.css"),t=Object(f.f)(),n=o.a.useContext(d.a),a=n.account,r=n.getTransactions,g=n.isAdmin,x=n.getBscUrl,O=o.a.useState(),w=Object(s.a)(O,2),y=w[0],N=w[1],_=o.a.useState(0),E=Object(s.a)(_,2),S=E[0],k=E[1],T=o.a.useMemo((function(){return[{title:"Home",href:"/".concat(window.location.search)},{title:"Marketplace",href:"/marketplace".concat(window.location.search)},{title:"Dashboard",href:"/dashboard".concat(window.location.search)},{title:"Invitation list & Rewards",href:"/invitation-list-rewards".concat(window.location.search)}]}),[]),A=o.a.useMemo((function(){return[{title:"Home",href:"/".concat(window.location.search)},{title:"Marketplace",href:"/marketplace".concat(window.location.search)},{title:"Dashboard",href:"/dashboard".concat(window.location.search)},{title:"Armory",href:"/armory".concat(window.location.search)},{title:"Administration",href:"/admin".concat(window.location.search),active:g},{title:"Invitation list & Rewards",href:"/invitation-list-rewards".concat(window.location.search)}]}),[]);o.a.useEffect((function(){a&&a.address?(I(),setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),6e3)):t.push("/")}),[]),o.a.useEffect((function(){setTimeout((function(){window.$('[data-toggle="tooltip"]').tooltip()}),500)}),[y]);var I=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.d.show({icon:"loading",content:"Loading...",maskClickable:!1,duration:0}),e.next=3,r(S,20);case 3:(t=e.sent)&&t.length?(N((y||[]).concat(t)),k(20===t.length?S+1:-1)):k(-1),h.d.clear();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(b.a,{isReady:e,navUrls:T,dropdownUrls:A,title:"Transactions",children:Object(v.jsxs)("section",{className:"flights content_box",style:{minHeight:785},children:[Object(v.jsxs)("table",{className:"table table-borderless table-hover",style:{fontSize:p.isMobile?"2.2rem":"1.7rem"},children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:"#"}),Object(v.jsx)("th",{scope:"col",children:"Txn Hash"}),Object(v.jsx)("th",{scope:"col",children:"From"}),Object(v.jsx)("th",{scope:"col",children:"To"}),Object(v.jsx)("th",{scope:"col",children:"Value"})]})}),Object(v.jsx)("tbody",{children:y&&y.length?y.map((function(e,t){return Object(v.jsxs)("tr",{role:"button",onClick:function(){window.open("".concat(x(),"/tx/").concat(e.hash))},children:[Object(v.jsx)("th",{scope:"row",className:"1"===e.isError?"bg-danger":"",children:t+1}),Object(v.jsx)("td",{"data-toggle":"tooltip","data-placement":"bottom",title:e.hash,className:"".concat("1"===e.isError?"bg-danger":""," text-info"),children:Object(u.c)(e.hash,7)}),Object(v.jsx)("td",{"data-toggle":"tooltip","data-placement":"bottom",title:e.from,className:"1"===e.isError?"bg-danger":"",children:Object(u.c)(e.from,7)}),Object(v.jsx)("td",{"data-toggle":"tooltip","data-placement":"bottom",title:e.to,className:"1"===e.isError?"bg-danger":"",children:Object(u.c)(e.to,7)}),Object(v.jsxs)("td",{className:"".concat("1"===e.isError?"bg-danger":""," text-success"),children:[e.value/1e18," BNB"]})]},t)})):null})]}),S>-1&&Object(v.jsx)("div",{className:"load-more",children:Object(v.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),I()},children:"Load more"})}),!(y&&y.length)&&Object(v.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(v.jsx)("p",{children:y?Object(v.jsx)(j.a,{message:"Empty!",width:300}):Object(v.jsx)(m.a,{width:300})})})]})})}}}]);