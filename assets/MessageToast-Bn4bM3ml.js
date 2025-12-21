import{k as n,i as o,r as c,j as t,x as d}from"./index-BEiEE2Na.js";function f(){const{messages:s}=n(e=>e.message),a=o();c.useEffect(()=>{const e=document.createElement("style");e.textContent=`
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `,document.querySelector("style[data-message-animation]")||(e.setAttribute("data-message-animation","true"),document.head.appendChild(e))},[]);const i=e=>({success:"check-circle-fill",info:"info-circle-fill",warning:"exclamation-triangle-fill",error:"x-circle-fill",primary:"flag-fill",secondary:"gear-fill",light:"sun-fill",dark:"moon-fill"})[e]||"info-circle-fill",l=e=>({success:"success",info:"info",warning:"warning",error:"danger",primary:"primary",secondary:"secondary",light:"light",dark:"dark"})[e]||"info";return t.jsx("div",{className:"position-fixed top-0 end-0 p-3",style:{zIndex:9999,maxWidth:"400px",maxHeight:"100vh",overflowY:"auto"},children:s.slice(-5).reverse().map(e=>t.jsxs("div",{className:`alert alert-${l(e.type)} alert-dismissible fade show mb-2 shadow-lg`,role:"alert",style:{opacity:(e.read,1),transition:"opacity 0.3s",animation:"slideInRight 0.3s ease-out"},children:[t.jsxs("div",{className:"d-flex align-items-start",children:[t.jsx("i",{className:`bi bi-${i(e.type)} me-2 flex-shrink-0`}),t.jsxs("div",{className:"flex-grow-1",children:[t.jsx("strong",{children:e.text}),t.jsx("div",{className:"small mt-1 text-muted-50",children:new Date(e.timestamp).toLocaleTimeString("zh-TW")})]})]}),t.jsx("button",{type:"button",className:"btn-close",onClick:()=>a(d(e.id)),"aria-label":"Close"})]},e.id))})}export{f as M};
