# How To Build A Reddit Clone

## 功能需求

[Reddit](http://www.reddit.com/) 主要是一个分享链接的平台，观众看到这个链接，可以就这个链接的趣味，价值，可以顶，踩的投票，于是可以有多种不同的排序方法，比如按照好评度，按照时间。

我们要实现的是一个简易的reddit，具体实现的功能模块有：

- 需要登录才可以发新的Post, 引出 注册 & 登录模块
- 新发表Post, Post需要包含 一个 Title, 一个 URL
- Post不可编辑，但是可以被删除
- 每一个Post需给出总的投票数
- 投票需要登录，一个Post的投票仅可以是 加一票， 减一票，未投票三种状态，但是可以修改。
- 需给出按照时间 / 投票量 的排序

## Wireframing

参见 /doc/wirframing

## 技术点

- 通过 grunt+bower，添加 bootstrap
- 怎么使用ejs定义页面框架/layout
- REST & MVC
- 注册，登录
- 分页


## Guide
