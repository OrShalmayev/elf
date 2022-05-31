"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[367],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),h=o,m=f["".concat(u,".").concat(h)]||f[h]||c[h]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8026:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},u="The Repository Pattern",p={unversionedId:"repository",id:"repository",isDocsHomePage:!1,title:"The Repository Pattern",description:"One way to use Elf is following the Repository Design Pattern. Implementing the Repository pattern is relatively simple. It's a file that encapsulates the store queries and mutations:",source:"@site/docs/repository.mdx",sourceDirName:".",slug:"/repository",permalink:"/elf/docs/repository",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/repository.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"The Store",permalink:"/elf/docs/store"},next:{title:"The Facade Pattern",permalink:"/elf/docs/facade"}},l=[{value:"Creating a Repository with the CLI",id:"creating-a-repository-with-the-cli",children:[],level:3}],c={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-repository-pattern"},"The Repository Pattern"),(0,a.kt)("p",null,"One way to use Elf is following the Repository Design Pattern. Implementing the Repository pattern is relatively simple. It's a file that encapsulates the store queries and mutations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="auth.repository.ts"',title:'"auth.repository.ts"'},"import { createStore, withProps, select } from '@ngneat/elf';\n\ninterface AuthProps {\n  user: { id: string } | null;\n}\n\nconst authStore = createStore(\n  { name: 'auth' },\n  withProps<AuthProps>({ user: null })\n);\n\nexport const user$ = authStore.pipe(select((state) => state.user));\n\nexport function updateUser(user: AuthProps['user']) {\n  authStore.update((state) => ({\n    ...state,\n    user,\n  }));\n}\n")),(0,a.kt)("p",null,"The Repository pattern provides 2 main benefits:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using the pattern, you can replace your data store without changing your business code."),(0,a.kt)("li",{parentName:"ol"},"It encourages you to implement all store operations in one place, making your code more reusable and easy to find.")),(0,a.kt)("p",null,"You can also use the object-oriented programming (OOP) approach:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="auth.repository.ts"',title:'"auth.repository.ts"'},"import { createStore, withProps, select } from '@ngneat/elf';\n\ninterface AuthProps {\n  user: { id: string } | null;\n}\n\nconst authStore = createStore(\n  { name: 'auth' },\n  withProps<AuthProps>({ user: null })\n);\n\nexport class AuthRepository {\n  user$ = authStore.pipe(select((state) => state.user));\n\n  updateUser(user: AuthProps['user']) {\n    authStore.update((state) => ({\n      ...state,\n      user,\n    }));\n  }\n}\n")),(0,a.kt)("h3",{id:"creating-a-repository-with-the-cli"},"Creating a Repository with the CLI"),(0,a.kt)("p",null,"Elf comes with a CLI that'll generate a repository with all the features you need. Check out the ",(0,a.kt)("a",{parentName:"p",href:"cli#repo"},"docs")," for more information."))}f.isMDXComponent=!0}}]);