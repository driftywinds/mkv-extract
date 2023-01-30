function U(m,s){for(var a=0;a<s.length;a++){const i=s[a];if(typeof i!="string"&&!Array.isArray(i)){for(const d in i)if(d!=="default"&&!(d in m)){const w=Object.getOwnPropertyDescriptor(i,d);w&&Object.defineProperty(m,d,w.get?w:{enumerable:!0,get:()=>i[d]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var y={},A={get exports(){return y},set exports(m){y=m}};/*! streamsaver. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */(function(m){((s,a)=>{m.exports=a()})("streamSaver",()=>{const s=typeof window=="object"?window:this;s.HTMLElement||console.warn("streamsaver is meant to run on browsers main thread");let a=null,i=!1;const d=n=>{try{n()}catch{}},w=s.WebStreamsPolyfill||{},v=s.isSecureContext;let u=/constructor/i.test(s.HTMLElement)||!!s.safari||!!s.WebKitPoint;const E=v||"MozAppearance"in document.documentElement.style?"iframe":"navigate",p={createWriteStream:W,WritableStream:s.WritableStream||w.WritableStream,supported:!0,version:{full:"2.0.5",major:2,minor:0,dot:5},mitm:"https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0"};function M(n){if(!n)throw new Error("meh");const e=document.createElement("iframe");return e.hidden=!0,e.src=n,e.loaded=!1,e.name="iframe",e.isIframe=!0,e.postMessage=(...l)=>e.contentWindow.postMessage(...l),e.addEventListener("load",()=>{e.loaded=!0},{once:!0}),document.body.appendChild(e),e}function j(n){const e="width=200,height=100",l=document.createDocumentFragment(),r={frame:s.open(n,"popup",e),loaded:!1,isIframe:!1,isPopup:!0,remove(){r.frame.close()},addEventListener(...t){l.addEventListener(...t)},dispatchEvent(...t){l.dispatchEvent(...t)},removeEventListener(...t){l.removeEventListener(...t)},postMessage(...t){r.frame.postMessage(...t)}},g=t=>{t.source===r.frame&&(r.loaded=!0,s.removeEventListener("message",g),r.dispatchEvent(new Event("load")))};return s.addEventListener("message",g),r}try{new Response(new ReadableStream),v&&!("serviceWorker"in navigator)&&(u=!0)}catch{u=!0}d(()=>{const{readable:n}=new TransformStream,e=new MessageChannel;e.port1.postMessage(n,[n]),e.port1.close(),e.port2.close(),i=!0,Object.defineProperty(p,"TransformStream",{configurable:!1,writable:!1,value:TransformStream})});function C(){a||(a=v?M(p.mitm):j(p.mitm))}function W(n,e,l){let r={size:null,pathname:null,writableStrategy:void 0,readableStrategy:void 0},g=0,t=null,o=null,h=null;if(Number.isFinite(e)?([l,e]=[e,l],console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),r.size=l,r.writableStrategy=e):e&&e.highWaterMark?(console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),r.size=l,r.writableStrategy=e):r=e||{},!u){C(),o=new MessageChannel,n=encodeURIComponent(n.replace(/\//g,":")).replace(/['()]/g,escape).replace(/\*/g,"%2A");const c={transferringReadable:i,pathname:r.pathname||Math.random().toString().slice(-6)+"/"+n,headers:{"Content-Type":"application/octet-stream; charset=utf-8","Content-Disposition":"attachment; filename*=UTF-8''"+n}};r.size&&(c.headers["Content-Length"]=r.size);const b=[c,"*",[o.port2]];if(i){const f=E==="iframe"?void 0:{transform(T,P){if(!(T instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");g+=T.length,P.enqueue(T),t&&(location.href=t,t=null)},flush(){t&&(location.href=t)}};h=new p.TransformStream(f,r.writableStrategy,r.readableStrategy);const L=h.readable;o.port1.postMessage({readableStream:L},[L])}o.port1.onmessage=f=>{f.data.download?E==="navigate"?(a.remove(),a=null,g?location.href=f.data.download:t=f.data.download):(a.isPopup&&(a.remove(),a=null,E==="iframe"&&M(p.mitm)),M(f.data.download)):f.data.abort&&(S=[],o.port1.postMessage("abort"),o.port1.onmessage=null,o.port1.close(),o.port2.close(),o=null)},a.loaded?a.postMessage(...b):a.addEventListener("load",()=>{a.postMessage(...b)},{once:!0})}let S=[];return!u&&h&&h.writable||new p.WritableStream({write(c){if(!(c instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");if(u){S.push(c);return}o.port1.postMessage(c),g+=c.length,t&&(location.href=t,t=null)},close(){if(u){const c=new Blob(S,{type:"application/octet-stream; charset=utf-8"}),b=document.createElement("a");b.href=URL.createObjectURL(c),b.download=n,b.click()}else o.port1.postMessage("end")},abort(){S=[],o.port1.postMessage("abort"),o.port1.onmessage=null,o.port1.close(),o.port2.close(),o=null}},r.writableStrategy)}return p})})(A);const x=y,O=U({__proto__:null,default:x},[y]);export{O as S};
