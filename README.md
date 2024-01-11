# 根据文章内容(html)自动生成文字目录

[github 地址](https://github.com/miyaohua/m-directory)

#### npm 引入

```
npm i mi-directory
```

#### 使用方法

```javascript
import Mdirectory from "mi-directory";
```

```javascript
new Mdirectory({
  // 文章元素id（无需#）
  contentEle: "content",
  // 目录元素id（无需#）
  directoryEle: "directory",
  // 需要筛选的目录
  filterate: ["h1", "h2", "h3", "h4", "h5", "h6"],
  // 目录元素类（无需.）
  filterateClass: {
    h1: "m-directory-1",
    h2: "m-directory-2",
    h3: "m-directory-3",
    h4: "m-directory-4",
    h5: "m-directory-5",
    h6: "m-directory-6",
  },
  // 目录公共类（无需.）
  publicDirectory: "public-directory",
  // 目录选中类（无需.）
  activeDirectory: "active-directory",
});
```

**仅支持 IE8 以上和主流的浏览器**

## 选项

##### contentEle

文章容器，id 选择器 （无需#）

默认为：content

##### directoryEle

目录容器，id 选择器（无需#）

默认为：directory

##### filterate

需要筛选的目录

默认为：["h1", "h2", "h3", "h4", "h5", "h6"]

##### filterateClass

目录元素类 类选择器（无需.）

默认为：
{
    h1: "m-directory-1",
    h2: "m-directory-2",
    h3: "m-directory-3",
    h4: "m-directory-4",
    h5: "m-directory-5",
    h6: "m-directory-6",
}

##### publicDirectory

目录公共类（无需.）

默认为：public-directory

##### activeDirectory

目录选中类（无需.）

默认为：active-directory
