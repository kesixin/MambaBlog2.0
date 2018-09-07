import axios from 'axios'
import {apiUrl} from '@/config/app'
import {getToken, removeToken, removeUser} from '@/utils/auth';
import { Message,Notice } from 'iview';

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
            Object.keys(res.errors).forEach(value => {
                Message.error(res.errors[value][0])
            })
            return Promise.reject(res)
        }
        if ([404].indexOf(status) !== -1){
            window.location = '/#/404'
        }
        if ([400, 429, 403].indexOf(status) !== -1) {
            Notice.error({
                title: 'error',
                desc: res.message,
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
        window.location = '/#/500'

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