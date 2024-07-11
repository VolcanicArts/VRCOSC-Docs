"use strict";(self.webpackChunkvrcosc_docs=self.webpackChunkvrcosc_docs||[]).push([[215],{8809:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var n=o(4848),s=o(8453);const a={sidebar_position:3,description:"Module flow"},d="Flow",l={id:"V2/SDK/flow",title:"Flow",description:"Module flow",source:"@site/docs/V2/SDK/flow.md",sourceDirName:"V2/SDK",slug:"/V2/SDK/flow",permalink:"/docs/V2/SDK/flow",draft:!1,unlisted:!1,editUrl:"https://github.com/VolcanicArts/VRCOSC/docs/V2/SDK/flow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Module flow"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/V2/SDK/getting-started"},next:{title:"Settings",permalink:"/docs/V2/SDK/settings"}},i={},r=[{value:"Loading",id:"loading",level:2},{value:"Start",id:"start",level:2},{value:"Stop",id:"stop",level:2},{value:"Update",id:"update",level:2},{value:"Avatar Change",id:"avatar-change",level:2},{value:"Player Update",id:"player-update",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"flow",children:"Flow"}),"\n",(0,n.jsx)(t.h2,{id:"loading",children:"Loading"}),"\n",(0,n.jsxs)(t.p,{children:["There are 2 essential methods for defining your settings and parameters. ",(0,n.jsx)(t.code,{children:"OnPreLoad"})," and ",(0,n.jsx)(t.code,{children:"OnPostLoad"}),". As the names suggest, ",(0,n.jsx)(t.code,{children:"OnPreLoad"})," happens before the module loads the user's data from disk and begins the loading process to get itself ready to be run. ",(0,n.jsx)(t.code,{children:"OnPostLoad"})," happens after all this."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"OnPreLoad"})," is where you should define all the static things for the module. E.G, creating the settings, registering the parameters, and setting up any unchanging states, events, and variables for the ChatBox"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"OnPostLoad"})," is generally only used for setting up dynamic things for the module. E.G, creating states, events, and variables for the ChatBox that depend on settings. These must be created each time the module is loaded up, as after all this is complete the ChatBox then loads which first validates that all the data it needs is present, else it will refuse to load."]}),"\n",(0,n.jsxs)(t.p,{children:["For a good example of this, you can check the Counter module's code. Since there is a setting to define the counters, ",(0,n.jsx)(t.code,{children:"OnPostLoad"})," is used to create a ",(0,n.jsx)(t.code,{children:"Changed"})," event and ",(0,n.jsx)(t.code,{children:"Value"})," variable for each defined counter."]}),"\n",(0,n.jsx)(t.h2,{id:"start",children:"Start"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"OnModuleStart"})," method is called whenever a user runs the modules. This can include the modules being automatically started. This is only called once on start so is the perfect place to do initial setup of anything your module may need to function, but which is dynamic at runtime. This method returns a ",(0,n.jsx)(t.code,{children:"Task<bool>"})," to allow you to do an asynchronous start. Return false if your module has failed to start, true otherwise."]}),"\n",(0,n.jsx)(t.h2,{id:"stop",children:"Stop"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"OnModuleStop"})," methid is called when all modules are stopped due to VRChat closing or a user manually stopping the modules. This is only called once on stop so can be used to clear any OSC parameters on a user's avatar and reset local module settings (if they aren't already set to a default in Start). This method returns a ",(0,n.jsx)(t.code,{children:"Task"})," to allow you to do an asychronous stop. This will block the user from starting the modules again until all the running modules have stopped meaning you don't have to worry about race conditions with ",(0,n.jsx)(t.code,{children:"OnModuleStart"})," being called while your module is still stopping."]}),"\n",(0,n.jsx)(t.h2,{id:"update",children:"Update"}),"\n",(0,n.jsxs)(t.p,{children:["To allow your module to have update methods, you define the ",(0,n.jsx)(t.code,{children:"[ModuleUpdate(ModuleUpdateMode mode, bool updateImmediately, double deltaMilliseconds)]"})," attribute on any method you'd like to be called at a regular interval."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ModuleUpdateMode"})," you provide gives insight into how you'd like the method to update. A value of ",(0,n.jsx)(t.code,{children:"ChatBox"})," updates just before the ChatBox evaluates. ",(0,n.jsx)(t.code,{children:"Custom"})," lets you set a custom time using ",(0,n.jsx)(t.code,{children:"deltaMilliseconds"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"updateImmediately"})," field will call the method once directly after ",(0,n.jsx)(t.code,{children:"OnModuleStart"})," is called when set to true, otherwise it will wait ",(0,n.jsx)(t.code,{children:"deltaMilliseconds"})," before the first call."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"deltaMilliseconds"})," field defines how long the time is between the update method being called is."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["It's recommended to set variable values in an update method marked with ",(0,n.jsx)(t.code,{children:"ChatBox"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"avatar-change",children:"Avatar Change"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"OnAvatarChange"})," method will be called whenever the user changes their avatar. This can be used to send out all your module parameters again to make sure the user's avatar has the correct parameter values."]}),"\n",(0,n.jsx)(t.h2,{id:"player-update",children:"Player Update"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"OnPlayerUpdate"})," method will be called whenever a built-in VRChat parameter changes. For example, if the user goes AFK and the ",(0,n.jsx)(t.code,{children:"AFK"})," parameter changes this method will be called."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>l});var n=o(6540);const s={},a=n.createContext(s);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);