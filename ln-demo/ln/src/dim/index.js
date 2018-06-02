import React, {Component, PropTypes} from 'react';

//import {addTodo} from '../actions.js';

import {Select} from 'antd';
import 'antd/dist/antd.css';

const Option = Select.Option;

const provinceData = ['浙江', '江苏'];
const addr1Data = {
    浙江: ['杭州', '宁波', '温州'],
    江苏: ['南京', '苏州', '镇江'],
};
const addr2Data = {
    杭州: ['杭州1', '杭州2', '杭州3'],
    宁波: ['宁波1', '宁波2', '宁波3'],
    温州: ['温州1', '温州2', '温州3'],
    南京: ['南京1', '南京2', '南京3'],
    苏州: ['苏州1', '苏州2', '苏州3'],
    镇江: ['镇江1', '镇江2', '镇江3'],
};

class AreaAddr12Selector extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        addr1es: addr1Data[provinceData[0]],
        addr1: addr1Data[provinceData[0]][0],
        addr2es: addr2Data[addr1Data[provinceData[0]][0]],
        addr2: addr2Data[addr1Data[provinceData[0]][0]][0],
    }

    handleProvinceChange = (value) => {
        console.log('enter handleProvinceChange...')
        this.setState({
            area: value,
            addr1es: addr1Data[value], // 集合
            addr1: addr1Data[value][0], // 一个
            addr2es: addr2Data[addr1Data[value][0]],
            addr2: addr2Data[addr1Data[value][0]][0],
        });
    }
    onAddr1Change = (value) => {
        console.log('enter onAddr1Change...')
        this.setState({
            addr1: value,
            addr2es: addr2Data[value],
            addr2: addr2Data[value][0],
        });
    }

    onAddr2Change = (value) => {
        console.log('enter onAddr1Change...', value)
        this.setState({
            addr2: value,
        });
    }

    render() {
        const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
        const addr1Options = this.state.addr1es.map(city => <Option key={city}>{city}</Option>);
        const addr2Options = this.state.addr2es.map(city => <Option key={city}>{city}</Option>);
        const {lev1, lev2, lev3} = this.props;

        return (
            <div>
                <span>{lev1}</span><Select defaultValue={provinceData[0]} style={{width: 90}}
                                           onChange={this.handleProvinceChange}>
                {provinceOptions}
            </Select>
                <span>{lev2}</span><Select value={this.state.addr1} style={{width: 90}}
                                           onChange={this.onAddr1Change}>
                {addr1Options}
            </Select>
                <span>{lev3}</span><Select value={this.state.addr2} style={{width: 90}} mode="multiple"
                                           onChange={this.onAddr2Change}>
                {addr2Options}
            </Select>
            </div>
        );
    }
}

AreaAddr12Selector.propTypes = {
    lev1: PropTypes.string.isRequired,
    lev2: PropTypes.string.isRequired,
    lev3: PropTypes.string.isRequired,
    initValue: PropTypes.number
};


export default AreaAddr12Selector;

