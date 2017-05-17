
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import { Router, Route, hashHistory} from 'react-router';
import ComponentList from './components/list';
import ComponentHeader from './components/header';
import ComponentDetails from './components/details';

export  default class Root extends React.Component{
    render(){
        //这里替换了之前的index，变成了程序的入口 (注意修改webpack.conf.js中的入口文件为root.js)
        return (
            <Router history={hashHistory}>
                <Route component={Index} path="/">
                    <Route component={ComponentDetails} path="details"></Route>
                </Route>
                <Route component={ComponentList} path="list/:id"></Route>
                <Route component={ComponentHeader} path="header"></Route>
            </Router>
        );
    };
}


ReactDOM.render(
    <Root/>,
    document.getElementById('example')
);
