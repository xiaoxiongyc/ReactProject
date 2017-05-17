/**
 * Created by koguma on 2017/5/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';

// 创建一个类(组件名称的第一个字母一定要大写) 并暴露给外部 继承自 React.component
export default class BodyIndex extends React.Component {

    //构造函数  与java类似 用于初始化
    constructor() {
        //调用基类的所有初始化方法
        super();
        //此处的state只作用于当前组件  不会污染其他组件 state更改后 会自动render页面
        this.state = {
            userName: 'xiaoxiong',
            age: 25
        };//初始化赋值
    };

    changeUserInfo(age) {
        this.setState({age: age});
        //第一种方式
        // var mySubmitButton = document.getElementById('submitButton');
        //这种方法也是可以的
        // mySubmitButton.style.color = 'red';
        // console.log(mySubmitButton);
        // ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';

        //第二种方式
       this.refs.submitButton.style.color = 'red';
        // MixinLog.log();
    }

    handleChildValueChange(event) {
        this.setState({age: event.target.value});

    };

    // render方法 ：用于解析类的输出
    // return 中可以是JSX语法
    render() {
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>接受到的父页面的属性：userid：{this.props.userid} ；username： {this.props.username} {this.state.age}</p>
                {/*bind(this)  因为click时 this指向的是input的DOM 所以要绑定到当前组件*/}
                <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this, 99)}/>
                {/*{...this.props} 将父页面(就是当前页面)的props传递给子页面(BodyChild)*/}
                <BodyChild  {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        );
    }
}

//BodyIndex类的属性  验证别人使用组件时 提供的参数是否符合要求
BodyIndex.propTypes = {
    userid : React.PropTypes.number.isRequired
};

//为组件定义默认的Props 。 使用组件时 如果不传递属性 将显示默认值
BodyIndex.defaultProps  = {
    username : '这是一个默认的用户名',
};

//将MixinLog 导入 BodyIndex 的原型
ReactMixin(BodyIndex.prototype, MixinLog);
