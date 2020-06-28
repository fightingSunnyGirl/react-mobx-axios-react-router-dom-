// 状态管理
import Home from './Home';
import Test from './Test';
import Hook from './Hook';

let stores:any = {
  Home,
  Test,
  Hook
}

let storeStemps:any = sessionStorage.getItem("store") || null;
 //在页面加载时读取sessionStorage里的状态信息
 if (storeStemps) {   
  storeStemps = JSON.parse(storeStemps);
  // 拷贝对应的值 而不是整个对象 保存时缺失了一些函数等深层次数据
  for(let k in storeStemps){
    for(let i in storeStemps[k]){
      stores[k][i] = storeStemps[k][i]
    }
  }
}

//在页面刷新时将store里的信息保存到sessionStorage里
let u = navigator.userAgent;
if(u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1){
  window.addEventListener("pagehide", () => {
    sessionStorage.setItem("store", JSON.stringify(stores))
  })
}else{
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("store", JSON.stringify(stores))
  })
}

export default stores;