// The best way is to make use of closures
function singletonPattern() {
  var instance;
  function createInstance() {
    console.log('Initiated New Instance');
    var object = new Object('Logger Instance')
    return object;
  }

  return {
    getInstance: function() {
      console.log('Instance called');
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
}

const logger = singletonPattern();
const x = logger.getInstance();
const y = logger.getInstance();
const z = logger.getInstance();
const a = logger.getInstance();
console.log({ x });
console.log({ y })
console.log(x === y)
console.log(x === a)