"use strict";(self.webpackChunkvrcosc_docs=self.webpackChunkvrcosc_docs||[]).push([[70],{2453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(4848),s=n(8453);const a={sidebar_position:2},o="FAQ",r={id:"faq",title:"FAQ",description:"Here you'll find common things that can fix issues you're running into when using VRCOSC and VRChat.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/VolcanicArts/VRCOSC/docs/faq.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/welcome"},next:{title:"V1",permalink:"/docs/category/v1"}},d={},l=[{value:"Useful Locations",id:"useful-locations",level:2},{value:"VRCOSC",id:"vrcosc",level:3},{value:"VRChat",id:"vrchat",level:3},{value:"Things to try first",id:"things-to-try-first",level:2},{value:"Specific Issues",id:"specific-issues",level:2},{value:"I&#39;ve done everything above and VRChat still won&#39;t receive data",id:"network-adapter",level:3},{value:"Parameters are being received by VRChat in the OSC debug menu, but won&#39;t update on my avatar",id:"received-but-no-update",level:3},{value:"My quick menu says I&#39;ve been timed out for spam",id:"timed-out-for-spam",level:3},{value:"Media is refusing to connect to Spotify",id:"spotify",level:3},{value:"My HardwareStats usage is different from Task Manager",id:"hardware-stats-values",level:3},{value:"My CPU temp is stuck at 0",id:"hardware-stats-cpu-temp",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(t.p,{children:"Here you'll find common things that can fix issues you're running into when using VRCOSC and VRChat."}),"\n",(0,i.jsxs)(t.p,{children:["Anything that isn't listed here or that doesn't solve your issue can be posted in the support forum channel on the ",(0,i.jsx)(t.a,{href:"https://discord.gg/vj4brHyvT5",children:"Discord Server"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"useful-locations",children:"Useful Locations"}),"\n",(0,i.jsx)(t.p,{children:"These can be pasted into file explorer."}),"\n",(0,i.jsx)(t.h3,{id:"vrcosc",children:"VRCOSC"}),"\n",(0,i.jsxs)(t.p,{children:["Logs: ",(0,i.jsx)(t.code,{children:"%appdata%\\VRCOSC\\logs"})]}),"\n",(0,i.jsxs)(t.p,{children:["Install: ",(0,i.jsx)(t.code,{children:"%localappdata%\\VRCOSC"})]}),"\n",(0,i.jsx)(t.h3,{id:"vrchat",children:"VRChat"}),"\n",(0,i.jsxs)(t.p,{children:["Common Install: ",(0,i.jsx)(t.code,{children:"C:\\Program Files (x86)\\Steam\\steamapps\\common\\VRChat"})]}),"\n",(0,i.jsxs)(t.p,{children:["Data: ",(0,i.jsx)(t.code,{children:"%appdata%\\..\\LocalLow\\VRChat\\VRChat"})]}),"\n",(0,i.jsx)(t.h2,{id:"things-to-try-first",children:"Things to try first"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Ensuring that OSC is enabled through your action menu: Options -> OSC -> Enable"}),"\n",(0,i.jsx)(t.li,{children:"Ensuring that your OSC config has been reset: Options -> OSC -> Reset Config"}),"\n",(0,i.jsxs)(t.li,{children:["Deleting the ",(0,i.jsx)(t.code,{children:"OSC"})," folder located in here: ",(0,i.jsx)(t.code,{children:"%appdata%\\..\\LocalLow\\VRChat\\VRChat"})]}),"\n",(0,i.jsx)(t.li,{children:"Changing worlds"}),"\n",(0,i.jsx)(t.li,{children:"Restarting VRCOSC"}),"\n",(0,i.jsx)(t.li,{children:"Restarting VRChat"}),"\n",(0,i.jsx)(t.li,{children:"If you use a VPN, ensuring it is disabled"}),"\n",(0,i.jsx)(t.li,{children:"Restarting your PC"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"specific-issues",children:"Specific Issues"}),"\n",(0,i.jsx)(t.h3,{id:"network-adapter",children:"I've done everything above and VRChat still won't receive data"}),"\n",(0,i.jsx)(t.p,{children:"It's possible Windows has assigned an extra network adapter. Go into your network settings and disable any adapters you're not using to leave just your ethernet/wifi connection"}),"\n",(0,i.jsx)(t.h3,{id:"received-but-no-update",children:"Parameters are being received by VRChat in the OSC debug menu, but won't update on my avatar"}),"\n",(0,i.jsxs)(t.p,{children:["Go to VRChat's ",(0,i.jsx)(t.a,{href:"https://github.com/VolcanicArts/VRCOSC/wiki/FAQ/#vrchat",children:"data"})," and delete the ",(0,i.jsx)(t.code,{children:"OSC"})," folder, then disable and enable OSC. This will force VRChat to regenerate the OSC config for your avatar."]}),"\n",(0,i.jsx)(t.h3,{id:"timed-out-for-spam",children:"My quick menu says I've been timed out for spam"}),"\n",(0,i.jsxs)(t.p,{children:["This is due to your VRChat client lagging and VRChat not taking that into account between when VRCOSC sends ChatBox values. You can increase the ",(0,i.jsx)(t.code,{children:"ChatBox Time Span"})," value in the settings tab by 100-200 milliseconds to compensate for this. VRChat has a default minimum of 1500 milliseconds. If it still occurs, keep increasing the value."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"If this timeout is only happening for you during loading in or out of worlds that's normal behaviour, since VRChat will commonly lag during those times"})}),"\n",(0,i.jsx)(t.h3,{id:"spotify",children:"Media is refusing to connect to Spotify"}),"\n",(0,i.jsxs)(t.p,{children:["Ensure you have the ",(0,i.jsx)(t.a,{href:"https://www.spotify.com/uk/download/windows",children:"Desktop"})," version and not the Windows Store version."]}),"\n",(0,i.jsxs)(t.p,{children:["Also ensure that you have the following setting enabled:\r\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/29819296/211019070-d74e70c6-55d2-4000-ad9f-34f4054c4108.png",alt:"image"})]}),"\n",(0,i.jsx)(t.p,{children:"If both are true, try reinstalling Spotify."}),"\n",(0,i.jsx)(t.h3,{id:"hardware-stats-values",children:"My HardwareStats usage is different from Task Manager"}),"\n",(0,i.jsx)(t.p,{children:"Task Manager rounds values. The library VRCOSC uses for gathering hardware statistics is more accurate."}),"\n",(0,i.jsx)(t.h3,{id:"hardware-stats-cpu-temp",children:"My CPU temp is stuck at 0"}),"\n",(0,i.jsx)(t.p,{children:"VRCOSC needs to be ran as administrator to get your CPU temp."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);