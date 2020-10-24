(this["webpackJsonpclear-the-fridge-v2"]=this["webpackJsonpclear-the-fridge-v2"]||[]).push([[0],{29:function(e,t,l){},61:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l(2),i=l.n(n),s=l(14),r=l.n(s),o=(l(29),l(15)),c=l(16),d=l(23),u=l(21),b=l(22),j=l(7),x=l(5),h=l(8),m=l(17),v=l.n(m),f=[{name:"Vegan",value:"vegan"},{name:"Vegetarian",value:"vegetarian"},{name:"Sugar Conscious",value:"sugar-conscious"},{name:"Peanut Free",value:"peanut-free"},{name:"Tree-nut Free",value:"tree-nut-free"},{name:"Alcohol Free",value:"alcohol-free"}],p=function(e){var t=e.callback,l=Object(n.useState)(void 0),i=Object(h.a)(l,2),s=i[0],r=i[1],o=function(e){return r(Object(x.a)(Object(x.a)({},s),{},Object(j.a)({},e.currentTarget.name,e.currentTarget.value)))},c=Object(n.useReducer)((function(e,t){var l=t.type,a=t.value;switch(l){case"add":return[].concat(Object(b.a)(e),[a]);case"remove":return v()(e,a);default:return e}}),[]),d=Object(h.a)(c,2),u=d[0],m=d[1];function p(e){var t=u.map((function(e){return"health=".concat(e,"&")})).toString(),l={app_key:"112f88722937558772de9b30b52b63ed",app_id:"c8b6b757"};return""===e.textInput&&void 0===e.textInput||(l.q=e.textInput),""!==e.dietInput&&void 0!==e.dietInput&&(l.diet=e.dietInput),"https://api.edamam.com/search?"+t+Object.keys(l).map((function(e){return"".concat(e,"=").concat(l[e])})).join("&")}return Object(a.jsx)("div",{className:"max-w-lg flex p-6 bg-gray-100 mt-10 rounded-lg shadow-md mx-auto",children:Object(a.jsxs)("div",{className:"pt-1",children:[Object(a.jsx)("h1",{className:"text-xl text-blue-700 leading-tight",children:"What do you want to use up?"}),Object(a.jsx)("p",{className:"text-base text-gray-700 leading-normal",children:"Type in the ingredients you're looking to clear out from your kitchen, select a diet and click search."}),Object(a.jsxs)("form",{className:"mx-auto",children:[Object(a.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(a.jsx)("input",{className:"rounded-sm border border-gray-600",name:"textInput",type:"text",placeholder:"Chicken, rice",id:"search-term",required:!0,onChange:o}),Object(a.jsxs)("select",{className:"rounded-sm border-gray-600 border",name:"dietInput",onChange:o,children:[Object(a.jsx)("option",{value:"",defaultValue:!0,children:"Diet"}),Object(a.jsx)("option",{value:"balanced",children:"Balanced"}),Object(a.jsx)("option",{value:"high-protein",children:"High-Protein"}),Object(a.jsx)("option",{value:"low-carb",children:"Low-Carb"}),Object(a.jsx)("option",{value:"low-fat",children:"Low-Fat"})]}),Object(a.jsx)("input",{type:"submit",value:"Search",className:"rounded-sm border-gray-600 border",onClick:function(e){return e.preventDefault(),void 0===s||void 0===s.textInput||""===s.textInput?(alert("You need to enter something into the text field."),null):(function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return t(e)}))}(p(s)),p(s))}})]}),Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("legend",{className:"text-lg",children:"Optional health choices:"}),Object(a.jsx)("div",{className:"grid grid-flow-col grid-cols-2 grid-rows-3",children:f.map((function(e){return Object(a.jsxs)("div",{className:"inline",children:[Object(a.jsx)("input",{className:"mx-1",type:"checkbox",name:e.value,value:e.value,id:e.value,onChange:function(){return m({type:u.includes(e.value)?"remove":"add",value:e.value})}}),Object(a.jsx)("label",{className:"text-base text-gray-700 leading-normal",htmlFor:e.value,children:e.name})]},e.value)}))})]})]})]})})};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var g=n.createElement("path",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",d:"M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z",fill:"#2b6cb0"});function w(e,t){var l=e.title,a=e.titleId,i=y(e,["title","titleId"]);return n.createElement("svg",O({fill:"none",viewBox:"0 0 24 24",height:20,width:20,ref:t,"aria-labelledby":a},i),l?n.createElement("title",{id:a},l):null,g)}var N=n.forwardRef(w),C=(l.p,function(e){var t,l,n,i,s,r,o,c,d,u,b,j,x,h,m,v,f,p,O,y,g,w,C,k,D,F,T,A,M,q,I,S,R,V,H,P,E,B,L,G,K,W,_=function(e,t){return e.length<t?e:e.slice(0,t).concat("...")},J=e.calories/e.yield,U=window.screen.width<639?4:9,Z=e.ingredientLines.length-U,Y=e.ingredientLines.slice(0,U);return Object(a.jsx)("div",{className:"group flip h-64 min-w-full max-w-lg my-6 mx-auto",children:Object(a.jsxs)("div",{className:"flip-content min-h-full h-64 min-w-full max-w-lg relative group-hover:transformation rounded-lg shadow-md",children:[Object(a.jsxs)("div",{className:"flip-card-front absolute min-h-full h-64 min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md flex flex-row",children:[Object(a.jsx)("img",{className:"h-64 rounded-lg",src:e.image,alt:e.label}),Object(a.jsxs)("ul",{className:"grid sm:grid-cols-1 grid-cols-2 grid-rows-5 gap-1 p-1 grid-flow-row max-w-md",children:[Y.map((function(e,t){return Object(a.jsx)("li",{className:"text-sm text-left row-span-1",children:_(e,25)},t)})),Z>0?Object(a.jsxs)("li",{className:"text-sm text-left row-span-1",children:["and ",Z," more ingredients..."]}):null]})]}),Object(a.jsxs)("div",{className:"flip-card-back absolute min-h-full min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md",children:[Object(a.jsx)("h1",{className:"text-xl text-blue-700 leading-tight",children:Object(a.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[_(e.label,35),Object(a.jsx)(N,{className:"inline text-blue-700 mb-1"})]})}),Object(a.jsxs)("div",{className:"flex flex-col flex-wrap h-56 pt-1 text-left pl-8 sm:pl-.8",children:[Object(a.jsx)("div",{className:"w-5/12 sm:w-45",children:Object(a.jsx)("h1",{className:"text-xl font-extrabold border-b border-black leading-none",children:"Nutrition Facts"})}),Object(a.jsxs)("div",{className:"text-xs border-b-8 border-black w-5/12 sm:w-45",children:["Serves about ",e.yield]}),Object(a.jsxs)("div",{className:"flex flex-row w-5/12 sm:w-45 justify-between border-b border-black",children:[Object(a.jsxs)("div",{className:"flex flex-col",children:[Object(a.jsx)("p",{className:"text-xs font-extrabold",children:"Amount Per Serving"}),Object(a.jsx)("p",{className:"text-lg font-extrabold leading-none",children:"Calories"})]}),Object(a.jsx)("p",{className:"text-3xl self-end font-extrabold leading-none",children:Math.round(J)})]}),Object(a.jsxs)("p",{className:"w-5/12 sm:w-45 text-right text-xs font-extrabold border-b border-black",children:["% Daily Value",Object(a.jsx)("span",{className:"text-sm",children:"*"})]}),Object(a.jsxs)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"font-extrabold",children:"Total Fat"})," ",Math.round((null===(t=e.totalNutrients.FAT)||void 0===t?void 0:t.quantity)/e.yield),null===(l=e.totalNutrients.FAT)||void 0===l?void 0:l.unit]}),Object(a.jsxs)("span",{children:[Math.round((null===(n=e.totalDaily.FAT)||void 0===n?void 0:n.quantity)/e.yield),null===(i=e.totalDaily.FAT)||void 0===i?void 0:i.unit]})]}),Object(a.jsxs)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"italic",children:"Saturated fat"})," ",Math.round((null===(s=e.totalNutrients.FASAT)||void 0===s?void 0:s.quantity)/e.yield),null===(r=e.totalNutrients.FASAT)||void 0===r?void 0:r.unit]}),Object(a.jsxs)("span",{children:[Math.round((null===(o=e.totalDaily.FASAT)||void 0===o?void 0:o.quantity)/e.yield),null===(c=e.totalDaily.FASAT)||void 0===c?void 0:c.unit]})]}),Object(a.jsx)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2",children:Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"italic",children:"Trans fat"})," ",Math.round((null===(d=e.totalNutrients.FATRN)||void 0===d?void 0:d.quantity)/e.yield),null===(u=e.totalNutrients.FATRN)||void 0===u?void 0:u.unit]})}),Object(a.jsxs)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"font-extrabold",children:"Sodium"})," ",Math.round((null===(b=e.totalNutrients.NA)||void 0===b?void 0:b.quantity)/e.yield),null===(j=e.totalNutrients.NA)||void 0===j?void 0:j.unit]}),Object(a.jsxs)("span",{children:[Math.round((null===(x=e.totalDaily.NA)||void 0===x?void 0:x.quantity)/e.yield),null===(h=e.totalDaily.NA)||void 0===h?void 0:h.unit]})]}),Object(a.jsxs)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"font-extrabold",children:"Total Carbohydrate"})," ",Math.round((null===(m=e.totalNutrients.CHOCDF)||void 0===m?void 0:m.quantity)/e.yield),null===(v=e.totalNutrients.CHOCDF)||void 0===v?void 0:v.unit]}),Object(a.jsxs)("span",{children:[Math.round((null===(f=e.totalDaily.CHOCDF)||void 0===f?void 0:f.quantity)/e.yield),null===(p=e.totalDaily.CHOCDF)||void 0===p?void 0:p.unit]})]}),Object(a.jsxs)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"italic",children:"Total Fiber"})," ",Math.round((null===(O=e.totalNutrients.FIBTG)||void 0===O?void 0:O.quantity)/e.yield),null===(y=e.totalNutrients.FIBTG)||void 0===y?void 0:y.unit]}),Object(a.jsxs)("span",{children:[Math.round((null===(g=e.totalDaily.FIBTG)||void 0===g?void 0:g.quantity)/e.yield),null===(w=e.totalDaily.FIBTG)||void 0===w?void 0:w.unit]})]}),Object(a.jsx)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2 leading-5",children:Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"italic",children:"Total Sugars"})," ",Math.round((null===(C=e.totalNutrients.SUGAR)||void 0===C?void 0:C.quantity)/e.yield),null===(k=e.totalNutrients.SUGAR)||void 0===k?void 0:k.unit]})}),Object(a.jsx)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b-8 border-black text-xs",children:Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{className:"font-extrabold",children:"Protein"})," ",Math.round((null===(D=e.totalNutrients.PROCNT)||void 0===D?void 0:D.quantity)/e.yield),null===(F=e.totalNutrients.PROCNT)||void 0===F?void 0:F.unit]})}),Object(a.jsxs)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{children:"Vitamin D"})," ",Math.round((null===(T=e.totalNutrients.VITD)||void 0===T?void 0:T.quantity)/e.yield),null===(A=e.totalNutrients.VITD)||void 0===A?void 0:A.unit]}),Object(a.jsxs)("span",{children:[Math.round((null===(M=e.totalDaily.VITD)||void 0===M?void 0:M.quantity)/e.yield),null===(q=e.totalDaily.VITD)||void 0===q?void 0:q.unit]})]}),Object(a.jsxs)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{children:"Calcium"})," ",Math.round((null===(I=e.totalNutrients.CA)||void 0===I?void 0:I.quantity)/e.yield),null===(S=e.totalNutrients.CA)||void 0===S?void 0:S.unit]}),Object(a.jsxs)("span",{children:[Math.round((null===(R=e.totalDaily.CA)||void 0===R?void 0:R.quantity)/e.yield),null===(V=e.totalDaily.CA)||void 0===V?void 0:V.unit]})]}),Object(a.jsxs)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{children:"Iron"})," ",Math.round((null===(H=e.totalNutrients.FE)||void 0===H?void 0:H.quantity)/e.yield),null===(P=e.totalNutrients.FE)||void 0===P?void 0:P.unit]}),Object(a.jsxs)("span",{children:[Math.round((null===(E=e.totalDaily.FE)||void 0===E?void 0:E.quantity)/e.yield),null===(B=e.totalDaily.FE)||void 0===B?void 0:B.unit]})]}),Object(a.jsxs)("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{children:"Potassium"})," ",Math.round((null===(L=e.totalNutrients.K)||void 0===L?void 0:L.quantity)/e.yield),null===(G=e.totalNutrients.K)||void 0===G?void 0:G.unit]}),Object(a.jsxs)("span",{children:[Math.round((null===(K=e.totalDaily.K)||void 0===K?void 0:K.quantity)/e.yield),null===(W=e.totalDaily.K)||void 0===W?void 0:W.unit]})]}),Object(a.jsx)("p",{className:"text-xxs w-5/12 sm:w-45",children:"*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice."})]})]})]})})});var k=function(e){var t=e.recipes;return 0===e.recipes.length?Object(a.jsxs)("div",{className:"max-w-lg mx-auto flex flex-col p-6 bg-gray-100 mt-10 rounded-lg shadow-md",children:[Object(a.jsx)("h1",{className:"text-2xl text-blue-700 leading-tight",children:"Sorry. No results were found. :("}),Object(a.jsx)("h2",{className:"text-lg text-blue-700 leading-tight",children:"Try changing your search terms or diet."})]}):Object(a.jsx)("div",{className:"max-w-lg mx-auto flex flex-col mt-10",children:t.map((function(e,t){var l=e.recipe;return Object(a.jsx)(C,Object(x.a)({},l),t)}))})},D=l(18),F=function(e){Object(d.a)(l,e);var t=Object(u.a)(l);function l(e){var a;return Object(o.a)(this,l),(a=t.call(this,e)).searchResults=function(e){a.setState({searchResults:e})},a.state={searchResults:null},a}return Object(c.a)(l,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"bg-gray-100 min-h-screen",children:[Object(a.jsxs)(D.a,{children:[Object(a.jsx)("script",{src:"https://developer.edamam.com/attribution/badge.js"}),Object(a.jsx)("body",{className:"bg-gray-100"})]}),Object(a.jsx)("div",{className:"max-w-lg mx-auto flex p-6 mt-10 rounded-lg shadow-md",children:Object(a.jsxs)("div",{className:"pt-1",children:[Object(a.jsx)("h1",{className:"text-2xl text-blue-700 leading-tight",children:"Clear the Fridge"}),Object(a.jsx)("p",{className:"text-base text-gray-700 leading-normal",children:"A project to help you get the most of whatever you have in your fridge or pantry"})]})}),Object(a.jsx)(p,{callback:this.searchResults}),null!==this.state.searchResults?Object(a.jsx)(k,{recipes:this.state.searchResults.hits}):null,Object(a.jsx)("footer",{className:"flex justify-center",children:Object(a.jsx)("div",{id:"edamam-badge","data-color":"transparent"})})]})}}]),l}(i.a.Component);var T=function(){return Object(a.jsx)(F,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.55fd611a.chunk.js.map