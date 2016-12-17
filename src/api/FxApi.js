import 'whatwg-fetch'
import moment from 'moment';

const APP_ID = '0c2b8f5f1a694919beccca00326a6777'

class FxApi {
  static getLatestFx() {
    let d = moment().subtract(10, 'days').calendar()
    console.log(moment().format("mm.dd.yy"))
    fetch('https://openexchangerates.org/api/latest.json?app_id=' + APP_ID)
      .then(response => {
        return response.json()
      }).then(json => {
        console.log(json.rates)
      }).catch(ex => {
        console.log('parsing failed', ex)
      })
  }

  static getFxByLastDays(days){
    //for (i = 0, i < days; i++;) {
     // let fxDate = Date.now - 5
   // }
  }

  static getFxByDate(date) {
    fetch('https://openexchangerates.org/api/historical/' + date + '.json?app_id=' + APP_ID)
      .then(response => {
        return response.json()
      }).then(json => {
        console.log(json.rates)
      }).catch(ex => {
        console.log('parsing failed', ex)
      })
  }
};

export default FxApi


