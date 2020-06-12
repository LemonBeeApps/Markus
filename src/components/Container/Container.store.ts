import { observable, action } from "mobx";

export class ContainerStore {
  @observable showEditor: boolean = true;
  @observable showRenderer: boolean = true;

  @action
  toggleEditor = () => {
    this.showEditor = !this.showEditor;
  }

  @action
  toggleRenderer = () => {
    this.showRenderer = !this.showRenderer;
  }
}