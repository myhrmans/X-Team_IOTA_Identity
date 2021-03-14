(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1362:function(module,exports,__webpack_require__){"use strict";__webpack_require__(9),__webpack_require__(4),__webpack_require__(53),__webpack_require__(1363),__webpack_require__(40),__webpack_require__(41),__webpack_require__(1364),__webpack_require__(32),__webpack_require__(43);var _clientApi=__webpack_require__(52),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1365);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1365:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1366:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(408).configure)([__webpack_require__(1367),__webpack_require__(1369)],module,!1)}).call(this,__webpack_require__(101)(module))},1367:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1368};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1367},1368:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(5),__webpack_require__(9),__webpack_require__(16),__webpack_require__(4),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(199),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(532),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(533),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(534),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(535),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(536),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(537),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(538),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(539),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Meta,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"src/storybook-examples")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"subheading"},"Configure"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/react/api/presets",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default.a,alt:"Build"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default.a,alt:"flow"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"subheading"},"Learn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default.a,alt:"direction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default.a,alt:"code"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://discord.gg/UUt2PJb",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"comments"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",{class:"tip"},"Tip"),"Edit the Markdown in ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("code",null,"src/storybook-examples/welcome.mdx")))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1369:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1369},532:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},533:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},534:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},535:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},536:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},537:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},538:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},539:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},542:function(module,exports,__webpack_require__){__webpack_require__(543),__webpack_require__(935),__webpack_require__(936),__webpack_require__(1105),__webpack_require__(1328),__webpack_require__(1333),__webpack_require__(1341),__webpack_require__(1353),__webpack_require__(1355),__webpack_require__(1360),__webpack_require__(1362),module.exports=__webpack_require__(1366)},678:function(module,exports){},936:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(408)}},[[542,1,2]]]);
//# sourceMappingURL=main.c427b4833c3c95494c41.bundle.js.map