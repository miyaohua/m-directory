/**
 * 文章目录自动生成
 * @author 米
 */
export default class Mdirectory {
  defaultOption = {
    // 文章内容容器id
    contentEle: "",
    // 目录容器id
    directoryEle: "",
    // 非过滤目录元素
    filterate: ["h1", "h2", "h3", "h4", "h5", "h6"],
  };
  constructor(option) {
    this.defaultOption = option;
    window.addEventListener("load", () => {
      this.init();
    });
  }

  /**
   * 初始化方法
   */
  init() {
    const { contentEle, directoryEle, filterate } = this.defaultOption;
    let filterateStr = filterate.join();
    // 标签内容
    let html = document
      .getElementById(contentEle)
      .querySelectorAll(filterateStr);
    console.log(html);
    // 过滤节点
  }
}
