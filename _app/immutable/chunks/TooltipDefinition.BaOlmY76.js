import{a as z,t as F,S as W,i as X}from"./index.BsY85XVg.js";import{r as Q,s as Y,o as J,A as G,e as I,a as Z,c as N,b as P,f as M,g as x,z as S,B as f,C as O,i as R,h as j,D as T,u as U,p as V,q as H,E as K,F as $,G as tt,I as D,J as et,t as ot,d as it,j as nt}from"./scheduler.Ld_AxXS4.js";import{g as st}from"./spread.CgU5AtxT.js";function ht(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function pt(t,n){z(t,1,1,()=>{n.delete(t.key)})}function _t(t,n,e,b,c,a,h,E,p,u,_,k){let l=t.length,r=a.length,d=l;const i={};for(;d--;)i[t[d].key]=d;const s=[],v=new Map,y=new Map,A=[];for(d=r;d--;){const o=k(c,a,d),m=e(o);let g=h.get(m);g?b&&A.push(()=>g.p(o,n)):(g=u(m,o),g.c()),v.set(m,s[d]=g),m in i&&y.set(m,Math.abs(d-i[m]))}const q=new Set,B=new Set;function w(o){F(o,1),o.m(E,_),h.set(o.key,o),_=o.first,r--}for(;l&&r;){const o=s[r-1],m=t[l-1],g=o.key,C=m.key;o===m?(_=o.first,l--,r--):v.has(C)?!h.has(g)||q.has(g)?w(o):B.has(C)?l--:y.get(g)>y.get(C)?(B.add(g),w(o)):(q.add(C),l--):(p(m,h),l--)}for(;l--;){const o=t[l];v.has(o.key)||p(o,h)}for(;r;)w(s[r-1]);return Q(A),s}const lt=t=>({}),L=t=>({});function at(t){let n;return{c(){n=ot(t[2])},l(e){n=it(e,t[2])},m(e,b){R(e,n,b)},p(e,b){b&4&&nt(n,e[2])},d(e){e&&M(n)}}}function ft(t){let n,e,b,c,a,h,E;const p=t[10].default,u=J(p,t,t[9],null),_=t[10].tooltip,k=J(_,t,t[9],L),l=k||at(t);let r=[t[8]],d={};for(let i=0;i<r.length;i+=1)d=G(d,r[i]);return{c(){n=I("span"),e=I("button"),u&&u.c(),b=Z(),c=I("div"),l&&l.c(),this.h()},l(i){n=N(i,"SPAN",{});var s=P(n);e=N(s,"BUTTON",{type:!0,"aria-describedby":!0});var v=P(e);u&&u.l(v),v.forEach(M),b=x(s),c=N(s,"DIV",{role:!0,id:!0});var y=P(c);l&&l.l(y),y.forEach(M),s.forEach(M),this.h()},h(){S(e,"type","button"),S(e,"aria-describedby",t[5]),f(e,"bx--tooltip--a11y",!0),f(e,"bx--tooltip__trigger",!0),f(e,"bx--tooltip__trigger--definition",!0),f(e,"bx--tooltip--hidden",!t[0]),f(e,"bx--tooltip--visible",t[0]),f(e,"bx--tooltip--top",t[4]==="top"),f(e,"bx--tooltip--bottom",t[4]==="bottom"),f(e,"bx--tooltip--align-start",t[3]==="start"),f(e,"bx--tooltip--align-center",t[3]==="center"),f(e,"bx--tooltip--align-end",t[3]==="end"),S(c,"role","tooltip"),S(c,"id",t[5]),f(c,"bx--assistive-text",!0),O(n,d),f(n,"bx--tooltip--definition",!0),f(n,"bx--tooltip--a11y",!0)},m(i,s){R(i,n,s),j(n,e),u&&u.m(e,null),t[17](e),j(n,b),j(n,c),l&&l.m(c,null),a=!0,h||(E=[T(window,"keydown",t[16]),T(e,"click",t[11]),T(e,"mouseover",t[12]),T(e,"mouseenter",t[13]),T(e,"mouseleave",t[14]),T(e,"focus",t[15]),T(e,"focus",t[7]),T(e,"blur",t[6]),T(n,"mouseenter",t[7]),T(n,"mouseleave",t[6])],h=!0)},p(i,[s]){u&&u.p&&(!a||s&512)&&U(u,p,i,i[9],a?H(p,i[9],s,null):V(i[9]),null),(!a||s&32)&&S(e,"aria-describedby",i[5]),(!a||s&1)&&f(e,"bx--tooltip--hidden",!i[0]),(!a||s&1)&&f(e,"bx--tooltip--visible",i[0]),(!a||s&16)&&f(e,"bx--tooltip--top",i[4]==="top"),(!a||s&16)&&f(e,"bx--tooltip--bottom",i[4]==="bottom"),(!a||s&8)&&f(e,"bx--tooltip--align-start",i[3]==="start"),(!a||s&8)&&f(e,"bx--tooltip--align-center",i[3]==="center"),(!a||s&8)&&f(e,"bx--tooltip--align-end",i[3]==="end"),k?k.p&&(!a||s&512)&&U(k,_,i,i[9],a?H(_,i[9],s,lt):V(i[9]),L):l&&l.p&&(!a||s&4)&&l.p(i,a?s:-1),(!a||s&32)&&S(c,"id",i[5]),O(n,d=st(r,[s&256&&i[8]])),f(n,"bx--tooltip--definition",!0),f(n,"bx--tooltip--a11y",!0)},i(i){a||(F(u,i),F(l,i),a=!0)},o(i){z(u,i),z(l,i),a=!1},d(i){i&&M(n),u&&u.d(i),t[17](null),l&&l.d(i),h=!1,Q(E)}}}function ut(t,n,e){const b=["tooltipText","open","align","direction","id","ref"];let c=K(n,b),{$$slots:a={},$$scope:h}=n,{tooltipText:E=""}=n,{open:p=!1}=n,{align:u="center"}=n,{direction:_="bottom"}=n,{id:k="ccs-"+Math.random().toString(36)}=n,{ref:l=null}=n;const r=$(),d=()=>e(0,p=!1),i=()=>e(0,p=!0);function s(o){D.call(this,t,o)}function v(o){D.call(this,t,o)}function y(o){D.call(this,t,o)}function A(o){D.call(this,t,o)}function q(o){D.call(this,t,o)}const B=({key:o})=>{o==="Escape"&&d()};function w(o){et[o?"unshift":"push"](()=>{l=o,e(1,l)})}return t.$$set=o=>{n=G(G({},n),tt(o)),e(8,c=K(n,b)),"tooltipText"in o&&e(2,E=o.tooltipText),"open"in o&&e(0,p=o.open),"align"in o&&e(3,u=o.align),"direction"in o&&e(4,_=o.direction),"id"in o&&e(5,k=o.id),"ref"in o&&e(1,l=o.ref),"$$scope"in o&&e(9,h=o.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&r(p?"open":"close")},[p,l,E,u,_,k,d,i,c,h,a,s,v,y,A,q,B,w]}class dt extends W{constructor(n){super(),X(this,n,ut,ft,Y,{tooltipText:2,open:0,align:3,direction:4,id:5,ref:1})}}const mt=dt;export{mt as T,ht as e,pt as o,_t as u};
