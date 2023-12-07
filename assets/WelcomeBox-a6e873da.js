import{r,s as e,n as a,o as d,L as l,B as o,p as c,j as t}from"./index-8cf7bee9.js";const s=i=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -1 26 26",...i},r.createElement("path",{d:"M23.812.678c-.054-.034-.107-.06-.16-.087a4.492 4.492 0 0 0-2.105-.516h-.008a4.602 4.602 0 0 0-3.965 2.278l-.012.022a4.429 4.429 0 0 0-.582 1.847l-.001.017h-9.6L6.305 1.65A2.664 2.664 0 0 0 3.229.071l.018-.004L.001.805l.201.886L3.448.953a1.76 1.76 0 0 1 2.014 1.035L5.466 2l.932 2.24H.302l10.193 10.193v7.463c-2.367.168-4 .952-4 1.925v.181h9.824v-.181c0-.972-1.636-1.76-4-1.925v-7.463l6.283-6.283c.197.167.417.322.649.458l.022.012A4.575 4.575 0 0 0 23.841.692L23.819.68zm.999 3.507-2.494.007 1.241-2.16a3.305 3.305 0 0 1 1.251 2.135zm-2.038-2.609-1.241 2.166-1.254-2.153a3.285 3.285 0 0 1 1.264-.248c.443 0 .866.086 1.253.243zm-4.111 1.429c.218-.379.496-.698.825-.955l.007-.005 1.254 2.153-2.488.007c.056-.449.198-.855.41-1.216l-.008.015zM3.359 5.506H6.92l.49 1.187H4.547zm14.894 1.188h-.813V6.7H8.387l-.49-1.187h11.534zm2.045 1.026 1.241-2.166 1.254 2.153c-.373.158-.807.25-1.262.25-.444 0-.868-.087-1.255-.246l.022.008zm4.111-1.422a3.297 3.297 0 0 1-.824.955l-.007.005-1.254-2.153 2.488-.006a3.35 3.35 0 0 1-.411 1.214l.009-.016z"})),w=e.div`
  position: relative;
  margin-bottom: 14px;
  display: flex;
  gap: 2px;
  align-items: baseline;
`,v=e.h1`
  color: ${a.light};
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
    letter-spacing: -0.8px;
  }
`,p=d`
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
`,$=e(s)`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 100%;
  display: block;
  fill: ${a.disabled};
  stroke: ${a.light};

  animation: ${p} 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @media screen and (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`,z=e.p`
  margin-top: 14px;
  margin-bottom: 40px;

  color: ${a.light};

  @media screen and (max-width: 767px) {
    width: 319px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 485px;
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`,y=e.div`
  display: flex;
  gap: 14px;
`,g=e(l)`
  color: ${a.secondaryDark};
  background: ${a.light};

  &:hover {
    color: ${a.light};
    background: ${a.secondaryDark};
  }

  @media screen and (min-width: 768px) {
    color: #161f37;
  }
`,B=e(g)`
  color: ${a.light};
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  &:hover {
    color: ${a.secondaryDark};
    background: ${a.light};
  }
`,n="/DrinkMaster/assets/hero-69dde966.jpg",x="/DrinkMaster/assets/hero@2x-4261e87c.jpg",m=e.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding: 0 64px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`,h=e.div`
  position: absolute;
  left: 80px;
  top: 0;
  width: 100%;
  height: 100%;
z-index:-1;
  background: linear-gradient(0deg, #0a0a1120 0%, #0a0a1120 100%),
    linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 25%),
    linear-gradient(82deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%), url(${n});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: linear-gradient(0deg, #0a0a1120 0%, #0a0a1120 100%),
      linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      linear-gradient(82deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      url(${x});
  }

  background-position: left 20% center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background: linear-gradient(0deg, rgba(10, 10, 17, 0) 0%, #0a0a1120 100%),
    linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 25%),
    linear-gradient(82deg, #0a0a11 15%, rgba(10, 10, 17, 0) 30%), url(${n});

   left: 302px;
    background-position: left center;
    background-size:cover; 
    }
    @media screen and (min-width: 1440px) {
       background: linear-gradient(0deg, rgba(10, 10, 17, 0) 0%, #0a0a1120 100%),
    linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 25%),
    linear-gradient(82deg, #0a0a11 8%, rgba(10, 10, 17, 0) 30%), url(${n});
      left: 737px;
      background-position: left;
      background-size:60%; 
      }
    }
  }

`,b=e(o)`
  background-color: #4070cd50;
  @media screen and (min-width: 768px) {
    top: -50px;
    left: -665px;
  }

  @media screen and (min-width: 1440px) {
    top: -231px;
    left: -494px;
  }
`,u=e(o)`
  background-color: #bce6d240;
  filter: blur(89.71px);
  width: 257px;
  height: 247px;
  top: 84px;
  left: 42px;

  @media screen and (min-width: 768px) {
    background-color: #bce6d230;
    width: 387px;
    height: 372px;
    top: 46px;
    left: 0;
  }

  @media screen and (min-width: 1440px) {
    background-color: #bce6d240;
    height: 381px;
    top: -132px;
    left: 171px;
  }
`,f=e(c)`
  display: block;
`,j=({children:i})=>t.jsxs(m,{children:[i,t.jsx(h,{}),t.jsx(b,{}),t.jsx(u,{}),t.jsx(f,{})]});export{g as A,y as B,w as F,$ as S,v as T,j as W,z as a,B as b};
