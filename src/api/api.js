import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '056aaa12-2ddc-4df5-bdfc-4a5f379995ad'
    }
})

export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow (userId) {
        return instance.post(`follow/${userId}`).then(response => response.data);;
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);;
    },
    getProfile (userId) {
        return instance.get(`profile/` + userId).then(response => response.data);
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`).then(response => response.data);
    }
}