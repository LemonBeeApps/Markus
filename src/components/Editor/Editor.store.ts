import { action, observable } from 'mobx';

export class EditorStore {
  @observable.ref value = '';

  @action
  setValue(value: string) {
    this.value = value;
  }
}
