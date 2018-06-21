import Axios from 'axios';
import {getCookie} from '../cookie/cookie';
var axios = Axios.create({
  baseURL: process.env.API_ROOT,
});
let axiosMethod = '';
let last = null;

axios.interceptors.request.use(function (config) {
  if(getCookie('access_token')){
    let token = "Bearer " + getCookie('access_token');
    config.headers.common['Authorization'] = token;
  }
  axiosMethod = config.method;
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function(config) {
  return config;
}, function(error) {
  let code = error.response.status;
  if(code === 401) {
    clearTimeout(last);
    last = setTimeout(function() {
      alert("登录已超时");
      window.location.reload();
    }, 500);
  } else if(code === 403) {
    if(axiosMethod === 'post'|| axiosMethod === 'put') {
      clearTimeout(last);
      last = setTimeout(function() {
        alert("很抱歉，您没有权限");
      }, 500);
    } else if(axiosMethod === 'get') {
      clearTimeout(last);
      last = setTimeout(function() {
        alert("很抱歉，您没有权限");
        //window.location.href = '/login';
      }, 500);
    }
  }
  return Promise.reject(error);
});

function fetch(url, params = {}) {

  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}
export default axios;
