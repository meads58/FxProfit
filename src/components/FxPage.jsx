import React from 'react';
import FxApi from '../api/FxApi'

const api = FxApi.getLatestFx();
const dates = FxApi.getFxByLastDays(10);
console.log(dates)
module.exports = React.createClass({
    render(){
        return <div>hello</div>
    }
})

