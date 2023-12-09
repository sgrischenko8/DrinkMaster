import{n as t,o as s,N as c,u as p,j as e,s as d,a4 as x,a5 as h,v as a,w as m}from"./index-a8fd8fe1.js";import{d as f,x as g,y as u}from"./dummyDrinkThumb-83586294.js";import{N as w}from"./Paginator-b1db002c.js";const y=t.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  ${({theme:i})=>i==="dark"?` color: ${s.light};`:`color: ${s.primaryDark};`}
  margin: 40px 0 51px;
  @media only screen and (min-width: 768px) {
    row-gap: 80px;
    column-gap: 20px;
    margin: 60px 0 80px;
  }
`,D=t.li`
  width: 335px;
  height: 676px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media only screen and (min-width: 768px) {
    width: 342px;
    gap: 24px;
  }
  @media only screen and (min-width: 1140px) {
    width: 400px;
  }
`,k=t.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`,j=t.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`,v=t.p`
  font-size: 14px;
  height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,$=t.span`
  font-size: 14px;
  color: ${s.disabled};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,b=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,z=t.div`
  display: flex;
  gap: 8px;
`,F=t.button`
  padding: 0;
  display: flex;
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  background: #161f37;
  @media only screen and (min-width: 768px) {
    width: 56px;
    height: 56px;
  }
`,O=t(c)`
  color: ${s.light};
  background: ${s.secondaryDark};
`,T=({drink:i})=>{const o=p(),n=()=>{location.pathname.includes("/my")?o(x(i._id)):location.pathname.includes("/favorites")&&o(h(i._id))};return e.jsxs(D,{children:[e.jsx(k,{src:i.drinkThumb,alt:` Photo of cocktail ${i.drink} `,loading:"lazy",onError:r=>{r.currentTarget.src=f}}),e.jsxs(b,{children:[e.jsx(j,{children:i.drink}),e.jsx($,{children:i.alcoholic})]}),e.jsx(v,{children:i.description}),e.jsxs(z,{children:[e.jsx(O,{to:`/drink/${i._id}`,children:"See more"}),e.jsx(F,{type:"button",onClick:n,children:e.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${d}#trash`})})})]})]})},B=()=>{const i=a(g),o=a(u);let n=[];location.pathname.includes("/my")?n.push(...i):location.pathname.includes("/favorites")&&n.push(...o);const r=a(m);return n.length>0?e.jsx(y,{theme:r,children:n.map(l=>e.jsx(T,{drink:l},l._id))}):e.jsx(w,{message:"Your drinks list is empty"})};export{B as D};
