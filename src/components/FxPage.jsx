import React from 'react';
import FxApi from '../api/FxApi'

const api = FxApi.getLatestFx();
const dates = FxApi.getFxByLastDays(10);

module.exports = React.createClass({
    render(){
        return <div>hello</div>
    }
})

