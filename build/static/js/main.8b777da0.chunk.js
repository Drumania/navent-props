(this["webpackJsonpnavent-react"]=this["webpackJsonpnavent-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),r=a.n(o),l=(a(15),a(1)),c=Object(n.createContext)(),s=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)((function(){r({direction:"",tipo:0})}),[]),i.a.createElement(c.Provider,{value:{filter:o,setFilter:r}},e.children)},m=a(6),u=[{posting_id:"44557981",posting_location:{address:"Guido 1800",zone:"Recoleta",city:"Capital Federal"},posting_prices:[{operation_type:1,price:{amount:13500,currency:"ARS"},expenses:{amount:3500,currency:"ARS"}}],operation_type:{operation_type_id:1,operation_type_name:"Alquiler"},publication_plan:"SIMPLE",publish_date:"23/01/2020",posting_status:{status:"AVAILABLE",label:"Disponible"},title:"Guido y Callao, 2amb coc y lav todo luz 50m impec amob categor\xeda ",posting_picture:"https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/79/81/360x266/1693121343.jpg",posting_slug:"guido-y-callao-2amb-coc-y-lav-todo-luz-50m-impec-44557981",posting_description:"Sed in felis nec lorem imperdiet euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lectus mi, imperdiet et venenatis pulvinar, mattis id orci. In ut aliquam orci. Cras vitae risus posuere, ullamcorper erat vitae, tempor libero. Nulla placerat euismod lectus et maximus. Duis non magna mattis, mattis neque eu, dictum dui. Aliquam aliquam fermentum purus quis placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ligula odio. Integer id tempor ipsum. Phasellus maximus quam felis, id vulputate massa ullamcorper id."},{posting_id:"44554144",posting_location:{address:"San Lorenzo 1300",zone:"G\xfcemes",city:"Mar del Plata"},posting_prices:[{operation_type:2,price:{amount:110500,currency:"USD"},expenses:{amount:3e3,currency:"ARS"}}],operation_type:{operation_type_id:2,operation_type_name:"Venta"},publication_plan:"SUPERHIGHLIGHTED",publish_date:"18/07/2019",posting_status:{status:"AVAILABLE",label:"Disponible"},title:"Due\xf1o San Lorenzo/G\xfcemes. LC  2 d, a balc\xf3n terraza a jard\xedn. A nvo. cochera",posting_picture:"https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/41/44/360x266/1693069558.jpg",posting_slug:"dueno-san-lorenzo-guemes.-lc-2-d-a-balcon-terraz-44554144",posting_description:"Fusce nec pretium elit. Nullam commodo ornare massa, eget viverra erat vestibulum nec. Integer convallis est nec ex pharetra, non fermentum elit commodo. Maecenas eget ante vitae lorem interdum viverra. Aenean nisl erat, eleifend in tortor quis, ornare ultricies libero. Ut at egestas orci. Quisque laoreet ut diam quis molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque metus a libero feugiat, et lacinia odio tristique."},{posting_id:"44186948",posting_location:{address:"Juncal 3000",zone:"Barrio Norte",city:"Capital Federal"},posting_prices:[{operation_type:3,price:{amount:22500,currency:"ARS"},expenses:null}],operation_type:{operation_type_id:3,operation_type_name:"Alquiler Temporal"},publication_plan:"HIGHLIGHTED",publish_date:"02/12/2019",posting_status:{status:"RESERVED",label:"Reservado"},title:"Juncal/Coronel D\xedaz. Al frente, 63m, gran balc\xf3n terraza. Todo luz",posting_picture:"https://preprostatic.zonapropcdn.com/avisos/1/00/44/18/69/48/360x266/1688441607.jpg",posting_slug:"juncal-coronel-diaz.-al-frente-63m-gran-balcon-t-44186948",posting_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a neque non magna scelerisque imperdiet sed ac magna. Mauris enim lectus, varius at quam a, venenatis condimentum ante. Morbi mattis velit vel dictum varius. Suspendisse tempor velit ac rhoncus vehicula. Aenean elementum dolor purus, et mattis arcu consectetur a. Sed dictum felis id molestie accumsan. Aliquam sit amet diam feugiat, tincidunt sem vehicula, dignissim augue. Integer gravida sapien erat, in faucibus ligula cursus non. Aliquam vestibulum est nibh, vitae vehicula ipsum facilisis quis. Pellentesque ac tempus metus, non posuere dolor."}],p=Object(n.createContext)(),d=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),o=a[0],r=a[1],s=Object(n.useContext)(c).filter,d=JSON.parse(localStorage.getItem("arrayStorage"));return d||(d=[]),Object(n.useEffect)((function(){var e=s.tipo,t=s.direction,a=u;console.log(u),t&&(a=u.filter((function(e){return e.posting_location.address===t||e.posting_location.zone===t||e.posting_location.city===t}))),0!==e&&(a=a.filter((function(t){return t.operation_type.operation_type_id===e})));var n=a.filter((function(e){return"SUPERHIGHLIGHTED"===e.publication_plan})),i=a.filter((function(e){return"HIGHLIGHTED"===e.publication_plan})),o=a.filter((function(e){return"SIMPLE"===e.publication_plan})),l=[].concat(Object(m.a)(n),Object(m.a)(i),Object(m.a)(o));r(l)}),[s]),i.a.createElement(p.Provider,{value:{articles:o,favoritesStorage:d}},e.children)},g=a(9),b=a.n(g),E=function(){return i.a.createElement("nav",{className:"navbar navbar-light fixed-top bg-white mb-4"},i.a.createElement("div",{className:"container"},i.a.createElement("a",{className:"navbar-brand",href:"#!"},i.a.createElement("img",{src:b.a,alt:"navent"})),i.a.createElement("span",{className:"float-right text-right text-secondary"},"martinbrumana@gmail.com")))},f=a(2),v=function(){var e=Object(n.useContext)(c),t=e.filter,a=e.setFilter,o=Object(n.useContext)(p).articles,r=Object(n.useState)(),s=Object(l.a)(r,2),m=s[0],u=s[1],d=0,g=function(e){a(Object(f.a)(Object(f.a)({},t),{},{tipo:e}))};return i.a.createElement("div",{className:"bg-dark text-white mr-3 rounded custom-shadow"},i.a.createElement("h3",{className:"border-bottom mx-3 py-3"},"Filtrado acutal"),i.a.createElement("div",{className:"border-bottom m-3 py-3"},i.a.createElement("h5",null,"Direcci\xf3n"),i.a.createElement("form",{className:"input-group mb-3",onSubmit:function(e){e.preventDefault(),a(Object(f.a)(Object(f.a)({},t),{},{direction:m}))}},i.a.createElement("input",{list:"articles",name:"direction",id:"direction",className:"form-control ",placeholder:"Buscar por direcci\xf3n",onChange:function(e){u(e.target.value)}}),i.a.createElement("datalist",{id:"articles"},o.map((function(e){return i.a.createElement(n.Fragment,null,i.a.createElement("option",{key:d++,value:e.posting_location.address}),i.a.createElement("option",{key:d++,value:e.posting_location.city}),i.a.createElement("option",{key:d++,value:e.posting_location.zone}))}))),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-info",type:"submit",id:"button-addon2"},"Buscar")))),i.a.createElement("div",{className:"m-3 py-3"},i.a.createElement("h5",null,"Tipo de operaci\xf3n"),i.a.createElement("div",{className:"custom-control custom-radio"},i.a.createElement("input",{type:"radio",id:"customRadio1",name:"customRadio",className:"custom-control-input",onClick:function(){return g(2)}}),i.a.createElement("label",{className:"custom-control-label",for:"customRadio1"},"Comprar")),i.a.createElement("div",{className:"custom-control custom-radio"},i.a.createElement("input",{type:"radio",id:"customRadio2",name:"customRadio",className:"custom-control-input",onClick:function(){return g(1)}}),i.a.createElement("label",{className:"custom-control-label",for:"customRadio2"},"Alquilar")),i.a.createElement("div",{className:"custom-control custom-radio"},i.a.createElement("input",{type:"radio",id:"customRadio3",name:"customRadio",className:"custom-control-input",onClick:function(){return g(3)}}),i.a.createElement("label",{className:"custom-control-label",for:"customRadio3"},"Temporal")),i.a.createElement("div",{className:"custom-control custom-radio"},i.a.createElement("input",{type:"radio",id:"customRadio4",name:"customRadio",className:"custom-control-input",onClick:function(){return g(0)}}),i.a.createElement("label",{className:"custom-control-label",for:"customRadio4"},"Todos"))))},h=a(5),N=function(e){var t=e.articleTitle,a=e.articlePicture,o=e.setModal,r=e.articleId,c=Object(n.useState)({articleId:r}),s=Object(l.a)(c,2),m=s[0],u=s[1],p=function(e){u(Object(f.a)(Object(f.a)({},m),{},Object(h.a)({},e.target.name,e.target.value)))};return i.a.createElement("div",{className:"wrap-modal"},i.a.createElement("div",{className:"cont-modal p-5"},i.a.createElement("a",{href:"#!",className:"float-right btn-close-modal",onClick:function(){return o(!1)}},"\u2716"),i.a.createElement("h3",null,"Solicitar info sobre:"),i.a.createElement("div",{className:"row bg-light py-3"},i.a.createElement("div",{className:"col-12 col-lg-2"},i.a.createElement("img",{src:a,className:"img-fluid",alt:t})),i.a.createElement("div",{className:"col-12 col-lg-10"},t)),i.a.createElement("form",{className:"pt-3",onSubmit:function(e){e.preventDefault(),console.log(m),alert("se envia el email")}},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{for:"exampleInputEmail1"},"Nombre"),i.a.createElement("input",{type:"text",name:"nombre",className:"form-control",required:!0,onChange:p})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{for:"exampleInputEmail1"},"Tel\xe9fono"),i.a.createElement("input",{type:"tel",name:"telefono",className:"form-control",onChange:p})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{for:"exampleInputEmail1"},"Email"),i.a.createElement("input",{type:"email",name:"email",className:"form-control",required:!0,pattern:"^[\\w]{1,}[\\w.+-]{0,}@[\\w-]{2,}([.][a-zA-Z]{2,}|[.][\\w-]{2,}[.][a-zA-Z]{2,})$",onChange:p})),i.a.createElement("button",{type:"submit",className:"btn btn-info"},"Enviar"))))},y=function(e){var t,a=e.article,o=e.favoritesStorage,r=Object(n.useState)(),c=Object(l.a)(r,2),s=c[0],m=c[1],u=Object(n.useState)(!1),p=Object(l.a)(u,2),d=p[0],g=p[1],b=a.posting_id;switch(Object(n.useEffect)((function(){-1!==o.indexOf(b)?m(!0):m(!1)}),[o,b,s]),a.publication_plan){case"SUPERHIGHLIGHTED":t="super-highlighted";break;case"HIGHLIGHTED":t="highlighted";break;default:t="simple"}var E,f=a.posting_prices[0].price.amount,v=new Intl.NumberFormat("de-DE").format(f),h=a.posting_prices[0].price.currency;a.posting_prices[0].expenses&&(E=new Intl.NumberFormat("de-DE").format(a.posting_prices[0].expenses.amount));return i.a.createElement("div",{className:"box row bg-white mb-4 pt-3 custom-shadow ".concat(t)},i.a.createElement("div",{className:"sidebar col-12 col-lg-4 bg-white"},i.a.createElement("a",{href:a.posting_slug},i.a.createElement("img",{src:a.posting_picture,className:"img-fluid mb-3",alt:a.title})),i.a.createElement("h3",null,h," ",v),i.a.createElement("div",{className:"mb-3"}," ",E&&" Expensas ".concat(E))),i.a.createElement("div",{className:"col-12 col-lg-8 pb-3"},i.a.createElement("div",{className:"row"},i.a.createElement("small",{className:"col-12"},a.operation_type.operation_type_name),i.a.createElement("a",{className:"col-10",href:a.posting_slug},i.a.createElement("h4",null,a.title)),i.a.createElement("div",{className:"col-2 ".concat(s?" favorited":" favorite"),onClick:function(){return function(){if(!1===s)m(!0),o.push(b);else{m(!1);var e=o.indexOf(b);e>-1&&o.splice(e,1)}localStorage.setItem("arrayStorage",JSON.stringify(o))}()}})),i.a.createElement("strong",null,a.posting_location.address,", ",a.posting_location.city," ,"," ",a.posting_location.zone," "),i.a.createElement("a",{href:a.posting_slug},i.a.createElement("p",{className:"mt-4"},"".concat(a.posting_description.substring(0,180),"..."))),i.a.createElement("span",{className:"text-black-50"},"Publicado hace ",function(e){var t=e.split("/"),a=new Date(t[2],t[1],t[0]),n=(new Date).getDate(),i=(new Date).getMonth()+1,o=(new Date).getFullYear();return(new Date(o,i,n)-a)/864e5}(a.publish_date)," d\xedas"),i.a.createElement("a",{className:"btn btn-cstm-primary float-right",href:"#!",onClick:function(){return g(!0)}},"Contactar"),d&&i.a.createElement(N,{articleId:b,articleTitle:a.title,articlePicture:a.posting_picture,setModal:g})))},_=function(){var e=Object(n.useContext)(p),t=e.articles,a=e.favoritesStorage;return i.a.createElement(n.Fragment,null,t.length>=1?t.map((function(e){return i.a.createElement(y,{key:e.posting_id,article:e,favoritesStorage:a})})):"No hay propiedades disponibles.")};var A=function(){return i.a.createElement(s,null,i.a.createElement(d,null,i.a.createElement(E,null),i.a.createElement("div",{className:"container custom-padding-top"},i.a.createElement("div",{className:"row"},i.a.createElement("aside",{className:"col-12 col-lg-4"},i.a.createElement(v,null)),i.a.createElement("main",{className:"col-12 col-lg-8"},i.a.createElement(_,null))))))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root"))},9:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAYAAACQPx/OAAAE0UlEQVR4nO2bz2sbRxTH82/sPyD/AVX+guzVFfJRQZBcVjdJkW9xJIiNDrIKpnVlkG6qnOIetodCVeXUYKScVHAicA4RrhAGKSIhC9s9WfB6CDOZmZ39qdoaqveFB8Y7uzN6n/nx3uzOPUAppXvrbgCKFwJRTAhEMSEQxYRAFBMCUUwIRDEhEMWEQBQTAlFMsYDMpgswWz2oPD6C3Z0qGmOVx0dgtnowmy7uBshJ5RR0LYsWwk4qp7cLZHenylVY2N6HH5910BgrbO9zPtrdqd4OkHbdpJU0yqewvFlGqmiTtLxZQqP8dSZp183Q94YCYlsOpLZyoGtZODCOYzd003RgHIOuZSG1lQt9Tygg/e6Q0v44/xy7gZumj/PP1G/97jDUPaGAsNMVKpqiTlsIJKZK6S8hblDPRyB3JDaS8ss5EMgdiQVyMbgMLLdWILblwJvX70KVZctHuSeKxqMJvHn9DmzLiXRPmJ6vLBDbcuCn736l4TGxh/efwMtfzqXOaNdNV3ldy0JO36NzM1u3rmWlz6k8OqLXa/kmbc9hoeXZHpkuBpeu5FfXsnBYaMF4NOHKyjJzGZi1AJlNF/Dw/hPfbYScvsc5s5ZvBm499M7OYTZdcP8TF9He2Tl3fTyagG05kNP3fJ99WGh5/ka/9oiODlpL1gJEdG4t34R23YRSmu9tpFHj0URavl03IZMscr0ZAMB48NQ1AmR1Z5JFAOBHjK5lYd/4AX4//RPy28+lcEXomWQR2nUTGuUOpBIG/T+b4IkwKo+OpL5ZCxC20WLFrHNy+h51wMXgkhqri8El90MBAMxWzwVJVnej3HE59/3bv7nyjWcdeo3sM7G/L5UwuJEsdh7S3qCpiujOgdiW49s4cUrx0ng0gcEff7mmGgB3DyZTg+is8WgSWN/11dx1nR1lpbR7M5AdtcSxygIRe3SYHk9ktnrSRVRWnp22zFYPAAAa5a+93Xjw1NXWTLIIJ+UOZwe5Y1d72alVBoS9/r8E4rXo5refw8/f/yYFwvZ8Ml/LIIVZnBGIzxSR+aYA11dzup1vW/9IgYhTo9c0xq0HWzlurZKZbTkIhP2B11dzrjwLJJUwuGtsgMD+TaYrAH5nWtfkeYsoBOIDhI2CROeICzYxNj8QR5KYb8gW8I0HIuYO/e4Q+t0hFL7d93Q0gNvZXqOAXex17UuovLtTdSWvJA9ZFQh5vpjNs+WUBjIeTbj8QWZiAkgkJqGyhMy2HG7BDxpVcYDI2q/E1sl4NIFSukpN1ktq+Sa9TjSbLqTbJ6V01TUyWJGoiJjf+wgx8ycARcc1yh36vEa541snaVu/O4RSukrBpxKGGiME5S8EophuBQgb3eDnP+G1vFlSv5HENUihgLBJmF+Ih+LFBjRhPy0N/aEcG2lEefO2qWJDdFnk5qXQQMTwtfviFXz6YIFtOWiMffpgQffFK+onr+hrZSAA7hc/aP6WShihP5CLBUTc0EPzBlHLN2MdSYh8HMFvezuTLAburm6CraLIQGzLcWW/xDACW12xTlDJdl29XvKjoin2GUPxi5K4R7hQvGIDYcPgKAdSUP5a6RRu7+wcavkmJor/ofBYtGJCIIoJgSgmBKKYEIhiQiCKCYEoJgSimBCIYkIgigmBKKZ/ATVtWZmZvxRfAAAAAElFTkSuQmCC"}},[[10,1,2]]]);
//# sourceMappingURL=main.8b777da0.chunk.js.map