/**
 * Created by koguma on 2017/5/16.
 */
import React from 'react';

export default class BodyChild extends React.Component{

    render(){
        return(
            <div>
                <p>{this.props.userid} {this.props.username}</p>
                <p>子页面输入：
                    {/*子页面向父页面传递消息 通过事件的形式 调用父页面 传来的参数（函数）*/}
                    <input type="text" onChange={this.props.handleChildValueChange}/>
                </p>
            </div>
        )
    }
}
