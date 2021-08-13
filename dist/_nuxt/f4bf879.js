(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,7],{211:function(e,t,r){var content=r(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(117).default)("4e69fb00",content,!0,{sourceMap:!1})},212:function(e,t,r){"use strict";r.r(t);r(223);var n=r(224),o=(r(225),{name:"PlayerTimeLine",props:{videoRef:{default:{}},currentlyTimer:{type:Number,default:0},duration:{type:Number,default:0}},components:{VueAudioMixer:n.a},computed:{percentComplete:function(){return parseInt(this.currentlyTimer/this.duration*100)},progressStyle:function(){return{width:"".concat(this.percentComplete,"%")}}},methods:{seek:function(e){var t=e.target.getBoundingClientRect(),r=(e.clientX-t.left)/t.width;this.videoRef.currentTime=parseInt(this.videoRef.duration*r)}}}),l=(r(214),r(35)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"seek"}},[r("div",{staticClass:"player-timeline"},[r("div",{staticClass:"player-progress",style:e.progressStyle}),e._v(" "),r("div",{staticClass:"player-seeker",attrs:{title:"Seek"},on:{click:e.seek}})])])}),[],!1,null,null,null);t.default=component.exports},213:function(e,t,r){var content=r(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(117).default)("33aa6480",content,!0,{sourceMap:!1})},214:function(e,t,r){"use strict";r(211)},215:function(e,t,r){var n=r(116)(!1);n.push([e.i,".player-timeline{background-color:#ebeef5;border-radius:100px;height:6px;width:100%}.player-progress,.player-seeker{height:6px;border-radius:100px;z-index:1}.player-progress{background:linear-gradient(90deg,#df83f1,#82279f,#53cfe0);opacity:.9;z-index:1}.player-seeker{cursor:pointer;width:100%;z-index:2;margin-top:-6px}",""]),e.exports=n},216:function(e,t,r){"use strict";r.r(t);var n={name:"Volume",props:{videoRef:{default:{}}},data:function(){return{volume:100}},watch:{volume:function(){this.videoRef.volume=this.volume/100}},computed:{volumeTitle:function(){return"Volume (".concat(this.volume,"%)")}},methods:{}},o=(r(219),r(35)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"btn-volume"},[r("div",{staticClass:"volume"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy.number",value:e.volume,expression:"volume",modifiers:{lazy:!0,number:!0}}],staticClass:"player-volume",attrs:{title:e.volumeTitle,type:"range",min:"0",max:"100"},domProps:{value:e.volume},on:{change:function(t){e.volume=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})])])}),[],!1,null,null,null);t.default=component.exports},217:function(e,t,r){var content=r(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(117).default)("ade34c40",content,!0,{sourceMap:!1})},219:function(e,t,r){"use strict";r(213)},220:function(e,t,r){var n=r(116)(!1);n.push([e.i,".btn-volume{display:flex;justify-content:space-between}.volume{margin:15px 0}input[type=range]{-webkit-appearance:none;width:100%}input[type=range]::-ms-track{width:100%;cursor:pointer;background:transparent;border-color:transparent;color:transparent}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:36px;width:16px;border-radius:3px;background:#ba83ca;cursor:pointer;margin-top:-14px}input[type=range]::-webkit-slider-runnable-track{width:100%;height:8.4px;cursor:pointer;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;background:#fff;border-radius:1.3px}input[type=range]:focus::-webkit-slider-runnable-track{background:#fff}",""]),e.exports=n},221:function(e,t,r){"use strict";r.r(t);r(37),r(32),r(36),r(59),r(33),r(60);var n=r(29),o=(r(58),r(212)),l=r(216),c=r(30);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"Player",components:{Volume:l.default,PlayerTimeLine:o.default},data:function(){return{videoRef:{},isPlaying:!1,current:{},index:0,currentlyTimer:0,duration:0,fullscreen:!1,loaded:!1}},computed:f(f({},Object(c.b)(["allVideo"])),{},{activeVideo:{get:function(){return this.$store.state.activeVideo},set:function(e){this.$store.state.activeVideo=e}}}),mounted:function(){this.videoRef=this.$refs.videoPlay},watch:{activeVideo:{immediate:!0,handler:"onVideoChange"}},filters:{convertTime:function(e){var t=new Date(1e3*e).toISOString().substr(11,8);return 0===t.indexOf("00:")?t.substr(3):t}},methods:{play:function(){this.$refs.videoPlay.play(),this.isPlaying=!0},stop:function(){this.$refs.videoPlay.pause(),this.isPlaying=!1},prev:function(){this.index--,this.index<0&&(this.index=this.allVideo.length-1),this.current=this.allVideo[this.index],this.activeVideo=this.current},next:function(){this.index++,this.index>this.allVideo.length-1&&(this.index=0),this.current=this.allVideo[this.index],this.activeVideo=this.current},onVideoChange:function(){var e=this;setTimeout((function(){var video=e.$refs.videoPlay;video.addEventListener("timeupdate",(function(){e.currentlyTimer=e.$refs.videoPlay.currentTime})),video.addEventListener("loadedmetadata",(function(){var t;e.duration=null===(t=e.$refs.videoPlay)||void 0===t?void 0:t.duration}))}),0)},toggle:function(){this.$fullscreen.toggle(this.$refs.videoPlay,{callback:this.fullscreenChange})},fullscreenChange:function(e){this.fullscreen=e}}},m=(r(226),r(35)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"player"},[r("div",{staticClass:"cover-wrapper"},[r("video",{ref:"videoPlay",attrs:{src:e.activeVideo.src,poster:e.activeVideo.cover}}),e._v(" "),r("div",{staticClass:"volume-fullScreen-cover"},[r("Volume",{attrs:{videoRef:e.videoRef}}),e._v(" "),r("button",{staticClass:"btn-fullScreen",on:{click:e.toggle}},[r("img",{attrs:{src:"img/fullscreen.png",alt:"icon"}})])],1)]),e._v(" "),r("div",{staticClass:"videos-details"},[r("h2",{staticClass:"videos-title"},[e._v(" "+e._s(e.activeVideo.title)+" ")]),e._v(" "),r("p",{staticClass:"subtitle"},[e._v(e._s(e.activeVideo.subtitle))]),e._v(" "),r("PlayerTimeLine",{attrs:{videoRef:e.videoRef,currentlyTimer:e.currentlyTimer,duration:e.duration}}),e._v(" "),r("div",{staticClass:"timer"},[r("p",{staticClass:"start"},[e._v(e._s(e._f("convertTime")(e.currentlyTimer)))]),e._v(" "),r("p",{staticClass:"end"},[e._v("\n        "+e._s(e._f("convertTime")(e.duration))+"\n      ")])]),e._v(" "),r("div",{staticClass:"controls"},[r("button",{staticClass:"prev",on:{click:e.prev}},[e._v("◄")]),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!e.isPlaying,expression:"!isPlaying"}],ref:"play",staticClass:"play",on:{click:e.play}},[e._v("▶")]),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:e.isPlaying,expression:"isPlaying"}],staticClass:"stop",on:{click:e.stop}},[r("img",{attrs:{src:"img/icons8-pause-48.png",alt:""}})]),e._v(" "),r("button",{staticClass:"next",on:{click:e.next}},[e._v("►")])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Volume:r(216).default,PlayerTimeLine:r(212).default})},226:function(e,t,r){"use strict";r(217)},227:function(e,t,r){var n=r(116)(!1);n.push([e.i,".player{flex-wrap:nowrap;max-width:375px;max-height:623px;margin:0;padding:50px 25px 25px;box-sizing:border-box;background-color:#fff;border-radius:15px;-webkit-animation:scale-up-center 1s cubic-bezier(.39,.575,.565,1) both;animation:scale-up-center 1s cubic-bezier(.39,.575,.565,1) both}.cover-wrapper,.player{display:flex;flex-direction:column}.cover-wrapper video{width:270px;text-align:center;box-shadow:0 24px 35px -16px rgba(107,179,237,.5);border-radius:8px}.videos-title{margin-top:25px;color:#53565a;font-size:1.13em;margin-bottom:5px}.subtitle,.videos-title{width:100%;text-align:center}.subtitle{font-family:Muli,sans-serif;font-weight:400}@-webkit-keyframes scale-up-center{0%{transform:scale(.5)}to{transform:scale(1)}}@keyframes scale-up-center{0%{transform:scale(.5)}to{transform:scale(1)}}.controls{padding:20px 15px}.controls,.play,.stop{display:flex;justify-content:center;align-items:center}.play,.stop{background-image:linear-gradient(to right top,#d16ba5,#c777b9,#ba83ca,#aa8fd8,#9a9ae1,#8aa7ec,#79b3f4,#69bff8,#52cffe,#41dfff,#46eefa,#5ffbf1);border-radius:50%;border:none;width:80px;height:80px;box-shadow:-1px 17px 24px -6px rgba(0,0,0,.2);cursor:pointer;color:#fff;margin-left:20px;margin-right:20px}.play{font-size:40px}.next,.prev{border:0;border-radius:50%;font-size:20px;width:50px;height:50px;cursor:pointer;background-color:rgba(0,0,0,.09);color:#fff;transition:background-color .2s;position:relative}.timer{width:100%;padding:10px}.timer,.volume-fullScreen-cover{display:flex;justify-content:space-between}.volume-fullScreen-cover{margin-top:8px}.btn-fullScreen{border:none;outline:none;background:transparent;margin-top:5px}.btn-fullScreen img{width:45px}.btn-fullScreen img:hover{cursor:pointer}",""]),e.exports=n}}]);