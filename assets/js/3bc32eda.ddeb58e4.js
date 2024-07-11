"use strict";(self.webpackChunkvrcosc_docs=self.webpackChunkvrcosc_docs||[]).push([[588],{2048:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=i(4848),s=i(8453);const o={sidebar_position:3},a="Settings",l={id:"V2/SDK/settings",title:"Settings",description:"Settings are a way of letting a user configure your module. Settings are static, and are required to be defined inside OnPreLoad so that a user's settings can be loaded when the module loads.",source:"@site/docs/V2/SDK/settings.md",sourceDirName:"V2/SDK",slug:"/V2/SDK/settings",permalink:"/docs/V2/SDK/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/VolcanicArts/VRCOSC/docs/V2/SDK/settings.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/V2/SDK/getting-started"},next:{title:"Parameters",permalink:"/docs/V2/SDK/parameters"}},r={},d=[{value:"Creating Settings",id:"creating-settings",level:2},{value:"Toggle",id:"toggle",level:3},{value:"TextBox",id:"textbox",level:3},{value:"Slider",id:"slider",level:3},{value:"Dropdown",id:"dropdown",level:3},{value:"DateTime",id:"datetime",level:3},{value:"TextBox List",id:"textbox-list",level:3},{value:"KeyValuePair List",id:"keyvaluepair-list",level:3},{value:"Custom",id:"custom",level:3},{value:"Groups",id:"groups",level:2},{value:"Retreiving Settings",id:"retreiving-settings",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"settings",children:"Settings"}),"\n",(0,n.jsxs)(t.p,{children:["Settings are a way of letting a user configure your module. Settings are static, and are required to be defined inside ",(0,n.jsx)(t.code,{children:"OnPreLoad"})," so that a user's settings can be loaded when the module loads."]}),"\n",(0,n.jsx)(t.h2,{id:"creating-settings",children:"Creating Settings"}),"\n",(0,n.jsx)(t.h3,{id:"toggle",children:"Toggle"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'CreateToggle(MyModule.ToggleSetting, "Toggle Title", "Toggle Description", false);\n'})}),"\n",(0,n.jsx)(t.p,{children:"Toggles take in the setting lookup, display title, display description, and the default value."}),"\n",(0,n.jsx)(t.h3,{id:"textbox",children:"TextBox"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'CreateTextBox(MyModule.TextBoxStringSetting, "String Title", "String Description", string.Empty);\r\nCreateTextBox(MyModule.TextBoxIntSetting, "Int Title", "Int Description", 0);\r\nCreateTextBox(MyModuke.TextBoxFloatSetting, "Float Title", "Float Description", 0f);\n'})}),"\n",(0,n.jsx)(t.p,{children:"TextBoxes take the setting lookup, display title, display description, and the default value. TextBoxes support strings, ints, and floats, where the validation will be automatically handled for you."}),"\n",(0,n.jsx)(t.h3,{id:"slider",children:"Slider"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'CreateSlider(MyModule.SliderIntSetting, "Int Title", "Int Description", 0, 0, 10);\r\nCreateSlider(MyModule.SliderFloatSetting, "Float Title", "Float Description", 0f, 0f, 1f);\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sliders take the setting lookup, display title, display description, the default value, the minimum value, and the maximum value."}),"\n",(0,n.jsx)(t.p,{children:"Sliders also have an optional field to pass through that is the tick frequency of the slider that is displayed."}),"\n",(0,n.jsx)(t.h3,{id:"dropdown",children:"Dropdown"}),"\n",(0,n.jsx)(t.p,{children:"Note: Dropdowns only accept enums as settings are required to be static. If you need to populate a dynamic list, look at the runtime page."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'CreateDropdown(MyModule.DropdownSetting, "Dropdown Title", "Dropdown Description", SomeEnum.SomeValue)\n'})}),"\n",(0,n.jsx)(t.p,{children:"Dropdowns take the setting lookup, display title, display description, and the default value. The default value also tells the setting which enum to use to populate the dropdown."}),"\n",(0,n.jsx)(t.h3,{id:"datetime",children:"DateTime"}),"\n",(0,n.jsx)(t.p,{children:"Note: DateTime automatically handles timezone conversion, meaning users can share their configs and it will convert to their local time allow things like countdowns to sync up."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'CreateDateTime(MyModule.DateTimeSetting, "DateTime Title", "DateTime Description", DateTimeOffset.Now);\n'})}),"\n",(0,n.jsx)(t.p,{children:"DateTimes take the setting lookup, display title, display description, and default value."}),"\n",(0,n.jsx)(t.h3,{id:"textbox-list",children:"TextBox List"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'CreateTextBoxList(MyModule.TextBoxListStringSetting, "TextBox String List Title", "TextBox String List Description", ["Some", "Default", "Values"]);\r\nCreateTextBoxList(MyModule.TextBoxListIntSetting, "TextBox Int List Title", "TextBox Int List Description", [1, 2, 3]);\r\nCreateTextBoxList(MyModule.TextBoxListFloatSetting, "TextBox Float List Title", "TextBox Float List Description", [0f, 0.5f, 1f]);\n'})}),"\n",(0,n.jsx)(t.p,{children:"TextBox Lists create a list of textboxes. All of the textboxes are require to be the same value, and they support strings, ints, and floats."}),"\n",(0,n.jsx)(t.h3,{id:"keyvaluepair-list",children:"KeyValuePair List"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'CreateKeyValuePairList(MyModule.KeyValuePairSetting, "KeyValuePair Title", "KeyValuePair Description", [{"DefaultKey": "DefaultValue"}], "Key Title", "Value Title")\n'})}),"\n",(0,n.jsx)(t.p,{children:"KeyValuePairs allow for mapping a key to a value. This setting is essentially a textbox list but paired up, and with a label for the keys and values."}),"\n",(0,n.jsx)(t.h3,{id:"custom",children:"Custom"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'CreateCustom(MyModule.CustomSetting, new CustomModuleSetting(new ModuleSettingMetadata("My Custom Setting", "Custom setting description", typeof(CustomModuleSettingPage))));\n'})}),"\n",(0,n.jsx)(t.p,{children:"Custom settings takes the setting lookup, the custom setting which requires, at least, the metadata of the display title, display description, and the type of the custom page to render the setting."}),"\n",(0,n.jsx)(t.p,{children:"Creating custom settings requires knowledge of WPF so that you can create the custom page, and is generally not needed unless you're doing very custom modules. Feel free to reach out on Discord as if I can do a more general implementation of a setting and add it to the SDK that would benefit more."}),"\n",(0,n.jsx)(t.h2,{id:"groups",children:"Groups"}),"\n",(0,n.jsx)(t.p,{children:"Setting groups can be made by providing setting lookups:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'CreateGroup("My New Group", MyModule.ToggleSetting, MyModule.SliderIntSetting);\n'})}),"\n",(0,n.jsx)(t.p,{children:"These are only visual and allow for organisation."}),"\n",(0,n.jsx)(t.h2,{id:"retreiving-settings",children:"Retreiving Settings"}),"\n",(0,n.jsx)(t.p,{children:"There are 2 methods you can use to get a setting. One to get the setting, and one to get the setting value. Getting the setting value is a shorthand for getting the setting. You mostly won't need to access the setting directly, but it's useful for when you're making custom settings and need to access anything inside it."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:"GetSetting<CustomModuleSetting>(MyModule.CustomSetting);\r\nGetSettingValue<bool>(MyModule.ToggleSetting);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Most of the time you'll be using the bottom method, where this retrieves the backing value of the setting directly. The raw value of the setting, if allowed, can be converted. For example, if you have a settings list you can either do ",(0,n.jsx)(t.code,{children:"GetSettingValue<IEnumerable<string>>()"})," or ",(0,n.jsx)(t.code,{children:"GetSettingValue<List<string>>()"}),". Both work exactly the same and is completely up to your preference."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);