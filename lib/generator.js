const transformFakerFunc = require('./fakerFunc');
const fs = require('fs');

function generator(model, length, dataName) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    let obj = {};
    Object.entries(model).map(([key, value]) => {
      obj = {...obj, ...{[key]: checkSimple(key, value,i)}};
    });
    arr = [...arr, obj];
  }

  let mergeData;
  if(fs.existsSync('data.json')) {
    const readFile= JSON.parse(fs.readFileSync('data.json','utf-8'));
    mergeData = {...readFile, ...{[dataName]: arr}};
  }
  fs.writeFileSync('data.json', JSON.stringify(mergeData ? mergeData : {[dataName]: arr}, null, '\t'));
  return true;
}

function checkSimple(key, value, i) {
  if (value && typeof value === 'object') {
    if (Array.isArray(value)) {
      let array =[];
      let integratedObject ={};
      let [valueWithOutBracket, length] = value;
      for(let i=0; i <length; i++){
        for (let subObjKey in valueWithOutBracket) {
          if (valueWithOutBracket.hasOwnProperty(subObjKey)) {
            integratedObject = {...integratedObject, ...{[subObjKey]: transformFakerFunc(valueWithOutBracket[subObjKey], i)}}
          }
        }
        array = [...array, integratedObject]
      }
      return array;
    } else {
      let obj = {};
      for (let subObjKey in value) {
        if (value.hasOwnProperty(subObjKey)) {
          obj = {...obj, ...{[subObjKey]: transformFakerFunc(value[subObjKey], i)}};
        }
      }
      return obj;
    }
  }else {
    return transformFakerFunc(value, i);
  }
}


module.exports = generator;
