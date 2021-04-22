//用于统计方法执行的时间
function time(prefix) {
    let count = 0;
    return function handleDescriptor(target, key, descriptor) {
  
      const fn = descriptor.value;
  
      if (prefix == null) {
        prefix = `${target.constructor.name}.${key}`;
      }
  
      if (typeof fn !== 'function') {
        throw new SyntaxError(`@time can only be used on functions, not: ${fn}`);
      }
  
      return {
        ...descriptor,
        value() {
          const label = `${prefix}-${count}`;
          count++;
          console.time(label);
  
          try {
            return fn.apply(this, arguments);
          } finally {
            console.timeEnd(label);
          }
        }
      }
    }
  }

export default time;