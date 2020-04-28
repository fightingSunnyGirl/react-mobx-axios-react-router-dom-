import axios from 'axios';
import qs from 'qs';
const BASEURL = process.env.NODE_ENV == 'production' ? document.location.origin : '/laqu'
const BASESTR = '/api/mroute?dapi=';
const PROTOCOL = window.location.protocol;

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
});

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status == 200 || response.status == 304 || response.status == 400)) {
    if (response.data.code == 20003) {
      // location.href = "/login";
      alert("登录超时，请重新登录！")
      return false;
    }
    return response;
  }
  // return response;
  // 异常状态下，把错误信息返回去
  return {
    status: 404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status == 404) {
    alert(res.data.message)
  }
  if (res.data && res.data.code != 200) {
    alert(res.data.message)
  }
  return res
}

/**
 * post方法
*/
export function post(url, data) {
  return axios({
    method: 'post',
    baseURL: BASEURL,
    url: BASESTR + url,
    data: qs.stringify(data),
    timeout: 30000,
    // xhrFields: {
    //   withCredentials: true,//允许携带cookie
    // },
    crossDomain: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    }
  }).then(
    (response) => {
      return checkStatus(response)
    }
  ).catch(
    (res) => {
      return checkCode(res)
    }
  )
}

/**
 * get方法
*/
export function get(url, params) {
  return axios({
    method: 'get',
    baseURL: BASEURL,
    url: BASESTR + url,
    params,
    timeout: 30000,
    crossDomain: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).then(
    (response) => {
      return checkStatus(response)
    }
  ).catch(
    (res) => {
      return checkCode(res)
    }
  )
}

/**
 * 自定义请求方法
*/
export function http(type, url, params) {
  return axios({
    method: type,
    url: url,
    data: params,
    timeout: 30000,
    crossDomain: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).then(
    (response) => {
      return checkStatus(response)
    }
  ).catch(
    (res) => {
      return checkCode(res)
    }
  )
}


// 新上传
/**
* 图片上传第一步
* @params => file为 你读取成功的回调文件信息,
* @params => uploadChannel上传图片类型:
* a用户活动申请 r商家活动发布 rv 发布里面的视频
* c用户商家包括所有绑定、头像之类
* */
export function upLoaderImgYoupaiyun(file, uploadChannel) {
  var paramsFirst = new FormData();
  return axios({
    method: 'post',
    baseURL: BASEURL,
    url: BASESTR + 'trial.open.resource.upload&scene=' + uploadChannel,
    data: paramsFirst,
    timeout: 30000,
    xhrFields: {
      withCredentials: true,//允许携带cookie
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  }).then(
    (response) => {
      var resStemp = checkStatus(response);
      if (resStemp.data.code == 200) {
        return upLoaderImgNext(file, resStemp.data)
      }
    }
  ).catch(
    (res) => {
      return checkCode(res)
    }
  )
}

// 上传第二步
function upLoaderImgNext(file, resData) {
  //new 一个FormData格式的参数
  var params = new FormData();
  params.append('file', file);
  params.append('authorization', resData.data.authorization);
  params.append('policy', resData.data.policy);
  return axios({
    method: 'post',
    url: PROTOCOL + '//v0.api.upyun.com/laqu-img',
    data: params,
    timeout: 30000,
    xhrFields: {
      withCredentials: true,//允许携带cookie
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  }).then(
    (response) => {
      return checkStatus(response)
    }
  ).catch(
    (res) => {
      return checkCode(res)
    }
  )
}

/**
 * 导出excel
 * */ 
export function exportExcel(url, params, method, title) {
  return axios({
    method: method,
    url: BASESTR + url,
    data: Qs.stringify(params),
    timeout: 30000,
    responseType: 'blob'
  }).then(res => {
    // 没有数据的type值包括json
    var docType = res.data.type;
    if (docType.indexOf('json') != -1) {
      baseApp.$message({
        message: '导出失败',
        type: 'error',
        duration: 1500
      });
      return
    }
    var blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' });
    window.URL = window.URL || window.webkitURL;
    var href = URL.createObjectURL(blob);
    var downA = document.createElement("a");
    downA.href = href;
    downA.download = title + '.xls';
    downA.click();
    window.URL.revokeObjectURL(href);
  })
}

