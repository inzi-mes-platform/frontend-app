import React from 'react';
import { useDispatch } from 'react-redux';
import "./styles.css";

import 
    PutTogether,
    {
        addReducer,
        registerIcons,
        createRestTemplate,
        getImessageBroker,
        store
    } from 'inzi-mes-platform-frontend-framework';

import { myAuthRoutes, myUnauthRoutes } from './MyRoutes';
import { mymenu } from './MyMenus';
import { iconInfos } from './MyIcons';

import {
    init,
    logout,
    reissue,
    initStore
} from 'inzi-mes-platform-frontend-default-ui-auth';

import { addBookmark, deleteBookmark, searchBookmarkByUser } from './components/bookmark/BookmarkApi';

const App = () => {

    const dispatch = useDispatch();
    const doLogout = (id, real) => dispatch(logout(id, real));
    const doReissue = (loginResponse) => dispatch(reissue(loginResponse));

    React.useEffect(()=>{
        initStore();
        addReducer();
        registerIcons(iconInfos);
        createRestTemplate();
        const imessageBroker=getImessageBroker();
        imessageBroker.addListener("REISSUED", {
            name: "REISSUED_LISTENER",
            onMessage: (imessage)=>{
                doReissue(imessage.body);
            }
        });
    }, []);

    const handleOnPersonSecurityPolicyShow = () => {
        console.log('#### security show');
    }

    const handleOnBookmarkFetchReq = (userId, onBookmarksFetched) => {
        searchBookmarkByUser(userId, (serverReply, error)=>{
            if(error===undefined) {
                if(serverReply.success===true) {
                    onBookmarksFetched(serverReply.payload);
                } else {
                    alert("Fail to fetch bookmark [" + serverReply.failCode+"], Message: " + serverReply.failMessage);
                }
            } else {
                alert("Fail to fecth bookmark [" + error.response.data.code+"]")
            }
        });
    }

    const handleOnBookmarkAddReq = (bookmarkInfo, onBookmarksFetched) => {
        addBookmark(bookmarkInfo, (serverReply, error)=>{
            if(error===undefined) {
                if(serverReply.success!==true) {
                    alert("Fail to add bookmark [" + serverReply.failCode+"], Message: " + serverReply.failMessage);
                } else {
                    handleOnBookmarkFetchReq(bookmarkInfo.userId, onBookmarksFetched);
                }
            } else {
                alert("Fail to add bookmark [" + error.response.data.code+"]")
            }
        });
    }

    const handleOnBookmarkDelReq = (userId, bookmarkName, onBookmarksFetched) => {
        deleteBookmark(userId, bookmarkName, (serverReply, error)=>{
            if(error===undefined) {
                if(serverReply.success!==true) {
                    alert("Fail to delete bookmark [" + serverReply.failCode+"], Message: " + serverReply.failMessage);
                } else {
                    handleOnBookmarkFetchReq(userId, onBookmarksFetched);
                }
            } else {
                alert("Fail to delete bookmark [" + error.response.data.code+"]")
            };
        });
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
    )
}

export default App;
