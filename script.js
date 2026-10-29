/* ===== Editable content: fill these in; empty values stay inactive ===== */
const CONFIG={
 github:"https://github.com/Ahmedabdirasheed",
 linkedin:"https://www.linkedin.com/in/ahmed-abdirashiid-906956446",   // paste Ahmed's exact LinkedIn URL
 email:"ahmedrashiid86@gmail.com",      // paste Ahmed's email
 cv:"Ahmed-Abdirashiid-Ali-CV.pdf",         // path or URL to the CV file
 photo:"ahmed.jpeg",      // e.g. "images/ahmed.jpg" (put the portrait in the images folder)
 instagram:"",  // optional
 facebook:"",   // optional
 university:"Nugaal University, Laascaanod, Sool, Somalia", graduation:"",
 repos:["My-projects","my-frist-project","CEYBERSECURITY-","cyber-lab-2"]
};
const NOTE="Screenshots, topology and findings will be added from Ahmed’s own lab documentation.";
const P=[
{id:"wazuh",cat:["Cybersecurity"],t:"Wazuh Security Monitoring Lab",d:"Hands-on exploration of SIEM-style security monitoring and endpoint visibility.",
 obj:"Understand how a SIEM collects and presents endpoint security events.",built:"A monitoring lab using Wazuh with a Windows 11 endpoint in a virtualized environment.",
 tech:["Wazuh","SIEM","Windows","Virtual Machines","Security Monitoring"],learned:"How endpoint monitoring supports visibility into what is happening on a system.",res:"Documented as a learning lab. No production results are claimed."},
{id:"dvwa",cat:["Cybersecurity"],t:"DVWA Web Security Lab",d:"A controlled, educational lab for understanding web application vulnerabilities.",
 obj:"Learn how common web vulnerabilities work, and how to defend against them, in an authorized lab.",built:"A local lab environment using Kali Linux and DVWA.",
 tech:["Kali Linux","DVWA","Web Security Labs","Linux"],learned:"How weaknesses appear in web apps and what secure coding and configuration prevent them.",res:"Educational lab only; never used against systems without permission."},
{id:"meta",cat:["Cybersecurity"],t:"Metasploitable Lab",d:"Educational vulnerability-testing lab focused on lab setup and defensive understanding.",
 obj:"Practice vulnerability analysis safely, on an intentionally vulnerable machine.",built:"An isolated lab with a Metasploitable target and Kali Linux.",
 tech:["Metasploitable","Kali Linux","Vulnerability Testing","Virtual Machines"],learned:"Security testing concepts, vulnerability analysis, and how findings translate into defensive fixes.",res:"Lab-only learning exercise inside an isolated environment."},
{id:"pt",cat:["Networking"],t:"Cisco Packet Tracer Network Lab",d:"A simulated network with routers, switches and PCs, built and troubleshot in Packet Tracer.",
 obj:"Design and configure a working network with correct addressing and routing.",built:"A topology of routers, switches and PCs with IP addressing, routing and network segmentation.",
 tech:["Cisco Packet Tracer","Routing","Switching","IP Addressing","TCP/IP","Network Troubleshooting"],learned:"How addressing, routing and segmentation fit together, and how to troubleshoot connectivity.",res:"Working simulated topology; topology image and configuration screenshots to be added."},
{id:"web",cat:["Web Development"],t:"Web Development Projects",d:"PHP, Laravel, MySQL and front-end work. Details are being documented.",
 obj:"Build web applications with authentication and database-backed features.",built:"Projects using PHP, Laravel, HTML, CSS and MySQL.",
 tech:["PHP","Laravel","Python","HTML","CSS","MySQL","Authentication"],learned:"Full-stack fundamentals: routing, databases, authentication and UI.",res:"In progress: case study to be written once the project list is confirmed."},
{id:"acad",cat:["Academic Labs","Systems"],t:"Cybersecurity Labs & Academic Projects",d:"Five academic labs covering attack surface, incident impact, CIA, baselines and IP connectivity.",
 obj:"Apply core security and networking concepts to structured coursework.",built:"Attack surface and risk ranking; incident impact mapping; CIA classification with preventive, detective and corrective controls; Windows/Linux security baselines; IP configuration with gateway, DNS, ping and nslookup.",
 tech:["Attack Surface Analysis","Incident Impact Analysis","CIA Triad","Security Baselines","Linux Security","IP Addressing"],learned:"Thinking in assets, threats, risks and controls, and checking systems with logs, services and hardening.",res:"Academic deliverables; individual write-ups can be linked as they are published."}
];
const SK={
 "Networking":["CCNA / Networking Studies","Networking Fundamentals","TCP/IP","IP Addressing","Routing","Switching","Network Administration","Network Troubleshooting","Cisco Packet Tracer"],
 "Cybersecurity":["Cybersecurity Fundamentals","Security Monitoring","SIEM","Wazuh","Linux Security","Vulnerability Testing","Web Security Labs","DVWA","Metasploitable","Security Baselines","CIA Triad","Incident Impact Analysis","Attack Surface Analysis"],
 "Development":["PHP","Laravel","Python","HTML","CSS","MySQL","Web Development","Authentication","Database Fundamentals"],
 "Cloud & Systems":["Cloud Computing","Linux","Windows","Virtual Machines","System Administration","Infrastructure Concepts"]
};
const $=(s,r=document)=>r.querySelector(s);
const el=(tag,props={},kids=[])=>{const e=document.createElement(tag);Object.assign(e,props);kids.forEach(k=>e.append(k));return e};
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove("on"),3200)};
const safeUrl=u=>{if(typeof u!=="string"||!u.trim())return"";try{if(/^data:/i.test(u))return /^data:image\/(jpeg|png|webp);base64,/i.test(u)?u:"";const x=new URL(u,location.href);return["http:","https:","file:"].includes(x.protocol)?x.href:""}catch{return""}};

/* links */
const MSG={linkedin:"LinkedIn URL has not been added yet.",cv:"CV file has not been added yet.",email:"Email has not been added yet."};
document.querySelectorAll("[data-link]").forEach(a=>{
 const k=a.dataset.link,v=CONFIG[k];
 if((k==="instagram"||k==="facebook")){if(safeUrl(v)){a.hidden=false}else return}
 if(k==="email"&&v){a.href="mailto:"+v;a.textContent=v;return}
 if(k!=="email"&&safeUrl(v)){a.href=safeUrl(v);if(k==="cv"){a.removeAttribute("target");a.setAttribute("download","")}return}
 a.addEventListener("click",e=>{e.preventDefault();toast(MSG[k]||"Link not added yet.")});
});
if(CONFIG.photo&&safeUrl(CONFIG.photo)){const i=el("img",{src:safeUrl(CONFIG.photo),alt:"Portrait of Ahmed Abdirashiid Ali",loading:"eager"});i.onerror=()=>i.remove();$("#photo").append(i)}
if(CONFIG.university)$("#uni").textContent=[CONFIG.university,CONFIG.graduation].filter(Boolean).join(" · ");
$("#repos").append(...CONFIG.repos.map(r=>{const a=el("a",{href:CONFIG.github+"/"+r,target:"_blank",rel:"noopener",textContent:r});a.style.cssText="border:1px solid var(--line);border-radius:8px;padding:.5rem .9rem;text-decoration:none;font-weight:500";return a}));

/* nav */
const hd=$("#hd"),bg=$("#burger"),mn=$("#menu");
addEventListener("scroll",()=>hd.classList.toggle("s",scrollY>20),{passive:true});
bg.onclick=()=>{const o=mn.classList.toggle("o");bg.setAttribute("aria-expanded",o)};
mn.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mn.classList.remove("o");bg.setAttribute("aria-expanded","false")}));
const secs=[...document.querySelectorAll("main section[id]")],links=[...mn.querySelectorAll("a[href^='#']:not(.btn)")];
secs.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+s.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe(s));
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rio.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(x=>rio.observe(x));

/* skills */
const tabs=$("#tabs"),chips=$("#chips"),out=$("#skillOut");
function showSkill(s,btn){
 chips.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c===btn));
 const key=s.replace("CCNA / Networking Studies","CCNA").toLowerCase();
 const m=P.filter(p=>p.tech.some(t=>t.toLowerCase()===s.toLowerCase()||t.toLowerCase().includes(key)||key.includes(t.toLowerCase())));
 out.replaceChildren(el("strong",{textContent:s}),document.createTextNode(m.length?" is used in:":" is part of my coursework and independent study. A linked project will be added."));
 if(m.length){const w=el("div");w.className="chips";w.style.marginTop=".7rem";m.forEach(p=>w.append(el("button",{className:"chip",textContent:p.t,onclick:()=>openP(p.id)})));out.append(w)}
}
function showCat(c){
 tabs.querySelectorAll(".tab").forEach(t=>t.setAttribute("aria-pressed",t.dataset.c===c));
 chips.replaceChildren(...SK[c].map(s=>{const b=el("button",{className:"chip",textContent:s});b.setAttribute("aria-pressed","false");b.onclick=()=>showSkill(s,b);return b}));
}
Object.keys(SK).forEach(c=>{const b=el("button",{className:"tab",textContent:c});b.dataset.c=c;b.onclick=()=>showCat(c);tabs.append(b)});
showCat("Networking");

/* projects */
const FIL=["All","Cybersecurity","Networking","Web Development","Systems","Academic Labs"],fl=$("#filters"),pl=$("#plist");
function render(f){
 fl.querySelectorAll(".tab").forEach(t=>t.setAttribute("aria-pressed",t.textContent===f));
 const items=P.filter(p=>f==="All"||p.cat.includes(f));
 pl.replaceChildren(...items.map(p=>{
  const c=el("article",{className:"card pc"});c.append(vis(p));
  c.append(el("span",{className:"cat",textContent:p.cat.join(" / ")}),el("h3",{textContent:p.t}),el("p",{textContent:p.d}));
  const tg=el("div",{className:"tags"});p.tech.slice(0,4).forEach(t=>tg.append(el("span",{textContent:t})));
  c.append(tg,el("button",{className:"btn",textContent:"View case study",onclick:()=>openP(p.id)}));return c}));
}
FIL.forEach(f=>{const b=el("button",{className:"tab",textContent:f});b.onclick=()=>render(f);fl.append(b)});render("All");
const dlg=$("#dlg");let last;
function sec(h,body){const f=document.createDocumentFragment();f.append(el("h4",{textContent:h}));f.append(body);return f}
function openP(id){
 const p=P.find(x=>x.id===id);last=document.activeElement;const b=$("#dbody");
 const tg=el("div",{className:"tags"});p.tech.forEach(t=>tg.append(el("span",{textContent:t})));
 const gh=el("a",{className:"btn p",href:CONFIG.github,target:"_blank",rel:"noopener",textContent:"View on GitHub"});
 b.replaceChildren(el("span",{className:"cat",textContent:p.cat.join(" / "),style:"color:var(--ac);font-weight:700"}),el("h3",{id:"dt",textContent:p.t,style:"font-size:1.6rem;margin:.2rem 0 .6rem"}),
  el("p",{textContent:p.d}),sec("Objective",el("p",{textContent:p.obj})),sec("What I built",el("p",{textContent:p.built})),sec("Technologies",tg),
  sec("What I learned",el("p",{textContent:p.learned})),sec("Result",el("p",{textContent:p.res})),sec("Screenshots and topology",el("div",{className:"shots",textContent:NOTE})),
  el("div",{style:"margin-top:1.2rem"},[gh,el("p",{style:"color:var(--mu);font-size:.85rem;margin:.6rem 0 0",textContent:"Links to the exact repository will be added per project."})]));
 dlg.showModal();
}
$("#dx").onclick=()=>dlg.close();
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
dlg.addEventListener("close",()=>last&&last.focus());

/* form */
const rules={n:v=>v.trim().length>=2||"Enter your name.",m:v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())||"Enter a valid email address.",s:v=>v.trim().length>=3||"Enter a subject.",g:v=>v.trim().length>=10||"Write at least 10 characters."};
$("#cf").addEventListener("submit",e=>{
 e.preventDefault();let ok=true;
 for(const k in rules){const i=$("#"+k),r=rules[k](i.value);const bad=r!==true;i.setAttribute("aria-invalid",bad);$("#e-"+k).textContent=bad?r:"";if(bad)ok=false}
 if(!ok)return;
 const sub=$("#s").value.trim(),body=$("#g").value.trim()+"\n\nFrom: "+$("#n").value.trim()+" ("+$("#m").value.trim()+")";
 if(!CONFIG.email){toast("Email has not been added yet.");return}
 const gm="https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(CONFIG.email)+"&su="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);
 if(!window.open(gm,"_blank","noopener"))location.href="mailto:"+CONFIG.email+"?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);
 toast("Your message is ready in Gmail. Press Send there.");
});
$("#fnote").textContent="Opens Gmail with your message ready to send.";

/* visual polish */
function vis(p){const d=el("div",{className:"pv"});d.setAttribute("aria-hidden","true");
 d.style.setProperty("--h",p.cat[0]==="Cybersecurity"?"#8b7bff":p.cat[0]==="Networking"?"#22d3ee":"#3b82f6");
 d.innerHTML='<svg viewBox="0 0 300 96" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor"><path d="M30 70L90 28 160 60 230 24 280 66M90 28v-14M160 60v26" opacity=".55"/><g fill="currentColor"><circle cx="30" cy="70" r="5"/><circle cx="90" cy="28" r="5"/><circle cx="160" cy="60" r="7"/><circle cx="230" cy="24" r="5"/><circle cx="280" cy="66" r="5"/></g></svg>';return d}
const pgb=$("#pg");addEventListener("scroll",()=>{const m=document.documentElement.scrollHeight-innerHeight;pgb.style.width=(m>0?scrollY/m*100:0)+"%"},{passive:true});
if(matchMedia("(hover:hover)").matches)addEventListener("pointermove",e=>{const g=$("#gl");g.style.setProperty("--x",e.clientX+"px");g.style.setProperty("--y",e.clientY+"px")},{passive:true});
const stack=["Cisco Packet Tracer","Wazuh","Linux","Kali Linux","DVWA","Metasploitable","Laravel","PHP","Python","HTML","CSS","MySQL","Windows"];
$("#mt").append(...[...stack,...stack].map(s=>el("span",{textContent:s})));

$("#copyMail").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(CONFIG.email);toast("Email copied: "+CONFIG.email)}catch{toast("Email: "+CONFIG.email)}});
