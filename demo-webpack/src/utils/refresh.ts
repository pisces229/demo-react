class Util {
  public do = false;
  private queue: (() => void)[] = [];
  public push = (callback: () => void) => {
    this.queue.push(callback);
  };
  public run = () => {
    this.do = false;
    this.queue.forEach((callback) => callback());
    this.queue.length = 0;
  };
}

const util = new Util();
export default util;
