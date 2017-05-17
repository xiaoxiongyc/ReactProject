/**
 * Created by koguma on 2017/5/13.
 */
var React = require('react');
var ReactDOM = require('react-dom');
// 导入写好的头部、注脚、主体组件
import ComponentHeader from './components/header.js';//路径名称
import ComponentFooter from './components/footer.js';//路径名称
import BodyIndex from './components/bodyindex.js';//路径名称

//引入AntDesign样式
import 'antd/dist/antd.css';

export default class Index extends React.Component{

    render(){
        return (
            //每个组件只能有一个顶层标签
            // 在需要的地方 放置代表组件的参数
            <div>
                <ComponentHeader/>
                <BodyIndex userid={12345} username={'小熊'}/>
                <div>
                    {this.props.children}
                </div>
                <ComponentFooter/>
            </div>
        )
    }
}