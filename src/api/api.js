import * as axios from "axios";

const instance = axios.create({
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   withCredentials: true,
   headers: {
      "API-KEY": "056aaa12-2ddc-4df5-bdfc-4a5f379995ad",
   },
});

export const usersAPI = {
   getUsers(currentPage, pageSize) {
      return instance
         .get(`users?page=${currentPage}&count=${pageSize}`)
         .then((response) => response.data);
   },
   follow(userId) {
      return instance.post(`follow/${userId}`).then((response) => response.data);
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`).then((response) => response.data);
   },
   getProfile(userId) {
      console.warn("Obsolete Method. Please profileAPI object.");
      return profileAPI.getProfile(userId);
   },
};

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/` + userId).then((response) => response.data);
   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId);
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status: status });
   },
   savePhoto(photoFile) {
      let formData = new FormData();
      formData.append("image", photoFile);
      return instance.put(`profile/photo`, formData, {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      });
   },
   saveProfile(profile) {
      return instance.put(`profile`, profile);
   },
};

export const authAPI = {
   me() {
      return instance.get(`auth/me`);
   },
   login(email, password, rememberMe = false, captcha = null) {
      return instance.post(`/auth/login`, { email, password, rememberMe, captcha });
   },
   logout() {
      return instance.delete(`/auth/login`);
   },
};

export const securityAPI = {
   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`);
   },
};
