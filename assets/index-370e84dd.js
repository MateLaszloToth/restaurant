(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const l="/restaurant/harom-majom.jpeg";function c(){const o=document.querySelector("#app"),e=document.createElement("h1");e.textContent="Hello Majmok";const n=document.createElement("img");n.src=l,n.alt="The owners of the Három Majom bistro are sitting next to each other facing the camera.";const a=document.createElement("p");a.textContent=`Az Ízlelő Étterem egy híres magyarországi étterem, amely az ízletes és autentikus magyar konyhájáról ismert. Az étterem elegáns belső terei és barátságos személyzete vonzza a helyi és külföldi vendégeket egyaránt.
    Az Ízlelő Étterem menüjében számos hagyományos magyar étel található, például a gulyásleves, a rántott hús és a halászlé. Az étterem ugyanakkor kínál modern ételeket is, amelyeket az ízletes és egészséges helyi alapanyagok inspiráltak. Az étlap változatos és bőséges, így mindenki megtalálhatja a saját ízlésének megfelelő ételt.`,o.replaceChildren(e,n,a)}function i(){const o=document.querySelector("nav");o.classList.add("nav");const e=document.createElement("div");e.textContent="Home",e.classList.add("tab"),e.id="home";const n=document.createElement("div");n.textContent="Menu",n.classList.add("tab"),n.id="menu";const a=document.createElement("div");return a.textContent="Contact",a.classList.add("tab"),a.id="contact",o.replaceChildren(e,n,a),o}const m="/restaurant/menu/pizza.jpeg",d="/restaurant/menu/hamburger.jpeg",u="/restaurant/menu/breakfast.jpeg",p="/restaurant/menu/spaghetti.jpeg";function g(){const o=document.querySelector("#app"),e=document.createElement("main");e.classList.add("menu");const n=[m,d,u,p];for(const a of n){const t=document.createElement("div");t.classList.add("card"),t.innerHTML=`
        <img src="${a}" alt="A nice dish">
        <h2>A dish</h2>
        <p>Nagyon finom ingyom-bingyom egytál étel</p>
        `,e.appendChild(t)}o.replaceChildren(e)}function h(){const o=document.querySelector("#app"),e=document.createElement("h1");e.textContent="Contact";const n=document.createElement("main");n.innerHTML=`
        <ul class="contacts">
          <li>Név:<span>Mák Feri</span></li>
          <li>Telefon:<span>+36 70 123 4567</span></li>
          <li>Email:<span>harommajom@info.com</span></li>
          <li>Cím:<span>Balatonalmádi</span></li>
        </ul>
    `,o.replaceChildren(e,n)}function f(){document.querySelector("#home").addEventListener("click",c),document.querySelector("#menu").addEventListener("click",g),document.querySelector("#contact").addEventListener("click",h)}i();f();c();
