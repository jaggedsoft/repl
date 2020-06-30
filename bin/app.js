function widget(e){let n,t,i="";let l=[];function o(e){d();let t;require(["cm/lib/codemirror","cm/mode/htmlmixed/htmlmixed","cm/mode/xml/xml","cm/mode/javascript/javascript","cm/mode/css/css"],function(i){d();n=i(e,{mode:"htmlmixed",scrollbarStyle:"null",height:"auto",width:"auto",lineWrapping:true,lineNumbers:true});n.on("change",(e,n)=>{d();if(n.origin=="setValue")return;if(t)clearTimeout(t);t=setTimeout(()=>{d();t=0;c()},300)});document.body.childNodes.forEach(e=>{d();if(e.nodeType!=8)return;let n=e.textContent.trim();let t=n.match(/^name: ([^\n]+)\n([\S\s]+)$/);if(!t)return;l.push({name:t[1],content:t[2].trim()})});let o=document.location.hash;if(o.startsWith("#src=")){n.setValue(decodeURIComponent(o.substring(5)))}else{n.setValue(l[0].content)}c()})}const r=`\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <script lang="javascript">\n        document.addEventListener('DOMContentLoaded', function() {\n            widget(document.body);\n        }, false);\n        {runtime};\n    <\/script>\n</head>\n<body></body>\n</html>`;function c(){d();t=null;let e=n.getValue();require(["malina"],function(n){d();i=n.version;try{var l=n.compile(e)}catch(e){if(e.details)t=e.message+": "+e.details;else t=e;console.trace(e);return}let o=r.split("{runtime}").join(l);var c=iframe.contentWindow.document;c.open();c.write(o);c.close()})}function a(){d();let e=n.getValue();document.location.hash="src="+encodeURIComponent(e)}function s(e){d();if(!e)return;n.setValue(l[Number(e)].content);c()}function d(){if(d._p)return;if(d.planned)return;d.planned=true;setTimeout(()=>{d.planned=false;d.go()},1)}(function(){function n(e){let n=document.createElement("template");n.innerHTML=e;return n.content}function r(e,n){let t=e.indexOf(n);if(t>=0)e.splice(t,1)}function c(e,n){n.split(",").forEach(n=>e=e.childNodes[n]);return e}function u(){this.children=[];this.watchers=[];this.destroyList=[];this.onceList=[]}Object.assign(u.prototype,{watch:function(e,n,t){this.watchers.push({fn:e,cb:n,value:undefined,ro:t=="ro"})},wf:function(e,n){this.watch(e,n,"ro")},wa:function(e,n){let t={fn:e,cb:n,value:undefined,a:true};this.watchers.push(t);return t},ev:function(e,n,t){e.addEventListener(n,t);this.d(()=>{e.removeEventListener(n,t)})},d:function(e){this.destroyList.push(e)},destroy:function(){this.watchers.length=0;this.destroyList.forEach(e=>{try{e()}catch(e){console.error(e)}});this.destroyList.length=0;this.children.forEach(e=>{e.destroy()});this.children.length=0},once:function(e){this.onceList.push(e)}});let m=new u;const h=(e,n)=>{let t=e==null||!e.length;let i=n==null||!n.length;if(t!==i)return true;if(t===true)return false;if(e.length!==n.length)return true;for(let t=0;t<e.length;t++){if(e[t]!==n[t])return true}return false};d.go=(()=>{d._p=true;try{f(m)}finally{d._p=false}});function f(e){let n=10;let t=[];let i;while(n>=0){let l=0;let o=0;let r=[];let c,a,s=e;while(s){for(let e=0;e<s.watchers.length;e++){i=s.watchers[e];a=i.fn();if(i.a){if(h(i.value,a)){i.value=a.slice();if(!i.ro)l++;i.cb(i.value)}}else{if(i.value!==a){i.value=a;if(!i.ro)l++;i.cb(i.value)}}}if(s.children.length)r.push.apply(r,s.children);if(s.onceList.length){t.push.apply(t,s.onceList);s.onceList.length=0}s=r[o++]}n--;if(!l)break}t.forEach(e=>{try{e()}catch(e){console.error(e)}});if(n<0)console.error("Infinity changes: ",i)}function p(e,m){var h=c(m,"1,7");e.ev(h,"input",e=>{d();let n=h;s(e.target.value)});var f=c(m,"1,7,1");function p(e,n){function t(e,n,t){function i(e,i){var l=i;e.wf(()=>t,e=>{l.setAttribute("value",e)});var o=c(i,"0");e.wf(()=>n.name,e=>{o.textContent=e})}i(e.cd,e.el);e.reindex=function(e){t=e}}let i=n.parentNode;let o=document.createElement("select");o.innerHTML=`<option > </option>`;o=o.firstChild;let a=new Map;e.wa(()=>l,l=>{let c=n;let s=new Map;if(a.size){let n=new Set;for(let e=0;e<l.length;e++){n.add(l[e])}a.forEach((t,i)=>{if(n.has(i))return;t.el.remove();t.cd.destroy();r(e.children,t.cd)});n.clear()}let d,m,h,f,p;for(d=0;d<l.length;d++){m=l[d];if(h){p=h;h=null}else p=a.get(m);if(p){f=p.el;if(f.previousSibling!=c){let e=true;if(d+1<l.length&&c.nextSibling){h=a.get(l[d+1]);if(c.nextSibling.nextSibling===h.el){i.replaceChild(f,c.nextSibling);e=false}}if(e){i.insertBefore(f,c.nextSibling)}}p.reindex(d)}else{f=o.cloneNode(true);let n=new u;e.children.push(n);p={el:f,cd:n};t(p,m,d);i.insertBefore(f,c.nextSibling)}c=f;s.set(m,p)}a.clear();a=s})}p(e,f);var v=c(m,"1,9");e.ev(v,"click",e=>{d();let n=v;a()});var b=c(m,"3,1,1,1");e.once(()=>{d();let e=b;o(e)});var x=c(m,"3,1,3,1,1");e.once(()=>{d();let e=x;iframe=e});var g=c(m,"5,1,0");e.wf(()=>`\n        `+i+`\n    `,e=>{g.textContent=e});var y=c(m,"5,3");function w(e,i){let l=n(`\n        <div style="color: red;" > </div>\n    `);function o(e,n){var i=c(n,"1,0");e.wf(()=>`\n            `+t+`\n        `,e=>{i.textContent=e})}let a;let s=[];function d(n,t){a=new u;e.children.push(a);let l=n.cloneNode(true);for(let e=0;e<l.childNodes.length;e++)s.push(l.childNodes[e]);t(a,l);i.parentNode.insertBefore(l,i.nextSibling)}function m(){if(!a)return;r(e.children,a);a.destroy();a=null;for(let e=0;e<s.length;e++)s[e].remove();s.length=0}e.wf(()=>!!t,e=>{if(e){m();d(l,o)}else{m()}})}w(e,y)}e.innerHTML=`\n\n<div class="header row" >\n    <div style="float: right;margin: 16px 40px 4px 40px;" >\n        <a target="_blank" href="https://github.com/malinajs/repl/blob/master/app.html" >Source code of this REPL-app</a> <br />\n        <img style="height: 18px;" src="https://help.github.com/assets/images/site/favicon.ico" />\n        <a style="vertical-align: top;" target="_blank" href="https://github.com/malinajs/malinajs" >GitHub Malina.js</a>\n    </div>\n    <h2 >Malina.js - repl</h2>\n    <span style="color: red;" >Select example</span>\n    <select >\n        \x3c!-- #each templates as tpl --\x3e\n    </select>\n    <button >Share code</button>\n</div> \n<div class="body row" >\n    <div class="wrapper" >\n        <div class="left" >\n            <div ></div>\n        </div>\n        <div class="right" >\n            <div class="iframe-container" >\n                <iframe frameborder="0" ></iframe>\n            </div>\n        </div>\n    </div>\n</div> \n<div class="footer row" >\n    <div style="float: right; margin: 16px; color: cornflowerblue;" > </div>\n\n    \x3c!-- #if error --\x3e\n</div>\n\n\n\x3c!-- TEMPLATES BELOW --\x3e\n\n\x3c!--\nname: Hello world\n\n<script>\n  let name = 'world';\n<\/script>\n\n<h1>Hello {name.toUpperCase()}!</h1>\n--\x3e\n\n\n\x3c!--\nname: Binding\n\n<script>\n  let name = 'world';\n  let active = false;\n<\/script>\n\nEnter name: <input type="text" bind:value={name} />\nHello {name}!\n<br/>\n<input type="checkbox" bind:checked={active} /> {active}\n--\x3e\n\n\n\x3c!--\nname: Events\n<script>\n  let name = '';\n  let event = '';\n  const click = (e) => {\n    event = e.x + 'x' + e.y;\n  }\n<\/script>\n\nEnter word and press enter:\n<input bind:value={name} on:keydown|enter={name=''} /> {name}\n<br />\n<button on:click={click($event)}>Click!</button>\n<a href on:click|preventDefault={event=$element.textContent}>Click</a>\n{event}\n\n<ul>\n  <li>\n    <b>on:event</b> to listen event, available locals: <i>$element, $event</i>\n  </li>  \n  <li>\n    modifier "preventDefault" to use <i>event.preventDefault()</i>\n  </li>\n  <li>\n    modifier "enter": on:keydown|enter - listen work if keyCode == 13 (Enter)\n  </li>\n</ul>\n--\x3e\n\n\n\x3c!--\nname: Class and style\n\n<script>\n  let value;\n<\/script>\n\n<input type="checkbox" bind:checked={value} /> switch\n \n<div class:blue={value} class:red={!value}>Linux</div>\n<div class="{value?'red':'blue'}">MacOS</div>\n<b style="color: {value?'green':'red'};">Windows</b>\n\n<style>\n  .blue {background-color: cornflowerblue;}\n  .red {background-color: tomato;}\n</style>\n--\x3e\n\n\n\x3c!--\nname: if - else block\n\n<script>\n  let value;\n<\/script>\n\n<input type="checkbox" bind:checked={value} /> switch\n<br/>\n\n{#if value}\n\tcheckbox is on\n{:else}\n\t[else] block, switch checkbox\n{/if}\n--\x3e\n\n\x3c!--\nname: Each/repeat blocks\n\n<script>\n  let items = [];\n  let name;\n  \n  const add = () => {\n    items.push({name: name});\n    name = '';\n  };\n  const remove = i => {\n    items.splice(i, 1);\n  }\n  const reverse = (item) => {\n    item.name = item.name.split('').reverse().join('');\n  }\n<\/script>\n\nEnter text and press enter:\n<input type="text" bind:value={name} on:keydown|enter={add()} />\n\n<ul>\n  {#each items as item}\n  <li>\n    {$index}: {item.name}\n    <a href on:click|preventDefault={reverse(item)}>reverse</a>\n    <a href on:click|preventDefault={remove($index)}>remove</a>\n  </li>\n  {/each}\n</ul>\n--\x3e\n\n\n\x3c!--\nname: Directive 'use'\n\n<script>\n  let visible = false;\n  const setStyle = el => {\n    el.style.color = 'red';\n  }\n  let boldElement;\n<\/script>\n\n<input type="checkbox" bind:checked={visible} />\n<span use={setStyle($element)}>set focus input on render</span>\n\n<div>\n  {#if visible}\n\t<input type="text" use={$element.focus()} />\n  {/if}\n</div>\n\nsave element in <b use={boldElement=$element}>variable</b>\n--\x3e\n\n\x3c!--\nname: Todo app\n\n<script>\n  let name = '';\n  let todos = [];\n  let active;\n  \n  function add() {\n    if(!name) return;\n    todos.push({name: name});\n    name = '';\n  }\n  \n  const remove = i => todos.splice(i, 1);\n  const numDone = () => todos.filter(t => t.done).length;\n<\/script>\n\n{#if active}\nEdit: <input type="text" on:keydown|enter={active=null} bind:value={active.name} use={$element.focus()} />\n{:else}\n<input type="text" on:keydown|enter={add()} bind:value={name} />\n{/if}\n\n<ul>\n  {#each todos as todo}\n  <li class:active={todo == active} class:inactive={todo.done}>\n    <input type="checkbox" bind:checked={todo.done} />\n    <span on:click={active=todo}>{$index}:  {todo.name}</span>\n    <a href on:click|preventDefault={remove($index)}>remove</a>\n  </li>\n  {/each}\n</ul>\n\nTotal done: {numDone()} of {todos.length}\n\n<style>\n  li {cursor: pointer;}\n  .active {background-color: #cfc;}\n  .inactive {text-decoration-line: line-through; color: gray;}\n</style>\n--\x3e\n\n\n\x3c!--\nname: Custom directive, actions, onMount\n\n<script>\n  let colors = ['red', 'blue', 'green', 'deeppink', 'brown'];\n  let list = [\n    {name: 'Linux', n: 0},\n    {name: 'MacOS', n: 1},\n    {name: 'Windows', n: 2},\n    {name: 'Ubuntu', n: 3},\n    {name: 'FreeBSD', n: 4}\n  ];\n\n  let div;\n\n  const color = (element, item, n) => {\n    // on mount action\n    function inc() {item.n++;}\n    element.addEventListener('click', inc);\n    element.style.color = colors[n];\n\n    return {\n      \n      // on update action\n      update: (item, n) => {\n        if(n < colors.length) {\n          element.style.color = colors[n];\n          div.style.backgroundColor = colors[n];\n        }\n        else list.splice(list.indexOf(item), 1);\n      },\n      \n      // on destroy action\n      destroy: () => {\n        element.removeEventListener('click', inc);\n      }\n    }\n  }\n\n  function onMount() {\n    // on mount component\n  }\n<\/script>\n\n<div use={div=$element}>Run code from html, e.g. save element into variable</div>\n\n<ul style="cursor: pointer; user-select: none;">\n  {#each list as it}\n  <li use:color={it, it.n}>{it.name} - {it.n}</li>\n  {/each}\n</ul>\n--\x3e`;p(m,e);d()})()}