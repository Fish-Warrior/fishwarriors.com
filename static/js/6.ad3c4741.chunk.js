(this["webpackJsonpbsc-dapp-example"]=this["webpackJsonpbsc-dapp-example"]||[]).push([[6],{1105:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var a=c(42),n=c(2),s=function(){var e=Object(a.f)();Object(n.useEffect)((function(){return e.listen((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}))}),[e])}},1106:function(e,t,c){"use strict";var a=c(15),n=c(2),s=c(8);t.a=function(e){var t=Object(n.useState)(!1),c=Object(a.a)(t,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){var t=document.getElementsByTagName("head")[0],c=document.createElement("link");return c.rel="stylesheet",c.type="text/css",c.href="".concat(e,"?v=").concat(s.b.gitCommitHash),c.media="all",t.appendChild(c),r(!0),function(){document.head.removeChild(c)}}),[e]),i}},1107:function(e,t,c){"use strict";c.d(t,"a",(function(){return x}));var a=c(0),n=c.n(a),s=c(7),i=c(2),r=c.n(i),l=c(264),o=c(263),d=c(1108),j=c(8),b=c(31),u=c(265),m=c.n(u),f=c(155),h=c(266),p=c(3);function x(e){var t=e.dropdownUrls,c=e.navUrls,a=r.a.useContext(l.a),i=a.account,u=a.isReady,x=a.balance,O=a.statusSell,v=a.sellToken,g=a.disconnect,N=a.connect;return Object(h.a)((function(){document.querySelectorAll("nav .nav-title a").forEach((function(e){"/".concat(e.getAttribute("href"))==="".concat(window.location.pathname).concat(window.location.hash)&&e.click()}))}),500),Object(p.jsx)("nav",{className:"navbar-dark bg-dark navbar-expand-sm",children:Object(p.jsx)("div",{"data-v-7462027c":!0,"data-v-11bc6412":!0,className:"nav-page",children:Object(p.jsxs)("div",{"data-v-7462027c":!0,className:"nav-fixed content_box m-0",children:[Object(p.jsx)("a",{"data-v-7462027c":!0,className:"nav-logo",href:"/",children:Object(p.jsx)("img",{"data-v-7462027c":!0,src:"img/logo.png"})}),Object(p.jsx)("div",{"data-v-7462027c":!0,className:"nav-title",children:c.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,c=e.href;return Object(p.jsx)("div",{"data-v-7462027c":!0,className:"nav-title-a",style:{padding:"10px"},children:Object(p.jsx)(d.a,{"data-v-7462027c":!0,smooth:!0,to:c,style:{maxWidth:"calc((100vw - 10px)/(".concat(window.document.querySelectorAll(".nav-title-a").length-(f.isMobile?0:1),"))"),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t})},c)}))}),Object(p.jsx)("div",{"data-v-7462027c":!0,className:"nav-lan",children:Object(p.jsx)("div",{"data-v-7462027c":!0,className:"header-login",children:i&&i.address?Object(p.jsxs)("div",{className:f.isMobile?"d-none":"",children:[Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-4","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-list-4",children:Object(p.jsx)("ul",{className:"navbar-nav",children:Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(p.jsx)("img",{src:new m.a(50,i.address).getImage(),width:50,height:50,className:"rounded-circle"})}),Object(p.jsxs)("div",{className:"dropdown-menu dropdown-menu-right text-center content_box","aria-labelledby":"navbarDropdownMenuLink",children:[Object(p.jsxs)("a",{className:"dropdown-item",disabled:"disabled",children:[Object(b.c)(i.address)," (",Object(b.a)(x,!1)," ",j.g.symbol,")"]}),t.filter((function(e){return e.active||void 0===e.active})).map((function(e){var t=e.title,c=e.href;return Object(p.jsx)(o.b,{to:c,className:"dropdown-item",children:t},c)})),O&&Object(p.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault();var t=Object(b.m)(function(){var e=Object(s.a)(n.a.mark((function e(c){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(c).then((function(){t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Withdraw"}),Object(p.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){e.preventDefault(),g()},children:"Disconnect"})]})]})})})]}):u&&Object(p.jsx)("a",{href:"#",className:f.isMobile?"invisible":"visible",onClick:function(e){e.preventDefault(),N()},children:Object(p.jsx)("div",{className:"content_button content_button_yellow m-0",style:{padding:"0.3em 1em 0.5em 1em"},children:Object(p.jsx)("p",{style:{fontSize:"1.3em"},children:f.isMobile?"":"Connect Wallet"})})})})})]})})})}},1108:function(e,t,c){"use strict";c.d(t,"a",(function(){return f}));var a=c(2),n=c.n(a),s=(c(104),c(263)),i=function(){return(i=Object.assign||function(e){for(var t,c=1,a=arguments.length;c<a;c++)for(var n in t=arguments[c])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var r="",l=null,o=null,d=null;function j(){r="",null!==l&&l.disconnect(),null!==o&&(window.clearTimeout(o),o=null)}function b(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function u(){var e=null;if("#"===r)e=document.body;else{var t=r.replace("#","");null===(e=document.getElementById(t))&&"#top"===r&&(e=document.body)}if(null!==e){d(e);var c=e.getAttribute("tabindex");return null!==c||b(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==c||b(e)||(e.blur(),e.removeAttribute("tabindex")),j(),!0}return!1}function m(e){return n.a.forwardRef((function(t,c){var a="";"string"===typeof t.to&&t.to.includes("#")?a="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(a=t.to.hash);var b={};e===s.c&&(b.isActive=function(e,t){return e&&e.isExact&&t.hash===a});var m=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c}(t,["scroll","smooth","timeout","elementId"]);return n.a.createElement(e,i({},b,m,{onClick:function(e){var c;j(),r=t.elementId?"#"+t.elementId:a,t.onClick&&t.onClick(e),""===r||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(d=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},c=t.timeout,window.setTimeout((function(){!1===u()&&(null===l&&(l=new MutationObserver(u)),l.observe(document,{attributes:!0,childList:!0,subtree:!0}),o=window.setTimeout((function(){j()}),c||1e4))}),0))},ref:c}),t.children)}))}var f=m(s.b);m(s.c)},1109:function(e,t,c){"use strict";c.d(t,"a",(function(){return h}));var a=c(2),n=c.n(a),s=c(8),i=c(155),r=c(36),l=c(0),o=c.n(l),d=c(7),j=c(13),b=c(42),u=c(264),m=c(3),f=function(){var e=Object(b.f)(),t=Object(b.g)(),c=Object(a.useContext)(u.a),s=c.account,i=c.disconnect,l=c.connect,f=t.pathname,h=function(){var t=Object(d.a)(o.a.mark((function t(c){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/account"!==c){t.next=9;break}if(!s){t.next=5;break}j.a.show({content:"Do you want to disconnect the wallet?",closeOnAction:!0,actions:[[{key:"cancel",text:"Cancel",danger:!0},{key:"delete",text:"Disconnect",bold:!0}]],onAction:function(e,t){1===t&&i()}}),t.next=7;break;case 5:return t.next=7,l();case 7:t.next=10;break;case 9:"/#tokenomics"===c&&"/"===f?window.$('a[href^="#/#tokenomics"]')[0].click():e.push("".concat(c));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=n.a.useMemo((function(){var e=[{key:"/",title:"Home",icon:Object(m.jsx)("i",{className:"fas fa-h-square"})},{key:"/marketplace",title:"Marketplace",icon:Object(m.jsx)("i",{className:"fas fa-store"})}];return s?e=[].concat(Object(r.a)(e),[{key:"/dashboard",title:"Dashboard",icon:Object(m.jsx)("i",{className:"fas fa-columns"})},{key:"/armory",title:"Armory",icon:Object(m.jsx)("i",{className:"fas fa-burn"})},{key:"/invitation-list-rewards",title:"Rewards",icon:Object(m.jsx)("i",{className:"fas fa-link"})}]):e.push({key:"/#tokenomics",title:"Pre-sale",icon:Object(m.jsx)("i",{className:"fas fa-wallet"})}),e.push({key:"/account",title:s?"Disconnect":"Connect Wallet",icon:s?Object(m.jsx)("i",{className:"fas fa-sign-out-alt"}):Object(m.jsx)("i",{className:"fas fa-sign-in-alt"})}),e}),[s]);return Object(m.jsx)(j.c,{activeKey:f,onChange:function(e){return h(e)},children:p.map((function(e){return Object(m.jsx)(j.c.Item,{icon:e.icon,title:e.title},e.key)}))})};function h(){return Object(m.jsxs)("div",{"data-v-c18f8362":!0,"data-v-11bc6412":!0,className:"footer-page",style:{textAlign:"center",marginBottom:i.isMobile?"116px":0},children:[Object(m.jsx)("div",{"data-v-c18f8362":!0,className:"imglogo",children:Object(m.jsx)("img",{"data-v-c18f8362":!0,src:"img/logo.png"})}),Object(m.jsxs)("div",{"data-v-c18f8362":!0,className:"email",children:["Contact us: ",Object(m.jsxs)("a",{href:"mailto: service@".concat(s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"),className:"contact",children:["service@",s.g.name.replaceAll(" ","").toLocaleLowerCase(),".com"]})]}),Object(m.jsxs)("div",{className:"social",children:[Object(m.jsx)("a",{href:s.b.socials.telegram,children:"Telegram"}),Object(m.jsx)("a",{href:s.b.socials.twitter,children:"Twitter"}),Object(m.jsx)("a",{href:s.b.socials.reddit,children:"Reddit"}),Object(m.jsx)("a",{href:s.b.socials.facebook,children:"Facebook"})]}),Object(m.jsxs)("div",{"data-v-c18f8362":!0,className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," ",s.g.name,". All rights reserved."]}),i.isMobile&&Object(m.jsx)("div",{style:{flex:"0 1 0%",position:"fixed",bottom:"0px",width:"100%",background:"#232125",zIndex:1e3},children:Object(m.jsx)(f,{})})]})}},1110:function(e,t,c){"use strict";c(2),c(1113);var a=c(3);t.a=function(e){var t=e.message,c=e.width,n=void 0===c?500:c;return Object(a.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative"},children:[Object(a.jsx)("img",{src:"img/empty.gif",style:{width:n},alt:""}),Object(a.jsx)("p",{style:{position:"absolute",bottom:n/15,fontSize:n/15},children:t})]})}},1111:function(e,t,c){"use strict";c(2),c(1114);var a=c(3);t.a=function(e){var t=e.message,c=void 0===t?"Loading...":t;e.width;return Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{position:"relative",minHeight:400},children:Object(a.jsx)("p",{style:{fontSize:22},children:c})})}},1112:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var a=c(0),n=c.n(a),s=c(7),i=c(2),r=c.n(i),l=c(8),o=c(1107),d=c(31),j=c(155),b=(c(13),c(1109)),u=c(264),m=c(265),f=c.n(m),h=c(3);function p(e){var t=e.children,c=e.isReady,a=e.navUrls,i=e.dropdownUrls,m=e.showToolBar,p=void 0===m||m,x=e.title,O=r.a.useContext(u.a),v=O.account,g=O.balance,N=O.balanceBNB,w=O.statusSale,y=O.convertNumberToPrice,T=O.buyToken,E=O.totalSale,_=O.getTotalSale;return Object(h.jsx)("div",{"data-v-1398d974":!0,id:"app",className:"en application",children:Object(h.jsxs)("div",{"data-v-11bc6412":!0,"data-v-1398d974":!0,id:"homepage",className:"index-page",children:[c&&Object(h.jsx)(o.a,{navUrls:a,dropdownUrls:i}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{id:"fg3",className:"bg",src:"img/03.png"}),Object(h.jsx)("img",{id:"fg2",className:"bg",src:"img/02.png",style:{top:0}}),Object(h.jsx)("img",{id:"fg1",className:"bg",src:"img/01.png",style:{top:0}})]}),Object(h.jsx)("div",{style:{margin:"120px 0 40px 0"},children:x&&Object(h.jsx)("h2",{className:"gradient-heading",children:x})}),Object(h.jsx)("main",{style:{minHeight:"100vh",marginBottom:50},children:p?Object(h.jsx)(h.Fragment,{children:c&&v&&Object(h.jsx)("div",{className:"container-xl container-md-fluid container-ms-fluid",children:Object(h.jsxs)("section",{className:"dashboard",children:[Object(h.jsxs)("header",{className:"booking-bar content_box m-0",children:[Object(h.jsxs)("div",{className:"booking-bar__info",children:[Object(h.jsx)("h2",{className:"booking-bar__heading",children:Object(h.jsxs)("p",{className:"styled-price",children:[l.g.name," (",l.g.symbol,")"]})}),Object(h.jsx)("p",{className:"booking-bar__sub-heading",children:Object(h.jsxs)("span",{className:"top-flight-card__heading",children:[Object(d.c)(l.g.address,j.isMobile?7:15),Object(h.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(l.g.address)},children:[" ",Object(h.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})})]}),Object(h.jsxs)("div",{className:"booking-bar__inputs",children:[Object(h.jsxs)("div",{className:"icon-input",children:[Object(h.jsxs)("p",{className:"top-flight-card__price styled-price",children:[y(g,!1),w&&"number"===typeof E&&Object(h.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault();var t=Object(d.j)(function(){var e=Object(s.a)(n.a.mark((function e(c){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(c).then((function(){_(),t.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E)},children:[" ",Object(h.jsx)("i",{className:"fas fa-plus-circle",style:{fontSize:"70%"}})]})]}),Object(h.jsx)("div",{className:"top-flight-card__info",children:Object(h.jsx)("p",{className:"top-flight-card__heading",children:l.g.symbol})})]}),Object(h.jsxs)("div",{className:"icon-input",children:[Object(h.jsx)("p",{className:"top-flight-card__price styled-price",children:y(N)}),Object(h.jsx)("div",{className:"top-flight-card__info",children:Object(h.jsx)("p",{className:"top-flight-card__heading",children:"BNB"})})]})]})]}),t,Object(h.jsxs)("aside",{className:"user-card content_box m-0",children:[Object(h.jsx)("figure",{className:"user-card__avatar",children:Object(h.jsx)("img",{src:new f.a(40,v.address).getImage(),width:"40",height:"40",className:"rounded-circle"})}),Object(h.jsxs)("div",{className:"p user-card__heading",children:["Hello, ",Object(h.jsxs)("span",{className:"user-card__name",children:[Object(d.c)(v.address,4),Object(h.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),Object(d.e)(v.address)},children:[" ",Object(h.jsx)("i",{className:"fas fa-copy",style:{fontSize:12}})]})]})]})]})]})})}):t})]}),Object(h.jsx)(b.a,{})]})})}},1113:function(e,t,c){},1114:function(e,t,c){},1222:function(e,t,c){},1228:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return w}));var a=c(28),n=c(15),s=c(0),i=c.n(s),r=c(7),l=c(2),o=c.n(l),d=c(1106),j=c(264),b=(c(1222),c(42)),u=c(1112),m=c(8),f=c(1110),h=c(1111),p=c(31),x=c(271),O=c(22),v=c(1105),g=c(3),N=function(e){var t=e.typeNft,c=e.id,a=e.timestamp,n=e.speciesId,s=e.HP,l=e.DEF,d=e.AVD,b=e.ATK,u=e.CRT,f=e.WSP,h=e.upgradeTimes,N=e.allowAction,w=o.a.useContext(j.a),y=w.upgradeCharacter,T=w.upgradeWeapons,E=w.getCharacters,_=w.getWeapons,k=w.setOffer,C=w.openEgg,A=w.offers,P=w.removeOffer,F=w.openChest;Object(v.a)();var Y=function(){return[m.l.TYPE_NFT.CHARACTER,m.l.TYPE_NFT.WEAPON].includes(t)},R=function(){return t===m.l.TYPE_NFT.CHARACTER?"character":t===m.l.TYPE_NFT.WEAPON?"weapon":t===m.l.TYPE_NFT.EGG?"egg":"chest"},S=function(e,t){return(e===m.l.TYPE_NFT.CHARACTER?m.d.species[t]:e===m.l.TYPE_NFT.WEAPON?m.p.species[t]:{})||{}},D=function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?y(c,h).then((function(){E()})):T(c,h).then((function(){_()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(r.a)(i.a.mark((function e(a){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),s=Object(p.n)((function(e,a){"bnb"===a?k({tokenId:c,typeNft:t,amount:e,payWithTokens:!1}).then((function(){s.close()})):k({tokenId:c,typeNft:t,amount:e*Math.pow(10,m.g.decimal),payWithTokens:!0}).then((function(){s.close()}))}),"".concat(S(t,n).name||t===m.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest"," #").concat(c));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!N){e.next=5;break}return e.abrupt("return",t===m.l.TYPE_NFT.EGG?C(c):F(c));case 5:O.c.error("Item cannot be opened now!");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),P(c,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){return!!A&&!!A.find((function(e){return e.tokenId===c&&t===e.typeNft}))};return Object(g.jsxs)("div",{className:"col-md-4 content_box",children:[Object(g.jsx)("div",{className:"row justify-content-center mb-3",children:Object(g.jsx)("div",{className:"content_box_label_".concat([m.l.TYPE_NFT.WEAPON,m.l.TYPE_NFT.CHARACTER].includes(t)?m.d.rareType[S(t,n).rarity].toLocaleLowerCase():"legendary"," font-weight-bold"),children:[m.l.TYPE_NFT.WEAPON,m.l.TYPE_NFT.CHARACTER].includes(t)?m.d.rareType[S(t,n).rarity]||"...":"???"})}),Object(g.jsx)("div",{className:"nft-image",children:Object(g.jsx)(x.LazyLoadImage,{className:"card-img-top",effect:"blur",src:"img/".concat(R(),"s/").concat(R(),"_").concat(Y()?n:2===t?4:0,".").concat(Y()?"png":"gif")})}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(g.jsxs)("div",{className:"text-left text-warning name",children:[[m.l.TYPE_NFT.WEAPON,m.l.TYPE_NFT.CHARACTER].includes(t)?S(t,n).name:t===m.l.TYPE_NFT.EGG?"Magic Egg":"Weapon Chest"," #",c]})}),Object(g.jsxs)("p",{className:"card-text",style:{marginBottom:10},children:[Object(g.jsx)("div",{"data-v-11bc6412":!0,className:"attr-content",children:[m.l.TYPE_NFT.EGG,m.l.TYPE_NFT.CHARACTER].includes(t)?Object(g.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-row display-flex-between mb15",children:[Object(g.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(g.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-life attr-icon align-middle"}),Object(g.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["HP ",Object(g.jsx)("span",{className:"text-success font-weight-bold",children:t===m.l.TYPE_NFT.EGG?"???":s})]})]}),Object(g.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(g.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-defense attr-icon align-middle"}),Object(g.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["DEF ",Object(g.jsx)("span",{className:"text-warning font-weight-bold",children:t===m.l.TYPE_NFT.EGG?"???":l})]})]}),Object(g.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(g.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-hedge attr-icon align-middle"}),Object(g.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["AVD ",Object(g.jsx)("span",{className:"text-info font-weight-bold",children:t===m.l.TYPE_NFT.EGG?"???":d})]})]})]}):Object(g.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-row display-flex-between mb15",children:[Object(g.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(g.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-attack attr-icon"}),Object(g.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["ATK ",Object(g.jsx)("span",{className:"text-success font-weight-bold",children:t===m.l.TYPE_NFT.CHEST?"???":b})]})]}),Object(g.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(g.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-crit attr-icon"}),Object(g.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["CRT ",Object(g.jsx)("span",{className:"text-warning font-weight-bold",children:t===m.l.TYPE_NFT.CHEST?"???":u})]})]}),Object(g.jsxs)("div",{"data-v-11bc6412":!0,className:"attr-col",children:[Object(g.jsx)("i",{"data-v-11bc6412":!0,className:"font_family icon-speed attr-icon"}),Object(g.jsxs)("span",{"data-v-11bc6412":!0,className:"attr-text",children:["WSP ",Object(g.jsx)("span",{className:"text-info font-weight-bold",children:t===m.l.TYPE_NFT.CHEST?"???":f})]})]})]})}),Y()?Object(g.jsxs)("div",{children:["Upgrade Price: ",Object(g.jsx)("span",{className:"text-success font-weight-bold",children:Object(p.a)(Object(p.b)(h*m.d.priceUpgrade/10+m.d.priceUpgrade),!1)})," ",m.g.symbol]}):null,Object(g.jsxs)("div",{children:["Created At: ",a.toDate().toLocaleString()]})]}),Y()?Object(g.jsx)("a",{href:"#",onClick:D,className:"btn-action",disabled:I(),children:Object(g.jsx)("div",{className:"content_button content_button_yellow",style:{padding:"0.3em 2em 0.5em 2em"},children:Object(g.jsx)("p",{style:{fontSize:"1em"},children:"Upgrade Now"})})}):Object(g.jsx)("a",{href:"#",onClick:W,className:"btn-action",disabled:!N,children:Object(g.jsx)("div",{className:"content_button content_button_yellow",style:{padding:"0.3em 2em 0.5em 2em"},children:Object(g.jsx)("p",{style:{fontSize:"1em"},children:"Open Now"})})}),Object(g.jsx)("a",{href:"#",onClick:function(e){if(0!=n)return I()?G(e):H(e);O.c.error("This is the default weapon you cannot sell!")},className:"btn-action",disabled:0==n,children:Object(g.jsx)("div",{className:"content_button ".concat(I()?"content_button_red":""),style:{padding:"0.3em 2em 0.5em 2em"},children:Object(g.jsx)("p",{style:{fontSize:"1em"},children:I()?"Remove from market":"Sell Now"})})})]})]},"".concat(t,"_").concat(c))};function w(){var e=Object(d.a)("css/dashboard.css"),t=Object(b.f)(),c=o.a.useContext(j.a),s=c.account,l=c.isAdmin,p=c.eggs,x=c.chests,O=c.characters,v=c.weapons,w=c.getCharacters,y=c.getWeapons,T=c.getEggs,E=c.buyEgg,_=c.getChests,k=c.buyChest,C=c.getOffers,A=o.a.useState(m.l.TYPE_NFT.CHARACTER),P=Object(n.a)(A,2),F=P[0],Y=P[1],R=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Dashboard",href:"/dashboard"},{title:"Marketplace",href:"/marketplace"},{title:"Invitation list & Rewards",href:"/invitation-list-rewards"}]}),[]),S=o.a.useMemo((function(){return[{title:"Home",href:"/"},{title:"Marketplace",href:"/marketplace"},{title:"Dashboard",href:"/dashboard"},{title:"Transactions",href:"/transactions"},{title:"Administration",href:"/admin",active:l},{title:"Invitation list & Rewards",href:"/invitation-list-rewards"}]}),[]);o.a.useEffect((function(){setTimeout((function(){window.$('[data-toggle="tooltip"]').tooltip()}),500)}),[p,O,v]),o.a.useEffect((function(){s&&s.address?setTimeout((function(){window.$(".loader").fadeOut(500,"swing",(function(){}))}),4e3):t.push("/")}),[]),o.a.useEffect((function(){s&&(C(),w(),y(),T(),_())}),[s]);var D=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),E().then((function(){T()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),k().then((function(){_()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(u.a,{isReady:e,navUrls:R,dropdownUrls:S,title:"Armory",children:Object(g.jsxs)("div",{className:"furnace flights",children:[Object(g.jsxs)("section",{className:"content_box d-flex furnace-toolbar",children:[Object(g.jsxs)("div",{className:"left-toolbar",children:[Object(g.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return Y(m.l.TYPE_NFT.CHARACTER)},children:[Object(g.jsx)("div",{className:"nft-image-item ".concat(F===m.l.TYPE_NFT.CHARACTER?"active":""),children:Object(g.jsx)("img",{src:"img/character.png"})}),Object(g.jsx)("span",{className:"label",children:(O||[]).length})]}),Object(g.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return Y(m.l.TYPE_NFT.WEAPON)},children:[Object(g.jsx)("div",{className:"nft-image-item ".concat(F===m.l.TYPE_NFT.WEAPON?"active":""),children:Object(g.jsx)("img",{src:"img/weapon.png"})}),Object(g.jsx)("span",{className:"label",children:(v||[]).length})]}),Object(g.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return Y(m.l.TYPE_NFT.EGG)},children:[Object(g.jsx)("div",{className:"nft-image-item ".concat(F===m.l.TYPE_NFT.EGG?"active":""),children:Object(g.jsx)("img",{src:"img/egg.png"})}),Object(g.jsx)("span",{className:"label",children:(p||[]).length})]}),Object(g.jsxs)("div",{className:"nft-item",role:"button",onClick:function(){return Y(m.l.TYPE_NFT.CHEST)},children:[Object(g.jsx)("div",{className:"nft-image-item ".concat(F===m.l.TYPE_NFT.CHEST?"active":""),children:Object(g.jsx)("img",{src:"img/chest.png"})}),Object(g.jsx)("span",{className:"label",children:(x||[]).length})]})]}),Object(g.jsxs)("div",{className:"right-toolbar",children:[Object(g.jsxs)("a",{href:"#",className:"nft-item",onClick:D,children:[Object(g.jsx)("img",{src:"img/egg.png",style:{width:40,height:40}}),Object(g.jsx)("span",{className:"label",children:Object(g.jsx)("i",{className:"fas fa-plus-circle"})})]}),Object(g.jsxs)("a",{href:"#",className:"nft-item",onClick:H,children:[Object(g.jsx)("img",{src:"img/chest.png",style:{width:40,height:40}}),Object(g.jsx)("span",{className:"label",children:Object(g.jsx)("i",{className:"fas fa-plus-circle"})})]})]})]}),Object(g.jsxs)("section",{className:"content_box content",children:[Object(g.jsxs)("div",{className:"nft-item w-100 ".concat(0!==F?"d-none":""),id:"Warriors",children:[Object(g.jsx)("p",{className:"title text-center",children:"Warriors"}),Object(g.jsxs)("div",{className:"row",children:[O&&O.length?O.map((function(e){var t=Object(a.a)({typeNft:m.l.TYPE_NFT.CHARACTER,allowAction:!0},e);return Object(g.jsx)(N,Object(a.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(O&&O.length)&&Object(g.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center  w-100",children:Object(g.jsx)("p",{children:O?Object(g.jsx)(f.a,{message:"Empty!",width:300}):Object(g.jsx)(h.a,{width:300})})})]})]}),Object(g.jsxs)("div",{className:"nft-item w-100 ".concat(1!==F?"d-none":""),id:"Weapons",children:[Object(g.jsx)("p",{className:"title text-center",children:"Weapons"}),Object(g.jsxs)("div",{className:"row",children:[v&&v.length?v.map((function(e){var t=Object(a.a)({typeNft:m.l.TYPE_NFT.WEAPON,allowAction:!0},e);return Object(g.jsx)(N,Object(a.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(v&&v.length)&&Object(g.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center  w-100",children:Object(g.jsx)("p",{children:v?Object(g.jsx)(f.a,{message:"Empty!",width:300}):Object(g.jsx)(h.a,{width:300})})})]})]}),Object(g.jsxs)("div",{className:"nft-item w-100 ".concat(2!==F?"d-none":""),id:"Eggs",children:[Object(g.jsx)("p",{className:"title text-center",children:"Eggs"}),Object(g.jsxs)("div",{className:"row",children:[p&&p.length?p.map((function(e){var t=Object(a.a)({typeNft:m.l.TYPE_NFT.EGG},e);return Object(g.jsx)(N,Object(a.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(p&&p.length)&&Object(g.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center w-100",children:Object(g.jsx)("p",{children:p?Object(g.jsx)(f.a,{message:"Empty!",width:300}):Object(g.jsx)(h.a,{width:300})})})]})]}),Object(g.jsxs)("div",{className:"nft-item w-100 ".concat(3!==F?"d-none":""),id:"Chests",children:[Object(g.jsx)("p",{className:"title text-center",children:"Chests"}),Object(g.jsxs)("div",{className:"row",children:[x&&x.length?x.map((function(e){var t=Object(a.a)({typeNft:m.l.TYPE_NFT.CHEST},e);return Object(g.jsx)(N,Object(a.a)({},t),"".concat(t.typeNft,"_").concat(t.id))})):null,!(x&&x.length)&&Object(g.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center w-100",children:Object(g.jsx)("p",{children:x?Object(g.jsx)(f.a,{message:"Empty!",width:300}):Object(g.jsx)(h.a,{width:300})})})]})]})]})]})})}}}]);