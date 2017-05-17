/**
 * Created by koguma on 2017/5/13.
 */
var React = require('react');
var ReactDOM = require('react-dom');
// 导入写好的头部、注脚、主体组件
import ComponentHeader from './components/header.js';//路径名称
import ComponentFooter from './components/footer.js';//路径名称
import BodyIndex from './components/bodyindex.js';//路径名称

class Index extends React.Component{

    render(){
        var header = <ComponentHeader/>;//将组件赋值给一个参数

        // 可用于判定 不同的条件将不同的组件赋值给参数
        // var component;
        // if(用户登录成功){
        //     component = <LoginHeader/>;
        // }else{
        //     component = <Header/>
        // }

        return (
            //每个组件只能有一个顶层标签
            // 在需要的地方 放置代表组件的参数
            <div>
                {header}
                <BodyIndex userid={12345} username={'小熊'}/>
                <ComponentFooter/>
            </div>
        )
    }
}


// ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点
// 下面这行相当于一个程序的入口，为页面中的 example 绑定一个组件(Index)
ReactDOM.render(
    <Index/>,
    document.getElementById('example')
);

