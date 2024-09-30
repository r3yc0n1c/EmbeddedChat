"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[101],{4192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=n(4848),i=n(8453);const r={},a="Google Summer of Code 2023, RocketChat",d={permalink:"/EmbeddedChat/docs/blog/EmbeddedChat-2023",source:"@site/blog/EmbeddedChat-2023.md",title:"Google Summer of Code 2023, RocketChat",description:"Create a ready-to-go easy to embed mini-chat React component.",date:"2024-09-30T17:26:46.000Z",tags:[],readingTime:5.9,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"GSoC-2022",permalink:"/EmbeddedChat/docs/blog/EmbeddedChat-2022"},nextItem:{title:"Google Summer of Code 2024, RocketChat",permalink:"/EmbeddedChat/docs/blog/EmbeddedChat-2024"}},o={authorsImageUrls:[]},h=[{value:"\u2b50 Project Abstract",id:"-project-abstract",level:2},{value:"\ud83d\udea2 Deliverables",id:"-deliverables",level:2},{value:"Demo",id:"demo",level:2},{value:"Sneak Peak",id:"sneak-peak",level:3},{value:"Moving to mono repo",id:"moving-to-mono-repo",level:3},{value:"Storybook setup",id:"storybook-setup",level:3},{value:"HTML Embedd Feature",id:"html-embedd-feature",level:3},{value:"Theming",id:"theming",level:3},{value:"Improving API",id:"improving-api",level:3},{value:"Support for slash commands",id:"support-for-slash-commands",level:3},{value:"React Native",id:"react-native",level:3},{value:"Improving Auth",id:"improving-auth",level:3},{value:"\ud83d\ude80 Contributions",id:"-contributions",level:2},{value:"Pull requests to Embeddedchat",id:"pull-requests-to-embeddedchat",level:3},{value:"My overall contributions to RocketChat",id:"my-overall-contributions-to-rocketchat",level:3},{value:"\ud83c\udf93 Mentor",id:"-mentor",level:2},{value:"\ud83d\udd17 Links",id:"-links",level:2},{value:"\u2764\ufe0f Support",id:"\ufe0f-support",level:2},{value:"\ud83d\udcac Connect With Me",id:"-connect-with-me",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("a",{href:"https://summerofcode.withgoogle.com/projects/#6521788818784256",children:(0,s.jsx)("img",{src:"https://i.imgur.com/pgkUceb.png",width:"650",alt:"google-summer-of-code"})}),(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:(0,s.jsx)("p",{children:(0,s.jsx)(t.p,{children:"Create a ready-to-go easy to embed mini-chat React component."})})})]}),"\n",(0,s.jsxs)(t.p,{children:["I worked on a project called ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat",children:"EmbeddedChat"})," which is an in-app chat solution that utilizes the RocketChat chat engine through its REST and real-time APIs to support powerful chat features like reactions, online presence, typing status, threads, and much more."]}),"\n",(0,s.jsx)(t.p,{children:"I would maintain this repository as the final report summary of my GSoC 2023 project and a quick guide for all future GSoC aspirants."}),"\n",(0,s.jsx)(t.h2,{id:"-project-abstract",children:"\u2b50 Project Abstract"}),"\n",(0,s.jsx)(t.p,{children:"The goal of the project is to make a ready-to-use chat solution that could be integrated into any website, web app, or app. This project was a major refactoring and enhancement for the EmbeddedChat 2022 project."}),"\n",(0,s.jsx)(t.h2,{id:"-deliverables",children:"\ud83d\udea2 Deliverables"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Improve authentication - support all OAuth services"}),"\n",(0,s.jsx)(t.li,{children:"Move to a mono repo - auth, api, react, react-native, HTML embed"}),"\n",(0,s.jsx)(t.li,{children:"HTML embed feature"}),"\n",(0,s.jsx)(t.li,{children:"Theming"}),"\n",(0,s.jsx)(t.li,{children:"Improving API"}),"\n",(0,s.jsx)(t.li,{children:"Support for slash commands"}),"\n",(0,s.jsx)(t.li,{children:"Migrating from the fuselage to our own minimal components"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(t.h3,{id:"sneak-peak",children:"Sneak Peak"}),"\n",(0,s.jsxs)(t.p,{children:["EmbeddedChat integrated into my esportsweb.in website.\n",(0,s.jsx)(t.img,{src:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/e42fd503-c7f7-4f30-abbb-9123d9c87257",alt:"EmbeddedChat Reac component"})]}),"\n",(0,s.jsx)(t.h3,{id:"moving-to-mono-repo",children:"Moving to mono repo"}),"\n",(0,s.jsxs)(t.p,{children:["EmbeddedChat's new mono repo structure\n",(0,s.jsx)(t.img,{src:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/ae7593e1-5479-465a-ab9a-e73c6ee85cd6",alt:"structure"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"auth"})," - The auth package includes functions to easily log into a Rocket chat server. Though it is used by embeddedchat's react and react-native client, developers can use this package for their own use cases."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"api"})," - The api package includes functions that are all required to create a chat application using the Rocketchat server. It has functions like connect, login, sendMesage, pinMessage, starMessage, deleteMessage, triggerBlockAction, etc. to perform various operations. One can listen to new/updated message events by attaching event listeners using ",(0,s.jsx)(t.code,{children:"addMessageListener"}),". There are other event listeners which could be added using ",(0,s.jsx)(t.code,{children:"addMessageDeleteListener"}),", ",(0,s.jsx)(t.code,{children:"addTypingStatusListener"}),", ",(0,s.jsx)(t.code,{children:"addActionTriggeredListener"}),", ",(0,s.jsx)(t.code,{children:"addUiInteractionListener"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"react"})," - The react package includes the react components to integrate EmbeddedChat."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"react-native"})," - The react-native project aims at using EmbeddedChat in react native mobile apps."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"htmembed"})," - With this project EmbeddedChat could be integrated into any web app by simply embedding an HTML snippet."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"storybook-setup",children:"Storybook setup"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/5e7e6f05-6ead-4d3b-bb0e-22befacf3cf1",alt:"Screenshot from 2023-09-25 12-09-07"})}),"\n",(0,s.jsx)(t.h3,{id:"html-embedd-feature",children:"HTML Embedd Feature"}),"\n",(0,s.jsx)(t.p,{children:"Simple integrate embedded chat by pasting html snippet into your website"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"<div id=\"embeddedchat\"></div>\n      <script src=\"http://127.0.0.1:4001/embeddedchat.js\"><\/script>\n      <script>\n        // all props for the EmbeddedChat of @embeddedchat/react will go here\n\t\t// The config will be directly applied as props for the EmbeddedChat Component\n        const config = {\n            host: 'http://localhost:3000',\n    \t\troomId: 'GENERAL',\n            isClosable: true,\n            setClosableState: true,\n            moreOpts: true,\n            channelName: 'general',\n            anonymousMode: true,\n            headerColor: 'white',\n            toastBarPosition: 'bottom-end',\n            showRoles: true,\n            showAvatar: false,\n            enableThreads: true,\n            auth: {\n                flow: 'MANAGED',\n            },\n        }\n        EmbeddedChat.renderInElementWithId(config, 'embeddedchat')\n      <\/script>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["HTML Embedded in action\n",(0,s.jsx)(t.img,{src:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/8e803ef2-e4a0-48b9-a931-cb1e778d794d",alt:"htmlembed"})]}),"\n",(0,s.jsx)(t.h3,{id:"theming",children:"Theming"}),"\n",(0,s.jsxs)(t.p,{children:["We can customize EmbeddedChat by passing a custom theme object. Hence, it could take the look and feel of the app or website. We can also customize components by custom stylesheet or passing custom class names through the theme object.\n",(0,s.jsx)(t.img,{src:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/96c191c5-a27f-4999-8fd4-96b0b5035493",alt:"Customizing using theme"})]}),"\n",(0,s.jsx)(t.h3,{id:"improving-api",children:"Improving API"}),"\n",(0,s.jsxs)(t.p,{children:["Our ",(0,s.jsx)(t.code,{children:"api"})," package exposes the ",(0,s.jsx)(t.code,{children:"EmbeddedChatApi"})," class. It comes with a bunch of APIs that could be used to login, send, pin, edit, star or delete message, attach listeners for realtime events. It has the following structure:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"class EmbeddedChatApi {\n    host: string;\n    rid: string;\n    rcClient: Rocketchat;\n    onMessageCallbacks: ((message: any) => void)[];\n    onMessageDeleteCallbacks: ((messageId: string) => void)[];\n    onTypingStatusCallbacks: ((users: string[]) => void)[];\n    onActionTriggeredCallbacks: ((data: any) => void)[];\n    onUiInteractionCallbacks: ((data: any) => void)[];\n    typingUsers: string[];\n    auth: RocketChatAuth;\n    constructor(host: string, rid: string, { getToken, saveToken, deleteToken, autoLogin }: IRocketChatAuthOptions);\n    setAuth(auth: RocketChatAuth): void;\n    getAuth(): RocketChatAuth;\n    getHost(): string;\n    googleSSOLogin(signIn: Function, acsCode: string): Promise<any>;\n    login(userOrEmail: string, password: string, code: string): Promise<{\n        status: string;\n        me: any;\n    } | undefined>;\n    logout(): Promise<void>;\n    connect(): Promise<void>;\n    addMessageListener(callback: (message: any) => void): Promise<void>;\n    removeMessageListener(callback: (message: any) => void): Promise<void>;\n    addMessageDeleteListener(callback: (messageId: string) => void): Promise<void>;\n    removeMessageDeleteListener(callback: (messageId: string) => void): Promise<void>;\n    addTypingStatusListener(callback: (users: string[]) => void): Promise<void>;\n    removeTypingStatusListener(callback: (users: string[]) => void): Promise<void>;\n    addActionTriggeredListener(callback: (data: any) => void): Promise<void>;\n    removeActionTriggeredListener(callback: (data: any) => void): Promise<void>;\n    addUiInteractionListener(callback: (data: any) => void): Promise<void>;\n    removeUiInteractionListener(callback: (data: any) => void): Promise<void>;\n    handleTypingEvent({ typingUser, isTyping }: {\n        typingUser: string;\n        isTyping: boolean;\n    }): void;\n    updateUserNameThroughSuggestion(userid: string): Promise<any>;\n    updateUserUsername(userid: string, username: string): Promise<any>;\n    channelInfo(): Promise<any>;\n    close(): Promise<void>;\n    getMessages(anonymousMode?: boolean, options?: {\n        query?: object | undefined;\n        field?: object | undefined;\n    }): Promise<any>;\n    getThreadMessages(tmid: string): Promise<any>;\n    getChannelRoles(): Promise<any>;\n    sendTypingStatus(username: string, typing: boolean): Promise<void>;\n    sendMessage(message: any, threadId: string): Promise<any>;\n    deleteMessage(msgId: string): Promise<any>;\n    updateMessage(msgId: string, text: string): Promise<any>;\n    starMessage(mid: string): Promise<any>;\n    unstarMessage(mid: string): Promise<any>;\n    getStarredMessages(): Promise<any>;\n    getPinnedMessages(): Promise<any>;\n    pinMessage(mid: string): Promise<any>;\n    unpinMessage(mid: string): Promise<any>;\n    reactToMessage(emoji: string, messageId: string, shouldReact: string): Promise<any>;\n    reportMessage(messageId: string, description: string): Promise<any>;\n    findOrCreateInvite(): Promise<any>;\n    sendAttachment(file: File, fileName: string, fileDescription?: string, threadId?: undefined): Promise<any>;\n    me(): Promise<any>;\n    getChannelMembers(): Promise<any>;\n    getSearchMessages(text: string): Promise<any>;\n    triggerBlockAction({ type, actionId, appId, rid, mid, viewId, container, ...rest }: any): Promise<any>;\n    getCommandsList(): Promise<any>;\n    execCommand({ command, params }: {\n        command: string;\n        params: string;\n    }): Promise<any>;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Demo playgroud for api package\n",(0,s.jsx)(t.img,{src:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/af0952dd-d9de-4ab4-9a12-baaea9b19c6f",alt:"playground_api"})]}),"\n",(0,s.jsx)(t.h3,{id:"support-for-slash-commands",children:"Support for slash commands"}),"\n",(0,s.jsx)(t.p,{children:"We have worked on supporting slash commands along with any UI interactions they perform."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/b4c0dd2e-e77f-49d5-8eb5-f27b1e011817",children:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/b4c0dd2e-e77f-49d5-8eb5-f27b1e011817"})}),"\n",(0,s.jsx)(t.h3,{id:"react-native",children:"React Native"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/2d7e84cc-747d-4a23-acef-8a79363c12bd",alt:"react native"})}),"\n",(0,s.jsx)(t.h3,{id:"improving-auth",children:"Improving Auth"}),"\n",(0,s.jsx)(t.p,{children:"We now support token-based authentication for EmbeddedChat. An app can pass the access token of the services that are configured in RocketChat to EmbeddedChat. It would be useful when the app does not want to show any additional login UI for EmbeddedChat."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/8c36b974-927f-4b12-bd62-2830763ec681",children:"https://github.com/abhinavkrin/GSoC-RocketChat-2023/assets/15830206/8c36b974-927f-4b12-bd62-2830763ec681"})}),"\n",(0,s.jsx)(t.h2,{id:"-contributions",children:"\ud83d\ude80 Contributions"}),"\n",(0,s.jsx)(t.h3,{id:"pull-requests-to-embeddedchat",children:"Pull requests to Embeddedchat"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"PR ID"}),(0,s.jsx)(t.th,{children:"Title with Link"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"217"}),(0,s.jsxs)(t.td,{children:["[IMPROVE] Project-restructure ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/217",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"218"}),(0,s.jsxs)(t.td,{children:["React bootstrap ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/218",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"222"}),(0,s.jsxs)(t.td,{children:["Theming Foundation Set up ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/222",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"223"}),(0,s.jsxs)(t.td,{children:["[NEW] Button replacement for fuselage ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/223",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"224"}),(0,s.jsxs)(t.td,{children:["UI refactoring/box ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/224",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"226"}),(0,s.jsxs)(t.td,{children:["Improve/auth + ActionButton/Icon/Input Component ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/226",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"227"}),(0,s.jsxs)(t.td,{children:["New/added apis ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/227",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"228"}),(0,s.jsxs)(t.td,{children:["New/slash commands+UI kit+theming ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/228",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"229"}),(0,s.jsxs)(t.td,{children:["New/html embed ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/229",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"230"}),(0,s.jsxs)(t.td,{children:["New/message component+avatar ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/230",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"232"}),(0,s.jsxs)(t.td,{children:["React Native Project ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/232",children:"Link"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"233"}),(0,s.jsxs)(t.td,{children:["Fix/new icon components ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/233",children:"Link"})]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pulls?q=is%3Apr+author%3Aabhinavkrin",children:"View all PRs to EmbeddedChat"})}),"\n",(0,s.jsx)(t.h3,{id:"my-overall-contributions-to-rocketchat",children:"My overall contributions to RocketChat"}),"\n",(0,s.jsxs)(t.p,{children:["Besides EmbeddedChat I also contributed to other RocketChat Projects ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/GSoC-Community-Hub/pulls?q=is%3Apr+author%3Aabhinavkrin",children:"GSoC Community Hub"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/RC4Community/pulls?q=is%3Apr+author%3Aabhinavkrin",children:"RC4Community"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/RC4Conferences/pulls?q=is%3Apr+author%3Aabhinavkrin",children:"RC4Conferences"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"-mentor",children:"\ud83c\udf93 Mentor"}),"\n",(0,s.jsx)(t.p,{children:"A big big thank you to my mentor for the guidance and support before and throughout GSoC. \ud83d\ude4f\nI learned beyond GSoC from him and am forever grateful to be mentored by him."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Sidharth Mohanty"})," - ",(0,s.jsx)(t.a,{href:"https://github.com/sidmohanty11",children:"GitHub"}),", ",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/sidmohanty11/",children:"LinkedIn"}),", ",(0,s.jsx)(t.a,{href:"https://twitter.com/sidmohanty11",children:"Twitter"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"-links",children:"\ud83d\udd17 Links"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Read my EmbeddedChat project proposal that got me accepted to GSoC ",(0,s.jsx)(t.a,{href:"https://docs.google.com/document/d/1N6oySFsLxA9fSooTp8pHlCjnJwzVYfC8Cbems-z_uMY/edit?usp=sharing",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["My GSoC Presentation can be found ",(0,s.jsx)(t.a,{href:"https://docs.google.com/presentation/d/1be7EnIjVjPN1vx11I06GeNqkDlWuynKZRKRYX9_ePOA/edit?usp=sharing",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Watch the above presentation in video - ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=Y5bbkxRyu4o",children:"here"})," !"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\ufe0f-support",children:"\u2764\ufe0f Support"}),"\n",(0,s.jsx)(t.p,{children:"Learned something new today? Reciprocate the love. \u2b50 this repo for good karma."}),"\n",(0,s.jsx)(t.h2,{id:"-connect-with-me",children:"\ud83d\udcac Connect With Me"}),"\n",(0,s.jsx)(t.p,{children:"Want to discuss about GSoC / Rocket.Chat / Open-source ? Let's connect!"}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Student"})}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Abhinav Kumar"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Organization"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://rocket.chat/",children:"Rocket.Chat"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Project"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://summerofcode.withgoogle.com/programs/2023/projects/sUXGt89N",children:"EmbeddedChat 2023"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"GitHub"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://github.com/abhinavkrin",children:"@abhinavkrin"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"LinkedIn"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/abhinavkrin",children:"abhinavkrin"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Twitter"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://www.twitter.com/abhinavkr_in",children:"abhinavkr_in"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Website"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://avitechlab.com",children:"avitechlab.com"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Email"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)("a",{href:"mailto:abhinav@avitechlab.com",children:(0,s.jsx)(t.a,{href:"mailto:abhinav@avitechlab.com",children:"abhinav@avitechlab.com"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Rocket.Chat"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://open.rocket.chat/direct/abhinav.kumar30",children:"abhinav.kumar30"})})]})]})]})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var s=n(6540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);