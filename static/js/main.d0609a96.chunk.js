(this["webpackJsonpclear-the-fridge-v2"]=this["webpackJsonpclear-the-fridge-v2"]||[]).push([[0],{23:function(e,t,a){e.exports=a(60)},28:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(13),s=a.n(r),o=(a(28),a(14)),i=a(15),c=a(22),u=a(20),m=a(21),d=a(5),b=a(6),f=a(7),p=a(16),x=a.n(p),h=[{name:"Vegan",value:"vegan"},{name:"Vegetarian",value:"vegetarian"},{name:"Sugar Conscious",value:"sugar-conscious"},{name:"Peanut Free",value:"peanut-free"},{name:"Tree-nut Free",value:"tree-nut-free"},{name:"Alcohol Free",value:"alcohol-free"}],y=function(e){var t=e.callback,a=Object(l.useState)(void 0),r=Object(f.a)(a,2),s=r[0],o=r[1],i=function(e){return o(Object(b.a)(Object(b.a)({},s),{},Object(d.a)({},e.currentTarget.name,e.currentTarget.value)))},c=Object(l.useReducer)((function(e,t){var a=t.type,l=t.value;switch(a){case"add":return[].concat(Object(m.a)(e),[l]);case"remove":return x()(e,l);default:return e}}),[]),u=Object(f.a)(c,2),p=u[0],y=u[1];function g(e){var t=p.map((function(e){return"health=".concat(e,"&")})).toString(),a={app_key:"112f88722937558772de9b30b52b63ed",app_id:"c8b6b757"};return""===e.textInput&&void 0===e.textInput||(a.q=e.textInput),""!==e.dietInput&&void 0!==e.dietInput&&(a.diet=e.dietInput),"https://api.edamam.com/search?"+t+Object.keys(a).map((function(e){return"".concat(e,"=").concat(a[e])})).join("&")}return n.a.createElement("div",{className:"max-w-lg flex p-6 bg-gray-100 mt-10 rounded-lg shadow-md mx-auto"},n.a.createElement("div",{className:"pt-1"},n.a.createElement("h1",{className:"text-xl text-blue-700 leading-tight"},"What do you want to use up?"),n.a.createElement("p",{className:"text-base text-gray-700 leading-normal"},"Type in the ingredients you're looking to clear out from your kitchen, select a diet and click search."),n.a.createElement("form",{className:"mx-auto"},n.a.createElement("div",{className:"flex flex-row justify-between"},n.a.createElement("input",{className:"rounded-sm border border-gray-600",name:"textInput",type:"text",placeholder:"Chicken, rice",id:"search-term",required:!0,onChange:i}),n.a.createElement("select",{className:"rounded-sm border-gray-600 border",name:"dietInput",onChange:i},n.a.createElement("option",{value:"",defaultValue:!0},"Diet"),n.a.createElement("option",{value:"balanced"},"Balanced"),n.a.createElement("option",{value:"high-protein"},"High-Protein"),n.a.createElement("option",{value:"low-carb"},"Low-Carb"),n.a.createElement("option",{value:"low-fat"},"Low-Fat")),n.a.createElement("input",{type:"submit",value:"Search",className:"rounded-sm border-gray-600 border",onClick:function(e){return e.preventDefault(),void 0===s||void 0===s.textInput||""===s.textInput?(alert("You need to enter something into the text field."),null):(function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return t(e)}))}(g(s)),g(s))}})),n.a.createElement("fieldset",null,n.a.createElement("legend",{className:"text-lg"},"Optional health choices:"),n.a.createElement("div",{className:"grid grid-flow-col grid-cols-2 grid-rows-3"},h.map((function(e){return n.a.createElement("div",{className:"inline",key:e.value},n.a.createElement("input",{className:"mx-1",type:"checkbox",name:e.value,value:e.value,id:e.value,onChange:function(){return y({type:p.includes(e.value)?"remove":"add",value:e.value})}}),n.a.createElement("label",{className:"text-base text-gray-700 leading-normal",htmlFor:e.value},e.name))})))))))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var E=n.a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",d:"M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z",fill:"#2b6cb0"}),N=function(e){var t=e.svgRef,a=e.title,l=w(e,["svgRef","title"]);return n.a.createElement("svg",g({fill:"none",viewBox:"0 0 24 24",height:20,width:20,ref:t},l),a?n.a.createElement("title",null,a):null,E)},v=n.a.forwardRef((function(e,t){return n.a.createElement(N,g({svgRef:t},e))}));a.p;var C=function(e){var t=function(e,t){return e.length<t?e:e.slice(0,t).concat("...")},a=e.calories/e.yield,l=0;l=window.screen.width<639?4:9;var r=e.ingredientLines.length-l,s=e.ingredientLines.splice(0,l);return n.a.createElement("div",{className:"group flip h-64 min-w-full max-w-lg my-6 mx-auto"},n.a.createElement("div",{className:"flip-content min-h-full h-64 min-w-full max-w-lg relative group-hover:transformation rounded-lg shadow-md"},n.a.createElement("div",{className:"flip-card-front absolute min-h-full h-64 min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md flex flex-row"},n.a.createElement("img",{className:"h-64 rounded-lg",src:e.image,alt:e.label}),n.a.createElement("ul",{className:"grid sm:grid-cols-1 grid-cols-2 grid-rows-5 gap-1 p-1 grid-flow-row max-w-md"},s.map((function(e,a){return n.a.createElement("li",{className:"text-sm text-left row-span-1",key:a},t(e,25))})),r>0?n.a.createElement("li",{className:"text-sm text-left row-span-1"},"and ",r," more ingredients..."):null)),n.a.createElement("div",{className:"flip-card-back absolute min-h-full min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md"},n.a.createElement("h1",{className:"text-xl text-blue-700 leading-tight"},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},t(e.label,35)," ",n.a.createElement(v,{className:"inline text-blue-700 mb-1"}))),n.a.createElement("div",{className:"flex flex-col flex-wrap h-56 pt-1 text-left pl-8 sm:pl-.8"},n.a.createElement("div",{className:"w-5/12 sm:w-45"},n.a.createElement("h1",{className:"text-xl font-extrabold border-b border-black leading-none"},"Nutrition Facts")),n.a.createElement("div",{className:"text-xs border-b-8 border-black w-5/12 sm:w-45"},"Serves about ",e.yield),n.a.createElement("div",{className:"w-5/12 sm:w-45"}),n.a.createElement("div",{className:"flex flex-row w-5/12 sm:w-45 justify-between border-b border-black"},n.a.createElement("div",{className:"flex flex-col"},n.a.createElement("p",{className:"text-xs font-extrabold"},"Amount Per Serving"),n.a.createElement("p",{className:"text-lg font-extrabold leading-none"},"Calories")),n.a.createElement("p",{className:"text-3xl self-end font-extrabold leading-none"},Math.round(a))),n.a.createElement("p",{className:"w-5/12 sm:w-45 text-right text-xs font-extrabold border-b border-black"},"% Daily Value",n.a.createElement("span",{className:"text-sm"},"*")),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs"},n.a.createElement("span",null,n.a.createElement("span",{className:"font-extrabold"},"Total Fat")," ",Math.round(e.totalNutrients.FAT.quantity/e.yield),e.totalNutrients.FAT.unit),n.a.createElement("span",null,Math.round(e.totalDaily.FAT.quantity/e.yield),e.totalDaily.FAT.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2"},n.a.createElement("span",null,n.a.createElement("span",{className:"italic"},"Saturated fat")," ",Math.round(e.totalNutrients.FASAT.quantity/e.yield),e.totalNutrients.FASAT.unit),n.a.createElement("span",null,Math.round(e.totalDaily.FASAT.quantity/e.yield),e.totalDaily.FASAT.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2"},n.a.createElement("span",null,n.a.createElement("span",{className:"italic"},"Trans fat")," ",Math.round(e.totalNutrients.FATRN.quantity/e.yield),e.totalNutrients.FATRN.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs"},n.a.createElement("span",null,n.a.createElement("span",{className:"font-extrabold"},"Sodium")," ",Math.round(e.totalNutrients.NA.quantity/e.yield),e.totalNutrients.NA.unit),n.a.createElement("span",null,Math.round(e.totalDaily.NA.quantity/e.yield),e.totalDaily.NA.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs"},n.a.createElement("span",null,n.a.createElement("span",{className:"font-extrabold"},"Total Carbohydrate")," ",Math.round(e.totalNutrients.CHOCDF.quantity/e.yield),e.totalNutrients.CHOCDF.unit),n.a.createElement("span",null,Math.round(e.totalDaily.CHOCDF.quantity/e.yield),e.totalDaily.CHOCDF.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2"},n.a.createElement("span",null,n.a.createElement("span",{className:"italic"},"Total Fiber")," ",Math.round(e.totalNutrients.FIBTG.quantity/e.yield),e.totalNutrients.FIBTG.unit),n.a.createElement("span",null,Math.round(e.totalDaily.FIBTG.quantity/e.yield),e.totalDaily.FIBTG.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2 leading-5"},n.a.createElement("span",null,n.a.createElement("span",{className:"italic"},"Total Sugars")," ",Math.round(e.totalNutrients.SUGAR.quantity/e.yield),e.totalNutrients.SUGAR.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b-8 border-black text-xs"},n.a.createElement("span",null,n.a.createElement("span",{className:"font-extrabold"},"Protein")," ",Math.round(e.totalNutrients.PROCNT.quantity/e.yield),e.totalNutrients.PROCNT.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs"},n.a.createElement("span",null,n.a.createElement("span",null,"Vitamin D")," ",Math.round(e.totalNutrients.VITD.quantity/e.yield),e.totalNutrients.VITD.unit),n.a.createElement("span",null,Math.round(e.totalDaily.VITD.quantity/e.yield),e.totalDaily.VITD.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs"},n.a.createElement("span",null,n.a.createElement("span",null,"Calcium")," ",Math.round(e.totalNutrients.CA.quantity/e.yield),e.totalNutrients.CA.unit),n.a.createElement("span",null,Math.round(e.totalDaily.CA.quantity/e.yield),e.totalDaily.CA.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs"},n.a.createElement("span",null,n.a.createElement("span",null,"Iron")," ",Math.round(e.totalNutrients.FE.quantity/e.yield),e.totalNutrients.FE.unit),n.a.createElement("span",null,Math.round(e.totalDaily.FE.quantity/e.yield),e.totalDaily.FE.unit)),n.a.createElement("p",{className:"w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs"},n.a.createElement("span",null,n.a.createElement("span",null,"Potassium")," ",Math.round(e.totalNutrients.K.quantity/e.yield),e.totalNutrients.K.unit),n.a.createElement("span",null,Math.round(e.totalDaily.K.quantity/e.yield),e.totalDaily.K.unit)),n.a.createElement("p",{className:"text-xxs w-5/12 sm:w-45"},"*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.")))))};var j=function(e){var t=e.recipes;return 0===e.recipes.length?n.a.createElement("div",{className:"max-w-lg mx-auto flex flex-col p-6 bg-gray-100 mt-10 rounded-lg shadow-md"},n.a.createElement("h1",{className:"text-2xl text-blue-700 leading-tight"},"Sorry. No results were found. :("),n.a.createElement("h2",{className:"text-lg text-blue-700 leading-tight"},"Try changing your search terms or diet.")):n.a.createElement("div",{className:"max-w-lg mx-auto flex flex-col mt-10"},t.map((function(e,t){var a=e.recipe;return n.a.createElement(C,Object.assign({key:t},a))})))},k=a(17),D=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).searchResults=function(e){l.setState({searchResults:e})},l.state={searchResults:null},l}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"bg-gray-100 min-h-screen"},n.a.createElement(k.a,null,n.a.createElement("script",{src:"https://developer.edamam.com/attribution/badge.js"}),n.a.createElement("body",{className:"bg-gray-100"})),n.a.createElement("div",{className:"max-w-lg mx-auto flex p-6 mt-10 rounded-lg shadow-md"},n.a.createElement("div",{className:"pt-1"},n.a.createElement("h1",{className:"text-2xl text-blue-700 leading-tight"},"Clear the Fridge"),n.a.createElement("p",{className:"text-base text-gray-700 leading-normal"},"A project to help you get the most of whatever you have in your fridge or pantry"))),n.a.createElement(y,{callback:this.searchResults}),null!==this.state.searchResults?n.a.createElement(j,{recipes:this.state.searchResults.hits}):null,n.a.createElement("footer",{className:"flex justify-center"},n.a.createElement("div",{id:"edamam-badge","data-color":"transparent"})))}}]),a}(n.a.Component);var O=function(){return n.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d0609a96.chunk.js.map