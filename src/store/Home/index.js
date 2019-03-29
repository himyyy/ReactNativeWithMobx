import {action, observable} from "mobx";

class IndexStore {
  @observable test = 1;

  @action setTest () {
    this.test++;
  }
}

export default new IndexStore();