import { createRestTemplate } from 'inzi-mes-platform-frontend-framework';

const restTemplate=createRestTemplate();

const BASE_URL_SERVER_BOOKMARK = process.env.REACT_APP_URL_SERVER_AUTH;

export const addBookmark = (bookmark, onResponse) => {
    const url=BASE_URL_SERVER_BOOKMARK+"/api/v1/bookmark/add";
    restTemplate.post(url, bookmark, onResponse);
}

export const updateBookmark = (bookmark, onResponse) => {
    const url=BASE_URL_SERVER_BOOKMARK+"/api/v1/bookmark/update";
    restTemplate.post(url, bookmark, onResponse);
}

export const deleteBookmark = (userId, name, onResponse) => {
    const url=BASE_URL_SERVER_BOOKMARK+"/api/v1/bookmark/delete/"+userId+"/"+name;
    restTemplate.post(url, {}, onResponse);
}

export const searchBookmarkByUser = (userId, onResponse) => {
    const url=BASE_URL_SERVER_BOOKMARK+"/api/v1/bookmark/search/byUser/"+userId;
    restTemplate.get(url, onResponse);
}
