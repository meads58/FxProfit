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
        console.log(json.rates)
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
  }

  static _formateDate(relativeDays){
    let fxDate = moment().subtract(relativeDays, 'days').calendar();
    console.log("heeeee", fxDate)
    let a =  moment(fxDate).format("MM.DD.YYYY");
    console.log("haaaaaa", a)
  };

  static getFxByLastDays(days){
    let fxRange = []
    const dateRangeArray = this._dateRangeList(days);

    //dateRangeArray.each(fxDate => {
      //fxRange.push({fxDate: this.getFxByDate(fxDate)})
    //});
    console.log(dateRangeArray)
  }

  static getFxByDate(date) {
    fetch(FX_ON_DATE_URL + date + '.json?app_id=' + APP_ID)
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


