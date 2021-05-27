## 项目搭建
1、安装 create-react-app 这个react 脚手架
2、使用 create-react-app 项目名称 来创建项目
3、使用 npm run eject 查看配置文件

## 知识点
1、 dangerouslySetInnerHTML 可以解析标签，但是会造成 xss 攻击，但是一般是由后台传过来的数据不会造成这样的问题
2、immutable 在react中，不允许做任何的改变
3、Fragment 是一个占位符，可以让你聚合一个子元素列表并且不在DOM中增加额外的节点

##  访问器 get/set 的用法