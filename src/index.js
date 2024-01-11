/**
 * 文章目录自动生成
 * @author 米耀华
 */
export default class Mdirectory {
  defaultOption = {
    // 文章内容容器id
    contentEle: "content",
    // 目录容器id
    directoryEle: "directory",
    // 非过滤目录元素
    filterate: ["h1", "h2", "h3", "h4", "h5", "h6"],
    filterateClass: {
      h1: "m-directory-1",
      h2: "m-directory-2",
      h3: "m-directory-3",
      h4: "m-directory-4",
      h5: "m-directory-5",
      h6: "m-directory-6",
    },
    // 公共样式
    publicDirectory: "public-directory",
    // 选中的样式
    activeDirectory: "active-directory",
  };
  constructor(option) {
    console.log("constructor");
    this.defaultOption = option;
    setTimeout(() => {
      console.log("init");
      this.init();
    }, 0);
  }

  /**
   * 初始化方法
   */
  init() {
    const {
      contentEle,
      directoryEle,
      filterate,
      filterateClass,
      publicDirectory,
    } = this.defaultOption;
    // 标签内容
    let hArr = this.getHEle(contentEle, filterate);
    if (!hArr.length) {
      throw new Error(`没有找到符合的元素,当前检测元素为：${filterate}`);
    }

    hArr = Array.from(hArr).map((v, i) => {
      let div = document.createElement("div");
      // 保留原来的类
      let vClass = v.className;
      let time = `time-${i}`;
      // 添加类名
      Object.keys(filterateClass).forEach((item) => {
        if (v.outerHTML.includes(item)) {
          v.className = filterateClass[item];
          div.className = `${v.className} ${publicDirectory} ${time}`;
          div.innerText = v.innerText;
          v.className = `${time} ${vClass}`;
        }
      });
      return {
        ele: div,
        text: div.innerText,
      };
    });
    this.appendDirectoryEle(hArr, directoryEle, contentEle);
  }

  /**
   * 获取内容元素h标签
   */
  getHEle(contentEle, filterate) {
    let filterateStr = filterate.join();
    return document.getElementById(contentEle).querySelectorAll(filterateStr);
  }

  /**
   * 添加目录元素
   */
  appendDirectoryEle(hArr, directoryEle, contentEle) {
    let directoryElement = document.getElementById(directoryEle);
    for (let i = 0; i < hArr.length; i++) {
      directoryElement.appendChild(hArr[i].ele);
    }

    directoryElement.onclick = function (e) {
      const classArr =
        e.target.className &&
        e.target.className.length &&
        e.target.className.split(" ");
      const classname = classArr[classArr.length - 1];
      document
        .getElementById(contentEle)
        .querySelector(`.${classname}`)
        .scrollIntoView({ behavior: "smooth" });
    };
  }
}
