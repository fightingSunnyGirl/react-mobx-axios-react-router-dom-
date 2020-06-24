import { action, observable } from 'mobx';
import { Modal } from 'antd';
class Test {
  @observable
  pathName:string = '';

  @observable
  count = 0;

  @action
  getPathName(pathName:string){
    this.pathName = pathName
  }

}

export default new Test();
