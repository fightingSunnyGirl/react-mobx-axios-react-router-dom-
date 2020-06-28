import { action, observable } from 'mobx';
import { Modal } from 'antd';
import {getTodayNew} from '@services/home';


class Home {
  @observable
  todayNews = null;

  @observable
  count = 0;

  @observable
  sid:any = null;

  @observable
  testParams = null;

  @action
  getNews(p1:any) {
    this.testParams = p1;
    getTodayNew().then(res=>{
      const result = res.data;
      if(!result) return;
      if(result.code == 200){
        this.todayNews = result.data.today_new
      }else{
        Modal.error({
          title: result.message
        });
      }
    })
  }

  @action
  setIntervalSMS() {
    this.count = 60;
    this.sid = setInterval(() => {
      this.count -= 1;
      if (this.count === 0) clearInterval(this.sid);
    }, 1000);
  }

}

export default new Home();
