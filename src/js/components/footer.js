/**
 * Created by koguma on 2017/5/15.
 */

import React from 'react';
//导入css文件  因为在webpackage.config.js文件中配置过，所以这个样式表只作用于这个组件，不会污染其他组件
var footerCss = require('../../css/footer.css');

// 创建一个类(组件名称的第一个字母一定要大写) 并暴露给外部 继承自 React.component
export default class ComponentFooter extends React.Component {

    // render方法 ：用于解析类的输出
    // return 中可以是JSX语法
    render(){
        console.log(footerCss);
        return (
            <footer className={footerCss.miniFooter}>
                <h1>这里是页脚，一般放置版权信息。</h1>
            </footer>
        );
    }
}