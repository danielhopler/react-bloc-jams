(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(41)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(19),o=a.n(s),r=a(10),l=(a(27),a(5)),c=a(6),u=a(8),m=a(7),d=a(9),h=a(11),p=(a(28),a(29),function(){return i.a.createElement("section",{className:"landing"},i.a.createElement("h1",{className:"hero-title"},"Turn the music up!"),i.a.createElement("section",{className:"selling-points"},i.a.createElement("div",{className:"point"},i.a.createElement("span",{className:"ion-music-note"}),i.a.createElement("h2",{className:"point-title"},"Choose your music"),i.a.createElement("p",{className:"point-description"},"The world is full of music; why should you have to listen to music that someone else chose?")),i.a.createElement("div",{className:"point"},i.a.createElement("span",{className:"ion-radio-waves"}),i.a.createElement("h2",{className:"point-title"},"Unlimited, streaming, ad-free"),i.a.createElement("p",{className:"point-description"},"No arbitrary limits. No distractions.")),i.a.createElement("div",{className:"point"},i.a.createElement("span",{className:"ion-iphone"}),i.a.createElement("h2",{className:"point-title"},"Mobile enabled"),i.a.createElement("p",{className:"point-description"},"Listen to your music on the go. This streaming service is available on all mobile platforms."))))}),g=[{title:"The Colors",artist:"Pablo Picasso",releaseInfo:"1909 Spanish Records",albumCover:"/assets/images/album_covers/01.jpg",slug:"the-colors",songs:[{title:"Blue",duration:"161.71",audioSrc:"/assets/music/blue.mp3"},{title:"Green",duration:"103.96",audioSrc:"/assets/music/green.mp3"},{title:"Red",duration:"268.45",audioSrc:"/assets/music/red.mp3"},{title:"Pink",duration:"153.14",audioSrc:"/assets/music/pink.mp3"},{title:"Magenta",duration:"374.22",audioSrc:"/assets/music/magenta.mp3"}]},{title:"The Telephone",artist:"Guglielmo Marconi",releaseInfo:"1909 EM",albumCover:"/assets/images/album_covers/02.jpg",slug:"the-telephone",songs:[{title:"Blue",duration:"161.71",audioSrc:"/assets/music/blue.mp3"},{title:"Green",duration:"103.96",audioSrc:"/assets/music/green.mp3"},{title:"Red",duration:"268.45",audioSrc:"/assets/music/red.mp3"},{title:"Pink",duration:"153.14",audioSrc:"/assets/music/pink.mp3"},{title:"Magenta",duration:"374.22",audioSrc:"/assets/music/magenta.mp3"}]}],v=(a(30),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={albums:g},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"library"},this.state.albums.map(function(e,t){return i.a.createElement(r.b,{to:"/album/".concat(e.slug),key:t,className:"album"},i.a.createElement("img",{src:e.albumCover,alt:"Album Cover"}),i.a.createElement("div",{className:"album-title"},e.title),i.a.createElement("div",{className:"album-artist"},e.artist),i.a.createElement("div",{className:"album-song-count"},e.songs.length," songs"))}))}}]),t}(n.Component)),E=(a(39),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"player-bar"},i.a.createElement("section",{id:"buttons"},i.a.createElement("button",{id:"previous",onClick:this.props.handlePrevClick},i.a.createElement("span",{className:"ion-skip-backward"})),i.a.createElement("button",{id:"play-pause",onClick:this.props.handleSongClick,"data-play-state":this.props.isPlaying?"playing":"paused"},i.a.createElement("span",{className:this.props.isPlaying?"ion-pause":"ion-play"})),i.a.createElement("button",{id:"next",onClick:this.props.handleNextClick},i.a.createElement("span",{className:"ion-skip-forward"}))),i.a.createElement("section",{id:"time-control"},i.a.createElement("div",{className:"current-time"},this.props.formatTime(this.props.currentTime)),i.a.createElement("input",{type:"range",className:"seek-bar",value:this.props.currentTime/this.props.duration||0,max:"1",min:"0",step:"0.01",onChange:this.props.handleTimeChange}),i.a.createElement("div",{className:"total-time"},this.props.formatTime(this.props.duration))),i.a.createElement("section",{id:"volume-control"},i.a.createElement("div",{className:"icon ion-volume-low"}),i.a.createElement("input",{type:"range",className:"seek-bar",value:this.props.volume,max:"1",min:"0",step:"0.01",onChange:this.props.handleVolumeChange}),i.a.createElement("div",{className:"icon ion-volume-high"})))}}]),t}(n.Component)),f=(a(40),function(e){function t(e){var a;Object(l.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e));var n=g.find(function(e){return e.slug===a.props.match.params.slug});return a.state={album:n,currentSong:n.songs[0],currentTime:0,duration:n.songs[0].duration,volume:.5,isPlaying:!1},a.audioElement=document.createElement("audio"),a.audioElement.src=n.songs[0].audioSrc,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.eventListeners={timeupdate:function(t){e.setState({currentTime:e.audioElement.currentTime})},durationchange:function(t){e.setState({duration:e.audioElement.duration})}},this.audioElement.addEventListener("timeupdate",this.eventListeners.timeupdate),this.audioElement.addEventListener("durationchange",this.eventListeners.durationchange)}},{key:"componentWillUnmount",value:function(){this.audioElement.src=null,this.audioElement.removeEventListener("timeupdate",this.eventListeners.timeupdate),this.audioElement.removeEventListener("durationchange",this.eventListeners.durationchange)}},{key:"play",value:function(){this.audioElement.play(),this.setState({isPlaying:!0})}},{key:"pause",value:function(){this.audioElement.pause(),this.setState({isPlaying:!1})}},{key:"setSong",value:function(e){this.audioElement.src=e.audioSrc,this.setState({currentSong:e})}},{key:"handleSongClick",value:function(e){var t=this.state.currentSong===e;this.state.isPlaying&&t?this.pause():(t||this.setSong(e),this.play())}},{key:"handlePrevClick",value:function(){var e=this,t=this.state.album.songs.findIndex(function(t){return e.state.currentSong===t}),a=Math.max(0,t-1),n=this.state.album.songs[a];this.setSong(n),this.play(n)}},{key:"handleNextClick",value:function(){var e=this,t=this.state.album.songs.findIndex(function(t){return e.state.currentSong===t}),a=Math.min(4,t+1),n=this.state.album.songs[a];this.setSong(n),this.play(n)}},{key:"handleTimeChange",value:function(e){var t=this.audioElement.duration*e.target.value;this.audioElement.currentTime=t,this.setState({currentTime:t})}},{key:"formatTime",value:function(e){if(isNaN(e))return"-:--";var t=Math.floor(e/60),a=Math.floor(e%60);return"".concat(t,":").concat(a)}},{key:"handleVolumeChange",value:function(e){var t=e.target.value;this.audioElement.volume=t,this.setState({volume:t})}},{key:"songClass",value:function(e){return this.state.currentSong===e&&this.state.isPlaying?"song playing":"song"}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"album"},i.a.createElement("section",{id:"album-info"},i.a.createElement("img",{id:"album-cover-art",src:this.state.album.albumCover,alt:"Album Cover"}),i.a.createElement("div",{className:"album-details"},i.a.createElement("h1",{id:"album-title"},this.state.album.title),i.a.createElement("h2",{className:"artist"},this.state.album.artist),i.a.createElement("div",{id:"release-info"},this.state.album.releaseInfo))),i.a.createElement("table",{id:"song-list"},i.a.createElement("colgroup",null,i.a.createElement("col",{id:"song-number-column"}),i.a.createElement("col",{id:"song-title-column"}),i.a.createElement("col",{id:"song-duration-column"})),i.a.createElement("tbody",null,this.state.album.songs.map(function(t,a){return i.a.createElement("tr",{className:e.songClass(t),key:a,onClick:function(){return e.handleSongClick(t)}},i.a.createElement("td",{className:"song-actions"},i.a.createElement("button",null,i.a.createElement("span",{className:"song-number"},a+1),i.a.createElement("span",{className:"ion-play"}),i.a.createElement("span",{className:"ion-pause"}))),i.a.createElement("td",{className:"song-title"},t.title),i.a.createElement("td",{className:"song-duration"},e.formatTime(t.duration)))}))),i.a.createElement(E,{isPlaying:this.state.isPlaying,currentSong:this.state.currentSong,currentTime:this.audioElement.currentTime,volume:this.audioElement.volume,duration:this.audioElement.duration,handleSongClick:function(){return e.handleSongClick(e.state.currentSong)},handlePrevClick:function(){return e.handlePrevClick()},handleNextClick:function(){return e.handleNextClick()},handleTimeChange:function(t){return e.handleTimeChange(t)},handleVolumeChange:function(t){return e.handleVolumeChange(t)},formatTime:function(t){return e.formatTime(t)}}))}}]),t}(n.Component)),b=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement(r.b,{to:"/"},i.a.createElement("img",{src:"./../assets/images/bloc_jams_logo.png",alt:"Bloc Jams Landing"})),i.a.createElement(r.b,{to:"/library"},"Library"))),i.a.createElement("main",null,i.a.createElement(h.a,{exact:!0,path:"/",component:p}),i.a.createElement(h.a,{path:"/library",component:v}),i.a.createElement(h.a,{path:"/album/:slug",component:f})))}}]),t}(n.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(r.a,null,i.a.createElement(b,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-bloc-jams",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-bloc-jams","/service-worker.js");y?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):k(e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.00c81b71.chunk.js.map