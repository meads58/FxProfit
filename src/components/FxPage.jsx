import React from 'react';
import FxApi from '../api/FxApi'

const api = FxApi.getLatestFx();
const dates = FxApi.getFxByLastDays(1);

module.exports = React.createClass({
    render(){
        return <div>hello</div>
    }
})

