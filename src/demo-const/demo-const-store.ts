import { DemoConstStoreModel } from './demo-const-model';
class DemoConstStore {
  private model?: DemoConstStoreModel;
  public set = (model?: DemoConstStoreModel) => (this.model = model);
  public get = () => this.model;
}
export const demoConstStore = new DemoConstStore();
