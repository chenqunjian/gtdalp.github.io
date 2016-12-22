# focusmap 
pc端焦点图，动画过渡方式是渐变消失切换。


###npm安装
```javascript
npm install focusmap
```

###地址:
![qcode.png](./src/images/qcode.png)<br/> <br/>
###demo地址: <a href="https://gtdalp.github.io/widget/focusmap/demos/index.html">https://gtdalp.github.io/widget/focusmap/demos/index.html</a>


###需要引入的js
```javascript
<script src="../src/jslib/jquery.min.js"></script>
<script src="../dist/js/focusmap.min.js"></script>
```

###调用
```javascript
new Focusmap('.focusmap', {
    // 每隔多少毫秒播放一次 默认3000毫秒
    time: 3000,
    // 动画过渡时间 默认1000毫秒
    transitionTime: 1000,
    // 数据
    data: [
        {src: '../src/images/1.jpg', href: 'https://github.com/gtdalp'},
        {src: '../src/images/2.jpg', href: 'https://github.com/'},
        {src: '../src/images/3.jpg', href: 'https://github.com/gtdalp'},
        {src: '../src/images/4.jpg', href: 'https://github.com/'}
    ]
});
```

### API

#### Focusmap

总共有5个api

1、new Focusmap接收两个参数，第一个参数DOM选择器字符串，必须字段；第二个参数为配置信息 （必要）

2、options.time 每隔多少毫秒播放一次 默认3000毫秒（可选）

3、options.transitionTime 动画过渡时间 默认1000毫秒 （可选）

4、options.data 数据 类型为数组 （必要）

5、destroy  销毁
