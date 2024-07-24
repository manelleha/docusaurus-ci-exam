"use strict";(self.webpackChunksite_docu=self.webpackChunksite_docu||[]).push([[3249],{3858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(6540);var a=n(4164),i=n(1213),r=n(7559),o=n(7131),l=n(6535),s=n(4651),c=n(1312),d=n(9022),u=n(4848);function m(e){var t=e.nextItem,n=e.prevItem;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,Object.assign({},n,{subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})})),t&&(0,u.jsx)(d.A,Object.assign({},t,{subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0}))]})}function g(){var e,t=(0,o.e)(),n=t.assets,a=t.metadata,r=a.title,l=a.description,s=a.date,c=a.tags,d=a.authors,m=a.frontMatter,g=m.keywords,f=null!=(e=n.image)?e:m.image;return(0,u.jsxs)(i.be,{title:r,description:l,keywords:g,image:f,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),d.some((function(e){return e.url}))&&(0,u.jsx)("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}var f=n(5260),v=n(6676);function h(){var e=(0,v.J)();return(0,u.jsx)(f.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=n(7763),b=n(996);function x(e){var t=e.sidebar,n=e.children,a=(0,o.e)(),i=a.metadata,r=a.toc,c=i.nextItem,d=i.prevItem,g=i.frontMatter,f=i.unlisted,v=g.hide_table_of_contents,h=g.toc_min_heading_level,x=g.toc_max_heading_level;return(0,u.jsxs)(l.A,{sidebar:t,toc:!v&&r.length>0?(0,u.jsx)(p.A,{toc:r,minHeadingLevel:h,maxHeadingLevel:x}):void 0,children:[f&&(0,u.jsx)(b.A,{}),(0,u.jsx)(s.A,{children:n}),(c||d)&&(0,u.jsx)(m,{nextItem:c,prevItem:d})]})}function j(e){var t=e.content;return(0,u.jsx)(o.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(h,{}),(0,u.jsx)(x,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},7763:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(8587),i=(n(6540),n(4164)),r=n(5195);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(4848),s=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var t=e.className,n=(0,a.A)(e,s);return(0,l.jsx)("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(r.A,Object.assign({},n,{linkClassName:c,linkActiveClassName:d}))})}},5195:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(8587),i=n(6540),r=n(6342),o=["parentIndex"];function l(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var i=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,a.A)(e,o);n>=0?t[n].children.push(r):i.push(r)})),i}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function c(e){var t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function d(e,t){var n,a,i=t.anchorTopOffset,r=e.find((function(e){return c(e).top>=i}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,i.useRef)(0),t=(0,r.p)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){var t=(0,i.useRef)(void 0),n=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,r=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],i=t;i<=n;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=d(l,{anchorTopOffset:n.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var g=n(8774),f=n(4848);function v(e){var t=e.toc,n=e.className,a=e.linkClassName,i=e.isChild;return t.length?(0,f.jsx)("ul",{className:i?void 0:n,children:t.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)(g.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(v,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)}))}):null}const h=i.memo(v);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function b(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,v=e.minHeadingLevel,b=e.maxHeadingLevel,x=(0,a.A)(e,p),j=(0,r.p)(),A=null!=v?v:j.tableOfContents.minHeadingLevel,L=null!=b?b:j.tableOfContents.maxHeadingLevel,y=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return s({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:A,maxHeadingLevel:L});return m((0,i.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:A,maxHeadingLevel:L}}),[d,g,A,L])),(0,f.jsx)(h,Object.assign({toc:y,className:o,linkClassName:d},x))}},996:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var a=n(4164),i=n(1312),r=n(5260),o=n(4848);function l(){return(0,o.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,o.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(r.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),u=n(7293);function m(e){var t=e.className;return(0,o.jsx)(u.A,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,o.jsx)(s,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,Object.assign({},e))]})}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var a=n(6025),i=n(4586),r=n(6803);var o=n(7131),l=function(e){return new Date(e).toISOString()};function s(e){var t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:(a={imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+n},i=a.imageUrl,r=a.caption,{"@type":"ImageObject","@id":i,url:i,contentUrl:i,caption:r})}:{};var a,i,r}function d(e){var t=(0,i.A)().siteConfig,n=(0,a.hH)().withBaseUrl,r=e.metadata,o=r.blogDescription,d=r.blogTitle,u=r.permalink,m=""+t.url+u;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:d,description:o,blogPost:e.items.map((function(e){return function(e,t,n){var a,i,r=e.assets,o=e.frontMatter,d=e.metadata,u=d.date,m=d.title,g=d.description,f=d.lastUpdatedAt,v=null!=(a=r.image)?a:o.image,h=null!=(i=o.keywords)?i:[],p=""+t.url+d.permalink,b=f?l(f):void 0;return Object.assign({"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:m,name:m,description:g,datePublished:u},b?{dateModified:b}:{},s(d.authors),c(v,n,m),h?{keywords:h}:{})}(e.content,t,n)}))}}function u(){var e,t,n=function(){var e,t=(0,r.A)(),n=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!n)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return n}(),d=(0,o.e)(),u=d.assets,m=d.metadata,g=(0,i.A)().siteConfig,f=(0,a.hH)().withBaseUrl,v=m.date,h=m.title,p=m.description,b=m.frontMatter,x=m.lastUpdatedAt,j=null!=(e=u.image)?e:b.image,A=null!=(t=b.keywords)?t:[],L=x?l(x):void 0,y=""+g.url+m.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":y,mainEntityOfPage:y,url:y,headline:h,name:h,description:p,datePublished:v},L?{dateModified:L}:{},s(m.authors),c(j,f,h),A?{keywords:A}:{},{isPartOf:{"@type":"Blog","@id":""+g.url+n.blogBasePath,name:n.blogTitle}})}function m(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}}}]);