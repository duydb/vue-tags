!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-tags",[],t):"object"==typeof exports?exports["vue-tags"]=t():e["vue-tags"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var r=n(1)(n(2),null,null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var a,o=e=e||{},u=typeof e["default"];"object"!==u&&"function"!==u||(a=e,o=e["default"]);var i="function"==typeof o?o.options:o;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),r){var s=Object.create(i.computed||null);Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}}),i.computed=s}return{esModule:a,exports:o,options:i}}},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={model:{prop:"tags",event:"update"},props:{deleteKey:{type:Number,"default":8},addKey:{type:Number,"default":13},tags:{required:!0}},data:function(){return{newTag:""}},methods:{handleTagBackspace:function(e){0===this.newTag.length&&this.$emit("update",this.tags.slice(0,-1))},addTag:function(){0===this.newTag.length||this.tags.includes(this.newTag)||(this.$emit("update",[].concat(n(this.tags),[this.newTag])),this.newTag="")},removeTag:function(e){this.$emit("update",this.tags.filter(function(t){return t!==e}))}},render:function(){var e=this;return this.$scopedSlots["default"]({tags:this.tags,removeTag:this.removeTag,inputEventHandlers:{input:function(t){e.newTag=t.target.value},keydown:function(t){t.keyCode===e.deleteKey&&e.handleTagBackspace(),t.keyCode===e.addKey&&(t.preventDefault(),e.addTag()),13===t.keyCode&&13!==e.addKey&&13!==e.deleteKey&&t.preventDefault()}},inputBindings:{value:this.newTag}})}}}])});