(this["webpackJsonpreact-todo-list-app"]=this["webpackJsonpreact-todo-list-app"]||[]).push([[0],{13:function(t,e,o){t.exports=o(40)},21:function(t,e,o){},22:function(t,e,o){},36:function(t,e,o){},37:function(t,e,o){},40:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),i=o(7),r=o.n(i),s=(o(21),o(1)),c=o(2),l=o(4),d=o(3),u=o(5),h=(o(22),o(12)),p=o.n(h),f=(o(36),function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"delete",value:function(t){console.log(t),this.props.onDelete(t)}},{key:"render",value:function(){return a.a.createElement(p.a,{transitionName:"todo-anim",transitionEnterTimeout:700,transitionLeave:700},a.a.createElement("li",{onClick:this.delete.bind(this,this.props.id),className:"todo",id:this.props.id},this.props.name))}}]),e}(n.Component)),m=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"delete",value:function(t){this.props.onDelete(t)}},{key:"render",value:function(){var t=this,e="";return this.props.todos&&(e=this.props.todos.map((function(e){return a.a.createElement(f,{id:e.id,name:e.name,onDelete:t.props.onDelete.bind(t)})}))),a.a.createElement("ul",{class:"todos",onDelete:this.props.onDelete.bind(this)},e)}}]),e}(n.Component),v=(o(37),o(11)),b=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(l.a)(this,Object(d.a)(e).call(this))).state={todo:{}},t}return Object(u.a)(e,t),Object(c.a)(e,[{key:"onSubmit",value:function(t){var e=this;t.preventDefault();var o=this.todo.value;this.todo.value="",""!==o?this.setState({todo:{id:v(),name:o}},(function(){e.props.onAdd(e.state.todo)})):alert("You cannot enter an empty value.")}},{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},a.a.createElement("input",{id:"todo-input",type:"text",placeholder:"Enter Item",ref:function(e){return t.todo=e}}),a.a.createElement("button",{id:"add-btn"},"Add")))}}]),e}(n.Component),g=o(11),k=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(l.a)(this,Object(d.a)(e).call(this))).state={todos:[],count:0},t}return Object(u.a)(e,t),Object(c.a)(e,[{key:"setTodos",value:function(){this.state.todos=[{id:g(),name:"Eat breakfast"},{id:g(),name:"Buy groceries"}]}},{key:"deleteTodo",value:function(t){for(var e=this.state.todos,o=0;o<e.length;o++)if(e[o].id===t){e.splice(o,1);break}this.setState({todos:e}),this.saveStateToLocalStorage()}},{key:"addTodo",value:function(t){var e=this.state.todos;e.push(t),this.setState({todos:e}),this.saveStateToLocalStorage()}},{key:"loadStateFromLocalStorage",value:function(){return JSON.parse(localStorage.getItem("todos",this.state.todos))}},{key:"saveStateToLocalStorage",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"componentWillMount",value:function(){this.loadStateFromLocalStorage()?this.setState({todos:this.loadStateFromLocalStorage()}):(this.setTodos(),this.saveStateToLocalStorage())}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"React Todo App",a.a.createElement("small",{id:"author"},"Built by Ibrahim Abdul Hammed")),a.a.createElement(b,{onAdd:this.addTodo.bind(this)}),a.a.createElement(m,{todos:this.state.todos,onDelete:this.deleteTodo.bind(this)}))}}]),e}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}r.a.render(a.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-todo-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-todo-app","/service-worker.js");S?(!function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):y(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):y(t)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.791b8d03.chunk.js.map