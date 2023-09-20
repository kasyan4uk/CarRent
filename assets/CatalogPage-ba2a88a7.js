import{s as r,r as e,j as t}from"./index-525707b4.js";import{g as c,C as p}from"./conectionsAPI-89ab6212.js";import{F as d}from"./Footer-d93f714e.js";const m=r.div`
  max-width: 1440px;
  padding-top: 30px;
  height: auto;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,f=r.div`
  max-width: 1440px;
  height: auto;
  margin: auto;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  justify-content: center;
`,u=r.button`
   border: none;
   background-color: inherit;
   font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration-line: underline;
    cursor: pointer;
    color: #3470FF;
    &:hover {
        color: #0B44CD;
    }

`;function g(){const[a,n]=e.useState(8),[s,i]=e.useState([]),l=()=>{n(a+8)};e.useEffect(()=>{c().then(o=>{o&&i(o)})},[]);const x=s.slice(0,a);return t.jsxs(m,{children:[t.jsx(f,{children:x.map(o=>t.jsx(p,{car:o},o.id))}),t.jsx(u,{onClick:l,children:"Load more"})]})}const w=()=>t.jsxs(t.Fragment,{children:[t.jsx(g,{}),t.jsx(d,{})]});export{w as default};
