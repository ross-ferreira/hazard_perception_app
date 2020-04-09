(this.webpackJsonphazard_perception=this.webpackJsonphazard_perception||[]).push([[0],{37:function(e,t,a){e.exports=a(65)},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=a(15),i={counter:1,score:1,images:[]},s=a(18),u=a(33),m=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,p=Object(o.d)((function(e,t){switch(t.type){case"INCREMENT_COUNTER":return function(e){return Object(s.a)({},e,{counter:e.counter+1})}(e);case"INCREMENT_SCORE":return function(e){return Object(s.a)({},e,{score:e.score+1})}(e);case"SET_IMAGES":return function(e,t){return Object(s.a)({},e,{images:t.images,loaded:!0})}(e,t);case"RESET":return Object(s.a)({},i,{images:e.images,loaded:!0});default:return e}}),i,m(Object(o.a)(u.a))),d=a(2),E=a(9),h=a(10),f=a(11),b=a(12),g=a(13),y=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"main-header"},r.a.createElement("h4",{className:"main-title"},"Alpha Team Presents..."),r.a.createElement("h1",{className:"main-title"},"Hazard Perception")))}}]),a}(n.Component),N=a(8),v=function(e){var t=e.handleIncrement,a=e.counter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer-div "},10===a?r.a.createElement(N.a,{to:"/scores"},r.a.createElement("button",{type:"button",className:"skip-button"},"Skip Round")):r.a.createElement("button",{type:"button",className:"skip-button",onClick:t},"Skip Round"),r.a.createElement("p",{className:"card-footer"}," \xa9Group Alpha, 2020 ")))},O=Object(d.b)((function(e){return{counter:e.counter}}),(function(e){return{handleIncrement:function(){e({type:"INCREMENT_COUNTER"})}}}))(v),k=a(17),T=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={timer:null,seconds:10},n.startTimer=n.startTimer.bind(Object(k.a)(n)),n.countDown=n.countDown.bind(Object(k.a)(n)),n}return Object(h.a)(a,[{key:"secondsToTime",value:function(e){var t=e%3600,a=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(a)}}},{key:"componentDidMount",value:function(){this.startTimer()}},{key:"componentDidUpdate",value:function(e){this.props.counter!==e.counter&&this.resetTimer()}},{key:"startTimer",value:function(){clearInterval(this.state.timer),this.setState({timer:setInterval(this.countDown,1e3)})}},{key:"countDown",value:function(){var e=this.state.seconds-1;this.setState({seconds:e})}},{key:"timeExpired",value:function(){return 0===this.state.seconds?this.props.timerExpired(this.resetTimer()):null}},{key:"resetTimer",value:function(){this.setState({seconds:10}),this.startTimer()}},{key:"render",value:function(){var e=this.state.seconds,t=e<=5?{color:"red"}:{color:"rgb(246, 170, 25)"};return this.timeExpired(),console.log(this.props),r.a.createElement("div",null,r.a.createElement("h2",{className:"countdown",style:t},e))}}]),a}(n.Component),j=Object(d.b)((function(e){return{counter:e.counter}}),(function(e){return{timerExpired:function(){e({type:"INCREMENT_COUNTER"})}}}))(T),C=function(e){var t=e.counter;e.handleIncrement;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"img-counter"},r.a.createElement("p",{className:"main-title"},t,"/10")),r.a.createElement("div",{className:"countdown-div"},r.a.createElement(j,null)),r.a.createElement("h1",{className:"main-title"},"Hazard Perception")))},I=Object(d.b)((function(e){return{counter:e.counter}}),(function(e){return{handleIncrement:function(){e({type:"INCREMENT_COUNTER"})}}}))(C),R=function(e){var t=e.handleIncrement,a=e.srcImage,n=e.style,c=e.counter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement("div",{className:"gallery"},r.a.createElement("section",null,r.a.createElement("figure",{className:"photo"},r.a.createElement("picture",{className:"img-container"},r.a.createElement("img",{src:a,alt:"stockimage"})),10===c?r.a.createElement(N.a,{to:"/scores"},r.a.createElement("div",{style:n,className:"hidden-div"})):r.a.createElement("div",{onClick:t,style:n,className:"hidden-div"})))),r.a.createElement(O,null))},_=Object(d.b)((function(e){return{srcImage:e.images[e.counter-1].url,style:{top:"".concat(e.images[e.counter-1].top,"%"),bottom:"".concat(e.images[e.counter-1].bottom,"%"),left:"".concat(e.images[e.counter-1].left,"%"),right:"".concat(e.images[e.counter-1].right,"%"),position:"absolute"},counter:e.counter}}),(function(e){return{handleIncrement:function(){e({type:"INCREMENT_COUNTER"}),e({type:"INCREMENT_SCORE"})}}}))(R),w=function(){return r.a.createElement("footer",{class:"main-footer"},r.a.createElement("p",null," \xa9Group Alpha, 2020 "))},S=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"next"},r.a.createElement("section",{class:"first-page resolution intro-text"},r.a.createElement("h3",{className:"text-title"},"Instructions"),r.a.createElement("p",{class:"text"},"In order to survive a pandemic, you will need to confidently and quickly spot potential hazards in your day to day life. This game will test your skills in hazard percetion and will help stop a virus spreading globally and wiping out humankind."),r.a.createElement("h3",{className:"text-title"},"The Rules"),r.a.createElement("ul",null,r.a.createElement("li",{class:"text"},"There is one hazard per page"),r.a.createElement("li",{class:"text"},"Click on the hazard in the photo before the time runs out"),r.a.createElement("li",{class:"text"},"There are 10 photos in each test"),r.a.createElement("li",{class:"text"},"When you are ready, click the button below to start.")),r.a.createElement("form",{className:"form-check",action:"/action_page.php"},r.a.createElement("h5",null,"Select Difficulty:"),r.a.createElement("input",{className:"form-check-input",type:"radio",id:"Feeling Whimpy",name:"difficulty",value:"Feeling Whimpy"}),r.a.createElement("label",{class:"form-check-label",for:"Feeling Whimpy"}," Feeling Whimpy"),r.a.createElement("br",null),r.a.createElement("input",{className:"form-check-input",type:"radio",id:"Feeling Confident",name:"difficulty",value:"Feeling Confident"}),r.a.createElement("label",{class:"form-check-label",for:"Feeling Confident"}," Feeling Confident"),r.a.createElement("br",null),r.a.createElement("input",{className:"form-check-input",type:"radio",id:"Duke Nukem",name:"difficulty",value:"Duke Nukem"}),r.a.createElement("label",{class:"form-check-label",for:"Duke Nukem"}," Duke Nukem")),r.a.createElement("div",{class:"button-wrapper"},r.a.createElement(N.a,{to:"/gamepage"},r.a.createElement("button",{class:"begin-button",onclick:""},"Begin Test")))),r.a.createElement("section",{class:"find-gallery photo-main resolution"},r.a.createElement("img",{class:"first-page",src:"https://github.com/HenryTaylor2019/team-alpha-frontend/blob/f60dbd549c0258a4c803d97b870ec98872d5af03/src/Atomic/img/pandemic.png?raw=true",alt:"pandemic Logo"}))),r.a.createElement(w,null))}}]),a}(n.Component),x=function(e){var t=e.handleIncrement;return r.a.createElement("div",{className:"result-footer"},r.a.createElement(N.a,{to:"/"},r.a.createElement("button",{className:"skip-button",onClick:t,type:"button",href:"/"},"Play Again")))},M=Object(d.b)(null,(function(e){return{handleIncrement:function(){e({type:"RESET"})}}}))(x),D=function(e){var t=e.score;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{class:"find-gallery"},r.a.createElement("h1",null,"Your Score:"),r.a.createElement("h2",null,t," out of 10"),r.a.createElement("figure",{class:"photo"},r.a.createElement("picture",null,t>=5?r.a.createElement("img",{className:"finish-img",src:"https://github.com/HenryTaylor2019/team-alpha-frontend/blob/2a6e9771eaf98f486d1b990a7ceb4c44963cd4ef/src/Atomic/img/congratulations.jpg?raw=true",alt:"congratulations"}):r.a.createElement("img",{className:"finish-img",src:"https://cdn.pixabay.com/photo/2017/06/30/19/52/apocalypse-2459465_960_720.jpg",alt:"congratulations"}))),t>=5?r.a.createElement("div",null,r.a.createElement("h1",{className:"yellow"},"Congratulations "),r.a.createElement("p",null,"Your speed and perception has helped stop the pandemic escalating. After saving the human race you stand in a field of maize with your arms raised triumphantly as the sun sets... ")):r.a.createElement("div",null,r.a.createElement("h1",{className:"red"},"Failed"),r.a.createElement("p",null,"Your inability to spot basic hazards has led to the spread of the pandemic and the destruction of the species."),r.a.createElement("p",null,"Better luck next time..."))),r.a.createElement(M,null))},F=Object(d.b)((function(e){return{score:e.score}}))(D),z=a(4),A=Object(z.a)(),U=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.getData()}},{key:"render",value:function(){return this.props.loaded?r.a.createElement(g.b,{history:A},r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{exact:!0,path:"/"},r.a.createElement(y,null),r.a.createElement(S,null)),r.a.createElement(g.a,{path:"/gamepage"},r.a.createElement(_,null)),r.a.createElement(g.a,{path:"/scores"},r.a.createElement(y,null),r.a.createElement(F,null)))):r.a.createElement("p",null,"Loading")}}]),a}(r.a.Component),P=a(36),W=a.n(P).a.create({baseURL:"https://alpha.developme.space/api/startgame",headers:{Accept:"application/json"}}),G=Object(d.b)((function(e){return{loaded:e.loaded}}),(function(e){return{getData:function(){e((function(e){W.get("/").then((function(t){var a=t.data;console.log(a),e({type:"SET_IMAGES",images:a.data})}))}))}}}))(U);l.a.render(r.a.createElement(d.a,{store:p},r.a.createElement(G,{handleCounter:function(){p.dispatch({type:"INCREMENT_COUNTER"})},handleScore:function(){p.dispatch({type:"INCREMENT_SCORE"})}})),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.03ca7cc6.chunk.js.map