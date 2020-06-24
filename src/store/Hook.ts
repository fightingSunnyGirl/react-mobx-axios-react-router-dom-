import { action, observable } from 'mobx';
import { Modal } from 'antd';
class Hook {
  @observable
  dogName:string = '小花花';

  @observable
  count = 0;

  @action
  setDogName(dogName:string){
    this.dogName = dogName
  }

}

export default new Hook();
