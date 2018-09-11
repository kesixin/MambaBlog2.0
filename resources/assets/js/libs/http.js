import axios from 'axios'
import {apiUrl} from '@/config/dashboard'
import {getToken, removeToken, removeUser} from '@/utils/auth';
import Cookies from "js-cookie";
import {Message} from 'iview'

export const http = axios.create({
    baseURL : apiUrl,
    validateStatus: function(status) {
        return [200, 201, 204, 422, 401, 400, 404, 429, 403].indexOf(status) !== -1 // 默认的
    },
})

http.interceptors.request.use(
    config => {
        let token = getToken();
        if (token) {
            config.headers['Authorization'] = token.token_type + ' ' + token.access_token
        }

        return config;
    }
)

http.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const status = response.status
        const res = response.data
        if ([200, 201, 204].indexOf(status) !== -1) {
            return response.data
        }
        if ([422].indexOf(status) !== -1) {
            return Promise.reject(res)
        }
        if ([400, 404, 429, 403].indexOf(status) !== -1) {
            Message.error({
                content: res.message,
                duration: 10,
                closable: true
            });
            return Promise.reject(res.message)
        }
        if ([401].indexOf(status) !== -1) {
            removeToken();
            removeUser();
            window.location = '/#/login'
        }

    },
    error => {
        Message.error({
            content: 'server error',
            duration: 10,
            closable: true
        });

        return Promise.reject(error)
    }
)

export default function install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
        get() {
            return http
        },
    })
}