function mixin(...mixins) {
    return target => {
      if (!mixins.length) {
        throw new SyntaxError(`@mixin() class ${target.name} requires at least one mixin as an argument`);
      }
  
      for (let i = 0, l = mixins.length; i < l; i++) {
        const descs = Object.getOwnPropertyDescriptors(mixins[i]);
        const keys = Object.getOwnPropertyNames(descs);
  
        for (let j = 0, k = keys.length; j < k; j++) {
          const key = keys[j];
  
          if (!target.prototype.hasOwnProperty(key)) {
            Object.defineProperty(target.prototype, key, descs[key]);
          }
        }
      }
    };
  }

  export default mixin;