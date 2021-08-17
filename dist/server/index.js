(()=>{"use strict";var e={n:i=>{var t=i&&i.__esModule?()=>i.default:()=>i;return e.d(t,{a:t}),t},d:(i,t)=>{for(var s in t)e.o(t,s)&&!e.o(i,s)&&Object.defineProperty(i,s,{enumerable:!0,get:t[s]})},o:(e,i)=>Object.prototype.hasOwnProperty.call(e,i)};const i=require("express"),t=require("react/jsx-runtime"),s=require("react-dom/server"),a=require("mysql"),{SQL_HOST:d,SQL_USERNAME:n,SQL_PASSWORD:c}=process.env,o=(e,i)=>new Promise(((t,s)=>{const o=(0,a.createConnection)({host:d,user:n,password:c,database:"baby_log"});o.query(e,i,((e,i)=>{e?s(e):t(i)})),o.end()})),r=({children:e,title:i,criticalCss:s})=>(0,t.jsxs)("html",Object.assign({lang:"en"},{children:[(0,t.jsxs)("head",{children:[(0,t.jsx)("title",{children:i},void 0),(0,t.jsx)("meta",{charSet:"utf-8"},void 0),(0,t.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"},void 0),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},void 0),(0,t.jsx)("link",{rel:"shortcut icon",href:"data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAABAREQAQEREAEBERABAREQBQEREBRM9XQKSQwAMs1gEhbpqCXU0KyUKAC1xAlpPNABAREQAQEREAUBERAVAREQDQEREAkBERANAREQAfF9FAAAiTAJ7UUEUwlwFgc9hA/TrfQbty2wGbmFOLhEJMF0EalUyAEBERABAREQDQEREBUBERAJAREQIQEREBd95VADBc2sR3nEmk95pBvfWYwP/9XQB//V2AfHleAeJj2coGAApYgRzUzAAQEREAEBERAFAREQAQUVEBCk4QAqcamcT34IwlPd8CfrubwH/12UE/+JpAv/oawD/5m0B99twB46SYSYXAC5kBG9PMABAREQAAAAAAKp7WQCZcWkUy4s5meuQE/r6hAX/93QB/9lnEOXKYgriz18D/9JgAv/SYQL30WYFjpZcIxgAL2QD2WsHAJxsowCFWtUMxpVOkeOmHProlxL/84gJ/+10FN7NYjZIvGMNRLpZB9m5VAT/u1QD/75WA/fLXwWMoV8jFAAQlQF6VbINhkLFgKJdkvfZnir/6qAS/92DH+DFaD1M//8AAIMAFgC4WQhEqk4H2aNJBf+xTwT/12MC9d1pBICuYRoPhU27iIU8t/SGOb7/oluM/86JPOS/dEJMES9SCTlDQgX/qAAAAAAPAK5RBkSkSgvfyFwD/9pkAf/TYwPzz2oGhoWN1XWFh9XthXXR/4do0v+Ma8vhiFvWQiQsFwM+REEMPkRFBYIS/wCcOGg5mTV12chXLv/xdAH/8YEG7eiIC3SFwegGhpLebIaA2PGFedT/h3HZ/4pf2NeJStJBKTcfAylEGgmQQW09jjanzocwvP+XPJ3/1mYy8fOCBG32oRAGhYTbAIWI2wiHgdyHh3rZ+IZr1P+JXdj/ikzX14k6x0GJR3g8iUa00YlDzv+KRNP/jkTJ9KtRhH6PXg8PABxlAkBERAIMGwABhXfbDolx3IyIZtj4h1fT/4lI1P+JPcTdi1TE14lY1/+HV9T/jFfP9KJYpH7cZi8KFjpBA0BERAVAREQCQERECCc1GQSLZ9oOil/ajIlS1/iHQ8v/hz3D/4lm2P+Kbtz/imvQ9JNjm4SjWjEOnV1ZAEBERABAREQBQEREAEBERARAREQLKTsbBIta2w6KTdaKiD7H9oU7uv+HeNb/iH/W8JNyqHuQVioOMT8/CkFERAVAREQAQEREAEBERABAREQAQEREBEBERAgmRw4Cd0W4DHw1sH+EObb1gYLN7m93s2x0PiUHcllzAEBERARAREQIQEREA0BERAAAAAAAQEREAEBERABAREQCQEREAm4onwBdJYINdTihh2tsqXYgOz0IQ1FwAEBERABAREQAQEREAkBERAJAREQAIAgAAAAAAAAQAAAAgAEAAMAAAACAAAAAAYAAAADAAAAAQAAAAAAAAIAAAAAAAAAAAAQAAIABAACAEQAAxDAAAA=="},void 0),s&&(0,t.jsx)("link",{rel:"stylesheet",href:"/static/style.css"},void 0)]},void 0),(0,t.jsxs)("body",{children:[e,!s&&(0,t.jsx)("script",{src:"/static/app.js",type:"text/javascript"},void 0)]},void 0)]}),void 0),A=require("react"),l=require("classnames");var v=e.n(l);const E={badge:"_Aamr","badge-color-1":"Etd84","badge-color-2":"tDFBL","badge-color-3":"u8Jx4","badge-color-4":"KCZs9","badge-color-5":"_jSMN","badge-color-6":"YCZP9"},m=({activityId:e,text:i})=>(0,t.jsx)("span",Object.assign({className:`${E.badge} ${E[`badge-color-${e}`]}`},{children:i}),void 0),h=({allData:e,selected:i,showTwoCol:s})=>{const a=v()("m_a5h",{XB1uK:s});return(0,t.jsx)("div",Object.assign({className:a},{children:e.map((e=>(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"checkbox",id:`nav-chkbox-option-${e.id}`,name:"activity",value:e.id,defaultChecked:i.includes(e.id)},void 0),(0,t.jsx)("label",Object.assign({htmlFor:`nav-chkbox-option-${e.id}`},{children:(0,t.jsx)(m,{activityId:e.id,text:e.name},void 0)}),void 0)]},e.id)))}),void 0)},j=({allData:e,selected:i})=>(0,t.jsxs)("form",Object.assign({className:"_fVc5",action:"/"},{children:[(0,t.jsx)(h,{showTwoCol:!0,allData:e,selected:i},void 0),(0,t.jsx)("input",{type:"submit",value:"🔍 Filter"},void 0)]}),void 0),g=({data:e})=>(0,t.jsx)("table",Object.assign({className:"TXs1J"},{children:e.map((e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.time},void 0),(0,t.jsx)("td",{children:e.events.map((e=>(0,t.jsx)("a",Object.assign({href:`/delete-confirm/${e.id}`},{children:(0,t.jsx)(m,{activityId:e.activity_id,text:e.activity_name},void 0)}),e.id)))},void 0)]},e.time)))}),void 0),u=({type:e,children:i})=>(0,t.jsx)("button",Object.assign({type:e,className:"_qmzl"},{children:i}),void 0),x=({activityDefinition:e,selectedActivity:i,eventList:s})=>(0,t.jsxs)(A.Fragment,{children:[(0,t.jsx)("div",{children:(0,t.jsx)("a",Object.assign({href:"/create"},{children:(0,t.jsx)(u,Object.assign({type:"button"},{children:"➕ Create Event"}),void 0)}),void 0)},void 0),(0,t.jsxs)("div",Object.assign({className:"n3eo5"},{children:[(0,t.jsx)(j,{allData:e,selected:i},void 0),(0,t.jsx)(g,{data:s},void 0)]}),void 0)]},void 0),y=()=>(0,t.jsx)("a",Object.assign({className:"b782w",href:"/"},{children:"Back to logs"}),void 0),p=({activityDefinition:e,selectedActivity:i,timeOptions:s})=>(0,t.jsxs)(A.Fragment,{children:[(0,t.jsx)(y,{},void 0),(0,t.jsxs)("form",Object.assign({action:"/create-event",method:"post"},{children:[(0,t.jsxs)("div",Object.assign({className:"UW9i5"},{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",Object.assign({htmlFor:"event-time"},{children:"Time"}),void 0),(0,t.jsx)("div",Object.assign({className:"rtykI"},{children:s.map((e=>{const i=`time-options-${e.id}`;return(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:i,name:"time",value:e.id,defaultChecked:e.isNow},void 0),(0,t.jsx)("label",Object.assign({className:"_bga0",htmlFor:i},{children:e.name}),void 0)]},i)}))}),void 0)]},void 0),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",Object.assign({htmlFor:"selected-activity"},{children:"Activity"}),void 0),(0,t.jsx)(h,{selected:i,allData:e,showTwoCol:!1},void 0)]},void 0)]}),void 0),(0,t.jsx)(u,Object.assign({type:"submit"},{children:"🔼 Submit Event"}),void 0)]}),void 0)]},void 0),b=require("date-fns"),R=[-400,10],f=(e,i)=>{const t=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`,s=e.getMinutes(),a=s<10?`0${s}`:s;return{id:`${t} ${e.getHours()}:${a}:00`,name:`${e.getHours()}:${a}${i?" (now)":""}`,isNow:i}},O=e=>(0,b.format)(e,"MM-dd hh:mm a"),Q=({id:e,event_time:i,activity_id:s,activity_name:a})=>(0,t.jsxs)(A.Fragment,{children:[(0,t.jsx)(y,{},void 0),(0,t.jsxs)("form",Object.assign({action:"/delete-event",method:"post"},{children:[(0,t.jsxs)("div",Object.assign({className:"_KIe2"},{children:[(0,t.jsxs)("h3",{children:["✋ Are you sure you want to DELETE ",(0,t.jsx)(m,{activityId:s,text:a},void 0)," at ",(0,t.jsx)("u",{children:O(i)},void 0),"?"]},void 0),(0,t.jsx)("input",{type:"hidden",name:"id",value:e},void 0)]}),void 0),(0,t.jsx)(u,Object.assign({type:"submit"},{children:"⛔ Delete Event"}),void 0)]}),void 0)]},void 0),B=({message:e,error:i})=>(0,t.jsxs)(A.Fragment,{children:[(0,t.jsx)(y,{},void 0),(0,t.jsxs)("h4",{children:[(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:i?"&#10060;":"&#9989;"}},void 0),"  ",e,"."]},void 0)]},void 0);var C=function(e,i,t,s){return new(t||(t=Promise))((function(a,d){function n(e){try{o(s.next(e))}catch(e){d(e)}}function c(e){try{o(s.throw(e))}catch(e){d(e)}}function o(e){var i;e.done?a(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(n,c)}o((s=s.apply(e,i||[])).next())}))};const T={"app.js":"./dist/client/index.js","style.css":"./dist/client/main.css"},w=i();w.use(i.urlencoded({extended:!0})),w.get("/create",((e,i)=>C(void 0,void 0,void 0,(function*(){const e=(e=>{const i=e.getFullYear(),t=e.getMonth(),s=e.getDate(),a=e.getHours(),d=e.getMinutes(),n=10*Math.floor(d/10),c=n===d,o=new Date(i,t,s,a,d,0),r=new Date(i,t,s,a,n,0),A=[];for(let e=R[1];e>=R[0];e-=10)A.push(e);const l=A.map((e=>{const i=(0,b.add)(r,{minutes:e});return f(i,0===e&&c)}));if(!c){const e=A.indexOf(0);l.splice(e,0,f(o,!0))}return l})(new Date),a=yield o("select * from activity_def"),d=(0,t.jsx)(r,Object.assign({title:"Create an event",criticalCss:!0},{children:(0,t.jsx)(p,{activityDefinition:a,selectedActivity:[],timeOptions:e},void 0)}),void 0),n=(0,s.renderToStaticMarkup)(d);i.status(200),i.send(`<!DOCTYPE html>${n}`)})))),w.get("/delete-confirm/:id",((e,i)=>C(void 0,void 0,void 0,(function*(){const a=yield o("SELECT\n      a1.*, a2.name as activity_name\n    FROM logs a1 LEFT JOIN activity_def a2\n      ON a1.activity_id = a2.id\n    WHERE a1.id = ?",[e.params.id]);if(1!==a.length)return void i.redirect("/error");const d=a[0],n={id:parseInt(e.params.id,10),event_time:d.event_time,activity_id:d.activity_id,activity_name:d.activity_name,activity_value:d.activity_value,child_id:d.child_id},c=(0,t.jsx)(r,Object.assign({title:"Delete an event activity",criticalCss:!0},{children:(0,t.jsx)(Q,Object.assign({},n),void 0)}),void 0),A=(0,s.renderToStaticMarkup)(c);i.status(200),i.send(`<!DOCTYPE html>${A}`)})))),w.post("/create-event",((e,i)=>C(void 0,void 0,void 0,(function*(){const{time:a,activity:d}=e.body;if(Array.isArray(d))d.forEach((e=>C(void 0,void 0,void 0,(function*(){yield o("INSERT INTO logs (event_time, activity_id, child_id) VALUES (?, ?, ?)",[a,e,1])}))));else{if(!d){const e=(0,t.jsx)(r,Object.assign({title:"Failed",criticalCss:!0},{children:(0,t.jsx)(B,{message:"Creating event failed",error:!0},void 0)}),void 0),a=(0,s.renderToStaticMarkup)(e);return i.status(500),void i.send(`<!DOCTYPE html>${a}`)}yield o("INSERT INTO logs (event_time, activity_id, child_id) VALUES (?, ?, ?)",[a,d,1])}const n=(0,t.jsx)(r,Object.assign({title:"Succeed",criticalCss:!0},{children:(0,t.jsx)(B,{message:"Creating event succeeded",error:!1},void 0)}),void 0),c=(0,s.renderToStaticMarkup)(n);i.status(200),i.send(`<!DOCTYPE html>${c}`)})))),w.post("/delete-event",((e,i)=>C(void 0,void 0,void 0,(function*(){try{yield o("DELETE from logs WHERE id = ?",[e.body.id]);const a=(0,t.jsx)(r,Object.assign({title:"Successfully ",criticalCss:!0},{children:(0,t.jsx)(B,{message:"Deleting event succeeded",error:!1},void 0)}),void 0),d=(0,s.renderToStaticMarkup)(a);i.status(200),i.send(`<!DOCTYPE html>${d}`)}catch(e){const a=(0,t.jsx)(r,Object.assign({title:"Failed",criticalCss:!0},{children:(0,t.jsx)(B,{message:"Deleting event failed",error:!0},void 0)}),void 0),d=(0,s.renderToStaticMarkup)(a);i.status(500),i.send(`<!DOCTYPE html>${d}`)}})))),w.get("/error",((e,i)=>{const a=(0,t.jsx)(r,Object.assign({title:"Failed",criticalCss:!0},{children:(0,t.jsx)(B,{message:"Bad Request",error:!0},void 0)}),void 0),d=(0,s.renderToStaticMarkup)(a);i.status(400),i.send(`<!DOCTYPE html>${d}`)})),w.get("/static/:name",((e,i)=>{i.sendFile(T[e.params.name],{root:process.cwd()})})),w.get("/",((e,i)=>C(void 0,void 0,void 0,(function*(){const a=yield o("select * from activity_def"),d=a.reduce(((e,i)=>(e[i.id]=i,e)),{});let n,c=null;const{activity:A}=e.query;Array.isArray(A)?(n=A.map((e=>parseInt(e,10))),c=`WHERE activity_id in (${n.join(",")})`):A?(n=[parseInt(A.toString(),10)],c=`WHERE activity_id = ${A}`):(n=a.map((e=>e.id)),c="");const l=`SELECT * FROM logs ${c} ORDER BY event_time DESC LIMIT 100`,v=yield o(l),E=new Set,m={};v.forEach((e=>{const i=O(e.event_time);i in m?m[i].push(Object.assign({activity_name:d[e.activity_id].name},e)):m[i]=[Object.assign({activity_name:d[e.activity_id].name},e)],E.add(i)}),{});const h=Array.from(E).map((e=>({time:e,events:m[e]}))),j=(0,t.jsx)(r,Object.assign({title:"Baby Logs",criticalCss:!0},{children:(0,t.jsx)(x,{eventList:h,activityDefinition:a,selectedActivity:n},void 0)}),void 0),g=(0,s.renderToStaticMarkup)(j);i.status(200),i.send(`<!DOCTYPE html>${g}`)})))),w.listen(3001,(()=>{console.log("app is running on: http://localhost:3001")}))})();