(self.webpackChunkIOTA_Identity_X_Team=self.webpackChunkIOTA_Identity_X_Team||[]).push([[179],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,a({},t,{components:n}))}},d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4796:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={title:"IOTA Identity v0.2 Release",slug:"release-v0.2",author:"X-Bot",author_title:"X-Team Core Team",author_url:"https://github.com/iota-community",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/0/07/Grey_squirrel_(Sciurus_carolinensis)_02.jpg",tags:["x-teams","identity"]},l={permalink:"/blog/release-v0.2",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-02-19.md",source:"@site/blog/2021-02-19.md",title:"IOTA Identity v0.2 Release",description:"New version available!",date:"2021-02-19T00:00:00.000Z",formattedDate:"February 19, 2021",tags:[{label:"x-teams",permalink:"/blog/tags/x-teams"},{label:"identity",permalink:"/blog/tags/identity"}],readingTime:1.62,truncated:!1,prevItem:{title:"Identity X-Team - Video Day 01",permalink:"/blog/videoday-01"},nextItem:{title:"Hello World! \ud83d\udc4b",permalink:"/blog/hello-world"}},s=[{value:"Scalability",id:"scalability",children:[]},{value:"Revocation",id:"revocation",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,i.default)(e,["components"]);return(0,a.mdx)("wrapper",(0,r.default)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"New version available!"),(0,a.mdx)("p",null,"We have released IOTA Identity v0.2: ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/tree/v0.2.0"},"https://github.com/iotaledger/identity.rs/tree/v0.2.0")),(0,a.mdx)("p",null,"This release has breaking changes with no backward compatibility."),(0,a.mdx)("p",null,"The following is an incomplete changelog for the major changes:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Relocated NPM hosted WASM bindings to @iota/identity-wasm"),(0,a.mdx)("li",{parentName:"ul"},"Increased scalability of IOTA Identity"),(0,a.mdx)("li",{parentName:"ul"},"Allow publishing of collections of public keys"),(0,a.mdx)("li",{parentName:"ul"},"Added 100% GDPR compliant VC Revocation"),(0,a.mdx)("li",{parentName:"ul"},"Renamed IOTA Identity crate objects to drop the IOTA prefix"),(0,a.mdx)("li",{parentName:"ul"},"Improved WASM interface to be easier to use")),(0,a.mdx)("p",null,"This update went beyond the DID and Verifiable Credentials (VCs) standards and introduced IOTA Identity unique features"),(0,a.mdx)("h3",{id:"scalability"},"Scalability"),(0,a.mdx)("p",null,'We have introduced Authentication DID Messages that form an "Auth Chain" and Differentiation DID Messages that form "Diff Chains". Auth Messages contain full DID Documents as before and have no restrictions. The Diff Messages are published to another Address and contain only the differences between 2 DID Documents. They are not restricted in rotating the signing key. A set of Diff Messages can be combined into a single Auth message, removing the need to query them in the future allowing thousands of DID updates without significantly increasing verification time.'),(0,a.mdx)("h3",{id:"revocation"},"Revocation"),(0,a.mdx)("p",null,"Besides acting as a decentralized PKI, IOTA is utilized to act as a revocation registry for VCs. Other DID implementations post hashes to the DLT of the revoked VCs. This may not be GDPR compliant. IOTA Identity revokes VCs by deactivating the public key from the DID Document. This requires every public key to be used only once. To prevent DID Documents from having to list thousands of public keys, they can be published via a Merkle Tree. When a key is deactivated, the DID Document will be updated with a bit-flip to indicate which index of the Merkle tree is deactivated. VCs now have a signature that also contains the Issuer public key used for signing and the required hashes for Proof-of-Inclusion in the Issuer Merkle tree."),(0,a.mdx)("hr",null),(0,a.mdx)("p",null,"by Jelle Millenaar from Discord #tech-announcements"))}u.isMDXComponent=!0}}]);