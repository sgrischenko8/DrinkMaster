import{n as e,o as t,p as i,L as r,j as o,W as s,H as n,B as c,q as l,t as p}from"./index-9a8ab8da.js";const h=e.div`
  position: relative;
  margin-bottom: 14px;
  display: flex;
  gap: 2px;
  align-items: baseline;
`,g=e.h1`
  color: ${t.light};
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
    letter-spacing: -0.8px;
  }
`,d=i`
 0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
    25% {
    -webkit-transform: rotate(-25deg);
            transform: rotate(-25deg);
    opacity: 1;
  }
  75% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 0;
  }
`,b=e.svg`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 100%;
  display: block;
  fill: ${t.disabled};
  stroke: ${t.light};

  animation: ${d} 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @media screen and (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`,f=e.p`
  margin-top: 14px;
  margin-bottom: 40px;

  color: ${t.light};

  @media screen and (max-width: 767px) {
    width: 319px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 485px;
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`,k=e.div`
  display: flex;
  gap: 14px;
`,x=e(r)`
  color: ${t.secondaryDark};
  background: ${t.light};

  &:hover {
    color: ${t.light};
    background: ${t.secondaryDark};
  }

  @media screen and (min-width: 768px) {
    color: #161f37;
  }
`,u=e(x)`
  color: ${t.light};
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  &:hover {
    color: ${t.secondaryDark};
    background: ${t.light};
  }
`,w=({children:a})=>o.jsxs(s,{children:[a,o.jsx(n,{}),o.jsx(c,{}),o.jsx(l,{}),o.jsx(p,{})]});export{x as A,k as B,h as F,b as S,g as T,w as W,f as a,u as b};
