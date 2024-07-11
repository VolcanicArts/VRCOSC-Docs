"use strict";(self.webpackChunkvrcosc_docs=self.webpackChunkvrcosc_docs||[]).push([[830],{2925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(4848),r=a(8453);const s={sidebar_position:1,description:"Creating modules with V1's SDK."},i="Module Creation",o={id:"V1/module-creation",title:"Module Creation",description:"Creating modules with V1's SDK.",source:"@site/docs/V1/module-creation.md",sourceDirName:"V1",slug:"/V1/module-creation",permalink:"/docs/V1/module-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/VolcanicArts/VRCOSC/docs/V1/module-creation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Creating modules with V1's SDK."},sidebar:"tutorialSidebar",previous:{title:"V1",permalink:"/docs/category/v1"},next:{title:"ChatBox V3",permalink:"/docs/V1/chatbox-v3"}},l={},d=[{value:"Notes",id:"notes",level:2},{value:"Templates",id:"templates",level:2},{value:"Assembly",id:"assembly",level:2},{value:"Testing",id:"testing",level:2},{value:"Title",id:"title",level:3},{value:"Description",id:"description",level:3},{value:"Author",id:"author",level:3},{value:"Group",id:"group",level:3},{value:"Prefab",id:"prefab",level:3},{value:"Info",id:"info",level:3},{value:"Legacy",id:"legacy",level:3},{value:"Settings",id:"settings",level:2},{value:"Settings Retrieval",id:"settings-retrieval",level:3},{value:"Parameters",id:"parameters",level:2},{value:"General",id:"general",level:2},{value:"Module Start",id:"module-start",level:3},{value:"Module Stop",id:"module-stop",level:3},{value:"Module Update",id:"module-update",level:3},{value:"Avatar Specific",id:"avatar-specific",level:2},{value:"Avatar Change",id:"avatar-change",level:3},{value:"Player Update",id:"player-update",level:3},{value:"World Specific",id:"world-specific",level:2},{value:"Creating Attributes",id:"creating-attributes",level:2},{value:"Setting Attributes",id:"setting-attributes",level:2},{value:"OnModuleStart",id:"onmodulestart",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"module-creation",children:"Module Creation"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["V2 of the app is currently in development and has a new SDK for module creation which allows for installation of modules inside the app with automatic updates from GitHub releases. You can check it out in the ",(0,n.jsx)(t.a,{href:"https://discord.gg/vj4brHyvT5",children:"Discord Server"}),"!"]})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(t.p,{children:["Every module class is instantiated when VRCOSC is started. So if you have a module that has class-wide variables that control states, make sure to reset them in the ",(0,n.jsx)(t.code,{children:"OnModuleStart"})," event."]}),"\n",(0,n.jsxs)(t.p,{children:["I also recommend to never instantiate anything in the constructor of the module, rather make the objects you want to instantiate nullable and if they're null in ",(0,n.jsx)(t.code,{children:"OnModuleStart"})," then instantiate them. This will make sure that if a user doesn't run the module but the objects you instantiate throw any exception, the app can still update and module updates can still be received."]}),"\n",(0,n.jsx)(t.h2,{id:"templates",children:"Templates"}),"\n",(0,n.jsx)(t.p,{children:"Templates are available through the use of NuGet. Running the following in a command prompt will install the template"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"dotnet new install VolcanicArts.VRCOSC.Templates"})}),"\n",(0,n.jsx)(t.p,{children:"Next you can create a new project for your module where the project name is the module name."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"dotnet new VRCOSCModuleDefault -n MODULENAME"})}),"\n",(0,n.jsx)(t.h2,{id:"assembly",children:"Assembly"}),"\n",(0,n.jsxs)(t.p,{children:["To organise your assembly in the listing screen, you need to set a custom AssemblyProduct. In Rider, this can be done here:\r\n",(0,n.jsx)(t.img,{src:"https://github.com/VolcanicArts/VRCOSC/assets/29819296/27961cbf-008a-4acb-879f-48f1131b1ca7",alt:"image"})]}),"\n",(0,n.jsx)(t.p,{children:"The AssemblyProduct is the name that will be used to display to the user what assembly your modules are contained in. This may change in the future."}),"\n",(0,n.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,n.jsx)(t.p,{children:"The custom template already moves your built assembly to the correct folder on build, however if your module requires libraries along side your module, you will need to create a folder inside the assemblies folder. It can be named whatever you want for now, and put your module assembly and dependencies inside there. This tells VRCOSC to load your module in an isolated environment, meaning you can use different versions of a library that may already be present in VRCOSC's SDK. You will need to restart VRCOSC to load the modules."}),"\n",(0,n.jsx)(t.h1,{id:"class-name",children:"Class name"}),"\n",(0,n.jsxs)(t.p,{children:["The class name when creating a module must explicitly be the title of the module plus ",(0,n.jsx)(t.code,{children:"Module"}),". This is to differentiate the class from anything else that may be inside the framework."]}),"\n",(0,n.jsx)(t.p,{children:"This class name is used when saving data, so if this class name is changed at any point, user data will not be read from storage and they will need to redefine all the settings they may have customised. It is vital this does not get changed, so choose a name that best fits the module's purpose."}),"\n",(0,n.jsxs)(t.p,{children:["If, however, you ",(0,n.jsx)(t.em,{children:"reaaaaaally"})," need to change a module's name, you can use the ",(0,n.jsx)(t.code,{children:'[ModuleLegacy("legacymodule")]'})," tag to allow for migration to occur."]}),"\n",(0,n.jsx)(t.h1,{id:"metadata",children:"Metadata"}),"\n",(0,n.jsx)(t.p,{children:"All modules are provided with a set of C# attributes to place on your module class to define the metadata of the module."}),"\n",(0,n.jsx)(t.h3,{id:"title",children:"Title"}),"\n",(0,n.jsxs)(t.p,{children:["Defined using ",(0,n.jsx)(t.code,{children:"[ModuleTitle(string title)]"}),". The title of the module is what's shown to the user. This can be different from the class name explained before, but in practise it should match as to not cause confusion."]}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Defined using ",(0,n.jsx)(t.code,{children:"[ModuleDescription(string shortDescription, string? longDescription = null)]"}),". A short description of your module and an optional longer description."]}),"\n",(0,n.jsx)(t.h3,{id:"author",children:"Author"}),"\n",(0,n.jsxs)(t.p,{children:["Defined using ",(0,n.jsx)(t.code,{children:"[ModuleAuthor(string name, string? url = null, string? iconUrl = null)]"}),". Your name, most commonly your GitHub username. An optional URL to link your GitHub, and an optional icon URL for your icon to be displayed on your module."]}),"\n",(0,n.jsx)(t.h3,{id:"group",children:"Group"}),"\n",(0,n.jsxs)(t.p,{children:["Defined using ",(0,n.jsx)(t.code,{children:"[ModuleGroup(ModuleType type)]"}),". For grouping your module. This is more for organisation than anything else, but allows the user to filter modules a lot easier. If you think your module requires a new module type, make a post in the ",(0,n.jsx)(t.a,{href:"https://discord.gg/vj4brHyvT5",children:"Discord Server"})," and I'll be happy to add it."]}),"\n",(0,n.jsx)(t.h3,{id:"prefab",children:"Prefab"}),"\n",(0,n.jsxs)(t.p,{children:["Defined using ",(0,n.jsx)(t.code,{children:"[ModulePrefab(string name, string? url = null)"}),". If this module is associated with a prefab, and if so the name of it, and an optional download URL."]}),"\n",(0,n.jsx)(t.h3,{id:"info",children:"Info"}),"\n",(0,n.jsxs)(t.p,{children:["Defined using ",(0,n.jsx)(t.code,{children:"[ModuleInfo(string description, string? url = null)]"}),". This is allowed to be present on the class multiple times allowing for multiple info cards. This allows you to define text that appears in the help menu (the question mark on the module listing page). It's meant to be used as a small area to notify users of any extra things they may have to do to work with the parameters listed, but can be used for anything you want to tell the user."]}),"\n",(0,n.jsx)(t.h3,{id:"legacy",children:"Legacy"}),"\n",(0,n.jsxs)(t.p,{children:["Defined using ",(0,n.jsx)(t.code,{children:"[ModuleLegacy(string? legacySerialisedName = null]"}),". This allows you to migrate from a legacy serialised name if you want to change the class name of a module. This is a last resort as you should ",(0,n.jsx)(t.em,{children:"never"})," need to change the name of a module, but in the event that you do the serialised name of a module is ",(0,n.jsx)(t.code,{children:"classnamemodule"}),". For example, ",(0,n.jsx)(t.code,{children:"MediaModule"})," becomes ",(0,n.jsx)(t.code,{children:"mediamodule"}),". Once you're satisfied that all the users of your module have had their module migrated you can take this attribute off, but it's fine to leave on as VRCOSC will only do a single migration."]}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"legacySerialisedName"})," of ",(0,n.jsx)(t.code,{children:"null"})," will tell VRCOSC that you don't want to do any legacy migration, which is equivalent to not having the attribute present at all."]}),"\n",(0,n.jsx)(t.h1,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(t.p,{children:["Attributes of a module are the settings and parameters. Settings allow the user to customise any settings you require for your module, and parameters are what get sent to and received from VRChat. Parameters specifically get registered to ensure that only the parameters you want enter and leave your module to let you not have to worry about filtering, however you can allow any parameter into your module using ",(0,n.jsx)(t.code,{children:"OnAnyParameterReceived(ReceivedParameter parameter)"})," (explained later)."]}),"\n",(0,n.jsxs)(t.p,{children:["To create attributes, you must call ",(0,n.jsx)(t.code,{children:"CreateSetting()"})," and ",(0,n.jsx)(t.code,{children:"CreateParameter()"})," inside the overridden ",(0,n.jsx)(t.code,{children:"CreateAttributes()"})," method. Below is an example taken from the Heartrate module."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'public override void CreateAttributes()\r\n{\r\n    CreateParameter<bool>(HeartrateParameter.Enabled, ParameterMode.Write, "VRCOSC/Heartrate/Enabled", "Enabled", "Whether this module is attempting to emit values");\r\n    CreateParameter<float>(HeartrateParameter.Normalised, ParameterMode.Write, "VRCOSC/Heartrate/Normalised", "Normalised", "The heartrate value normalised to 240bpm");\r\n    CreateParameter<float>(HeartrateParameter.Units, ParameterMode.Write, "VRCOSC/Heartrate/Units", "Units", "The units digit 0-9 mapped to a float");\r\n    CreateParameter<float>(HeartrateParameter.Tens, ParameterMode.Write, "VRCOSC/Heartrate/Tens", "Tens", "The tens digit 0-9 mapped to a float");\r\n    CreateParameter<float>(HeartrateParameter.Hundreds, ParameterMode.Write, "VRCOSC/Heartrate/Hundreds", "Hundreds", "The hundreds digit 0-9 mapped to a float");\r\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"settings",children:"Settings"}),"\n",(0,n.jsxs)(t.p,{children:["A setting requires an Enum as a key. It's recommended you create an Enum along the lines of ",(0,n.jsx)(t.code,{children:"[ModuleName]Setting"})," to keep things organised."]}),"\n",(0,n.jsx)(t.p,{children:"Following that is the display name and description of the setting. These are cosmetic and only serve the purpose of describing what the setting does to the user. You have more space with the description that in the module metadata so this can be more in-depth."}),"\n",(0,n.jsxs)(t.p,{children:["Finally you define the default value of the setting. This ",(0,n.jsx)(t.em,{children:"must"})," be set, even if it's an empty string, or a false bool, as this tells the module what type the setting is."]}),"\n",(0,n.jsx)(t.p,{children:"Settings can also have an optional list of dependencies. These are other settings that are required to be in a certain state for this setting to be enabled and editable."}),"\n",(0,n.jsx)(t.p,{children:"Settings get stored locally on a user's machine under their keys. There are a few notes on how the storage works:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If a key is changed or removed, the user's value for the previous key is deleted"}),"\n",(0,n.jsx)(t.li,{children:"If a new key is added, the default setting will be used"}),"\n",(0,n.jsx)(t.li,{children:"If a user hasn't changed the default value of a setting, and you change the default value, it will reflect on their end"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"settings-retrieval",children:"Settings Retrieval"}),"\n",(0,n.jsxs)(t.p,{children:["You can access settings by calling the ",(0,n.jsx)(t.code,{children:"GetSetting<T>()"})," method where ",(0,n.jsx)(t.code,{children:"T"})," is the setting's type. If your setting is a list, you instead need to call ",(0,n.jsx)(t.code,{children:"GetSettingList<T>()"})," where ",(0,n.jsx)(t.code,{children:"T"})," is the contents of the list."]}),"\n",(0,n.jsx)(t.p,{children:"This can be done in any of the events (defined below), and it will return the latest value of what the user entered. Settings are editable at runtime so make sure you don't cache settings locally unless you want that type of behaviour."}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["A parameter requires an Enum as a key. It's recommended you create an Enum along the lines of ",(0,n.jsx)(t.code,{children:"[ModuleName]Parameter"}),". Next is the parameter mode; This doesn't affect how the data is sent, but is a contingency to make sure your code works as expected. Next is the parameter's name, and then finally a description."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'    CreateParameter<bool>(MediaParameter.Play, ParameterMode.ReadWrite, @"VRCOSC/Media/Play", "Play/Pause", @"True for playing. False for paused");\r\n    CreateParameter<float>(MediaParameter.Volume, ParameterMode.ReadWrite, @"VRCOSC/Media/Volume", "Volume", @"The volume of the process that is controlling the media");\r\n    CreateParameter<bool>(MediaParameter.Muted, ParameterMode.ReadWrite, @"VRCOSC/Media/Muted", "Muted", @"True to mute. False to unmute");\r\n    CreateParameter<int>(MediaParameter.Repeat, ParameterMode.ReadWrite, @"VRCOSC/Media/Repeat", "Repeat", @"0 for disabled. 1 for single. 2 for list");\r\n    CreateParameter<bool>(MediaParameter.Shuffle, ParameterMode.ReadWrite, @"VRCOSC/Media/Shuffle", "Shuffle", @"True for enabled. False for disabled");\r\n    CreateParameter<bool>(MediaParameter.Next, ParameterMode.Read, @"VRCOSC/Media/Next", "Next", @"Becoming true causes the next track to play");\r\n    CreateParameter<bool>(MediaParameter.Previous, ParameterMode.Read, @"VRCOSC/Media/Previous", "Previous", @"Becoming true causes the previous track to play");\n'})}),"\n",(0,n.jsx)(t.p,{children:"To handle incoming parameters, methods can be overridden:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:"    protected virtual void OnAnyParameterReceived(ReceivedParameter parameter) { }\r\n    // AvatarModule only\r\n    protected virtual void OnAvatarModuleReceived(AvatarParameter parameter) { }\r\n    // WorldModule only\r\n    protected virtual void OnWorldModuleReceived(WorldParameter parameter) { }\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"OnAnyParameterReceived"})," should not be used unless you absolutely have to as this allows any avatar parameter to enter your module, not just the registered parameters. If you'd like an example, a viable use case is the Counter module."]}),"\n",(0,n.jsx)(t.h1,{id:"events",children:"Events"}),"\n",(0,n.jsxs)(t.p,{children:["All modules come with default module events. These are separate from events that occur due to OSC. It's important to note that all events are ",(0,n.jsx)(t.em,{children:"synchronous"})," and if you need to do initialisation of something that will take more than a few microseconds you must use an asynchronous Task to stop the update thread freezing."]}),"\n",(0,n.jsxs)(t.p,{children:["Events can be accessed by overriding the ",(0,n.jsx)(t.code,{children:"OnModuleStart"})," and ",(0,n.jsx)(t.code,{children:"OnModuleStop"})," methods. There are avatar specific events which can be accessed by overriding the ",(0,n.jsx)(t.code,{children:"OnAvatarChange"})," and ",(0,n.jsx)(t.code,{children:"OnPlayerUpdate"})," methods."]}),"\n",(0,n.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,n.jsx)(t.h3,{id:"module-start",children:"Module Start"}),"\n",(0,n.jsx)(t.p,{children:"The start event occurs whenever VRChat is started or a user manually started the modules. This is only called once on start so is the perfect place to do initial setup of anything your module may need to function, but which is dynamic at runtime."}),"\n",(0,n.jsx)(t.h3,{id:"module-stop",children:"Module Stop"}),"\n",(0,n.jsx)(t.p,{children:"The stop event occurs when all modules are stopped due to VRChat closing or a user manually stopping the modules. This is only called once on stop so can be used to clear any OSC parameters on a user's avatar and reset local module settings (if they aren't already set to a default in Start)."}),"\n",(0,n.jsx)(t.h3,{id:"module-update",children:"Module Update"}),"\n",(0,n.jsxs)(t.p,{children:["To allow your module to have update methods, you define the ",(0,n.jsx)(t.code,{children:"[ModuleUpdate]"})," attribute on any method you'd like to be called at a regular interval. The ",(0,n.jsx)(t.code,{children:"ModuleUpdateMode"})," you provide gives insight into how you'd like the method to update. For example, the ",(0,n.jsx)(t.code,{children:"ModuleUpdateMode"})," of ",(0,n.jsx)(t.code,{children:"ChatBox"})," updates right before the ChatBox evaluates the clips, making it perfect for setting ChatBox data.\r\nSetting the mode to ",(0,n.jsx)(t.code,{children:"Custom"})," gives you control over if you'd like the update method to update once immediately and an update rate."]}),"\n",(0,n.jsx)(t.h2,{id:"avatar-specific",children:"Avatar Specific"}),"\n",(0,n.jsx)(t.h3,{id:"avatar-change",children:"Avatar Change"}),"\n",(0,n.jsx)(t.p,{children:"The avatar change event occurs whenever a user enters a new avatar or when a user loads into a world. Bear in mind that if a user hasn't started VRCOSC before VRChat then you will not receive this event for the first avatar they load into. The avatar ID is passed through this method for use."}),"\n",(0,n.jsx)(t.h3,{id:"player-update",children:"Player Update"}),"\n",(0,n.jsx)(t.p,{children:"This is called whenever anything about the player is updated, for example, their AFK parameter. This can be used to trigger module code that only needs to be ran when something happens to the player's client."}),"\n",(0,n.jsx)(t.h2,{id:"world-specific",children:"World Specific"}),"\n",(0,n.jsx)(t.p,{children:"World modules are currently not in use"}),"\n",(0,n.jsx)(t.h1,{id:"persistence",children:"Persistence"}),"\n",(0,n.jsxs)(t.p,{children:["Modules have a thing called persistence, where you can save the state of your module so that a user can have persistent data. An example use-case of this is the ",(0,n.jsx)(t.code,{children:"CounterModule"})]}),"\n",(0,n.jsxs)(t.p,{children:["To enable persistence you define the ",(0,n.jsx)(t.code,{children:"[ModulePersistent(string serialiseName, string? legacySerialisedName = null)]"})," on any property (must have ",(0,n.jsx)(t.code,{children:"{ get; set; }"})," present). The property can be public or private. This takes in a serialised name to allow you to rename the property without it affecting the serialisation, and a legacy serialised name to allow you to change the serialised name while migrating from an old name so as not to lose the user's data."]}),"\n",(0,n.jsxs)(t.p,{children:["Do note that the persistence loads before ",(0,n.jsx)(t.code,{children:"OnModuleStart"})," and saves after ",(0,n.jsx)(t.code,{children:"OnModuleStop"})," to let you finalise the data if needed, and that the instance is set, meaning any references will be out of date by the time ",(0,n.jsx)(t.code,{children:"OnModuleStart"})," is called, so ensure you only take references in or after your module has started.`"]}),"\n",(0,n.jsx)(t.h1,{id:"chatbox-v3",children:"ChatBox V3"}),"\n",(0,n.jsxs)(t.p,{children:["If you want your module to interface with ChatBox V3, have it extend ",(0,n.jsx)(t.code,{children:"ChatBoxModule"})," instead of ",(0,n.jsx)(t.code,{children:"AvatarModule"})]}),"\n",(0,n.jsx)(t.h2,{id:"creating-attributes",children:"Creating Attributes"}),"\n",(0,n.jsx)(t.p,{children:"To integrate with ChatBox V3 you need to create states, events, and variables."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"ALWAYS"})," register variables before states/events as this allows you to call ",(0,n.jsx)(t.code,{children:"GetVariableFormat()"})," so your states/events can contain the correctly formatted variables."]}),"\n",(0,n.jsxs)(t.p,{children:["Every module that interacts with CBV3 should contain at least 1 state with a key of ",(0,n.jsx)(t.code,{children:"default"}),". If a module only has a single state called ",(0,n.jsx)(t.code,{children:"default"})," then the UI filters out the name to make it cleaner."]}),"\n",(0,n.jsxs)(t.p,{children:["To create variables, call ",(0,n.jsx)(t.code,{children:"CreateVariable()"}),". To create states and events, call ",(0,n.jsx)(t.code,{children:"CreateState()"})," and ",(0,n.jsx)(t.code,{children:"CreateEvent()"})," respectively"]}),"\n",(0,n.jsx)(t.h2,{id:"setting-attributes",children:"Setting Attributes"}),"\n",(0,n.jsxs)(t.p,{children:["To set states, call ",(0,n.jsx)(t.code,{children:"ChangeStateTo()"}),". To trigger events, call ",(0,n.jsx)(t.code,{children:"TriggerEvent()"}),". To set variable values, call ",(0,n.jsx)(t.code,{children:"SetVariableValue()"})]}),"\n",(0,n.jsx)(t.h2,{id:"onmodulestart",children:"OnModuleStart"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"ALWAYS"})," call ",(0,n.jsx)(t.code,{children:"ChangeStateTo()"})," with your starting state. If you do not do this then CBV3 will not register your module as ChatBox-enabled until a valid state is set"]}),"\n",(0,n.jsx)(t.h1,{id:"custom-attribute-ui",children:"Custom Attribute UI"}),"\n",(0,n.jsxs)(t.p,{children:["Instead of calling ",(0,n.jsx)(t.code,{children:"CreateSetting()"})," with the intent on adding a simple boolean or int, you can create a custom extension of ",(0,n.jsx)(t.code,{children:"ModuleAttribute<T>"})," or ",(0,n.jsx)(t.code,{children:"ModuleAttributeList<T>"})," and register that. This allows you to create custom UI."]}),"\n",(0,n.jsx)(t.p,{children:"As this isn't a particularly mass use case as the default settings offered will be useful to 99% of people I won't go into great detail here. If you'd like to get a rundown of how custom UI works then please go to the module-development channel on the Discord server and I'll help you as it requires knowledge of the UI framework I use."})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(6540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);