import {get} from '../utils/https';

/**
  今日上新数据获取
 */ 

export async function getTodayNew(){
  return get(`seller.common.data.get`) 
}