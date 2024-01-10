/**
 * 文章目录自动生成
 * @author 米耀华
 */
export default class Mdirectory {
  defaultOption = {
    // 文章内容容器id
    contentEle: "m-content",
    // 目录容器id
    directoryEle: "m-directory",
    // 非过滤目录元素
    filterate: ["h1", "h2", "h3", "h4", "h5", "h6"],
    filterateClass: {
      'h1': 'm-directory-1',
      'h2': 'm-directory-2',
      'h3': 'm-directory-3',
      'h4': 'm-directory-4',
      'h5': 'm-directory-5',
      'h6': 'm-directory-6',
    }
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
    const { contentEle, directoryEle, filterate, filterateClass } = this.defaultOption;
    // 标签内容
    let hArr = this.getHEle(contentEle, filterate)
    if (!hArr.length) {
      throw new Error(`没有找到符合的元素,当前检测元素为：${filterate}`)
    }
    hArr = Array.from(hArr).map(v => {
      let div = document.createElement('div')
      // 添加类名
      Object.keys(filterateClass).forEach(item => {
        if (v.outerHTML.includes(item)) {
          v.className = filterateClass[item]
          div.className = v.className;
          div.innerText = v.innerText;
        }
      })
      return {
        ele: div,
        text: div.innerText
      }
    })
    let directoryElement = document.getElementById(directoryEle)
    console.log(directoryElement)
    hArr.forEach(item => {
      directoryElement.appendChild(item.ele)
    })
  }

  /**
   * 获取内容元素h标签
   */
  getHEle(contentEle, filterate) {
    let filterateStr = filterate.join();
    return document.getElementById(contentEle).querySelectorAll(filterateStr);
  }
}
