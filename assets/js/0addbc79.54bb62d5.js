"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60754],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(a,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var s=2;s<i;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>l});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={sidebar_label:"CDPSession.connection"},p="CDPSession.connection() method",a={unversionedId:"api/puppeteer.cdpsession.connection",id:"version-21.1.1/api/puppeteer.cdpsession.connection",title:"CDPSession.connection() method",description:"Signature:",source:"@site/versioned_docs/version-21.1.1/api/puppeteer.cdpsession.connection.md",sourceDirName:"api",slug:"/api/puppeteer.cdpsession.connection",permalink:"/api/puppeteer.cdpsession.connection",draft:!1,tags:[],version:"21.1.1",frontMatter:{sidebar_label:"CDPSession.connection"},sidebar:"api",previous:{title:"CDPSession",permalink:"/api/puppeteer.cdpsession"},next:{title:"CDPSession.detach",permalink:"/api/puppeteer.cdpsession.detach"}},s={},l=[{value:"Signature:",id:"signature",level:4}],u={toc:l};function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"cdpsessionconnection-method"}),"CDPSession.connection() method"),(0,r.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class CDPSession {\n  connection(): Connection | undefined;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.connection"}),"Connection")," ","|"," undefined"))}f.isMDXComponent=!0}}]);