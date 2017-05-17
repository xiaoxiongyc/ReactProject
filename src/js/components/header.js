// 页面的头部组件
//导入相关包
import React from 'react';

// 创建一个类(组件名称的第一个字母一定要大写) 并暴露给外部 继承自 React.component
export default class ComponentHeader extends React.Component {
    // render方法 ：用于解析类的输出
    // return 中可以是JSX语法
    render(){
        return (
            <header>
                <h1>这里是头部</h1>
            </header>
        );
    }
}