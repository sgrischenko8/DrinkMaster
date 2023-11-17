import{s as t,c as s,N as p,u as c,j as e,U as d,V as x,k as a,m as h}from"./index-cc3dcb5c.js";import{d as m,x as f,y as g}from"./dummyDrinkThumb-e2c18638.js";import{N as u}from"./Paginator-9aae04cd.js";const w=t.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
  ${({theme:i})=>i==="dark"?` color: ${s.light};`:`color: ${s.primaryDark};`}
margin: 40px 0 51px;
@media only screen and (min-width: 768px) {
row-gap: 80px;
column-gap: 20px;   
margin: 60px 0 80px;
}
`,k=t.li`
width: 335px;
height: 676px;
display: flex;
flex-direction: column;
gap: 18px;
@media only screen and (min-width: 768px) {
width: 342px;
gap: 24px;   
};
@media only screen and (min-width: 1140px) {
width: 400px; 
}
`,y=t.img`
width: 100%;
height: auto;
border-radius: 8px;
`,D=t.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 768px) {
font-size: 24px;
}
`,j=t.p`
font-size: 14px;
height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
@media only screen and (min-width: 768px) {
font-size: 16px;
}
`,b=t.span`
font-size: 14px;
color: ${s.disabled};
@media only screen and (min-width: 768px) {
font-size: 16px;
}
`,v=t.div`
display: flex;
flex-direction: column;
gap: 4px;
`,$=t.div`
display: flex;
gap: 8px;
`,F=t.button`
display: flex;
width: 46px;
height:46px;
justify-content: center;
align-items: center;
border:none;
border-radius: 40px;
background: #161F37;
@media only screen and (min-width: 768px) {
width: 56px;
height:56px;
}
`,z=t(p)`
color: ${s.light};
padding: 18px 44px;
border-radius: 42px;
background: ${s.secondaryDark};
font-weight: 600;
border:none;
`,O="/DrinkMaster/assets/sprite-6b675af9.svg",T=({drink:i})=>{const o=c(),n=()=>{location.pathname.includes("/my")?o(d(i._id)):location.pathname.includes("/favorites")&&o(x(i._id))};return e.jsxs(k,{children:[e.jsx(y,{src:i.drinkThumb,alt:` Photo of cocktail ${i.drink} `,loading:"lazy",onError:r=>{r.currentTarget.src=m}}),e.jsxs(v,{children:[e.jsx(D,{children:i.drink}),e.jsx(b,{children:i.alcoholic})]}),e.jsx(j,{children:i.description}),e.jsxs($,{children:[e.jsx(z,{to:`/drink/${i._id}`,children:"See more"}),e.jsx(F,{type:"button",onClick:n,children:e.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${O}#icon-trash`})})})]})]})},B=()=>{const i=a(f),o=a(g);let n=[];location.pathname.includes("/my")?n.push(...i):location.pathname.includes("/favorites")&&n.push(...o);const r=a(h);return n.length>0?e.jsx(w,{theme:r,children:n.map(l=>e.jsx(T,{drink:l},l._id))}):e.jsx(u,{message:"Your drinks list is empty"})};export{B as D};
