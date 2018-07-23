import { observable, action } from 'mobx';

class HomeStore {
  @observable total = 0;

  @action.bound
  increment() {
    this.total++;
  }
}

export default HomeStore;
