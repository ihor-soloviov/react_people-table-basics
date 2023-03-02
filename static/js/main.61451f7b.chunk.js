(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(13),a=c(5),r=c(2),s=(c(23),c(24),c(25),c(6)),j=c.n(s),i=c(0),o=function(e){var t=e.to,c=e.title;return Object(i.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},l=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(o,{to:"/",title:"Home"}),Object(i.jsx)(o,{to:"people",title:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(r.b,{})})})]})},b=c(10),h=c(9),d=c(14),O=c(4),u=c(1),x=c.n(u),p="https://mate-academy.github.io/react_people-table/api/people.json";function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(p)})).then((function(e){return e.json()}));var e}c(27);var f=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},v=x.a.memo((function(e){var t=e.person,c=t.name,n=t.sex,r=t.slug;return Object(i.jsx)(a.b,{to:"../".concat(r),className:j()({"has-text-danger":"f"===n}),children:c})})),g=x.a.memo((function(e){var t=e.people,c=e.personSlug;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t=e.sex,n=e.born,a=e.died,r=e.mother,s=e.motherName,o=e.father,l=e.fatherName,b=e.slug,h=s||"-",d=l||"-";return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===b}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(v,{person:e})}),Object(i.jsx)("td",{children:t}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:r?Object(i.jsx)(v,{person:r}):h}),Object(i.jsx)("td",{children:o?Object(i.jsx)(v,{person:o}):d})]},b)}))})]})})),N=c(11),w=function(){var e=Object(u.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(u.useState)(!1),s=Object(O.a)(a,2),j=s[0],o=s[1],l=Object(u.useState)(!1),x=Object(O.a)(l,2),p=x[0],v=x[1],w=Object(r.i)().personSlug,y=void 0===w?"":w,S=Object(u.useCallback)(Object(d.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,m();case 4:t=e.sent,n((function(e){return[].concat(Object(h.a)(e),Object(h.a)(t))})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),v(!0),o(!1);case 12:return e.prev=12,o(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])}))),[]);Object(u.useEffect)((function(){S()}),[]);var k=Object(u.useMemo)((function(){return function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.fatherName}));return Object(N.a)(Object(N.a)({},t),{},{mother:c,father:n})}))}(c)}),[c]),P=!j&&0===c.length;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[j&&Object(i.jsx)(f,{}),p&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),P&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(i.jsx)(g,{people:k,personSlug:y})]})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(l,{}),children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)("h1",{className:"title",children:"Home Page"})}),Object(i.jsx)(r.c,{path:"/home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsxs)(r.c,{path:"people",children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(w,{})}),Object(i.jsx)(r.c,{path:":personSlug",element:Object(i.jsx)(w,{})})]}),Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})]})})}))}},[[28,1,2]]]);
//# sourceMappingURL=main.61451f7b.chunk.js.map