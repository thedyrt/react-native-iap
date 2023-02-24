"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8328],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3323:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:11},o="purchaseUpdatedListener",i={unversionedId:"api-reference/methods/listeners/purchase-updated-listener",id:"api-reference/methods/listeners/purchase-updated-listener",title:"purchaseUpdatedListener",description:"Register a callback that gets called when the store has any updates to purchases that have not yet been finished, consumed or acknowledged. Returns a React Native EmitterSubscription on which you can call .remove() to stop receiving updates. Register you listener as soon as possible and react to updates at all times.",source:"@site/docs/api-reference/methods/listeners/purchase-updated-listener.md",sourceDirName:"api-reference/methods/listeners",slug:"/api-reference/methods/listeners/purchase-updated-listener",permalink:"/docs/api-reference/methods/listeners/purchase-updated-listener",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api-reference/methods/listeners/purchase-updated-listener.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"purchaseErrorListener",permalink:"/docs/api-reference/methods/listeners/purchase-error-listener"},next:{title:"promotedProductListener",permalink:"/docs/api-reference/methods/listeners/promoted-product-listener"}},c={},p=[{value:"Signature",id:"signature",level:2},{value:"Usage",id:"usage",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"purchaseupdatedlistener"},(0,a.kt)("inlineCode",{parentName:"h1"},"purchaseUpdatedListener")),(0,a.kt)("p",null,"Register a callback that gets called when the store has any updates to purchases that have not yet been finished, consumed or acknowledged. Returns a React Native ",(0,a.kt)("inlineCode",{parentName:"p"},"EmitterSubscription")," on which you can call ",(0,a.kt)("inlineCode",{parentName:"p"},".remove()")," to stop receiving updates. Register you listener as soon as possible and react to updates at all times."),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"purchaseUpdatedListener((purchase: Purchase) => {});\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, {useEffect} from 'react';\nimport {View} from 'react-native';\nimport {purchaseUpdatedListener} from 'react-native-iap';\n\nconst App = () => {\n  useEffect(() => {\n    const subscription = purchaseUpdatedListener((purchase: Purchase) => {\n      console.log(purchase);\n    });\n\n    return () => {\n      subscription.remove();\n    };\n  }, []);\n\n  return <View />;\n};\n")))}u.isMDXComponent=!0}}]);