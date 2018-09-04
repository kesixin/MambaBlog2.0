import axios from 'axios'
import {apiUrl} from "@/config/app"


export const http =axios.create({
    baseURL:apiUrl,
    validateStatus:function (status) {
        return [200, 201, 204, 422, 401, 400, 404, 429, 403].indexOf(status) !== -1 // 默认的
    }
})


export default function install(Vue) {
    Object.defineProperty(Vue.prototype,'$http',{
        get() {
            return http
        }
    })
}