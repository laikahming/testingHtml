webpackJsonp([27],{1058:function(e,t,n){var o=n(1059);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(965)(o,r);o.locals&&(e.exports=o.locals)},1059:function(e,t,n){t=e.exports=n(964)(!0),t.push([e.i,".logout-padding-20{padding:20px}","",{version:3,sources:["/Users/lkming/Documents/_Project/AmBank/web_backOffice/lkming/src/pages/logout/s.logout.css"],names:[],mappings:"AAEA,mBACI,YAAuB,CAC1B",file:"s.logout.css",sourcesContent:["\n\n.logout-padding-20 {\n    padding         : 20px; \n}\n"],sourceRoot:""}])},968:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=n.n(a),c=n(145),l=n(108),s=n(110),f=n(111),p=n(1058),g=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}());t.default=Object(c.b)(function(e,t){var n=e.ReduxLogout,o={};if(n)for(var r=0;r<n.length;r++){var i=n[r];i.completed||(i.completed=!0)}return o})(function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log("ComponentLogout : constructor : *** : ["+n.uuid()+"] ",e),n.state={isLoading:!1,isSubmit:!1},n}return i(t,e),g(t,[{key:"_onReady",value:function(){Promise.all([(new f.a).clearAll()]).then(function(){})}},{key:"onClickLogin",value:function(){s.b.route(s.b.mapPath(s.a.LOGIN))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:" logout-padding-20 "},u.a.createElement("a",{href:"javascript:void( 0 )",onClick:function(){e.onClickLogin()}},"go to login page"))}}]),t}(l.a))}});
//# sourceMappingURL=27.89aa2c0a.chunk.js.map