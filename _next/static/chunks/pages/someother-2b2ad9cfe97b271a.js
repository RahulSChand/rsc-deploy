(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{5479:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/someother",function(){return i(1033)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(6495).Z,n=i(2648).Z,o=i(1598).Z,a=i(7273).Z,s=o(i(7294)),l=n(i(3121)),c=i(2675),d=i(139),u=i(8730);i(7238);var f=n(i(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,n,o,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let _=s.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:n,widthInt:o,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:g,placeholder:m,loading:h,srcString:_,config:v,unoptimized:w,loader:b,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:E,onLoad:C,onError:S}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},z,{loading:h,width:o,height:n,decoding:"async","data-nimg":g?"fill":"1",className:c,style:r({},d,u)},i,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&p(e,_,m,y,x,j,w))},[_,m,y,x,j,S,w,t]),onLoad:e=>{let t=e.currentTarget;p(t,_,m,y,x,j,w)},onError:e=>{E(!0),"blur"===m&&j(!0),S&&S(e)}})))}),v=s.forwardRef((e,t)=>{let i,n;var o,{src:p,sizes:v,unoptimized:w=!1,priority:b=!1,loading:y,className:x,quality:j,width:E,height:C,fill:S,style:z,onLoad:N,onLoadingComplete:k,placeholder:R="empty",blurDataURL:O,layout:L,objectFit:P,objectPosition:I,lazyBoundary:H,lazyRoot:M}=e,A=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=s.useContext(u.ImageConfigContext),B=s.useMemo(()=>{let e=g||F||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[F]),D=A,T=D.loader||f.default;delete D.loader;let G="__next_img_default"in T;if(G){if("custom"===B.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=T;T=t=>{let{config:i}=t,r=a(t,["config"]);return e(r)}}if(L){"fill"===L&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(z=r({},z,e));let t={responsive:"100vw",fill:"100vw"}[L];t&&!v&&(v=t)}let W="",Z=h(E),q=h(C);if("object"==typeof(o=p)&&(m(o)||void 0!==o.src)){let e=m(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,n=e.blurHeight,O=O||e.blurDataURL,W=e.src,!S){if(Z||q){if(Z&&!q){let t=Z/e.width;q=Math.round(e.height*t)}else if(!Z&&q){let t=q/e.height;Z=Math.round(e.width*t)}}else Z=e.width,q=e.height}}let X=!b&&("lazy"===y||void 0===y);((p="string"==typeof p?p:W).startsWith("data:")||p.startsWith("blob:"))&&(w=!0,X=!1),B.unoptimized&&(w=!0),G&&p.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(w=!0);let[U,V]=s.useState(!1),[J,Q]=s.useState(!1),Y=h(j),$=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:I}:{},J?{}:{color:"transparent"},z),K="blur"===R&&O&&!U?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:q,blurWidth:i,blurHeight:n,blurDataURL:O,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:a,loader:s}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,r)=>"".concat(s({config:t,src:i,quality:o,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:s({config:t,src:i,quality:o,width:l[d]})}}({config:B,src:p,unoptimized:w,width:Z,quality:Y,sizes:v,loader:T}),et=p,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:D.crossOrigin},er=s.useRef(N);s.useEffect(()=>{er.current=N},[N]);let en=s.useRef(k);s.useEffect(()=>{en.current=k},[k]);let eo=r({isLazy:X,imgAttributes:ee,heightInt:q,widthInt:Z,qualityInt:Y,className:x,imgStyle:$,blurStyle:K,loading:y,config:B,fill:S,unoptimized:w,placeholder:R,loader:T,srcString:et,onLoadRef:er,onLoadingCompleteRef:en,setBlurComplete:V,setShowAltText:Q},D);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},eo,{ref:t})),b?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:a}=e,s=r||t,l=n||i,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},1033:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var r=i(5893),n=i(9008),o=i.n(n),a=i(5675),s=i.n(a),l=i(7953),c=i.n(l);function d(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(s(),{className:c().borderCircle,src:"/images/dimas.jpg",alt:"Next.js Logo",width:200,height:200,priority:!0})}),(0,r.jsx)("div",{children:(0,r.jsx)("h1",{className:"text-center font-mono",children:"Rahul Chand"})})]}),(0,r.jsxs)("h1",{className:"text-red-600",children:["Link to ",(0,r.jsx)("a",{className:"underline",href:"/blogs/first-post",children:" projects "})]})]})]})}i(1664)},7953:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",borderCircle:"Home_borderCircle__9eNH6",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9"}},5675:function(e,t,i){e.exports=i(9749)}},function(e){e.O(0,[996,774,888,179],function(){return e(e.s=5479)}),_N_E=e.O()}]);