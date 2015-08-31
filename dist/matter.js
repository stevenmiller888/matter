(function umd(require){
  if (typeof exports === 'object') {
    module.exports = require('1');
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(function(){ return require('1'); });
  } else {
    this['matter'] = require('1');
  }
})((function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @api public
   */

  function require(name){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];
    var threw = true;

    try {
      fn.call(m.exports, function(req){
        var dep = modules[id][1][req];
        return require(dep || req);
      }, m, m.exports, outer, modules, cache, entries);
      threw = false;
    } finally {
      if (threw) {
        delete cache[id];
      } else if (name) {
        // expose as 'name'.
        cache[name] = cache[id];
      }
    }

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lib = require('./lib');

exports.TextField = _lib.TextField;
exports.Checkbox = _lib.Checkbox;
exports.Button = _lib.Button;
exports.Shape = _lib.Shape;
exports.Table = _lib.Table;
exports.Grid = _lib.Grid;
exports.Code = _lib.Code;
exports.Menu = _lib.Menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OzttQkFTTyxPQUFPOztRQUdaLFNBQVM7UUFDVCxRQUFRO1FBQ1IsTUFBTTtRQUNOLEtBQUs7UUFDTCxLQUFLO1FBQ0wsSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUZXh0RmllbGQsXG4gIENoZWNrYm94LFxuICBCdXR0b24sXG4gIFNoYXBlLFxuICBUYWJsZSxcbiAgR3JpZCxcbiAgQ29kZSxcbiAgTWVudVxufSBmcm9tICcuL2xpYic7XG5cbmV4cG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgQ2hlY2tib3gsXG4gIEJ1dHRvbixcbiAgU2hhcGUsXG4gIFRhYmxlLFxuICBHcmlkLFxuICBDb2RlLFxuICBNZW51XG59O1xuIl19
}, {"./lib":2}],
2: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _textField = require('./text-field');

var _textField2 = _interopRequireDefault(_textField);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _grid = require('./grid');

var _grid2 = _interopRequireDefault(_grid);

var _code = require('./code');

var _code2 = _interopRequireDefault(_code);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

exports.TextField = _textField2['default'];
exports.Checkbox = _checkbox2['default'];
exports.Button = _button2['default'];
exports.Shape = _shape2['default'];
exports.Table = _table2['default'];
exports.Grid = _grid2['default'];
exports.Code = _code2['default'];
exports.Menu = _menu2['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt5QkFBc0IsY0FBYzs7Ozt3QkFDZixZQUFZOzs7O3NCQUNkLFVBQVU7Ozs7cUJBQ1gsU0FBUzs7OztxQkFDVCxTQUFTOzs7O29CQUNWLFFBQVE7Ozs7b0JBQ1IsUUFBUTs7OztvQkFDUixRQUFROzs7O1FBR3ZCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsTUFBTTtRQUNOLEtBQUs7UUFDTCxLQUFLO1FBQ0wsSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJIiwiZmlsZSI6ImxpYi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHRGaWVsZCBmcm9tICcuL3RleHQtZmllbGQnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vY2hlY2tib3gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IENvZGUgZnJvbSAnLi9jb2RlJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5cbmV4cG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgQ2hlY2tib3gsXG4gIEJ1dHRvbixcbiAgU2hhcGUsXG4gIFRhYmxlLFxuICBHcmlkLFxuICBDb2RlLFxuICBNZW51XG59O1xuIl19
}, {"./text-field":3,"./checkbox":4,"./button":5,"./shape":6,"./table":7,"./grid":8,"./code":9,"./menu":10}],
3: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

/**
 * TextField.
 */

exports['default'] = {
  propTypes: {
    placeholder: { type: 'string' }
  },

  render: function render(_ref) {
    var props = _ref.props;
    var state = _ref.state;
    var placeholder = props.placeholder;

    var attrs = {
      'class': 'matter-TextField',
      placeholder: placeholder
    };

    return (0, _dekujsVirtualElement2['default'])('input', attrs);
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi90ZXh0LWZpZWxkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29DQUFvQix3QkFBd0I7Ozs7Ozs7O3FCQU03QjtBQUNiLFdBQVMsRUFBRTtBQUNULGVBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7R0FDaEM7O0FBRUQsUUFBTSxFQUFBLGdCQUFDLElBQWdCLEVBQUU7UUFBaEIsS0FBSyxHQUFQLElBQWdCLENBQWQsS0FBSztRQUFFLEtBQUssR0FBZCxJQUFnQixDQUFQLEtBQUs7UUFDYixXQUFXLEdBQUssS0FBSyxDQUFyQixXQUFXOztBQUVqQixRQUFJLEtBQUssR0FBRztBQUNWLGVBQU8sa0JBQWtCO0FBQ3pCLGlCQUFXLEVBQUUsV0FBVztLQUN6QixDQUFDOztBQUVGLFdBQ0UsZ0RBQVksS0FBSyxDQUNULENBQ1I7R0FDSDtDQUNGIiwiZmlsZSI6ImxpYi90ZXh0LWZpZWxkL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxlbWVudCBmcm9tICdkZWt1anMvdmlydHVhbC1lbGVtZW50JztcblxuLyoqXG4gKiBUZXh0RmllbGQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wVHlwZXM6IHtcbiAgICBwbGFjZWhvbGRlcjogeyB0eXBlOiAnc3RyaW5nJyB9XG4gIH0sXG5cbiAgcmVuZGVyKHsgcHJvcHMsIHN0YXRlIH0pIHtcbiAgICBsZXQgeyBwbGFjZWhvbGRlciB9ID0gcHJvcHM7XG5cbiAgICBsZXQgYXR0cnMgPSB7XG4gICAgICBjbGFzczogJ21hdHRlci1UZXh0RmllbGQnLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXQgeyAuLi5hdHRycyB9PlxuICAgICAgPC9pbnB1dD5cbiAgICApO1xuICB9XG59O1xuIl19
}, {"dekujs/virtual-element":11}],
11: [function(require, module, exports) {
"use strict";

(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.virtualElement = f();
  }
})(function () {
  var define, module, exports;return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof _require == "function" && _require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof _require == "function" && _require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
  })({ 1: [function (_require, module, exports) {
      /**
       * Module dependencies.
       */

      var slice = _require('sliced');
      var flatten = _require('array-flatten');

      /**
       * This function lets us create virtual nodes using a simple
       * syntax. It is compatible with JSX transforms so you can use
       * JSX to write nodes that will compile to this function.
       *
       * let node = element('div', { id: 'foo' }, [
       *   element('a', { href: 'http://google.com' }, 'Google')
       * ])
       *
       * You can leave out the attributes or the children if either
       * of them aren't needed and it will figure out what you're
       * trying to do.
       */

      module.exports = element;

      /**
       * Create virtual trees of components.
       *
       * This creates the nicer API for the user.
       * It translates that friendly API into an actual tree of nodes.
       *
       * @param {*} type
       * @param {Object} attributes
       * @param {Array} children
       * @return {Object}
       * @api public
       */

      function element(type, attributes, children) {
        // Default to div with no args
        if (!type) {
          throw new TypeError('element() needs a type.');
        }

        // Skipped adding attributes and we're passing
        // in children instead.
        if (arguments.length === 2 && (typeof attributes === 'string' || Array.isArray(attributes))) {
          children = attributes;
          attributes = {};
        }

        // Account for JSX putting the children as multiple arguments.
        // This is essentially just the ES6 rest param
        if (arguments.length > 2 && children && Array.isArray(arguments[2]) === false) {
          children = slice(arguments, 2);
        }

        children = children || [];
        attributes = attributes || {};

        // passing in a single child, you can skip
        // using the array
        if (!Array.isArray(children)) {
          children = [children];
        }

        // Flatten nested child arrays. This is how JSX compiles some nodes.
        children = flatten(children, 2);

        // if you pass in a function, it's a `Component` constructor.
        // otherwise it's an element.
        return {
          type: type,
          children: children,
          attributes: attributes
        };
      }
    }, { "array-flatten": 2, "sliced": 3 }], 2: [function (_require, module, exports) {
      'use strict';

      /**
       * Expose `arrayFlatten`.
       */
      module.exports = arrayFlatten;

      /**
       * Recursive flatten function with depth.
       *
       * @param  {Array}  array
       * @param  {Array}  result
       * @param  {Number} depth
       * @return {Array}
       */
      function flattenWithDepth(array, result, depth) {
        for (var i = 0; i < array.length; i++) {
          var value = array[i];

          if (depth > 0 && Array.isArray(value)) {
            flattenWithDepth(value, result, depth - 1);
          } else {
            result.push(value);
          }
        }

        return result;
      }

      /**
       * Recursive flatten function. Omitting depth is slightly faster.
       *
       * @param  {Array} array
       * @param  {Array} result
       * @return {Array}
       */
      function flattenForever(array, result) {
        for (var i = 0; i < array.length; i++) {
          var value = array[i];

          if (Array.isArray(value)) {
            flattenForever(value, result);
          } else {
            result.push(value);
          }
        }

        return result;
      }

      /**
       * Flatten an array, with the ability to define a depth.
       *
       * @param  {Array}  array
       * @param  {Number} depth
       * @return {Array}
       */
      function arrayFlatten(array, depth) {
        if (depth == null) {
          return flattenForever(array, []);
        }

        return flattenWithDepth(array, [], depth);
      }
    }, {}], 3: [function (_require, module, exports) {
      module.exports = exports = _require('./lib/sliced');
    }, { "./lib/sliced": 4 }], 4: [function (_require, module, exports) {

      /**
       * An Array.prototype.slice.call(arguments) alternative
       *
       * @param {Object} args something with a length
       * @param {Number} slice
       * @param {Number} sliceEnd
       * @api public
       */

      module.exports = function (args, slice, sliceEnd) {
        var ret = [];
        var len = args.length;

        if (0 === len) return ret;

        var start = slice < 0 ? Math.max(0, slice + len) : slice || 0;

        if (sliceEnd !== undefined) {
          len = sliceEnd < 0 ? sliceEnd + len : sliceEnd;
        }

        while (len-- > start) {
          ret[len - start] = args[len];
        }

        return ret;
      };
    }, {}] }, {}, [1])(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVrdWpzLXZpcnR1YWwtZWxlbWVudEAxLjEuMi9idWlsZC92aXJ0dWFsLWVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsTUFBRyxPQUFPLE9BQU8sS0FBRyxRQUFRLElBQUUsT0FBTyxNQUFNLEtBQUcsV0FBVyxFQUFDO0FBQUMsVUFBTSxDQUFDLE9BQU8sR0FBQyxDQUFDLEVBQUUsQ0FBQTtHQUFDLE1BQUssSUFBRyxPQUFPLE1BQU0sS0FBRyxVQUFVLElBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQztBQUFDLFVBQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxNQUFJO0FBQUMsUUFBSSxDQUFDLENBQUMsSUFBRyxPQUFPLE1BQU0sS0FBRyxXQUFXLEVBQUM7QUFBQyxPQUFDLEdBQUMsTUFBTSxDQUFBO0tBQUMsTUFBSyxJQUFHLE9BQU8sTUFBTSxLQUFHLFdBQVcsRUFBQztBQUFDLE9BQUMsR0FBQyxNQUFNLENBQUE7S0FBQyxNQUFLLElBQUcsT0FBTyxJQUFJLEtBQUcsV0FBVyxFQUFDO0FBQUMsT0FBQyxHQUFDLElBQUksQ0FBQTtLQUFDLE1BQUk7QUFBQyxPQUFDLEdBQUMsSUFBSSxDQUFBO0tBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUUsQ0FBQTtHQUFDO0NBQUMsQ0FBQSxDQUFFLFlBQVU7QUFBQyxNQUFJLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGFBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxVQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQUMsWUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztBQUFDLGNBQUksQ0FBQyxHQUFDLE9BQU8sUUFBUSxJQUFFLFVBQVUsSUFBRSxRQUFRLENBQUMsSUFBRyxDQUFDLENBQUMsSUFBRSxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLEdBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLElBQUksR0FBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUEsQ0FBQTtTQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxjQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtTQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7S0FBQyxJQUFJLENBQUMsR0FBQyxPQUFPLFFBQVEsSUFBRSxVQUFVLElBQUUsUUFBUSxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtHQUFDLENBQUEsQ0FBRSxFQUFD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O0FBQzFCLGFBQUcsR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUNkLFFBQVEsR0FBRyxHQUFHLEdBQ2QsUUFBUSxDQUFBO1NBQ2I7O0FBRUQsZUFBTyxHQUFHLEVBQUUsR0FBRyxLQUFLLEVBQUU7QUFDcEIsYUFBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7O0FBRUQsZUFBTyxHQUFHLENBQUM7T0FDWixDQUFBO0tBR0EsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDaEIsQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvZGVrdWpzLXZpcnR1YWwtZWxlbWVudEAxLjEuMi9idWlsZC92aXJ0dWFsLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLnZpcnR1YWxFbGVtZW50ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiBfcmVxdWlyZT09XCJmdW5jdGlvblwiJiZfcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgX3JlcXVpcmU9PVwiZnVuY3Rpb25cIiYmX3JlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHNsaWNlID0gX3JlcXVpcmUoJ3NsaWNlZCcpXG52YXIgZmxhdHRlbiA9IF9yZXF1aXJlKCdhcnJheS1mbGF0dGVuJylcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGxldHMgdXMgY3JlYXRlIHZpcnR1YWwgbm9kZXMgdXNpbmcgYSBzaW1wbGVcbiAqIHN5bnRheC4gSXQgaXMgY29tcGF0aWJsZSB3aXRoIEpTWCB0cmFuc2Zvcm1zIHNvIHlvdSBjYW4gdXNlXG4gKiBKU1ggdG8gd3JpdGUgbm9kZXMgdGhhdCB3aWxsIGNvbXBpbGUgdG8gdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBsZXQgbm9kZSA9IGVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdmb28nIH0sIFtcbiAqICAgZWxlbWVudCgnYScsIHsgaHJlZjogJ2h0dHA6Ly9nb29nbGUuY29tJyB9LCAnR29vZ2xlJylcbiAqIF0pXG4gKlxuICogWW91IGNhbiBsZWF2ZSBvdXQgdGhlIGF0dHJpYnV0ZXMgb3IgdGhlIGNoaWxkcmVuIGlmIGVpdGhlclxuICogb2YgdGhlbSBhcmVuJ3QgbmVlZGVkIGFuZCBpdCB3aWxsIGZpZ3VyZSBvdXQgd2hhdCB5b3UncmVcbiAqIHRyeWluZyB0byBkby5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRcblxuLyoqXG4gKiBDcmVhdGUgdmlydHVhbCB0cmVlcyBvZiBjb21wb25lbnRzLlxuICpcbiAqIFRoaXMgY3JlYXRlcyB0aGUgbmljZXIgQVBJIGZvciB0aGUgdXNlci5cbiAqIEl0IHRyYW5zbGF0ZXMgdGhhdCBmcmllbmRseSBBUEkgaW50byBhbiBhY3R1YWwgdHJlZSBvZiBub2Rlcy5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge0FycmF5fSBjaGlsZHJlblxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbGVtZW50ICh0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuICAvLyBEZWZhdWx0IHRvIGRpdiB3aXRoIG5vIGFyZ3NcbiAgaWYgKCF0eXBlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZWxlbWVudCgpIG5lZWRzIGEgdHlwZS4nKVxuICB9XG5cbiAgLy8gU2tpcHBlZCBhZGRpbmcgYXR0cmlidXRlcyBhbmQgd2UncmUgcGFzc2luZ1xuICAvLyBpbiBjaGlsZHJlbiBpbnN0ZWFkLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAodHlwZW9mIGF0dHJpYnV0ZXMgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoYXR0cmlidXRlcykpKSB7XG4gICAgY2hpbGRyZW4gPSBhdHRyaWJ1dGVzXG4gICAgYXR0cmlidXRlcyA9IHt9XG4gIH1cblxuICAvLyBBY2NvdW50IGZvciBKU1ggcHV0dGluZyB0aGUgY2hpbGRyZW4gYXMgbXVsdGlwbGUgYXJndW1lbnRzLlxuICAvLyBUaGlzIGlzIGVzc2VudGlhbGx5IGp1c3QgdGhlIEVTNiByZXN0IHBhcmFtXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBjaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPT09IGZhbHNlKSB7XG4gICAgY2hpbGRyZW4gPSBzbGljZShhcmd1bWVudHMsIDIpXG4gIH1cblxuICBjaGlsZHJlbiA9IGNoaWxkcmVuIHx8IFtdXG4gIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzIHx8IHt9XG5cbiAgLy8gcGFzc2luZyBpbiBhIHNpbmdsZSBjaGlsZCwgeW91IGNhbiBza2lwXG4gIC8vIHVzaW5nIHRoZSBhcnJheVxuICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgY2hpbGRyZW4gPSBbY2hpbGRyZW5dXG4gIH1cblxuICAvLyBGbGF0dGVuIG5lc3RlZCBjaGlsZCBhcnJheXMuIFRoaXMgaXMgaG93IEpTWCBjb21waWxlcyBzb21lIG5vZGVzLlxuICBjaGlsZHJlbiA9IGZsYXR0ZW4oY2hpbGRyZW4sIDIpXG5cbiAgLy8gaWYgeW91IHBhc3MgaW4gYSBmdW5jdGlvbiwgaXQncyBhIGBDb21wb25lbnRgIGNvbnN0cnVjdG9yLlxuICAvLyBvdGhlcndpc2UgaXQncyBhbiBlbGVtZW50LlxuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfVxufVxuXG59LHtcImFycmF5LWZsYXR0ZW5cIjoyLFwic2xpY2VkXCI6M31dLDI6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEV4cG9zZSBgYXJyYXlGbGF0dGVuYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZsYXR0ZW5cblxuLyoqXG4gKiBSZWN1cnNpdmUgZmxhdHRlbiBmdW5jdGlvbiB3aXRoIGRlcHRoLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSAgcmVzdWx0XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlcHRoXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbldpdGhEZXB0aCAoYXJyYXksIHJlc3VsdCwgZGVwdGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldXG5cbiAgICBpZiAoZGVwdGggPiAwICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmbGF0dGVuV2l0aERlcHRoKHZhbHVlLCByZXN1bHQsIGRlcHRoIC0gMSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFJlY3Vyc2l2ZSBmbGF0dGVuIGZ1bmN0aW9uLiBPbWl0dGluZyBkZXB0aCBpcyBzbGlnaHRseSBmYXN0ZXIuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gcmVzdWx0XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkZvcmV2ZXIgKGFycmF5LCByZXN1bHQpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZsYXR0ZW5Gb3JldmVyKHZhbHVlLCByZXN1bHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuIGFycmF5LCB3aXRoIHRoZSBhYmlsaXR5IHRvIGRlZmluZSBhIGRlcHRoLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgYXJyYXlcbiAqIEBwYXJhbSAge051bWJlcn0gZGVwdGhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBhcnJheUZsYXR0ZW4gKGFycmF5LCBkZXB0aCkge1xuICBpZiAoZGVwdGggPT0gbnVsbCkge1xuICAgIHJldHVybiBmbGF0dGVuRm9yZXZlcihhcnJheSwgW10pXG4gIH1cblxuICByZXR1cm4gZmxhdHRlbldpdGhEZXB0aChhcnJheSwgW10sIGRlcHRoKVxufVxuXG59LHt9XSwzOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBfcmVxdWlyZSgnLi9saWIvc2xpY2VkJyk7XG5cbn0se1wiLi9saWIvc2xpY2VkXCI6NH1dLDQ6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxuLyoqXG4gKiBBbiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpIGFsdGVybmF0aXZlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3Mgc29tZXRoaW5nIHdpdGggYSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBzbGljZVxuICogQHBhcmFtIHtOdW1iZXJ9IHNsaWNlRW5kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3MsIHNsaWNlLCBzbGljZUVuZCkge1xuICB2YXIgcmV0ID0gW107XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcblxuICBpZiAoMCA9PT0gbGVuKSByZXR1cm4gcmV0O1xuXG4gIHZhciBzdGFydCA9IHNsaWNlIDwgMFxuICAgID8gTWF0aC5tYXgoMCwgc2xpY2UgKyBsZW4pXG4gICAgOiBzbGljZSB8fCAwO1xuXG4gIGlmIChzbGljZUVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuID0gc2xpY2VFbmQgPCAwXG4gICAgICA/IHNsaWNlRW5kICsgbGVuXG4gICAgICA6IHNsaWNlRW5kXG4gIH1cblxuICB3aGlsZSAobGVuLS0gPiBzdGFydCkge1xuICAgIHJldFtsZW4gLSBzdGFydF0gPSBhcmdzW2xlbl07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5cbn0se31dfSx7fSxbMV0pKDEpXG59KTsiXX0=
}, {}],
4: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

/**
 * Checkbox.
 */

exports['default'] = {
  propTypes: {
    size: { type: 'string', expects: ['small', 'medium', 'large'] },
    onClick: { type: 'function' },
    checked: { type: 'boolean' }
  },

  render: function render(_ref) {
    var props = _ref.props;
    var size = props.size;
    var checked = props.checked;
    var onClick = props.onClick;

    var attrs = {
      'class': 'matter-Checkbox',
      size: size || 'medium',
      onClick: onClick,
      checked: checked,
      type: 'checkbox'
    };

    return (0, _dekujsVirtualElement2['default'])('input', attrs);
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jaGVja2JveC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQ0FBb0Isd0JBQXdCOzs7Ozs7OztxQkFNN0I7QUFDYixXQUFTLEVBQUU7QUFDVCxRQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDL0QsV0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtBQUM3QixXQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0dBQzdCOztBQUVELFFBQU0sRUFBQSxnQkFBQyxJQUFTLEVBQUU7UUFBVCxLQUFLLEdBQVAsSUFBUyxDQUFQLEtBQUs7UUFDTixJQUFJLEdBQXVCLEtBQUssQ0FBaEMsSUFBSTtRQUFFLE9BQU8sR0FBYyxLQUFLLENBQTFCLE9BQU87UUFBRSxPQUFPLEdBQUssS0FBSyxDQUFqQixPQUFPOztBQUU1QixRQUFJLEtBQUssR0FBRztBQUNWLGVBQU8saUJBQWlCO0FBQ3hCLFVBQUksRUFBRSxJQUFJLElBQUksUUFBUTtBQUN0QixhQUFPLEVBQUUsT0FBTztBQUNoQixhQUFPLEVBQUUsT0FBTztBQUNoQixVQUFJLEVBQUUsVUFBVTtLQUNqQixDQUFDOztBQUVGLFdBQU8sZ0RBQVksS0FBSyxDQUFJLENBQUE7R0FDN0I7Q0FDRiIsImZpbGUiOiJsaWIvY2hlY2tib3gvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuXG4vKipcbiAqIENoZWNrYm94LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc2l6ZTogeyB0eXBlOiAnc3RyaW5nJywgZXhwZWN0czogWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSB9LFxuICAgIG9uQ2xpY2s6IHsgdHlwZTogJ2Z1bmN0aW9uJyB9LFxuICAgIGNoZWNrZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcyB9KSB7XG4gICAgbGV0IHsgc2l6ZSwgY2hlY2tlZCwgb25DbGljayB9ID0gcHJvcHM7XG4gICAgXG4gICAgbGV0IGF0dHJzID0ge1xuICAgICAgY2xhc3M6ICdtYXR0ZXItQ2hlY2tib3gnLFxuICAgICAgc2l6ZTogc2l6ZSB8fCAnbWVkaXVtJyxcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgdHlwZTogJ2NoZWNrYm94J1xuICAgIH07XG5cbiAgICByZXR1cm4gPGlucHV0IHsgLi4uYXR0cnMgfS8+XG4gIH1cbn07XG4iXX0=
}, {"dekujs/virtual-element":11}],
5: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

/**
 * Button.
 */

exports['default'] = {
  propTypes: {
    type: { type: 'string', expects: ['primary', 'secondary', 'warning'] },
    size: { type: 'string', expects: ['small', 'medium', 'large'] },
    onClick: { type: 'function' },
    label: { type: 'string' }
  },

  render: function render(_ref) {
    var props = _ref.props;
    var label = props.label;
    var size = props.size;
    var type = props.type;
    var onClick = props.onClick;

    var attrs = {
      type: type || 'primary',
      size: size || 'medium',
      'class': 'matter-Button',
      onClick: onClick
    };

    return (0, _dekujsVirtualElement2['default'])(
      'button',
      attrs,
      label
    );
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9idXR0b24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0NBQW9CLHdCQUF3Qjs7Ozs7Ozs7cUJBTTdCO0FBQ2IsV0FBUyxFQUFFO0FBQ1QsUUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFO0FBQ3RFLFFBQUksRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtBQUMvRCxXQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQzdCLFNBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7R0FDMUI7O0FBRUQsUUFBTSxFQUFBLGdCQUFDLElBQVMsRUFBRTtRQUFULEtBQUssR0FBUCxJQUFTLENBQVAsS0FBSztRQUNOLEtBQUssR0FBMEIsS0FBSyxDQUFwQyxLQUFLO1FBQUUsSUFBSSxHQUFvQixLQUFLLENBQTdCLElBQUk7UUFBRSxJQUFJLEdBQWMsS0FBSyxDQUF2QixJQUFJO1FBQUUsT0FBTyxHQUFLLEtBQUssQ0FBakIsT0FBTzs7QUFFaEMsUUFBSSxLQUFLLEdBQUc7QUFDVixVQUFJLEVBQUUsSUFBSSxJQUFJLFNBQVM7QUFDdkIsVUFBSSxFQUFFLElBQUksSUFBSSxRQUFRO0FBQ3RCLGVBQU8sZUFBZTtBQUN0QixhQUFPLEVBQUUsT0FBTztLQUNqQixDQUFDOztBQUVGLFdBQ0U7O01BQWEsS0FBSztNQUNkLEtBQUs7S0FDQSxDQUNUO0dBQ0g7Q0FDRiIsImZpbGUiOiJsaWIvYnV0dG9uL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxlbWVudCBmcm9tICdkZWt1anMvdmlydHVhbC1lbGVtZW50JztcblxuLyoqXG4gKiBCdXR0b24uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wVHlwZXM6IHtcbiAgICB0eXBlOiB7IHR5cGU6ICdzdHJpbmcnLCBleHBlY3RzOiBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3dhcm5pbmcnXSB9LFxuICAgIHNpemU6IHsgdHlwZTogJ3N0cmluZycsIGV4cGVjdHM6IFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10gfSxcbiAgICBvbkNsaWNrOiB7IHR5cGU6ICdmdW5jdGlvbicgfSxcbiAgICBsYWJlbDogeyB0eXBlOiAnc3RyaW5nJyB9XG4gIH0sXG5cbiAgcmVuZGVyKHsgcHJvcHMgfSkge1xuICAgIGxldCB7IGxhYmVsLCBzaXplLCB0eXBlLCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICAgIGxldCBhdHRycyA9IHtcbiAgICAgIHR5cGU6IHR5cGUgfHwgJ3ByaW1hcnknLFxuICAgICAgc2l6ZTogc2l6ZSB8fCAnbWVkaXVtJyxcbiAgICAgIGNsYXNzOiAnbWF0dGVyLUJ1dHRvbicsXG4gICAgICBvbkNsaWNrOiBvbkNsaWNrXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHsgLi4uYXR0cnMgfT5cbiAgICAgICAgeyBsYWJlbCB9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59O1xuIl19
}, {"dekujs/virtual-element":11}],
6: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

/**
 * Shape.
 */

exports['default'] = {
  propTypes: {
    color: { type: 'string' },
    space: { type: 'string' },
    kind: { type: 'string' },
    size: { type: 'string' }
  },

  render: function render(_ref, updateState) {
    var props = _ref.props;
    var state = _ref.state;
    var children = props.children;
    var color = props.color;
    var space = props.space;
    var kind = props.kind;
    var size = props.size;

    var attrs = {
      'class': 'matter-Shape',
      kind: kind || 'rectangle',
      space: space || 'medium',
      size: size || 'medium',
      color: color
    };

    return (0, _dekujsVirtualElement2['default'])(
      'div',
      attrs,
      children
    );
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zaGFwZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQ0FBb0Isd0JBQXdCOzs7Ozs7OztxQkFNN0I7QUFDYixXQUFTLEVBQUU7QUFDVCxTQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQ3pCLFNBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDekIsUUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUN4QixRQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0dBQ3pCOztBQUVELFFBQU0sRUFBQSxnQkFBQyxJQUFnQixFQUFFLFdBQVcsRUFBRTtRQUE3QixLQUFLLEdBQVAsSUFBZ0IsQ0FBZCxLQUFLO1FBQUUsS0FBSyxHQUFkLElBQWdCLENBQVAsS0FBSztRQUNiLFFBQVEsR0FBK0IsS0FBSyxDQUE1QyxRQUFRO1FBQUUsS0FBSyxHQUF3QixLQUFLLENBQWxDLEtBQUs7UUFBRSxLQUFLLEdBQWlCLEtBQUssQ0FBM0IsS0FBSztRQUFFLElBQUksR0FBVyxLQUFLLENBQXBCLElBQUk7UUFBRSxJQUFJLEdBQUssS0FBSyxDQUFkLElBQUk7O0FBRXhDLFFBQUksS0FBSyxHQUFHO0FBQ1YsZUFBTyxjQUFjO0FBQ3JCLFVBQUksRUFBRSxJQUFJLElBQUksV0FBVztBQUN6QixXQUFLLEVBQUUsS0FBSyxJQUFJLFFBQVE7QUFDeEIsVUFBSSxFQUFFLElBQUksSUFBSSxRQUFRO0FBQ3RCLFdBQUssRUFBRSxLQUFLO0tBQ2IsQ0FBQzs7QUFFRixXQUNFOztNQUFVLEtBQUs7TUFDWCxRQUFRO0tBQ04sQ0FDTjtHQUNIO0NBQ0YiLCJmaWxlIjoibGliL3NoYXBlL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxlbWVudCBmcm9tICdkZWt1anMvdmlydHVhbC1lbGVtZW50JztcblxuLyoqXG4gKiBTaGFwZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BUeXBlczoge1xuICAgIGNvbG9yOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgc3BhY2U6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICBraW5kOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgc2l6ZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gIH0sXG5cbiAgcmVuZGVyKHsgcHJvcHMsIHN0YXRlIH0sIHVwZGF0ZVN0YXRlKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4sIGNvbG9yLCBzcGFjZSwga2luZCwgc2l6ZSB9ID0gcHJvcHM7XG5cbiAgICBsZXQgYXR0cnMgPSB7XG4gICAgICBjbGFzczogJ21hdHRlci1TaGFwZScsXG4gICAgICBraW5kOiBraW5kIHx8ICdyZWN0YW5nbGUnLFxuICAgICAgc3BhY2U6IHNwYWNlIHx8ICdtZWRpdW0nLFxuICAgICAgc2l6ZTogc2l6ZSB8fCAnbWVkaXVtJyxcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgeyAuLi5hdHRycyB9PlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG4iXX0=
}, {"dekujs/virtual-element":11}],
7: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

/**
 * Table.
 */

exports['default'] = {
  propTypes: {
    rows: { type: 'array' }
  },

  render: function render(_ref, setState) {
    var props = _ref.props;
    var state = _ref.state;
    var rows = props.rows;

    var tableRows = rows.map(function (row) {
      var rowCells = row.map(function (cell) {
        return (0, _dekujsVirtualElement2['default'])(
          'td',
          { 'class': 'matter-Table-cell', colspan: '1', rowspan: '1' },
          (0, _dekujsVirtualElement2['default'])(
            'span',
            null,
            cell
          )
        );
      });

      return (0, _dekujsVirtualElement2['default'])(
        'tr',
        { 'class': 'matter-Table-row' },
        rowCells
      );
    });

    return (0, _dekujsVirtualElement2['default'])(
      'table',
      { 'class': 'matter-Table', cellpadding: '0', cellspacing: '0' },
      (0, _dekujsVirtualElement2['default'])(
        'tbody',
        null,
        tableRows
      )
    );
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi90YWJsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQ0FBb0Isd0JBQXdCOzs7Ozs7OztxQkFNN0I7QUFDYixXQUFTLEVBQUU7QUFDVCxRQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0dBQ3hCOztBQUVELFFBQU0sRUFBQSxnQkFBQyxJQUFnQixFQUFFLFFBQVEsRUFBRTtRQUExQixLQUFLLEdBQVAsSUFBZ0IsQ0FBZCxLQUFLO1FBQUUsS0FBSyxHQUFkLElBQWdCLENBQVAsS0FBSztRQUNiLElBQUksR0FBSyxLQUFLLENBQWQsSUFBSTs7QUFFVixRQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBRyxFQUFFO0FBQ3JDLFVBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUU7QUFDcEMsZUFDRTs7WUFBSSxTQUFNLG1CQUFtQixFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUc7VUFDbkQ7OztZQUFRLElBQUk7V0FBUztTQUNsQixDQUNMO09BQ0gsQ0FBQyxDQUFDOztBQUVILGFBQ0U7O1VBQUksU0FBTSxrQkFBa0I7UUFDeEIsUUFBUTtPQUNQLENBQ0w7S0FDSCxDQUFDLENBQUM7O0FBRUgsV0FDRTs7UUFBTyxTQUFNLGNBQWMsRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFDLFdBQVcsRUFBQyxHQUFHO01BQ3pEOzs7UUFDSSxTQUFTO09BQ0w7S0FDRixDQUNSO0dBQ0g7Q0FDRiIsImZpbGUiOiJsaWIvdGFibGUvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuXG4vKipcbiAqIFRhYmxlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgcm93czogeyB0eXBlOiAnYXJyYXknIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcywgc3RhdGUgfSwgc2V0U3RhdGUpIHtcbiAgICBsZXQgeyByb3dzIH0gPSBwcm9wcztcblxuICAgIGxldCB0YWJsZVJvd3MgPSByb3dzLm1hcChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGxldCByb3dDZWxscyA9IHJvdy5tYXAoZnVuY3Rpb24oY2VsbCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0ZCBjbGFzcz0nbWF0dGVyLVRhYmxlLWNlbGwnIGNvbHNwYW49JzEnIHJvd3NwYW49JzEnPlxuICAgICAgICAgICAgPHNwYW4+eyBjZWxsIH08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHIgY2xhc3M9J21hdHRlci1UYWJsZS1yb3cnPlxuICAgICAgICAgIHsgcm93Q2VsbHMgfVxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3M9J21hdHRlci1UYWJsZScgY2VsbHBhZGRpbmc9JzAnIGNlbGxzcGFjaW5nPScwJz5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHsgdGFibGVSb3dzIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxufTtcbiJdfQ==
}, {"dekujs/virtual-element":11}],
8: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

/**
 * Grid.
 */

exports['default'] = {
  render: function render(_ref) {
    var props = _ref.props;

    return (0, _dekujsVirtualElement2['default'])(
      'ul',
      { 'class': 'matter-Grid' },
      props.children
    );
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9ncmlkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29DQUFvQix3QkFBd0I7Ozs7Ozs7O3FCQU03QjtBQUNiLFFBQU0sRUFBQSxnQkFBQyxJQUFTLEVBQUU7UUFBVCxLQUFLLEdBQVAsSUFBUyxDQUFQLEtBQUs7O0FBQ1osV0FDRTs7UUFBSSxTQUFNLGFBQWE7TUFDbkIsS0FBSyxDQUFDLFFBQVE7S0FDYixDQUNMO0dBQ0g7Q0FDRiIsImZpbGUiOiJsaWIvZ3JpZC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5cbi8qKlxuICogR3JpZC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlcih7IHByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzPSdtYXR0ZXItR3JpZCc+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59O1xuIl19
}, {"dekujs/virtual-element":11}],
9: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

var _segmentioHighlight = require('segmentio/highlight');

var _segmentioHighlight2 = _interopRequireDefault(_segmentioHighlight);

/**
 * Languages.
 */

var _segmentioHighlightObjectiveC = require('segmentio/highlight-objective-c');

var _segmentioHighlightObjectiveC2 = _interopRequireDefault(_segmentioHighlightObjectiveC);

var _segmentioHighlightJavascript = require('segmentio/highlight-javascript');

var _segmentioHighlightJavascript2 = _interopRequireDefault(_segmentioHighlightJavascript);

var _segmentioHighlightCsharp = require('segmentio/highlight-csharp');

var _segmentioHighlightCsharp2 = _interopRequireDefault(_segmentioHighlightCsharp);

var _segmentioHighlightPython = require('segmentio/highlight-python');

var _segmentioHighlightPython2 = _interopRequireDefault(_segmentioHighlightPython);

var _segmentioHighlightJava = require('segmentio/highlight-java');

var _segmentioHighlightJava2 = _interopRequireDefault(_segmentioHighlightJava);

var _segmentioHighlightBash = require('segmentio/highlight-bash');

var _segmentioHighlightBash2 = _interopRequireDefault(_segmentioHighlightBash);

var _segmentioHighlightRuby = require('segmentio/highlight-ruby');

var _segmentioHighlightRuby2 = _interopRequireDefault(_segmentioHighlightRuby);

var _segmentioHighlightYaml = require('segmentio/highlight-yaml');

var _segmentioHighlightYaml2 = _interopRequireDefault(_segmentioHighlightYaml);

var _segmentioHighlightXml = require('segmentio/highlight-xml');

var _segmentioHighlightXml2 = _interopRequireDefault(_segmentioHighlightXml);

var _segmentioHighlightPhp = require('segmentio/highlight-php');

var _segmentioHighlightPhp2 = _interopRequireDefault(_segmentioHighlightPhp);

var _segmentioHighlightCss = require('segmentio/highlight-css');

var _segmentioHighlightCss2 = _interopRequireDefault(_segmentioHighlightCss);

var _segmentioHighlightGo = require('segmentio/highlight-go');

var _segmentioHighlightGo2 = _interopRequireDefault(_segmentioHighlightGo);

/**
 * Highlight.
 */

var highlight = new _segmentioHighlight2['default']().use(_segmentioHighlightPython2['default']).use(_segmentioHighlightCsharp2['default']).use(_segmentioHighlightYaml2['default']).use(_segmentioHighlightJava2['default']).use(_segmentioHighlightRuby2['default']).use(_segmentioHighlightBash2['default']).use(_segmentioHighlightObjectiveC2['default']).use(_segmentioHighlightXml2['default']).use(_segmentioHighlightCss2['default']).use(_segmentioHighlightPhp2['default']).use(_segmentioHighlightJavascript2['default']).use(_segmentioHighlightGo2['default']);

/**
 * Code.
 */

exports['default'] = {
  propTypes: {
    language: { type: 'string' }
  },

  render: function render(_ref) {
    var props = _ref.props;
    var language = props.language;
    var children = props.children;

    var unformattedCode = children[0];
    var formattedCode = highlight.string(unformattedCode, language);

    return (0, _dekujsVirtualElement2['default'])(
      'div',
      { 'class': 'matter-Code' },
      (0, _dekujsVirtualElement2['default'])('code', { 'class': 'matter-Code-code', innerHTML: formattedCode })
    );
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb2RlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29DQUFvQix3QkFBd0I7Ozs7a0NBQ3RCLHFCQUFxQjs7Ozs7Ozs7NENBTTFCLGlDQUFpQzs7Ozs0Q0FDbkMsZ0NBQWdDOzs7O3dDQUM1Qiw0QkFBNEI7Ozs7d0NBQzVCLDRCQUE0Qjs7OztzQ0FDOUIsMEJBQTBCOzs7O3NDQUMxQiwwQkFBMEI7Ozs7c0NBQzFCLDBCQUEwQjs7OztzQ0FDMUIsMEJBQTBCOzs7O3FDQUMzQix5QkFBeUI7Ozs7cUNBQ3pCLHlCQUF5Qjs7OztxQ0FDekIseUJBQXlCOzs7O29DQUMxQix3QkFBd0I7Ozs7Ozs7O0FBTXZDLElBQUksU0FBUyxHQUFHLHFDQUFlLENBQzVCLEdBQUcsdUNBQVEsQ0FDWCxHQUFHLHVDQUFRLENBQ1gsR0FBRyxxQ0FBTSxDQUNULEdBQUcscUNBQU0sQ0FDVCxHQUFHLHFDQUFNLENBQ1QsR0FBRyxxQ0FBTSxDQUNULEdBQUcsMkNBQU0sQ0FDVCxHQUFHLG9DQUFLLENBQ1IsR0FBRyxvQ0FBSyxDQUNSLEdBQUcsb0NBQUssQ0FDUixHQUFHLDJDQUFJLENBQ1AsR0FBRyxtQ0FBSSxDQUFDOzs7Ozs7cUJBTUk7QUFDYixXQUFTLEVBQUU7QUFDVCxZQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0dBQzdCOztBQUVELFFBQU0sRUFBQSxnQkFBQyxJQUFTLEVBQUU7UUFBVCxLQUFLLEdBQVAsSUFBUyxDQUFQLEtBQUs7UUFDTixRQUFRLEdBQWUsS0FBSyxDQUE1QixRQUFRO1FBQUUsUUFBUSxHQUFLLEtBQUssQ0FBbEIsUUFBUTs7QUFFeEIsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLFFBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUVoRSxXQUNFOztRQUFLLFNBQU0sYUFBYTtNQUN0QixpREFBTSxTQUFNLGtCQUFrQixFQUFDLFNBQVMsRUFBRyxhQUFhLEFBQUUsR0FDbkQ7S0FDSCxDQUNOO0dBQ0g7Q0FDRiIsImZpbGUiOiJsaWIvY29kZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQnO1xuXG4vKipcbiAqIExhbmd1YWdlcy5cbiAqL1xuXG5pbXBvcnQgb2JqYyBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LW9iamVjdGl2ZS1jJztcbmltcG9ydCBqcyBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LWphdmFzY3JpcHQnO1xuaW1wb3J0IGNzaGFycCBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LWNzaGFycCc7XG5pbXBvcnQgcHl0aG9uIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtcHl0aG9uJztcbmltcG9ydCBqYXZhIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtamF2YSc7XG5pbXBvcnQgYmFzaCBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LWJhc2gnO1xuaW1wb3J0IHJ1YnkgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1ydWJ5JztcbmltcG9ydCB5YW1sIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQteWFtbCc7XG5pbXBvcnQgeG1sIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQteG1sJztcbmltcG9ydCBwaHAgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1waHAnO1xuaW1wb3J0IGNzcyBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LWNzcyc7XG5pbXBvcnQgZ28gZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1nbyc7XG5cbi8qKlxuICogSGlnaGxpZ2h0LlxuICovXG5cbmxldCBoaWdobGlnaHQgPSBuZXcgSGlnaGxpZ2h0KClcbiAgLnVzZShweXRob24pXG4gIC51c2UoY3NoYXJwKVxuICAudXNlKHlhbWwpXG4gIC51c2UoamF2YSlcbiAgLnVzZShydWJ5KVxuICAudXNlKGJhc2gpXG4gIC51c2Uob2JqYylcbiAgLnVzZSh4bWwpXG4gIC51c2UoY3NzKVxuICAudXNlKHBocClcbiAgLnVzZShqcylcbiAgLnVzZShnbyk7XG5cbi8qKlxuICogQ29kZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BUeXBlczoge1xuICAgIGxhbmd1YWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcyB9KSB7XG4gICAgbGV0IHsgbGFuZ3VhZ2UsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgIGxldCB1bmZvcm1hdHRlZENvZGUgPSBjaGlsZHJlblswXTtcbiAgICBsZXQgZm9ybWF0dGVkQ29kZSA9IGhpZ2hsaWdodC5zdHJpbmcodW5mb3JtYXR0ZWRDb2RlLCBsYW5ndWFnZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz0nbWF0dGVyLUNvZGUnPlxuICAgICAgICA8Y29kZSBjbGFzcz0nbWF0dGVyLUNvZGUtY29kZScgaW5uZXJIVE1MPXsgZm9ybWF0dGVkQ29kZSB9PlxuICAgICAgICA8L2NvZGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuIl19
}, {"dekujs/virtual-element":11,"segmentio/highlight":12,"segmentio/highlight-objective-c":13,"segmentio/highlight-javascript":14,"segmentio/highlight-csharp":15,"segmentio/highlight-python":16,"segmentio/highlight-java":17,"segmentio/highlight-bash":18,"segmentio/highlight-ruby":19,"segmentio/highlight-yaml":20,"segmentio/highlight-xml":21,"segmentio/highlight-php":22,"segmentio/highlight-css":23,"segmentio/highlight-go":24}],
12: [function(require, module, exports) {
'use strict';

var escape = require('escape-html');

/**
 * Expose `Highlight`.
 */

module.exports = Highlight;

/**
 * Initialize a new `Highlight` instance.
 */

function Highlight() {
  if (!(this instanceof Highlight)) return new Highlight();
  this.languages = {};
  this.prefix('Highlight-');
}

/**
 * Use a `plugin` function.
 *
 * @param {Function} plugin
 * @return {Highlight}
 */

Highlight.prototype.use = function (plugin) {
  plugin(this);
  return this;
};

/**
 * Get or set the highlighted class `prefix`.
 *
 * @param {String} prefix
 * @return {Highlight or String}
 */

Highlight.prototype.prefix = function (prefix) {
  if (!arguments.length) return this._prefix;
  this._prefix = prefix;
  return this;
};

/**
 * Define a new `language` with a `grammar`.
 *
 * @param {String} language
 * @param {Object} grammar
 * @return {Highlight}
 */

Highlight.prototype.language = function (language, grammar) {
  this.languages[language] = grammar;
  return this;
};

/**
 * Highlight an HTML `string` of a given `language`.
 *
 * @param {String} string
 * @param {String} language
 * @return {String}
 */

Highlight.prototype.string = function (string, language) {
  var ast = this.parse(string, language);
  var str = this.stringify(ast);
  return str;
};

/**
 * Highlight an `el`, with optional `language`.
 *
 * @param {Element or String} el
 * @param {String} language (optional)
 */

Highlight.prototype.element = function (el, language) {
  if ('string' == typeof el) el = document.querySelector(el);
  var str = this.string(el.textContent, language || lang(el));
  el.innerHTML = str;
};

/**
 * Highlight an array of `els`, with optional `language`.
 *
 * @param {Array or String} els
 * @param {String} language (optional)
 */

Highlight.prototype.elements = function (els, language) {
  if ('string' == typeof els) els = document.querySelectorAll(els);
  for (var i = 0, el; el = els[i]; i++) this.element(el, language);
};

/**
 * Highlight all elements in the DOM with language attributes.
 */

Highlight.prototype.all = function () {
  this.elements(document.querySelectorAll('[data-language]'));
  this.elements(document.querySelectorAll('[class*="language-"]'));
  this.elements(document.querySelectorAll('[class*="lang-"]'));
};

/**
 * Parse a `string` with a given language's `grammar`, returning an AST.
 *
 * @param {String} string
 * @param {String or Object} grammar
 * @return {Array}
 */

Highlight.prototype.parse = function (string, grammar) {
  if ('string' == typeof grammar) {
    var lang = grammar;
    grammar = this.languages[lang];
    if (!grammar) throw new Error('unknown language "' + lang + '"');
  }

  if (!grammar) throw new Error('must provide a grammar');
  if (!string) return [];
  var ret = [string];

  for (var key in grammar) {
    var rule = grammar[key];
    var regexp = rule.pattern || rule;

    for (var i = 0; i < ret.length; i++) {
      var str = ret[i];
      if ('object' == typeof str) continue;
      var m = regexp.exec(str);
      if (!m) continue;

      var contents = m[0];
      var before = str.slice(0, m.index);
      var after = str.slice(m.index + contents.length);
      var args = [i, 1];
      var token = {
        type: key,
        value: rule.children ? this.parse(contents, rule.children) : contents
      };

      if (before) args.push(before);
      args.push(token);
      if (after) args.push(after);
      ret.splice.apply(ret, args);
    }
  }

  return ret;
};

/**
 * Stringify a given `ast`.
 *
 * @param {Array} ast
 * @return {String}
 */

Highlight.prototype.stringify = function (ast) {
  var prefix = this.prefix();
  var self = this;

  return ast.map(function (t) {
    if ('string' == typeof t) return escape(t);
    var type = t.type;
    var value = 'object' == typeof t.value ? self.stringify(t.value) : escape(t.value);
    return '<span class="' + prefix + type + '">' + value + '</span>';
  }).join('');
};

/**
 * Language class matcher.
 */

var matcher = /\blang(?:uage)?-(\w+)\b/i;

/**
 * Get the code language for a given `el`. First look for a `data-language`
 * attribute, then a `language-*` class, then search up the DOM tree for them.
 *
 * @param {Element} el
 * @return {String}
 */

function lang(el) {
  if (!el) return;
  var m;
  if (el.hasAttribute('data-language')) return el.getAttribute('data-language');
  if (m = matcher.exec(el.className)) return m[1];
  return language(el.parentNode);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodEAwLjAuMi9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7OztBQU1wQyxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7Ozs7O0FBTTNCLFNBQVMsU0FBUyxHQUFFO0FBQ2xCLE1BQUksRUFBRSxJQUFJLFlBQVksU0FBUyxDQUFBLEFBQUMsRUFBRSxPQUFPLElBQUksU0FBUyxFQUFFLENBQUM7QUFDekQsTUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDcEIsTUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUMzQjs7Ozs7Ozs7O0FBU0QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBUyxNQUFNLEVBQUM7QUFDeEMsUUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2IsU0FBTyxJQUFJLENBQUM7Q0FDYixDQUFDOzs7Ozs7Ozs7QUFTRixTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFTLE1BQU0sRUFBQztBQUMzQyxNQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0MsTUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdEIsU0FBTyxJQUFJLENBQUM7Q0FDYixDQUFBOzs7Ozs7Ozs7O0FBVUQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFDO0FBQ3hELE1BQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ25DLFNBQU8sSUFBSSxDQUFDO0NBQ2IsQ0FBQzs7Ozs7Ozs7OztBQVVGLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsTUFBTSxFQUFFLFFBQVEsRUFBQztBQUNyRCxN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QUFFLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLFFBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDbEIsUUFBSSxLQUFLLEdBQUcsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQ3ZCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEIsV0FBTyxlQUFlLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQztHQUNuRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ2IsQ0FBQzs7Ozs7O0FBTUYsSUFBSSxPQUFPLEdBQUcsMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7QUFVekMsU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFDO0FBQ2YsTUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPO0FBQ2hCLE1BQUksQ0FBQyxDQUFDO0FBQ04sTUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5RSxNQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxTQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7Q0FDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0QDAuMC4yL2xpYi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgZXNjYXBlID0gcmVxdWlyZSgnZXNjYXBlLWh0bWwnKTtcblxuLyoqXG4gKiBFeHBvc2UgYEhpZ2hsaWdodGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBIaWdobGlnaHQ7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgSGlnaGxpZ2h0YCBpbnN0YW5jZS5cbiAqL1xuXG5mdW5jdGlvbiBIaWdobGlnaHQoKXtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEhpZ2hsaWdodCkpIHJldHVybiBuZXcgSGlnaGxpZ2h0KCk7XG4gIHRoaXMubGFuZ3VhZ2VzID0ge307XG4gIHRoaXMucHJlZml4KCdIaWdobGlnaHQtJyk7XG59XG5cbi8qKlxuICogVXNlIGEgYHBsdWdpbmAgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luXG4gKiBAcmV0dXJuIHtIaWdobGlnaHR9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbihwbHVnaW4pe1xuICBwbHVnaW4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgb3Igc2V0IHRoZSBoaWdobGlnaHRlZCBjbGFzcyBgcHJlZml4YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJlZml4XG4gKiBAcmV0dXJuIHtIaWdobGlnaHQgb3IgU3RyaW5nfVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUucHJlZml4ID0gZnVuY3Rpb24ocHJlZml4KXtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB0aGlzLl9wcmVmaXggPSBwcmVmaXg7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIERlZmluZSBhIG5ldyBgbGFuZ3VhZ2VgIHdpdGggYSBgZ3JhbW1hcmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlXG4gKiBAcGFyYW0ge09iamVjdH0gZ3JhbW1hclxuICogQHJldHVybiB7SGlnaGxpZ2h0fVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUubGFuZ3VhZ2UgPSBmdW5jdGlvbihsYW5ndWFnZSwgZ3JhbW1hcil7XG4gIHRoaXMubGFuZ3VhZ2VzW2xhbmd1YWdlXSA9IGdyYW1tYXI7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHQgYW4gSFRNTCBgc3RyaW5nYCBvZiBhIGdpdmVuIGBsYW5ndWFnZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5zdHJpbmcgPSBmdW5jdGlvbihzdHJpbmcsIGxhbmd1YWdlKXtcbiAgdmFyIGFzdCA9IHRoaXMucGFyc2Uoc3RyaW5nLCBsYW5ndWFnZSk7XG4gIHZhciBzdHIgPSB0aGlzLnN0cmluZ2lmeShhc3QpO1xuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHQgYW4gYGVsYCwgd2l0aCBvcHRpb25hbCBgbGFuZ3VhZ2VgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudCBvciBTdHJpbmd9IGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2UgKG9wdGlvbmFsKVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUuZWxlbWVudCA9IGZ1bmN0aW9uKGVsLCBsYW5ndWFnZSl7XG4gIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZWwpIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gIHZhciBzdHIgPSB0aGlzLnN0cmluZyhlbC50ZXh0Q29udGVudCwgbGFuZ3VhZ2UgfHwgbGFuZyhlbCkpO1xuICBlbC5pbm5lckhUTUwgPSBzdHI7XG59O1xuXG4vKipcbiAqIEhpZ2hsaWdodCBhbiBhcnJheSBvZiBgZWxzYCwgd2l0aCBvcHRpb25hbCBgbGFuZ3VhZ2VgLlxuICpcbiAqIEBwYXJhbSB7QXJyYXkgb3IgU3RyaW5nfSBlbHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZSAob3B0aW9uYWwpXG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5lbGVtZW50cyA9IGZ1bmN0aW9uKGVscywgbGFuZ3VhZ2Upe1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGVscykgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbHMpO1xuICBmb3IgKHZhciBpID0gMCwgZWw7IGVsID0gZWxzW2ldOyBpKyspIHRoaXMuZWxlbWVudChlbCwgbGFuZ3VhZ2UpO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHQgYWxsIGVsZW1lbnRzIGluIHRoZSBET00gd2l0aCBsYW5ndWFnZSBhdHRyaWJ1dGVzLlxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5lbGVtZW50cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sYW5ndWFnZV0nKSk7XG4gIHRoaXMuZWxlbWVudHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImxhbmd1YWdlLVwiXScpKTtcbiAgdGhpcy5lbGVtZW50cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwibGFuZy1cIl0nKSk7XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgYHN0cmluZ2Agd2l0aCBhIGdpdmVuIGxhbmd1YWdlJ3MgYGdyYW1tYXJgLCByZXR1cm5pbmcgYW4gQVNULlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nIG9yIE9iamVjdH0gZ3JhbW1hclxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHN0cmluZywgZ3JhbW1hcil7XG4gIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZ3JhbW1hcikge1xuICAgIHZhciBsYW5nID0gZ3JhbW1hcjtcbiAgICBncmFtbWFyID0gdGhpcy5sYW5ndWFnZXNbbGFuZ107XG4gICAgaWYgKCFncmFtbWFyKSB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gbGFuZ3VhZ2UgXCInICsgbGFuZyArICdcIicpO1xuICB9XG5cbiAgaWYgKCFncmFtbWFyKSB0aHJvdyBuZXcgRXJyb3IoJ211c3QgcHJvdmlkZSBhIGdyYW1tYXInKTtcbiAgaWYgKCFzdHJpbmcpIHJldHVybiBbXTtcbiAgdmFyIHJldCA9IFtzdHJpbmddO1xuXG4gIGZvciAodmFyIGtleSBpbiBncmFtbWFyKSB7XG4gICAgdmFyIHJ1bGUgPSBncmFtbWFyW2tleV07XG4gICAgdmFyIHJlZ2V4cCA9IHJ1bGUucGF0dGVybiB8fCBydWxlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzdHIgPSByZXRbaV07XG4gICAgICBpZiAoJ29iamVjdCcgPT0gdHlwZW9mIHN0cikgY29udGludWU7XG4gICAgICB2YXIgbSA9IHJlZ2V4cC5leGVjKHN0cik7XG4gICAgICBpZiAoIW0pIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgY29udGVudHMgPSBtWzBdO1xuICAgICAgdmFyIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBtLmluZGV4KTtcbiAgICAgIHZhciBhZnRlciA9IHN0ci5zbGljZShtLmluZGV4ICsgY29udGVudHMubGVuZ3RoKTtcbiAgICAgIHZhciBhcmdzID0gW2ksIDFdO1xuICAgICAgdmFyIHRva2VuID0ge1xuICAgICAgICB0eXBlOiBrZXksXG4gICAgICAgIHZhbHVlOiBydWxlLmNoaWxkcmVuID8gdGhpcy5wYXJzZShjb250ZW50cywgcnVsZS5jaGlsZHJlbikgOiBjb250ZW50c1xuICAgICAgfTtcblxuICAgICAgaWYgKGJlZm9yZSkgYXJncy5wdXNoKGJlZm9yZSk7XG4gICAgICBhcmdzLnB1c2godG9rZW4pO1xuICAgICAgaWYgKGFmdGVyKSBhcmdzLnB1c2goYWZ0ZXIpO1xuICAgICAgcmV0LnNwbGljZS5hcHBseShyZXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogU3RyaW5naWZ5IGEgZ2l2ZW4gYGFzdGAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbihhc3Qpe1xuICB2YXIgcHJlZml4ID0gdGhpcy5wcmVmaXgoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHJldHVybiBhc3QubWFwKGZ1bmN0aW9uKHQpe1xuICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgdCkgcmV0dXJuIGVzY2FwZSh0KTtcbiAgICB2YXIgdHlwZSA9IHQudHlwZTtcbiAgICB2YXIgdmFsdWUgPSAnb2JqZWN0JyA9PSB0eXBlb2YgdC52YWx1ZVxuICAgICAgPyBzZWxmLnN0cmluZ2lmeSh0LnZhbHVlKVxuICAgICAgOiBlc2NhcGUodC52YWx1ZSk7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcmVmaXggKyB0eXBlICsgJ1wiPicgKyB2YWx1ZSArICc8L3NwYW4+JztcbiAgfSkuam9pbignJyk7XG59O1xuXG4vKipcbiAqIExhbmd1YWdlIGNsYXNzIG1hdGNoZXIuXG4gKi9cblxudmFyIG1hdGNoZXIgPSAvXFxibGFuZyg/OnVhZ2UpPy0oXFx3KylcXGIvaTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvZGUgbGFuZ3VhZ2UgZm9yIGEgZ2l2ZW4gYGVsYC4gRmlyc3QgbG9vayBmb3IgYSBgZGF0YS1sYW5ndWFnZWBcbiAqIGF0dHJpYnV0ZSwgdGhlbiBhIGBsYW5ndWFnZS0qYCBjbGFzcywgdGhlbiBzZWFyY2ggdXAgdGhlIERPTSB0cmVlIGZvciB0aGVtLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBsYW5nKGVsKXtcbiAgaWYgKCFlbCkgcmV0dXJuO1xuICB2YXIgbTtcbiAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1sYW5ndWFnZScpKSByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmd1YWdlJyk7XG4gIGlmIChtID0gbWF0Y2hlci5leGVjKGVsLmNsYXNzTmFtZSkpIHJldHVybiBtWzFdO1xuICByZXR1cm4gbGFuZ3VhZ2UoZWwucGFyZW50Tm9kZSk7XG59Il19
}, {"escape-html":25}],
25: [function(require, module, exports) {
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

'use strict';

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} str The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(html) {
  return String(html).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tcG9uZW50LWVzY2FwZS1odG1sQHYxLjAuMi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7Ozs7Ozs7Ozs7QUFVNUIsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ3hCLFNBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUNoQixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUN2QixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQzFCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tcG9uZW50LWVzY2FwZS1odG1sQHYxLjAuMi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBlc2NhcGUtaHRtbFxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZUh0bWw7XG5cbi8qKlxuICogRXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyBpbiB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGh0bWwuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlc2NhcGUgZm9yIGluc2VydGluZyBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWwpIHtcbiAgcmV0dXJuIFN0cmluZyhodG1sKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG4iXX0=
}, {}],
13: [function(require, module, exports) {

/**
 * Expose `objectiveC`
 */

'use strict';

module.exports = objectiveC;

/**
 * Add `Objective-C` as a plugin.
 *
 * @param {Highlight} highlight
 * @api public
 */

function objectiveC(highlight) {
  highlight.language('objective-c', objectiveC).language('objc', objectiveC);
}

/**
 * Methods
 */

objectiveC.method = /\[\w+ (\w+)\]/;

/**
 * Booleans
 */

objectiveC.boolean = /\b(yes|no|true|false)\b/i;

/**
 * Comments
 */

objectiveC.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Classes
 */

objectiveC['class'] = /@(implementation|interface|class) +(\w+)/;
objectiveC['class'].children = { keyword: /@(implementation|interface|class)/ };

/**
 * Keywords
 */

objectiveC.keyword = /\b(void|char|short|int|long|float|double|signed|unsigned|id|const|volatile|in|out|inout|bycopy|byref|oneway|self|super)\b/;

/**
 * Numbers
 */

objectiveC.number = /\b@?[-+]?(0x[A-Fa-f0-9]+|\d+)\b/;

/**
 * Strings
 */

objectiveC.string = /(@?"(\\?.)*?")/;

/**
 * Operator
 */

objectiveC.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation
 */

objectiveC.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1vYmplY3RpdmUtY0BtYXN0ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDOzs7Ozs7Ozs7QUFTNUIsU0FBUyxVQUFVLENBQUMsU0FBUyxFQUFDO0FBQzVCLFdBQVMsQ0FDTixRQUFRLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUNuQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0NBQ2pDOzs7Ozs7QUFNRCxVQUFVLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQzs7Ozs7O0FBTXBDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsMEJBQTBCLENBQUM7Ozs7OztBQU1oRCxVQUFVLENBQUMsT0FBTyxHQUFHLHVDQUF1QyxDQUFDOzs7Ozs7QUFNN0QsVUFBVSxTQUFNLEdBQUcsMENBQTBDLENBQUM7QUFDOUQsVUFBVSxTQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLENBQUM7Ozs7OztBQU03RSxVQUFVLENBQUMsT0FBTyxHQUFHLDJIQUEySCxDQUFDOzs7Ozs7QUFNakosVUFBVSxDQUFDLE1BQU0sR0FBRyxpQ0FBaUMsQ0FBQzs7Ozs7O0FBTXRELFVBQVUsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7Ozs7OztBQU1yQyxVQUFVLENBQUMsUUFBUSxHQUFHLHlGQUF5RixDQUFDOzs7Ozs7QUFNaEgsVUFBVSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LW9iamVjdGl2ZS1jQG1hc3Rlci9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgb2JqZWN0aXZlQ2BcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdGl2ZUM7XG5cbi8qKlxuICogQWRkIGBPYmplY3RpdmUtQ2AgYXMgYSBwbHVnaW4uXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBvYmplY3RpdmVDKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodFxuICAgIC5sYW5ndWFnZSgnb2JqZWN0aXZlLWMnLCBvYmplY3RpdmVDKVxuICAgIC5sYW5ndWFnZSgnb2JqYycsIG9iamVjdGl2ZUMpO1xufVxuXG4vKipcbiAqIE1ldGhvZHNcbiAqL1xuXG5vYmplY3RpdmVDLm1ldGhvZCA9IC9cXFtcXHcrIChcXHcrKVxcXS87XG5cbi8qKlxuICogQm9vbGVhbnNcbiAqL1xuXG5vYmplY3RpdmVDLmJvb2xlYW4gPSAvXFxiKHllc3xub3x0cnVlfGZhbHNlKVxcYi9pO1xuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxub2JqZWN0aXZlQy5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JCkvbTtcblxuLyoqXG4gKiBDbGFzc2VzXG4gKi9cblxub2JqZWN0aXZlQy5jbGFzcyA9IC9AKGltcGxlbWVudGF0aW9ufGludGVyZmFjZXxjbGFzcykgKyhcXHcrKS87XG5vYmplY3RpdmVDLmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvQChpbXBsZW1lbnRhdGlvbnxpbnRlcmZhY2V8Y2xhc3MpLyB9O1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxub2JqZWN0aXZlQy5rZXl3b3JkID0gL1xcYih2b2lkfGNoYXJ8c2hvcnR8aW50fGxvbmd8ZmxvYXR8ZG91YmxlfHNpZ25lZHx1bnNpZ25lZHxpZHxjb25zdHx2b2xhdGlsZXxpbnxvdXR8aW5vdXR8Ynljb3B5fGJ5cmVmfG9uZXdheXxzZWxmfHN1cGVyKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbm9iamVjdGl2ZUMubnVtYmVyID0gL1xcYkA/Wy0rXT8oMHhbQS1GYS1mMC05XSt8XFxkKylcXGIvO1xuXG4vKipcbiAqIFN0cmluZ3NcbiAqL1xuXG5vYmplY3RpdmVDLnN0cmluZyA9IC8oQD9cIihcXFxcPy4pKj9cIikvO1xuXG4vKipcbiAqIE9wZXJhdG9yXG4gKi9cblxub2JqZWN0aXZlQy5vcGVyYXRvciA9IC8oWy0rXXsxLDJ9fCF8Jmx0Oz0/fD49P3w9ezEsM318Jmx0O3sxLDJ9fD57MSwyfXwoJmFtcDspezEsMn18XFx8ezEsMn18XFw/fFxcKnxcXC98XFx+fFxcXnxcXCUpLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvblxuICovXG5cbm9iamVjdGl2ZUMucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuOl0vOyJdfQ==
}, {}],
14: [function(require, module, exports) {

/**
 * Expose `plugin`.
 */

'use strict';

module.exports = plugin;

/**
 * Plugin to highlight Javascript code.
 *
 * @param {Highlight} highlight
 */

function plugin(highlight) {
  highlight.language('javascript', grammar).language('js', grammar);
}

/**
 * Grammar.
 */

var grammar = {};

/**
 * Comments.
 */

grammar.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Booleans.
 */

grammar.boolean = /\b(true|false)\b/;

/**
 * Strings.
 */

grammar.string = /(("|')(\\?.)*?\2)/;

/**
 * Keywords.
 */

grammar.keyword = /\b(break|catch|continue|delete|do|else|finally|for|function|if|in|instanceof|let|new|null|return|this|self|throw|try|typeof|var|while|with|yield)\b/;

/**
 * Constants.
 */

grammar.constant = /\b(document|window|global)\b/;

/**
 * Functions.
 *
 * Children are set separately to maintain ordering.
 */

grammar['function'] = {
  pattern: /(\w+)\(/,
  children: {}
};

grammar['function'].children['class'] = /\b([A-Z]\w*)\b/;
grammar['function'].children['function'] = /(\w+)/;
grammar['function'].children.punctuation = /\(/;

/**
 * Numbers.
 */

grammar.number = /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/;

/**
 * Operators.
 */

grammar.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation.
 */

grammar.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1qYXZhc2NyaXB0QDAuMC4zL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7O0FBUXhCLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBQztBQUN4QixXQUFTLENBQ04sUUFBUSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FDL0IsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztDQUM1Qjs7Ozs7O0FBTUQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFNakIsT0FBTyxDQUFDLE9BQU8sR0FBRyx1Q0FBdUMsQ0FBQzs7Ozs7O0FBTTFELE9BQU8sQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1yQyxPQUFPLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNckMsT0FBTyxDQUFDLE9BQU8sR0FBRyxxSkFBcUosQ0FBQzs7Ozs7O0FBTXhLLE9BQU8sQ0FBQyxRQUFRLEdBQUcsOEJBQThCLENBQUM7Ozs7Ozs7O0FBUWxELE9BQU8sWUFBUyxHQUFHO0FBQ2pCLFNBQU8sRUFBRSxTQUFTO0FBQ2xCLFVBQVEsRUFBRSxFQUFFO0NBQ2IsQ0FBQzs7QUFFRixPQUFPLFlBQVMsQ0FBQyxRQUFRLFNBQU0sR0FBRyxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLFlBQVMsQ0FBQyxRQUFRLFlBQVMsR0FBRyxPQUFPLENBQUM7QUFDN0MsT0FBTyxZQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Ozs7OztBQU03QyxPQUFPLENBQUMsTUFBTSxHQUFHLDREQUE0RCxDQUFDOzs7Ozs7QUFNOUUsT0FBTyxDQUFDLFFBQVEsR0FBRyx5RkFBeUYsQ0FBQzs7Ozs7O0FBTTdHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1qYXZhc2NyaXB0QDAuMC4zL2xpYi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgcGx1Z2luYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpbjtcblxuLyoqXG4gKiBQbHVnaW4gdG8gaGlnaGxpZ2h0IEphdmFzY3JpcHQgY29kZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKi9cblxuZnVuY3Rpb24gcGx1Z2luKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodFxuICAgIC5sYW5ndWFnZSgnamF2YXNjcmlwdCcsIGdyYW1tYXIpXG4gICAgLmxhbmd1YWdlKCdqcycsIGdyYW1tYXIpO1xufVxuXG4vKipcbiAqIEdyYW1tYXIuXG4gKi9cblxudmFyIGdyYW1tYXIgPSB7fTtcblxuLyoqXG4gKiBDb21tZW50cy5cbiAqL1xuXG5ncmFtbWFyLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoXFwvXFwqW1xcd1xcV10qP1xcKlxcL3xcXC9cXC8uKj8kKS9tO1xuXG4vKipcbiAqIEJvb2xlYW5zLlxuICovXG5cbmdyYW1tYXIuYm9vbGVhbiA9IC9cXGIodHJ1ZXxmYWxzZSlcXGIvO1xuXG4vKipcbiAqIFN0cmluZ3MuXG4gKi9cblxuZ3JhbW1hci5zdHJpbmcgPSAvKChcInwnKShcXFxcPy4pKj9cXDIpLztcblxuLyoqXG4gKiBLZXl3b3Jkcy5cbiAqL1xuXG5ncmFtbWFyLmtleXdvcmQgPSAvXFxiKGJyZWFrfGNhdGNofGNvbnRpbnVlfGRlbGV0ZXxkb3xlbHNlfGZpbmFsbHl8Zm9yfGZ1bmN0aW9ufGlmfGlufGluc3RhbmNlb2Z8bGV0fG5ld3xudWxsfHJldHVybnx0aGlzfHNlbGZ8dGhyb3d8dHJ5fHR5cGVvZnx2YXJ8d2hpbGV8d2l0aHx5aWVsZClcXGIvO1xuXG4vKipcbiAqIENvbnN0YW50cy5cbiAqL1xuXG5ncmFtbWFyLmNvbnN0YW50ID0gL1xcYihkb2N1bWVudHx3aW5kb3d8Z2xvYmFsKVxcYi87XG5cbi8qKlxuICogRnVuY3Rpb25zLlxuICpcbiAqIENoaWxkcmVuIGFyZSBzZXQgc2VwYXJhdGVseSB0byBtYWludGFpbiBvcmRlcmluZy5cbiAqL1xuXG5ncmFtbWFyLmZ1bmN0aW9uID0ge1xuICBwYXR0ZXJuOiAvKFxcdyspXFwoLyxcbiAgY2hpbGRyZW46IHt9XG59O1xuXG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLmNsYXNzID0gL1xcYihbQS1aXVxcdyopXFxiLztcbmdyYW1tYXIuZnVuY3Rpb24uY2hpbGRyZW4uZnVuY3Rpb24gPSAvKFxcdyspLztcbmdyYW1tYXIuZnVuY3Rpb24uY2hpbGRyZW4ucHVuY3R1YXRpb24gPSAvXFwoLztcblxuLyoqXG4gKiBOdW1iZXJzLlxuICovXG5cbmdyYW1tYXIubnVtYmVyID0gL1xcYi0/KDB4W1xcZEEtRmEtZl0rfFxcZCpcXC4/XFxkKyhbRWVdLT9cXGQrKT98TmFOfC0/SW5maW5pdHkpXFxiLztcblxuLyoqXG4gKiBPcGVyYXRvcnMuXG4gKi9cblxuZ3JhbW1hci5vcGVyYXRvciA9IC8oWy0rXXsxLDJ9fCF8Jmx0Oz0/fD49P3w9ezEsM318Jmx0O3sxLDJ9fD57MSwyfXwoJmFtcDspezEsMn18XFx8ezEsMn18XFw/fFxcKnxcXC98XFx+fFxcXnxcXCUpLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvbi5cbiAqL1xuXG5ncmFtbWFyLnB1bmN0dWF0aW9uID0gL1t7fVtcXF07KCksLjpdLzsiXX0=
}, {}],
15: [function(require, module, exports) {

/**
 * Expose `csharp`
 */

'use strict';

module.exports = csharp;

/**
 * Add `csharp` as a plugin.
 *
 * @param {Highlight} highlight
 * @api public
 */

function csharp(highlight) {
  highlight.language('csharp', csharp);
  highlight.language('c-sharp', csharp);
  highlight.language('c#', csharp);
}

/**
 * Booleans
 */

csharp.boolean = /\b(true|false)\b/;

/**
 * Comments
 */

csharp.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Classes
 */

csharp['class'] = /class +(\w+)/;
csharp['class'].children = { keyword: /class/ };

/**
 * Strings
 */

csharp.string = /("(\\?.)*?")/;

/**
 * Keywords
 */

csharp.keyword = /\b(abstract|base|bool|break|byte|case|catch|char|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|lock|long|namespace|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|stackalloc|static|string|struct|switch|this|throw|try|uint|ulong|unsafe|ushort|using|virtual|void|volatile|while)\b/;

/**
 * Numbers
 */

csharp.number = /\b[-+]?(0x[\da-f]+|\d*\.?\d+(e-?\d+)?)\b/;

/**
 * Method
 */

csharp.method = /(\w+) *\(/;
csharp.method.children = { punctuation: /\(/ };

/**
 * Operators
 */

csharp.operator = /(await|as|is|new|typeof|checked|unchecked|default|delegate|sizeof|->|[-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation
 */

csharp.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1jc2hhcnBAbWFzdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7O0FBU3hCLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBQztBQUN4QixXQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyQyxXQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QyxXQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztDQUNsQzs7Ozs7O0FBTUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Ozs7O0FBTXBDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsdUNBQXVDLENBQUM7Ozs7OztBQU16RCxNQUFNLFNBQU0sR0FBRyxjQUFjLENBQUM7QUFDOUIsTUFBTSxTQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7Ozs7QUFNN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUE7Ozs7OztBQU05QixNQUFNLENBQUMsT0FBTyxHQUFHLHNjQUFzYyxDQUFDOzs7Ozs7QUFNeGQsTUFBTSxDQUFDLE1BQU0sR0FBRywwQ0FBMEMsQ0FBQzs7Ozs7O0FBTTNELE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDOzs7Ozs7QUFNL0MsTUFBTSxDQUFDLFFBQVEsR0FBRyw2SkFBNkosQ0FBQzs7Ozs7O0FBTWhMLE1BQU0sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1jc2hhcnBAbWFzdGVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRXhwb3NlIGBjc2hhcnBgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjc2hhcnA7XG5cbi8qKlxuICogQWRkIGBjc2hhcnBgIGFzIGEgcGx1Z2luLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3NoYXJwKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnY3NoYXJwJywgY3NoYXJwKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdjLXNoYXJwJywgY3NoYXJwKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdjIycsIGNzaGFycCk7XG59XG5cbi8qKlxuICogQm9vbGVhbnNcbiAqL1xuXG5jc2hhcnAuYm9vbGVhbiA9IC9cXGIodHJ1ZXxmYWxzZSlcXGIvO1xuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxuY3NoYXJwLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoXFwvXFwqW1xcd1xcV10qP1xcKlxcL3xcXC9cXC8uKj8kKS9tO1xuXG4vKipcbiAqIENsYXNzZXNcbiAqL1xuXG5jc2hhcnAuY2xhc3MgPSAvY2xhc3MgKyhcXHcrKS87XG5jc2hhcnAuY2xhc3MuY2hpbGRyZW4gPSB7IGtleXdvcmQ6IC9jbGFzcy8gfTtcblxuLyoqXG4gKiBTdHJpbmdzXG4gKi9cblxuY3NoYXJwLnN0cmluZyA9IC8oXCIoXFxcXD8uKSo/XCIpL1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxuY3NoYXJwLmtleXdvcmQgPSAvXFxiKGFic3RyYWN0fGJhc2V8Ym9vbHxicmVha3xieXRlfGNhc2V8Y2F0Y2h8Y2hhcnxjbGFzc3xjb25zdHxjb250aW51ZXxkZWNpbWFsfGRlZmF1bHR8ZGVsZWdhdGV8ZG98ZG91YmxlfGVsc2V8ZW51bXxldmVudHxleHBsaWNpdHxleHRlcm58ZmluYWxseXxmaXhlZHxmbG9hdHxmb3J8Zm9yZWFjaHxnb3RvfGlmfGltcGxpY2l0fGlufGludHxpbnRlcmZhY2V8aW50ZXJuYWx8bG9ja3xsb25nfG5hbWVzcGFjZXxudWxsfG9iamVjdHxvcGVyYXRvcnxvdXR8b3ZlcnJpZGV8cGFyYW1zfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWFkb25seXxyZWZ8cmV0dXJufHNieXRlfHNlYWxlZHxzaG9ydHxzdGFja2FsbG9jfHN0YXRpY3xzdHJpbmd8c3RydWN0fHN3aXRjaHx0aGlzfHRocm93fHRyeXx1aW50fHVsb25nfHVuc2FmZXx1c2hvcnR8dXNpbmd8dmlydHVhbHx2b2lkfHZvbGF0aWxlfHdoaWxlKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbmNzaGFycC5udW1iZXIgPSAvXFxiWy0rXT8oMHhbXFxkYS1mXSt8XFxkKlxcLj9cXGQrKGUtP1xcZCspPylcXGIvO1xuXG4vKipcbiAqIE1ldGhvZFxuICovXG5cbmNzaGFycC5tZXRob2QgPSAvKFxcdyspICpcXCgvO1xuY3NoYXJwLm1ldGhvZC5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG5cbi8qKlxuICogT3BlcmF0b3JzXG4gKi9cblxuY3NoYXJwLm9wZXJhdG9yID0gLyhhd2FpdHxhc3xpc3xuZXd8dHlwZW9mfGNoZWNrZWR8dW5jaGVja2VkfGRlZmF1bHR8ZGVsZWdhdGV8c2l6ZW9mfC0+fFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb25cbiAqL1xuXG5jc2hhcnAucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuOl0vOyJdfQ==
}, {}],
16: [function(require, module, exports) {

/**
 * Expose `python`
 */

'use strict';

module.exports = python;

/**
 * Add `python` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function python(highlight) {
  highlight.language('python', python);
}

/**
 * Comments
 */

python.comment = /(?!\\{2})(#.*?$)/m;

/**
 * Strings
 */

python.string = /(("""|"|')(\\?.)*?\2)/;

/**
 * Booleans
 */

python.boolean = /\b(True|False)\b/;

/**
 * Keywords
 */

python.keyword = /\b(and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield)\b/;

/**
 * Classes
 */

python['class'] = /class +(\w+)/;
python['class'].children = { keyword: /class/ };

/**
 * Functions
 */

python['function'] = /(\w+) *\(/;
python['function'].children = { punctuation: /\(/ };
/**
 * Numbers
 */

python.number = /\b[-+]?(0x[a-fA-F0-9]+|0b[0-1]+|0[0-7]+|[1-9][0-9]*)\b/;

/**
 * Operators
 */

python.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%|\*\*?=)/;

/**
 * Punctuation
 */

python.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1weXRob25AMC4wLjMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7QUFTeEIsU0FBUyxNQUFNLENBQUMsU0FBUyxFQUFDO0FBQ3hCLFdBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3RDOzs7Ozs7QUFNRCxNQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNckMsTUFBTSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQzs7Ozs7O0FBTXhDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1wQyxNQUFNLENBQUMsT0FBTyxHQUFHLDJLQUEySyxDQUFDOzs7Ozs7QUFPN0wsTUFBTSxTQUFNLEdBQUcsY0FBYyxDQUFDO0FBQzlCLE1BQU0sU0FBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Ozs7O0FBTTdDLE1BQU0sWUFBUyxHQUFHLFdBQVcsQ0FBQztBQUM5QixNQUFNLFlBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7Ozs7O0FBS2pELE1BQU0sQ0FBQyxNQUFNLEdBQUcsd0RBQXdELENBQUM7Ozs7OztBQU16RSxNQUFNLENBQUMsUUFBUSxHQUFHLGdHQUFnRyxDQUFDOzs7Ozs7QUFNbkgsTUFBTSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LXB5dGhvbkAwLjAuMy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgcHl0aG9uYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcHl0aG9uO1xuXG4vKipcbiAqIEFkZCBgcHl0aG9uYCBhcyBhIGxhbmd1YWdlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcHl0aG9uKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgncHl0aG9uJywgcHl0aG9uKTtcbn1cblxuLyoqXG4gKiBDb21tZW50c1xuICovXG5cbnB5dGhvbi5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKCMuKj8kKS9tO1xuXG4vKipcbiAqIFN0cmluZ3NcbiAqL1xuXG5weXRob24uc3RyaW5nID0gLygoXCJcIlwifFwifCcpKFxcXFw/LikqP1xcMikvO1xuXG4vKipcbiAqIEJvb2xlYW5zXG4gKi9cblxucHl0aG9uLmJvb2xlYW4gPSAvXFxiKFRydWV8RmFsc2UpXFxiLztcblxuLyoqXG4gKiBLZXl3b3Jkc1xuICovXG5cbnB5dGhvbi5rZXl3b3JkID0gL1xcYihhbmR8YXN8YXNzZXJ0fGJyZWFrfGNsYXNzfGNvbnRpbnVlfGRlZnxkZWx8ZWxpZnxlbHNlfGV4Y2VwdHxleGVjfGZpbmFsbHl8Zm9yfGZyb218Z2xvYmFsfGlmfGltcG9ydHxpbnxpc3xsYW1iZGF8bm90fG9yfHBhc3N8cHJpbnR8cmFpc2V8cmV0dXJufHRyeXx3aGlsZXx3aXRofHlpZWxkKVxcYi87XG5cblxuLyoqXG4gKiBDbGFzc2VzXG4gKi9cblxucHl0aG9uLmNsYXNzID0gL2NsYXNzICsoXFx3KykvO1xucHl0aG9uLmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvY2xhc3MvIH07XG5cbi8qKlxuICogRnVuY3Rpb25zXG4gKi9cblxucHl0aG9uLmZ1bmN0aW9uID0gLyhcXHcrKSAqXFwoLztcbnB5dGhvbi5mdW5jdGlvbi5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG4vKipcbiAqIE51bWJlcnNcbiAqL1xuXG5weXRob24ubnVtYmVyID0gL1xcYlstK10/KDB4W2EtZkEtRjAtOV0rfDBiWzAtMV0rfDBbMC03XSt8WzEtOV1bMC05XSopXFxiLztcblxuLyoqXG4gKiBPcGVyYXRvcnNcbiAqL1xuXG5weXRob24ub3BlcmF0b3IgPSAvKFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlfFxcKlxcKj89KS87XG5cbi8qKlxuICogUHVuY3R1YXRpb25cbiAqL1xuXG5weXRob24ucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuOl0vOyJdfQ==
}, {}],
17: [function(require, module, exports) {

/**
 * Expose `java`
 */

'use strict';

module.exports = java;

/**
 * Add `java` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function java(highlight) {
  highlight.language('java', java);
}

/**
 * Boolean
 */

java.boolean = /\b(true|false)\b/;

/**
 * Comment
 */

java.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Class
 */

java['class'] = /class +(\w+)/;
java['class'].children = { keyword: /class/ };

/**
 * Keywords
 */

java.keyword = /\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|protected|public|return|static|staticfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/;

/**
 * Number
 */

java.number = /\b[-+]?(0[bx][\da-f]+|\d*\.?\d+(e-?\d+)?)\b/;

/**
 * String
 */

java.string = /("(\\?.)*?")/;

/**
 * Method
 */

java.method = /(\w+) *\(/;
java.method.children = { punctuation: /\(/ };

/**
 * Operator
 */

java.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation
 */

java.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1qYXZhQG1hc3Rlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVN0QixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDbEM7Ozs7OztBQU1ELElBQUksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1sQyxJQUFJLENBQUMsT0FBTyxHQUFHLHVDQUF1QyxDQUFDOzs7Ozs7QUFNdkQsSUFBSSxTQUFNLEdBQUcsY0FBYyxDQUFDO0FBQzVCLElBQUksU0FBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Ozs7O0FBTTNDLElBQUksQ0FBQyxPQUFPLEdBQUcsNFVBQTRVLENBQUM7Ozs7OztBQU01VixJQUFJLENBQUMsTUFBTSxHQUFHLDZDQUE2QyxDQUFDOzs7Ozs7QUFNNUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7Ozs7OztBQU03QixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztBQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Ozs7O0FBTTdDLElBQUksQ0FBQyxRQUFRLEdBQUcseUZBQXlGLENBQUM7Ozs7OztBQU0xRyxJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtamF2YUBtYXN0ZXIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBFeHBvc2UgYGphdmFgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBqYXZhO1xuXG4vKipcbiAqIEFkZCBgamF2YWAgYXMgYSBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGphdmEoaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdqYXZhJywgamF2YSk7XG59XG5cbi8qKlxuICogQm9vbGVhblxuICovXG5cbmphdmEuYm9vbGVhbiA9IC9cXGIodHJ1ZXxmYWxzZSlcXGIvO1xuXG4vKipcbiAqIENvbW1lbnRcbiAqL1xuXG5qYXZhLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoXFwvXFwqW1xcd1xcV10qP1xcKlxcL3xcXC9cXC8uKj8kKS9tO1xuXG4vKipcbiAqIENsYXNzXG4gKi9cblxuamF2YS5jbGFzcyA9IC9jbGFzcyArKFxcdyspLztcbmphdmEuY2xhc3MuY2hpbGRyZW4gPSB7IGtleXdvcmQ6IC9jbGFzcy8gfTtcblxuLyoqXG4gKiBLZXl3b3Jkc1xuICovXG5cbmphdmEua2V5d29yZCA9IC9cXGIoYWJzdHJhY3R8YXNzZXJ0fGJvb2xlYW58YnJlYWt8Ynl0ZXxjYXNlfGNhdGNofGNoYXJ8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVuZHN8ZmluYWx8ZmluYWxseXxmbG9hdHxmb3J8Z290b3xpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnN0YW5jZW9mfGludHxpbnRlcmZhY2V8bG9uZ3xuYXRpdmV8bmV3fHBhY2thZ2V8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c3RhdGljfHN0YXRpY2ZwfHN1cGVyfHN3aXRjaHxzeW5jaHJvbml6ZWR8dGhpc3x0aHJvd3x0aHJvd3N8dHJhbnNpZW50fHRyeXx2b2lkfHZvbGF0aWxlfHdoaWxlKVxcYi87XG5cbi8qKlxuICogTnVtYmVyXG4gKi9cblxuamF2YS5udW1iZXIgPSAvXFxiWy0rXT8oMFtieF1bXFxkYS1mXSt8XFxkKlxcLj9cXGQrKGUtP1xcZCspPylcXGIvO1xuXG4vKipcbiAqIFN0cmluZ1xuICovXG5cbmphdmEuc3RyaW5nID0gLyhcIihcXFxcPy4pKj9cIikvO1xuXG4vKipcbiAqIE1ldGhvZFxuICovXG5cbmphdmEubWV0aG9kID0gLyhcXHcrKSAqXFwoLztcbmphdmEubWV0aG9kLmNoaWxkcmVuID0geyBwdW5jdHVhdGlvbjogL1xcKC8gfTtcblxuLyoqXG4gKiBPcGVyYXRvclxuICovXG5cbmphdmEub3BlcmF0b3IgPSAvKFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb25cbiAqL1xuXG5qYXZhLnB1bmN0dWF0aW9uID0gL1t7fVtcXF07KCksLjpdLzsiXX0=
}, {}],
18: [function(require, module, exports) {

/**
 * Expose `bash`
 */

'use strict';

module.exports = bash;

/**
 * Add `bash` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function bash(highlight) {
  highlight.language('sh', bash);
  highlight.language('bash', bash);
  highlight.language('shellscript', bash);
}

/**
 * Comments
 */

bash.comment = /(#.*?$)/m;

/**
 * Strings
 */

bash.string = /(("|')(\\?.)*?\2)/;

/**
 * Keywords
 */

bash.keyword = /\b(if|then|else|elif|fi|for|in|do|done|select|case|continue|esac|while|until|return|export|declare|typeset|local|readonly)\b/;

/**
 * Operators
 */

bash.operator = /(;|&&?|\|\||=[=~]?|!=?|&lt;|&gt;|\|)/;

/**
 * Builtins
 */

bash.builtin = /\b(alias|bg|bind|break|builtin|caller|cd|command|compgen|complete|dirs|disown|echo|enable|eval|exec|exit|false|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|read|readonly|set|shift|shopt|source|suspend|test|times|trap|true|type|ulimit|umask|unalias|unset|wait)\b/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1iYXNoQG1hc3Rlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVN0QixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0IsV0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsV0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDekM7Ozs7OztBQU1ELElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFBOzs7Ozs7QUFNekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQzs7Ozs7O0FBTWxDLElBQUksQ0FBQyxPQUFPLEdBQUcsOEhBQThILENBQUM7Ozs7OztBQU05SSxJQUFJLENBQUMsUUFBUSxHQUFHLHNDQUFzQyxDQUFDOzs7Ozs7QUFNdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxxU0FBcVMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtYmFzaEBtYXN0ZXIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBFeHBvc2UgYGJhc2hgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNoO1xuXG4vKipcbiAqIEFkZCBgYmFzaGAgYXMgYSBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGJhc2goaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdzaCcsIGJhc2gpO1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ2Jhc2gnLCBiYXNoKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdzaGVsbHNjcmlwdCcsIGJhc2gpO1xufVxuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxuYmFzaC5jb21tZW50ID0gLygjLio/JCkvbVxuXG4vKipcbiAqIFN0cmluZ3NcbiAqL1xuXG5iYXNoLnN0cmluZyA9IC8oKFwifCcpKFxcXFw/LikqP1xcMikvO1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxuYmFzaC5rZXl3b3JkID0gL1xcYihpZnx0aGVufGVsc2V8ZWxpZnxmaXxmb3J8aW58ZG98ZG9uZXxzZWxlY3R8Y2FzZXxjb250aW51ZXxlc2FjfHdoaWxlfHVudGlsfHJldHVybnxleHBvcnR8ZGVjbGFyZXx0eXBlc2V0fGxvY2FsfHJlYWRvbmx5KVxcYi87XG5cbi8qKlxuICogT3BlcmF0b3JzXG4gKi9cblxuYmFzaC5vcGVyYXRvciA9IC8oO3wmJj98XFx8XFx8fD1bPX5dP3whPT98Jmx0O3wmZ3Q7fFxcfCkvO1xuXG4vKipcbiAqIEJ1aWx0aW5zXG4gKi9cblxuYmFzaC5idWlsdGluID0gL1xcYihhbGlhc3xiZ3xiaW5kfGJyZWFrfGJ1aWx0aW58Y2FsbGVyfGNkfGNvbW1hbmR8Y29tcGdlbnxjb21wbGV0ZXxkaXJzfGRpc293bnxlY2hvfGVuYWJsZXxldmFsfGV4ZWN8ZXhpdHxmYWxzZXxmY3xmZ3xnZXRvcHRzfGhhc2h8aGVscHxoaXN0b3J5fGpvYnN8a2lsbHxsZXR8bG9nb3V0fHBvcGR8cHJpbnRmfHB1c2hkfHB3ZHxyZWFkfHJlYWRvbmx5fHNldHxzaGlmdHxzaG9wdHxzb3VyY2V8c3VzcGVuZHx0ZXN0fHRpbWVzfHRyYXB8dHJ1ZXx0eXBlfHVsaW1pdHx1bWFza3x1bmFsaWFzfHVuc2V0fHdhaXQpXFxiLzsiXX0=
}, {}],
19: [function(require, module, exports) {

/**
 * Expose `ruby`
 */

'use strict';

module.exports = ruby;

/**
 * Add `ruby` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function ruby(highlight) {
  highlight.language('ruby', ruby);
}

/**
 * Booleans
 */

ruby.boolean = /\b(true|false)\b/;

/**
 * Strings
 */

ruby.string = /(("|')(\\?.)*?\2)/;

/**
 * Comments
 */

ruby.comment = /(?!\\{2})(#.*?$)/m;

/**
 * Classes
 */

ruby['class'] = /class +(\w+)/;
ruby['class'].children = { keyword: /class/ };

/**
 * Keywords
 */

ruby.keyword = /\b(alias|and|begin|break|case|catch|class|def|do|elsif|else|fail|ensure|for|end|if|in|module|next|not|or|raise|redo|rescue|retry|return|then|throw|super|unless|undef|until|when|while|yield)\b/;

/**
 * Numbers
 */

ruby.number = /\b[-+]?(0x[a-fA-F0-9]+|0b[0-1_]+|0[0-7]*|[1-9][0-9_eE.]*)\b/;

/**
 * Functions
 */

ruby['function'] = /(\w+) *\(/;
ruby['function'].children = { punctuation: /\(/ };

/**
 * Operator
 */

ruby.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation
 */

ruby.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1ydWJ5QG1hc3Rlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVN0QixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDbEM7Ozs7OztBQU1ELElBQUksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1sQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQzs7Ozs7O0FBTW5DLElBQUksU0FBTSxHQUFHLGNBQWMsQ0FBQztBQUM1QixJQUFJLFNBQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7OztBQU0zQyxJQUFJLENBQUMsT0FBTyxHQUFHLGlNQUFpTSxDQUFDOzs7Ozs7QUFNak4sSUFBSSxDQUFDLE1BQU0sR0FBRyw2REFBNkQsQ0FBQzs7Ozs7O0FBTTVFLElBQUksWUFBUyxHQUFHLFdBQVcsQ0FBQztBQUM1QixJQUFJLFlBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7Ozs7OztBQU0vQyxJQUFJLENBQUMsUUFBUSxHQUFHLHlGQUF5RixDQUFDOzs7Ozs7QUFNMUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LXJ1YnlAbWFzdGVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRXhwb3NlIGBydWJ5YFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcnVieTtcblxuLyoqXG4gKiBBZGQgYHJ1YnlgIGFzIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBydWJ5KGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgncnVieScsIHJ1YnkpO1xufVxuXG4vKipcbiAqIEJvb2xlYW5zXG4gKi9cblxucnVieS5ib29sZWFuID0gL1xcYih0cnVlfGZhbHNlKVxcYi87XG5cbi8qKlxuICogU3RyaW5nc1xuICovXG5cbnJ1Ynkuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogQ29tbWVudHNcbiAqL1xuXG5ydWJ5LmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoIy4qPyQpL207XG5cbi8qKlxuICogQ2xhc3Nlc1xuICovXG5cbnJ1YnkuY2xhc3MgPSAvY2xhc3MgKyhcXHcrKS87XG5ydWJ5LmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvY2xhc3MvIH07XG5cbi8qKlxuICogS2V5d29yZHNcbiAqL1xuXG5ydWJ5LmtleXdvcmQgPSAvXFxiKGFsaWFzfGFuZHxiZWdpbnxicmVha3xjYXNlfGNhdGNofGNsYXNzfGRlZnxkb3xlbHNpZnxlbHNlfGZhaWx8ZW5zdXJlfGZvcnxlbmR8aWZ8aW58bW9kdWxlfG5leHR8bm90fG9yfHJhaXNlfHJlZG98cmVzY3VlfHJldHJ5fHJldHVybnx0aGVufHRocm93fHN1cGVyfHVubGVzc3x1bmRlZnx1bnRpbHx3aGVufHdoaWxlfHlpZWxkKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbnJ1YnkubnVtYmVyID0gL1xcYlstK10/KDB4W2EtZkEtRjAtOV0rfDBiWzAtMV9dK3wwWzAtN10qfFsxLTldWzAtOV9lRS5dKilcXGIvO1xuXG4vKipcbiAqIEZ1bmN0aW9uc1xuICovXG5cbnJ1YnkuZnVuY3Rpb24gPSAvKFxcdyspICpcXCgvO1xucnVieS5mdW5jdGlvbi5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG5cbi8qKlxuICogT3BlcmF0b3JcbiAqL1xuXG5ydWJ5Lm9wZXJhdG9yID0gLyhbLStdezEsMn18IXwmbHQ7PT98Pj0/fD17MSwzfXwmbHQ7ezEsMn18PnsxLDJ9fCgmYW1wOyl7MSwyfXxcXHx7MSwyfXxcXD98XFwqfFxcL3xcXH58XFxefFxcJSkvO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxucnVieS5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC46XS87XG4iXX0=
}, {}],
20: [function(require, module, exports) {

/**
 * Expose `yaml`
 */

'use strict';

module.exports = yaml;

/**
 * Add `yaml` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function yaml(highlight) {
  highlight.language('yml', yaml);
  highlight.language('yaml', yaml);
}

/**
 * Boolean
 */

yaml.boolean = /\b(Yes|No)\b/;

/**
 * Numbers
 */

yaml.number = /\b(\d*\.\d+)\b/;

/**
 * Comments
 */

yaml.comment = /(#[^\n]*)/;

/**
 * Keywords
 */

yaml.keyword = /(\w+):/;
yaml.keyword.children = { punctuation: /:/ };

/**
 * Punctuation
 */

yaml.punctuation = /([:|>?])/;

/**
 * Strings
 */

yaml.string = /(("|')(\\?.)*?\2)/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC15YW1sQG1hc3Rlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVN0QixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEMsV0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDbEM7Ozs7OztBQU1ELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDOzs7Ozs7QUFNOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7O0FBTS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDOzs7Ozs7QUFNM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7Ozs7OztBQU03QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7Ozs7O0FBTTlCLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LXlhbWxAbWFzdGVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRXhwb3NlIGB5YW1sYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0geWFtbDtcblxuLyoqXG4gKiBBZGQgYHlhbWxgIGFzIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiB5YW1sKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgneW1sJywgeWFtbCk7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgneWFtbCcsIHlhbWwpO1xufVxuXG4vKipcbiAqIEJvb2xlYW5cbiAqL1xuXG55YW1sLmJvb2xlYW4gPSAvXFxiKFllc3xObylcXGIvO1xuXG4vKipcbiAqIE51bWJlcnNcbiAqL1xuXG55YW1sLm51bWJlciA9IC9cXGIoXFxkKlxcLlxcZCspXFxiLztcblxuLyoqXG4gKiBDb21tZW50c1xuICovXG5cbnlhbWwuY29tbWVudCA9IC8oI1teXFxuXSopLztcblxuLyoqXG4gKiBLZXl3b3Jkc1xuICovXG5cbnlhbWwua2V5d29yZCA9IC8oXFx3Kyk6LztcbnlhbWwua2V5d29yZC5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC86LyB9O1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxueWFtbC5wdW5jdHVhdGlvbiA9IC8oWzp8Pj9dKS87XG5cbi8qKlxuICogU3RyaW5nc1xuICovXG5cbnlhbWwuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG4iXX0=
}, {}],
21: [function(require, module, exports) {

/**
 * Expose `plugin`.
 */

'use strict';

module.exports = plugin;

/**
 * Plugin to highlight XML code.
 *
 * @param {Highlight} highlight
 */

function plugin(highlight) {
  highlight.language('xml', grammar).language('html', grammar);
}

/**
 * Grammar.
 */

var grammar = {};

/**
 * Comments.
 */

grammar.comment = /<!--[\w\W]*?-->/m;

/**
 * Entities.
 */

grammar.entity = /&#?[\dA-Za-z]{1,8};/;

/**
 * Doctypes.
 */

grammar.doctype = /<!DOCTYPE.+?>/i;

/**
 * CDATA.
 */

grammar.cdata = /<!\[CDATA\[[\w\W]*?]]>/i;

/**
 * Prologs.
 */

grammar.prolog = /<\?.+?\?>/;

/**
 * Tags. Children declared separately to maintain order.
 */

var children = {
  string: /('|")[\w\W]*?\1/,
  punctuation: /(^<\/?|\/?>$|=)/,
  name: /^[\w:-]+/,
  attribute: /[\w:-]+/
};

grammar.tag = {
  pattern: /<\/?[\w:-]+\s*(\s+[\w:-]+(=(("|')[\w\W]*\4|[^\s'">=]+))?\s*)*\/?>/,
  children: children
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC14bWxAbWFzdGVyL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7O0FBUXhCLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBQztBQUN4QixXQUFTLENBQ04sUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FDeEIsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztDQUM5Qjs7Ozs7O0FBTUQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFNakIsT0FBTyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Ozs7O0FBTXJDLE9BQU8sQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUM7Ozs7OztBQU12QyxPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDOzs7Ozs7QUFNbkMsT0FBTyxDQUFDLEtBQUssR0FBRyx5QkFBeUIsQ0FBQzs7Ozs7O0FBTTFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDOzs7Ozs7QUFNN0IsSUFBSSxRQUFRLEdBQUc7QUFDYixRQUFNLEVBQUUsaUJBQWlCO0FBQ3pCLGFBQVcsRUFBRSxpQkFBaUI7QUFDOUIsTUFBSSxFQUFFLFVBQVU7QUFDaEIsV0FBUyxFQUFFLFNBQVM7Q0FDckIsQ0FBQzs7QUFFRixPQUFPLENBQUMsR0FBRyxHQUFHO0FBQ1osU0FBTyxFQUFFLG1FQUFtRTtBQUM1RSxVQUFRLEVBQUUsUUFBUTtDQUNuQixDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC14bWxAbWFzdGVyL2xpYi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgcGx1Z2luYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpbjtcblxuLyoqXG4gKiBQbHVnaW4gdG8gaGlnaGxpZ2h0IFhNTCBjb2RlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqL1xuXG5mdW5jdGlvbiBwbHVnaW4oaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0XG4gICAgLmxhbmd1YWdlKCd4bWwnLCBncmFtbWFyKVxuICAgIC5sYW5ndWFnZSgnaHRtbCcsIGdyYW1tYXIpO1xufVxuXG4vKipcbiAqIEdyYW1tYXIuXG4gKi9cblxudmFyIGdyYW1tYXIgPSB7fTtcblxuLyoqXG4gKiBDb21tZW50cy5cbiAqL1xuXG5ncmFtbWFyLmNvbW1lbnQgPSAvPCEtLVtcXHdcXFddKj8tLT4vbTtcblxuLyoqXG4gKiBFbnRpdGllcy5cbiAqL1xuXG5ncmFtbWFyLmVudGl0eSA9IC8mIz9bXFxkQS1aYS16XXsxLDh9Oy87XG5cbi8qKlxuICogRG9jdHlwZXMuXG4gKi9cblxuZ3JhbW1hci5kb2N0eXBlID0gLzwhRE9DVFlQRS4rPz4vaTtcblxuLyoqXG4gKiBDREFUQS5cbiAqL1xuXG5ncmFtbWFyLmNkYXRhID0gLzwhXFxbQ0RBVEFcXFtbXFx3XFxXXSo/XV0+L2k7XG5cbi8qKlxuICogUHJvbG9ncy5cbiAqL1xuXG5ncmFtbWFyLnByb2xvZyA9IC88XFw/Lis/XFw/Pi87XG5cbi8qKlxuICogVGFncy4gQ2hpbGRyZW4gZGVjbGFyZWQgc2VwYXJhdGVseSB0byBtYWludGFpbiBvcmRlci5cbiAqL1xuXG52YXIgY2hpbGRyZW4gPSB7XG4gIHN0cmluZzogLygnfFwiKVtcXHdcXFddKj9cXDEvLFxuICBwdW5jdHVhdGlvbjogLyhePFxcLz98XFwvPz4kfD0pLyxcbiAgbmFtZTogL15bXFx3Oi1dKy8sXG4gIGF0dHJpYnV0ZTogL1tcXHc6LV0rL1xufTtcblxuZ3JhbW1hci50YWcgPSB7XG4gIHBhdHRlcm46IC88XFwvP1tcXHc6LV0rXFxzKihcXHMrW1xcdzotXSsoPSgoXCJ8JylbXFx3XFxXXSpcXDR8W15cXHMnXCI+PV0rKSk/XFxzKikqXFwvPz4vLFxuICBjaGlsZHJlbjogY2hpbGRyZW5cbn07Il19
}, {}],
22: [function(require, module, exports) {

/**
 * Expose `php`
 */

'use strict';

module.exports = php;

/**
 * Add `php` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function php(highlight) {
  highlight.language('php', php);
  highlight.language('PHP', php);
}

/**
 * Booleans
 */

php.boolean = /\b(true|false)\b/;

/**
 * Comments
 */

php.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$|#.*?$)/m;

/**
 * Classes
 */

php['class'] = /class +(\w+)/;
php['class'].children = { keyword: /class/ };

/**
 * Keywords
 */

php.keyword = /\b(__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/;

/**
 * Numbers
 */

php.number = /\b[-+]?(0x[0-9a-fA-F]|0[0-7]+|0b[01]+|[1-9][0-9]*)\b/;

/**
 * String
 */

php.string = /(("|')(\\?.)*?\2)/;

/**
 * Functions
 */

php['function'] = /(\w+) *\(/;
php['function'].children = { punctuation: /\(/ };

/**
 * Operators
 */

php.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation
 */

php.punctuation = /[{}[\];(),.]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1waHBAbWFzdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7O0FBU3JCLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBQztBQUNyQixXQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQixXQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztDQUNoQzs7Ozs7O0FBTUQsR0FBRyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Ozs7O0FBTWpDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsNkNBQTZDLENBQUM7Ozs7OztBQU01RCxHQUFHLFNBQU0sR0FBRyxjQUFjLENBQUM7QUFDM0IsR0FBRyxTQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7Ozs7QUFNMUMsR0FBRyxDQUFDLE9BQU8sR0FBRyw0ZEFBNGQsQ0FBQzs7Ozs7O0FBTTNlLEdBQUcsQ0FBQyxNQUFNLEdBQUcsc0RBQXNELENBQUM7Ozs7OztBQU1wRSxHQUFHLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNakMsR0FBRyxZQUFTLEdBQUcsV0FBVyxDQUFDO0FBQzNCLEdBQUcsWUFBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Ozs7O0FBTTlDLEdBQUcsQ0FBQyxRQUFRLEdBQUcseUZBQXlGLENBQUM7Ozs7OztBQU16RyxHQUFHLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtcGhwQG1hc3Rlci9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgcGhwYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGhwO1xuXG4vKipcbiAqIEFkZCBgcGhwYCBhcyBhIGxhbmd1YWdlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGhwKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgncGhwJywgcGhwKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdQSFAnLCBwaHApO1xufVxuXG4vKipcbiAqIEJvb2xlYW5zXG4gKi9cblxucGhwLmJvb2xlYW4gPSAvXFxiKHRydWV8ZmFsc2UpXFxiLztcblxuLyoqXG4gKiBDb21tZW50c1xuICovXG5cbnBocC5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JHwjLio/JCkvbTtcblxuLyoqXG4gKiBDbGFzc2VzXG4gKi9cblxucGhwLmNsYXNzID0gL2NsYXNzICsoXFx3KykvO1xucGhwLmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvY2xhc3MvIH07XG5cbi8qKlxuICogS2V5d29yZHNcbiAqL1xuXG5waHAua2V5d29yZCA9IC9cXGIoX19oYWx0X2NvbXBpbGVyfGFic3RyYWN0fGFuZHxhcnJheXxhc3xicmVha3xjYWxsYWJsZXxjYXNlfGNhdGNofGNsYXNzfGNsb25lfGNvbnN0fGNvbnRpbnVlfGRlY2xhcmV8ZGVmYXVsdHxkaWV8ZG98ZWNob3xlbHNlfGVsc2VpZnxlbXB0eXxlbmRkZWNsYXJlfGVuZGZvcnxlbmRmb3JlYWNofGVuZGlmfGVuZHN3aXRjaHxlbmR3aGlsZXxldmFsfGV4aXR8ZXh0ZW5kc3xmaW5hbHxmaW5hbGx5fGZvcnxmb3JlYWNofGZ1bmN0aW9ufGdsb2JhbHxnb3RvfGlmfGltcGxlbWVudHN8aW5jbHVkZXxpbmNsdWRlX29uY2V8aW5zdGFuY2VvZnxpbnN0ZWFkb2Z8aW50ZXJmYWNlfGlzc2V0fGxpc3R8bmFtZXNwYWNlfG5ld3xvcnxwcmludHxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmVxdWlyZXxyZXF1aXJlX29uY2V8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dGhyb3d8dHJhaXR8dHJ5fHVuc2V0fHVzZXx2YXJ8d2hpbGV8eG9yfHlpZWxkKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbnBocC5udW1iZXIgPSAvXFxiWy0rXT8oMHhbMC05YS1mQS1GXXwwWzAtN10rfDBiWzAxXSt8WzEtOV1bMC05XSopXFxiLztcblxuLyoqXG4gKiBTdHJpbmdcbiAqL1xuXG5waHAuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogRnVuY3Rpb25zXG4gKi9cblxucGhwLmZ1bmN0aW9uID0gLyhcXHcrKSAqXFwoLztcbnBocC5mdW5jdGlvbi5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG5cbi8qKlxuICogT3BlcmF0b3JzXG4gKi9cblxucGhwLm9wZXJhdG9yID0gLyhbLStdezEsMn18IXwmbHQ7PT98Pj0/fD17MSwzfXwmbHQ7ezEsMn18PnsxLDJ9fCgmYW1wOyl7MSwyfXxcXHx7MSwyfXxcXD98XFwqfFxcL3xcXH58XFxefFxcJSkvO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxucGhwLnB1bmN0dWF0aW9uID0gL1t7fVtcXF07KCksLl0vOyJdfQ==
}, {}],
23: [function(require, module, exports) {

/**
 * Expose `plugin`.
 */

'use strict';

module.exports = plugin;

/**
 * Plugin to highlight CSS code.
 *
 * @param {Highlight} highlight
 */

function plugin(highlight) {
  highlight.language('css', grammar);
}

/**
 * Grammar.
 */

var grammar = {};

/**
 * Comments.
 */

grammar.comment = /\/\*[\w\W]*?\*\//m;

/**
 * Strings.
 */

grammar.string = /("|').*?\1/;

/**
 * @-rules.
 */

grammar['at-rule'] = /@[\w-]+\b/;

/**
 * Selectors.
 */

grammar.selector = {
  pattern: /[^\{\}\s][^\{\};]*?\{/,
  children: {
    'class': /\.[-.\w]+/,
    id: /#[-\w]+/,
    'pseudo-element': /:(after|before|first-letter|first-line|selection)|::[-\w]+/,
    'pseudo-class': /:[-\w]+(\(.*\))?/,
    punctuation: /\{/
  }
};

/**
 * Functions.
 */

grammar['function'] = {
  pattern: /[\w-]+\(/,
  children: {
    punctuation: /\(/
  }
};

/**
 * Properties.
 */

grammar.property = /[\w-]+(?=\s*:)/;

/**
 * Keywords.
 */

grammar.keyword = /[\b|!]important|initial|inherit|none|transparent\b/;

/**
 * Numbers.
 */

grammar.number = /(#[A-Fa-f\d]{3,8}|\b\d*\.?\d+)/;

/**
 * Operators.
 */

grammar.operator = /[-+\/*%^]/;

/**
 * Punctuation.
 */

grammar.punctuation = /[{}(),:;]/;

/**
 * Constant.
 */

grammar.constant = /(?!\d)(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|kHz|in|mm|pc|pt|px|rad|rem|s|ms|turn|vh|vmax|vmin|vw)\b/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1jc3NAMC4wLjIvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFReEIsU0FBUyxNQUFNLENBQUMsU0FBUyxFQUFDO0FBQ3hCLFdBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQ3BDOzs7Ozs7QUFNRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7Ozs7OztBQU1qQixPQUFPLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNdEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7Ozs7OztBQU05QixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDOzs7Ozs7QUFNakMsT0FBTyxDQUFDLFFBQVEsR0FBRztBQUNqQixTQUFPLEVBQUUsdUJBQXVCO0FBQ2hDLFVBQVEsRUFBRTtBQUNSLGFBQU8sV0FBVztBQUNsQixNQUFFLEVBQUUsU0FBUztBQUNiLG9CQUFnQixFQUFFLDREQUE0RDtBQUM5RSxrQkFBYyxFQUFFLGtCQUFrQjtBQUNsQyxlQUFXLEVBQUUsSUFBSTtHQUNsQjtDQUNGLENBQUM7Ozs7OztBQU1GLE9BQU8sWUFBUyxHQUFHO0FBQ2pCLFNBQU8sRUFBRSxVQUFVO0FBQ25CLFVBQVEsRUFBRTtBQUNSLGVBQVcsRUFBRSxJQUFJO0dBQ2xCO0NBQ0YsQ0FBQzs7Ozs7O0FBTUYsT0FBTyxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7O0FBTXBDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsb0RBQW9ELENBQUM7Ozs7OztBQU12RSxPQUFPLENBQUMsTUFBTSxHQUFHLGdDQUFnQyxDQUFDOzs7Ozs7QUFNbEQsT0FBTyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7Ozs7OztBQU0vQixPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzs7Ozs7O0FBTWxDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsc0dBQXNHLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LWNzc0AwLjAuMi9saWIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBFeHBvc2UgYHBsdWdpbmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW47XG5cbi8qKlxuICogUGx1Z2luIHRvIGhpZ2hsaWdodCBDU1MgY29kZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKi9cblxuZnVuY3Rpb24gcGx1Z2luKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnY3NzJywgZ3JhbW1hcik7XG59XG5cbi8qKlxuICogR3JhbW1hci5cbiAqL1xuXG52YXIgZ3JhbW1hciA9IHt9O1xuXG4vKipcbiAqIENvbW1lbnRzLlxuICovXG5cbmdyYW1tYXIuY29tbWVudCA9IC9cXC9cXCpbXFx3XFxXXSo/XFwqXFwvL207XG5cbi8qKlxuICogU3RyaW5ncy5cbiAqL1xuXG5ncmFtbWFyLnN0cmluZyA9IC8oXCJ8JykuKj9cXDEvO1xuXG4vKipcbiAqIEAtcnVsZXMuXG4gKi9cblxuZ3JhbW1hclsnYXQtcnVsZSddID0gL0BbXFx3LV0rXFxiLztcblxuLyoqXG4gKiBTZWxlY3RvcnMuXG4gKi9cblxuZ3JhbW1hci5zZWxlY3RvciA9IHtcbiAgcGF0dGVybjogL1teXFx7XFx9XFxzXVteXFx7XFx9O10qP1xcey8sXG4gIGNoaWxkcmVuOiB7XG4gICAgY2xhc3M6IC9cXC5bLS5cXHddKy8sXG4gICAgaWQ6IC8jWy1cXHddKy8sXG4gICAgJ3BzZXVkby1lbGVtZW50JzogLzooYWZ0ZXJ8YmVmb3JlfGZpcnN0LWxldHRlcnxmaXJzdC1saW5lfHNlbGVjdGlvbil8OjpbLVxcd10rLyxcbiAgICAncHNldWRvLWNsYXNzJzogLzpbLVxcd10rKFxcKC4qXFwpKT8vLFxuICAgIHB1bmN0dWF0aW9uOiAvXFx7L1xuICB9XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9ucy5cbiAqL1xuXG5ncmFtbWFyLmZ1bmN0aW9uID0ge1xuICBwYXR0ZXJuOiAvW1xcdy1dK1xcKC8sXG4gIGNoaWxkcmVuOiB7XG4gICAgcHVuY3R1YXRpb246IC9cXCgvXG4gIH1cbn07XG5cbi8qKlxuICogUHJvcGVydGllcy5cbiAqL1xuXG5ncmFtbWFyLnByb3BlcnR5ID0gL1tcXHctXSsoPz1cXHMqOikvO1xuXG4vKipcbiAqIEtleXdvcmRzLlxuICovXG5cbmdyYW1tYXIua2V5d29yZCA9IC9bXFxifCFdaW1wb3J0YW50fGluaXRpYWx8aW5oZXJpdHxub25lfHRyYW5zcGFyZW50XFxiLztcblxuLyoqXG4gKiBOdW1iZXJzLlxuICovXG5cbmdyYW1tYXIubnVtYmVyID0gLygjW0EtRmEtZlxcZF17Myw4fXxcXGJcXGQqXFwuP1xcZCspLztcblxuLyoqXG4gKiBPcGVyYXRvcnMuXG4gKi9cblxuZ3JhbW1hci5vcGVyYXRvciA9IC9bLStcXC8qJV5dLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvbi5cbiAqL1xuXG5ncmFtbWFyLnB1bmN0dWF0aW9uID0gL1t7fSgpLDo7XS87XG5cbi8qKlxuICogQ29uc3RhbnQuXG4gKi9cblxuZ3JhbW1hci5jb25zdGFudCA9IC8oPyFcXGQpKGNofGNtfGRlZ3xkcGNtfGRwaXxkcHB4fGVtfGV4fGdyYWR8SHp8a0h6fGlufG1tfHBjfHB0fHB4fHJhZHxyZW18c3xtc3x0dXJufHZofHZtYXh8dm1pbnx2dylcXGIvO1xuIl19
}, {}],
24: [function(require, module, exports) {

/**
 * Expose `plugin`.
 */

'use strict';

module.exports = plugin;

/**
 * Plugin to highlight go code.
 *
 * @param {Highlight} highlight
 */

function plugin(highlight) {
  highlight.language('go', grammar);
}

/**
 * Grammar.
 */

var grammar = {};

/**
 * Strings.
 */

grammar.string = /(("|')(\\?.)*?\2)/;

/**
 * Comments.
 */

grammar.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Booleans.
 */

grammar.boolean = /\b(true|false)\b/;

/**
 * Keywords.
 */

grammar.keyword = /\b(break|default|func|interface|select|case|defer|go|map|struct|chan}else}goto}package|switch|const|fallthrough|if|range|type|continue|for|import|return|var)\b/;

/**
 * Functions.
 *
 * Children are set separately to maintain ordering.
 */

grammar['function'] = {
  pattern: /(\w+)\(/,
  children: {}
};

grammar['function'].children['class'] = /\b([A-Z]\w*)\b/;
grammar['function'].children['function'] = /(\w+)/;
grammar['function'].children.punctuation = /\(/;

/**
 * Numbers.
 */

grammar.number = /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/;

/**
 * Operators.
 */

grammar.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation.
 */

grammar.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1nb0AwLjAuMS9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7OztBQVF4QixTQUFTLE1BQU0sQ0FBQyxTQUFTLEVBQUM7QUFDeEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDbkM7Ozs7OztBQU1ELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0FBTWpCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7Ozs7OztBQU1yQyxPQUFPLENBQUMsT0FBTyxHQUFHLHVDQUF1QyxDQUFDOzs7Ozs7QUFNMUQsT0FBTyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Ozs7O0FBTXJDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUtBQWlLLENBQUM7Ozs7Ozs7O0FBUXBMLE9BQU8sWUFBUyxHQUFHO0FBQ2pCLFNBQU8sRUFBRSxTQUFTO0FBQ2xCLFVBQVEsRUFBRSxFQUFFO0NBQ2IsQ0FBQzs7QUFFRixPQUFPLFlBQVMsQ0FBQyxRQUFRLFNBQU0sR0FBRyxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLFlBQVMsQ0FBQyxRQUFRLFlBQVMsR0FBRyxPQUFPLENBQUM7QUFDN0MsT0FBTyxZQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Ozs7OztBQU03QyxPQUFPLENBQUMsTUFBTSxHQUFHLDREQUE0RCxDQUFDOzs7Ozs7QUFNOUUsT0FBTyxDQUFDLFFBQVEsR0FBRyx5RkFBeUYsQ0FBQzs7Ozs7O0FBTTdHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1nb0AwLjAuMS9saWIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBFeHBvc2UgYHBsdWdpbmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW47XG5cbi8qKlxuICogUGx1Z2luIHRvIGhpZ2hsaWdodCBnbyBjb2RlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqL1xuXG5mdW5jdGlvbiBwbHVnaW4oaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdnbycsIGdyYW1tYXIpO1xufVxuXG4vKipcbiAqIEdyYW1tYXIuXG4gKi9cblxudmFyIGdyYW1tYXIgPSB7fTtcblxuLyoqXG4gKiBTdHJpbmdzLlxuICovXG5cbmdyYW1tYXIuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogQ29tbWVudHMuXG4gKi9cblxuZ3JhbW1hci5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JCkvbTtcblxuLyoqXG4gKiBCb29sZWFucy5cbiAqL1xuXG5ncmFtbWFyLmJvb2xlYW4gPSAvXFxiKHRydWV8ZmFsc2UpXFxiLztcblxuLyoqXG4gKiBLZXl3b3Jkcy5cbiAqL1xuXG5ncmFtbWFyLmtleXdvcmQgPSAvXFxiKGJyZWFrfGRlZmF1bHR8ZnVuY3xpbnRlcmZhY2V8c2VsZWN0fGNhc2V8ZGVmZXJ8Z298bWFwfHN0cnVjdHxjaGFufWVsc2V9Z290b31wYWNrYWdlfHN3aXRjaHxjb25zdHxmYWxsdGhyb3VnaHxpZnxyYW5nZXx0eXBlfGNvbnRpbnVlfGZvcnxpbXBvcnR8cmV0dXJufHZhcilcXGIvO1xuXG4vKipcbiAqIEZ1bmN0aW9ucy5cbiAqXG4gKiBDaGlsZHJlbiBhcmUgc2V0IHNlcGFyYXRlbHkgdG8gbWFpbnRhaW4gb3JkZXJpbmcuXG4gKi9cblxuZ3JhbW1hci5mdW5jdGlvbiA9IHtcbiAgcGF0dGVybjogLyhcXHcrKVxcKC8sXG4gIGNoaWxkcmVuOiB7fVxufTtcblxuZ3JhbW1hci5mdW5jdGlvbi5jaGlsZHJlbi5jbGFzcyA9IC9cXGIoW0EtWl1cXHcqKVxcYi87XG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLmZ1bmN0aW9uID0gLyhcXHcrKS87XG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLnB1bmN0dWF0aW9uID0gL1xcKC87XG5cbi8qKlxuICogTnVtYmVycy5cbiAqL1xuXG5ncmFtbWFyLm51bWJlciA9IC9cXGItPygweFtcXGRBLUZhLWZdK3xcXGQqXFwuP1xcZCsoW0VlXS0/XFxkKyk/fE5hTnwtP0luZmluaXR5KVxcYi87XG5cbi8qKlxuICogT3BlcmF0b3JzLlxuICovXG5cbmdyYW1tYXIub3BlcmF0b3IgPSAvKFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb24uXG4gKi9cblxuZ3JhbW1hci5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC46XS87Il19
}, {}],
10: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

/**
 * Menu.
 */

exports['default'] = {
  propTypes: {
    onChange: { type: 'function' },
    items: { type: 'array' }
  },

  render: function render(_ref, updateState) {
    var props = _ref.props;
    var state = _ref.state;
    var items = props.items;
    var onChange = props.onChange;
    var activeItem = state.activeItem;

    var currentItem = activeItem || items[0];

    var menuItems = items.map(function (item) {
      return (0, _dekujsVirtualElement2['default'])(
        'div',
        { 'class': 'matter-Menu-item', onClick: onClick, active: currentItem === item },
        (0, _dekujsVirtualElement2['default'])(
          'span',
          null,
          item
        )
      );

      function onClick() {
        updateState({ activeItem: item });
        if (onChange) onChange(item);
      }
    });

    return (0, _dekujsVirtualElement2['default'])(
      'div',
      { 'class': 'matter-Menu' },
      menuItems
    );
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29DQUFvQix3QkFBd0I7Ozs7Ozs7O3FCQU03QjtBQUNiLFdBQVMsRUFBRTtBQUNULFlBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDOUIsU0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtHQUN6Qjs7QUFFRCxRQUFNLEVBQUEsZ0JBQUMsSUFBZ0IsRUFBRSxXQUFXLEVBQUU7UUFBN0IsS0FBSyxHQUFQLElBQWdCLENBQWQsS0FBSztRQUFFLEtBQUssR0FBZCxJQUFnQixDQUFQLEtBQUs7UUFDYixLQUFLLEdBQWUsS0FBSyxDQUF6QixLQUFLO1FBQUUsUUFBUSxHQUFLLEtBQUssQ0FBbEIsUUFBUTtRQUNmLFVBQVUsR0FBSyxLQUFLLENBQXBCLFVBQVU7O0FBRWhCLFFBQUksV0FBVyxHQUFHLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXpDLFFBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUU7QUFDdkMsYUFDRTs7VUFBSyxTQUFNLGtCQUFrQixFQUFDLE9BQU8sRUFBRyxPQUFPLEFBQUUsRUFBQyxNQUFNLEVBQUcsV0FBVyxLQUFLLElBQUksQUFBRTtRQUMvRTs7O1VBQU8sSUFBSTtTQUFRO09BQ2YsQ0FDTjs7QUFFRixlQUFTLE9BQU8sR0FBRztBQUNqQixtQkFBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEMsWUFBSSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzlCO0tBQ0YsQ0FBQyxDQUFDOztBQUVILFdBQ0U7O1FBQUssU0FBTSxhQUFhO01BQ3BCLFNBQVM7S0FDUCxDQUNOO0dBQ0g7Q0FDRiIsImZpbGUiOiJsaWIvbWVudS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5cbi8qKlxuICogTWVudS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BUeXBlczoge1xuICAgIG9uQ2hhbmdlOiB7IHR5cGU6ICdmdW5jdGlvbicgfSxcbiAgICBpdGVtczogeyB0eXBlOiAnYXJyYXknIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcywgc3RhdGUgfSwgdXBkYXRlU3RhdGUpIHtcbiAgICBsZXQgeyBpdGVtcywgb25DaGFuZ2UgfSA9IHByb3BzO1xuICAgIGxldCB7IGFjdGl2ZUl0ZW0gfSA9IHN0YXRlO1xuXG4gICAgbGV0IGN1cnJlbnRJdGVtID0gYWN0aXZlSXRlbSB8fCBpdGVtc1swXTtcblxuICAgIGxldCBtZW51SXRlbXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz0nbWF0dGVyLU1lbnUtaXRlbScgb25DbGljaz17IG9uQ2xpY2sgfSBhY3RpdmU9eyBjdXJyZW50SXRlbSA9PT0gaXRlbSB9PlxuICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICB1cGRhdGVTdGF0ZSh7IGFjdGl2ZUl0ZW06IGl0ZW0gfSk7XG4gICAgICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2UoaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz0nbWF0dGVyLU1lbnUnPlxuICAgICAgICB7IG1lbnVJdGVtcyB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuIl19
}, {"dekujs/virtual-element":11}]}, {}, {"1":""}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXF1aXJlLmpzIiwiL2luZGV4LmpzIiwiL2xpYi9pbmRleC5qcyIsIi9saWIvdGV4dC1maWVsZC9pbmRleC5qcyIsIi9jb21wb25lbnRzL2Rla3Vqcy12aXJ0dWFsLWVsZW1lbnRAMS4xLjIvYnVpbGQvdmlydHVhbC1lbGVtZW50LmpzIiwiL2xpYi9jaGVja2JveC9pbmRleC5qcyIsIi9saWIvYnV0dG9uL2luZGV4LmpzIiwiL2xpYi9zaGFwZS9pbmRleC5qcyIsIi9saWIvdGFibGUvaW5kZXguanMiLCIvbGliL2dyaWQvaW5kZXguanMiLCIvbGliL2NvZGUvaW5kZXguanMiLCIvY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0QDAuMC4yL2xpYi9pbmRleC5qcyIsIi9jb21wb25lbnRzL2NvbXBvbmVudC1lc2NhcGUtaHRtbEB2MS4wLjIvaW5kZXguanMiLCIvY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LW9iamVjdGl2ZS1jQG1hc3Rlci9pbmRleC5qcyIsIi9jb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtamF2YXNjcmlwdEAwLjAuMy9saWIvaW5kZXguanMiLCIvY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LWNzaGFycEBtYXN0ZXIvaW5kZXguanMiLCIvY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LXB5dGhvbkAwLjAuMy9pbmRleC5qcyIsIi9jb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtamF2YUBtYXN0ZXIvaW5kZXguanMiLCIvY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LWJhc2hAbWFzdGVyL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1ydWJ5QG1hc3Rlci9pbmRleC5qcyIsIi9jb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQteWFtbEBtYXN0ZXIvaW5kZXguanMiLCIvY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LXhtbEBtYXN0ZXIvbGliL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1waHBAbWFzdGVyL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1jc3NAMC4wLjIvbGliL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1nb0AwLjAuMS9saWIvaW5kZXguanMiLCIvbGliL21lbnUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O21CQ2pGTyxPQUFPOztRQUdaLFNBQVM7UUFDVCxRQUFRO1FBQ1IsTUFBTTtRQUNOLEtBQUs7UUFDTCxLQUFLO1FBQ0wsSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJOzs7Ozs7Ozs7Ozs7eUJDbkJnQixjQUFjOzs7O3dCQUNmLFlBQVk7Ozs7c0JBQ2QsVUFBVTs7OztxQkFDWCxTQUFTOzs7O3FCQUNULFNBQVM7Ozs7b0JBQ1YsUUFBUTs7OztvQkFDUixRQUFROzs7O29CQUNSLFFBQVE7Ozs7UUFHdkIsU0FBUztRQUNULFFBQVE7UUFDUixNQUFNO1FBQ04sS0FBSztRQUNMLEtBQUs7UUFDTCxJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7Ozs7Ozs7Ozs7OztvQ0NqQmMsd0JBQXdCOzs7Ozs7OztxQkFNN0I7QUFDYixXQUFTLEVBQUU7QUFDVCxlQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0dBQ2hDOztBQUVELFFBQU0sRUFBQSxnQkFBQyxJQUFnQixFQUFFO1FBQWhCLEtBQUssR0FBUCxJQUFnQixDQUFkLEtBQUs7UUFBRSxLQUFLLEdBQWQsSUFBZ0IsQ0FBUCxLQUFLO1FBQ2IsV0FBVyxHQUFLLEtBQUssQ0FBckIsV0FBVzs7QUFFakIsUUFBSSxLQUFLLEdBQUc7QUFDVixlQUFPLGtCQUFrQjtBQUN6QixpQkFBVyxFQUFFLFdBQVc7S0FDekIsQ0FBQzs7QUFFRixXQUNFLGdEQUFZLEtBQUssQ0FDVCxDQUNSO0dBQ0g7Q0FDRjs7Ozs7OztBQ3hCRCxDQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsTUFBRyxPQUFPLE9BQU8sS0FBRyxRQUFRLElBQUUsT0FBTyxNQUFNLEtBQUcsV0FBVyxFQUFDO0FBQUMsVUFBTSxDQUFDLE9BQU8sR0FBQyxDQUFDLEVBQUUsQ0FBQTtHQUFDLE1BQUssSUFBRyxPQUFPLE1BQU0sS0FBRyxVQUFVLElBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQztBQUFDLFVBQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxNQUFJO0FBQUMsUUFBSSxDQUFDLENBQUMsSUFBRyxPQUFPLE1BQU0sS0FBRyxXQUFXLEVBQUM7QUFBQyxPQUFDLEdBQUMsTUFBTSxDQUFBO0tBQUMsTUFBSyxJQUFHLE9BQU8sTUFBTSxLQUFHLFdBQVcsRUFBQztBQUFDLE9BQUMsR0FBQyxNQUFNLENBQUE7S0FBQyxNQUFLLElBQUcsT0FBTyxJQUFJLEtBQUcsV0FBVyxFQUFDO0FBQUMsT0FBQyxHQUFDLElBQUksQ0FBQTtLQUFDLE1BQUk7QUFBQyxPQUFDLEdBQUMsSUFBSSxDQUFBO0tBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUUsQ0FBQTtHQUFDO0NBQUMsQ0FBQSxDQUFFLFlBQVU7QUFBQyxNQUFJLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGFBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxVQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQUMsWUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztBQUFDLGNBQUksQ0FBQyxHQUFDLE9BQU8sUUFBUSxJQUFFLFVBQVUsSUFBRSxRQUFRLENBQUMsSUFBRyxDQUFDLENBQUMsSUFBRSxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLEdBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLElBQUksR0FBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUEsQ0FBQTtTQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxjQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtTQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7S0FBQyxJQUFJLENBQUMsR0FBQyxPQUFPLFFBQVEsSUFBRSxVQUFVLElBQUUsUUFBUSxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtHQUFDLENBQUEsQ0FBRSxFQUFDLENBQUMsRUFBQyxDQUFDLFVBQVMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUM7Ozs7O0FBSzExQixVQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDOUIsVUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J2QyxZQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O0FBZXhCLGVBQVMsT0FBTyxDQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFOztBQUU1QyxZQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1QsZ0JBQU0sSUFBSSxTQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQTtTQUMvQzs7OztBQUlELFlBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEtBQUssT0FBTyxVQUFVLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUEsQUFBQyxFQUFFO0FBQzNGLGtCQUFRLEdBQUcsVUFBVSxDQUFBO0FBQ3JCLG9CQUFVLEdBQUcsRUFBRSxDQUFBO1NBQ2hCOzs7O0FBSUQsWUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDN0Usa0JBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQy9COztBQUVELGdCQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQTtBQUN6QixrQkFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUE7Ozs7QUFJN0IsWUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDNUIsa0JBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ3RCOzs7QUFHRCxnQkFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7QUFJL0IsZUFBTztBQUNMLGNBQUksRUFBRSxJQUFJO0FBQ1Ysa0JBQVEsRUFBRSxRQUFRO0FBQ2xCLG9CQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFBO09BQ0Y7S0FFQSxFQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxVQUFTLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDO0FBQ3RFLGtCQUFZLENBQUE7Ozs7O0FBS1osWUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUE7Ozs7Ozs7Ozs7QUFVN0IsZUFBUyxnQkFBZ0IsQ0FBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUMvQyxhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyQyxjQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRXBCLGNBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3JDLDRCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBO1dBQzNDLE1BQU07QUFDTCxrQkFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtXQUNuQjtTQUNGOztBQUVELGVBQU8sTUFBTSxDQUFBO09BQ2Q7Ozs7Ozs7OztBQVNELGVBQVMsY0FBYyxDQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDdEMsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckMsY0FBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBOztBQUVwQixjQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDeEIsMEJBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7V0FDOUIsTUFBTTtBQUNMLGtCQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1dBQ25CO1NBQ0Y7O0FBRUQsZUFBTyxNQUFNLENBQUE7T0FDZDs7Ozs7Ozs7O0FBU0QsZUFBUyxZQUFZLENBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUNuQyxZQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7QUFDakIsaUJBQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtTQUNqQzs7QUFFRCxlQUFPLGdCQUFnQixDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUE7T0FDMUM7S0FFQSxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLFVBQVMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUM7QUFDMUMsWUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBRW5ELEVBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxVQUFTLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDOzs7Ozs7Ozs7OztBQVcxRCxZQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDaEQsWUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsWUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7QUFFdEIsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sR0FBRyxDQUFDOztBQUUxQixZQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQ3hCLEtBQUssSUFBSSxDQUFDLENBQUM7O0FBRWYsWUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLGFBQUcsR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUNkLFFBQVEsR0FBRyxHQUFHLEdBQ2QsUUFBUSxDQUFBO1NBQ2I7O0FBRUQsZUFBTyxHQUFHLEVBQUUsR0FBRyxLQUFLLEVBQUU7QUFDcEIsYUFBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7O0FBRUQsZUFBTyxHQUFHLENBQUM7T0FDWixDQUFBO0tBR0EsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDaEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7b0NDdExpQix3QkFBd0I7Ozs7Ozs7O3FCQU03QjtBQUNiLFdBQVMsRUFBRTtBQUNULFFBQUksRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtBQUMvRCxXQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQzdCLFdBQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7R0FDN0I7O0FBRUQsUUFBTSxFQUFBLGdCQUFDLElBQVMsRUFBRTtRQUFULEtBQUssR0FBUCxJQUFTLENBQVAsS0FBSztRQUNOLElBQUksR0FBdUIsS0FBSyxDQUFoQyxJQUFJO1FBQUUsT0FBTyxHQUFjLEtBQUssQ0FBMUIsT0FBTztRQUFFLE9BQU8sR0FBSyxLQUFLLENBQWpCLE9BQU87O0FBRTVCLFFBQUksS0FBSyxHQUFHO0FBQ1YsZUFBTyxpQkFBaUI7QUFDeEIsVUFBSSxFQUFFLElBQUksSUFBSSxRQUFRO0FBQ3RCLGFBQU8sRUFBRSxPQUFPO0FBQ2hCLGFBQU8sRUFBRSxPQUFPO0FBQ2hCLFVBQUksRUFBRSxVQUFVO0tBQ2pCLENBQUM7O0FBRUYsV0FBTyxnREFBWSxLQUFLLENBQUksQ0FBQTtHQUM3QjtDQUNGOzs7Ozs7Ozs7Ozs7O29DQzFCbUIsd0JBQXdCOzs7Ozs7OztxQkFNN0I7QUFDYixXQUFTLEVBQUU7QUFDVCxRQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLEVBQUU7QUFDdEUsUUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFO0FBQy9ELFdBQU8sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDN0IsU0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtHQUMxQjs7QUFFRCxRQUFNLEVBQUEsZ0JBQUMsSUFBUyxFQUFFO1FBQVQsS0FBSyxHQUFQLElBQVMsQ0FBUCxLQUFLO1FBQ04sS0FBSyxHQUEwQixLQUFLLENBQXBDLEtBQUs7UUFBRSxJQUFJLEdBQW9CLEtBQUssQ0FBN0IsSUFBSTtRQUFFLElBQUksR0FBYyxLQUFLLENBQXZCLElBQUk7UUFBRSxPQUFPLEdBQUssS0FBSyxDQUFqQixPQUFPOztBQUVoQyxRQUFJLEtBQUssR0FBRztBQUNWLFVBQUksRUFBRSxJQUFJLElBQUksU0FBUztBQUN2QixVQUFJLEVBQUUsSUFBSSxJQUFJLFFBQVE7QUFDdEIsZUFBTyxlQUFlO0FBQ3RCLGFBQU8sRUFBRSxPQUFPO0tBQ2pCLENBQUM7O0FBRUYsV0FDRTs7TUFBYSxLQUFLO01BQ2QsS0FBSztLQUNBLENBQ1Q7R0FDSDtDQUNGOzs7Ozs7Ozs7Ozs7O29DQzlCbUIsd0JBQXdCOzs7Ozs7OztxQkFNN0I7QUFDYixXQUFTLEVBQUU7QUFDVCxTQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQ3pCLFNBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDekIsUUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUN4QixRQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0dBQ3pCOztBQUVELFFBQU0sRUFBQSxnQkFBQyxJQUFnQixFQUFFLFdBQVcsRUFBRTtRQUE3QixLQUFLLEdBQVAsSUFBZ0IsQ0FBZCxLQUFLO1FBQUUsS0FBSyxHQUFkLElBQWdCLENBQVAsS0FBSztRQUNiLFFBQVEsR0FBK0IsS0FBSyxDQUE1QyxRQUFRO1FBQUUsS0FBSyxHQUF3QixLQUFLLENBQWxDLEtBQUs7UUFBRSxLQUFLLEdBQWlCLEtBQUssQ0FBM0IsS0FBSztRQUFFLElBQUksR0FBVyxLQUFLLENBQXBCLElBQUk7UUFBRSxJQUFJLEdBQUssS0FBSyxDQUFkLElBQUk7O0FBRXhDLFFBQUksS0FBSyxHQUFHO0FBQ1YsZUFBTyxjQUFjO0FBQ3JCLFVBQUksRUFBRSxJQUFJLElBQUksV0FBVztBQUN6QixXQUFLLEVBQUUsS0FBSyxJQUFJLFFBQVE7QUFDeEIsVUFBSSxFQUFFLElBQUksSUFBSSxRQUFRO0FBQ3RCLFdBQUssRUFBRSxLQUFLO0tBQ2IsQ0FBQzs7QUFFRixXQUNFOztNQUFVLEtBQUs7TUFDWCxRQUFRO0tBQ04sQ0FDTjtHQUNIO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7b0NDL0JtQix3QkFBd0I7Ozs7Ozs7O3FCQU03QjtBQUNiLFdBQVMsRUFBRTtBQUNULFFBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7R0FDeEI7O0FBRUQsUUFBTSxFQUFBLGdCQUFDLElBQWdCLEVBQUUsUUFBUSxFQUFFO1FBQTFCLEtBQUssR0FBUCxJQUFnQixDQUFkLEtBQUs7UUFBRSxLQUFLLEdBQWQsSUFBZ0IsQ0FBUCxLQUFLO1FBQ2IsSUFBSSxHQUFLLEtBQUssQ0FBZCxJQUFJOztBQUVWLFFBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFHLEVBQUU7QUFDckMsVUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFTLElBQUksRUFBRTtBQUNwQyxlQUNFOztZQUFJLFNBQU0sbUJBQW1CLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRztVQUNuRDs7O1lBQVEsSUFBSTtXQUFTO1NBQ2xCLENBQ0w7T0FDSCxDQUFDLENBQUM7O0FBRUgsYUFDRTs7VUFBSSxTQUFNLGtCQUFrQjtRQUN4QixRQUFRO09BQ1AsQ0FDTDtLQUNILENBQUMsQ0FBQzs7QUFFSCxXQUNFOztRQUFPLFNBQU0sY0FBYyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLEdBQUc7TUFDekQ7OztRQUNJLFNBQVM7T0FDTDtLQUNGLENBQ1I7R0FDSDtDQUNGOzs7Ozs7Ozs7Ozs7O29DQ3RDbUIsd0JBQXdCOzs7Ozs7OztxQkFNN0I7QUFDYixRQUFNLEVBQUEsZ0JBQUMsSUFBUyxFQUFFO1FBQVQsS0FBSyxHQUFQLElBQVMsQ0FBUCxLQUFLOztBQUNaLFdBQ0U7O1FBQUksU0FBTSxhQUFhO01BQ25CLEtBQUssQ0FBQyxRQUFRO0tBQ2IsQ0FDTDtHQUNIO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7b0NDZG1CLHdCQUF3Qjs7OztrQ0FDdEIscUJBQXFCOzs7Ozs7Ozs0Q0FNMUIsaUNBQWlDOzs7OzRDQUNuQyxnQ0FBZ0M7Ozs7d0NBQzVCLDRCQUE0Qjs7Ozt3Q0FDNUIsNEJBQTRCOzs7O3NDQUM5QiwwQkFBMEI7Ozs7c0NBQzFCLDBCQUEwQjs7OztzQ0FDMUIsMEJBQTBCOzs7O3NDQUMxQiwwQkFBMEI7Ozs7cUNBQzNCLHlCQUF5Qjs7OztxQ0FDekIseUJBQXlCOzs7O3FDQUN6Qix5QkFBeUI7Ozs7b0NBQzFCLHdCQUF3Qjs7Ozs7Ozs7QUFNdkMsSUFBSSxTQUFTLEdBQUcscUNBQWUsQ0FDNUIsR0FBRyx1Q0FBUSxDQUNYLEdBQUcsdUNBQVEsQ0FDWCxHQUFHLHFDQUFNLENBQ1QsR0FBRyxxQ0FBTSxDQUNULEdBQUcscUNBQU0sQ0FDVCxHQUFHLHFDQUFNLENBQ1QsR0FBRywyQ0FBTSxDQUNULEdBQUcsb0NBQUssQ0FDUixHQUFHLG9DQUFLLENBQ1IsR0FBRyxvQ0FBSyxDQUNSLEdBQUcsMkNBQUksQ0FDUCxHQUFHLG1DQUFJLENBQUM7Ozs7OztxQkFNSTtBQUNiLFdBQVMsRUFBRTtBQUNULFlBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7R0FDN0I7O0FBRUQsUUFBTSxFQUFBLGdCQUFDLElBQVMsRUFBRTtRQUFULEtBQUssR0FBUCxJQUFTLENBQVAsS0FBSztRQUNOLFFBQVEsR0FBZSxLQUFLLENBQTVCLFFBQVE7UUFBRSxRQUFRLEdBQUssS0FBSyxDQUFsQixRQUFROztBQUV4QixRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsUUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBRWhFLFdBQ0U7O1FBQUssU0FBTSxhQUFhO01BQ3RCLGlEQUFNLFNBQU0sa0JBQWtCLEVBQUMsU0FBUyxFQUFHLGFBQWEsQUFBRSxHQUNuRDtLQUNILENBQ047R0FDSDtDQUNGOzs7Ozs7O0FDM0RELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7O0FBTXBDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOzs7Ozs7QUFNM0IsU0FBUyxTQUFTLEdBQUU7QUFDbEIsTUFBSSxFQUFFLElBQUksWUFBWSxTQUFTLENBQUEsQUFBQyxFQUFFLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUN6RCxNQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNwQixNQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0NBQzNCOzs7Ozs7Ozs7QUFTRCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFTLE1BQU0sRUFBQztBQUN4QyxRQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDYixTQUFPLElBQUksQ0FBQztDQUNiLENBQUM7Ozs7Ozs7OztBQVNGLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsTUFBTSxFQUFDO0FBQzNDLE1BQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUMzQyxNQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUN0QixTQUFPLElBQUksQ0FBQztDQUNiLENBQUE7Ozs7Ozs7Ozs7QUFVRCxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFTLFFBQVEsRUFBRSxPQUFPLEVBQUM7QUFDeEQsTUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDbkMsU0FBTyxJQUFJLENBQUM7Q0FDYixDQUFDOzs7Ozs7Ozs7O0FBVUYsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBUyxNQUFNLEVBQUUsUUFBUSxFQUFDO0FBQ3JELE1BQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLE1BQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsU0FBTyxHQUFHLENBQUM7Q0FDWixDQUFDOzs7Ozs7Ozs7QUFTRixTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUM7QUFDbEQsTUFBSSxRQUFRLElBQUksT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0QsTUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1RCxJQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztDQUNwQixDQUFDOzs7Ozs7Ozs7QUFTRixTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFTLEdBQUcsRUFBRSxRQUFRLEVBQUM7QUFDcEQsTUFBSSxRQUFRLElBQUksT0FBTyxHQUFHLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztDQUNsRSxDQUFDOzs7Ozs7QUFNRixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxZQUFVO0FBQ2xDLE1BQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUM1RCxNQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFDakUsTUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0NBQzlELENBQUM7Ozs7Ozs7Ozs7QUFVRixTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFTLE1BQU0sRUFBRSxPQUFPLEVBQUM7QUFDbkQsTUFBSSxRQUFRLElBQUksT0FBTyxPQUFPLEVBQUU7QUFDOUIsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ25CLFdBQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLFFBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7R0FDbEU7O0FBRUQsTUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDeEQsTUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUN2QixNQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUVuQixPQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixRQUFJLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEIsUUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7O0FBRWxDLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ25DLFVBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixVQUFJLFFBQVEsSUFBSSxPQUFPLEdBQUcsRUFBRSxTQUFTO0FBQ3JDLFVBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsVUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTOztBQUVqQixVQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsVUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLFVBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakQsVUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsVUFBSSxLQUFLLEdBQUc7QUFDVixZQUFJLEVBQUUsR0FBRztBQUNULGFBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRO09BQ3RFLENBQUM7O0FBRUYsVUFBSSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QixVQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pCLFVBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsU0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWixDQUFBOzs7Ozs7Ozs7QUFTRCxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFTLEdBQUcsRUFBQztBQUMzQyxNQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDM0IsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixTQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxDQUFDLEVBQUM7QUFDeEIsUUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLEVBQUUsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsUUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNsQixRQUFJLEtBQUssR0FBRyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsS0FBSyxHQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FDdkIsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQixXQUFPLGVBQWUsR0FBRyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDO0dBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDYixDQUFDOzs7Ozs7QUFNRixJQUFJLE9BQU8sR0FBRywwQkFBMEIsQ0FBQzs7Ozs7Ozs7OztBQVV6QyxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUM7QUFDZixNQUFJLENBQUMsRUFBRSxFQUFFLE9BQU87QUFDaEIsTUFBSSxDQUFDLENBQUM7QUFDTixNQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzlFLE1BQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELFNBQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztDQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7Ozs7Ozs7Ozs7QUFVNUIsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQ3hCLFNBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUNoQixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUN2QixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQzFCOzs7Ozs7Ozs7OztBQ3ZCRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7O0FBUzVCLFNBQVMsVUFBVSxDQUFDLFNBQVMsRUFBQztBQUM1QixXQUFTLENBQ04sUUFBUSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FDbkMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztDQUNqQzs7Ozs7O0FBTUQsVUFBVSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7Ozs7OztBQU1wQyxVQUFVLENBQUMsT0FBTyxHQUFHLDBCQUEwQixDQUFDOzs7Ozs7QUFNaEQsVUFBVSxDQUFDLE9BQU8sR0FBRyx1Q0FBdUMsQ0FBQzs7Ozs7O0FBTTdELFVBQVUsU0FBTSxHQUFHLDBDQUEwQyxDQUFDO0FBQzlELFVBQVUsU0FBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxDQUFDOzs7Ozs7QUFNN0UsVUFBVSxDQUFDLE9BQU8sR0FBRywySEFBMkgsQ0FBQzs7Ozs7O0FBTWpKLFVBQVUsQ0FBQyxNQUFNLEdBQUcsaUNBQWlDLENBQUM7Ozs7OztBQU10RCxVQUFVLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDOzs7Ozs7QUFNckMsVUFBVSxDQUFDLFFBQVEsR0FBRyx5RkFBeUYsQ0FBQzs7Ozs7O0FBTWhILFVBQVUsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQ3BFekMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7O0FBUXhCLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBQztBQUN4QixXQUFTLENBQ04sUUFBUSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FDL0IsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztDQUM1Qjs7Ozs7O0FBTUQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFNakIsT0FBTyxDQUFDLE9BQU8sR0FBRyx1Q0FBdUMsQ0FBQzs7Ozs7O0FBTTFELE9BQU8sQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1yQyxPQUFPLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNckMsT0FBTyxDQUFDLE9BQU8sR0FBRyxxSkFBcUosQ0FBQzs7Ozs7O0FBTXhLLE9BQU8sQ0FBQyxRQUFRLEdBQUcsOEJBQThCLENBQUM7Ozs7Ozs7O0FBUWxELE9BQU8sWUFBUyxHQUFHO0FBQ2pCLFNBQU8sRUFBRSxTQUFTO0FBQ2xCLFVBQVEsRUFBRSxFQUFFO0NBQ2IsQ0FBQzs7QUFFRixPQUFPLFlBQVMsQ0FBQyxRQUFRLFNBQU0sR0FBRyxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLFlBQVMsQ0FBQyxRQUFRLFlBQVMsR0FBRyxPQUFPLENBQUM7QUFDN0MsT0FBTyxZQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Ozs7OztBQU03QyxPQUFPLENBQUMsTUFBTSxHQUFHLDREQUE0RCxDQUFDOzs7Ozs7QUFNOUUsT0FBTyxDQUFDLFFBQVEsR0FBRyx5RkFBeUYsQ0FBQzs7Ozs7O0FBTTdHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQ2pGdEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7OztBQVN4QixTQUFTLE1BQU0sQ0FBQyxTQUFTLEVBQUM7QUFDeEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckMsV0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEMsV0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDbEM7Ozs7OztBQU1ELE1BQU0sQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1wQyxNQUFNLENBQUMsT0FBTyxHQUFHLHVDQUF1QyxDQUFDOzs7Ozs7QUFNekQsTUFBTSxTQUFNLEdBQUcsY0FBYyxDQUFDO0FBQzlCLE1BQU0sU0FBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Ozs7O0FBTTdDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFBOzs7Ozs7QUFNOUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxzY0FBc2MsQ0FBQzs7Ozs7O0FBTXhkLE1BQU0sQ0FBQyxNQUFNLEdBQUcsMENBQTBDLENBQUM7Ozs7OztBQU0zRCxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztBQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Ozs7O0FBTS9DLE1BQU0sQ0FBQyxRQUFRLEdBQUcsNkpBQTZKLENBQUM7Ozs7OztBQU1oTCxNQUFNLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUNyRXJDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7QUFTeEIsU0FBUyxNQUFNLENBQUMsU0FBUyxFQUFDO0FBQ3hCLFdBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3RDOzs7Ozs7QUFNRCxNQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNckMsTUFBTSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQzs7Ozs7O0FBTXhDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1wQyxNQUFNLENBQUMsT0FBTyxHQUFHLDJLQUEySyxDQUFDOzs7Ozs7QUFPN0wsTUFBTSxTQUFNLEdBQUcsY0FBYyxDQUFDO0FBQzlCLE1BQU0sU0FBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Ozs7O0FBTTdDLE1BQU0sWUFBUyxHQUFHLFdBQVcsQ0FBQztBQUM5QixNQUFNLFlBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7Ozs7O0FBS2pELE1BQU0sQ0FBQyxNQUFNLEdBQUcsd0RBQXdELENBQUM7Ozs7OztBQU16RSxNQUFNLENBQUMsUUFBUSxHQUFHLGdHQUFnRyxDQUFDOzs7Ozs7QUFNbkgsTUFBTSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FDbkVyQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7O0FBU3RCLFNBQVMsSUFBSSxDQUFDLFNBQVMsRUFBQztBQUN0QixXQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNsQzs7Ozs7O0FBTUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Ozs7O0FBTWxDLElBQUksQ0FBQyxPQUFPLEdBQUcsdUNBQXVDLENBQUM7Ozs7OztBQU12RCxJQUFJLFNBQU0sR0FBRyxjQUFjLENBQUM7QUFDNUIsSUFBSSxTQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7Ozs7QUFNM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyw0VUFBNFUsQ0FBQzs7Ozs7O0FBTTVWLElBQUksQ0FBQyxNQUFNLEdBQUcsNkNBQTZDLENBQUM7Ozs7OztBQU01RCxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQzs7Ozs7O0FBTTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDOzs7Ozs7QUFNN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyx5RkFBeUYsQ0FBQzs7Ozs7O0FBTTFHLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQ25FbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVN0QixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0IsV0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsV0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDekM7Ozs7OztBQU1ELElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFBOzs7Ozs7QUFNekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQzs7Ozs7O0FBTWxDLElBQUksQ0FBQyxPQUFPLEdBQUcsOEhBQThILENBQUM7Ozs7OztBQU05SSxJQUFJLENBQUMsUUFBUSxHQUFHLHNDQUFzQyxDQUFDOzs7Ozs7QUFNdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxxU0FBcVMsQ0FBQzs7Ozs7Ozs7Ozs7QUMzQ3JULE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7QUFTdEIsU0FBUyxJQUFJLENBQUMsU0FBUyxFQUFDO0FBQ3RCLFdBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ2xDOzs7Ozs7QUFNRCxJQUFJLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDOzs7Ozs7QUFNbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQzs7Ozs7O0FBTWxDLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUM7Ozs7OztBQU1uQyxJQUFJLFNBQU0sR0FBRyxjQUFjLENBQUM7QUFDNUIsSUFBSSxTQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7Ozs7QUFNM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxpTUFBaU0sQ0FBQzs7Ozs7O0FBTWpOLElBQUksQ0FBQyxNQUFNLEdBQUcsNkRBQTZELENBQUM7Ozs7OztBQU01RSxJQUFJLFlBQVMsR0FBRyxXQUFXLENBQUM7QUFDNUIsSUFBSSxZQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDOzs7Ozs7QUFNL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyx5RkFBeUYsQ0FBQzs7Ozs7O0FBTTFHLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQ25FbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVN0QixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEMsV0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDbEM7Ozs7OztBQU1ELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDOzs7Ozs7QUFNOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7O0FBTS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDOzs7Ozs7QUFNM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7Ozs7OztBQU03QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7Ozs7O0FBTTlCLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7O0FDakRsQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFReEIsU0FBUyxNQUFNLENBQUMsU0FBUyxFQUFDO0FBQ3hCLFdBQVMsQ0FDTixRQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUN4QixRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQzlCOzs7Ozs7QUFNRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7Ozs7OztBQU1qQixPQUFPLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDOzs7Ozs7QUFNckMsT0FBTyxDQUFDLE1BQU0sR0FBRyxxQkFBcUIsQ0FBQzs7Ozs7O0FBTXZDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7Ozs7OztBQU1uQyxPQUFPLENBQUMsS0FBSyxHQUFHLHlCQUF5QixDQUFDOzs7Ozs7QUFNMUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7Ozs7OztBQU03QixJQUFJLFFBQVEsR0FBRztBQUNiLFFBQU0sRUFBRSxpQkFBaUI7QUFDekIsYUFBVyxFQUFFLGlCQUFpQjtBQUM5QixNQUFJLEVBQUUsVUFBVTtBQUNoQixXQUFTLEVBQUUsU0FBUztDQUNyQixDQUFDOztBQUVGLE9BQU8sQ0FBQyxHQUFHLEdBQUc7QUFDWixTQUFPLEVBQUUsbUVBQW1FO0FBQzVFLFVBQVEsRUFBRSxRQUFRO0NBQ25CLENBQUM7Ozs7Ozs7Ozs7O0FDaEVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7QUFTckIsU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFDO0FBQ3JCLFdBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLFdBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ2hDOzs7Ozs7QUFNRCxHQUFHLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDOzs7Ozs7QUFNakMsR0FBRyxDQUFDLE9BQU8sR0FBRyw2Q0FBNkMsQ0FBQzs7Ozs7O0FBTTVELEdBQUcsU0FBTSxHQUFHLGNBQWMsQ0FBQztBQUMzQixHQUFHLFNBQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7OztBQU0xQyxHQUFHLENBQUMsT0FBTyxHQUFHLDRkQUE0ZCxDQUFDOzs7Ozs7QUFNM2UsR0FBRyxDQUFDLE1BQU0sR0FBRyxzREFBc0QsQ0FBQzs7Ozs7O0FBTXBFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7Ozs7OztBQU1qQyxHQUFHLFlBQVMsR0FBRyxXQUFXLENBQUM7QUFDM0IsR0FBRyxZQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDOzs7Ozs7QUFNOUMsR0FBRyxDQUFDLFFBQVEsR0FBRyx5RkFBeUYsQ0FBQzs7Ozs7O0FBTXpHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDOzs7Ozs7Ozs7OztBQ3BFakMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7O0FBUXhCLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBQztBQUN4QixXQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztDQUNwQzs7Ozs7O0FBTUQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFNakIsT0FBTyxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQzs7Ozs7O0FBTXRDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDOzs7Ozs7QUFNOUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFdBQVcsQ0FBQzs7Ozs7O0FBTWpDLE9BQU8sQ0FBQyxRQUFRLEdBQUc7QUFDakIsU0FBTyxFQUFFLHVCQUF1QjtBQUNoQyxVQUFRLEVBQUU7QUFDUixhQUFPLFdBQVc7QUFDbEIsTUFBRSxFQUFFLFNBQVM7QUFDYixvQkFBZ0IsRUFBRSw0REFBNEQ7QUFDOUUsa0JBQWMsRUFBRSxrQkFBa0I7QUFDbEMsZUFBVyxFQUFFLElBQUk7R0FDbEI7Q0FDRixDQUFDOzs7Ozs7QUFNRixPQUFPLFlBQVMsR0FBRztBQUNqQixTQUFPLEVBQUUsVUFBVTtBQUNuQixVQUFRLEVBQUU7QUFDUixlQUFXLEVBQUUsSUFBSTtHQUNsQjtDQUNGLENBQUM7Ozs7OztBQU1GLE9BQU8sQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7Ozs7OztBQU1wQyxPQUFPLENBQUMsT0FBTyxHQUFHLG9EQUFvRCxDQUFDOzs7Ozs7QUFNdkUsT0FBTyxDQUFDLE1BQU0sR0FBRyxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBTWxELE9BQU8sQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDOzs7Ozs7QUFNL0IsT0FBTyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Ozs7OztBQU1sQyxPQUFPLENBQUMsUUFBUSxHQUFHLHNHQUFzRyxDQUFDOzs7Ozs7Ozs7OztBQ2hHMUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7O0FBUXhCLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBQztBQUN4QixXQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztDQUNuQzs7Ozs7O0FBTUQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFNakIsT0FBTyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQzs7Ozs7O0FBTXJDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsdUNBQXVDLENBQUM7Ozs7OztBQU0xRCxPQUFPLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDOzs7Ozs7QUFNckMsT0FBTyxDQUFDLE9BQU8sR0FBRyxpS0FBaUssQ0FBQzs7Ozs7Ozs7QUFRcEwsT0FBTyxZQUFTLEdBQUc7QUFDakIsU0FBTyxFQUFFLFNBQVM7QUFDbEIsVUFBUSxFQUFFLEVBQUU7Q0FDYixDQUFDOztBQUVGLE9BQU8sWUFBUyxDQUFDLFFBQVEsU0FBTSxHQUFHLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sWUFBUyxDQUFDLFFBQVEsWUFBUyxHQUFHLE9BQU8sQ0FBQztBQUM3QyxPQUFPLFlBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7Ozs7O0FBTTdDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsNERBQTRELENBQUM7Ozs7OztBQU05RSxPQUFPLENBQUMsUUFBUSxHQUFHLHlGQUF5RixDQUFDOzs7Ozs7QUFNN0csT0FBTyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztvQ0M5RWxCLHdCQUF3Qjs7Ozs7Ozs7cUJBTTdCO0FBQ2IsV0FBUyxFQUFFO0FBQ1QsWUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtBQUM5QixTQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0dBQ3pCOztBQUVELFFBQU0sRUFBQSxnQkFBQyxJQUFnQixFQUFFLFdBQVcsRUFBRTtRQUE3QixLQUFLLEdBQVAsSUFBZ0IsQ0FBZCxLQUFLO1FBQUUsS0FBSyxHQUFkLElBQWdCLENBQVAsS0FBSztRQUNiLEtBQUssR0FBZSxLQUFLLENBQXpCLEtBQUs7UUFBRSxRQUFRLEdBQUssS0FBSyxDQUFsQixRQUFRO1FBQ2YsVUFBVSxHQUFLLEtBQUssQ0FBcEIsVUFBVTs7QUFFaEIsUUFBSSxXQUFXLEdBQUcsVUFBVSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFekMsUUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFTLElBQUksRUFBRTtBQUN2QyxhQUNFOztVQUFLLFNBQU0sa0JBQWtCLEVBQUMsT0FBTyxFQUFHLE9BQU8sQUFBRSxFQUFDLE1BQU0sRUFBRyxXQUFXLEtBQUssSUFBSSxBQUFFO1FBQy9FOzs7VUFBTyxJQUFJO1NBQVE7T0FDZixDQUNOOztBQUVGLGVBQVMsT0FBTyxHQUFHO0FBQ2pCLG1CQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQyxZQUFJLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDOUI7S0FDRixDQUFDLENBQUM7O0FBRUgsV0FDRTs7UUFBSyxTQUFNLGFBQWE7TUFDcEIsU0FBUztLQUNQLENBQ047R0FDSDtDQUNGIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9kdW8iLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gb3V0ZXIobW9kdWxlcywgY2FjaGUsIGVudHJpZXMpe1xuXG4gIC8qKlxuICAgKiBHbG9iYWxcbiAgICovXG5cbiAgdmFyIGdsb2JhbCA9IChmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSkoKTtcblxuICAvKipcbiAgICogUmVxdWlyZSBgbmFtZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlcXVpcmUobmFtZSl7XG4gICAgaWYgKGNhY2hlW25hbWVdKSByZXR1cm4gY2FjaGVbbmFtZV0uZXhwb3J0cztcbiAgICBpZiAobW9kdWxlc1tuYW1lXSkgcmV0dXJuIGNhbGwobmFtZSwgcmVxdWlyZSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgZmluZCBtb2R1bGUgXCInICsgbmFtZSArICdcIicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgbW9kdWxlIGBpZGAgYW5kIGNhY2hlIGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVxdWlyZVxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNhbGwoaWQsIHJlcXVpcmUpe1xuICAgIHZhciBtID0gY2FjaGVbaWRdID0geyBleHBvcnRzOiB7fSB9O1xuICAgIHZhciBtb2QgPSBtb2R1bGVzW2lkXTtcbiAgICB2YXIgbmFtZSA9IG1vZFsyXTtcbiAgICB2YXIgZm4gPSBtb2RbMF07XG4gICAgdmFyIHRocmV3ID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICBmbi5jYWxsKG0uZXhwb3J0cywgZnVuY3Rpb24ocmVxKXtcbiAgICAgICAgdmFyIGRlcCA9IG1vZHVsZXNbaWRdWzFdW3JlcV07XG4gICAgICAgIHJldHVybiByZXF1aXJlKGRlcCB8fCByZXEpO1xuICAgICAgfSwgbSwgbS5leHBvcnRzLCBvdXRlciwgbW9kdWxlcywgY2FjaGUsIGVudHJpZXMpO1xuICAgICAgdGhyZXcgPSBmYWxzZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKHRocmV3KSB7XG4gICAgICAgIGRlbGV0ZSBjYWNoZVtpZF07XG4gICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgICAgLy8gZXhwb3NlIGFzICduYW1lJy5cbiAgICAgICAgY2FjaGVbbmFtZV0gPSBjYWNoZVtpZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlW2lkXS5leHBvcnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVpcmUgYWxsIGVudHJpZXMgZXhwb3NpbmcgdGhlbSBvbiBnbG9iYWwgaWYgbmVlZGVkLlxuICAgKi9cblxuICBmb3IgKHZhciBpZCBpbiBlbnRyaWVzKSB7XG4gICAgaWYgKGVudHJpZXNbaWRdKSB7XG4gICAgICBnbG9iYWxbZW50cmllc1tpZF1dID0gcmVxdWlyZShpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVpcmUoaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEdW8gZmxhZy5cbiAgICovXG5cbiAgcmVxdWlyZS5kdW8gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBFeHBvc2UgY2FjaGUuXG4gICAqL1xuXG4gIHJlcXVpcmUuY2FjaGUgPSBjYWNoZTtcblxuICAvKipcbiAgICogRXhwb3NlIG1vZHVsZXNcbiAgICovXG5cbiAgcmVxdWlyZS5tb2R1bGVzID0gbW9kdWxlcztcblxuICAvKipcbiAgICogUmV0dXJuIG5ld2VzdCByZXF1aXJlLlxuICAgKi9cblxuICAgcmV0dXJuIHJlcXVpcmU7XG59KSIsImltcG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgQ2hlY2tib3gsXG4gIEJ1dHRvbixcbiAgU2hhcGUsXG4gIFRhYmxlLFxuICBHcmlkLFxuICBDb2RlLFxuICBNZW51XG59IGZyb20gJy4vbGliJztcblxuZXhwb3J0IHtcbiAgVGV4dEZpZWxkLFxuICBDaGVja2JveCxcbiAgQnV0dG9uLFxuICBTaGFwZSxcbiAgVGFibGUsXG4gIEdyaWQsXG4gIENvZGUsXG4gIE1lbnVcbn07XG4iLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gJy4vdGV4dC1maWVsZCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9jaGVja2JveCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL3NoYXBlJztcbmltcG9ydCBUYWJsZSBmcm9tICcuL3RhYmxlJztcbmltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgQ29kZSBmcm9tICcuL2NvZGUnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcblxuZXhwb3J0IHtcbiAgVGV4dEZpZWxkLFxuICBDaGVja2JveCxcbiAgQnV0dG9uLFxuICBTaGFwZSxcbiAgVGFibGUsXG4gIEdyaWQsXG4gIENvZGUsXG4gIE1lbnVcbn07XG4iLCJpbXBvcnQgZWxlbWVudCBmcm9tICdkZWt1anMvdmlydHVhbC1lbGVtZW50JztcblxuLyoqXG4gKiBUZXh0RmllbGQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wVHlwZXM6IHtcbiAgICBwbGFjZWhvbGRlcjogeyB0eXBlOiAnc3RyaW5nJyB9XG4gIH0sXG5cbiAgcmVuZGVyKHsgcHJvcHMsIHN0YXRlIH0pIHtcbiAgICBsZXQgeyBwbGFjZWhvbGRlciB9ID0gcHJvcHM7XG5cbiAgICBsZXQgYXR0cnMgPSB7XG4gICAgICBjbGFzczogJ21hdHRlci1UZXh0RmllbGQnLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXQgeyAuLi5hdHRycyB9PlxuICAgICAgPC9pbnB1dD5cbiAgICApO1xuICB9XG59O1xuIiwiKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcudmlydHVhbEVsZW1lbnQgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIF9yZXF1aXJlPT1cImZ1bmN0aW9uXCImJl9yZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiBfcmVxdWlyZT09XCJmdW5jdGlvblwiJiZfcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgc2xpY2UgPSBfcmVxdWlyZSgnc2xpY2VkJylcbnZhciBmbGF0dGVuID0gX3JlcXVpcmUoJ2FycmF5LWZsYXR0ZW4nKVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gbGV0cyB1cyBjcmVhdGUgdmlydHVhbCBub2RlcyB1c2luZyBhIHNpbXBsZVxuICogc3ludGF4LiBJdCBpcyBjb21wYXRpYmxlIHdpdGggSlNYIHRyYW5zZm9ybXMgc28geW91IGNhbiB1c2VcbiAqIEpTWCB0byB3cml0ZSBub2RlcyB0aGF0IHdpbGwgY29tcGlsZSB0byB0aGlzIGZ1bmN0aW9uLlxuICpcbiAqIGxldCBub2RlID0gZWxlbWVudCgnZGl2JywgeyBpZDogJ2ZvbycgfSwgW1xuICogICBlbGVtZW50KCdhJywgeyBocmVmOiAnaHR0cDovL2dvb2dsZS5jb20nIH0sICdHb29nbGUnKVxuICogXSlcbiAqXG4gKiBZb3UgY2FuIGxlYXZlIG91dCB0aGUgYXR0cmlidXRlcyBvciB0aGUgY2hpbGRyZW4gaWYgZWl0aGVyXG4gKiBvZiB0aGVtIGFyZW4ndCBuZWVkZWQgYW5kIGl0IHdpbGwgZmlndXJlIG91dCB3aGF0IHlvdSdyZVxuICogdHJ5aW5nIHRvIGRvLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZWxlbWVudFxuXG4vKipcbiAqIENyZWF0ZSB2aXJ0dWFsIHRyZWVzIG9mIGNvbXBvbmVudHMuXG4gKlxuICogVGhpcyBjcmVhdGVzIHRoZSBuaWNlciBBUEkgZm9yIHRoZSB1c2VyLlxuICogSXQgdHJhbnNsYXRlcyB0aGF0IGZyaWVuZGx5IEFQSSBpbnRvIGFuIGFjdHVhbCB0cmVlIG9mIG5vZGVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7QXJyYXl9IGNoaWxkcmVuXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVsZW1lbnQgKHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKSB7XG4gIC8vIERlZmF1bHQgdG8gZGl2IHdpdGggbm8gYXJnc1xuICBpZiAoIXR5cGUpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbGVtZW50KCkgbmVlZHMgYSB0eXBlLicpXG4gIH1cblxuICAvLyBTa2lwcGVkIGFkZGluZyBhdHRyaWJ1dGVzIGFuZCB3ZSdyZSBwYXNzaW5nXG4gIC8vIGluIGNoaWxkcmVuIGluc3RlYWQuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICh0eXBlb2YgYXR0cmlidXRlcyA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShhdHRyaWJ1dGVzKSkpIHtcbiAgICBjaGlsZHJlbiA9IGF0dHJpYnV0ZXNcbiAgICBhdHRyaWJ1dGVzID0ge31cbiAgfVxuXG4gIC8vIEFjY291bnQgZm9yIEpTWCBwdXR0aW5nIHRoZSBjaGlsZHJlbiBhcyBtdWx0aXBsZSBhcmd1bWVudHMuXG4gIC8vIFRoaXMgaXMgZXNzZW50aWFsbHkganVzdCB0aGUgRVM2IHJlc3QgcGFyYW1cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGNoaWxkcmVuICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA9PT0gZmFsc2UpIHtcbiAgICBjaGlsZHJlbiA9IHNsaWNlKGFyZ3VtZW50cywgMilcbiAgfVxuXG4gIGNoaWxkcmVuID0gY2hpbGRyZW4gfHwgW11cbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMgfHwge31cblxuICAvLyBwYXNzaW5nIGluIGEgc2luZ2xlIGNoaWxkLCB5b3UgY2FuIHNraXBcbiAgLy8gdXNpbmcgdGhlIGFycmF5XG4gIGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBjaGlsZHJlbiA9IFtjaGlsZHJlbl1cbiAgfVxuXG4gIC8vIEZsYXR0ZW4gbmVzdGVkIGNoaWxkIGFycmF5cy4gVGhpcyBpcyBob3cgSlNYIGNvbXBpbGVzIHNvbWUgbm9kZXMuXG4gIGNoaWxkcmVuID0gZmxhdHRlbihjaGlsZHJlbiwgMilcblxuICAvLyBpZiB5b3UgcGFzcyBpbiBhIGZ1bmN0aW9uLCBpdCdzIGEgYENvbXBvbmVudGAgY29uc3RydWN0b3IuXG4gIC8vIG90aGVyd2lzZSBpdCdzIGFuIGVsZW1lbnQuXG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9XG59XG5cbn0se1wiYXJyYXktZmxhdHRlblwiOjIsXCJzbGljZWRcIjozfV0sMjpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogRXhwb3NlIGBhcnJheUZsYXR0ZW5gLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmxhdHRlblxuXG4vKipcbiAqIFJlY3Vyc2l2ZSBmbGF0dGVuIGZ1bmN0aW9uIHdpdGggZGVwdGguXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9ICByZXN1bHRcbiAqIEBwYXJhbSAge051bWJlcn0gZGVwdGhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmbGF0dGVuV2l0aERlcHRoIChhcnJheSwgcmVzdWx0LCBkZXB0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaV1cblxuICAgIGlmIChkZXB0aCA+IDAgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZsYXR0ZW5XaXRoRGVwdGgodmFsdWUsIHJlc3VsdCwgZGVwdGggLSAxKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogUmVjdXJzaXZlIGZsYXR0ZW4gZnVuY3Rpb24uIE9taXR0aW5nIGRlcHRoIGlzIHNsaWdodGx5IGZhc3Rlci5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSByZXN1bHRcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmbGF0dGVuRm9yZXZlciAoYXJyYXksIHJlc3VsdCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaV1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgZmxhdHRlbkZvcmV2ZXIodmFsdWUsIHJlc3VsdClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIEZsYXR0ZW4gYW4gYXJyYXksIHdpdGggdGhlIGFiaWxpdHkgdG8gZGVmaW5lIGEgZGVwdGguXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICBhcnJheVxuICogQHBhcmFtICB7TnVtYmVyfSBkZXB0aFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGFycmF5RmxhdHRlbiAoYXJyYXksIGRlcHRoKSB7XG4gIGlmIChkZXB0aCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZsYXR0ZW5Gb3JldmVyKGFycmF5LCBbXSlcbiAgfVxuXG4gIHJldHVybiBmbGF0dGVuV2l0aERlcHRoKGFycmF5LCBbXSwgZGVwdGgpXG59XG5cbn0se31dLDM6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IF9yZXF1aXJlKCcuL2xpYi9zbGljZWQnKTtcblxufSx7XCIuL2xpYi9zbGljZWRcIjo0fV0sNDpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXG4vKipcbiAqIEFuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykgYWx0ZXJuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXJncyBzb21ldGhpbmcgd2l0aCBhIGxlbmd0aFxuICogQHBhcmFtIHtOdW1iZXJ9IHNsaWNlXG4gKiBAcGFyYW0ge051bWJlcn0gc2xpY2VFbmRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJncywgc2xpY2UsIHNsaWNlRW5kKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuXG4gIGlmICgwID09PSBsZW4pIHJldHVybiByZXQ7XG5cbiAgdmFyIHN0YXJ0ID0gc2xpY2UgPCAwXG4gICAgPyBNYXRoLm1heCgwLCBzbGljZSArIGxlbilcbiAgICA6IHNsaWNlIHx8IDA7XG5cbiAgaWYgKHNsaWNlRW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZW4gPSBzbGljZUVuZCA8IDBcbiAgICAgID8gc2xpY2VFbmQgKyBsZW5cbiAgICAgIDogc2xpY2VFbmRcbiAgfVxuXG4gIHdoaWxlIChsZW4tLSA+IHN0YXJ0KSB7XG4gICAgcmV0W2xlbiAtIHN0YXJ0XSA9IGFyZ3NbbGVuXTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cblxufSx7fV19LHt9LFsxXSkoMSlcbn0pOyIsImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuXG4vKipcbiAqIENoZWNrYm94LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc2l6ZTogeyB0eXBlOiAnc3RyaW5nJywgZXhwZWN0czogWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSB9LFxuICAgIG9uQ2xpY2s6IHsgdHlwZTogJ2Z1bmN0aW9uJyB9LFxuICAgIGNoZWNrZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcyB9KSB7XG4gICAgbGV0IHsgc2l6ZSwgY2hlY2tlZCwgb25DbGljayB9ID0gcHJvcHM7XG4gICAgXG4gICAgbGV0IGF0dHJzID0ge1xuICAgICAgY2xhc3M6ICdtYXR0ZXItQ2hlY2tib3gnLFxuICAgICAgc2l6ZTogc2l6ZSB8fCAnbWVkaXVtJyxcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgdHlwZTogJ2NoZWNrYm94J1xuICAgIH07XG5cbiAgICByZXR1cm4gPGlucHV0IHsgLi4uYXR0cnMgfS8+XG4gIH1cbn07XG4iLCJpbXBvcnQgZWxlbWVudCBmcm9tICdkZWt1anMvdmlydHVhbC1lbGVtZW50JztcblxuLyoqXG4gKiBCdXR0b24uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wVHlwZXM6IHtcbiAgICB0eXBlOiB7IHR5cGU6ICdzdHJpbmcnLCBleHBlY3RzOiBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3dhcm5pbmcnXSB9LFxuICAgIHNpemU6IHsgdHlwZTogJ3N0cmluZycsIGV4cGVjdHM6IFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10gfSxcbiAgICBvbkNsaWNrOiB7IHR5cGU6ICdmdW5jdGlvbicgfSxcbiAgICBsYWJlbDogeyB0eXBlOiAnc3RyaW5nJyB9XG4gIH0sXG5cbiAgcmVuZGVyKHsgcHJvcHMgfSkge1xuICAgIGxldCB7IGxhYmVsLCBzaXplLCB0eXBlLCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICAgIGxldCBhdHRycyA9IHtcbiAgICAgIHR5cGU6IHR5cGUgfHwgJ3ByaW1hcnknLFxuICAgICAgc2l6ZTogc2l6ZSB8fCAnbWVkaXVtJyxcbiAgICAgIGNsYXNzOiAnbWF0dGVyLUJ1dHRvbicsXG4gICAgICBvbkNsaWNrOiBvbkNsaWNrXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHsgLi4uYXR0cnMgfT5cbiAgICAgICAgeyBsYWJlbCB9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5cbi8qKlxuICogU2hhcGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wVHlwZXM6IHtcbiAgICBjb2xvcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHNwYWNlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAga2luZDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHNpemU6IHsgdHlwZTogJ3N0cmluZycgfVxuICB9LFxuXG4gIHJlbmRlcih7IHByb3BzLCBzdGF0ZSB9LCB1cGRhdGVTdGF0ZSkge1xuICAgIGxldCB7IGNoaWxkcmVuLCBjb2xvciwgc3BhY2UsIGtpbmQsIHNpemUgfSA9IHByb3BzO1xuXG4gICAgbGV0IGF0dHJzID0ge1xuICAgICAgY2xhc3M6ICdtYXR0ZXItU2hhcGUnLFxuICAgICAga2luZDoga2luZCB8fCAncmVjdGFuZ2xlJyxcbiAgICAgIHNwYWNlOiBzcGFjZSB8fCAnbWVkaXVtJyxcbiAgICAgIHNpemU6IHNpemUgfHwgJ21lZGl1bScsXG4gICAgICBjb2xvcjogY29sb3IsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHsgLi4uYXR0cnMgfT5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5cbi8qKlxuICogVGFibGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wVHlwZXM6IHtcbiAgICByb3dzOiB7IHR5cGU6ICdhcnJheScgfVxuICB9LFxuXG4gIHJlbmRlcih7IHByb3BzLCBzdGF0ZSB9LCBzZXRTdGF0ZSkge1xuICAgIGxldCB7IHJvd3MgfSA9IHByb3BzO1xuXG4gICAgbGV0IHRhYmxlUm93cyA9IHJvd3MubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgICAgbGV0IHJvd0NlbGxzID0gcm93Lm1hcChmdW5jdGlvbihjZWxsKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHRkIGNsYXNzPSdtYXR0ZXItVGFibGUtY2VsbCcgY29sc3Bhbj0nMScgcm93c3Bhbj0nMSc+XG4gICAgICAgICAgICA8c3Bhbj57IGNlbGwgfTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx0ciBjbGFzcz0nbWF0dGVyLVRhYmxlLXJvdyc+XG4gICAgICAgICAgeyByb3dDZWxscyB9XG4gICAgICAgIDwvdHI+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzcz0nbWF0dGVyLVRhYmxlJyBjZWxscGFkZGluZz0nMCcgY2VsbHNwYWNpbmc9JzAnPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgeyB0YWJsZVJvd3MgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5cbi8qKlxuICogR3JpZC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlcih7IHByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzPSdtYXR0ZXItR3JpZCc+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQnO1xuXG4vKipcbiAqIExhbmd1YWdlcy5cbiAqL1xuXG5pbXBvcnQgb2JqYyBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LW9iamVjdGl2ZS1jJztcbmltcG9ydCBqcyBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LWphdmFzY3JpcHQnO1xuaW1wb3J0IGNzaGFycCBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LWNzaGFycCc7XG5pbXBvcnQgcHl0aG9uIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtcHl0aG9uJztcbmltcG9ydCBqYXZhIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtamF2YSc7XG5pbXBvcnQgYmFzaCBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LWJhc2gnO1xuaW1wb3J0IHJ1YnkgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1ydWJ5JztcbmltcG9ydCB5YW1sIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQteWFtbCc7XG5pbXBvcnQgeG1sIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQteG1sJztcbmltcG9ydCBwaHAgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1waHAnO1xuaW1wb3J0IGNzcyBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LWNzcyc7XG5pbXBvcnQgZ28gZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1nbyc7XG5cbi8qKlxuICogSGlnaGxpZ2h0LlxuICovXG5cbmxldCBoaWdobGlnaHQgPSBuZXcgSGlnaGxpZ2h0KClcbiAgLnVzZShweXRob24pXG4gIC51c2UoY3NoYXJwKVxuICAudXNlKHlhbWwpXG4gIC51c2UoamF2YSlcbiAgLnVzZShydWJ5KVxuICAudXNlKGJhc2gpXG4gIC51c2Uob2JqYylcbiAgLnVzZSh4bWwpXG4gIC51c2UoY3NzKVxuICAudXNlKHBocClcbiAgLnVzZShqcylcbiAgLnVzZShnbyk7XG5cbi8qKlxuICogQ29kZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BUeXBlczoge1xuICAgIGxhbmd1YWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcyB9KSB7XG4gICAgbGV0IHsgbGFuZ3VhZ2UsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgIGxldCB1bmZvcm1hdHRlZENvZGUgPSBjaGlsZHJlblswXTtcbiAgICBsZXQgZm9ybWF0dGVkQ29kZSA9IGhpZ2hsaWdodC5zdHJpbmcodW5mb3JtYXR0ZWRDb2RlLCBsYW5ndWFnZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz0nbWF0dGVyLUNvZGUnPlxuICAgICAgICA8Y29kZSBjbGFzcz0nbWF0dGVyLUNvZGUtY29kZScgaW5uZXJIVE1MPXsgZm9ybWF0dGVkQ29kZSB9PlxuICAgICAgICA8L2NvZGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuIiwiXG52YXIgZXNjYXBlID0gcmVxdWlyZSgnZXNjYXBlLWh0bWwnKTtcblxuLyoqXG4gKiBFeHBvc2UgYEhpZ2hsaWdodGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBIaWdobGlnaHQ7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgSGlnaGxpZ2h0YCBpbnN0YW5jZS5cbiAqL1xuXG5mdW5jdGlvbiBIaWdobGlnaHQoKXtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEhpZ2hsaWdodCkpIHJldHVybiBuZXcgSGlnaGxpZ2h0KCk7XG4gIHRoaXMubGFuZ3VhZ2VzID0ge307XG4gIHRoaXMucHJlZml4KCdIaWdobGlnaHQtJyk7XG59XG5cbi8qKlxuICogVXNlIGEgYHBsdWdpbmAgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luXG4gKiBAcmV0dXJuIHtIaWdobGlnaHR9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbihwbHVnaW4pe1xuICBwbHVnaW4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgb3Igc2V0IHRoZSBoaWdobGlnaHRlZCBjbGFzcyBgcHJlZml4YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJlZml4XG4gKiBAcmV0dXJuIHtIaWdobGlnaHQgb3IgU3RyaW5nfVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUucHJlZml4ID0gZnVuY3Rpb24ocHJlZml4KXtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB0aGlzLl9wcmVmaXggPSBwcmVmaXg7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIERlZmluZSBhIG5ldyBgbGFuZ3VhZ2VgIHdpdGggYSBgZ3JhbW1hcmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlXG4gKiBAcGFyYW0ge09iamVjdH0gZ3JhbW1hclxuICogQHJldHVybiB7SGlnaGxpZ2h0fVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUubGFuZ3VhZ2UgPSBmdW5jdGlvbihsYW5ndWFnZSwgZ3JhbW1hcil7XG4gIHRoaXMubGFuZ3VhZ2VzW2xhbmd1YWdlXSA9IGdyYW1tYXI7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHQgYW4gSFRNTCBgc3RyaW5nYCBvZiBhIGdpdmVuIGBsYW5ndWFnZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5zdHJpbmcgPSBmdW5jdGlvbihzdHJpbmcsIGxhbmd1YWdlKXtcbiAgdmFyIGFzdCA9IHRoaXMucGFyc2Uoc3RyaW5nLCBsYW5ndWFnZSk7XG4gIHZhciBzdHIgPSB0aGlzLnN0cmluZ2lmeShhc3QpO1xuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHQgYW4gYGVsYCwgd2l0aCBvcHRpb25hbCBgbGFuZ3VhZ2VgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudCBvciBTdHJpbmd9IGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2UgKG9wdGlvbmFsKVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUuZWxlbWVudCA9IGZ1bmN0aW9uKGVsLCBsYW5ndWFnZSl7XG4gIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZWwpIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gIHZhciBzdHIgPSB0aGlzLnN0cmluZyhlbC50ZXh0Q29udGVudCwgbGFuZ3VhZ2UgfHwgbGFuZyhlbCkpO1xuICBlbC5pbm5lckhUTUwgPSBzdHI7XG59O1xuXG4vKipcbiAqIEhpZ2hsaWdodCBhbiBhcnJheSBvZiBgZWxzYCwgd2l0aCBvcHRpb25hbCBgbGFuZ3VhZ2VgLlxuICpcbiAqIEBwYXJhbSB7QXJyYXkgb3IgU3RyaW5nfSBlbHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZSAob3B0aW9uYWwpXG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5lbGVtZW50cyA9IGZ1bmN0aW9uKGVscywgbGFuZ3VhZ2Upe1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGVscykgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbHMpO1xuICBmb3IgKHZhciBpID0gMCwgZWw7IGVsID0gZWxzW2ldOyBpKyspIHRoaXMuZWxlbWVudChlbCwgbGFuZ3VhZ2UpO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHQgYWxsIGVsZW1lbnRzIGluIHRoZSBET00gd2l0aCBsYW5ndWFnZSBhdHRyaWJ1dGVzLlxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5lbGVtZW50cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sYW5ndWFnZV0nKSk7XG4gIHRoaXMuZWxlbWVudHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImxhbmd1YWdlLVwiXScpKTtcbiAgdGhpcy5lbGVtZW50cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwibGFuZy1cIl0nKSk7XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgYHN0cmluZ2Agd2l0aCBhIGdpdmVuIGxhbmd1YWdlJ3MgYGdyYW1tYXJgLCByZXR1cm5pbmcgYW4gQVNULlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nIG9yIE9iamVjdH0gZ3JhbW1hclxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHN0cmluZywgZ3JhbW1hcil7XG4gIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZ3JhbW1hcikge1xuICAgIHZhciBsYW5nID0gZ3JhbW1hcjtcbiAgICBncmFtbWFyID0gdGhpcy5sYW5ndWFnZXNbbGFuZ107XG4gICAgaWYgKCFncmFtbWFyKSB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gbGFuZ3VhZ2UgXCInICsgbGFuZyArICdcIicpO1xuICB9XG5cbiAgaWYgKCFncmFtbWFyKSB0aHJvdyBuZXcgRXJyb3IoJ211c3QgcHJvdmlkZSBhIGdyYW1tYXInKTtcbiAgaWYgKCFzdHJpbmcpIHJldHVybiBbXTtcbiAgdmFyIHJldCA9IFtzdHJpbmddO1xuXG4gIGZvciAodmFyIGtleSBpbiBncmFtbWFyKSB7XG4gICAgdmFyIHJ1bGUgPSBncmFtbWFyW2tleV07XG4gICAgdmFyIHJlZ2V4cCA9IHJ1bGUucGF0dGVybiB8fCBydWxlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzdHIgPSByZXRbaV07XG4gICAgICBpZiAoJ29iamVjdCcgPT0gdHlwZW9mIHN0cikgY29udGludWU7XG4gICAgICB2YXIgbSA9IHJlZ2V4cC5leGVjKHN0cik7XG4gICAgICBpZiAoIW0pIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgY29udGVudHMgPSBtWzBdO1xuICAgICAgdmFyIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBtLmluZGV4KTtcbiAgICAgIHZhciBhZnRlciA9IHN0ci5zbGljZShtLmluZGV4ICsgY29udGVudHMubGVuZ3RoKTtcbiAgICAgIHZhciBhcmdzID0gW2ksIDFdO1xuICAgICAgdmFyIHRva2VuID0ge1xuICAgICAgICB0eXBlOiBrZXksXG4gICAgICAgIHZhbHVlOiBydWxlLmNoaWxkcmVuID8gdGhpcy5wYXJzZShjb250ZW50cywgcnVsZS5jaGlsZHJlbikgOiBjb250ZW50c1xuICAgICAgfTtcblxuICAgICAgaWYgKGJlZm9yZSkgYXJncy5wdXNoKGJlZm9yZSk7XG4gICAgICBhcmdzLnB1c2godG9rZW4pO1xuICAgICAgaWYgKGFmdGVyKSBhcmdzLnB1c2goYWZ0ZXIpO1xuICAgICAgcmV0LnNwbGljZS5hcHBseShyZXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogU3RyaW5naWZ5IGEgZ2l2ZW4gYGFzdGAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbihhc3Qpe1xuICB2YXIgcHJlZml4ID0gdGhpcy5wcmVmaXgoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHJldHVybiBhc3QubWFwKGZ1bmN0aW9uKHQpe1xuICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgdCkgcmV0dXJuIGVzY2FwZSh0KTtcbiAgICB2YXIgdHlwZSA9IHQudHlwZTtcbiAgICB2YXIgdmFsdWUgPSAnb2JqZWN0JyA9PSB0eXBlb2YgdC52YWx1ZVxuICAgICAgPyBzZWxmLnN0cmluZ2lmeSh0LnZhbHVlKVxuICAgICAgOiBlc2NhcGUodC52YWx1ZSk7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcmVmaXggKyB0eXBlICsgJ1wiPicgKyB2YWx1ZSArICc8L3NwYW4+JztcbiAgfSkuam9pbignJyk7XG59O1xuXG4vKipcbiAqIExhbmd1YWdlIGNsYXNzIG1hdGNoZXIuXG4gKi9cblxudmFyIG1hdGNoZXIgPSAvXFxibGFuZyg/OnVhZ2UpPy0oXFx3KylcXGIvaTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvZGUgbGFuZ3VhZ2UgZm9yIGEgZ2l2ZW4gYGVsYC4gRmlyc3QgbG9vayBmb3IgYSBgZGF0YS1sYW5ndWFnZWBcbiAqIGF0dHJpYnV0ZSwgdGhlbiBhIGBsYW5ndWFnZS0qYCBjbGFzcywgdGhlbiBzZWFyY2ggdXAgdGhlIERPTSB0cmVlIGZvciB0aGVtLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBsYW5nKGVsKXtcbiAgaWYgKCFlbCkgcmV0dXJuO1xuICB2YXIgbTtcbiAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1sYW5ndWFnZScpKSByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmd1YWdlJyk7XG4gIGlmIChtID0gbWF0Y2hlci5leGVjKGVsLmNsYXNzTmFtZSkpIHJldHVybiBtWzFdO1xuICByZXR1cm4gbGFuZ3VhZ2UoZWwucGFyZW50Tm9kZSk7XG59IiwiLyohXG4gKiBlc2NhcGUtaHRtbFxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZUh0bWw7XG5cbi8qKlxuICogRXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyBpbiB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGh0bWwuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlc2NhcGUgZm9yIGluc2VydGluZyBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWwpIHtcbiAgcmV0dXJuIFN0cmluZyhodG1sKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG4iLCJcbi8qKlxuICogRXhwb3NlIGBvYmplY3RpdmVDYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0aXZlQztcblxuLyoqXG4gKiBBZGQgYE9iamVjdGl2ZS1DYCBhcyBhIHBsdWdpbi5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIG9iamVjdGl2ZUMoaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0XG4gICAgLmxhbmd1YWdlKCdvYmplY3RpdmUtYycsIG9iamVjdGl2ZUMpXG4gICAgLmxhbmd1YWdlKCdvYmpjJywgb2JqZWN0aXZlQyk7XG59XG5cbi8qKlxuICogTWV0aG9kc1xuICovXG5cbm9iamVjdGl2ZUMubWV0aG9kID0gL1xcW1xcdysgKFxcdyspXFxdLztcblxuLyoqXG4gKiBCb29sZWFuc1xuICovXG5cbm9iamVjdGl2ZUMuYm9vbGVhbiA9IC9cXGIoeWVzfG5vfHRydWV8ZmFsc2UpXFxiL2k7XG5cbi8qKlxuICogQ29tbWVudHNcbiAqL1xuXG5vYmplY3RpdmVDLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoXFwvXFwqW1xcd1xcV10qP1xcKlxcL3xcXC9cXC8uKj8kKS9tO1xuXG4vKipcbiAqIENsYXNzZXNcbiAqL1xuXG5vYmplY3RpdmVDLmNsYXNzID0gL0AoaW1wbGVtZW50YXRpb258aW50ZXJmYWNlfGNsYXNzKSArKFxcdyspLztcbm9iamVjdGl2ZUMuY2xhc3MuY2hpbGRyZW4gPSB7IGtleXdvcmQ6IC9AKGltcGxlbWVudGF0aW9ufGludGVyZmFjZXxjbGFzcykvIH07XG5cbi8qKlxuICogS2V5d29yZHNcbiAqL1xuXG5vYmplY3RpdmVDLmtleXdvcmQgPSAvXFxiKHZvaWR8Y2hhcnxzaG9ydHxpbnR8bG9uZ3xmbG9hdHxkb3VibGV8c2lnbmVkfHVuc2lnbmVkfGlkfGNvbnN0fHZvbGF0aWxlfGlufG91dHxpbm91dHxieWNvcHl8YnlyZWZ8b25ld2F5fHNlbGZ8c3VwZXIpXFxiLztcblxuLyoqXG4gKiBOdW1iZXJzXG4gKi9cblxub2JqZWN0aXZlQy5udW1iZXIgPSAvXFxiQD9bLStdPygweFtBLUZhLWYwLTldK3xcXGQrKVxcYi87XG5cbi8qKlxuICogU3RyaW5nc1xuICovXG5cbm9iamVjdGl2ZUMuc3RyaW5nID0gLyhAP1wiKFxcXFw/LikqP1wiKS87XG5cbi8qKlxuICogT3BlcmF0b3JcbiAqL1xuXG5vYmplY3RpdmVDLm9wZXJhdG9yID0gLyhbLStdezEsMn18IXwmbHQ7PT98Pj0/fD17MSwzfXwmbHQ7ezEsMn18PnsxLDJ9fCgmYW1wOyl7MSwyfXxcXHx7MSwyfXxcXD98XFwqfFxcL3xcXH58XFxefFxcJSkvO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxub2JqZWN0aXZlQy5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC46XS87IiwiXG4vKipcbiAqIEV4cG9zZSBgcGx1Z2luYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpbjtcblxuLyoqXG4gKiBQbHVnaW4gdG8gaGlnaGxpZ2h0IEphdmFzY3JpcHQgY29kZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKi9cblxuZnVuY3Rpb24gcGx1Z2luKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodFxuICAgIC5sYW5ndWFnZSgnamF2YXNjcmlwdCcsIGdyYW1tYXIpXG4gICAgLmxhbmd1YWdlKCdqcycsIGdyYW1tYXIpO1xufVxuXG4vKipcbiAqIEdyYW1tYXIuXG4gKi9cblxudmFyIGdyYW1tYXIgPSB7fTtcblxuLyoqXG4gKiBDb21tZW50cy5cbiAqL1xuXG5ncmFtbWFyLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoXFwvXFwqW1xcd1xcV10qP1xcKlxcL3xcXC9cXC8uKj8kKS9tO1xuXG4vKipcbiAqIEJvb2xlYW5zLlxuICovXG5cbmdyYW1tYXIuYm9vbGVhbiA9IC9cXGIodHJ1ZXxmYWxzZSlcXGIvO1xuXG4vKipcbiAqIFN0cmluZ3MuXG4gKi9cblxuZ3JhbW1hci5zdHJpbmcgPSAvKChcInwnKShcXFxcPy4pKj9cXDIpLztcblxuLyoqXG4gKiBLZXl3b3Jkcy5cbiAqL1xuXG5ncmFtbWFyLmtleXdvcmQgPSAvXFxiKGJyZWFrfGNhdGNofGNvbnRpbnVlfGRlbGV0ZXxkb3xlbHNlfGZpbmFsbHl8Zm9yfGZ1bmN0aW9ufGlmfGlufGluc3RhbmNlb2Z8bGV0fG5ld3xudWxsfHJldHVybnx0aGlzfHNlbGZ8dGhyb3d8dHJ5fHR5cGVvZnx2YXJ8d2hpbGV8d2l0aHx5aWVsZClcXGIvO1xuXG4vKipcbiAqIENvbnN0YW50cy5cbiAqL1xuXG5ncmFtbWFyLmNvbnN0YW50ID0gL1xcYihkb2N1bWVudHx3aW5kb3d8Z2xvYmFsKVxcYi87XG5cbi8qKlxuICogRnVuY3Rpb25zLlxuICpcbiAqIENoaWxkcmVuIGFyZSBzZXQgc2VwYXJhdGVseSB0byBtYWludGFpbiBvcmRlcmluZy5cbiAqL1xuXG5ncmFtbWFyLmZ1bmN0aW9uID0ge1xuICBwYXR0ZXJuOiAvKFxcdyspXFwoLyxcbiAgY2hpbGRyZW46IHt9XG59O1xuXG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLmNsYXNzID0gL1xcYihbQS1aXVxcdyopXFxiLztcbmdyYW1tYXIuZnVuY3Rpb24uY2hpbGRyZW4uZnVuY3Rpb24gPSAvKFxcdyspLztcbmdyYW1tYXIuZnVuY3Rpb24uY2hpbGRyZW4ucHVuY3R1YXRpb24gPSAvXFwoLztcblxuLyoqXG4gKiBOdW1iZXJzLlxuICovXG5cbmdyYW1tYXIubnVtYmVyID0gL1xcYi0/KDB4W1xcZEEtRmEtZl0rfFxcZCpcXC4/XFxkKyhbRWVdLT9cXGQrKT98TmFOfC0/SW5maW5pdHkpXFxiLztcblxuLyoqXG4gKiBPcGVyYXRvcnMuXG4gKi9cblxuZ3JhbW1hci5vcGVyYXRvciA9IC8oWy0rXXsxLDJ9fCF8Jmx0Oz0/fD49P3w9ezEsM318Jmx0O3sxLDJ9fD57MSwyfXwoJmFtcDspezEsMn18XFx8ezEsMn18XFw/fFxcKnxcXC98XFx+fFxcXnxcXCUpLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvbi5cbiAqL1xuXG5ncmFtbWFyLnB1bmN0dWF0aW9uID0gL1t7fVtcXF07KCksLjpdLzsiLCJcbi8qKlxuICogRXhwb3NlIGBjc2hhcnBgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjc2hhcnA7XG5cbi8qKlxuICogQWRkIGBjc2hhcnBgIGFzIGEgcGx1Z2luLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3NoYXJwKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnY3NoYXJwJywgY3NoYXJwKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdjLXNoYXJwJywgY3NoYXJwKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdjIycsIGNzaGFycCk7XG59XG5cbi8qKlxuICogQm9vbGVhbnNcbiAqL1xuXG5jc2hhcnAuYm9vbGVhbiA9IC9cXGIodHJ1ZXxmYWxzZSlcXGIvO1xuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxuY3NoYXJwLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoXFwvXFwqW1xcd1xcV10qP1xcKlxcL3xcXC9cXC8uKj8kKS9tO1xuXG4vKipcbiAqIENsYXNzZXNcbiAqL1xuXG5jc2hhcnAuY2xhc3MgPSAvY2xhc3MgKyhcXHcrKS87XG5jc2hhcnAuY2xhc3MuY2hpbGRyZW4gPSB7IGtleXdvcmQ6IC9jbGFzcy8gfTtcblxuLyoqXG4gKiBTdHJpbmdzXG4gKi9cblxuY3NoYXJwLnN0cmluZyA9IC8oXCIoXFxcXD8uKSo/XCIpL1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxuY3NoYXJwLmtleXdvcmQgPSAvXFxiKGFic3RyYWN0fGJhc2V8Ym9vbHxicmVha3xieXRlfGNhc2V8Y2F0Y2h8Y2hhcnxjbGFzc3xjb25zdHxjb250aW51ZXxkZWNpbWFsfGRlZmF1bHR8ZGVsZWdhdGV8ZG98ZG91YmxlfGVsc2V8ZW51bXxldmVudHxleHBsaWNpdHxleHRlcm58ZmluYWxseXxmaXhlZHxmbG9hdHxmb3J8Zm9yZWFjaHxnb3RvfGlmfGltcGxpY2l0fGlufGludHxpbnRlcmZhY2V8aW50ZXJuYWx8bG9ja3xsb25nfG5hbWVzcGFjZXxudWxsfG9iamVjdHxvcGVyYXRvcnxvdXR8b3ZlcnJpZGV8cGFyYW1zfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWFkb25seXxyZWZ8cmV0dXJufHNieXRlfHNlYWxlZHxzaG9ydHxzdGFja2FsbG9jfHN0YXRpY3xzdHJpbmd8c3RydWN0fHN3aXRjaHx0aGlzfHRocm93fHRyeXx1aW50fHVsb25nfHVuc2FmZXx1c2hvcnR8dXNpbmd8dmlydHVhbHx2b2lkfHZvbGF0aWxlfHdoaWxlKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbmNzaGFycC5udW1iZXIgPSAvXFxiWy0rXT8oMHhbXFxkYS1mXSt8XFxkKlxcLj9cXGQrKGUtP1xcZCspPylcXGIvO1xuXG4vKipcbiAqIE1ldGhvZFxuICovXG5cbmNzaGFycC5tZXRob2QgPSAvKFxcdyspICpcXCgvO1xuY3NoYXJwLm1ldGhvZC5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG5cbi8qKlxuICogT3BlcmF0b3JzXG4gKi9cblxuY3NoYXJwLm9wZXJhdG9yID0gLyhhd2FpdHxhc3xpc3xuZXd8dHlwZW9mfGNoZWNrZWR8dW5jaGVja2VkfGRlZmF1bHR8ZGVsZWdhdGV8c2l6ZW9mfC0+fFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb25cbiAqL1xuXG5jc2hhcnAucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuOl0vOyIsIlxuLyoqXG4gKiBFeHBvc2UgYHB5dGhvbmBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHB5dGhvbjtcblxuLyoqXG4gKiBBZGQgYHB5dGhvbmAgYXMgYSBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHB5dGhvbihoaWdobGlnaHQpe1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ3B5dGhvbicsIHB5dGhvbik7XG59XG5cbi8qKlxuICogQ29tbWVudHNcbiAqL1xuXG5weXRob24uY29tbWVudCA9IC8oPyFcXFxcezJ9KSgjLio/JCkvbTtcblxuLyoqXG4gKiBTdHJpbmdzXG4gKi9cblxucHl0aG9uLnN0cmluZyA9IC8oKFwiXCJcInxcInwnKShcXFxcPy4pKj9cXDIpLztcblxuLyoqXG4gKiBCb29sZWFuc1xuICovXG5cbnB5dGhvbi5ib29sZWFuID0gL1xcYihUcnVlfEZhbHNlKVxcYi87XG5cbi8qKlxuICogS2V5d29yZHNcbiAqL1xuXG5weXRob24ua2V5d29yZCA9IC9cXGIoYW5kfGFzfGFzc2VydHxicmVha3xjbGFzc3xjb250aW51ZXxkZWZ8ZGVsfGVsaWZ8ZWxzZXxleGNlcHR8ZXhlY3xmaW5hbGx5fGZvcnxmcm9tfGdsb2JhbHxpZnxpbXBvcnR8aW58aXN8bGFtYmRhfG5vdHxvcnxwYXNzfHByaW50fHJhaXNlfHJldHVybnx0cnl8d2hpbGV8d2l0aHx5aWVsZClcXGIvO1xuXG5cbi8qKlxuICogQ2xhc3Nlc1xuICovXG5cbnB5dGhvbi5jbGFzcyA9IC9jbGFzcyArKFxcdyspLztcbnB5dGhvbi5jbGFzcy5jaGlsZHJlbiA9IHsga2V5d29yZDogL2NsYXNzLyB9O1xuXG4vKipcbiAqIEZ1bmN0aW9uc1xuICovXG5cbnB5dGhvbi5mdW5jdGlvbiA9IC8oXFx3KykgKlxcKC87XG5weXRob24uZnVuY3Rpb24uY2hpbGRyZW4gPSB7IHB1bmN0dWF0aW9uOiAvXFwoLyB9O1xuLyoqXG4gKiBOdW1iZXJzXG4gKi9cblxucHl0aG9uLm51bWJlciA9IC9cXGJbLStdPygweFthLWZBLUYwLTldK3wwYlswLTFdK3wwWzAtN10rfFsxLTldWzAtOV0qKVxcYi87XG5cbi8qKlxuICogT3BlcmF0b3JzXG4gKi9cblxucHl0aG9uLm9wZXJhdG9yID0gLyhbLStdezEsMn18IXwmbHQ7PT98Pj0/fD17MSwzfXwmbHQ7ezEsMn18PnsxLDJ9fCgmYW1wOyl7MSwyfXxcXHx7MSwyfXxcXD98XFwqfFxcL3xcXH58XFxefFxcJXxcXCpcXCo/PSkvO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxucHl0aG9uLnB1bmN0dWF0aW9uID0gL1t7fVtcXF07KCksLjpdLzsiLCJcbi8qKlxuICogRXhwb3NlIGBqYXZhYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gamF2YTtcblxuLyoqXG4gKiBBZGQgYGphdmFgIGFzIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBqYXZhKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnamF2YScsIGphdmEpO1xufVxuXG4vKipcbiAqIEJvb2xlYW5cbiAqL1xuXG5qYXZhLmJvb2xlYW4gPSAvXFxiKHRydWV8ZmFsc2UpXFxiLztcblxuLyoqXG4gKiBDb21tZW50XG4gKi9cblxuamF2YS5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JCkvbTtcblxuLyoqXG4gKiBDbGFzc1xuICovXG5cbmphdmEuY2xhc3MgPSAvY2xhc3MgKyhcXHcrKS87XG5qYXZhLmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvY2xhc3MvIH07XG5cbi8qKlxuICogS2V5d29yZHNcbiAqL1xuXG5qYXZhLmtleXdvcmQgPSAvXFxiKGFic3RyYWN0fGFzc2VydHxib29sZWFufGJyZWFrfGJ5dGV8Y2FzZXxjYXRjaHxjaGFyfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlZmF1bHR8ZG98ZG91YmxlfGVsc2V8ZW51bXxleHRlbmRzfGZpbmFsfGZpbmFsbHl8ZmxvYXR8Zm9yfGdvdG98aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW5zdGFuY2VvZnxpbnR8aW50ZXJmYWNlfGxvbmd8bmF0aXZlfG5ld3xwYWNrYWdlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdGF0aWNmcHxzdXBlcnxzd2l0Y2h8c3luY2hyb25pemVkfHRoaXN8dGhyb3d8dGhyb3dzfHRyYW5zaWVudHx0cnl8dm9pZHx2b2xhdGlsZXx3aGlsZSlcXGIvO1xuXG4vKipcbiAqIE51bWJlclxuICovXG5cbmphdmEubnVtYmVyID0gL1xcYlstK10/KDBbYnhdW1xcZGEtZl0rfFxcZCpcXC4/XFxkKyhlLT9cXGQrKT8pXFxiLztcblxuLyoqXG4gKiBTdHJpbmdcbiAqL1xuXG5qYXZhLnN0cmluZyA9IC8oXCIoXFxcXD8uKSo/XCIpLztcblxuLyoqXG4gKiBNZXRob2RcbiAqL1xuXG5qYXZhLm1ldGhvZCA9IC8oXFx3KykgKlxcKC87XG5qYXZhLm1ldGhvZC5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG5cbi8qKlxuICogT3BlcmF0b3JcbiAqL1xuXG5qYXZhLm9wZXJhdG9yID0gLyhbLStdezEsMn18IXwmbHQ7PT98Pj0/fD17MSwzfXwmbHQ7ezEsMn18PnsxLDJ9fCgmYW1wOyl7MSwyfXxcXHx7MSwyfXxcXD98XFwqfFxcL3xcXH58XFxefFxcJSkvO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxuamF2YS5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC46XS87IiwiXG4vKipcbiAqIEV4cG9zZSBgYmFzaGBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2g7XG5cbi8qKlxuICogQWRkIGBiYXNoYCBhcyBhIGxhbmd1YWdlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gYmFzaChoaWdobGlnaHQpe1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ3NoJywgYmFzaCk7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnYmFzaCcsIGJhc2gpO1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ3NoZWxsc2NyaXB0JywgYmFzaCk7XG59XG5cbi8qKlxuICogQ29tbWVudHNcbiAqL1xuXG5iYXNoLmNvbW1lbnQgPSAvKCMuKj8kKS9tXG5cbi8qKlxuICogU3RyaW5nc1xuICovXG5cbmJhc2guc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogS2V5d29yZHNcbiAqL1xuXG5iYXNoLmtleXdvcmQgPSAvXFxiKGlmfHRoZW58ZWxzZXxlbGlmfGZpfGZvcnxpbnxkb3xkb25lfHNlbGVjdHxjYXNlfGNvbnRpbnVlfGVzYWN8d2hpbGV8dW50aWx8cmV0dXJufGV4cG9ydHxkZWNsYXJlfHR5cGVzZXR8bG9jYWx8cmVhZG9ubHkpXFxiLztcblxuLyoqXG4gKiBPcGVyYXRvcnNcbiAqL1xuXG5iYXNoLm9wZXJhdG9yID0gLyg7fCYmP3xcXHxcXHx8PVs9fl0/fCE9P3wmbHQ7fCZndDt8XFx8KS87XG5cbi8qKlxuICogQnVpbHRpbnNcbiAqL1xuXG5iYXNoLmJ1aWx0aW4gPSAvXFxiKGFsaWFzfGJnfGJpbmR8YnJlYWt8YnVpbHRpbnxjYWxsZXJ8Y2R8Y29tbWFuZHxjb21wZ2VufGNvbXBsZXRlfGRpcnN8ZGlzb3dufGVjaG98ZW5hYmxlfGV2YWx8ZXhlY3xleGl0fGZhbHNlfGZjfGZnfGdldG9wdHN8aGFzaHxoZWxwfGhpc3Rvcnl8am9ic3xraWxsfGxldHxsb2dvdXR8cG9wZHxwcmludGZ8cHVzaGR8cHdkfHJlYWR8cmVhZG9ubHl8c2V0fHNoaWZ0fHNob3B0fHNvdXJjZXxzdXNwZW5kfHRlc3R8dGltZXN8dHJhcHx0cnVlfHR5cGV8dWxpbWl0fHVtYXNrfHVuYWxpYXN8dW5zZXR8d2FpdClcXGIvOyIsIlxuLyoqXG4gKiBFeHBvc2UgYHJ1YnlgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBydWJ5O1xuXG4vKipcbiAqIEFkZCBgcnVieWAgYXMgYSBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJ1YnkoaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdydWJ5JywgcnVieSk7XG59XG5cbi8qKlxuICogQm9vbGVhbnNcbiAqL1xuXG5ydWJ5LmJvb2xlYW4gPSAvXFxiKHRydWV8ZmFsc2UpXFxiLztcblxuLyoqXG4gKiBTdHJpbmdzXG4gKi9cblxucnVieS5zdHJpbmcgPSAvKChcInwnKShcXFxcPy4pKj9cXDIpLztcblxuLyoqXG4gKiBDb21tZW50c1xuICovXG5cbnJ1YnkuY29tbWVudCA9IC8oPyFcXFxcezJ9KSgjLio/JCkvbTtcblxuLyoqXG4gKiBDbGFzc2VzXG4gKi9cblxucnVieS5jbGFzcyA9IC9jbGFzcyArKFxcdyspLztcbnJ1YnkuY2xhc3MuY2hpbGRyZW4gPSB7IGtleXdvcmQ6IC9jbGFzcy8gfTtcblxuLyoqXG4gKiBLZXl3b3Jkc1xuICovXG5cbnJ1Ynkua2V5d29yZCA9IC9cXGIoYWxpYXN8YW5kfGJlZ2lufGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8ZGVmfGRvfGVsc2lmfGVsc2V8ZmFpbHxlbnN1cmV8Zm9yfGVuZHxpZnxpbnxtb2R1bGV8bmV4dHxub3R8b3J8cmFpc2V8cmVkb3xyZXNjdWV8cmV0cnl8cmV0dXJufHRoZW58dGhyb3d8c3VwZXJ8dW5sZXNzfHVuZGVmfHVudGlsfHdoZW58d2hpbGV8eWllbGQpXFxiLztcblxuLyoqXG4gKiBOdW1iZXJzXG4gKi9cblxucnVieS5udW1iZXIgPSAvXFxiWy0rXT8oMHhbYS1mQS1GMC05XSt8MGJbMC0xX10rfDBbMC03XSp8WzEtOV1bMC05X2VFLl0qKVxcYi87XG5cbi8qKlxuICogRnVuY3Rpb25zXG4gKi9cblxucnVieS5mdW5jdGlvbiA9IC8oXFx3KykgKlxcKC87XG5ydWJ5LmZ1bmN0aW9uLmNoaWxkcmVuID0geyBwdW5jdHVhdGlvbjogL1xcKC8gfTtcblxuLyoqXG4gKiBPcGVyYXRvclxuICovXG5cbnJ1Ynkub3BlcmF0b3IgPSAvKFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb25cbiAqL1xuXG5ydWJ5LnB1bmN0dWF0aW9uID0gL1t7fVtcXF07KCksLjpdLztcbiIsIlxuLyoqXG4gKiBFeHBvc2UgYHlhbWxgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB5YW1sO1xuXG4vKipcbiAqIEFkZCBgeWFtbGAgYXMgYSBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHlhbWwoaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCd5bWwnLCB5YW1sKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCd5YW1sJywgeWFtbCk7XG59XG5cbi8qKlxuICogQm9vbGVhblxuICovXG5cbnlhbWwuYm9vbGVhbiA9IC9cXGIoWWVzfE5vKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbnlhbWwubnVtYmVyID0gL1xcYihcXGQqXFwuXFxkKylcXGIvO1xuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxueWFtbC5jb21tZW50ID0gLygjW15cXG5dKikvO1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxueWFtbC5rZXl3b3JkID0gLyhcXHcrKTovO1xueWFtbC5rZXl3b3JkLmNoaWxkcmVuID0geyBwdW5jdHVhdGlvbjogLzovIH07XG5cbi8qKlxuICogUHVuY3R1YXRpb25cbiAqL1xuXG55YW1sLnB1bmN0dWF0aW9uID0gLyhbOnw+P10pLztcblxuLyoqXG4gKiBTdHJpbmdzXG4gKi9cblxueWFtbC5zdHJpbmcgPSAvKChcInwnKShcXFxcPy4pKj9cXDIpLztcbiIsIlxuLyoqXG4gKiBFeHBvc2UgYHBsdWdpbmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW47XG5cbi8qKlxuICogUGx1Z2luIHRvIGhpZ2hsaWdodCBYTUwgY29kZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKi9cblxuZnVuY3Rpb24gcGx1Z2luKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodFxuICAgIC5sYW5ndWFnZSgneG1sJywgZ3JhbW1hcilcbiAgICAubGFuZ3VhZ2UoJ2h0bWwnLCBncmFtbWFyKTtcbn1cblxuLyoqXG4gKiBHcmFtbWFyLlxuICovXG5cbnZhciBncmFtbWFyID0ge307XG5cbi8qKlxuICogQ29tbWVudHMuXG4gKi9cblxuZ3JhbW1hci5jb21tZW50ID0gLzwhLS1bXFx3XFxXXSo/LS0+L207XG5cbi8qKlxuICogRW50aXRpZXMuXG4gKi9cblxuZ3JhbW1hci5lbnRpdHkgPSAvJiM/W1xcZEEtWmEtel17MSw4fTsvO1xuXG4vKipcbiAqIERvY3R5cGVzLlxuICovXG5cbmdyYW1tYXIuZG9jdHlwZSA9IC88IURPQ1RZUEUuKz8+L2k7XG5cbi8qKlxuICogQ0RBVEEuXG4gKi9cblxuZ3JhbW1hci5jZGF0YSA9IC88IVxcW0NEQVRBXFxbW1xcd1xcV10qP11dPi9pO1xuXG4vKipcbiAqIFByb2xvZ3MuXG4gKi9cblxuZ3JhbW1hci5wcm9sb2cgPSAvPFxcPy4rP1xcPz4vO1xuXG4vKipcbiAqIFRhZ3MuIENoaWxkcmVuIGRlY2xhcmVkIHNlcGFyYXRlbHkgdG8gbWFpbnRhaW4gb3JkZXIuXG4gKi9cblxudmFyIGNoaWxkcmVuID0ge1xuICBzdHJpbmc6IC8oJ3xcIilbXFx3XFxXXSo/XFwxLyxcbiAgcHVuY3R1YXRpb246IC8oXjxcXC8/fFxcLz8+JHw9KS8sXG4gIG5hbWU6IC9eW1xcdzotXSsvLFxuICBhdHRyaWJ1dGU6IC9bXFx3Oi1dKy9cbn07XG5cbmdyYW1tYXIudGFnID0ge1xuICBwYXR0ZXJuOiAvPFxcLz9bXFx3Oi1dK1xccyooXFxzK1tcXHc6LV0rKD0oKFwifCcpW1xcd1xcV10qXFw0fFteXFxzJ1wiPj1dKykpP1xccyopKlxcLz8+LyxcbiAgY2hpbGRyZW46IGNoaWxkcmVuXG59OyIsIlxuLyoqXG4gKiBFeHBvc2UgYHBocGBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBocDtcblxuLyoqXG4gKiBBZGQgYHBocGAgYXMgYSBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBocChoaWdobGlnaHQpe1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ3BocCcsIHBocCk7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnUEhQJywgcGhwKTtcbn1cblxuLyoqXG4gKiBCb29sZWFuc1xuICovXG5cbnBocC5ib29sZWFuID0gL1xcYih0cnVlfGZhbHNlKVxcYi87XG5cbi8qKlxuICogQ29tbWVudHNcbiAqL1xuXG5waHAuY29tbWVudCA9IC8oPyFcXFxcezJ9KShcXC9cXCpbXFx3XFxXXSo/XFwqXFwvfFxcL1xcLy4qPyR8Iy4qPyQpL207XG5cbi8qKlxuICogQ2xhc3Nlc1xuICovXG5cbnBocC5jbGFzcyA9IC9jbGFzcyArKFxcdyspLztcbnBocC5jbGFzcy5jaGlsZHJlbiA9IHsga2V5d29yZDogL2NsYXNzLyB9O1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxucGhwLmtleXdvcmQgPSAvXFxiKF9faGFsdF9jb21waWxlcnxhYnN0cmFjdHxhbmR8YXJyYXl8YXN8YnJlYWt8Y2FsbGFibGV8Y2FzZXxjYXRjaHxjbGFzc3xjbG9uZXxjb25zdHxjb250aW51ZXxkZWNsYXJlfGRlZmF1bHR8ZGllfGRvfGVjaG98ZWxzZXxlbHNlaWZ8ZW1wdHl8ZW5kZGVjbGFyZXxlbmRmb3J8ZW5kZm9yZWFjaHxlbmRpZnxlbmRzd2l0Y2h8ZW5kd2hpbGV8ZXZhbHxleGl0fGV4dGVuZHN8ZmluYWx8ZmluYWxseXxmb3J8Zm9yZWFjaHxmdW5jdGlvbnxnbG9iYWx8Z290b3xpZnxpbXBsZW1lbnRzfGluY2x1ZGV8aW5jbHVkZV9vbmNlfGluc3RhbmNlb2Z8aW5zdGVhZG9mfGludGVyZmFjZXxpc3NldHxsaXN0fG5hbWVzcGFjZXxuZXd8b3J8cHJpbnR8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJlcXVpcmV8cmVxdWlyZV9vbmNlfHJldHVybnxzdGF0aWN8c3dpdGNofHRocm93fHRyYWl0fHRyeXx1bnNldHx1c2V8dmFyfHdoaWxlfHhvcnx5aWVsZClcXGIvO1xuXG4vKipcbiAqIE51bWJlcnNcbiAqL1xuXG5waHAubnVtYmVyID0gL1xcYlstK10/KDB4WzAtOWEtZkEtRl18MFswLTddK3wwYlswMV0rfFsxLTldWzAtOV0qKVxcYi87XG5cbi8qKlxuICogU3RyaW5nXG4gKi9cblxucGhwLnN0cmluZyA9IC8oKFwifCcpKFxcXFw/LikqP1xcMikvO1xuXG4vKipcbiAqIEZ1bmN0aW9uc1xuICovXG5cbnBocC5mdW5jdGlvbiA9IC8oXFx3KykgKlxcKC87XG5waHAuZnVuY3Rpb24uY2hpbGRyZW4gPSB7IHB1bmN0dWF0aW9uOiAvXFwoLyB9O1xuXG4vKipcbiAqIE9wZXJhdG9yc1xuICovXG5cbnBocC5vcGVyYXRvciA9IC8oWy0rXXsxLDJ9fCF8Jmx0Oz0/fD49P3w9ezEsM318Jmx0O3sxLDJ9fD57MSwyfXwoJmFtcDspezEsMn18XFx8ezEsMn18XFw/fFxcKnxcXC98XFx+fFxcXnxcXCUpLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvblxuICovXG5cbnBocC5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC5dLzsiLCJcbi8qKlxuICogRXhwb3NlIGBwbHVnaW5gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGx1Z2luO1xuXG4vKipcbiAqIFBsdWdpbiB0byBoaWdobGlnaHQgQ1NTIGNvZGUuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICovXG5cbmZ1bmN0aW9uIHBsdWdpbihoaWdobGlnaHQpe1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ2NzcycsIGdyYW1tYXIpO1xufVxuXG4vKipcbiAqIEdyYW1tYXIuXG4gKi9cblxudmFyIGdyYW1tYXIgPSB7fTtcblxuLyoqXG4gKiBDb21tZW50cy5cbiAqL1xuXG5ncmFtbWFyLmNvbW1lbnQgPSAvXFwvXFwqW1xcd1xcV10qP1xcKlxcLy9tO1xuXG4vKipcbiAqIFN0cmluZ3MuXG4gKi9cblxuZ3JhbW1hci5zdHJpbmcgPSAvKFwifCcpLio/XFwxLztcblxuLyoqXG4gKiBALXJ1bGVzLlxuICovXG5cbmdyYW1tYXJbJ2F0LXJ1bGUnXSA9IC9AW1xcdy1dK1xcYi87XG5cbi8qKlxuICogU2VsZWN0b3JzLlxuICovXG5cbmdyYW1tYXIuc2VsZWN0b3IgPSB7XG4gIHBhdHRlcm46IC9bXlxce1xcfVxcc11bXlxce1xcfTtdKj9cXHsvLFxuICBjaGlsZHJlbjoge1xuICAgIGNsYXNzOiAvXFwuWy0uXFx3XSsvLFxuICAgIGlkOiAvI1stXFx3XSsvLFxuICAgICdwc2V1ZG8tZWxlbWVudCc6IC86KGFmdGVyfGJlZm9yZXxmaXJzdC1sZXR0ZXJ8Zmlyc3QtbGluZXxzZWxlY3Rpb24pfDo6Wy1cXHddKy8sXG4gICAgJ3BzZXVkby1jbGFzcyc6IC86Wy1cXHddKyhcXCguKlxcKSk/LyxcbiAgICBwdW5jdHVhdGlvbjogL1xcey9cbiAgfVxufTtcblxuLyoqXG4gKiBGdW5jdGlvbnMuXG4gKi9cblxuZ3JhbW1hci5mdW5jdGlvbiA9IHtcbiAgcGF0dGVybjogL1tcXHctXStcXCgvLFxuICBjaGlsZHJlbjoge1xuICAgIHB1bmN0dWF0aW9uOiAvXFwoL1xuICB9XG59O1xuXG4vKipcbiAqIFByb3BlcnRpZXMuXG4gKi9cblxuZ3JhbW1hci5wcm9wZXJ0eSA9IC9bXFx3LV0rKD89XFxzKjopLztcblxuLyoqXG4gKiBLZXl3b3Jkcy5cbiAqL1xuXG5ncmFtbWFyLmtleXdvcmQgPSAvW1xcYnwhXWltcG9ydGFudHxpbml0aWFsfGluaGVyaXR8bm9uZXx0cmFuc3BhcmVudFxcYi87XG5cbi8qKlxuICogTnVtYmVycy5cbiAqL1xuXG5ncmFtbWFyLm51bWJlciA9IC8oI1tBLUZhLWZcXGRdezMsOH18XFxiXFxkKlxcLj9cXGQrKS87XG5cbi8qKlxuICogT3BlcmF0b3JzLlxuICovXG5cbmdyYW1tYXIub3BlcmF0b3IgPSAvWy0rXFwvKiVeXS87XG5cbi8qKlxuICogUHVuY3R1YXRpb24uXG4gKi9cblxuZ3JhbW1hci5wdW5jdHVhdGlvbiA9IC9be30oKSw6O10vO1xuXG4vKipcbiAqIENvbnN0YW50LlxuICovXG5cbmdyYW1tYXIuY29uc3RhbnQgPSAvKD8hXFxkKShjaHxjbXxkZWd8ZHBjbXxkcGl8ZHBweHxlbXxleHxncmFkfEh6fGtIenxpbnxtbXxwY3xwdHxweHxyYWR8cmVtfHN8bXN8dHVybnx2aHx2bWF4fHZtaW58dncpXFxiLztcbiIsIlxuLyoqXG4gKiBFeHBvc2UgYHBsdWdpbmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW47XG5cbi8qKlxuICogUGx1Z2luIHRvIGhpZ2hsaWdodCBnbyBjb2RlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqL1xuXG5mdW5jdGlvbiBwbHVnaW4oaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdnbycsIGdyYW1tYXIpO1xufVxuXG4vKipcbiAqIEdyYW1tYXIuXG4gKi9cblxudmFyIGdyYW1tYXIgPSB7fTtcblxuLyoqXG4gKiBTdHJpbmdzLlxuICovXG5cbmdyYW1tYXIuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogQ29tbWVudHMuXG4gKi9cblxuZ3JhbW1hci5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JCkvbTtcblxuLyoqXG4gKiBCb29sZWFucy5cbiAqL1xuXG5ncmFtbWFyLmJvb2xlYW4gPSAvXFxiKHRydWV8ZmFsc2UpXFxiLztcblxuLyoqXG4gKiBLZXl3b3Jkcy5cbiAqL1xuXG5ncmFtbWFyLmtleXdvcmQgPSAvXFxiKGJyZWFrfGRlZmF1bHR8ZnVuY3xpbnRlcmZhY2V8c2VsZWN0fGNhc2V8ZGVmZXJ8Z298bWFwfHN0cnVjdHxjaGFufWVsc2V9Z290b31wYWNrYWdlfHN3aXRjaHxjb25zdHxmYWxsdGhyb3VnaHxpZnxyYW5nZXx0eXBlfGNvbnRpbnVlfGZvcnxpbXBvcnR8cmV0dXJufHZhcilcXGIvO1xuXG4vKipcbiAqIEZ1bmN0aW9ucy5cbiAqXG4gKiBDaGlsZHJlbiBhcmUgc2V0IHNlcGFyYXRlbHkgdG8gbWFpbnRhaW4gb3JkZXJpbmcuXG4gKi9cblxuZ3JhbW1hci5mdW5jdGlvbiA9IHtcbiAgcGF0dGVybjogLyhcXHcrKVxcKC8sXG4gIGNoaWxkcmVuOiB7fVxufTtcblxuZ3JhbW1hci5mdW5jdGlvbi5jaGlsZHJlbi5jbGFzcyA9IC9cXGIoW0EtWl1cXHcqKVxcYi87XG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLmZ1bmN0aW9uID0gLyhcXHcrKS87XG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLnB1bmN0dWF0aW9uID0gL1xcKC87XG5cbi8qKlxuICogTnVtYmVycy5cbiAqL1xuXG5ncmFtbWFyLm51bWJlciA9IC9cXGItPygweFtcXGRBLUZhLWZdK3xcXGQqXFwuP1xcZCsoW0VlXS0/XFxkKyk/fE5hTnwtP0luZmluaXR5KVxcYi87XG5cbi8qKlxuICogT3BlcmF0b3JzLlxuICovXG5cbmdyYW1tYXIub3BlcmF0b3IgPSAvKFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb24uXG4gKi9cblxuZ3JhbW1hci5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC46XS87IiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5cbi8qKlxuICogTWVudS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BUeXBlczoge1xuICAgIG9uQ2hhbmdlOiB7IHR5cGU6ICdmdW5jdGlvbicgfSxcbiAgICBpdGVtczogeyB0eXBlOiAnYXJyYXknIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcywgc3RhdGUgfSwgdXBkYXRlU3RhdGUpIHtcbiAgICBsZXQgeyBpdGVtcywgb25DaGFuZ2UgfSA9IHByb3BzO1xuICAgIGxldCB7IGFjdGl2ZUl0ZW0gfSA9IHN0YXRlO1xuXG4gICAgbGV0IGN1cnJlbnRJdGVtID0gYWN0aXZlSXRlbSB8fCBpdGVtc1swXTtcblxuICAgIGxldCBtZW51SXRlbXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz0nbWF0dGVyLU1lbnUtaXRlbScgb25DbGljaz17IG9uQ2xpY2sgfSBhY3RpdmU9eyBjdXJyZW50SXRlbSA9PT0gaXRlbSB9PlxuICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICB1cGRhdGVTdGF0ZSh7IGFjdGl2ZUl0ZW06IGl0ZW0gfSk7XG4gICAgICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2UoaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz0nbWF0dGVyLU1lbnUnPlxuICAgICAgICB7IG1lbnVJdGVtcyB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuIl19