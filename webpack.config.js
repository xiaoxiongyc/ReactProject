/**
 * Created by koguma on 2017/5/13.
 */
var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require("webpack-dev-server");

module.exports = {
    context:  __dirname + "/src",
    entry:"./js/index.js",
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            //下面是使用 ant-design 的配置文件
            {
                test: /\.css$/,
                //modules  模块化配置
                loader: 'style-loader!css-loader?modules'
            },
        ]
    },
    output: {
        path:   __dirname + '/src/',
        filename: 'bundle.js'
    },
};
