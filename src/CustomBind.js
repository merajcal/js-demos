Function.prototype.bind = function(ctx) {
   var ctxArg = Array.prototype.slice.call(arguments, 1);
   var func = this;

   return function() {
      var allArgs = Array.prototype.slice.call(arguments);
      allArgs = ctxArg.concat(allArgs);
      return func.apply(ctx, allArgs);
   }
}