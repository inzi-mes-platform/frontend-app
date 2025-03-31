import React from 'react';
import "./styles.css";

import { 
    People as PeopleIcon
} from '@mui/icons-material';


import 
    PutTogether,
    {
        addReducer,
        registerIcons,
        createRestTemplate
    } from 'inzi-mes-platform-frontend-framework';
import {
    Home,
    NotFound,
    CheckIfHoliday,
    CheckIfHolidayWithBookmarkEnabler,
    PackForHoliday,
    PackForWork,
    TodoList,
    TodoListWithBookmarkEnabler
} from 'inzi-mes-platform-frontend-default-ui';

import BpmnViewer from './BpmnViewer';

const mymenu = [
    {
        "name" : "나의할일",
        "type" : "ListItem",
        "icon" : "PeopleIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "내가해야 할일",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/todo-list",
                "icon" : "PeopleIcon"
            }
        ]
    } ,
    {
        "name" : "휴일체크",
        "type" : "ListItem",
        "icon" : "PeopleIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "휴일체크",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/check-if-holiday",
                "icon" : "PeopleIcon"
            }
        ]
    },
    {
        "name" : "휴일진행",
        "type" : "ListItem",
        "icon" : "PeopleIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "휴일진행",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/pack-for-holiday",
                "icon" : "PeopleIcon"
            }
        ]
    },
    {
        "name" : "업무진행",
        "type" : "ListItem",
        "icon" : "PeopleIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "업무진행",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/pack-for-work",
                "icon" : "PeopleIcon"
            }
        ]
    },
    {
        "name" : "프로세스 보기",
        "type" : "ListItem",
        "icon" : "PeopleIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "프로세스 보기",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/view-bpmn",
                "icon" : "PeopleIcon"
            },
        ]
    }
]
    
const myAuthRoutes = [
    {
        "key": "/",
        "presenter": <Home />,
        "breadcrumb": "Home",
        "dispName": "Home",
        "layout": "layout-1"
    },
    {
        "key": "/todo-list",
        "presenter": <TodoListWithBookmarkEnabler />,
        "breadcrumb": "todo-list",
        "dispName": "To do list",
        "layout": "layout-1"
    },
    {
        "key": "/check-if-holiday",
        "presenter": <CheckIfHolidayWithBookmarkEnabler />,
        "breadcrumb": "check-if-holiday",
        "dispName": "Check if holiday",
        "layout": "layout-1"
    },
    {
        "key": "/pack-for-holiday",
        "presenter": <PackForHoliday />,
        "breadcrumb": "pack-for-holiday",
        "dispName": "Pack for holiday",
        "layout": "layout-1"
    },
    {
        "key": "/pack-for-work",
        "presenter": <PackForWork />,
        "breadcrumb": "pack-for-work",
        "dispName": "Pack for work",
        "layout": "layout-1"
    },
    {
        "key": "/view-bpmn",
        "presenter": <BpmnViewer />,
        "breadcrumb": "view-bpmn",
        "dispName": "Bpmn Viewer",
        "layout": "layout-1"
    },
    {
        "key": "*",
        "presenter": <NotFound />,
        "breadcrumb": "NotFound",
        "dispName": "Not found",
        "layout": "layout-1"
    }
]
    
const iconInfos = [
    {
        "name" : "PeopleIcon",
        "icon" : PeopleIcon
    }
]
    
const myUnauthRoutes = myAuthRoutes;
    
let bookmarkCount = 4;

let bookmarkList = [
    { id: 1, name: 'Todo list bookmark', pathName: "/todo-list", state: {}, description: "-" },
    { id: 2, name: 'Check if holiday bookmark', pathName: "/check-if-holiday", state: {}, description: "-" },
    { id: 3, name: 'Pack for holiday bookmark', pathName: "/pack-for-holiday", state: {}, description: "-" },
    { id: 4, name: 'Pack for work bookmark', pathName: "/pack-for-work", state: {}, description: "-" },
];

function App () {

    React.useEffect(()=>{
        addReducer();
        registerIcons(iconInfos);
        createRestTemplate();
    }, []);

    const handleOnPersonSecurityPolicyShow = () => {
        console.log('#### security show');
    }

    const handleOnBookmarkFetchReq = (userId, onBookmarksFetched) => {
        console.log("handleOnBookmarkFetchReq in App =>" + userId + ", " + JSON.stringify(bookmarkList));
        console.log("onBookmarksFetched=>" + onBookmarksFetched);
        onBookmarksFetched([ ...bookmarkList ]);
    }

    const handleOnBookmarkAddReq = (bookmarkInfo) => {
        bookmarkInfo.id = ++bookmarkCount;
        bookmarkList.push(bookmarkInfo);
    }

    const handleOnBookmarkDelReq = (bkmarkId) => {
        bookmarkList = bookmarkList.filter(bkmark=>bkmark.id!==bkmarkId);
    }

    return (
        <PutTogether 
            additionalThemes={ undefined }
            menuProps = {{
                menuInfos : mymenu,
                menuPaddingTop: 38
            }}
            routeInfos = {{
                authRouteInfos: myAuthRoutes,
                unAuthRouteInfos: myUnauthRoutes
            }}
            // breadcrumbNavProps = {{
            //     use : true,
            //     customBreadcrumbNav : undefined,
            //     height : 28
            // }}
            // rightPanelProps={{
            //     customSettings: undefined,
            //     customMenual: undefined,
            // }}
            bodyProps = {{
                bodyType : "Tab",
                tabsOptions : {
                    allowSameKey : true
                },
                breadcrumbNavOptions : {
                    use : true,
                    customBreadcrumbNav : undefined,
                    height : 28
                },
                rightPanelOptions : {
                    customSettings: undefined,
                    customMenual: undefined,
                }
            }}
            headerProps = {{
                customHeader: undefined,
                defaultHeaderOptions: {
                    title : "Example System",
                    // iconLogo : <PeopleIcon />,
                    iconLogo : undefined,
                    user : {
                        id : "ispark",
                        email : "lucky.sugar.park@wowsoftlab.com",
                        photoUrl : "/assets/images/avatars/avatar_12.jpg"
                    },
                    onBookmarkAddReq : handleOnBookmarkAddReq,
                    onBookmarkDelReq : handleOnBookmarkDelReq,
                    onBookmarkFetchReq : handleOnBookmarkFetchReq,
                    onQnaShowReq : () => console.log("onQnaShowReq from App"),
                    onAboutShowReq : () => console.log("onAboutShowReq from App"),
                    onMyInfoShowReq : () => console.log("onMyInfoShowReq from App"),
                    onNotificationShowReq : () => console.log("onNotificationShowReq from App"),
                    onLogoutReq : () => console.log("LogoutReq from App")
                }
            }}
            footerProps = {{
                customFooter: undefined,
                defaultFooterOptions: {
                    companyName: "WowSoftLab",
                    companyWebSite: "http://wowsoftlab.com",
                    onPersonSecurityPolicyShow: handleOnPersonSecurityPolicyShow,
                    personSecurityText: "개인정보보호"
                }
            }}
            iconInfos={ iconInfos } 
            languagePack={ undefined }
            initializeAuth={ undefined }
        />
    )
}

export default App;