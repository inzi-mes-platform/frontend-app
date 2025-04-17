export const mymenu = [
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