//定义一个不变的 对象
const MixinLog = {
    componentDidMount(){
        console.log('MixinLog componentDidMount');
    },
    log(){
        console.log('abcdefg...');
    }
};

export default MixinLog;