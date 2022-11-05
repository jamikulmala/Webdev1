
const f = (value) => {
    return new Promise((resolve, reject) => {
      if(isNaN(value) === false){
        return resolve(value);
      }
      else{
        return reject('Parameter is not a number!');
      }
      })
    }

const g = (value) => {
  return f(value)
    .then(e => Math.log(e))
    .catch(err => {
      return err;
    });
}

const checkIfFunction = (param) => {
  return new Promise((resolve, reject) => {
    if(typeof param === "function"){
      return resolve(true);
    }
    else{
      return reject('Not a function!');
    }
    })
  }

const p = (time) => {
  return new Promise((resolve, reject) => {
    if(isNaN(time) === true){
      return reject("Not a number!")
    }
    if(time > 2000) {
      return reject("Too long time!");
    }

    setTimeout(resolve, time);
});
};

exports.f = f;
exports.g = g;
exports.checkIfFunction = checkIfFunction;
exports.p = p;
