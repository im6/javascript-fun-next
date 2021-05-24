(()=>{"use strict";const e=require("express"),t=require("react/jsx-runtime"),i=require("react-dom/server"),s=require("mysql"),{SQL_HOST:n,SQL_USERNAME:a,SQL_PASSWORD:c}=process.env,d=e=>new Promise(((t,i)=>{const d=(0,s.createConnection)({host:n,user:a,password:c,database:"baby_log"});d.query(e,((e,s)=>{e?i(e):t(s)})),d.end()})),o=({children:e,title:i,criticalCss:s})=>(0,t.jsxs)("html",Object.assign({lang:"en"},{children:[(0,t.jsxs)("head",{children:[(0,t.jsx)("title",{children:i},void 0),(0,t.jsx)("meta",{charSet:"utf-8"},void 0),(0,t.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"},void 0),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},void 0),s&&(0,t.jsx)("link",{rel:"stylesheet",href:"/static/style.css"},void 0)]},void 0),(0,t.jsxs)("body",{children:[e,!s&&(0,t.jsx)("script",{src:"/static/app.js",type:"text/javascript"},void 0)]},void 0)]}),void 0),r=require("react"),l=({allData:e,selected:i})=>(0,t.jsx)("div",Object.assign({className:"activity-chkbox-group"},{children:e.map((e=>(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"checkbox",id:`nav-chkbox-option-${e.id}`,name:"activity",value:e.id,defaultChecked:i.includes(e.id)},void 0),(0,t.jsx)("label",Object.assign({className:`badge badge-color-${e.id}`,htmlFor:`nav-chkbox-option-${e.id}`},{children:e.name}),void 0)]},e.id)))}),void 0),v=({allData:e,selected:i})=>(0,t.jsxs)("form",Object.assign({className:"nav-form",action:"/"},{children:[(0,t.jsx)(l,{allData:e,selected:i},void 0),(0,t.jsx)("input",{type:"submit",value:"🔍 Filter"},void 0)]}),void 0),m=({data:e,activityDef:i})=>{const s=i.reduce(((e,t)=>(e[t.id]=t.name,e)),{});return(0,t.jsx)("table",Object.assign({className:"activity-table"},{children:e.map((e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.time},void 0),(0,t.jsx)("td",{children:e.events.map((e=>(0,t.jsx)("span",Object.assign({className:`badge badge-color-${e}`},{children:s[e]}),e)))},void 0)]},e.time)))}),void 0)},h=({activityDefinition:e,selectedActivity:i,eventList:s})=>(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)("div",{children:(0,t.jsx)("a",Object.assign({href:"/create"},{children:(0,t.jsx)("button",Object.assign({type:"button",className:"create-btn"},{children:"➕ Create Event"}),void 0)}),void 0)},void 0),(0,t.jsxs)("div",Object.assign({className:"activity-layout"},{children:[(0,t.jsx)(v,{allData:e,selected:i},void 0),(0,t.jsx)(m,{data:s,activityDef:e},void 0)]}),void 0)]},void 0),j=()=>(0,t.jsx)("a",Object.assign({className:"back-link",href:"/"},{children:"Back to logs"}),void 0),u=({activityDefinition:e,selectedActivity:i,timeOptions:s})=>(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)(j,{},void 0),(0,t.jsxs)("form",Object.assign({action:"/create-event",method:"post"},{children:[(0,t.jsxs)("div",Object.assign({className:"create-layout"},{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",Object.assign({htmlFor:"event-time"},{children:(0,t.jsx)("h3",{children:"Time"},void 0)}),void 0),s.map((e=>{const i=`time-options-${e.id}`;return(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:i,name:"time",value:e.id,defaultChecked:e.isNow},void 0),(0,t.jsx)("label",Object.assign({className:"create-time",htmlFor:i},{children:e.name}),void 0)]},i)}))]},void 0),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",Object.assign({htmlFor:"selected-activity"},{children:(0,t.jsx)("h3",{children:"Activity"},void 0)}),void 0),(0,t.jsx)(l,{selected:i,allData:e},void 0)]},void 0)]}),void 0),(0,t.jsx)("input",{className:"create-btn",type:"submit",value:"🔼 Submit Event"},void 0)]}),void 0)]},void 0),x=({error:e})=>{const i=e?"failed":"succeed";return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)(j,{},void 0),(0,t.jsxs)("h4",{children:[(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:e?"&#10060;":"&#9989;"}},void 0),"  Creating event ",i,"."]},void 0)]},void 0)},y=require("date-fns"),p=[-100,-90,-80,-70,-60,-50,-40,-30,-20,-10,0,10,20],g=(e,t)=>{const i=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`,s=e.getMinutes(),n=s<10?`0${s}`:s;return{id:`${i} ${e.getHours()}:${n}:00`,name:`${e.getHours()}:${n}${t?" (now)":""}`,isNow:t}};var b=function(e,t,i,s){return new(i||(i=Promise))((function(n,a){function c(e){try{o(s.next(e))}catch(e){a(e)}}function d(e){try{o(s.throw(e))}catch(e){a(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(c,d)}o((s=s.apply(e,t||[])).next())}))};const f={"app.js":"./dist/client/index.js","style.css":"./dist/client/main.css"},O=e();O.use(e.urlencoded({extended:!0})),O.get("/static/:name",((e,t)=>{t.sendFile(f[e.params.name],{root:process.cwd()})})),O.get("/create",((e,s)=>b(void 0,void 0,void 0,(function*(){const e=(e=>{const t=e.getFullYear(),i=e.getMonth(),s=e.getDate(),n=e.getHours(),a=e.getMinutes(),c=10*Math.floor(a/10),d=c===a,o=new Date(t,i,s,n,a,0),r=new Date(t,i,s,n,c,0),l=p.map((e=>{const t=(0,y.add)(r,{minutes:e});return g(t,0===e&&d)}));if(!d){const e=p.indexOf(0)+1;l.splice(e,0,g(o,!0))}return l})(new Date),n=yield d("select * from activity_def"),a=(0,t.jsx)(o,Object.assign({title:"Create an event",criticalCss:!0},{children:(0,t.jsx)(u,{activityDefinition:n,selectedActivity:[],timeOptions:e},void 0)}),void 0),c=(0,i.renderToStaticMarkup)(a);s.status(200),s.send(`<!DOCTYPE html>${c}`)})))),O.post("/create-event",((e,s)=>b(void 0,void 0,void 0,(function*(){const{time:n,activity:a}=e.body;if(Array.isArray(a))a.forEach((e=>b(void 0,void 0,void 0,(function*(){const t=`INSERT INTO logs (event_time, activity_id, child_id) VALUES ('${n}', '${e}', 1)`;yield d(t)}))));else{if(!a){const e=(0,t.jsx)(o,Object.assign({title:"Failed",criticalCss:!0},{children:(0,t.jsx)(x,{error:!0},void 0)}),void 0),n=(0,i.renderToStaticMarkup)(e);return s.status(500),void s.send(`<!DOCTYPE html>${n}`)}{const e=`INSERT INTO logs (event_time, activity_id, child_id) VALUES ('${n}', '${a}', 1)`;yield d(e)}}const c=(0,t.jsx)(o,Object.assign({title:"Succeed",criticalCss:!0},{children:(0,t.jsx)(x,{error:!1},void 0)}),void 0),r=(0,i.renderToStaticMarkup)(c);s.status(200),s.send(`<!DOCTYPE html>${r}`)})))),O.get("/",((e,s)=>b(void 0,void 0,void 0,(function*(){const n=yield d("select * from activity_def");let a,c=null;const{activity:r}=e.query;Array.isArray(r)?(a=r.map((e=>parseInt(e,10))),c=`WHERE activity_id in (${a.join(",")})`):r?(a=[parseInt(r.toString(),10)],c=`WHERE activity_id = ${r}`):(a=n.map((e=>e.id)),c="");const l=`SELECT * FROM logs ${c} ORDER BY event_time DESC LIMIT 200`,v=yield d(l),m=new Set,j=v.reduce(((e,t)=>{const i=(s=t.event_time,(0,y.format)(s,"MM-dd hh:mm a"));var s;return m.add(i),i in e?e[i].push(t.activity_id):e[i]=[t.activity_id],e}),{}),u=Array.from(m).map((e=>({time:e,events:j[e]}))),x=(0,t.jsx)(o,Object.assign({title:"Baby Logs",criticalCss:!0},{children:(0,t.jsx)(h,{eventList:u,activityDefinition:n,selectedActivity:a},void 0)}),void 0),p=(0,i.renderToStaticMarkup)(x);s.status(200),s.send(`<!DOCTYPE html>${p}`)})))),O.listen(3001,(()=>{console.log("app is running on: http://localhost:3001")}))})();