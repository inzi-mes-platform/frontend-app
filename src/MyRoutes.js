import React from 'react';
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
import {
    LoginForm,
    RegisterForm,
} from 'inzi-mes-platform-frontend-default-ui-auth';

import BpmnViewer from './BpmnViewer';

export const myAuthRoutes = [
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

export const myUnauthRoutes = [
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