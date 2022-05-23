import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "2c9567f5-d0aa-409d-af70-fa21b99ea97e"
    },
});


export const usersAPI = {
    getUsers (page = 1, pageSize = 10){
        return instance.get(`/users?page=${page}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId){
        return instance.post(`/follow/${userId}`).then(response => response.data)
    },
    unfollow(userId){
        return instance.delete(`/follow/${userId}`).then(response => response.data)
    },
   
    getUserProfile(userId){
        console.warn('Please use profileAPI object.');
        return profileAPI.getUserProfile(userId)
    }
}
export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`/profile/${userId}`).then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status});
    },
    savePhoto(file){
        const formData = new FormData();
        formData.append("image", file)
        return instance.put(`profile/photo`, formData,  {"Content-Type": "multipart/form-data"}).then(res => res.data);
    },
    saveProfile(profile){
        return instance.put(`profile/`, profile);
    }
}

export const authAPI = {
    me(){
        return instance.get(`/auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe = false){
        return instance.post(`/auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete(`/auth/login`);
    },
}