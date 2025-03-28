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
    PackForHoliday,
    PackForWork,
    TodoList
} from 'inzi-mes-platform-frontend-default-ui';

import BpmnViewer from './BpmnViewer';
import { Flow1 } from './Flow1';
import { Flow2 } from './Flow2';

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
            {
                "type" : "ListItem",
                "name" : "플로우-1",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/view-flow1",
                "icon" : "PeopleIcon"
            },
            {
                "type" : "ListItem",
                "name" : "플로우-2",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/view-flow2",
                "icon" : "PeopleIcon"
            }
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
        "presenter": <TodoList />,
        "breadcrumb": "todo-list",
        "dispName": "To do list",
        "layout": "layout-1"
    },
    {
        "key": "/check-if-holiday",
        "presenter": <CheckIfHoliday />,
        "breadcrumb": "check-if-holiday",
        "dispName": "Check if holiday",
        "layout": "layout-1"
    },
    {
        "key": "/pack-for-holiday",
        "presenter": <PackForHoliday />,
        "breadcrumb": "pack-for-holiday",
        "dispName": "Pack for holidayaaaaaaa",
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
        "key": "/view-flow1",
        "presenter": <Flow1 />,
        "breadcrumb": "view-flow-1",
        "dispName": "Bpmn Flow1",
        "layout": "layout-1"
    },
    {
        "key": "/view-flow2",
        "presenter": <Flow2 />,
        "breadcrumb": "view-flow-2",
        "dispName": "Bpmn Flow2",
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
    
function App () {

    React.useEffect(()=>{
        addReducer();
        registerIcons(iconInfos);
        createRestTemplate();
    }, []);

    const handleOnPersonSecurityPolicyShow = () => {
        console.log('#### security show');
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
                bodyType : "OnePage",
                tabsOptions : {
                    allowSameKey : false
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
                    onBookmarkAddReq : () => console.log("onBookmarkAddReq from App"),
                    onBookmarkFetchReq : () => console.log("onBookmarkFetchReq from App"),
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