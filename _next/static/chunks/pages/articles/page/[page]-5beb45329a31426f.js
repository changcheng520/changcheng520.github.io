(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{4273:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/page/[page]",function(){return t(9141)}])},9141:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSG:function(){return j}});var n=t(5893),s=t(9008),l=t.n(s),r=t(1664),i=t.n(r),c=t(182),o=t(1119),d=t(7725),h=t(5846),u=t(9334),p=t(7294),m=t(8599),g=t(6603),x=t(3760),f=t(5084),j=!0;a.default=function(e){let{currentData:a,currentCountData:t,page:s,perPage:r}=e,[j,v]=(0,p.useState)(!1),_=t?t.data.total:0,N=a?a.data:[],[b,y]=(0,p.useState)(parseFloat(s));return(0,p.useEffect)(()=>{(0,f.d8)("listpage_url","/articles/page/".concat(s,".html"));let e=[],a=document.getElementsByTagName("img");for(let t=0;t<a.length;t++)e.push({url:a[t].src,type:"img"});(0,g.Z)(e,function(e){v(!0)}).then(function(){v(!1)}),y(parseFloat(s))},[s]),null===a?(0,n.jsx)(c.Z,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l(),{children:(0,n.jsx)("title",{children:"文章 - 没位道"})}),(0,n.jsxs)("main",{className:"main-wrapper",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(h.Z,{}),(0,n.jsx)("section",{className:"section section-padding",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-lg-8",children:[(0,n.jsx)(u.Z,{}),(0,n.jsx)("div",{className:"blog-container",children:N?N.map((e,a)=>(0,n.jsxs)("div",{className:"blog-grid",children:[(0,n.jsx)("h3",{className:"title",children:(0,n.jsx)(i(),{href:"/article/".concat(e.slug,".html"),dangerouslySetInnerHTML:{__html:e.title}})}),(0,n.jsx)("div",{className:"info",children:(0,n.jsxs)("ul",{className:"blog-meta list-unstyled",children:[(0,n.jsxs)("li",{children:[e.date_month_e," ",e.date_day,", ",e.date_year]}),(0,n.jsx)("li",{children:e.categories_output?e.categories_output.map((a,t)=>t<e.categories_output.length-1?(0,n.jsxs)("span",{children:[a.name,", "]},t):(0,n.jsx)("span",{children:a.name},t)):(0,n.jsx)(n.Fragment,{})})]})}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.excerpt}})]},a)):(0,n.jsx)(n.Fragment,{children:"Loading..."})})]}),(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("div",{className:"widget widget-categories",children:[(0,n.jsx)("h6",{className:"widget-title",children:"分类"}),(0,n.jsx)("ul",{className:"category-list list-unstyled",children:x?x.sorts.map((e,a)=>(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/articles/sort/".concat(e.slug,"/page/1.html"),title:e.name,children:(0,n.jsx)("strong",{dangerouslySetInnerHTML:{__html:e.name.replace(/\|/ig,"<i>|</i>")}})})},a)):(0,n.jsx)(n.Fragment,{})})]})})]}),(0,n.jsx)("div",{className:"text-center text-md-left full-width",children:(0,n.jsx)(m.Z,{apiUrl:"/articles/page/{page}.html",gotoPageClickEvent:function(e){y(e)},pageRangeDisplayed:3,activePage:b,totalPages:a?Math.ceil(_/r):1,previousLabel:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("i",{className:"fas fa-chevron-left"})}),nextLabel:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("i",{className:"fas fa-chevron-right"})}),firstLabel:!1,lastLabel:!1,align:"center",symmetry:!0,breakLabel:"..."})})]})}),(0,n.jsx)(d.Z,{})]})]})}},5846:function(e,a,t){"use strict";var n=t(5893);t(7294);var s=t(5649),l=t(9100);let r=e=>{let{fullbg:a=!1}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:a?"section call-to-action-area splash-call-to-action call-to-action-area--page call-to-action-area--fullbg":"section call-to-action-area splash-call-to-action call-to-action-area--page",children:(0,n.jsx)(l.Z,{})}),(0,n.jsx)("nav",{id:"onepagenav",className:a?"service-scroll-nav navbar app-primary-nav app-primary-nav--page app-primary-nav--fullbg":"service-scroll-nav navbar app-primary-nav app-primary-nav--page",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("ul",{className:"nav nav-pills",children:(0,n.jsx)(s.Z,{})})})})]})};a.Z=r},8599:function(e,a,t){"use strict";t.d(a,{Z:function(){return i}});var n=t(5893),s=t(1163),l=t(9912),r=t.n(l);function i(e){let a=(0,s.useRouter)(),{apiUrl:t,gotoPageClickEvent:l,pageRangeDisplayed:i,activePage:c,totalPages:o,previousLabel:d,nextLabel:h,firstLabel:u,lastLabel:p,breakLabel:m,align:g,onlyPrevNext:x,activeClass:f,previousClass:j,nextClass:v,firstClass:_,lastClass:N,disabledClass:b,symmetry:y}=e;function k(n){let{gotoPageClickEvent:s,activePage:l,totalPages:r}=e;switch(n){case"prev":s(l-1),a.push(t.replace("{page}",l-1));break;case"next":s(l+1),a.push(t.replace("{page}",l+1));break;case"first":default:s(1),a.push(t.replace("{page}","1"));break;case"last":s(r),a.push(t.replace("{page}",r))}}let w="";switch(g){case"left":w=" t-l";break;case"right":w=" t-r";break;case"center":w=" t-c"}let Z=f||r()["is-active"],S=j||"prev",F=v||"next",D=_||"first",C=N||"last",E=b||r()["is-disabled"],L=void 0!==x&&x,P=function(e,a,t){let n=!(arguments.length>3)||void 0===arguments[3]||arguments[3],s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=[];if(t+e-1<a)l=Array.from({length:e},(e,a)=>a+t);else{let r=a-t;r>=0&&(l=Array.from({length:r+1},(e,a)=>a+t))}if(n&&(l=(n=>{if(n.length<a){let s=e-n.length;for(let l=1;l<=s;l++)n.unshift(t-l)}return n})(l)),s&&a>t){let i=l.indexOf(t),c=e-1-i;for(let o=1;o<=c;o++)l.unshift(t-o-i)}return l}(i||3,o,c,!0,void 0!==y&&y),T=m||"",I=[],O=!1;""!==T&&(I=[o-1,o]),c+2>=o&&(I=[],T="");let R=I.map((e,s)=>{if(e>0&&e<=o&&!L&&-1===P.indexOf(e))return O=!0,(0,n.jsx)("li",{className:c===e?Z:"",children:(0,n.jsx)("a",{href:t.replace("{page}",e),onClick(n){n.preventDefault(),l(e),a.push(t.replace("{page}",e))},children:e})},s)});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{"aria-label":"Page navigation",className:r().pagination__container+w,children:(0,n.jsxs)("ul",{children:[u?(0,n.jsx)("li",{className:c>1?D:"".concat(D," ").concat(E),children:(0,n.jsx)("a",{href:t.replace("{page}","1"),onClick(e){e.preventDefault(),k("first")},children:u||null})}):"",d?(0,n.jsx)("li",{className:c>1?S:"".concat(S," ").concat(E),children:(0,n.jsx)("a",{href:t.replace("{page}",c-1),onClick(e){e.preventDefault(),k("prev")},children:d||null})}):"",P.map((e,s)=>{if(e>0&&e<=o&&!L)return(0,n.jsx)("li",{className:c===e?Z:"",children:(0,n.jsx)("a",{href:t.replace("{page}",e),onClick(n){n.preventDefault(),l(e),a.push(t.replace("{page}",e))},children:e})},s)}),""!==T&&O?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:T})})}):"",R,h?(0,n.jsx)("li",{className:c<o?F:"".concat(F," ").concat(E),children:(0,n.jsx)("a",{href:t.replace("{page}",c+1),onClick(e){e.preventDefault(),k("next")},children:h||null})}):"",p?(0,n.jsx)("li",{className:c<o?C:"".concat(C," ").concat(E),children:(0,n.jsx)("a",{href:t.replace("{page}",o),onClick(e){e.preventDefault(),k("last")},children:p||null})}):""]})})})}},182:function(e,a,t){"use strict";var n=t(5893),s=t(9008),l=t.n(s),r=t(1119),i=t(7725),c=t(5846);let o=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l(),{children:(0,n.jsx)("title",{children:"数据查询出错 - 没位道"})}),(0,n.jsxs)("main",{className:"main-wrapper",children:[(0,n.jsx)(r.Z,{}),(0,n.jsx)(c.Z,{}),(0,n.jsx)("section",{className:"section section-padding detail-content-show",children:(0,n.jsx)("div",{className:"container text-center",children:(0,n.jsx)("h1",{children:"查询出错"})})}),(0,n.jsx)(i.Z,{})]})]});a.Z=o},9334:function(e,a,t){"use strict";var n=t(5893),s=t(1163),l=t(7294);let r=e=>{let{searchPage:a=!1,dValue:t=""}=e,r=(0,s.useRouter)(),i=(0,l.useRef)(null);function c(e){e.preventDefault();let a=i.current,t=a.value.trim().split(/\s+/);r.push("/articles/search/index.html?page=1&s="+t.join("+"))}return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"form-outer form-custom form-custom--search",children:(0,n.jsx)("div",{className:"searchform-container",children:(0,n.jsxs)("form",{id:"app-search-box",onSubmit:c,children:[(0,n.jsx)("input",{onFocus:function(e){e.target.setSelectionRange(0,e.target.value.length)},ref:i,id:"search",name:"search",type:"text",autoComplete:"off",defaultValue:t}),(0,n.jsx)("a",{href:"#",onClick:c,children:(0,n.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})})]})})})})};a.Z=r},6603:function(e,a,t){"use strict";function n(e,a){let t=[];void 0===a&&(a=function(e){console.log(e)});for(let n=0;n<e.length;n++)"img"==e[n].type?t.push(new Promise(function(a,t){let s=document.createElement("img");s.src=e[n].url,s.onload=function(e){let t=void 0===e.path?e.target.currentSrc:e.path[0].currentSrc;return a({height:this.height,width:this.width,source:t})}}).then(a)):t.push(new Promise(function(a,t){let s=document.createElement("video");s.addEventListener("loadedmetadata",function(e){let t=this.videoHeight,n=this.videoWidth,s=void 0===e.path?e.target.currentSrc:e.path[0].currentSrc;return a({height:t,width:n,source:s})},!1),s.src=e[n].url}).then(a));return Promise.all(t)}t.d(a,{Z:function(){return n}})},9912:function(e){e.exports={pagination__container:"styles_pagination__container__nSXVo","is-active":"styles_is-active__pXuJD","is-disabled":"styles_is-disabled__TerTB"}},3760:function(e){"use strict";e.exports=JSON.parse('{"sorts":[{"ID":25,"depth":0,"name":"生活琐碎","slug":"%e7%94%9f%e6%b4%bb%e7%90%90%e7%a2%8e","parent":0,"count":31,"taxonomy":"category","desc":"","permalink":""},{"ID":32,"depth":0,"name":"设计洞察","slug":"%e8%ae%be%e8%ae%a1%e6%b4%9e%e5%af%9f","parent":0,"count":42,"taxonomy":"category","desc":"","permalink":""},{"ID":87,"depth":0,"name":"开发趣味","slug":"%e5%bc%80%e5%8f%91%e8%b6%a3%e5%91%b3","parent":0,"count":14,"taxonomy":"category","desc":"","permalink":""}]}')}},function(e){e.O(0,[424,355,774,888,179],function(){return e(e.s=4273)}),_N_E=e.O()}]);