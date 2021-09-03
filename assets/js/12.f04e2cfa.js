/*! For license information please see 12.f04e2cfa.js.LICENSE.txt */
(self.webpackChunkIOTA_Identity_X_Team=self.webpackChunkIOTA_Identity_X_Team||[]).push([[12],{2286:function(e,t,r){"use strict";var n=r(862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.ProvideLinksCollector=t.useLinksCollector=t.createStatefulLinksCollector=void 0;var o=n(r(7294));t.createStatefulLinksCollector=function(){var e=new Set;return{collectLink:function(t){e.add(t)},getCollectedLinks:function(){return[].concat(e)}}};var u=(0,o.createContext)({collectLink:function(){}});t.useLinksCollector=function(){return(0,o.useContext)(u)};t.ProvideLinksCollector=function(e){var t=e.children,r=e.linksCollector;return o.default.createElement(u.Provider,{value:r},t)}},3649:function(e,t,r){"use strict";var n=r(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.interpolate=i,t.default=function(e){var t=e.children,r=e.values;return i(t,r)};var o=n(r(7294)),u=/{\w+}/g,a="{}";function i(e,t){var r=[],n=e.replace(u,(function(e){var n=e.substr(1,e.length-2),u=null==t?void 0:t[n];if(void 0!==u){var i=o.default.isValidElement(u)?u:String(u);return r.push(i),a}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?n.split(a).reduce((function(e,t,n){var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):n.split(a).reduce((function(e,t,n){return[].concat(e,[o.default.createElement(o.default.Fragment,{key:n},t,r[n])])}),[])}},3692:function(e,t,r){"use strict";var n=r(862).default,o=r(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(r(9756)),a=n(r(7294)),i=r(3727),s=o(r(3919)),c=o(r(412)),l=r(2286),f=r(4996);var d=function(e){var t,r,n,o=e.isNavLink,d=e.to,v=e.href,p=e.activeClassName,g=e.isActive,m=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,b=(0,u.default)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),P=(0,f.useBaseUrlUtils)().withBaseUrl,_=(0,l.useLinksCollector)(),w=d||v,D=(0,s.default)(w),O=null==w?void 0:w.replace("pathname://",""),j=void 0!==O?(r=O,y&&function(e){return e.startsWith("/")}(r)?P(r):r):void 0,A=(0,a.useRef)(!1),S=o?i.NavLink:i.Link,C=c.default.canUseIntersectionObserver;(0,a.useEffect)((function(){return!C&&D&&null!=j&&window.docusaurus.prefetch(j),function(){C&&n&&n.disconnect()}}),[j,C,D]);var E=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,V=!j||!D||E;return j&&D&&!E&&!m&&_.collectLink(j),V?a.default.createElement("a",Object.assign({href:j},w&&!D&&{target:"_blank",rel:"noopener noreferrer"},b)):a.default.createElement(S,Object.assign({},b,{onMouseEnter:function(){A.current||null==j||(window.docusaurus.preload(j),A.current=!0)},innerRef:function(e){var t,r;C&&e&&D&&(t=e,r=function(){null!=j&&window.docusaurus.prefetch(j)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),r())}))}))).observe(t))},to:j||""},o&&{isActive:g,activeClassName:p}))};t.default=d},9052:function(e,t,r){"use strict";var n=r(862).default,o=r(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.translate=function(e,t){var r,n=e.message,o=e.id,u=null!==(r=s({message:n,id:o}))&&void 0!==r?r:n;return(0,a.interpolate)(u,t)},t.default=function(e){var t,r=e.children,n=e.id,o=e.values,i=null!==(t=s({message:r,id:n}))&&void 0!==t?t:r;return u.default.createElement(a.default,{values:o},i)};var u=o(r(7294)),a=n(r(3649)),i=o(r(4644));function s(e){var t,r=e.id,n=e.message;return null!==(t=i.default[null!=r?r:n])&&void 0!==t?t:n}},9935:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_PLUGIN_ID=void 0;t.DEFAULT_PLUGIN_ID="default"},3919:function(e,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.hasProtocol=r,t.default=function(e){return void 0!==e&&!r(e)}},4996:function(e,t,r){"use strict";var n=r(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useBaseUrlUtils=a,t.default=function(e,t){void 0===t&&(t={});return(0,a().withBaseUrl)(e,t)};var o=n(r(2263)),u=r(3919);function a(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,i=void 0!==a&&a,s=o.absolute,c=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,u.hasProtocol)(r))return r;if(i)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+l:l}(n,r,e,t)}}}},8084:function(e,t,r){"use strict";var n=r(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=u,t.useAllPluginInstancesData=a,t.usePluginData=function(e,t){void 0===t&&(t="default");var r=a(e)[t];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return r};var o=n(r(2263));function u(){var e=(0,o.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=u()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}},8408:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var n=r(8143);t.getActivePlugin=function(e,t,r){void 0===r&&(r={});var o=Object.entries(e).find((function(e){e[0];var r=e[1];return!!n.matchPath(t,{path:r.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&r.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return u};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,r){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!n.matchPath(r,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,r){var o,u,a=t.getActiveVersion(e,r),i=null==a?void 0:a.docs.find((function(e){return!!n.matchPath(r,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:i,alternateDocVersions:i?(o=i.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(u[e.name]=t)}))})),u):{}}};t.getDocVersionSuggestions=function(e,r){var n=t.getLatestVersion(e),o=t.getActiveDocContext(e,r),u=o.activeVersion!==n;return{latestDocSuggestion:u?null==o?void 0:o.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:u?n:void 0}}},6730:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var n=r(8143),o=r(8084),u=r(8408);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")};t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var r=t.useAllDocsData(),o=n.useLocation().pathname;return u.getActivePlugin(r,o,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var r=t.useActivePlugin(e),o=n.useLocation().pathname;if(r)return{activePlugin:r,activeVersion:u.getActiveVersion(r.pluginData,o)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var r=t.useDocsData(e);return u.getLatestVersion(r)};t.useActiveVersion=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getActiveVersion(r,o)};t.useActiveDocContext=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getActiveDocContext(r,o)};t.useDocVersionSuggestions=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getDocVersionSuggestions(r,o)}},1217:function(e,t,r){"use strict";var n=r(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.title,r=e.description,n=e.keywords,s=e.image,c=(0,a.useThemeConfig)().image,l=(0,a.useTitleFormatter)(t),f=(0,i.default)(s||c,{absolute:!0});return o.default.createElement(u.default,null,t&&o.default.createElement("title",null,l),t&&o.default.createElement("meta",{property:"og:title",content:l}),r&&o.default.createElement("meta",{name:"description",content:r}),r&&o.default.createElement("meta",{property:"og:description",content:r}),n&&o.default.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),f&&o.default.createElement("meta",{property:"og:image",content:f}),f&&o.default.createElement("meta",{name:"twitter:image",content:f}),f&&o.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))};var o=n(r(7294)),u=n(r(5742)),a=r(6700),i=n(r(4996))},907:function(e,t,r){"use strict";try{e.exports=r(6730)}catch(o){var n={};e.exports={useAllDocsData:function(){return n},useActivePluginAndVersion:function(){}}}},6700:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=t.DocsPreferredVersionContextProvider=t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=t.usePluralForm=t.useTitleFormatter=t.isSamePath=t.isDocsPluginEnabled=t.DEFAULT_SEARCH_TAG=t.docVersionSearchTag=t.parseCodeBlockTitle=t.useAlternatePageUtils=t.listStorageKeys=t.createStorageSlot=t.useThemeConfig=void 0;var n=r(6668);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return n.useThemeConfig}});var o=r(12);Object.defineProperty(t,"createStorageSlot",{enumerable:!0,get:function(){return o.createStorageSlot}}),Object.defineProperty(t,"listStorageKeys",{enumerable:!0,get:function(){return o.listStorageKeys}});var u=r(4711);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return u.useAlternatePageUtils}});var a=r(7016);Object.defineProperty(t,"parseCodeBlockTitle",{enumerable:!0,get:function(){return a.parseCodeBlockTitle}});var i=r(3320);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return i.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return i.DEFAULT_SEARCH_TAG}});var s=r(3438);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return s.isDocsPluginEnabled}});var c=r(9016);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return c.isSamePath}});var l=r(2128);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return l.useTitleFormatter}});var f=r(8824);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return f.usePluralForm}});var d=r(7674);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return d.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return d.useDocsPreferredVersionByPluginId}});var v=r(8427);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return v.DocsPreferredVersionContextProvider}});var p=r(5281);Object.defineProperty(t,"ThemeClassNames",{enumerable:!0,get:function(){return p.ThemeClassNames}})},5281:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=void 0,t.ThemeClassNames={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}},7016:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseCodeBlockTitle=void 0;var r=/title=(["'])(.*?)\1/;t.parseCodeBlockTitle=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(r))||void 0===t?void 0:t[2])&&void 0!==n?n:""}},8427:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var n=r(655),o=n.__importStar(r(7294)),u=r(6668),a=r(3438),i=r(907),s=n.__importDefault(r(3481));function c(e){var t=e.pluginIds,r=e.versionPersistence,n=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=s.default.read(e,r);return n[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(s.default.clear(e,r),{preferredVersionName:null})}(e)})),o}function l(){var e=i.useAllDocsData(),t=u.useThemeConfig().docs.versionPersistence,r=o.useMemo((function(){return Object.keys(e)}),[e]),n=o.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(r)})),a=n[0],l=n[1];return o.useEffect((function(){l(c({allDocsData:e,versionPersistence:t,pluginIds:r}))}),[e,t,r]),[a,o.useMemo((function(){return{savePreferredVersion:function(e,r){s.default.save(e,t,r),l((function(t){var n;return Object.assign({},t,((n={})[e]={preferredVersionName:r},n))}))}}}),[l])]}var f=o.createContext(null);function d(e){var t=e.children,r=l();return o.default.createElement(f.Provider,{value:r},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return a.isDocsPluginEnabled?o.default.createElement(d,null,t):o.default.createElement(o.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=o.useContext(f);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},3481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),o=function(e){return"docs-preferred-version-"+e},u={save:function(e,t,r){n.createStorageSlot(o(e),{persistence:t}).set(r)},read:function(e,t){return n.createStorageSlot(o(e),{persistence:t}).get()},clear:function(e,t){n.createStorageSlot(o(e),{persistence:t}).del()}};t.default=u},7674:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var n=r(7294),o=r(8427),u=r(907),a=r(9935);t.useDocsPreferredVersion=function(e){void 0===e&&(e=a.DEFAULT_PLUGIN_ID);var t=u.useDocsData(e),r=o.useDocsPreferredVersionContext(),i=r[0],s=r[1],c=i[e].preferredVersionName;return{preferredVersion:c?t.versions.find((function(e){return e.name===c})):null,savePreferredVersionName:n.useCallback((function(t){s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){var e=u.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],r=Object.keys(e),n={};return r.forEach((function(r){n[r]=function(r){var n=e[r],o=t[r].preferredVersionName;return o?n.versions.find((function(e){return e.name===o})):null}(r)})),n}},3438:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var n=r(907);t.isDocsPluginEnabled=!!n.useAllDocsData},2128:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var n=r(655).__importDefault(r(2263));t.useTitleFormatter=function(e){var t=n.default().siteConfig,r=void 0===t?{}:t,o=r.title,u=r.titleDelimiter,a=void 0===u?"|":u;return e&&e.trim().length?e.trim()+" "+a+" "+o:o}},9016:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0;t.isSamePath=function(e,t){var r=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return r(e)===r(t)}},3320:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},12:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listStorageKeys=t.createStorageSlot=void 0;var r="localStorage";function n(e){if(void 0===e&&(e=r),"undefined"==typeof window)throw new Error("Browser storage is not available on NodeJS / Docusaurus SSR process");if("none"===e)return null;try{return window[e]}catch(n){return t=n,o||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an Iframe, in an Incognito browser session, or using too strict browser privacy settings.",t),o=!0),null}var t}var o=!1;var u={get:function(){return null},set:function(){},del:function(){}};t.createStorageSlot=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error("Illegal storage API usage for storage key="+e+".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.")}return{get:t,set:t,del:t}}(e);var r=n(null==t?void 0:t.persistence);return null===r?u:{get:function(){return r.getItem(e)},set:function(t){return r.setItem(e,t)},del:function(){return r.removeItem(e)}}},t.listStorageKeys=function(e){void 0===e&&(e=r);var t=n(e);if(!t)return[];for(var o=[],u=0;u<t.length;u+=1){var a=t.key(u);null!==a&&o.push(a)}return o}},4711:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;var n=r(655).__importDefault(r(2263)),o=r(8143);t.useAlternatePageUtils=function(){var e=n.default(),t=e.siteConfig,r=t.baseUrl,u=t.url,a=e.i18n,i=a.defaultLocale,s=a.currentLocale,c=o.useLocation().pathname,l=s===i?r:r.replace("/"+s+"/","/"),f=c.replace(r,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?u:"")+function(e){return e===i?""+l:""+l+e+"/"}(t)+f}}}},8824:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;var n=r(655),o=r(7294),u=n.__importDefault(r(2263)),a=["zero","one","two","few","many","other"];function i(e){return a.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=u.default().i18n.currentLocale;return o.useMemo((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),s;try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:i(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),s}var t,r}),[e])}t.usePluralForm=function(){var e=c();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+n.length+" plural forms: "+e+" ");var o=r.select(t),u=r.pluralForms.indexOf(o);return n[Math.min(u,n.length-1)]}(r,t,e)}}}},6668:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var n=r(655).__importDefault(r(2263));t.useThemeConfig=function(){return n.default().siteConfig.themeConfig}},6010:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.r(t),r.d(t,{default:function(){return o}})},655:function(e,t,r){"use strict";r.r(t),r.d(t,{__extends:function(){return o},__assign:function(){return u},__rest:function(){return a},__decorate:function(){return i},__param:function(){return s},__metadata:function(){return c},__awaiter:function(){return l},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return v},__values:function(){return p},__read:function(){return g},__spread:function(){return m},__spreadArrays:function(){return h},__spreadArray:function(){return y},__await:function(){return b},__asyncGenerator:function(){return P},__asyncDelegator:function(){return _},__asyncValues:function(){return w},__makeTemplateObject:function(){return D},__importStar:function(){return j},__importDefault:function(){return A},__classPrivateFieldGet:function(){return S},__classPrivateFieldSet:function(){return C}});var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function i(e,t,r,n){var o,u=arguments.length,a=u<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(u<3?o(a):u>3?o(t,r,a):o(t,r))||a);return u>3&&a&&Object.defineProperty(t,r,a),a}function s(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,u){function a(e){try{s(n.next(e))}catch(t){u(t)}}function i(e){try{s(n.throw(e))}catch(t){u(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}s((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(i){u=[6,i],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function v(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,u=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=u.next()).done;)a.push(n.value)}catch(i){o={error:i}}finally{try{n&&!n.done&&(r=u.return)&&r.call(u)}finally{if(o)throw o.error}}return a}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function h(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var u=arguments[t],a=0,i=u.length;a<i;a++,o++)n[o]=u[a];return n}function y(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function P(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),u=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){u.push([e,t,r,n])>1||i(e,t)}))})}function i(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(s,c):l(u[0][2],r)}catch(n){l(u[0][3],n)}var r}function s(e){i("next",e)}function c(e){i("throw",e)}function l(e,t){e(t),u.shift(),u.length&&i(u[0][0],u[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return O(t,e),t}function A(e){return e&&e.__esModule?e:{default:e}}function S(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function C(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}}}]);