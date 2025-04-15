import React from 'react';
import { Provider, useDispatch } from 'react-redux';
// import { BrowserRouter, useNavigate, useLocation } from 'react-router';
import "./styles.css";

import { 
    People as PeopleIcon,
    BusinessCenter as BusinessCenterIcon,
    Surfing as SurfingIcon,
    Checklist as ChecklistIcon,
    AddTask as AddTaskIcon,
    Verified as VerifiedIcon,
    Schema as SchemaIcon,
    SystemUpdateOutlined
} from '@mui/icons-material';

import 
    PutTogether,
    {
        addReducer,
        registerIcons,
        createRestTemplate,
        store
    } from 'inzi-mes-platform-frontend-framework';

import {
    Home,
    NotFound,
    CheckIfHoliday,
    CheckIfHolidayWithBookmarkEnabler,
    PackForHoliday,
    PackForWork,
    TodoList,
    TodoListWithBookmarkEnabler,
    TodoContainer
} from 'inzi-mes-platform-frontend-default-ui';

import { History as history } from 'inzi-mes-platform-frontend-framework';

import BpmnViewer from './BpmnViewer';

import {
    LoginForm,
    RegisterForm,
    init,
    logout,
} from 'inzi-mes-platform-frontend-default-ui-auth';
// import Register from './components/auth/Register';

const mymenu = [
    {
        "name" : "나의할일",
        "type" : "ListItem",
        "icon" : "ChecklistIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "내가해야 할일",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/todo-list",
                "icon" : "ChecklistIcon"
            }
        ]
    } ,
    {
        "name" : "휴일체크",
        "type" : "ListItem",
        "icon" : "VerifiedIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "휴일체크",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/check-if-holiday",
                "icon" : "VerifiedIcon"
            }
        ]
    },
    {
        "name" : "휴일진행",
        "type" : "ListItem",
        "icon" : "SurfingIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "휴일진행",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/pack-for-holiday",
                "icon" : "SurfingIcon"
            }
        ]
    },
    {
        "name" : "업무진행",
        "type" : "ListItem",
        "icon" : "BusinessCenterIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "업무진행",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/pack-for-work",
                "icon" : "BusinessCenterIcon"
            }
        ]
    },
    {
        "name" : "프로세스 보기",
        "type" : "ListItem",
        "icon" : "SchemaIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "프로세스 보기",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/view-bpmn",
                "icon" : "SchemaIcon"
            },
        ]
    },
    {
        "name" : "나의 할일",
        "type" : "ListItem",
        "icon" : "AddTaskIcon",
        "items" : [
            {
                "type" : "ListItem",
                "name" : "할일 관리",
                "state" : { "viewId": "bodyMainView" },
                "link" : "/my-todo-mgmt",
                "icon" : "AddTaskIcon"
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
        "key": "/my-todo-mgmt",
        "presenter": <TodoContainer />,
        "breadcrumb": "my-todo-mgmt",
        "dispName": "My todo management",
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
    },
    {
        "name" : "BusinessCenterIcon",
        "icon" : BusinessCenterIcon
    },
    {
        "name" : "SurfingIcon",
        "icon" : SurfingIcon
    },
    {
        "name" : "ChecklistIcon",
        "icon" : ChecklistIcon
    },
    {
        "name" : "AddTaskIcon",
        "icon" : AddTaskIcon
    },
    {
        "name" : "VerifiedIcon",
        "icon" : VerifiedIcon
    },
    {
        "name" : "SchemaIcon",
        "icon" : SchemaIcon
    }
]
    
const myUnauthRoutes = [
    {
        "key": "/",
        "presenter": <LoginForm />,
        "breadcrumb": "User Login",
        "dispName": "User Login",
        "layout": "layout-1"
    },
    {
        "key": "/user/login",
        "presenter": <LoginForm />,
        "breadcrumb": "User Login",
        "dispName": "User Login",
        "layout": "layout-1"
    },
    {
        "key": "/user/register",
        "presenter": <RegisterForm />,
        "breadcrumb": "User Register",
        "dispName": "User Register",
        "layout": "layout-1"
    },
    {
        "key": "*",
        "presenter": <LoginForm />,
        "breadcrumb": "User Login",
        "dispName": "User Login",
        "layout": "layout-1"
    },
];
    
let bookmarkCount = 4;

let bookmarkList = [
    { id: 1, name: 'Todo list bookmark', pathName: "/todo-list", state: {}, description: "-" },
    { id: 2, name: 'Check if holiday bookmark', pathName: "/check-if-holiday", state: {}, description: "-" },
    { id: 3, name: 'Pack for holiday bookmark', pathName: "/pack-for-holiday", state: {}, description: "-" },
    { id: 4, name: 'Pack for work bookmark', pathName: "/pack-for-work", state: {}, description: "-" },
];

const App = () => {

    // history.navigate = useNavigate();
    // history.location = useLocation();

    const dispatch = useDispatch();
    const doLogout = (id, real) => dispatch(logout(id, real));

    // console.log("LOGOUT=>" + logout);
    // console.log("DO_LOGOUT=>" + doLogout);

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

    // const handleOnLogoutRequest = (id, real) => {
    //     logout();
    // }

    return (
        // <BrowserRouter>
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
                    title : "My New Mes",
                    // iconLogo : <PeopleIcon />,
                    iconLogo : undefined,
                    onBookmarkAddReq : handleOnBookmarkAddReq,
                    onBookmarkDelReq : handleOnBookmarkDelReq,
                    onBookmarkFetchReq : handleOnBookmarkFetchReq,
                    onQnaShowReq : () => console.log("onQnaShowReq from App"),
                    onAboutShowReq : () => console.log("onAboutShowReq from App"),
                    onMyInfoShowReq : () => console.log("onMyInfoShowReq from App"),
                    onNotificationShowReq : () => console.log("onNotificationShowReq from App"),
                    onLogoutReq : doLogout,
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
            initializeAuth={ init }
        />
        // </BrowserRouter>
    )
}

export default App;