(this["webpackJsonpreact-intro"]=this["webpackJsonpreact-intro"]||[]).push([[0],{45:function(e,t,r){},47:function(e,t,r){},55:function(e,t,r){},75:function(e,t,r){"use strict";r.r(t);var n,c=r(1),a=r(11),s=r.n(a),o=r(8),i=(r(45),r(15)),j=r(13),d=r(76),h=r(77),l=r(78);!function(e){e.ADD_HERO="Add Hero",e.REMOVE_HERO="Remove Hero",e.EDIT_HERO="Edit Hero",e.DELETE_HERO="Delete Hero",e.SELECT_HERO="Select Hero"}(n||(n={}));var O=r(2),b=function(e){var t=Object(o.c)((function(e){var t=e.editHeroState.currentHero;return e.heros[t]})),r=Object(o.b)(),c=function(e){t=Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},e.target.name,e.target.value))};return Object(O.jsx)("div",{children:Object(O.jsxs)(d.a,{onSubmit:function(e){var c;e.preventDefault(),c=t,r({type:n.EDIT_HERO,payload:{hero:c}})},children:[Object(O.jsx)(h.a,{htmlFor:"name",children:"Hero Name"}),Object(O.jsx)(l.a,{onChange:c,type:"text",name:"name",id:"heroName"}),Object(O.jsx)(h.a,{htmlFor:"power",children:"Hero Super Power"}),Object(O.jsx)(l.a,{onChange:c,type:"text",name:"power",id:"heroSuperPower"}),Object(O.jsx)(h.a,{htmlFor:"archNemesis",children:"Hero Arch Nemesis"}),Object(O.jsx)(l.a,{onChange:c,type:"text",name:"archNemesis",id:"heroArchNemesis"}),Object(O.jsx)(h.a,{htmlFor:"weakness",children:"Hero Weakness"}),Object(O.jsx)(l.a,{onChange:c,type:"text",name:"weakness",id:"heroWeakness"}),Object(O.jsx)(h.a,{htmlFor:"secretIdentity",children:"Hero Secret Identity"}),Object(O.jsx)(l.a,{onChange:c,type:"text",name:"secretIdentity",id:"heroSecretIdentity"}),Object(O.jsx)(l.a,{onChange:c,type:"submit",value:"submit"})]})})},u=r(12),x=r(79),m=r(80),p=r(81),f=r(82),H=r(83),v=r(84),E=r(85),y=(r(47),function(e){var t=Object(o.b)(),r=Object(c.useState)(!1),a=Object(u.a)(r,2),s=a[0],i=a[1];return Object(O.jsx)("div",{children:Object(O.jsxs)(x.a,{color:"light",light:!0,expand:"md",children:[Object(O.jsx)(m.a,{href:"/",children:"Hero"}),Object(O.jsx)(p.a,{onClick:function(){return i(!s)}}),Object(O.jsxs)(f.a,{isOpen:s,navbar:!0,children:[Object(O.jsxs)(H.a,{className:"mr-auto",navbar:!0,children:[Object(O.jsx)(v.a,{children:Object(O.jsx)(E.a,{href:"#",children:"Table"})}),Object(O.jsx)(v.a,{navbar:!0,className:"mr-auto",children:Object(O.jsx)(E.a,{href:"/#",children:"Additions"})})]}),Object(O.jsx)(H.a,{navbar:!0,className:"ms-auto",children:Object(O.jsx)(v.a,{navbar:!0,id:"editNavButton",className:"ms-auto",children:Object(O.jsx)(E.a,{onClick:function(){t({type:n.ADD_HERO,payload:{}})},children:"Add Hero"})})})]})]})})}),S=r(86),g=function(e){return Object(O.jsxs)("tr",{onClick:e.select,children:[Object(O.jsx)("td",{id:"heroName",children:e.hero.name}),Object(O.jsx)("td",{id:"heroPower",children:e.hero.power}),Object(O.jsx)("td",{id:"heroWeakness",children:e.hero.weakness}),Object(O.jsx)("td",{id:"heroArchNemesis",children:e.hero.archNemesis}),Object(O.jsx)("td",{id:"heroSecretIdentity",children:e.hero.secretIdentity})]})},k=(r(55),function(e){var t=Object(o.c)((function(e){return e.heros})),r=Object(o.b)();return Object(O.jsxs)(S.a,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"name"}),Object(O.jsx)("th",{children:"power"}),Object(O.jsx)("th",{children:"weakness"}),Object(O.jsx)("th",{children:"archNemesis"}),Object(O.jsx)("th",{children:"secretIdentity"})]})}),Object(O.jsx)("tbody",{children:t.map((function(e,t){return Object(O.jsx)(g,{select:function(){return e=t,void r({type:n.SELECT_HERO,payload:{selection:e}});var e},hero:e},t)}))})]})}),w=function(e){var t=Object(c.useState)(null),r=Object(u.a)(t,2),n=r[0],a=r[1];return Object(c.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((function(e){return e.json()})).then((function(e){var t=e;console.log(t),a(t)}))}),[]),Object(O.jsx)("div",{children:Object(O.jsx)("p",{id:"pokeP",children:n&&n.forms[0].name})})},_=r(36),N=r.n(_).a.create({baseURL:"https://pokeapi.co/api/v2/pokemon"}),D=function(e){var t=Object(c.useState)(null),r=Object(u.a)(t,2),n=r[0],a=r[1];return Object(c.useEffect)((function(){N.get("/charizard").then((function(e){var t=e.data;console.log(t),a(t)}))}),[]),Object(O.jsx)("div",{children:Object(O.jsx)("p",{id:"pokeP",children:n&&n.forms[0].name})})},I=function(e){var t=Object(o.c)((function(e){return e.editHeroState.currentHero}));return Object(O.jsxs)("div",{children:[Object(O.jsx)(y,{}),Object(O.jsx)(k,{}),t>-1&&Object(O.jsx)(b,{}),Object(O.jsx)(w,{}),Object(O.jsx)(D,{})]})},R=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,87)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))},C=(r(74),r(37)),T=r(22),L={editHeroState:{currentHero:-1,edit:!1},heros:[{name:"superman",archNemesis:"Lex Luthor",power:"like everything",secretIdentity:"clark kent",weakness:"kryptonite, and sometimes donuts"},{name:"Deadpool",archNemesis:"Wolverine, but love Hughey",power:"unnecessary regeneration",secretIdentity:"Ryan reynolds aka wade wilson",weakness:"off switches, damsels in distress, and also donuts"}]},A=window,F=Object(C.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,r=Object(j.a)({},e);switch(t.type){case n.ADD_HERO:return r.heros.push({archNemesis:"",power:"",name:"",secretIdentity:"",weakness:""}),r.editHeroState.currentHero=r.heros.length-1,r.editHeroState.edit=!0,r;case n.SELECT_HERO:return r.editHeroState.currentHero=t.payload.selection,r.editHeroState.edit=!0,r;case n.EDIT_HERO:return r.heros=[].concat(Object(T.a)(r.heros.slice(0,r.editHeroState.currentHero)),[t.payload.hero],Object(T.a)(r.heros.slice(r.editHeroState.currentHero+1,r.heros.length))),r.editHeroState.currentHero=-1,r.editHeroState.edit=!1,r;default:return r}}),A.__REDUX_DEVTOOLS_EXTENSION__&&A.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(O.jsx)(o.a,{store:F,children:Object(O.jsx)(I,{hey:"something"})}),document.getElementById("root")),R()}},[[75,1,2]]]);
//# sourceMappingURL=main.78b4025a.chunk.js.map