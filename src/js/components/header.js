// 页面的头部组件
//导入相关包
import React from 'react';
import {Link} from 'react-router'

// 创建一个类(组件名称的第一个字母一定要大写) 并暴露给外部 继承自 React.component
export default class ComponentHeader extends React.Component {
    // render方法 ：用于解析类的输出
    // return 中可以是JSX语法
    render(){
        return (
            <header>
                <ul>
                    <li><Link to={`/`}>首页页面</Link></li>
                    <li><Link to={`/details`}>详情页面</Link></li>
                    <li><Link to={`/list/1234`}>列表页面</Link></li>
                </ul>
                <h1>这里是头部</h1>
            </header>
        );
    }
}