const log = (function() {
  let method = {};
  const logMap = [{
    name: 'info',
    style: {
      color: 'blue'
    }
  }, {
    name: 'warn',
    style: {
      color: 'orange'
    }
  }, {
    name: 'error',
    style: {
      color: 'red'
    }
  }];

  logMap.map(o => {
    method[o.name] = function(s) {
      if (typeof s !== 'string') {
        console.log('[' + o.name + ']' + arguments);
      }
      const styles = Object.getOwnPropertyNames(o.style).map(name => name + ':' + (o.style)[name]).join(';');
      window.console.log('%c' + s, styles);
    }
  });
  return method;
}())

export default log
