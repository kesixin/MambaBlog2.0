import { storageUtil } from './tools/storageUtil'

const TokenKey = 'token'
const UserKey = 'user'
const SocialiteToken = 'socialite';
export function getToken() {
    return storageUtil.get(TokenKey)
}

export function setToken(token) {
    return storageUtil.set(TokenKey, token)
}

export function removeToken() {
    return storageUtil.remove(TokenKey)
}

export function getUser() {
    return storageUtil.get(UserKey)
}
export function setUser(userinfo) {
    return storageUtil.set(UserKey, userinfo)
}
export function removeUser() {
    return storageUtil.remove(UserKey)
}
export function setSocialiteToken(access_token) {
    return storageUtil.set(SocialiteToken, access_token)
}
export function getSocialiteToken() {
    return storageUtil.get(SocialiteToken)
}
export function removeSocialiteToken() {
    return storageUtil.remove(SocialiteToken)
}