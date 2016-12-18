import 'whatwg-fetch'
import moment from 'moment';

const APP_ID = '0c2b8f5f1a694919beccca00326a6777'
const LATEST_FX_URL = 'https://openexchangerates.org/api/latest.json?app_id=';
const FX_ON_DATE_URL = 'https://openexchangerates.org/api/historical/';
const FX_FOR_DATE_RANGE = 'https://openexchangerates.org/api/historical/';

class FxApi {
  static getLatestFx() {
    fetch(LATEST_FX_URL + APP_ID)
      .then(response => {
        return response.json()
      }).then(json => {
        console.log("latest", json.rates)
      }).catch(ex => {
        console.log('parsing failed', ex)
      })
  }

  static _dateRangeList(range) {
    let dateRangeArray = [];
    for (let i = 1; i < range; i++){
      dateRangeArray.push(this._formateDate(i))
    }
    return dateRangeArray; 
  };

  static _formateDate(relativeDays){
    return  moment().subtract(relativeDays, 'days').format("YYYY-MM-DD");
  };

  static getFxByLastDays(days){
    let fxRange = [];
    const dateRangeArray = this._dateRangeList(days);
    
    dateRangeArray.map(fxDate => {  
     this.getFxByDate(fxDate).then(json => {
        fxRange.push({date : fxDate})
      });    
    });
  };

 

  static getFxByDate(date) {
    return fetch(FX_ON_DATE_URL + date + '.json?app_id=' + APP_ID)
      .then(response => {
        return response.json()
      }).then(json => {
        //console.log(json.rates)
        return json.rates
      }).catch(ex => {
        console.log('parsing failed', ex)
      })
  };
};

export default FxApi


