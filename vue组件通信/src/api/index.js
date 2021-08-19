import axios from 'axios'

axios.defaults.baseURL = 'http://api.50wlkj.com';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// 登陆
export function Login(params){
   return axios.post('/api/user_login',params).then(res=>res.data)
}

// 获取 banner 信息
export function getBanners(params){
   return axios.post('/api/get_banners',params).then(res=>res.data)
}