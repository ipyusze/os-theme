(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{781:function(e,t,o){"use strict";var r=o(0),a=o.n(r),n=o(14),c=o.n(n),s=o(8);t.a=Object(s.withStyles)(function(e){return{root:{padding:"12px",marginRight:"3px",borderRadius:"5px",cursor:"pointer",display:"inline-block",fontSize:"24px"},reddit:{"&:before":{color:"#ff8c39"},"&:hover":{backgroundColor:"#ff8c39","&:before":{color:"white"}}},youtube:{"&:before":{color:"#ff342f"},"&:hover":{backgroundColor:"#ff342f","&:before":{color:"white"}}},twitter:{"&:before":{color:"#3c16ff"},"&:hover":{backgroundColor:"#3c16ff","&:before":{color:"white"}}},facebook:{"&:before":{color:"#5567ff"},"&:hover":{backgroundColor:"#5567ff","&:before":{color:"white"}}},whatsapp:{"&:before":{color:"#74ff57"},"&:hover":{backgroundColor:"#74ff57","&:before":{color:"white"}}}}})(function(e){var t=e.classes,o=e.type,r=e.onClick;return a.a.createElement("div",{onClick:r,className:c()(t[o],t.root,function(e){switch(e){case"reddit":return"icon-reddit";case"youtube":return"icon-youtube";case"twitter":return"icon-twitter";case"facebook":return"icon-facebook2";case"whatsapp":return"icon-whatsapp";default:return"icon-facebook2"}}(o))})})},851:function(e,t,o){"use strict";o.r(t);var r=o(0),a=o.n(r),n=o(204),c=o(42),s=(o(66),o(781)),i=(o(9),o(17)),l=o(10),f=o(133),u=Object(n.a)({footer:{marginTop:"50px",backgroundColor:"#fafafa",color:"black",display:"flex",flexDirection:"row-reverse",padding:"60px 9%","& > div":{flex:1}},shopInfo:{marginBottom:15},shopName:{margin:"0 0 8px",padding:0,fontWeight:100,fontSize:30,fontFamily:"-apple-system,BlinkMacSystemFont,sans-serif"},shopDesc:{margin:0,padding:0,fontFamily:"-apple-system,BlinkMacSystemFont,sans-serif"},shortcuts:{},shortcutsTitle:{fontFamily:"-apple-system,BlinkMacSystemFont,sans-serif",marginBottom:7,fontWeight:600},shortcutLinks:{padding:0,margin:0,listStyle:"none"},shortcutLink:{padding:"5px 0px"},shortcutLinkButton:{backgroundColor:"transparent",color:"gray",borderWidth:0,cursor:"pointer",fontSize:15,padding:0},"@media (max-width: 600px)":{footer:{display:"block"},shortcuts:{marginBottom:35}}}),p=[{label:"SHOPPING_CART",url:"shoppingcart"},{label:"CHECKOUT",url:"checkout"},{label:"MY_ACCOUNT",url:""},{label:"LOGIN",url:"login"},{label:"REGISTER",url:"register"}];t.default=Object(c.b)(function(e){return{products:e.product.products,feeds:e.feed.feeds,category:e.category.category,shopInfo:e.common.shopInfo}},function(e){return{}})(function(e){Object(r.useContext)(f.b).commonReducer;var t=u();return a.a.createElement("div",{className:t.footer},a.a.createElement("div",{className:t.shortcuts},a.a.createElement("div",{className:t.shortcutsTitle},a.a.createElement(i.a,{keyOfI18n:l.a.FOOTER_FIND_US_ON})),a.a.createElement("ul",{className:t.shortcutLinks},p.map(function(e,o){return a.a.createElement("li",{key:o,className:t.shortcutLink},a.a.createElement("button",{type:"button",className:t.shortcutLinkButton},a.a.createElement(i.a,{keyOfI18n:l.a[e.label]})))}))),a.a.createElement("div",null,a.a.createElement("div",{className:t.shopInfo},a.a.createElement("h6",{className:t.shopName},e.shopInfo.name),a.a.createElement("p",{className:t.shopDesc},e.shopInfo.description)),a.a.createElement("div",null,a.a.createElement(s.a,{type:"facebook"}),a.a.createElement(s.a,{type:"youtube"}),a.a.createElement(s.a,{type:"twitter"}),a.a.createElement(s.a,{type:"reddit"}),a.a.createElement(s.a,{type:"whatsapp"}))))})}}]);
//# sourceMappingURL=5.c13552de.chunk.js.map