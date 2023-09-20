import{s as r,r as e,u as p,j as a}from"./index-525707b4.js";import{g as x,C as f}from"./conectionsAPI-89ab6212.js";const u=r.div`
  max-width: 1440px;
  padding-top: 30px;
  height: auto;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,c=r.div`
  max-width: 1440px;
  height: auto;
  margin: auto;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  justify-content: center;
`;function d(){const[s,i]=e.useState([]),o=p(t=>t.favorite),n=s.filter(t=>o.includes(t.id));return e.useEffect(()=>{x().then(t=>{t&&i(t)})},[]),a.jsx(u,{children:a.jsx(c,{children:n.map(t=>a.jsx(f,{car:t},t.id))})})}const g=()=>a.jsx(d,{});export{g as default};
