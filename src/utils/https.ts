/**
 * Created by myh on 2020.06.22.
 */
import axios from 'axios';
import qs from 'qs';
import { Modal } from 'antd';
import * as base from './base';
const request = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials:true,
});

request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
});

request.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
});

function checkStatus(response:any) {

  /**
   * loading
   * 如果http状态码正常，则直接返回数据
   * */ 
  if (response && (response.status == 200 || response.status == 304 || response.status == 400)) {
    if (response.data.code == 20003) {
      Modal.error({
        title: "登录超时，请重新登录！"
      });
      return false;
    }
    return response;
  }

  // 500等情况
  Modal.error({
    title: "网络异常!"
  });
  return {
    status: 404,
    msg: '网络异常!'
  }
}

function checkCode(response:any) {
  /**
   * 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，
   * 可以弹出一个错误提示，告诉用户
   * */ 
  if (response.status == 404) {
    Modal.error({
      title: response.data.message
    });
  }
  if (response.data && response.data.code != 200) {
    Modal.error({
      title: response.data.message
    });
  }
  return response
}


/**
 * post请求类型
*/
export function post(url:string, data?:any) {
  return request({
    method:'post',
    data: qs.stringify(data),
    timeout: 30000,
    url:base.BASEURL+url
  }).then(response=> {
      return checkStatus(response)
    }
  ).catch(res => {
      return checkCode(res)
    }
  )
}

/**
 * get请求类型
*/
export function get(url:string, params?:any) {
  return request({
    method:'get',
    url:base.BASEURL+url,
    params
  }).then(response => {
      return checkStatus(response)
    }
  ).catch(res => {
      return checkCode(res)
    }
  )
}

/**
 * 自定义请求类型
*/
export function http(type:any, url:any, data:any) {
  return request({
    method: type,
    url:base.BASEURL+url,
    data
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
export function upLoaderImgYoupaiyun(file:any, uploadChannel:string) {
  const paramsFirst = new FormData();
  return request({
    method:'post',
    url: `trial.open.resource.upload&scene=${uploadChannel}`,
    data: paramsFirst
  }).then(
    (response) => {
      const resStemp = checkStatus(response);
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
function upLoaderImgNext(file:any, resData:any) {
  const params = new FormData();
  params.append('file', file);
  params.append('authorization', resData.data.authorization);
  params.append('policy', resData.data.policy);
  return request({
    method:'post',
    url: base.PPROTOCOl + '//v0.api.upyun.com/laqu-img',
    data: params
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
