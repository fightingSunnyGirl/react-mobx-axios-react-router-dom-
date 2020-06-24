/**
 * 请求路径配置 用于区分生产环境还是正式环境
 * */
const NODE_ENV = process.env.NODE_ENV;
const PROXY = NODE_ENV == 'production' ? '':'/proxy';
const FZ = '/hbx';//分站 
const SELLER = PROXY+`${FZ}?dapi=`;
export const ORIGIN = window.location.origin
export const BASEURL: string = NODE_ENV == 'production' ? ORIGIN+SELLER : SELLER;
export const PPROTOCOl:string = window.location.protocol;
export const YPYPROTOCOL:string = 'https://s1.laqu.com';
