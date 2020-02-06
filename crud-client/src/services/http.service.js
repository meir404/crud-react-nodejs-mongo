
const baseApi = "http://localhost:5600/";

const Post = (controller, data) => {
    return fetch(`${baseApi}${controller}`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        method: 'POST'
    }).then(res => res.json())
}

const Put = (controller, data) => {
    return fetch(`${baseApi}${controller}`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        method: 'PUT'
    }).then(res => res.json())
}

const Delete = (controller, dataUrl) => {
    return fetch(`${baseApi}${controller}${dataUrl}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'DELETE'
    }).then(res => res.json())
}
const Get = (controller, dataUrl) => {
    return fetch(`${baseApi}${controller}${dataUrl}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
    }).then(res => res.json())
}


export default { Post, Put, Delete, Get }