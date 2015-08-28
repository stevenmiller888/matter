(function outer(modules, cache, entries){

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

var _dekujsDeku = require('dekujs/deku');

var _lib = require('./lib');

var _examples = require('./examples');

var _examples2 = _interopRequireDefault(_examples);

/**
 * App.
 */

var App = {
  render: function render(_ref, updateState) {
    var props = _ref.props;
    var state = _ref.state;
    var examples = props.examples;

    var example = state.example || examples.Code;
    var items = Object.keys(examples);

    return (0, _dekujsVirtualElement2['default'])(
      'div',
      { 'class': 'App' },
      (0, _dekujsVirtualElement2['default'])(
        'div',
        { 'class': 'App-menu' },
        (0, _dekujsVirtualElement2['default'])(_lib.Menu, { items: items, onChange: changeExample })
      ),
      (0, _dekujsVirtualElement2['default'])(
        'div',
        { 'class': 'App-example' },
        (0, _dekujsVirtualElement2['default'])(
          'div',
          { 'class': 'App-example-component' },
          example.component
        ),
        (0, _dekujsVirtualElement2['default'])(
          'div',
          { 'class': 'App-example-code' },
          (0, _dekujsVirtualElement2['default'])(
            _lib.Code,
            { language: 'html' },
            example.code
          )
        )
      )
    );

    function changeExample(example) {
      updateState({ example: examples[example] });
    }
  }
};

var app = (0, _dekujsDeku.deku)((0, _dekujsVirtualElement2['default'])(App, { examples: _examples2['default'] }));
(0, _dekujsDeku.render)(app, document.querySelector('main'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7b0NBQW9CLHdCQUF3Qjs7OzswQkFDZixhQUFhOzttQkFDZixPQUFPOzt3QkFDYixZQUFZOzs7Ozs7OztBQU1qQyxJQUFJLEdBQUcsR0FBRztBQUNSLFFBQU0sRUFBQSxnQkFBQyxJQUFnQixFQUFFLFdBQVcsRUFBRTtRQUE3QixLQUFLLEdBQVAsSUFBZ0IsQ0FBZCxLQUFLO1FBQUUsS0FBSyxHQUFkLElBQWdCLENBQVAsS0FBSztRQUNiLFFBQVEsR0FBSyxLQUFLLENBQWxCLFFBQVE7O0FBQ2QsUUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdDLFFBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRWxDLFdBQ0U7O1FBQUssU0FBTSxLQUFLO01BQ2Q7O1VBQUssU0FBTSxVQUFVO1FBQ25CLG9EQUFNLEtBQUssRUFBRyxLQUFLLEFBQUUsRUFBQyxRQUFRLEVBQUcsYUFBYSxBQUFFLEdBQUU7T0FDOUM7TUFDTjs7VUFBSyxTQUFNLGFBQWE7UUFDdEI7O1lBQUssU0FBTSx1QkFBdUI7VUFDOUIsT0FBTyxDQUFDLFNBQVM7U0FDZjtRQUNOOztZQUFLLFNBQU0sa0JBQWtCO1VBQzNCOztjQUFNLFFBQVEsRUFBQyxNQUFNO1lBQ2pCLE9BQU8sQ0FBQyxJQUFJO1dBQ1Q7U0FDSDtPQUNGO0tBQ0YsQ0FDTjs7QUFFRixhQUFTLGFBQWEsQ0FBQyxPQUFPLEVBQUU7QUFDOUIsaUJBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzdDO0dBQ0Y7Q0FDRixDQUFDOztBQUVGLElBQUksR0FBRyxHQUFHLHNCQUFLLHVDQUFDLEdBQUcsSUFBQyxRQUFRLHVCQUFhLEdBQUUsQ0FBQyxDQUFDO0FBQzdDLHdCQUFPLEdBQUcsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IHsgZGVrdSwgcmVuZGVyIH0gZnJvbSAnZGVrdWpzL2Rla3UnO1xuaW1wb3J0IHsgTWVudSwgQ29kZSB9IGZyb20gJy4vbGliJztcbmltcG9ydCBleGFtcGxlcyBmcm9tICcuL2V4YW1wbGVzJyA7XG5cbi8qKlxuICogQXBwLlxuICovXG5cbmxldCBBcHAgPSB7XG4gIHJlbmRlcih7IHByb3BzLCBzdGF0ZSB9LCB1cGRhdGVTdGF0ZSkge1xuICAgIGxldCB7IGV4YW1wbGVzIH0gPSBwcm9wcztcbiAgICBsZXQgZXhhbXBsZSA9IHN0YXRlLmV4YW1wbGUgfHwgZXhhbXBsZXMuQ29kZTtcbiAgICBsZXQgaXRlbXMgPSBPYmplY3Qua2V5cyhleGFtcGxlcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz0nQXBwJz5cbiAgICAgICAgPGRpdiBjbGFzcz0nQXBwLW1lbnUnPlxuICAgICAgICAgIDxNZW51IGl0ZW1zPXsgaXRlbXMgfSBvbkNoYW5nZT17IGNoYW5nZUV4YW1wbGUgfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdBcHAtZXhhbXBsZSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nQXBwLWV4YW1wbGUtY29tcG9uZW50Jz5cbiAgICAgICAgICAgIHsgZXhhbXBsZS5jb21wb25lbnQgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J0FwcC1leGFtcGxlLWNvZGUnPlxuICAgICAgICAgICAgPENvZGUgbGFuZ3VhZ2U9J2h0bWwnPlxuICAgICAgICAgICAgICB7IGV4YW1wbGUuY29kZSB9XG4gICAgICAgICAgICA8L0NvZGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZUV4YW1wbGUoZXhhbXBsZSkge1xuICAgICAgdXBkYXRlU3RhdGUoeyBleGFtcGxlOiBleGFtcGxlc1tleGFtcGxlXSB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmxldCBhcHAgPSBkZWt1KDxBcHAgZXhhbXBsZXM9eyBleGFtcGxlcyB9Lz4pO1xucmVuZGVyKGFwcCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpKTtcbiJdfQ==
}, {"dekujs/virtual-element":2,"dekujs/deku":3,"./lib":4,"./examples":5}],
2: [function(require, module, exports) {
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
3: [function(require, module, exports) {
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
    }g.deku = f();
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

      var Emitter = _require('component-emitter');

      /**
       * Expose `scene`.
       */

      module.exports = Application;

      /**
       * Create a new `Application`.
       *
       * @param {Object} element Optional initial element
       */

      function Application(element) {
        if (!(this instanceof Application)) return new Application(element);
        this.options = {};
        this.sources = {};
        this.element = element;
      }

      /**
       * Mixin `Emitter`.
       */

      Emitter(Application.prototype);

      /**
       * Add a plugin
       *
       * @param {Function} plugin
       */

      Application.prototype.use = function (plugin) {
        plugin(this);
        return this;
      };

      /**
       * Set an option
       *
       * @param {String} name
       */

      Application.prototype.option = function (name, val) {
        this.options[name] = val;
        return this;
      };

      /**
       * Set value used somewhere in the IO network.
       */

      Application.prototype.set = function (name, data) {
        this.sources[name] = data;
        this.emit('source', name, data);
        return this;
      };

      /**
       * Mount a virtual element.
       *
       * @param {VirtualElement} element
       */

      Application.prototype.mount = function (element) {
        this.element = element;
        this.emit('mount', element);
        return this;
      };

      /**
       * Remove the world. Unmount everything.
       */

      Application.prototype.unmount = function () {
        if (!this.element) return;
        this.element = null;
        this.emit('unmount');
        return this;
      };
    }, { "component-emitter": 8 }], 2: [function (_require, module, exports) {
      /**
       * All of the events can bind to
       */

      module.exports = {
        onBlur: 'blur',
        onChange: 'change',
        onClick: 'click',
        onContextMenu: 'contextmenu',
        onCopy: 'copy',
        onCut: 'cut',
        onDoubleClick: 'dblclick',
        onDrag: 'drag',
        onDragEnd: 'dragend',
        onDragEnter: 'dragenter',
        onDragExit: 'dragexit',
        onDragLeave: 'dragleave',
        onDragOver: 'dragover',
        onDragStart: 'dragstart',
        onDrop: 'drop',
        onError: 'error',
        onFocus: 'focus',
        onInput: 'input',
        onInvalid: 'invalid',
        onKeyDown: 'keydown',
        onKeyPress: 'keypress',
        onKeyUp: 'keyup',
        onMouseDown: 'mousedown',
        onMouseEnter: 'mouseenter',
        onMouseLeave: 'mouseleave',
        onMouseMove: 'mousemove',
        onMouseOut: 'mouseout',
        onMouseOver: 'mouseover',
        onMouseUp: 'mouseup',
        onPaste: 'paste',
        onReset: 'reset',
        onScroll: 'scroll',
        onSubmit: 'submit',
        onTouchCancel: 'touchcancel',
        onTouchEnd: 'touchend',
        onTouchMove: 'touchmove',
        onTouchStart: 'touchstart',
        onWheel: 'wheel'
      };
    }, {}], 3: [function (_require, module, exports) {
      /**
       * Create the application.
       */

      exports.tree = exports.scene = exports.deku = _require('./application');

      /**
       * Render scenes to the DOM.
       */

      if (typeof document !== 'undefined') {
        exports.render = _require('./render');
      }

      /**
       * Render scenes to a string
       */

      exports.renderString = _require('./stringify');
    }, { "./application": 1, "./render": 5, "./stringify": 6 }], 4: [function (_require, module, exports) {
      var type = _require('component-type');

      /**
       * Returns the type of a virtual node
       *
       * @param  {Object} node
       * @return {String}
       */

      module.exports = function nodeType(node) {
        var v = type(node);
        if (v === 'null' || node === false) return 'empty';
        if (v !== 'object') return 'text';
        if (type(node.type) === 'string') return 'element';
        return 'component';
      };
    }, { "component-type": 10 }], 5: [function (_require, module, exports) {
      /**
       * Dependencies.
       */

      var raf = _require('component-raf');
      var isDom = _require('is-dom');
      var uid = _require('get-uid');
      var keypath = _require('object-path');
      var events = _require('./events');
      var svg = _require('./svg');
      var defaults = _require('object-defaults');
      var forEach = _require('fast.js/forEach');
      var assign = _require('fast.js/object/assign');
      var reduce = _require('fast.js/reduce');
      var nodeType = _require('./node-type');

      /**
       * Expose `dom`.
       */

      module.exports = render;

      /**
       * Render an app to the DOM
       *
       * @param {Application} app
       * @param {HTMLElement} container
       * @param {Object} opts
       *
       * @return {Object}
       */

      function render(app, container, opts) {
        var frameId;
        var isRendering;
        var rootId = 'root';
        var currentElement;
        var currentNativeElement;
        var connections = {};
        var components = {};
        var entities = {};
        var handlers = {};
        var mountQueue = [];
        var children = {};
        children[rootId] = {};

        if (!isDom(container)) {
          throw new Error('Container element must be a DOM element');
        }

        /**
         * Rendering options. Batching is only ever really disabled
         * when running tests, and pooling can be disabled if the user
         * is doing something stupid with the DOM in their components.
         */

        var options = defaults(assign({}, app.options || {}, opts || {}), {
          batching: true
        });

        /**
         * Listen to DOM events
         */
        var rootElement = getRootElement(container);
        addNativeEventListeners();

        /**
         * Watch for changes to the app so that we can update
         * the DOM as needed.
         */

        app.on('unmount', onunmount);
        app.on('mount', onmount);
        app.on('source', onupdate);

        /**
         * If the app has already mounted an element, we can just
         * render that straight away.
         */

        if (app.element) render();

        /**
         * Teardown the DOM rendering so that it stops
         * rendering and everything can be garbage collected.
         */

        function teardown() {
          removeNativeEventListeners();
          removeNativeElement();
          app.off('unmount', onunmount);
          app.off('mount', onmount);
          app.off('source', onupdate);
        }

        /**
         * Swap the current rendered node with a new one that is rendered
         * from the new virtual element mounted on the app.
         *
         * @param {VirtualElement} element
         */

        function onmount() {
          invalidate();
        }

        /**
         * If the app unmounts an element, we should clear out the current
         * rendered element. This will remove all the entities.
         */

        function onunmount() {
          removeNativeElement();
          currentElement = null;
        }

        /**
         * Update all components that are bound to the source
         *
         * @param {String} name
         * @param {*} data
         */

        function onupdate(name, data) {
          if (!connections[name]) return;
          connections[name].forEach(function (update) {
            update(data);
          });
        }

        /**
         * Render and mount a component to the native dom.
         *
         * @param {Entity} entity
         * @return {HTMLElement}
         */

        function mountEntity(entity) {
          register(entity);
          setSources(entity);
          children[entity.id] = {};
          entities[entity.id] = entity;

          // commit initial state and props.
          commit(entity);

          // callback before mounting.
          trigger('beforeMount', entity, [entity.context]);
          trigger('beforeRender', entity, [entity.context]);

          // render virtual element.
          var virtualElement = renderEntity(entity);
          // create native element.
          var nativeElement = toNative(entity.id, '0', virtualElement);

          entity.virtualElement = virtualElement;
          entity.nativeElement = nativeElement;

          // Fire afterRender and afterMount hooks at the end
          // of the render cycle
          mountQueue.push(entity.id);

          return nativeElement;
        }

        /**
         * Remove a component from the native dom.
         *
         * @param {Entity} entity
         */

        function unmountEntity(entityId) {
          var entity = entities[entityId];
          if (!entity) return;
          trigger('beforeUnmount', entity, [entity.context, entity.nativeElement]);
          unmountChildren(entityId);
          removeAllEvents(entityId);
          var componentEntities = components[entityId].entities;
          delete componentEntities[entityId];
          delete components[entityId];
          delete entities[entityId];
          delete children[entityId];
        }

        /**
         * Render the entity and make sure it returns a node
         *
         * @param {Entity} entity
         *
         * @return {VirtualTree}
         */

        function renderEntity(entity) {
          var component = entity.component;
          var fn = typeof component === 'function' ? component : component.render;
          if (!fn) throw new Error('Component needs a render function');
          var result = fn(entity.context, setState(entity));
          if (!result) throw new Error('Render function must return an element.');
          return result;
        }

        /**
         * Whenever setState or setProps is called, we mark the entity
         * as dirty in the renderer. This lets us optimize the re-rendering
         * and skip components that definitely haven't changed.
         *
         * @param {Entity} entity
         *
         * @return {Function} A curried function for updating the state of an entity
         */

        function setState(entity) {
          return function (nextState) {
            updateEntityState(entity, nextState);
          };
        }

        /**
         * Tell the app it's dirty and needs to re-render. If batching is disabled
         * we can just trigger a render immediately, otherwise we'll wait until
         * the next available frame.
         */

        function invalidate() {
          if (!options.batching) {
            if (!isRendering) render();
          } else {
            if (!frameId) frameId = raf(render);
          }
        }

        /**
         * Update the DOM. If the update fails we stop the loop
         * so we don't get errors on every frame.
         *
         * @api public
         */

        function render() {
          // If this is called synchronously we need to
          // cancel any pending future updates
          clearFrame();

          // If the rendering from the previous frame is still going,
          // we'll just wait until the next frame. Ideally renders should
          // not take over 16ms to stay within a single frame, but this should
          // catch it if it does.
          if (isRendering) {
            frameId = raf(render);
            return;
          } else {
            isRendering = true;
          }

          // 1. If there isn't a native element rendered for the current mounted element
          // then we need to create it from scratch.
          // 2. If a new element has been mounted, we should diff them.
          // 3. We should update check all child components for changes.
          if (!currentNativeElement) {
            currentElement = app.element;
            currentNativeElement = toNative(rootId, '0', currentElement);
            if (container.children.length > 0) {
              console.info('deku: The container element is not empty. These elements will be removed. Read more: http://cl.ly/b0Sr');
            }
            if (container === document.body) {
              console.warn('deku: Using document.body is allowed but it can cause some issues. Read more: http://cl.ly/b0SC');
            }
            removeAllChildren(container);
            container.appendChild(currentNativeElement);
          } else if (currentElement !== app.element) {
            currentNativeElement = patch(rootId, currentElement, app.element, currentNativeElement);
            currentElement = app.element;
            updateChildren(rootId);
          } else {
            updateChildren(rootId);
          }

          // Call mount events on all new entities
          flushMountQueue();

          // Allow rendering again.
          isRendering = false;
        }

        /**
         * Call hooks for all new entities that have been created in
         * the last render from the bottom up.
         */

        function flushMountQueue() {
          while (mountQueue.length > 0) {
            var entityId = mountQueue.shift();
            var entity = entities[entityId];
            trigger('afterRender', entity, [entity.context, entity.nativeElement]);
            trigger('afterMount', entity, [entity.context, entity.nativeElement, setState(entity)]);
          }
        }

        /**
         * Clear the current scheduled frame
         */

        function clearFrame() {
          if (!frameId) return;
          raf.cancel(frameId);
          frameId = 0;
        }

        /**
         * Update a component.
         *
         * The entity is just the data object for a component instance.
         *
         * @param {String} id Component instance id.
         */

        function updateEntity(entityId) {
          var entity = entities[entityId];
          setSources(entity);

          if (!shouldUpdate(entity)) {
            commit(entity);
            return updateChildren(entityId);
          }

          var currentTree = entity.virtualElement;
          var nextProps = entity.pendingProps;
          var nextState = entity.pendingState;
          var previousState = entity.context.state;
          var previousProps = entity.context.props;

          // hook before rendering. could modify state just before the render occurs.
          trigger('beforeUpdate', entity, [entity.context, nextProps, nextState]);
          trigger('beforeRender', entity, [entity.context]);

          // commit state and props.
          commit(entity);

          // re-render.
          var nextTree = renderEntity(entity);

          // if the tree is the same we can just skip this component
          // but we should still check the children to see if they're dirty.
          // This allows us to memoize the render function of components.
          if (nextTree === currentTree) return updateChildren(entityId);

          // apply new virtual tree to native dom.
          entity.nativeElement = patch(entityId, currentTree, nextTree, entity.nativeElement);
          entity.virtualElement = nextTree;
          updateChildren(entityId);

          // trigger render hook
          trigger('afterRender', entity, [entity.context, entity.nativeElement]);

          // trigger afterUpdate after all children have updated.
          trigger('afterUpdate', entity, [entity.context, previousProps, previousState, setState(entity)]);
        }

        /**
         * Update all the children of an entity.
         *
         * @param {String} id Component instance id.
         */

        function updateChildren(entityId) {
          forEach(children[entityId], function (childId) {
            updateEntity(childId);
          });
        }

        /**
         * Remove all of the child entities of an entity
         *
         * @param {Entity} entity
         */

        function unmountChildren(entityId) {
          forEach(children[entityId], function (childId) {
            unmountEntity(childId);
          });
        }

        /**
         * Remove the root element. If this is called synchronously we need to
         * cancel any pending future updates.
         */

        function removeNativeElement() {
          clearFrame();
          removeElement(rootId, '0', currentNativeElement);
          currentNativeElement = null;
        }

        /**
         * Create a native element from a virtual element.
         *
         * @param {String} entityId
         * @param {String} path
         * @param {Object} vnode
         *
         * @return {HTMLDocumentFragment}
         */

        function toNative(entityId, path, vnode) {
          switch (nodeType(vnode)) {
            case 'text':
              return toNativeText(vnode);
            case 'empty':
              return toNativeEmptyElement(entityId, path);
            case 'element':
              return toNativeElement(entityId, path, vnode);
            case 'component':
              return toNativeComponent(entityId, path, vnode);
          }
        }

        /**
         * Create a native text element from a virtual element.
         *
         * @param {Object} vnode
         */

        function toNativeText(text) {
          return document.createTextNode(text);
        }

        /**
         * Create a native element from a virtual element.
         */

        function toNativeElement(entityId, path, vnode) {
          var el;
          var attributes = vnode.attributes;
          var tagName = vnode.type;
          var childNodes = vnode.children;

          // create element either from pool or fresh.
          if (svg.isElement(tagName)) {
            el = document.createElementNS(svg.namespace, tagName);
          } else {
            el = document.createElement(tagName);
          }

          // set attributes.
          forEach(attributes, function (value, name) {
            setAttribute(entityId, path, el, name, value);
          });

          // add children.
          forEach(childNodes, function (child, i) {
            var childEl = toNative(entityId, path + '.' + i, child);
            if (!childEl.parentNode) el.appendChild(childEl);
          });

          // store keys on the native element for fast event handling.
          el.__entity__ = entityId;
          el.__path__ = path;

          return el;
        }

        /**
         * Create a native element from a virtual element.
         */

        function toNativeEmptyElement(entityId, path) {
          var el = document.createElement('noscript');
          el.__entity__ = entityId;
          el.__path__ = path;
          return el;
        }

        /**
         * Create a native element from a component.
         */

        function toNativeComponent(entityId, path, vnode) {
          var child = new Entity(vnode.type, assign({ children: vnode.children }, vnode.attributes), entityId);
          children[entityId][path] = child.id;
          return mountEntity(child);
        }

        /**
         * Patch an element with the diff from two trees.
         */

        function patch(entityId, prev, next, el) {
          return diffNode('0', entityId, prev, next, el);
        }

        /**
         * Create a diff between two trees of nodes.
         */

        function diffNode(path, entityId, prev, next, el) {
          var leftType = nodeType(prev);
          var rightType = nodeType(next);

          // Type changed. This could be from element->text, text->ComponentA,
          // ComponentA->ComponentB etc. But NOT div->span. These are the same type
          // (ElementNode) but different tag name.
          if (leftType !== rightType) return replaceElement(entityId, path, el, next);

          switch (rightType) {
            case 'text':
              return diffText(prev, next, el);
            case 'empty':
              return el;
            case 'element':
              return diffElement(path, entityId, prev, next, el);
            case 'component':
              return diffComponent(path, entityId, prev, next, el);
          }
        }

        /**
         * Diff two text nodes and update the element.
         */

        function diffText(previous, current, el) {
          if (current !== previous) el.data = current;
          return el;
        }

        /**
         * Diff the children of an ElementNode.
         */

        function diffChildren(path, entityId, prev, next, el) {
          var positions = [];
          var hasKeys = false;
          var childNodes = Array.prototype.slice.apply(el.childNodes);
          var leftKeys = reduce(prev.children, keyMapReducer, {});
          var rightKeys = reduce(next.children, keyMapReducer, {});
          var currentChildren = assign({}, children[entityId]);

          function keyMapReducer(acc, child, i) {
            if (child && child.attributes && child.attributes.key != null) {
              acc[child.attributes.key] = {
                element: child,
                index: i
              };
              hasKeys = true;
            }
            return acc;
          }

          // Diff all of the nodes that have keys. This lets us re-used elements
          // instead of overriding them and lets us move them around.
          if (hasKeys) {

            // Removals
            forEach(leftKeys, function (leftNode, key) {
              if (rightKeys[key] == null) {
                var leftPath = path + '.' + leftNode.index;
                removeElement(entityId, leftPath, childNodes[leftNode.index]);
              }
            });

            // Update nodes
            forEach(rightKeys, function (rightNode, key) {
              var leftNode = leftKeys[key];

              // We only want updates for now
              if (leftNode == null) return;

              var leftPath = path + '.' + leftNode.index;

              // Updated
              positions[rightNode.index] = diffNode(leftPath, entityId, leftNode.element, rightNode.element, childNodes[leftNode.index]);
            });

            // Update the positions of all child components and event handlers
            forEach(rightKeys, function (rightNode, key) {
              var leftNode = leftKeys[key];

              // We just want elements that have moved around
              if (leftNode == null || leftNode.index === rightNode.index) return;

              var rightPath = path + '.' + rightNode.index;
              var leftPath = path + '.' + leftNode.index;

              // Update all the child component path positions to match
              // the latest positions if they've changed. This is a bit hacky.
              forEach(currentChildren, function (childId, childPath) {
                if (leftPath === childPath) {
                  delete children[entityId][childPath];
                  children[entityId][rightPath] = childId;
                }
              });
            });

            // Now add all of the new nodes last in case their path
            // would have conflicted with one of the previous paths.
            forEach(rightKeys, function (rightNode, key) {
              var rightPath = path + '.' + rightNode.index;
              if (leftKeys[key] == null) {
                positions[rightNode.index] = toNative(entityId, rightPath, rightNode.element);
              }
            });
          } else {
            var maxLength = Math.max(prev.children.length, next.children.length);

            // Now diff all of the nodes that don't have keys
            for (var i = 0; i < maxLength; i++) {
              var leftNode = prev.children[i];
              var rightNode = next.children[i];

              // Removals
              if (rightNode === undefined) {
                removeElement(entityId, path + '.' + i, childNodes[i]);
                continue;
              }

              // New Node
              if (leftNode === undefined) {
                positions[i] = toNative(entityId, path + '.' + i, rightNode);
                continue;
              }

              // Updated
              positions[i] = diffNode(path + '.' + i, entityId, leftNode, rightNode, childNodes[i]);
            }
          }

          // Reposition all the elements
          forEach(positions, function (childEl, newPosition) {
            var target = el.childNodes[newPosition];
            if (childEl && childEl !== target) {
              if (target) {
                el.insertBefore(childEl, target);
              } else {
                el.appendChild(childEl);
              }
            }
          });
        }

        /**
         * Diff the attributes and add/remove them.
         */

        function diffAttributes(prev, next, el, entityId, path) {
          var nextAttrs = next.attributes;
          var prevAttrs = prev.attributes;

          // add new attrs
          forEach(nextAttrs, function (value, name) {
            if (events[name] || !(name in prevAttrs) || prevAttrs[name] !== value) {
              setAttribute(entityId, path, el, name, value);
            }
          });

          // remove old attrs
          forEach(prevAttrs, function (value, name) {
            if (!(name in nextAttrs)) {
              removeAttribute(entityId, path, el, name);
            }
          });
        }

        /**
         * Update a component with the props from the next node. If
         * the component type has changed, we'll just remove the old one
         * and replace it with the new component.
         */

        function diffComponent(path, entityId, prev, next, el) {
          if (next.type !== prev.type) {
            return replaceElement(entityId, path, el, next);
          } else {
            var targetId = children[entityId][path];

            // This is a hack for now
            if (targetId) {
              updateEntityProps(targetId, assign({ children: next.children }, next.attributes));
            }

            return el;
          }
        }

        /**
         * Diff two element nodes.
         */

        function diffElement(path, entityId, prev, next, el) {
          if (next.type !== prev.type) return replaceElement(entityId, path, el, next);
          diffAttributes(prev, next, el, entityId, path);
          diffChildren(path, entityId, prev, next, el);
          return el;
        }

        /**
         * Removes an element from the DOM and unmounts and components
         * that are within that branch
         *
         * side effects:
         *   - removes element from the DOM
         *   - removes internal references
         *
         * @param {String} entityId
         * @param {String} path
         * @param {HTMLElement} el
         */

        function removeElement(entityId, path, el) {
          var childrenByPath = children[entityId];
          var childId = childrenByPath[path];
          var entityHandlers = handlers[entityId] || {};
          var removals = [];

          // If the path points to a component we should use that
          // components element instead, because it might have moved it.
          if (childId) {
            var child = entities[childId];
            el = child.nativeElement;
            unmountEntity(childId);
            removals.push(path);
          } else {

            // Just remove the text node
            if (!isElement(el)) return el && el.parentNode.removeChild(el);

            // Then we need to find any components within this
            // branch and unmount them.
            forEach(childrenByPath, function (childId, childPath) {
              if (childPath === path || isWithinPath(path, childPath)) {
                unmountEntity(childId);
                removals.push(childPath);
              }
            });

            // Remove all events at this path or below it
            forEach(entityHandlers, function (fn, handlerPath) {
              if (handlerPath === path || isWithinPath(path, handlerPath)) {
                removeEvent(entityId, handlerPath);
              }
            });
          }

          // Remove the paths from the object without touching the
          // old object. This keeps the object using fast properties.
          forEach(removals, function (path) {
            delete children[entityId][path];
          });

          // Remove it from the DOM
          el.parentNode.removeChild(el);
        }

        /**
         * Replace an element in the DOM. Removing all components
         * within that element and re-rendering the new virtual node.
         *
         * @param {Entity} entity
         * @param {String} path
         * @param {HTMLElement} el
         * @param {Object} vnode
         *
         * @return {void}
         */

        function replaceElement(entityId, path, el, vnode) {
          var parent = el.parentNode;
          var index = Array.prototype.indexOf.call(parent.childNodes, el);

          // remove the previous element and all nested components. This
          // needs to happen before we create the new element so we don't
          // get clashes on the component paths.
          removeElement(entityId, path, el);

          // then add the new element in there
          var newEl = toNative(entityId, path, vnode);
          var target = parent.childNodes[index];

          if (target) {
            parent.insertBefore(newEl, target);
          } else {
            parent.appendChild(newEl);
          }

          // walk up the tree and update all `entity.nativeElement` references.
          if (entityId !== 'root' && path === '0') {
            updateNativeElement(entityId, newEl);
          }

          return newEl;
        }

        /**
         * Update all entities in a branch that have the same nativeElement. This
         * happens when a component has another component as it's root node.
         *
         * @param {String} entityId
         * @param {HTMLElement} newEl
         *
         * @return {void}
         */

        function updateNativeElement(entityId, newEl) {
          var target = entities[entityId];
          if (target.ownerId === 'root') return;
          if (children[target.ownerId]['0'] === entityId) {
            entities[target.ownerId].nativeElement = newEl;
            updateNativeElement(target.ownerId, newEl);
          }
        }

        /**
         * Set the attribute of an element, performing additional transformations
         * dependning on the attribute name
         *
         * @param {HTMLElement} el
         * @param {String} name
         * @param {String} value
         */

        function setAttribute(entityId, path, el, name, value) {
          if (!value) {
            removeAttribute(entityId, path, el, name);
            return;
          }
          if (events[name]) {
            addEvent(entityId, path, events[name], value);
            return;
          }
          switch (name) {
            case 'checked':
            case 'disabled':
            case 'selected':
              el[name] = true;
              break;
            case 'innerHTML':
              el.innerHTML = value;
              break;
            case 'value':
              setElementValue(el, value);
              break;
            case svg.isAttribute(name):
              el.setAttributeNS(svg.namespace, name, value);
              break;
            default:
              el.setAttribute(name, value);
              break;
          }
        }

        /**
         * Remove an attribute, performing additional transformations
         * dependning on the attribute name
         *
         * @param {HTMLElement} el
         * @param {String} name
         */

        function removeAttribute(entityId, path, el, name) {
          if (events[name]) {
            removeEvent(entityId, path, events[name]);
            return;
          }
          switch (name) {
            case 'checked':
            case 'disabled':
            case 'selected':
              el[name] = false;
              break;
            case 'innerHTML':
              el.innerHTML = '';
            case 'value':
              setElementValue(el, null);
              break;
            default:
              el.removeAttribute(name);
              break;
          }
        }

        /**
         * Checks to see if one tree path is within
         * another tree path. Example:
         *
         * 0.1 vs 0.1.1 = true
         * 0.2 vs 0.3.5 = false
         *
         * @param {String} target
         * @param {String} path
         *
         * @return {Boolean}
         */

        function isWithinPath(target, path) {
          return path.indexOf(target + '.') === 0;
        }

        /**
         * Is the DOM node an element node
         *
         * @param {HTMLElement} el
         *
         * @return {Boolean}
         */

        function isElement(el) {
          return !!(el && el.tagName);
        }

        /**
         * Remove all the child nodes from an element
         *
         * @param {HTMLElement} el
         */

        function removeAllChildren(el) {
          while (el.firstChild) el.removeChild(el.firstChild);
        }

        /**
         * Trigger a hook on a component.
         *
         * @param {String} name Name of hook.
         * @param {Entity} entity The component instance.
         * @param {Array} args To pass along to hook.
         */

        function trigger(name, entity, args) {
          if (typeof entity.component[name] !== 'function') return;
          return entity.component[name].apply(null, args);
        }

        /**
         * Update an entity to match the latest rendered vode. We always
         * replace the props on the component when composing them. This
         * will trigger a re-render on all children below this point.
         *
         * @param {Entity} entity
         * @param {String} path
         * @param {Object} vnode
         *
         * @return {void}
         */

        function updateEntityProps(entityId, nextProps) {
          var entity = entities[entityId];
          entity.pendingProps = defaults({}, nextProps, entity.component.defaultProps || {});
          entity.dirty = true;
          invalidate();
        }

        /**
         * Update component instance state.
         */

        function updateEntityState(entity, nextState) {
          entity.pendingState = assign(entity.pendingState, nextState);
          entity.dirty = true;
          invalidate();
        }

        /**
         * Commit props and state changes to an entity.
         */

        function commit(entity) {
          entity.context = {
            state: entity.pendingState,
            props: entity.pendingProps,
            id: entity.id
          };
          entity.pendingState = assign({}, entity.context.state);
          entity.pendingProps = assign({}, entity.context.props);
          entity.dirty = false;
          if (typeof entity.component.validate === 'function') {
            entity.component.validate(entity.context);
          }
        }

        /**
         * Try to avoid creating new virtual dom if possible.
         *
         * Later we may expose this so you can override, but not there yet.
         */

        function shouldUpdate(entity) {
          if (!entity.dirty) return false;
          if (!entity.component.shouldUpdate) return true;
          var nextProps = entity.pendingProps;
          var nextState = entity.pendingState;
          var bool = entity.component.shouldUpdate(entity.context, nextProps, nextState);
          return bool;
        }

        /**
         * Register an entity.
         *
         * This is mostly to pre-preprocess component properties and values chains.
         *
         * The end result is for every component that gets mounted,
         * you create a set of IO nodes in the network from the `value` definitions.
         *
         * @param {Component} component
         */

        function register(entity) {
          registerEntity(entity);
          var component = entity.component;
          if (component.registered) return;

          // initialize sources once for a component type.
          registerSources(entity);
          component.registered = true;
        }

        /**
         * Add entity to data-structures related to components/entities.
         *
         * @param {Entity} entity
         */

        function registerEntity(entity) {
          var component = entity.component;
          // all entities for this component type.
          var entities = component.entities = component.entities || {};
          // add entity to component list
          entities[entity.id] = entity;
          // map to component so you can remove later.
          components[entity.id] = component;
        }

        /**
         * Initialize sources for a component by type.
         *
         * @param {Entity} entity
         */

        function registerSources(entity) {
          var component = components[entity.id];
          // get 'class-level' sources.
          // if we've already hooked it up, then we're good.
          var sources = component.sources;
          if (sources) return;
          var entities = component.entities;

          // hook up sources.
          var map = component.sourceToPropertyName = {};
          component.sources = sources = [];
          var propTypes = component.propTypes;
          for (var name in propTypes) {
            var data = propTypes[name];
            if (!data) continue;
            if (!data.source) continue;
            sources.push(data.source);
            map[data.source] = name;
          }

          // send value updates to all component instances.
          sources.forEach(function (source) {
            connections[source] = connections[source] || [];
            connections[source].push(update);

            function update(data) {
              var prop = map[source];
              for (var entityId in entities) {
                var entity = entities[entityId];
                var changes = {};
                changes[prop] = data;
                updateEntityProps(entityId, assign(entity.pendingProps, changes));
              }
            }
          });
        }

        /**
         * Set the initial source value on the entity
         *
         * @param {Entity} entity
         */

        function setSources(entity) {
          var component = entity.component;
          var map = component.sourceToPropertyName;
          var sources = component.sources;
          sources.forEach(function (source) {
            var name = map[source];
            if (entity.pendingProps[name] != null) return;
            entity.pendingProps[name] = app.sources[source]; // get latest value plugged into global store
          });
        }

        /**
         * Add all of the DOM event listeners
         */

        function addNativeEventListeners() {
          forEach(events, function (eventType) {
            rootElement.addEventListener(eventType, handleEvent, true);
          });
        }

        /**
         * Add all of the DOM event listeners
         */

        function removeNativeEventListeners() {
          forEach(events, function (eventType) {
            rootElement.removeEventListener(eventType, handleEvent, true);
          });
        }

        /**
         * Handle an event that has occured within the container
         *
         * @param {Event} event
         */

        function handleEvent(event) {
          var target = event.target;
          var eventType = event.type;

          // Walk up the DOM tree and see if there is a handler
          // for this event type higher up.
          while (target) {
            var fn = keypath.get(handlers, [target.__entity__, target.__path__, eventType]);
            if (fn) {
              event.delegateTarget = target;
              if (fn(event) === false) break;
            }
            target = target.parentNode;
          }
        }

        /**
         * Bind events for an element, and all it's rendered child elements.
         *
         * @param {String} path
         * @param {String} event
         * @param {Function} fn
         */

        function addEvent(entityId, path, eventType, fn) {
          keypath.set(handlers, [entityId, path, eventType], function (e) {
            var entity = entities[entityId];
            if (entity) {
              fn.call(null, e, entity.context, setState(entity));
            } else {
              fn.call(null, e);
            }
          });
        }

        /**
         * Unbind events for a entityId
         *
         * @param {String} entityId
         */

        function removeEvent(entityId, path, eventType) {
          var args = [entityId];
          if (path) args.push(path);
          if (eventType) args.push(eventType);
          keypath.del(handlers, args);
        }

        /**
         * Unbind all events from an entity
         *
         * @param {Entity} entity
         */

        function removeAllEvents(entityId) {
          keypath.del(handlers, [entityId]);
        }

        /**
         * Used for debugging to inspect the current state without
         * us needing to explicitly manage storing/updating references.
         *
         * @return {Object}
         */

        function inspect() {
          return {
            entities: entities,
            handlers: handlers,
            connections: connections,
            currentElement: currentElement,
            options: options,
            app: app,
            container: container,
            children: children
          };
        }

        /**
         * Return an object that lets us completely remove the automatic
         * DOM rendering and export debugging tools.
         */

        return {
          remove: teardown,
          inspect: inspect
        };
      }

      /**
       * A rendered component instance.
       *
       * This manages the lifecycle, props and state of the component.
       * It's basically just a data object for more straightfoward lookup.
       *
       * @param {Component} component
       * @param {Object} props
       */

      function Entity(component, props, ownerId) {
        this.id = uid();
        this.ownerId = ownerId;
        this.component = component;
        this.propTypes = component.propTypes || {};
        this.context = {};
        this.context.id = this.id;
        this.context.props = defaults(props || {}, component.defaultProps || {});
        this.context.state = this.component.initialState ? this.component.initialState(this.context.props) : {};
        this.pendingProps = assign({}, this.context.props);
        this.pendingState = assign({}, this.context.state);
        this.dirty = false;
        this.virtualElement = null;
        this.nativeElement = null;
        this.displayName = component.name || 'Component';
      }

      /**
       * Retrieve the nearest 'body' ancestor of the given element or else the root
       * element of the document in which stands the given element.
       *
       * This is necessary if you want to attach the events handler to the correct
       * element and be able to dispatch events in document fragments such as
       * Shadow DOM.
       *
       * @param  {HTMLElement} el The element on which we will render an app.
       * @return {HTMLElement}    The root element on which we will attach the events
       *                          handler.
       */

      function getRootElement(el) {
        while (el.parentElement) {
          if (el.tagName === 'BODY' || !el.parentElement) {
            return el;
          }
          el = el.parentElement;
        }
        return el;
      }

      /**
       * Set the value property of an element and keep the text selection
       * for input fields.
       *
       * @param {HTMLElement} el
       * @param {String} value
       */

      function setElementValue(el, value) {
        if (el === document.activeElement && canSelectText(el)) {
          var start = el.selectionStart;
          var end = el.selectionEnd;
          el.value = value;
          el.setSelectionRange(start, end);
        } else {
          el.value = value;
        }
      }

      /**
       * For some reason only certain types of inputs can set the selection range.
       *
       * @param {HTMLElement} el
       *
       * @return {Boolean}
       */

      function canSelectText(el) {
        return el.tagName === 'INPUT' && ['text', 'search', 'password', 'tel', 'url'].indexOf(el.type) > -1;
      }
    }, { "./events": 2, "./node-type": 4, "./svg": 7, "component-raf": 9, "fast.js/forEach": 13, "fast.js/object/assign": 16, "fast.js/reduce": 19, "get-uid": 20, "is-dom": 21, "object-defaults": 24, "object-path": 25 }], 6: [function (_require, module, exports) {
      var defaults = _require('object-defaults');
      var nodeType = _require('./node-type');
      var type = _require('component-type');

      /**
       * Expose `stringify`.
       */

      module.exports = function (app) {
        if (!app.element) {
          throw new Error('No element mounted');
        }

        /**
         * Render to string.
         *
         * @param {Component} component
         * @param {Object} [props]
         * @return {String}
         */

        function stringify(component, optProps, children) {
          var propTypes = component.propTypes || {};
          var props = defaults(optProps || {}, component.defaultProps || {});
          var state = component.initialState ? component.initialState(props) : {};
          props.children = children;

          for (var name in propTypes) {
            var options = propTypes[name];
            if (options.source) {
              props[name] = app.sources[options.source];
            }
          }

          if (component.beforeMount) component.beforeMount({ props: props, state: state });
          if (component.beforeRender) component.beforeRender({ props: props, state: state });
          var node = component.render({ props: props, state: state });
          return stringifyNode(node, '0');
        }

        /**
         * Render a node to a string
         *
         * @param {Node} node
         * @param {Tree} tree
         *
         * @return {String}
         */

        function stringifyNode(node, path) {
          switch (nodeType(node)) {
            case 'empty':
              return '<noscript />';
            case 'text':
              return node;
            case 'element':
              var children = node.children;
              var attributes = node.attributes;
              var tagName = node.type;
              var innerHTML = attributes.innerHTML;
              var str = '<' + tagName + attrs(attributes) + '>';

              if (innerHTML) {
                str += innerHTML;
              } else {
                for (var i = 0, n = children.length; i < n; i++) {
                  str += stringifyNode(children[i], path + '.' + i);
                }
              }

              str += '</' + tagName + '>';
              return str;
            case 'component':
              return stringify(node.type, node.attributes, node.children);
          }

          throw new Error('Invalid type');
        }

        return stringifyNode(app.element, '0');
      };

      /**
       * HTML attributes to string.
       *
       * @param {Object} attributes
       * @return {String}
       * @api private
       */

      function attrs(attributes) {
        var str = '';
        for (var key in attributes) {
          var value = attributes[key];
          if (key === 'innerHTML') continue;
          if (isValidAttributeValue(value)) str += attr(key, attributes[key]);
        }
        return str;
      }

      /**
       * HTML attribute to string.
       *
       * @param {String} key
       * @param {String} val
       * @return {String}
       * @api private
       */

      function attr(key, val) {
        return ' ' + key + '="' + val + '"';
      }

      /**
       * Is a value able to be set a an attribute value?
       *
       * @param {Any} value
       *
       * @return {Boolean}
       */

      function isValidAttributeValue(value) {
        var valueType = type(value);
        switch (valueType) {
          case 'string':
          case 'number':
            return true;

          case 'boolean':
            return value;

          default:
            return false;
        }
      }
    }, { "./node-type": 4, "component-type": 10, "object-defaults": 24 }], 7: [function (_require, module, exports) {
      module.exports = {
        isElement: _require('is-svg-element').isElement,
        isAttribute: _require('is-svg-attribute'),
        namespace: 'http://www.w3.org/2000/svg'
      };
    }, { "is-svg-attribute": 22, "is-svg-element": 23 }], 8: [function (_require, module, exports) {

      /**
       * Expose `Emitter`.
       */

      module.exports = Emitter;

      /**
       * Initialize a new `Emitter`.
       *
       * @api public
       */

      function Emitter(obj) {
        if (obj) return mixin(obj);
      };

      /**
       * Mixin the emitter properties.
       *
       * @param {Object} obj
       * @return {Object}
       * @api private
       */

      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }

      /**
       * Listen on the given `event` with `fn`.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
        return this;
      };

      /**
       * Adds an `event` listener that will be invoked a single
       * time then automatically removed.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      Emitter.prototype.once = function (event, fn) {
        function on() {
          this.off(event, on);
          fn.apply(this, arguments);
        }

        on.fn = fn;
        this.on(event, on);
        return this;
      };

      /**
       * Remove the given callback for `event` or all
       * registered callbacks.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};

        // all
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }

        // specific event
        var callbacks = this._callbacks['$' + event];
        if (!callbacks) return this;

        // remove all handlers
        if (1 == arguments.length) {
          delete this._callbacks['$' + event];
          return this;
        }

        // remove specific handler
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        return this;
      };

      /**
       * Emit `event` with the given args.
       *
       * @param {String} event
       * @param {Mixed} ...
       * @return {Emitter}
       */

      Emitter.prototype.emit = function (event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this._callbacks['$' + event];

        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }

        return this;
      };

      /**
       * Return array of callbacks for `event`.
       *
       * @param {String} event
       * @return {Array}
       * @api public
       */

      Emitter.prototype.listeners = function (event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
      };

      /**
       * Check if this emitter has `event` handlers.
       *
       * @param {String} event
       * @return {Boolean}
       * @api public
       */

      Emitter.prototype.hasListeners = function (event) {
        return !!this.listeners(event).length;
      };
    }, {}], 9: [function (_require, module, exports) {
      /**
       * Expose `requestAnimationFrame()`.
       */

      exports = module.exports = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fallback;

      /**
       * Fallback implementation.
       */

      var prev = new Date().getTime();
      function fallback(fn) {
        var curr = new Date().getTime();
        var ms = Math.max(0, 16 - (curr - prev));
        var req = setTimeout(fn, ms);
        prev = curr;
        return req;
      }

      /**
       * Cancel.
       */

      var cancel = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout;

      exports.cancel = function (id) {
        cancel.call(window, id);
      };
    }, {}], 10: [function (_require, module, exports) {
      /**
       * toString ref.
       */

      var toString = Object.prototype.toString;

      /**
       * Return the type of `val`.
       *
       * @param {Mixed} val
       * @return {String}
       * @api public
       */

      module.exports = function (val) {
        switch (toString.call(val)) {
          case '[object Date]':
            return 'date';
          case '[object RegExp]':
            return 'regexp';
          case '[object Arguments]':
            return 'arguments';
          case '[object Array]':
            return 'array';
          case '[object Error]':
            return 'error';
        }

        if (val === null) return 'null';
        if (val === undefined) return 'undefined';
        if (val !== val) return 'nan';
        if (val && val.nodeType === 1) return 'element';

        val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);

        return typeof val;
      };
    }, {}], 11: [function (_require, module, exports) {
      'use strict';

      var bindInternal3 = _require('../function/bindInternal3');

      /**
       * # For Each
       *
       * A fast `.forEach()` implementation.
       *
       * @param  {Array}    subject     The array (or array-like) to iterate over.
       * @param  {Function} fn          The visitor function.
       * @param  {Object}   thisContext The context for the visitor.
       */
      module.exports = function fastForEach(subject, fn, thisContext) {
        var length = subject.length,
            iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
            i;
        for (i = 0; i < length; i++) {
          iterator(subject[i], i, subject);
        }
      };
    }, { "../function/bindInternal3": 14 }], 12: [function (_require, module, exports) {
      'use strict';

      var bindInternal4 = _require('../function/bindInternal4');

      /**
       * # Reduce
       *
       * A fast `.reduce()` implementation.
       *
       * @param  {Array}    subject      The array (or array-like) to reduce.
       * @param  {Function} fn           The reducer function.
       * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
       * @param  {Object}   thisContext  The context for the reducer.
       * @return {mixed}                 The final result.
       */
      module.exports = function fastReduce(subject, fn, initialValue, thisContext) {
        var length = subject.length,
            iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
            i,
            result;

        if (initialValue === undefined) {
          i = 1;
          result = subject[0];
        } else {
          i = 0;
          result = initialValue;
        }

        for (; i < length; i++) {
          result = iterator(result, subject[i], i, subject);
        }

        return result;
      };
    }, { "../function/bindInternal4": 15 }], 13: [function (_require, module, exports) {
      'use strict';

      var forEachArray = _require('./array/forEach'),
          forEachObject = _require('./object/forEach');

      /**
       * # ForEach
       *
       * A fast `.forEach()` implementation.
       *
       * @param  {Array|Object} subject     The array or object to iterate over.
       * @param  {Function}     fn          The visitor function.
       * @param  {Object}       thisContext The context for the visitor.
       */
      module.exports = function fastForEach(subject, fn, thisContext) {
        if (subject instanceof Array) {
          return forEachArray(subject, fn, thisContext);
        } else {
          return forEachObject(subject, fn, thisContext);
        }
      };
    }, { "./array/forEach": 11, "./object/forEach": 17 }], 14: [function (_require, module, exports) {
      'use strict';

      /**
       * Internal helper to bind a function known to have 3 arguments
       * to a given context.
       */
      module.exports = function bindInternal3(func, thisContext) {
        return function (a, b, c) {
          return func.call(thisContext, a, b, c);
        };
      };
    }, {}], 15: [function (_require, module, exports) {
      'use strict';

      /**
       * Internal helper to bind a function known to have 4 arguments
       * to a given context.
       */
      module.exports = function bindInternal4(func, thisContext) {
        return function (a, b, c, d) {
          return func.call(thisContext, a, b, c, d);
        };
      };
    }, {}], 16: [function (_require, module, exports) {
      'use strict';

      /**
       * Analogue of Object.assign().
       * Copies properties from one or more source objects to
       * a target object. Existing keys on the target object will be overwritten.
       *
       * > Note: This differs from spec in some important ways:
       * > 1. Will throw if passed non-objects, including `undefined` or `null` values.
       * > 2. Does not support the curious Exception handling behavior, exceptions are thrown immediately.
       * > For more details, see:
       * > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
       *
       *
       *
       * @param  {Object} target      The target object to copy properties to.
       * @param  {Object} source, ... The source(s) to copy properties from.
       * @return {Object}             The updated target object.
       */
      module.exports = function fastAssign(target) {
        var totalArgs = arguments.length,
            source,
            i,
            totalKeys,
            keys,
            key,
            j;

        for (i = 1; i < totalArgs; i++) {
          source = arguments[i];
          keys = Object.keys(source);
          totalKeys = keys.length;
          for (j = 0; j < totalKeys; j++) {
            key = keys[j];
            target[key] = source[key];
          }
        }
        return target;
      };
    }, {}], 17: [function (_require, module, exports) {
      'use strict';

      var bindInternal3 = _require('../function/bindInternal3');

      /**
       * # For Each
       *
       * A fast object `.forEach()` implementation.
       *
       * @param  {Object}   subject     The object to iterate over.
       * @param  {Function} fn          The visitor function.
       * @param  {Object}   thisContext The context for the visitor.
       */
      module.exports = function fastForEachObject(subject, fn, thisContext) {
        var keys = Object.keys(subject),
            length = keys.length,
            iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
            key,
            i;
        for (i = 0; i < length; i++) {
          key = keys[i];
          iterator(subject[key], key, subject);
        }
      };
    }, { "../function/bindInternal3": 14 }], 18: [function (_require, module, exports) {
      'use strict';

      var bindInternal4 = _require('../function/bindInternal4');

      /**
       * # Reduce
       *
       * A fast object `.reduce()` implementation.
       *
       * @param  {Object}   subject      The object to reduce over.
       * @param  {Function} fn           The reducer function.
       * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
       * @param  {Object}   thisContext  The context for the reducer.
       * @return {mixed}                 The final result.
       */
      module.exports = function fastReduceObject(subject, fn, initialValue, thisContext) {
        var keys = Object.keys(subject),
            length = keys.length,
            iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
            i,
            key,
            result;

        if (initialValue === undefined) {
          i = 1;
          result = subject[keys[0]];
        } else {
          i = 0;
          result = initialValue;
        }

        for (; i < length; i++) {
          key = keys[i];
          result = iterator(result, subject[key], key, subject);
        }

        return result;
      };
    }, { "../function/bindInternal4": 15 }], 19: [function (_require, module, exports) {
      'use strict';

      var reduceArray = _require('./array/reduce'),
          reduceObject = _require('./object/reduce');

      /**
       * # Reduce
       *
       * A fast `.reduce()` implementation.
       *
       * @param  {Array|Object} subject      The array or object to reduce over.
       * @param  {Function}     fn           The reducer function.
       * @param  {mixed}        initialValue The initial value for the reducer, defaults to subject[0].
       * @param  {Object}       thisContext  The context for the reducer.
       * @return {Array|Object}              The array or object containing the results.
       */
      module.exports = function fastReduce(subject, fn, initialValue, thisContext) {
        if (subject instanceof Array) {
          return reduceArray(subject, fn, initialValue, thisContext);
        } else {
          return reduceObject(subject, fn, initialValue, thisContext);
        }
      };
    }, { "./array/reduce": 12, "./object/reduce": 18 }], 20: [function (_require, module, exports) {
      /** generate unique id for selector */
      var counter = Date.now() % 1e9;

      module.exports = function getUid() {
        return (Math.random() * 1e9 >>> 0) + counter++;
      };
    }, {}], 21: [function (_require, module, exports) {
      /*global window*/

      /**
       * Check if object is dom node.
       *
       * @param {Object} val
       * @return {Boolean}
       * @api public
       */

      module.exports = function isNode(val) {
        if (!val || typeof val !== 'object') return false;
        if (window && 'object' == typeof window.Node) return val instanceof window.Node;
        return 'number' == typeof val.nodeType && 'string' == typeof val.nodeName;
      };
    }, {}], 22: [function (_require, module, exports) {
      /**
       * Supported SVG attributes
       */

      exports.attributes = {
        'cx': true,
        'cy': true,
        'd': true,
        'dx': true,
        'dy': true,
        'fill': true,
        'fillOpacity': true,
        'fontFamily': true,
        'fontSize': true,
        'fx': true,
        'fy': true,
        'gradientTransform': true,
        'gradientUnits': true,
        'markerEnd': true,
        'markerMid': true,
        'markerStart': true,
        'offset': true,
        'opacity': true,
        'patternContentUnits': true,
        'patternUnits': true,
        'points': true,
        'preserveAspectRatio': true,
        'r': true,
        'rx': true,
        'ry': true,
        'spreadMethod': true,
        'stopColor': true,
        'stopOpacity': true,
        'stroke': true,
        'strokeDasharray': true,
        'strokeLinecap': true,
        'strokeOpacity': true,
        'strokeWidth': true,
        'textAnchor': true,
        'transform': true,
        'version': true,
        'viewBox': true,
        'x1': true,
        'x2': true,
        'x': true,
        'y1': true,
        'y2': true,
        'y': true
      };

      /**
       * Are element's attributes SVG?
       *
       * @param {String} attr
       */

      module.exports = function (attr) {
        return attr in exports.attributes;
      };
    }, {}], 23: [function (_require, module, exports) {
      /**
       * Supported SVG elements
       *
       * @type {Array}
       */

      exports.elements = {
        'animate': true,
        'circle': true,
        'defs': true,
        'ellipse': true,
        'g': true,
        'line': true,
        'linearGradient': true,
        'mask': true,
        'path': true,
        'pattern': true,
        'polygon': true,
        'polyline': true,
        'radialGradient': true,
        'rect': true,
        'stop': true,
        'svg': true,
        'text': true,
        'tspan': true
      };

      /**
       * Is element's namespace SVG?
       *
       * @param {String} name
       */

      exports.isElement = function (name) {
        return name in exports.elements;
      };
    }, {}], 24: [function (_require, module, exports) {
      'use strict';

      module.exports = function (target) {
        target = target || {};

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          if (!source) continue;

          Object.getOwnPropertyNames(source).forEach(function (key) {
            if (undefined === target[key]) target[key] = source[key];
          });
        }

        return target;
      };
    }, {}], 25: [function (_require, module, exports) {
      (function (root, factory) {
        'use strict';

        /*istanbul ignore next:cant test*/
        if (typeof module === 'object' && typeof module.exports === 'object') {
          module.exports = factory();
        } else if (typeof define === 'function' && define.amd) {
          // AMD. Register as an anonymous module.
          define([], factory);
        } else {
          // Browser globals
          root.objectPath = factory();
        }
      })(this, function () {
        'use strict';

        var toStr = Object.prototype.toString,
            _hasOwnProperty = Object.prototype.hasOwnProperty;

        function isEmpty(value) {
          if (!value) {
            return true;
          }
          if (isArray(value) && value.length === 0) {
            return true;
          } else if (!isString(value)) {
            for (var i in value) {
              if (_hasOwnProperty.call(value, i)) {
                return false;
              }
            }
            return true;
          }
          return false;
        }

        function toString(type) {
          return toStr.call(type);
        }

        function isNumber(value) {
          return typeof value === 'number' || toString(value) === "[object Number]";
        }

        function isString(obj) {
          return typeof obj === 'string' || toString(obj) === "[object String]";
        }

        function isObject(obj) {
          return typeof obj === 'object' && toString(obj) === "[object Object]";
        }

        function isArray(obj) {
          return typeof obj === 'object' && typeof obj.length === 'number' && toString(obj) === '[object Array]';
        }

        function isBoolean(obj) {
          return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
        }

        function getKey(key) {
          var intKey = parseInt(key);
          if (intKey.toString() === key) {
            return intKey;
          }
          return key;
        }

        function set(_x, _x2, _x3, _x4) {
          var _again = true;

          _function: while (_again) {
            var obj = _x,
                path = _x2,
                value = _x3,
                doNotReplace = _x4;
            currentPath = oldVal = undefined;
            _again = false;

            if (isNumber(path)) {
              path = [path];
            }
            if (isEmpty(path)) {
              return obj;
            }
            if (isString(path)) {
              _x = obj;
              _x2 = path.split('.').map(getKey);
              _x3 = value;
              _x4 = doNotReplace;
              _again = true;
              continue _function;
            }
            var currentPath = path[0];

            if (path.length === 1) {
              var oldVal = obj[currentPath];
              if (oldVal === void 0 || !doNotReplace) {
                obj[currentPath] = value;
              }
              return oldVal;
            }

            if (obj[currentPath] === void 0) {
              //check if we assume an array
              if (isNumber(path[1])) {
                obj[currentPath] = [];
              } else {
                obj[currentPath] = {};
              }
            }

            _x = obj[currentPath];
            _x2 = path.slice(1);
            _x3 = value;
            _x4 = doNotReplace;
            _again = true;
            continue _function;
          }
        }

        function del(_x5, _x6) {
          var _again2 = true;

          _function2: while (_again2) {
            var obj = _x5,
                path = _x6;
            currentPath = oldVal = undefined;
            _again2 = false;

            if (isNumber(path)) {
              path = [path];
            }

            if (isEmpty(obj)) {
              return void 0;
            }

            if (isEmpty(path)) {
              return obj;
            }
            if (isString(path)) {
              _x5 = obj;
              _x6 = path.split('.');
              _again2 = true;
              continue _function2;
            }

            var currentPath = getKey(path[0]);
            var oldVal = obj[currentPath];

            if (path.length === 1) {
              if (oldVal !== void 0) {
                if (isArray(obj)) {
                  obj.splice(currentPath, 1);
                } else {
                  delete obj[currentPath];
                }
              }
            } else {
              if (obj[currentPath] !== void 0) {
                _x5 = obj[currentPath];
                _x6 = path.slice(1);
                _again2 = true;
                continue _function2;
              }
            }

            return obj;
          }
        }

        var objectPath = function objectPath(obj) {
          return Object.keys(objectPath).reduce(function (proxy, prop) {
            if (typeof objectPath[prop] === 'function') {
              proxy[prop] = objectPath[prop].bind(objectPath, obj);
            }

            return proxy;
          }, {});
        };

        objectPath.has = function (obj, path) {
          if (isEmpty(obj)) {
            return false;
          }

          if (isNumber(path)) {
            path = [path];
          } else if (isString(path)) {
            path = path.split('.');
          }

          if (isEmpty(path) || path.length === 0) {
            return false;
          }

          for (var i = 0; i < path.length; i++) {
            var j = path[i];
            if ((isObject(obj) || isArray(obj)) && _hasOwnProperty.call(obj, j)) {
              obj = obj[j];
            } else {
              return false;
            }
          }

          return true;
        };

        objectPath.ensureExists = function (obj, path, value) {
          return set(obj, path, value, true);
        };

        objectPath.set = function (obj, path, value, doNotReplace) {
          return set(obj, path, value, doNotReplace);
        };

        objectPath.insert = function (obj, path, value, at) {
          var arr = objectPath.get(obj, path);
          at = ~ ~at;
          if (!isArray(arr)) {
            arr = [];
            objectPath.set(obj, path, arr);
          }
          arr.splice(at, 0, value);
        };

        objectPath.empty = function (obj, path) {
          if (isEmpty(path)) {
            return obj;
          }
          if (isEmpty(obj)) {
            return void 0;
          }

          var value, i;
          if (!(value = objectPath.get(obj, path))) {
            return obj;
          }

          if (isString(value)) {
            return objectPath.set(obj, path, '');
          } else if (isBoolean(value)) {
            return objectPath.set(obj, path, false);
          } else if (isNumber(value)) {
            return objectPath.set(obj, path, 0);
          } else if (isArray(value)) {
            value.length = 0;
          } else if (isObject(value)) {
            for (i in value) {
              if (_hasOwnProperty.call(value, i)) {
                delete value[i];
              }
            }
          } else {
            return objectPath.set(obj, path, null);
          }
        };

        objectPath.push = function (obj, path /*, values */) {
          var arr = objectPath.get(obj, path);
          if (!isArray(arr)) {
            arr = [];
            objectPath.set(obj, path, arr);
          }

          arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
        };

        objectPath.coalesce = function (obj, paths, defaultValue) {
          var value;

          for (var i = 0, len = paths.length; i < len; i++) {
            if ((value = objectPath.get(obj, paths[i])) !== void 0) {
              return value;
            }
          }

          return defaultValue;
        };

        objectPath.get = function (obj, path, defaultValue) {
          if (isNumber(path)) {
            path = [path];
          }
          if (isEmpty(path)) {
            return obj;
          }
          if (isEmpty(obj)) {
            return defaultValue;
          }
          if (isString(path)) {
            return objectPath.get(obj, path.split('.'), defaultValue);
          }

          var currentPath = getKey(path[0]);

          if (path.length === 1) {
            if (obj[currentPath] === void 0) {
              return defaultValue;
            }
            return obj[currentPath];
          }

          return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
        };

        objectPath.del = function (obj, path) {
          return del(obj, path);
        };

        return objectPath;
      });
    }, {}] }, {}, [3])(3);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVrdWpzLWRla3VAMC41LjQvYnVpbGQvZGVrdS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxNQUFHLE9BQU8sT0FBTyxLQUFHLFFBQVEsSUFBRSxPQUFPLE1BQU0sS0FBRyxXQUFXLEVBQUM7QUFBQyxVQUFNLENBQUMsT0FBTyxHQUFDLENBQUMsRUFBRSxDQUFBO0dBQUMsTUFBSyxJQUFHLE9BQU8sTUFBTSxLQUFHLFVBQVUsSUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDO0FBQUMsVUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLE1BQUk7QUFBQyxRQUFJLENBQUMsQ0FBQyxJQUFHLE9BQU8sTUFBTSxLQUFHLFdBQVcsRUFBQztBQUFDLE9BQUMsR0FBQyxNQUFNLENBQUE7S0FBQyxNQUFLLElBQUcsT0FBTyxNQUFNLEtBQUcsV0FBVyxFQUFDO0FBQUMsT0FBQyxHQUFDLE1BQU0sQ0FBQTtLQUFDLE1BQUssSUFBRyxPQUFPLElBQUksS0FBRyxXQUFXLEVBQUM7QUFBQyxPQUFDLEdBQUMsSUFBSSxDQUFBO0tBQUMsTUFBSTtBQUFDLE9BQUMsR0FBQyxJQUFJLENBQUE7S0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFBO0dBQUM7Q0FBQyxDQUFBLENBQUUsWUFBVTtBQUFDLE1BQUksTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQUMsYUFBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLFVBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7QUFBQyxZQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQUMsY0FBSSxDQUFDLEdBQUMsT0FBTyxRQUFRLElBQUUsVUFBVSxJQUFFLFFBQVEsQ0FBQyxJQUFHLENBQUMsQ0FBQyxJQUFFLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFHLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsR0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsSUFBSSxHQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQSxDQUFBO1NBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQyxVQUFTLENBQUMsRUFBQztBQUFDLGNBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtLQUFDLElBQUksQ0FBQyxHQUFDLE9BQU8sUUFBUSxJQUFFLFVBQVUsSUFBRSxRQUFRLENBQUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0dBQUMsQ0FBQSxDQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsVUFBUyxR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R0FBRyxDQUFDLEVBQUU7QUFDaEIsbUJBQU8sWUFBWSxDQUFDO1dBQ3JCO0FBQ0QsY0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbEIsbUJBQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztXQUMzRDs7QUFFRCxjQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWxDLGNBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDckIsZ0JBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQy9CLHFCQUFPLFlBQVksQ0FBQzthQUNyQjtBQUNELG1CQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztXQUN6Qjs7QUFFRCxpQkFBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3RFLENBQUM7O0FBRUYsa0JBQVUsQ0FBQyxHQUFHLEdBQUcsVUFBUyxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ25DLGlCQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkIsQ0FBQzs7QUFFRixlQUFPLFVBQVUsQ0FBQztPQUNuQixDQUFDLENBQUM7S0FFRixFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUNoQixDQUFDLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9kZWt1anMtZGVrdUAwLjUuNC9idWlsZC9kZWt1LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5kZWt1ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiBfcmVxdWlyZT09XCJmdW5jdGlvblwiJiZfcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgX3JlcXVpcmU9PVwiZnVuY3Rpb25cIiYmX3JlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSBfcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKVxuXG4vKipcbiAqIEV4cG9zZSBgc2NlbmVgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQXBwbGljYXRpb25cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgYEFwcGxpY2F0aW9uYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBPcHRpb25hbCBpbml0aWFsIGVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBBcHBsaWNhdGlvbiAoZWxlbWVudCkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQXBwbGljYXRpb24pKSByZXR1cm4gbmV3IEFwcGxpY2F0aW9uKGVsZW1lbnQpXG4gIHRoaXMub3B0aW9ucyA9IHt9XG4gIHRoaXMuc291cmNlcyA9IHt9XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbn1cblxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihBcHBsaWNhdGlvbi5wcm90b3R5cGUpXG5cbi8qKlxuICogQWRkIGEgcGx1Z2luXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luXG4gKi9cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgcGx1Z2luKHRoaXMpXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogU2V0IGFuIG9wdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKi9cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLm9wdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCB2YWwpIHtcbiAgdGhpcy5vcHRpb25zW25hbWVdID0gdmFsXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogU2V0IHZhbHVlIHVzZWQgc29tZXdoZXJlIGluIHRoZSBJTyBuZXR3b3JrLlxuICovXG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuICB0aGlzLnNvdXJjZXNbbmFtZV0gPSBkYXRhXG4gIHRoaXMuZW1pdCgnc291cmNlJywgbmFtZSwgZGF0YSlcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBNb3VudCBhIHZpcnR1YWwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge1ZpcnR1YWxFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICB0aGlzLmVtaXQoJ21vdW50JywgZWxlbWVudClcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHdvcmxkLiBVbm1vdW50IGV2ZXJ5dGhpbmcuXG4gKi9cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cbiAgdGhpcy5lbGVtZW50ID0gbnVsbFxuICB0aGlzLmVtaXQoJ3VubW91bnQnKVxuICByZXR1cm4gdGhpc1xufVxuXG59LHtcImNvbXBvbmVudC1lbWl0dGVyXCI6OH1dLDI6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogQWxsIG9mIHRoZSBldmVudHMgY2FuIGJpbmQgdG9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb25CbHVyOiAnYmx1cicsXG4gIG9uQ2hhbmdlOiAnY2hhbmdlJyxcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25Db250ZXh0TWVudTogJ2NvbnRleHRtZW51JyxcbiAgb25Db3B5OiAnY29weScsXG4gIG9uQ3V0OiAnY3V0JyxcbiAgb25Eb3VibGVDbGljazogJ2RibGNsaWNrJyxcbiAgb25EcmFnOiAnZHJhZycsXG4gIG9uRHJhZ0VuZDogJ2RyYWdlbmQnLFxuICBvbkRyYWdFbnRlcjogJ2RyYWdlbnRlcicsXG4gIG9uRHJhZ0V4aXQ6ICdkcmFnZXhpdCcsXG4gIG9uRHJhZ0xlYXZlOiAnZHJhZ2xlYXZlJyxcbiAgb25EcmFnT3ZlcjogJ2RyYWdvdmVyJyxcbiAgb25EcmFnU3RhcnQ6ICdkcmFnc3RhcnQnLFxuICBvbkRyb3A6ICdkcm9wJyxcbiAgb25FcnJvcjogJ2Vycm9yJyxcbiAgb25Gb2N1czogJ2ZvY3VzJyxcbiAgb25JbnB1dDogJ2lucHV0JyxcbiAgb25JbnZhbGlkOiAnaW52YWxpZCcsXG4gIG9uS2V5RG93bjogJ2tleWRvd24nLFxuICBvbktleVByZXNzOiAna2V5cHJlc3MnLFxuICBvbktleVVwOiAna2V5dXAnLFxuICBvbk1vdXNlRG93bjogJ21vdXNlZG93bicsXG4gIG9uTW91c2VFbnRlcjogJ21vdXNlZW50ZXInLFxuICBvbk1vdXNlTGVhdmU6ICdtb3VzZWxlYXZlJyxcbiAgb25Nb3VzZU1vdmU6ICdtb3VzZW1vdmUnLFxuICBvbk1vdXNlT3V0OiAnbW91c2VvdXQnLFxuICBvbk1vdXNlT3ZlcjogJ21vdXNlb3ZlcicsXG4gIG9uTW91c2VVcDogJ21vdXNldXAnLFxuICBvblBhc3RlOiAncGFzdGUnLFxuICBvblJlc2V0OiAncmVzZXQnLFxuICBvblNjcm9sbDogJ3Njcm9sbCcsXG4gIG9uU3VibWl0OiAnc3VibWl0JyxcbiAgb25Ub3VjaENhbmNlbDogJ3RvdWNoY2FuY2VsJyxcbiAgb25Ub3VjaEVuZDogJ3RvdWNoZW5kJyxcbiAgb25Ub3VjaE1vdmU6ICd0b3VjaG1vdmUnLFxuICBvblRvdWNoU3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgb25XaGVlbDogJ3doZWVsJ1xufVxuXG59LHt9XSwzOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiAqIENyZWF0ZSB0aGUgYXBwbGljYXRpb24uXG4gKi9cblxuZXhwb3J0cy50cmVlID1cbmV4cG9ydHMuc2NlbmUgPVxuZXhwb3J0cy5kZWt1ID0gX3JlcXVpcmUoJy4vYXBwbGljYXRpb24nKVxuXG4vKipcbiAqIFJlbmRlciBzY2VuZXMgdG8gdGhlIERPTS5cbiAqL1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBleHBvcnRzLnJlbmRlciA9IF9yZXF1aXJlKCcuL3JlbmRlcicpXG59XG5cbi8qKlxuICogUmVuZGVyIHNjZW5lcyB0byBhIHN0cmluZ1xuICovXG5cbmV4cG9ydHMucmVuZGVyU3RyaW5nID0gX3JlcXVpcmUoJy4vc3RyaW5naWZ5Jylcbn0se1wiLi9hcHBsaWNhdGlvblwiOjEsXCIuL3JlbmRlclwiOjUsXCIuL3N0cmluZ2lmeVwiOjZ9XSw0OltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgdHlwZSA9IF9yZXF1aXJlKCdjb21wb25lbnQtdHlwZScpXG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZpcnR1YWwgbm9kZVxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gbm9kZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9kZVR5cGUgKG5vZGUpIHtcbiAgdmFyIHYgPSB0eXBlKG5vZGUpXG4gIGlmICh2ID09PSAnbnVsbCcgfHwgbm9kZSA9PT0gZmFsc2UpIHJldHVybiAnZW1wdHknXG4gIGlmICh2ICE9PSAnb2JqZWN0JykgcmV0dXJuICd0ZXh0J1xuICBpZiAodHlwZShub2RlLnR5cGUpID09PSAnc3RyaW5nJykgcmV0dXJuICdlbGVtZW50J1xuICByZXR1cm4gJ2NvbXBvbmVudCdcbn1cblxufSx7XCJjb21wb25lbnQtdHlwZVwiOjEwfV0sNTpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4gKiBEZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHJhZiA9IF9yZXF1aXJlKCdjb21wb25lbnQtcmFmJylcbnZhciBpc0RvbSA9IF9yZXF1aXJlKCdpcy1kb20nKVxudmFyIHVpZCA9IF9yZXF1aXJlKCdnZXQtdWlkJylcbnZhciBrZXlwYXRoID0gX3JlcXVpcmUoJ29iamVjdC1wYXRoJylcbnZhciBldmVudHMgPSBfcmVxdWlyZSgnLi9ldmVudHMnKVxudmFyIHN2ZyA9IF9yZXF1aXJlKCcuL3N2ZycpXG52YXIgZGVmYXVsdHMgPSBfcmVxdWlyZSgnb2JqZWN0LWRlZmF1bHRzJylcbnZhciBmb3JFYWNoID0gX3JlcXVpcmUoJ2Zhc3QuanMvZm9yRWFjaCcpXG52YXIgYXNzaWduID0gX3JlcXVpcmUoJ2Zhc3QuanMvb2JqZWN0L2Fzc2lnbicpXG52YXIgcmVkdWNlID0gX3JlcXVpcmUoJ2Zhc3QuanMvcmVkdWNlJylcbnZhciBub2RlVHlwZSA9IF9yZXF1aXJlKCcuL25vZGUtdHlwZScpXG5cbi8qKlxuICogRXhwb3NlIGBkb21gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVuZGVyXG5cbi8qKlxuICogUmVuZGVyIGFuIGFwcCB0byB0aGUgRE9NXG4gKlxuICogQHBhcmFtIHtBcHBsaWNhdGlvbn0gYXBwXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIHJlbmRlciAoYXBwLCBjb250YWluZXIsIG9wdHMpIHtcbiAgdmFyIGZyYW1lSWRcbiAgdmFyIGlzUmVuZGVyaW5nXG4gIHZhciByb290SWQgPSAncm9vdCdcbiAgdmFyIGN1cnJlbnRFbGVtZW50XG4gIHZhciBjdXJyZW50TmF0aXZlRWxlbWVudFxuICB2YXIgY29ubmVjdGlvbnMgPSB7fVxuICB2YXIgY29tcG9uZW50cyA9IHt9XG4gIHZhciBlbnRpdGllcyA9IHt9XG4gIHZhciBoYW5kbGVycyA9IHt9XG4gIHZhciBtb3VudFF1ZXVlID0gW11cbiAgdmFyIGNoaWxkcmVuID0ge31cbiAgY2hpbGRyZW5bcm9vdElkXSA9IHt9XG5cbiAgaWYgKCFpc0RvbShjb250YWluZXIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgZWxlbWVudCBtdXN0IGJlIGEgRE9NIGVsZW1lbnQnKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcmluZyBvcHRpb25zLiBCYXRjaGluZyBpcyBvbmx5IGV2ZXIgcmVhbGx5IGRpc2FibGVkXG4gICAqIHdoZW4gcnVubmluZyB0ZXN0cywgYW5kIHBvb2xpbmcgY2FuIGJlIGRpc2FibGVkIGlmIHRoZSB1c2VyXG4gICAqIGlzIGRvaW5nIHNvbWV0aGluZyBzdHVwaWQgd2l0aCB0aGUgRE9NIGluIHRoZWlyIGNvbXBvbmVudHMuXG4gICAqL1xuXG4gIHZhciBvcHRpb25zID0gZGVmYXVsdHMoYXNzaWduKHt9LCBhcHAub3B0aW9ucyB8fCB7fSwgb3B0cyB8fCB7fSksIHtcbiAgICBiYXRjaGluZzogdHJ1ZVxuICB9KVxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gRE9NIGV2ZW50c1xuICAgKi9cbiAgdmFyIHJvb3RFbGVtZW50ID0gZ2V0Um9vdEVsZW1lbnQoY29udGFpbmVyKVxuICBhZGROYXRpdmVFdmVudExpc3RlbmVycygpXG5cbiAgLyoqXG4gICAqIFdhdGNoIGZvciBjaGFuZ2VzIHRvIHRoZSBhcHAgc28gdGhhdCB3ZSBjYW4gdXBkYXRlXG4gICAqIHRoZSBET00gYXMgbmVlZGVkLlxuICAgKi9cblxuICBhcHAub24oJ3VubW91bnQnLCBvbnVubW91bnQpXG4gIGFwcC5vbignbW91bnQnLCBvbm1vdW50KVxuICBhcHAub24oJ3NvdXJjZScsIG9udXBkYXRlKVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYXBwIGhhcyBhbHJlYWR5IG1vdW50ZWQgYW4gZWxlbWVudCwgd2UgY2FuIGp1c3RcbiAgICogcmVuZGVyIHRoYXQgc3RyYWlnaHQgYXdheS5cbiAgICovXG5cbiAgaWYgKGFwcC5lbGVtZW50KSByZW5kZXIoKVxuXG4gIC8qKlxuICAgKiBUZWFyZG93biB0aGUgRE9NIHJlbmRlcmluZyBzbyB0aGF0IGl0IHN0b3BzXG4gICAqIHJlbmRlcmluZyBhbmQgZXZlcnl0aGluZyBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRlYXJkb3duICgpIHtcbiAgICByZW1vdmVOYXRpdmVFdmVudExpc3RlbmVycygpXG4gICAgcmVtb3ZlTmF0aXZlRWxlbWVudCgpXG4gICAgYXBwLm9mZigndW5tb3VudCcsIG9udW5tb3VudClcbiAgICBhcHAub2ZmKCdtb3VudCcsIG9ubW91bnQpXG4gICAgYXBwLm9mZignc291cmNlJywgb251cGRhdGUpXG4gIH1cblxuICAvKipcbiAgICogU3dhcCB0aGUgY3VycmVudCByZW5kZXJlZCBub2RlIHdpdGggYSBuZXcgb25lIHRoYXQgaXMgcmVuZGVyZWRcbiAgICogZnJvbSB0aGUgbmV3IHZpcnR1YWwgZWxlbWVudCBtb3VudGVkIG9uIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSB7VmlydHVhbEVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG5cbiAgZnVuY3Rpb24gb25tb3VudCAoKSB7XG4gICAgaW52YWxpZGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICogSWYgdGhlIGFwcCB1bm1vdW50cyBhbiBlbGVtZW50LCB3ZSBzaG91bGQgY2xlYXIgb3V0IHRoZSBjdXJyZW50XG4gICAqIHJlbmRlcmVkIGVsZW1lbnQuIFRoaXMgd2lsbCByZW1vdmUgYWxsIHRoZSBlbnRpdGllcy5cbiAgICovXG5cbiAgZnVuY3Rpb24gb251bm1vdW50ICgpIHtcbiAgICByZW1vdmVOYXRpdmVFbGVtZW50KClcbiAgICBjdXJyZW50RWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWxsIGNvbXBvbmVudHMgdGhhdCBhcmUgYm91bmQgdG8gdGhlIHNvdXJjZVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0geyp9IGRhdGFcbiAgICovXG5cbiAgZnVuY3Rpb24gb251cGRhdGUgKG5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIWNvbm5lY3Rpb25zW25hbWVdKSByZXR1cm47XG4gICAgY29ubmVjdGlvbnNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih1cGRhdGUpIHtcbiAgICAgIHVwZGF0ZShkYXRhKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGFuZCBtb3VudCBhIGNvbXBvbmVudCB0byB0aGUgbmF0aXZlIGRvbS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG5cbiAgZnVuY3Rpb24gbW91bnRFbnRpdHkgKGVudGl0eSkge1xuICAgIHJlZ2lzdGVyKGVudGl0eSlcbiAgICBzZXRTb3VyY2VzKGVudGl0eSlcbiAgICBjaGlsZHJlbltlbnRpdHkuaWRdID0ge31cbiAgICBlbnRpdGllc1tlbnRpdHkuaWRdID0gZW50aXR5XG5cbiAgICAvLyBjb21taXQgaW5pdGlhbCBzdGF0ZSBhbmQgcHJvcHMuXG4gICAgY29tbWl0KGVudGl0eSlcblxuICAgIC8vIGNhbGxiYWNrIGJlZm9yZSBtb3VudGluZy5cbiAgICB0cmlnZ2VyKCdiZWZvcmVNb3VudCcsIGVudGl0eSwgW2VudGl0eS5jb250ZXh0XSlcbiAgICB0cmlnZ2VyKCdiZWZvcmVSZW5kZXInLCBlbnRpdHksIFtlbnRpdHkuY29udGV4dF0pXG5cbiAgICAvLyByZW5kZXIgdmlydHVhbCBlbGVtZW50LlxuICAgIHZhciB2aXJ0dWFsRWxlbWVudCA9IHJlbmRlckVudGl0eShlbnRpdHkpXG4gICAgLy8gY3JlYXRlIG5hdGl2ZSBlbGVtZW50LlxuICAgIHZhciBuYXRpdmVFbGVtZW50ID0gdG9OYXRpdmUoZW50aXR5LmlkLCAnMCcsIHZpcnR1YWxFbGVtZW50KVxuXG4gICAgZW50aXR5LnZpcnR1YWxFbGVtZW50ID0gdmlydHVhbEVsZW1lbnRcbiAgICBlbnRpdHkubmF0aXZlRWxlbWVudCA9IG5hdGl2ZUVsZW1lbnRcblxuICAgIC8vIEZpcmUgYWZ0ZXJSZW5kZXIgYW5kIGFmdGVyTW91bnQgaG9va3MgYXQgdGhlIGVuZFxuICAgIC8vIG9mIHRoZSByZW5kZXIgY3ljbGVcbiAgICBtb3VudFF1ZXVlLnB1c2goZW50aXR5LmlkKVxuXG4gICAgcmV0dXJuIG5hdGl2ZUVsZW1lbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBjb21wb25lbnQgZnJvbSB0aGUgbmF0aXZlIGRvbS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKi9cblxuICBmdW5jdGlvbiB1bm1vdW50RW50aXR5IChlbnRpdHlJZCkge1xuICAgIHZhciBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF1cbiAgICBpZiAoIWVudGl0eSkgcmV0dXJuXG4gICAgdHJpZ2dlcignYmVmb3JlVW5tb3VudCcsIGVudGl0eSwgW2VudGl0eS5jb250ZXh0LCBlbnRpdHkubmF0aXZlRWxlbWVudF0pXG4gICAgdW5tb3VudENoaWxkcmVuKGVudGl0eUlkKVxuICAgIHJlbW92ZUFsbEV2ZW50cyhlbnRpdHlJZClcbiAgICB2YXIgY29tcG9uZW50RW50aXRpZXMgPSBjb21wb25lbnRzW2VudGl0eUlkXS5lbnRpdGllcztcbiAgICBkZWxldGUgY29tcG9uZW50RW50aXRpZXNbZW50aXR5SWRdXG4gICAgZGVsZXRlIGNvbXBvbmVudHNbZW50aXR5SWRdXG4gICAgZGVsZXRlIGVudGl0aWVzW2VudGl0eUlkXVxuICAgIGRlbGV0ZSBjaGlsZHJlbltlbnRpdHlJZF1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGVudGl0eSBhbmQgbWFrZSBzdXJlIGl0IHJldHVybnMgYSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICpcbiAgICogQHJldHVybiB7VmlydHVhbFRyZWV9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbmRlckVudGl0eSAoZW50aXR5KSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IGVudGl0eS5jb21wb25lbnRcbiAgICB2YXIgZm4gPSB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nID8gY29tcG9uZW50IDogY29tcG9uZW50LnJlbmRlclxuICAgIGlmICghZm4pIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IG5lZWRzIGEgcmVuZGVyIGZ1bmN0aW9uJylcbiAgICB2YXIgcmVzdWx0ID0gZm4oZW50aXR5LmNvbnRleHQsIHNldFN0YXRlKGVudGl0eSkpXG4gICAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBFcnJvcignUmVuZGVyIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGFuIGVsZW1lbnQuJylcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogV2hlbmV2ZXIgc2V0U3RhdGUgb3Igc2V0UHJvcHMgaXMgY2FsbGVkLCB3ZSBtYXJrIHRoZSBlbnRpdHlcbiAgICogYXMgZGlydHkgaW4gdGhlIHJlbmRlcmVyLiBUaGlzIGxldHMgdXMgb3B0aW1pemUgdGhlIHJlLXJlbmRlcmluZ1xuICAgKiBhbmQgc2tpcCBjb21wb25lbnRzIHRoYXQgZGVmaW5pdGVseSBoYXZlbid0IGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICpcbiAgICogQHJldHVybiB7RnVuY3Rpb259IEEgY3VycmllZCBmdW5jdGlvbiBmb3IgdXBkYXRpbmcgdGhlIHN0YXRlIG9mIGFuIGVudGl0eVxuICAgKi9cblxuICBmdW5jdGlvbiBzZXRTdGF0ZSAoZW50aXR5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0U3RhdGUpIHtcbiAgICAgIHVwZGF0ZUVudGl0eVN0YXRlKGVudGl0eSwgbmV4dFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxsIHRoZSBhcHAgaXQncyBkaXJ0eSBhbmQgbmVlZHMgdG8gcmUtcmVuZGVyLiBJZiBiYXRjaGluZyBpcyBkaXNhYmxlZFxuICAgKiB3ZSBjYW4ganVzdCB0cmlnZ2VyIGEgcmVuZGVyIGltbWVkaWF0ZWx5LCBvdGhlcndpc2Ugd2UnbGwgd2FpdCB1bnRpbFxuICAgKiB0aGUgbmV4dCBhdmFpbGFibGUgZnJhbWUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGludmFsaWRhdGUgKCkge1xuICAgIGlmICghb3B0aW9ucy5iYXRjaGluZykge1xuICAgICAgaWYgKCFpc1JlbmRlcmluZykgcmVuZGVyKClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFmcmFtZUlkKSBmcmFtZUlkID0gcmFmKHJlbmRlcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBET00uIElmIHRoZSB1cGRhdGUgZmFpbHMgd2Ugc3RvcCB0aGUgbG9vcFxuICAgKiBzbyB3ZSBkb24ndCBnZXQgZXJyb3JzIG9uIGV2ZXJ5IGZyYW1lLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIC8vIElmIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgd2UgbmVlZCB0b1xuICAgIC8vIGNhbmNlbCBhbnkgcGVuZGluZyBmdXR1cmUgdXBkYXRlc1xuICAgIGNsZWFyRnJhbWUoKVxuXG4gICAgLy8gSWYgdGhlIHJlbmRlcmluZyBmcm9tIHRoZSBwcmV2aW91cyBmcmFtZSBpcyBzdGlsbCBnb2luZyxcbiAgICAvLyB3ZSdsbCBqdXN0IHdhaXQgdW50aWwgdGhlIG5leHQgZnJhbWUuIElkZWFsbHkgcmVuZGVycyBzaG91bGRcbiAgICAvLyBub3QgdGFrZSBvdmVyIDE2bXMgdG8gc3RheSB3aXRoaW4gYSBzaW5nbGUgZnJhbWUsIGJ1dCB0aGlzIHNob3VsZFxuICAgIC8vIGNhdGNoIGl0IGlmIGl0IGRvZXMuXG4gICAgaWYgKGlzUmVuZGVyaW5nKSB7XG4gICAgICBmcmFtZUlkID0gcmFmKHJlbmRlcilcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBpc1JlbmRlcmluZyA9IHRydWVcbiAgICB9XG5cbiAgICAvLyAxLiBJZiB0aGVyZSBpc24ndCBhIG5hdGl2ZSBlbGVtZW50IHJlbmRlcmVkIGZvciB0aGUgY3VycmVudCBtb3VudGVkIGVsZW1lbnRcbiAgICAvLyB0aGVuIHdlIG5lZWQgdG8gY3JlYXRlIGl0IGZyb20gc2NyYXRjaC5cbiAgICAvLyAyLiBJZiBhIG5ldyBlbGVtZW50IGhhcyBiZWVuIG1vdW50ZWQsIHdlIHNob3VsZCBkaWZmIHRoZW0uXG4gICAgLy8gMy4gV2Ugc2hvdWxkIHVwZGF0ZSBjaGVjayBhbGwgY2hpbGQgY29tcG9uZW50cyBmb3IgY2hhbmdlcy5cbiAgICBpZiAoIWN1cnJlbnROYXRpdmVFbGVtZW50KSB7XG4gICAgICBjdXJyZW50RWxlbWVudCA9IGFwcC5lbGVtZW50XG4gICAgICBjdXJyZW50TmF0aXZlRWxlbWVudCA9IHRvTmF0aXZlKHJvb3RJZCwgJzAnLCBjdXJyZW50RWxlbWVudClcbiAgICAgIGlmIChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ2Rla3U6IFRoZSBjb250YWluZXIgZWxlbWVudCBpcyBub3QgZW1wdHkuIFRoZXNlIGVsZW1lbnRzIHdpbGwgYmUgcmVtb3ZlZC4gUmVhZCBtb3JlOiBodHRwOi8vY2wubHkvYjBTcicpXG4gICAgICB9XG4gICAgICBpZiAoY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignZGVrdTogVXNpbmcgZG9jdW1lbnQuYm9keSBpcyBhbGxvd2VkIGJ1dCBpdCBjYW4gY2F1c2Ugc29tZSBpc3N1ZXMuIFJlYWQgbW9yZTogaHR0cDovL2NsLmx5L2IwU0MnKVxuICAgICAgfVxuICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY29udGFpbmVyKVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnROYXRpdmVFbGVtZW50KVxuICAgIH0gZWxzZSBpZiAoY3VycmVudEVsZW1lbnQgIT09IGFwcC5lbGVtZW50KSB7XG4gICAgICBjdXJyZW50TmF0aXZlRWxlbWVudCA9IHBhdGNoKHJvb3RJZCwgY3VycmVudEVsZW1lbnQsIGFwcC5lbGVtZW50LCBjdXJyZW50TmF0aXZlRWxlbWVudClcbiAgICAgIGN1cnJlbnRFbGVtZW50ID0gYXBwLmVsZW1lbnRcbiAgICAgIHVwZGF0ZUNoaWxkcmVuKHJvb3RJZClcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlQ2hpbGRyZW4ocm9vdElkKVxuICAgIH1cblxuICAgIC8vIENhbGwgbW91bnQgZXZlbnRzIG9uIGFsbCBuZXcgZW50aXRpZXNcbiAgICBmbHVzaE1vdW50UXVldWUoKVxuXG4gICAgLy8gQWxsb3cgcmVuZGVyaW5nIGFnYWluLlxuICAgIGlzUmVuZGVyaW5nID0gZmFsc2VcblxuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgaG9va3MgZm9yIGFsbCBuZXcgZW50aXRpZXMgdGhhdCBoYXZlIGJlZW4gY3JlYXRlZCBpblxuICAgKiB0aGUgbGFzdCByZW5kZXIgZnJvbSB0aGUgYm90dG9tIHVwLlxuICAgKi9cblxuICBmdW5jdGlvbiBmbHVzaE1vdW50UXVldWUgKCkge1xuICAgIHdoaWxlIChtb3VudFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBlbnRpdHlJZCA9IG1vdW50UXVldWUuc2hpZnQoKVxuICAgICAgdmFyIGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgICAgdHJpZ2dlcignYWZ0ZXJSZW5kZXInLCBlbnRpdHksIFtlbnRpdHkuY29udGV4dCwgZW50aXR5Lm5hdGl2ZUVsZW1lbnRdKVxuICAgICAgdHJpZ2dlcignYWZ0ZXJNb3VudCcsIGVudGl0eSwgW2VudGl0eS5jb250ZXh0LCBlbnRpdHkubmF0aXZlRWxlbWVudCwgc2V0U3RhdGUoZW50aXR5KV0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjdXJyZW50IHNjaGVkdWxlZCBmcmFtZVxuICAgKi9cblxuICBmdW5jdGlvbiBjbGVhckZyYW1lICgpIHtcbiAgICBpZiAoIWZyYW1lSWQpIHJldHVyblxuICAgIHJhZi5jYW5jZWwoZnJhbWVJZClcbiAgICBmcmFtZUlkID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogVGhlIGVudGl0eSBpcyBqdXN0IHRoZSBkYXRhIG9iamVjdCBmb3IgYSBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCBDb21wb25lbnQgaW5zdGFuY2UgaWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUVudGl0eSAoZW50aXR5SWQpIHtcbiAgICB2YXIgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdXG4gICAgc2V0U291cmNlcyhlbnRpdHkpXG5cbiAgICBpZiAoIXNob3VsZFVwZGF0ZShlbnRpdHkpKSB7XG4gICAgICBjb21taXQoZW50aXR5KVxuICAgICAgcmV0dXJuIHVwZGF0ZUNoaWxkcmVuKGVudGl0eUlkKVxuICAgIH1cblxuICAgIHZhciBjdXJyZW50VHJlZSA9IGVudGl0eS52aXJ0dWFsRWxlbWVudFxuICAgIHZhciBuZXh0UHJvcHMgPSBlbnRpdHkucGVuZGluZ1Byb3BzXG4gICAgdmFyIG5leHRTdGF0ZSA9IGVudGl0eS5wZW5kaW5nU3RhdGVcbiAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IGVudGl0eS5jb250ZXh0LnN0YXRlXG4gICAgdmFyIHByZXZpb3VzUHJvcHMgPSBlbnRpdHkuY29udGV4dC5wcm9wc1xuXG4gICAgLy8gaG9vayBiZWZvcmUgcmVuZGVyaW5nLiBjb3VsZCBtb2RpZnkgc3RhdGUganVzdCBiZWZvcmUgdGhlIHJlbmRlciBvY2N1cnMuXG4gICAgdHJpZ2dlcignYmVmb3JlVXBkYXRlJywgZW50aXR5LCBbZW50aXR5LmNvbnRleHQsIG5leHRQcm9wcywgbmV4dFN0YXRlXSlcbiAgICB0cmlnZ2VyKCdiZWZvcmVSZW5kZXInLCBlbnRpdHksIFtlbnRpdHkuY29udGV4dF0pXG5cbiAgICAvLyBjb21taXQgc3RhdGUgYW5kIHByb3BzLlxuICAgIGNvbW1pdChlbnRpdHkpXG5cbiAgICAvLyByZS1yZW5kZXIuXG4gICAgdmFyIG5leHRUcmVlID0gcmVuZGVyRW50aXR5KGVudGl0eSlcblxuICAgIC8vIGlmIHRoZSB0cmVlIGlzIHRoZSBzYW1lIHdlIGNhbiBqdXN0IHNraXAgdGhpcyBjb21wb25lbnRcbiAgICAvLyBidXQgd2Ugc2hvdWxkIHN0aWxsIGNoZWNrIHRoZSBjaGlsZHJlbiB0byBzZWUgaWYgdGhleSdyZSBkaXJ0eS5cbiAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBtZW1vaXplIHRoZSByZW5kZXIgZnVuY3Rpb24gb2YgY29tcG9uZW50cy5cbiAgICBpZiAobmV4dFRyZWUgPT09IGN1cnJlbnRUcmVlKSByZXR1cm4gdXBkYXRlQ2hpbGRyZW4oZW50aXR5SWQpXG5cbiAgICAvLyBhcHBseSBuZXcgdmlydHVhbCB0cmVlIHRvIG5hdGl2ZSBkb20uXG4gICAgZW50aXR5Lm5hdGl2ZUVsZW1lbnQgPSBwYXRjaChlbnRpdHlJZCwgY3VycmVudFRyZWUsIG5leHRUcmVlLCBlbnRpdHkubmF0aXZlRWxlbWVudClcbiAgICBlbnRpdHkudmlydHVhbEVsZW1lbnQgPSBuZXh0VHJlZVxuICAgIHVwZGF0ZUNoaWxkcmVuKGVudGl0eUlkKVxuXG4gICAgLy8gdHJpZ2dlciByZW5kZXIgaG9va1xuICAgIHRyaWdnZXIoJ2FmdGVyUmVuZGVyJywgZW50aXR5LCBbZW50aXR5LmNvbnRleHQsIGVudGl0eS5uYXRpdmVFbGVtZW50XSlcblxuICAgIC8vIHRyaWdnZXIgYWZ0ZXJVcGRhdGUgYWZ0ZXIgYWxsIGNoaWxkcmVuIGhhdmUgdXBkYXRlZC5cbiAgICB0cmlnZ2VyKCdhZnRlclVwZGF0ZScsIGVudGl0eSwgW2VudGl0eS5jb250ZXh0LCBwcmV2aW91c1Byb3BzLCBwcmV2aW91c1N0YXRlLCBzZXRTdGF0ZShlbnRpdHkpXSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWxsIHRoZSBjaGlsZHJlbiBvZiBhbiBlbnRpdHkuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCBDb21wb25lbnQgaW5zdGFuY2UgaWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuIChlbnRpdHlJZCkge1xuICAgIGZvckVhY2goY2hpbGRyZW5bZW50aXR5SWRdLCBmdW5jdGlvbiAoY2hpbGRJZCkge1xuICAgICAgdXBkYXRlRW50aXR5KGNoaWxkSWQpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIG9mIHRoZSBjaGlsZCBlbnRpdGllcyBvZiBhbiBlbnRpdHlcbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKi9cblxuICBmdW5jdGlvbiB1bm1vdW50Q2hpbGRyZW4gKGVudGl0eUlkKSB7XG4gICAgZm9yRWFjaChjaGlsZHJlbltlbnRpdHlJZF0sIGZ1bmN0aW9uIChjaGlsZElkKSB7XG4gICAgICB1bm1vdW50RW50aXR5KGNoaWxkSWQpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHJvb3QgZWxlbWVudC4gSWYgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSB3ZSBuZWVkIHRvXG4gICAqIGNhbmNlbCBhbnkgcGVuZGluZyBmdXR1cmUgdXBkYXRlcy5cbiAgICovXG5cbiAgZnVuY3Rpb24gcmVtb3ZlTmF0aXZlRWxlbWVudCAoKSB7XG4gICAgY2xlYXJGcmFtZSgpXG4gICAgcmVtb3ZlRWxlbWVudChyb290SWQsICcwJywgY3VycmVudE5hdGl2ZUVsZW1lbnQpXG4gICAgY3VycmVudE5hdGl2ZUVsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmF0aXZlIGVsZW1lbnQgZnJvbSBhIHZpcnR1YWwgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudGl0eUlkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgKlxuICAgKiBAcmV0dXJuIHtIVE1MRG9jdW1lbnRGcmFnbWVudH1cbiAgICovXG5cbiAgZnVuY3Rpb24gdG9OYXRpdmUgKGVudGl0eUlkLCBwYXRoLCB2bm9kZSkge1xuICAgIHN3aXRjaCAobm9kZVR5cGUodm5vZGUpKSB7XG4gICAgICBjYXNlICd0ZXh0JzogcmV0dXJuIHRvTmF0aXZlVGV4dCh2bm9kZSlcbiAgICAgIGNhc2UgJ2VtcHR5JzogcmV0dXJuIHRvTmF0aXZlRW1wdHlFbGVtZW50KGVudGl0eUlkLCBwYXRoKVxuICAgICAgY2FzZSAnZWxlbWVudCc6IHJldHVybiB0b05hdGl2ZUVsZW1lbnQoZW50aXR5SWQsIHBhdGgsIHZub2RlKVxuICAgICAgY2FzZSAnY29tcG9uZW50JzogcmV0dXJuIHRvTmF0aXZlQ29tcG9uZW50KGVudGl0eUlkLCBwYXRoLCB2bm9kZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmF0aXZlIHRleHQgZWxlbWVudCBmcm9tIGEgdmlydHVhbCBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICovXG5cbiAgZnVuY3Rpb24gdG9OYXRpdmVUZXh0ICh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmF0aXZlIGVsZW1lbnQgZnJvbSBhIHZpcnR1YWwgZWxlbWVudC5cbiAgICovXG5cbiAgZnVuY3Rpb24gdG9OYXRpdmVFbGVtZW50IChlbnRpdHlJZCwgcGF0aCwgdm5vZGUpIHtcbiAgICB2YXIgZWxcbiAgICB2YXIgYXR0cmlidXRlcyA9IHZub2RlLmF0dHJpYnV0ZXNcbiAgICB2YXIgdGFnTmFtZSA9IHZub2RlLnR5cGVcbiAgICB2YXIgY2hpbGROb2RlcyA9IHZub2RlLmNoaWxkcmVuXG5cbiAgICAvLyBjcmVhdGUgZWxlbWVudCBlaXRoZXIgZnJvbSBwb29sIG9yIGZyZXNoLlxuICAgIGlmIChzdmcuaXNFbGVtZW50KHRhZ05hbWUpKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmcubmFtZXNwYWNlLCB0YWdOYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcbiAgICB9XG5cbiAgICAvLyBzZXQgYXR0cmlidXRlcy5cbiAgICBmb3JFYWNoKGF0dHJpYnV0ZXMsIGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgc2V0QXR0cmlidXRlKGVudGl0eUlkLCBwYXRoLCBlbCwgbmFtZSwgdmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGFkZCBjaGlsZHJlbi5cbiAgICBmb3JFYWNoKGNoaWxkTm9kZXMsIGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgdmFyIGNoaWxkRWwgPSB0b05hdGl2ZShlbnRpdHlJZCwgcGF0aCArICcuJyArIGksIGNoaWxkKVxuICAgICAgaWYgKCFjaGlsZEVsLnBhcmVudE5vZGUpIGVsLmFwcGVuZENoaWxkKGNoaWxkRWwpXG4gICAgfSlcblxuICAgIC8vIHN0b3JlIGtleXMgb24gdGhlIG5hdGl2ZSBlbGVtZW50IGZvciBmYXN0IGV2ZW50IGhhbmRsaW5nLlxuICAgIGVsLl9fZW50aXR5X18gPSBlbnRpdHlJZFxuICAgIGVsLl9fcGF0aF9fID0gcGF0aFxuXG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmF0aXZlIGVsZW1lbnQgZnJvbSBhIHZpcnR1YWwgZWxlbWVudC5cbiAgICovXG5cbiAgZnVuY3Rpb24gdG9OYXRpdmVFbXB0eUVsZW1lbnQgKGVudGl0eUlkLCBwYXRoKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbm9zY3JpcHQnKVxuICAgIGVsLl9fZW50aXR5X18gPSBlbnRpdHlJZFxuICAgIGVsLl9fcGF0aF9fID0gcGF0aFxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5hdGl2ZSBlbGVtZW50IGZyb20gYSBjb21wb25lbnQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRvTmF0aXZlQ29tcG9uZW50IChlbnRpdHlJZCwgcGF0aCwgdm5vZGUpIHtcbiAgICB2YXIgY2hpbGQgPSBuZXcgRW50aXR5KHZub2RlLnR5cGUsIGFzc2lnbih7IGNoaWxkcmVuOiB2bm9kZS5jaGlsZHJlbiB9LCB2bm9kZS5hdHRyaWJ1dGVzKSwgZW50aXR5SWQpXG4gICAgY2hpbGRyZW5bZW50aXR5SWRdW3BhdGhdID0gY2hpbGQuaWRcbiAgICByZXR1cm4gbW91bnRFbnRpdHkoY2hpbGQpXG4gIH1cblxuICAvKipcbiAgICogUGF0Y2ggYW4gZWxlbWVudCB3aXRoIHRoZSBkaWZmIGZyb20gdHdvIHRyZWVzLlxuICAgKi9cblxuICBmdW5jdGlvbiBwYXRjaCAoZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKSB7XG4gICAgcmV0dXJuIGRpZmZOb2RlKCcwJywgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGRpZmYgYmV0d2VlbiB0d28gdHJlZXMgb2Ygbm9kZXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGRpZmZOb2RlIChwYXRoLCBlbnRpdHlJZCwgcHJldiwgbmV4dCwgZWwpIHtcbiAgICB2YXIgbGVmdFR5cGUgPSBub2RlVHlwZShwcmV2KVxuICAgIHZhciByaWdodFR5cGUgPSBub2RlVHlwZShuZXh0KVxuXG4gICAgLy8gVHlwZSBjaGFuZ2VkLiBUaGlzIGNvdWxkIGJlIGZyb20gZWxlbWVudC0+dGV4dCwgdGV4dC0+Q29tcG9uZW50QSxcbiAgICAvLyBDb21wb25lbnRBLT5Db21wb25lbnRCIGV0Yy4gQnV0IE5PVCBkaXYtPnNwYW4uIFRoZXNlIGFyZSB0aGUgc2FtZSB0eXBlXG4gICAgLy8gKEVsZW1lbnROb2RlKSBidXQgZGlmZmVyZW50IHRhZyBuYW1lLlxuICAgIGlmIChsZWZ0VHlwZSAhPT0gcmlnaHRUeXBlKSByZXR1cm4gcmVwbGFjZUVsZW1lbnQoZW50aXR5SWQsIHBhdGgsIGVsLCBuZXh0KVxuXG4gICAgc3dpdGNoIChyaWdodFR5cGUpIHtcbiAgICAgIGNhc2UgJ3RleHQnOiByZXR1cm4gZGlmZlRleHQocHJldiwgbmV4dCwgZWwpXG4gICAgICBjYXNlICdlbXB0eSc6IHJldHVybiBlbFxuICAgICAgY2FzZSAnZWxlbWVudCc6IHJldHVybiBkaWZmRWxlbWVudChwYXRoLCBlbnRpdHlJZCwgcHJldiwgbmV4dCwgZWwpXG4gICAgICBjYXNlICdjb21wb25lbnQnOiByZXR1cm4gZGlmZkNvbXBvbmVudChwYXRoLCBlbnRpdHlJZCwgcHJldiwgbmV4dCwgZWwpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpZmYgdHdvIHRleHQgbm9kZXMgYW5kIHVwZGF0ZSB0aGUgZWxlbWVudC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZGlmZlRleHQgKHByZXZpb3VzLCBjdXJyZW50LCBlbCkge1xuICAgIGlmIChjdXJyZW50ICE9PSBwcmV2aW91cykgZWwuZGF0YSA9IGN1cnJlbnRcbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIC8qKlxuICAgKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhbiBFbGVtZW50Tm9kZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gZGlmZkNoaWxkcmVuIChwYXRoLCBlbnRpdHlJZCwgcHJldiwgbmV4dCwgZWwpIHtcbiAgICB2YXIgcG9zaXRpb25zID0gW11cbiAgICB2YXIgaGFzS2V5cyA9IGZhbHNlXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZWwuY2hpbGROb2RlcylcbiAgICB2YXIgbGVmdEtleXMgPSByZWR1Y2UocHJldi5jaGlsZHJlbiwga2V5TWFwUmVkdWNlciwge30pXG4gICAgdmFyIHJpZ2h0S2V5cyA9IHJlZHVjZShuZXh0LmNoaWxkcmVuLCBrZXlNYXBSZWR1Y2VyLCB7fSlcbiAgICB2YXIgY3VycmVudENoaWxkcmVuID0gYXNzaWduKHt9LCBjaGlsZHJlbltlbnRpdHlJZF0pXG5cbiAgICBmdW5jdGlvbiBrZXlNYXBSZWR1Y2VyIChhY2MsIGNoaWxkLCBpKSB7XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQuYXR0cmlidXRlcyAmJiBjaGlsZC5hdHRyaWJ1dGVzLmtleSAhPSBudWxsKSB7XG4gICAgICAgIGFjY1tjaGlsZC5hdHRyaWJ1dGVzLmtleV0gPSB7XG4gICAgICAgICAgZWxlbWVudDogY2hpbGQsXG4gICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgfVxuICAgICAgICBoYXNLZXlzID0gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH1cblxuICAgIC8vIERpZmYgYWxsIG9mIHRoZSBub2RlcyB0aGF0IGhhdmUga2V5cy4gVGhpcyBsZXRzIHVzIHJlLXVzZWQgZWxlbWVudHNcbiAgICAvLyBpbnN0ZWFkIG9mIG92ZXJyaWRpbmcgdGhlbSBhbmQgbGV0cyB1cyBtb3ZlIHRoZW0gYXJvdW5kLlxuICAgIGlmIChoYXNLZXlzKSB7XG5cbiAgICAgIC8vIFJlbW92YWxzXG4gICAgICBmb3JFYWNoKGxlZnRLZXlzLCBmdW5jdGlvbiAobGVmdE5vZGUsIGtleSkge1xuICAgICAgICBpZiAocmlnaHRLZXlzW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBsZWZ0UGF0aCA9IHBhdGggKyAnLicgKyBsZWZ0Tm9kZS5pbmRleFxuICAgICAgICAgIHJlbW92ZUVsZW1lbnQoXG4gICAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICAgIGxlZnRQYXRoLFxuICAgICAgICAgICAgY2hpbGROb2Rlc1tsZWZ0Tm9kZS5pbmRleF1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIFVwZGF0ZSBub2Rlc1xuICAgICAgZm9yRWFjaChyaWdodEtleXMsIGZ1bmN0aW9uIChyaWdodE5vZGUsIGtleSkge1xuICAgICAgICB2YXIgbGVmdE5vZGUgPSBsZWZ0S2V5c1trZXldXG5cbiAgICAgICAgLy8gV2Ugb25seSB3YW50IHVwZGF0ZXMgZm9yIG5vd1xuICAgICAgICBpZiAobGVmdE5vZGUgPT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgICAgdmFyIGxlZnRQYXRoID0gcGF0aCArICcuJyArIGxlZnROb2RlLmluZGV4XG5cbiAgICAgICAgLy8gVXBkYXRlZFxuICAgICAgICBwb3NpdGlvbnNbcmlnaHROb2RlLmluZGV4XSA9IGRpZmZOb2RlKFxuICAgICAgICAgIGxlZnRQYXRoLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIGxlZnROb2RlLmVsZW1lbnQsXG4gICAgICAgICAgcmlnaHROb2RlLmVsZW1lbnQsXG4gICAgICAgICAgY2hpbGROb2Rlc1tsZWZ0Tm9kZS5pbmRleF1cbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgYWxsIGNoaWxkIGNvbXBvbmVudHMgYW5kIGV2ZW50IGhhbmRsZXJzXG4gICAgICBmb3JFYWNoKHJpZ2h0S2V5cywgZnVuY3Rpb24gKHJpZ2h0Tm9kZSwga2V5KSB7XG4gICAgICAgIHZhciBsZWZ0Tm9kZSA9IGxlZnRLZXlzW2tleV1cblxuICAgICAgICAvLyBXZSBqdXN0IHdhbnQgZWxlbWVudHMgdGhhdCBoYXZlIG1vdmVkIGFyb3VuZFxuICAgICAgICBpZiAobGVmdE5vZGUgPT0gbnVsbCB8fCBsZWZ0Tm9kZS5pbmRleCA9PT0gcmlnaHROb2RlLmluZGV4KSByZXR1cm5cblxuICAgICAgICB2YXIgcmlnaHRQYXRoID0gcGF0aCArICcuJyArIHJpZ2h0Tm9kZS5pbmRleFxuICAgICAgICB2YXIgbGVmdFBhdGggPSBwYXRoICsgJy4nICsgbGVmdE5vZGUuaW5kZXhcblxuICAgICAgICAvLyBVcGRhdGUgYWxsIHRoZSBjaGlsZCBjb21wb25lbnQgcGF0aCBwb3NpdGlvbnMgdG8gbWF0Y2hcbiAgICAgICAgLy8gdGhlIGxhdGVzdCBwb3NpdGlvbnMgaWYgdGhleSd2ZSBjaGFuZ2VkLiBUaGlzIGlzIGEgYml0IGhhY2t5LlxuICAgICAgICBmb3JFYWNoKGN1cnJlbnRDaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkSWQsIGNoaWxkUGF0aCkge1xuICAgICAgICAgIGlmIChsZWZ0UGF0aCA9PT0gY2hpbGRQYXRoKSB7XG4gICAgICAgICAgICBkZWxldGUgY2hpbGRyZW5bZW50aXR5SWRdW2NoaWxkUGF0aF1cbiAgICAgICAgICAgIGNoaWxkcmVuW2VudGl0eUlkXVtyaWdodFBhdGhdID0gY2hpbGRJZFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIE5vdyBhZGQgYWxsIG9mIHRoZSBuZXcgbm9kZXMgbGFzdCBpbiBjYXNlIHRoZWlyIHBhdGhcbiAgICAgIC8vIHdvdWxkIGhhdmUgY29uZmxpY3RlZCB3aXRoIG9uZSBvZiB0aGUgcHJldmlvdXMgcGF0aHMuXG4gICAgICBmb3JFYWNoKHJpZ2h0S2V5cywgZnVuY3Rpb24gKHJpZ2h0Tm9kZSwga2V5KSB7XG4gICAgICAgIHZhciByaWdodFBhdGggPSBwYXRoICsgJy4nICsgcmlnaHROb2RlLmluZGV4XG4gICAgICAgIGlmIChsZWZ0S2V5c1trZXldID09IG51bGwpIHtcbiAgICAgICAgICBwb3NpdGlvbnNbcmlnaHROb2RlLmluZGV4XSA9IHRvTmF0aXZlKFxuICAgICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgICByaWdodFBhdGgsXG4gICAgICAgICAgICByaWdodE5vZGUuZWxlbWVudFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF4TGVuZ3RoID0gTWF0aC5tYXgocHJldi5jaGlsZHJlbi5sZW5ndGgsIG5leHQuY2hpbGRyZW4ubGVuZ3RoKVxuXG4gICAgICAvLyBOb3cgZGlmZiBhbGwgb2YgdGhlIG5vZGVzIHRoYXQgZG9uJ3QgaGF2ZSBrZXlzXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heExlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsZWZ0Tm9kZSA9IHByZXYuY2hpbGRyZW5baV1cbiAgICAgICAgdmFyIHJpZ2h0Tm9kZSA9IG5leHQuY2hpbGRyZW5baV1cblxuICAgICAgICAvLyBSZW1vdmFsc1xuICAgICAgICBpZiAocmlnaHROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZW1vdmVFbGVtZW50KFxuICAgICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgICBwYXRoICsgJy4nICsgaSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNbaV1cbiAgICAgICAgICApXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5ldyBOb2RlXG4gICAgICAgIGlmIChsZWZ0Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcG9zaXRpb25zW2ldID0gdG9OYXRpdmUoXG4gICAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICAgIHBhdGggKyAnLicgKyBpLFxuICAgICAgICAgICAgcmlnaHROb2RlXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGVkXG4gICAgICAgIHBvc2l0aW9uc1tpXSA9IGRpZmZOb2RlKFxuICAgICAgICAgIHBhdGggKyAnLicgKyBpLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIGxlZnROb2RlLFxuICAgICAgICAgIHJpZ2h0Tm9kZSxcbiAgICAgICAgICBjaGlsZE5vZGVzW2ldXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXBvc2l0aW9uIGFsbCB0aGUgZWxlbWVudHNcbiAgICBmb3JFYWNoKHBvc2l0aW9ucywgZnVuY3Rpb24gKGNoaWxkRWwsIG5ld1Bvc2l0aW9uKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZWwuY2hpbGROb2Rlc1tuZXdQb3NpdGlvbl1cbiAgICAgIGlmIChjaGlsZEVsICYmIGNoaWxkRWwgIT09IHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgZWwuaW5zZXJ0QmVmb3JlKGNoaWxkRWwsIHRhcmdldClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChjaGlsZEVsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaWZmIHRoZSBhdHRyaWJ1dGVzIGFuZCBhZGQvcmVtb3ZlIHRoZW0uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGRpZmZBdHRyaWJ1dGVzIChwcmV2LCBuZXh0LCBlbCwgZW50aXR5SWQsIHBhdGgpIHtcbiAgICB2YXIgbmV4dEF0dHJzID0gbmV4dC5hdHRyaWJ1dGVzXG4gICAgdmFyIHByZXZBdHRycyA9IHByZXYuYXR0cmlidXRlc1xuXG4gICAgLy8gYWRkIG5ldyBhdHRyc1xuICAgIGZvckVhY2gobmV4dEF0dHJzLCBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgIGlmIChldmVudHNbbmFtZV0gfHwgIShuYW1lIGluIHByZXZBdHRycykgfHwgcHJldkF0dHJzW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICBzZXRBdHRyaWJ1dGUoZW50aXR5SWQsIHBhdGgsIGVsLCBuYW1lLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gcmVtb3ZlIG9sZCBhdHRyc1xuICAgIGZvckVhY2gocHJldkF0dHJzLCBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gbmV4dEF0dHJzKSkge1xuICAgICAgICByZW1vdmVBdHRyaWJ1dGUoZW50aXR5SWQsIHBhdGgsIGVsLCBuYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGEgY29tcG9uZW50IHdpdGggdGhlIHByb3BzIGZyb20gdGhlIG5leHQgbm9kZS4gSWZcbiAgICogdGhlIGNvbXBvbmVudCB0eXBlIGhhcyBjaGFuZ2VkLCB3ZSdsbCBqdXN0IHJlbW92ZSB0aGUgb2xkIG9uZVxuICAgKiBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgY29tcG9uZW50LlxuICAgKi9cblxuICBmdW5jdGlvbiBkaWZmQ29tcG9uZW50IChwYXRoLCBlbnRpdHlJZCwgcHJldiwgbmV4dCwgZWwpIHtcbiAgICBpZiAobmV4dC50eXBlICE9PSBwcmV2LnR5cGUpIHtcbiAgICAgIHJldHVybiByZXBsYWNlRWxlbWVudChlbnRpdHlJZCwgcGF0aCwgZWwsIG5leHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0YXJnZXRJZCA9IGNoaWxkcmVuW2VudGl0eUlkXVtwYXRoXVxuXG4gICAgICAvLyBUaGlzIGlzIGEgaGFjayBmb3Igbm93XG4gICAgICBpZiAodGFyZ2V0SWQpIHtcbiAgICAgICAgdXBkYXRlRW50aXR5UHJvcHModGFyZ2V0SWQsIGFzc2lnbih7IGNoaWxkcmVuOiBuZXh0LmNoaWxkcmVuIH0sIG5leHQuYXR0cmlidXRlcykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaWZmIHR3byBlbGVtZW50IG5vZGVzLlxuICAgKi9cblxuICBmdW5jdGlvbiBkaWZmRWxlbWVudCAocGF0aCwgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKSB7XG4gICAgaWYgKG5leHQudHlwZSAhPT0gcHJldi50eXBlKSByZXR1cm4gcmVwbGFjZUVsZW1lbnQoZW50aXR5SWQsIHBhdGgsIGVsLCBuZXh0KVxuICAgIGRpZmZBdHRyaWJ1dGVzKHByZXYsIG5leHQsIGVsLCBlbnRpdHlJZCwgcGF0aClcbiAgICBkaWZmQ2hpbGRyZW4ocGF0aCwgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKVxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBET00gYW5kIHVubW91bnRzIGFuZCBjb21wb25lbnRzXG4gICAqIHRoYXQgYXJlIHdpdGhpbiB0aGF0IGJyYW5jaFxuICAgKlxuICAgKiBzaWRlIGVmZmVjdHM6XG4gICAqICAgLSByZW1vdmVzIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAqICAgLSByZW1vdmVzIGludGVybmFsIHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudGl0eUlkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQgKGVudGl0eUlkLCBwYXRoLCBlbCkge1xuICAgIHZhciBjaGlsZHJlbkJ5UGF0aCA9IGNoaWxkcmVuW2VudGl0eUlkXVxuICAgIHZhciBjaGlsZElkID0gY2hpbGRyZW5CeVBhdGhbcGF0aF1cbiAgICB2YXIgZW50aXR5SGFuZGxlcnMgPSBoYW5kbGVyc1tlbnRpdHlJZF0gfHwge31cbiAgICB2YXIgcmVtb3ZhbHMgPSBbXVxuXG4gICAgLy8gSWYgdGhlIHBhdGggcG9pbnRzIHRvIGEgY29tcG9uZW50IHdlIHNob3VsZCB1c2UgdGhhdFxuICAgIC8vIGNvbXBvbmVudHMgZWxlbWVudCBpbnN0ZWFkLCBiZWNhdXNlIGl0IG1pZ2h0IGhhdmUgbW92ZWQgaXQuXG4gICAgaWYgKGNoaWxkSWQpIHtcbiAgICAgIHZhciBjaGlsZCA9IGVudGl0aWVzW2NoaWxkSWRdXG4gICAgICBlbCA9IGNoaWxkLm5hdGl2ZUVsZW1lbnRcbiAgICAgIHVubW91bnRFbnRpdHkoY2hpbGRJZClcbiAgICAgIHJlbW92YWxzLnB1c2gocGF0aClcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBKdXN0IHJlbW92ZSB0aGUgdGV4dCBub2RlXG4gICAgICBpZiAoIWlzRWxlbWVudChlbCkpIHJldHVybiBlbCAmJiBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG4gICAgICAvLyBUaGVuIHdlIG5lZWQgdG8gZmluZCBhbnkgY29tcG9uZW50cyB3aXRoaW4gdGhpc1xuICAgICAgLy8gYnJhbmNoIGFuZCB1bm1vdW50IHRoZW0uXG4gICAgICBmb3JFYWNoKGNoaWxkcmVuQnlQYXRoLCBmdW5jdGlvbiAoY2hpbGRJZCwgY2hpbGRQYXRoKSB7XG4gICAgICAgIGlmIChjaGlsZFBhdGggPT09IHBhdGggfHwgaXNXaXRoaW5QYXRoKHBhdGgsIGNoaWxkUGF0aCkpIHtcbiAgICAgICAgICB1bm1vdW50RW50aXR5KGNoaWxkSWQpXG4gICAgICAgICAgcmVtb3ZhbHMucHVzaChjaGlsZFBhdGgpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnRzIGF0IHRoaXMgcGF0aCBvciBiZWxvdyBpdFxuICAgICAgZm9yRWFjaChlbnRpdHlIYW5kbGVycywgZnVuY3Rpb24gKGZuLCBoYW5kbGVyUGF0aCkge1xuICAgICAgICBpZiAoaGFuZGxlclBhdGggPT09IHBhdGggfHwgaXNXaXRoaW5QYXRoKHBhdGgsIGhhbmRsZXJQYXRoKSkge1xuICAgICAgICAgIHJlbW92ZUV2ZW50KGVudGl0eUlkLCBoYW5kbGVyUGF0aClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIHBhdGhzIGZyb20gdGhlIG9iamVjdCB3aXRob3V0IHRvdWNoaW5nIHRoZVxuICAgIC8vIG9sZCBvYmplY3QuIFRoaXMga2VlcHMgdGhlIG9iamVjdCB1c2luZyBmYXN0IHByb3BlcnRpZXMuXG4gICAgZm9yRWFjaChyZW1vdmFscywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgIGRlbGV0ZSBjaGlsZHJlbltlbnRpdHlJZF1bcGF0aF1cbiAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIERPTVxuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSBhbiBlbGVtZW50IGluIHRoZSBET00uIFJlbW92aW5nIGFsbCBjb21wb25lbnRzXG4gICAqIHdpdGhpbiB0aGF0IGVsZW1lbnQgYW5kIHJlLXJlbmRlcmluZyB0aGUgbmV3IHZpcnR1YWwgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cbiAgZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQgKGVudGl0eUlkLCBwYXRoLCBlbCwgdm5vZGUpIHtcbiAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZVxuICAgIHZhciBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkTm9kZXMsIGVsKVxuXG4gICAgLy8gcmVtb3ZlIHRoZSBwcmV2aW91cyBlbGVtZW50IGFuZCBhbGwgbmVzdGVkIGNvbXBvbmVudHMuIFRoaXNcbiAgICAvLyBuZWVkcyB0byBoYXBwZW4gYmVmb3JlIHdlIGNyZWF0ZSB0aGUgbmV3IGVsZW1lbnQgc28gd2UgZG9uJ3RcbiAgICAvLyBnZXQgY2xhc2hlcyBvbiB0aGUgY29tcG9uZW50IHBhdGhzLlxuICAgIHJlbW92ZUVsZW1lbnQoZW50aXR5SWQsIHBhdGgsIGVsKVxuXG4gICAgLy8gdGhlbiBhZGQgdGhlIG5ldyBlbGVtZW50IGluIHRoZXJlXG4gICAgdmFyIG5ld0VsID0gdG9OYXRpdmUoZW50aXR5SWQsIHBhdGgsIHZub2RlKVxuICAgIHZhciB0YXJnZXQgPSBwYXJlbnQuY2hpbGROb2Rlc1tpbmRleF1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobmV3RWwsIHRhcmdldClcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0VsKVxuICAgIH1cblxuICAgIC8vIHdhbGsgdXAgdGhlIHRyZWUgYW5kIHVwZGF0ZSBhbGwgYGVudGl0eS5uYXRpdmVFbGVtZW50YCByZWZlcmVuY2VzLlxuICAgIGlmIChlbnRpdHlJZCAhPT0gJ3Jvb3QnICYmIHBhdGggPT09ICcwJykge1xuICAgICAgdXBkYXRlTmF0aXZlRWxlbWVudChlbnRpdHlJZCwgbmV3RWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFsbCBlbnRpdGllcyBpbiBhIGJyYW5jaCB0aGF0IGhhdmUgdGhlIHNhbWUgbmF0aXZlRWxlbWVudC4gVGhpc1xuICAgKiBoYXBwZW5zIHdoZW4gYSBjb21wb25lbnQgaGFzIGFub3RoZXIgY29tcG9uZW50IGFzIGl0J3Mgcm9vdCBub2RlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW50aXR5SWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbmV3RWxcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlTmF0aXZlRWxlbWVudCAoZW50aXR5SWQsIG5ld0VsKSB7XG4gICAgdmFyIHRhcmdldCA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgIGlmICh0YXJnZXQub3duZXJJZCA9PT0gJ3Jvb3QnKSByZXR1cm5cbiAgICBpZiAoY2hpbGRyZW5bdGFyZ2V0Lm93bmVySWRdWycwJ10gPT09IGVudGl0eUlkKSB7XG4gICAgICBlbnRpdGllc1t0YXJnZXQub3duZXJJZF0ubmF0aXZlRWxlbWVudCA9IG5ld0VsXG4gICAgICB1cGRhdGVOYXRpdmVFbGVtZW50KHRhcmdldC5vd25lcklkLCBuZXdFbClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBhdHRyaWJ1dGUgb2YgYW4gZWxlbWVudCwgcGVyZm9ybWluZyBhZGRpdGlvbmFsIHRyYW5zZm9ybWF0aW9uc1xuICAgKiBkZXBlbmRuaW5nIG9uIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICovXG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlIChlbnRpdHlJZCwgcGF0aCwgZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKGVudGl0eUlkLCBwYXRoLCBlbCwgbmFtZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZXZlbnRzW25hbWVdKSB7XG4gICAgICBhZGRFdmVudChlbnRpdHlJZCwgcGF0aCwgZXZlbnRzW25hbWVdLCB2YWx1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgY2FzZSAnZGlzYWJsZWQnOlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICBlbFtuYW1lXSA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2lubmVySFRNTCc6XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHZhbHVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgIHNldEVsZW1lbnRWYWx1ZShlbCwgdmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIHN2Zy5pc0F0dHJpYnV0ZShuYW1lKTpcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlTlMoc3ZnLm5hbWVzcGFjZSwgbmFtZSwgdmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBhdHRyaWJ1dGUsIHBlcmZvcm1pbmcgYWRkaXRpb25hbCB0cmFuc2Zvcm1hdGlvbnNcbiAgICogZGVwZW5kbmluZyBvbiB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlIChlbnRpdHlJZCwgcGF0aCwgZWwsIG5hbWUpIHtcbiAgICBpZiAoZXZlbnRzW25hbWVdKSB7XG4gICAgICByZW1vdmVFdmVudChlbnRpdHlJZCwgcGF0aCwgZXZlbnRzW25hbWVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSAnY2hlY2tlZCc6XG4gICAgICBjYXNlICdkaXNhYmxlZCc6XG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIGVsW25hbWVdID0gZmFsc2VcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2lubmVySFRNTCc6XG4gICAgICAgIGVsLmlubmVySFRNTCA9ICcnXG4gICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgIHNldEVsZW1lbnRWYWx1ZShlbCwgbnVsbClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIG9uZSB0cmVlIHBhdGggaXMgd2l0aGluXG4gICAqIGFub3RoZXIgdHJlZSBwYXRoLiBFeGFtcGxlOlxuICAgKlxuICAgKiAwLjEgdnMgMC4xLjEgPSB0cnVlXG4gICAqIDAuMiB2cyAwLjMuNSA9IGZhbHNlXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG5cbiAgZnVuY3Rpb24gaXNXaXRoaW5QYXRoICh0YXJnZXQsIHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKHRhcmdldCArICcuJykgPT09IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBJcyB0aGUgRE9NIG5vZGUgYW4gZWxlbWVudCBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudCAoZWwpIHtcbiAgICByZXR1cm4gISEoZWwgJiYgZWwudGFnTmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIHRoZSBjaGlsZCBub2RlcyBmcm9tIGFuIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4gKGVsKSB7XG4gICAgd2hpbGUgKGVsLmZpcnN0Q2hpbGQpIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIGhvb2sgb24gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgaG9vay5cbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eSBUaGUgY29tcG9uZW50IGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRvIHBhc3MgYWxvbmcgdG8gaG9vay5cbiAgICovXG5cbiAgZnVuY3Rpb24gdHJpZ2dlciAobmFtZSwgZW50aXR5LCBhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBlbnRpdHkuY29tcG9uZW50W25hbWVdICE9PSAnZnVuY3Rpb24nKSByZXR1cm5cbiAgICByZXR1cm4gZW50aXR5LmNvbXBvbmVudFtuYW1lXS5hcHBseShudWxsLCBhcmdzKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhbiBlbnRpdHkgdG8gbWF0Y2ggdGhlIGxhdGVzdCByZW5kZXJlZCB2b2RlLiBXZSBhbHdheXNcbiAgICogcmVwbGFjZSB0aGUgcHJvcHMgb24gdGhlIGNvbXBvbmVudCB3aGVuIGNvbXBvc2luZyB0aGVtLiBUaGlzXG4gICAqIHdpbGwgdHJpZ2dlciBhIHJlLXJlbmRlciBvbiBhbGwgY2hpbGRyZW4gYmVsb3cgdGhpcyBwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlRW50aXR5UHJvcHMgKGVudGl0eUlkLCBuZXh0UHJvcHMpIHtcbiAgICB2YXIgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdXG4gICAgZW50aXR5LnBlbmRpbmdQcm9wcyA9IGRlZmF1bHRzKHt9LCBuZXh0UHJvcHMsIGVudGl0eS5jb21wb25lbnQuZGVmYXVsdFByb3BzIHx8IHt9KVxuICAgIGVudGl0eS5kaXJ0eSA9IHRydWVcbiAgICBpbnZhbGlkYXRlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29tcG9uZW50IGluc3RhbmNlIHN0YXRlLlxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVFbnRpdHlTdGF0ZSAoZW50aXR5LCBuZXh0U3RhdGUpIHtcbiAgICBlbnRpdHkucGVuZGluZ1N0YXRlID0gYXNzaWduKGVudGl0eS5wZW5kaW5nU3RhdGUsIG5leHRTdGF0ZSlcbiAgICBlbnRpdHkuZGlydHkgPSB0cnVlXG4gICAgaW52YWxpZGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICogQ29tbWl0IHByb3BzIGFuZCBzdGF0ZSBjaGFuZ2VzIHRvIGFuIGVudGl0eS5cbiAgICovXG5cbiAgZnVuY3Rpb24gY29tbWl0IChlbnRpdHkpIHtcbiAgICBlbnRpdHkuY29udGV4dCA9IHtcbiAgICAgIHN0YXRlOiBlbnRpdHkucGVuZGluZ1N0YXRlLFxuICAgICAgcHJvcHM6IGVudGl0eS5wZW5kaW5nUHJvcHMsXG4gICAgICBpZDogZW50aXR5LmlkXG4gICAgfVxuICAgIGVudGl0eS5wZW5kaW5nU3RhdGUgPSBhc3NpZ24oe30sIGVudGl0eS5jb250ZXh0LnN0YXRlKVxuICAgIGVudGl0eS5wZW5kaW5nUHJvcHMgPSBhc3NpZ24oe30sIGVudGl0eS5jb250ZXh0LnByb3BzKVxuICAgIGVudGl0eS5kaXJ0eSA9IGZhbHNlXG4gICAgaWYgKHR5cGVvZiBlbnRpdHkuY29tcG9uZW50LnZhbGlkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbnRpdHkuY29tcG9uZW50LnZhbGlkYXRlKGVudGl0eS5jb250ZXh0KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gYXZvaWQgY3JlYXRpbmcgbmV3IHZpcnR1YWwgZG9tIGlmIHBvc3NpYmxlLlxuICAgKlxuICAgKiBMYXRlciB3ZSBtYXkgZXhwb3NlIHRoaXMgc28geW91IGNhbiBvdmVycmlkZSwgYnV0IG5vdCB0aGVyZSB5ZXQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHNob3VsZFVwZGF0ZSAoZW50aXR5KSB7XG4gICAgaWYgKCFlbnRpdHkuZGlydHkpIHJldHVybiBmYWxzZVxuICAgIGlmICghZW50aXR5LmNvbXBvbmVudC5zaG91bGRVcGRhdGUpIHJldHVybiB0cnVlXG4gICAgdmFyIG5leHRQcm9wcyA9IGVudGl0eS5wZW5kaW5nUHJvcHNcbiAgICB2YXIgbmV4dFN0YXRlID0gZW50aXR5LnBlbmRpbmdTdGF0ZVxuICAgIHZhciBib29sID0gZW50aXR5LmNvbXBvbmVudC5zaG91bGRVcGRhdGUoZW50aXR5LmNvbnRleHQsIG5leHRQcm9wcywgbmV4dFN0YXRlKVxuICAgIHJldHVybiBib29sXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZW50aXR5LlxuICAgKlxuICAgKiBUaGlzIGlzIG1vc3RseSB0byBwcmUtcHJlcHJvY2VzcyBjb21wb25lbnQgcHJvcGVydGllcyBhbmQgdmFsdWVzIGNoYWlucy5cbiAgICpcbiAgICogVGhlIGVuZCByZXN1bHQgaXMgZm9yIGV2ZXJ5IGNvbXBvbmVudCB0aGF0IGdldHMgbW91bnRlZCxcbiAgICogeW91IGNyZWF0ZSBhIHNldCBvZiBJTyBub2RlcyBpbiB0aGUgbmV0d29yayBmcm9tIHRoZSBgdmFsdWVgIGRlZmluaXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyIChlbnRpdHkpIHtcbiAgICByZWdpc3RlckVudGl0eShlbnRpdHkpXG4gICAgdmFyIGNvbXBvbmVudCA9IGVudGl0eS5jb21wb25lbnRcbiAgICBpZiAoY29tcG9uZW50LnJlZ2lzdGVyZWQpIHJldHVyblxuXG4gICAgLy8gaW5pdGlhbGl6ZSBzb3VyY2VzIG9uY2UgZm9yIGEgY29tcG9uZW50IHR5cGUuXG4gICAgcmVnaXN0ZXJTb3VyY2VzKGVudGl0eSlcbiAgICBjb21wb25lbnQucmVnaXN0ZXJlZCA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZW50aXR5IHRvIGRhdGEtc3RydWN0dXJlcyByZWxhdGVkIHRvIGNvbXBvbmVudHMvZW50aXRpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJFbnRpdHkoZW50aXR5KSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IGVudGl0eS5jb21wb25lbnRcbiAgICAvLyBhbGwgZW50aXRpZXMgZm9yIHRoaXMgY29tcG9uZW50IHR5cGUuXG4gICAgdmFyIGVudGl0aWVzID0gY29tcG9uZW50LmVudGl0aWVzID0gY29tcG9uZW50LmVudGl0aWVzIHx8IHt9XG4gICAgLy8gYWRkIGVudGl0eSB0byBjb21wb25lbnQgbGlzdFxuICAgIGVudGl0aWVzW2VudGl0eS5pZF0gPSBlbnRpdHlcbiAgICAvLyBtYXAgdG8gY29tcG9uZW50IHNvIHlvdSBjYW4gcmVtb3ZlIGxhdGVyLlxuICAgIGNvbXBvbmVudHNbZW50aXR5LmlkXSA9IGNvbXBvbmVudFxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgc291cmNlcyBmb3IgYSBjb21wb25lbnQgYnkgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKi9cblxuICBmdW5jdGlvbiByZWdpc3RlclNvdXJjZXMoZW50aXR5KSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IGNvbXBvbmVudHNbZW50aXR5LmlkXVxuICAgIC8vIGdldCAnY2xhc3MtbGV2ZWwnIHNvdXJjZXMuXG4gICAgLy8gaWYgd2UndmUgYWxyZWFkeSBob29rZWQgaXQgdXAsIHRoZW4gd2UncmUgZ29vZC5cbiAgICB2YXIgc291cmNlcyA9IGNvbXBvbmVudC5zb3VyY2VzXG4gICAgaWYgKHNvdXJjZXMpIHJldHVyblxuICAgIHZhciBlbnRpdGllcyA9IGNvbXBvbmVudC5lbnRpdGllc1xuXG4gICAgLy8gaG9vayB1cCBzb3VyY2VzLlxuICAgIHZhciBtYXAgPSBjb21wb25lbnQuc291cmNlVG9Qcm9wZXJ0eU5hbWUgPSB7fVxuICAgIGNvbXBvbmVudC5zb3VyY2VzID0gc291cmNlcyA9IFtdXG4gICAgdmFyIHByb3BUeXBlcyA9IGNvbXBvbmVudC5wcm9wVHlwZXNcbiAgICBmb3IgKHZhciBuYW1lIGluIHByb3BUeXBlcykge1xuICAgICAgdmFyIGRhdGEgPSBwcm9wVHlwZXNbbmFtZV1cbiAgICAgIGlmICghZGF0YSkgY29udGludWVcbiAgICAgIGlmICghZGF0YS5zb3VyY2UpIGNvbnRpbnVlXG4gICAgICBzb3VyY2VzLnB1c2goZGF0YS5zb3VyY2UpXG4gICAgICBtYXBbZGF0YS5zb3VyY2VdID0gbmFtZVxuICAgIH1cblxuICAgIC8vIHNlbmQgdmFsdWUgdXBkYXRlcyB0byBhbGwgY29tcG9uZW50IGluc3RhbmNlcy5cbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgY29ubmVjdGlvbnNbc291cmNlXSA9IGNvbm5lY3Rpb25zW3NvdXJjZV0gfHwgW11cbiAgICAgIGNvbm5lY3Rpb25zW3NvdXJjZV0ucHVzaCh1cGRhdGUpXG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZSAoZGF0YSkge1xuICAgICAgICB2YXIgcHJvcCA9IG1hcFtzb3VyY2VdXG4gICAgICAgIGZvciAodmFyIGVudGl0eUlkIGluIGVudGl0aWVzKSB7XG4gICAgICAgICAgdmFyIGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgICAgICAgIHZhciBjaGFuZ2VzID0ge31cbiAgICAgICAgICBjaGFuZ2VzW3Byb3BdID0gZGF0YVxuICAgICAgICAgIHVwZGF0ZUVudGl0eVByb3BzKGVudGl0eUlkLCBhc3NpZ24oZW50aXR5LnBlbmRpbmdQcm9wcywgY2hhbmdlcykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzb3VyY2UgdmFsdWUgb24gdGhlIGVudGl0eVxuICAgKlxuICAgKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHNldFNvdXJjZXMgKGVudGl0eSkge1xuICAgIHZhciBjb21wb25lbnQgPSBlbnRpdHkuY29tcG9uZW50XG4gICAgdmFyIG1hcCA9IGNvbXBvbmVudC5zb3VyY2VUb1Byb3BlcnR5TmFtZVxuICAgIHZhciBzb3VyY2VzID0gY29tcG9uZW50LnNvdXJjZXNcbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgdmFyIG5hbWUgPSBtYXBbc291cmNlXVxuICAgICAgaWYgKGVudGl0eS5wZW5kaW5nUHJvcHNbbmFtZV0gIT0gbnVsbCkgcmV0dXJuXG4gICAgICBlbnRpdHkucGVuZGluZ1Byb3BzW25hbWVdID0gYXBwLnNvdXJjZXNbc291cmNlXSAvLyBnZXQgbGF0ZXN0IHZhbHVlIHBsdWdnZWQgaW50byBnbG9iYWwgc3RvcmVcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbGwgb2YgdGhlIERPTSBldmVudCBsaXN0ZW5lcnNcbiAgICovXG5cbiAgZnVuY3Rpb24gYWRkTmF0aXZlRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XG4gICAgICByb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlRXZlbnQsIHRydWUpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWxsIG9mIHRoZSBET00gZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZU5hdGl2ZUV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICBmb3JFYWNoKGV2ZW50cywgZnVuY3Rpb24gKGV2ZW50VHlwZSkge1xuICAgICAgcm9vdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZUV2ZW50LCB0cnVlKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGFuIGV2ZW50IHRoYXQgaGFzIG9jY3VyZWQgd2l0aGluIHRoZSBjb250YWluZXJcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICovXG5cbiAgZnVuY3Rpb24gaGFuZGxlRXZlbnQgKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgIHZhciBldmVudFR5cGUgPSBldmVudC50eXBlXG5cbiAgICAvLyBXYWxrIHVwIHRoZSBET00gdHJlZSBhbmQgc2VlIGlmIHRoZXJlIGlzIGEgaGFuZGxlclxuICAgIC8vIGZvciB0aGlzIGV2ZW50IHR5cGUgaGlnaGVyIHVwLlxuICAgIHdoaWxlICh0YXJnZXQpIHtcbiAgICAgIHZhciBmbiA9IGtleXBhdGguZ2V0KGhhbmRsZXJzLCBbdGFyZ2V0Ll9fZW50aXR5X18sIHRhcmdldC5fX3BhdGhfXywgZXZlbnRUeXBlXSlcbiAgICAgIGlmIChmbikge1xuICAgICAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRhcmdldFxuICAgICAgICBpZiAoZm4oZXZlbnQpID09PSBmYWxzZSkgYnJlYWtcbiAgICAgIH1cbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnRzIGZvciBhbiBlbGVtZW50LCBhbmQgYWxsIGl0J3MgcmVuZGVyZWQgY2hpbGQgZWxlbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKi9cblxuICBmdW5jdGlvbiBhZGRFdmVudCAoZW50aXR5SWQsIHBhdGgsIGV2ZW50VHlwZSwgZm4pIHtcbiAgICBrZXlwYXRoLnNldChoYW5kbGVycywgW2VudGl0eUlkLCBwYXRoLCBldmVudFR5cGVdLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIGUsIGVudGl0eS5jb250ZXh0LCBzZXRTdGF0ZShlbnRpdHkpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGV2ZW50cyBmb3IgYSBlbnRpdHlJZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW50aXR5SWRcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQgKGVudGl0eUlkLCBwYXRoLCBldmVudFR5cGUpIHtcbiAgICB2YXIgYXJncyA9IFtlbnRpdHlJZF1cbiAgICBpZiAocGF0aCkgYXJncy5wdXNoKHBhdGgpXG4gICAgaWYgKGV2ZW50VHlwZSkgYXJncy5wdXNoKGV2ZW50VHlwZSlcbiAgICBrZXlwYXRoLmRlbChoYW5kbGVycywgYXJncylcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYWxsIGV2ZW50cyBmcm9tIGFuIGVudGl0eVxuICAgKlxuICAgKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbEV2ZW50cyAoZW50aXR5SWQpIHtcbiAgICBrZXlwYXRoLmRlbChoYW5kbGVycywgW2VudGl0eUlkXSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIGZvciBkZWJ1Z2dpbmcgdG8gaW5zcGVjdCB0aGUgY3VycmVudCBzdGF0ZSB3aXRob3V0XG4gICAqIHVzIG5lZWRpbmcgdG8gZXhwbGljaXRseSBtYW5hZ2Ugc3RvcmluZy91cGRhdGluZyByZWZlcmVuY2VzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdGllczogZW50aXRpZXMsXG4gICAgICBoYW5kbGVyczogaGFuZGxlcnMsXG4gICAgICBjb25uZWN0aW9uczogY29ubmVjdGlvbnMsXG4gICAgICBjdXJyZW50RWxlbWVudDogY3VycmVudEVsZW1lbnQsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgYXBwOiBhcHAsXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gb2JqZWN0IHRoYXQgbGV0cyB1cyBjb21wbGV0ZWx5IHJlbW92ZSB0aGUgYXV0b21hdGljXG4gICAqIERPTSByZW5kZXJpbmcgYW5kIGV4cG9ydCBkZWJ1Z2dpbmcgdG9vbHMuXG4gICAqL1xuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlOiB0ZWFyZG93bixcbiAgICBpbnNwZWN0OiBpbnNwZWN0XG4gIH1cbn1cblxuLyoqXG4gKiBBIHJlbmRlcmVkIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAqXG4gKiBUaGlzIG1hbmFnZXMgdGhlIGxpZmVjeWNsZSwgcHJvcHMgYW5kIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gKiBJdCdzIGJhc2ljYWxseSBqdXN0IGEgZGF0YSBvYmplY3QgZm9yIG1vcmUgc3RyYWlnaHRmb3dhcmQgbG9va3VwLlxuICpcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICovXG5cbmZ1bmN0aW9uIEVudGl0eSAoY29tcG9uZW50LCBwcm9wcywgb3duZXJJZCkge1xuICB0aGlzLmlkID0gdWlkKClcbiAgdGhpcy5vd25lcklkID0gb3duZXJJZFxuICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudFxuICB0aGlzLnByb3BUeXBlcyA9IGNvbXBvbmVudC5wcm9wVHlwZXMgfHwge31cbiAgdGhpcy5jb250ZXh0ID0ge31cbiAgdGhpcy5jb250ZXh0LmlkID0gdGhpcy5pZFxuICB0aGlzLmNvbnRleHQucHJvcHMgPSBkZWZhdWx0cyhwcm9wcyB8fCB7fSwgY29tcG9uZW50LmRlZmF1bHRQcm9wcyB8fCB7fSlcbiAgdGhpcy5jb250ZXh0LnN0YXRlID0gdGhpcy5jb21wb25lbnQuaW5pdGlhbFN0YXRlID8gdGhpcy5jb21wb25lbnQuaW5pdGlhbFN0YXRlKHRoaXMuY29udGV4dC5wcm9wcykgOiB7fVxuICB0aGlzLnBlbmRpbmdQcm9wcyA9IGFzc2lnbih7fSwgdGhpcy5jb250ZXh0LnByb3BzKVxuICB0aGlzLnBlbmRpbmdTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5jb250ZXh0LnN0YXRlKVxuICB0aGlzLmRpcnR5ID0gZmFsc2VcbiAgdGhpcy52aXJ0dWFsRWxlbWVudCA9IG51bGxcbiAgdGhpcy5uYXRpdmVFbGVtZW50ID0gbnVsbFxuICB0aGlzLmRpc3BsYXlOYW1lID0gY29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCdcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgbmVhcmVzdCAnYm9keScgYW5jZXN0b3Igb2YgdGhlIGdpdmVuIGVsZW1lbnQgb3IgZWxzZSB0aGUgcm9vdFxuICogZWxlbWVudCBvZiB0aGUgZG9jdW1lbnQgaW4gd2hpY2ggc3RhbmRzIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGlmIHlvdSB3YW50IHRvIGF0dGFjaCB0aGUgZXZlbnRzIGhhbmRsZXIgdG8gdGhlIGNvcnJlY3RcbiAqIGVsZW1lbnQgYW5kIGJlIGFibGUgdG8gZGlzcGF0Y2ggZXZlbnRzIGluIGRvY3VtZW50IGZyYWdtZW50cyBzdWNoIGFzXG4gKiBTaGFkb3cgRE9NLlxuICpcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCBUaGUgZWxlbWVudCBvbiB3aGljaCB3ZSB3aWxsIHJlbmRlciBhbiBhcHAuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgVGhlIHJvb3QgZWxlbWVudCBvbiB3aGljaCB3ZSB3aWxsIGF0dGFjaCB0aGUgZXZlbnRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5cbiAqL1xuXG5mdW5jdGlvbiBnZXRSb290RWxlbWVudCAoZWwpIHtcbiAgd2hpbGUgKGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICBpZiAoZWwudGFnTmFtZSA9PT0gJ0JPRFknIHx8ICFlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50XG4gIH1cbiAgcmV0dXJuIGVsXG59XG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZSBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IGFuZCBrZWVwIHRoZSB0ZXh0IHNlbGVjdGlvblxuICogZm9yIGlucHV0IGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gc2V0RWxlbWVudFZhbHVlIChlbCwgdmFsdWUpIHtcbiAgaWYgKGVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGNhblNlbGVjdFRleHQoZWwpKSB7XG4gICAgdmFyIHN0YXJ0ID0gZWwuc2VsZWN0aW9uU3RhcnRcbiAgICB2YXIgZW5kID0gZWwuc2VsZWN0aW9uRW5kXG4gICAgZWwudmFsdWUgPSB2YWx1ZVxuICAgIGVsLnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpXG4gIH0gZWxzZSB7XG4gICAgZWwudmFsdWUgPSB2YWx1ZVxuICB9XG59XG5cbi8qKlxuICogRm9yIHNvbWUgcmVhc29uIG9ubHkgY2VydGFpbiB0eXBlcyBvZiBpbnB1dHMgY2FuIHNldCB0aGUgc2VsZWN0aW9uIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBjYW5TZWxlY3RUZXh0IChlbCkge1xuICByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBbJ3RleHQnLCdzZWFyY2gnLCdwYXNzd29yZCcsJ3RlbCcsJ3VybCddLmluZGV4T2YoZWwudHlwZSkgPiAtMVxufVxuXG59LHtcIi4vZXZlbnRzXCI6MixcIi4vbm9kZS10eXBlXCI6NCxcIi4vc3ZnXCI6NyxcImNvbXBvbmVudC1yYWZcIjo5LFwiZmFzdC5qcy9mb3JFYWNoXCI6MTMsXCJmYXN0LmpzL29iamVjdC9hc3NpZ25cIjoxNixcImZhc3QuanMvcmVkdWNlXCI6MTksXCJnZXQtdWlkXCI6MjAsXCJpcy1kb21cIjoyMSxcIm9iamVjdC1kZWZhdWx0c1wiOjI0LFwib2JqZWN0LXBhdGhcIjoyNX1dLDY6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBkZWZhdWx0cyA9IF9yZXF1aXJlKCdvYmplY3QtZGVmYXVsdHMnKVxudmFyIG5vZGVUeXBlID0gX3JlcXVpcmUoJy4vbm9kZS10eXBlJylcbnZhciB0eXBlID0gX3JlcXVpcmUoJ2NvbXBvbmVudC10eXBlJylcblxuLyoqXG4gKiBFeHBvc2UgYHN0cmluZ2lmeWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwKSB7XG4gIGlmICghYXBwLmVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgbW91bnRlZCcpXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRvIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3Byb3BzXVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeSAoY29tcG9uZW50LCBvcHRQcm9wcywgY2hpbGRyZW4pIHtcbiAgICB2YXIgcHJvcFR5cGVzID0gY29tcG9uZW50LnByb3BUeXBlcyB8fCB7fVxuICAgIHZhciBwcm9wcyA9IGRlZmF1bHRzKG9wdFByb3BzIHx8IHt9LCBjb21wb25lbnQuZGVmYXVsdFByb3BzIHx8IHt9KVxuICAgIHZhciBzdGF0ZSA9IGNvbXBvbmVudC5pbml0aWFsU3RhdGUgPyBjb21wb25lbnQuaW5pdGlhbFN0YXRlKHByb3BzKSA6IHt9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gcHJvcFR5cGVzKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHByb3BUeXBlc1tuYW1lXVxuICAgICAgaWYgKG9wdGlvbnMuc291cmNlKSB7XG4gICAgICAgIHByb3BzW25hbWVdID0gYXBwLnNvdXJjZXNbb3B0aW9ucy5zb3VyY2VdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudC5iZWZvcmVNb3VudCkgY29tcG9uZW50LmJlZm9yZU1vdW50KHsgcHJvcHM6IHByb3BzLCBzdGF0ZTogc3RhdGUgfSlcbiAgICBpZiAoY29tcG9uZW50LmJlZm9yZVJlbmRlcikgY29tcG9uZW50LmJlZm9yZVJlbmRlcih7IHByb3BzOiBwcm9wcywgc3RhdGU6IHN0YXRlIH0pXG4gICAgdmFyIG5vZGUgPSBjb21wb25lbnQucmVuZGVyKHsgcHJvcHM6IHByb3BzLCBzdGF0ZTogc3RhdGUgfSlcbiAgICByZXR1cm4gc3RyaW5naWZ5Tm9kZShub2RlLCAnMCcpXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGEgbm9kZSB0byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtUcmVlfSB0cmVlXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG5cbiAgZnVuY3Rpb24gc3RyaW5naWZ5Tm9kZSAobm9kZSwgcGF0aCkge1xuICAgIHN3aXRjaCAobm9kZVR5cGUobm9kZSkpIHtcbiAgICAgIGNhc2UgJ2VtcHR5JzogcmV0dXJuICc8bm9zY3JpcHQgLz4nXG4gICAgICBjYXNlICd0ZXh0JzogcmV0dXJuIG5vZGVcbiAgICAgIGNhc2UgJ2VsZW1lbnQnOlxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzXG4gICAgICAgIHZhciB0YWdOYW1lID0gbm9kZS50eXBlXG4gICAgICAgIHZhciBpbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmlubmVySFRNTFxuICAgICAgICB2YXIgc3RyID0gJzwnICsgdGFnTmFtZSArIGF0dHJzKGF0dHJpYnV0ZXMpICsgJz4nXG5cbiAgICAgICAgaWYgKGlubmVySFRNTCkge1xuICAgICAgICAgIHN0ciArPSBpbm5lckhUTUxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgc3RyICs9IHN0cmluZ2lmeU5vZGUoY2hpbGRyZW5baV0sIHBhdGggKyAnLicgKyBpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0ciArPSAnPC8nICsgdGFnTmFtZSArICc+J1xuICAgICAgICByZXR1cm4gc3RyXG4gICAgICBjYXNlICdjb21wb25lbnQnOiByZXR1cm4gc3RyaW5naWZ5KG5vZGUudHlwZSwgbm9kZS5hdHRyaWJ1dGVzLCBub2RlLmNoaWxkcmVuKVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0eXBlJylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnlOb2RlKGFwcC5lbGVtZW50LCAnMCcpXG59XG5cbi8qKlxuICogSFRNTCBhdHRyaWJ1dGVzIHRvIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gYXR0cnMgKGF0dHJpYnV0ZXMpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1trZXldXG4gICAgaWYgKGtleSA9PT0gJ2lubmVySFRNTCcpIGNvbnRpbnVlXG4gICAgaWYgKGlzVmFsaWRBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpIHN0ciArPSBhdHRyKGtleSwgYXR0cmlidXRlc1trZXldKVxuICB9XG4gIHJldHVybiBzdHJcbn1cblxuLyoqXG4gKiBIVE1MIGF0dHJpYnV0ZSB0byBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gYXR0ciAoa2V5LCB2YWwpIHtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJ1xufVxuXG4vKipcbiAqIElzIGEgdmFsdWUgYWJsZSB0byBiZSBzZXQgYSBhbiBhdHRyaWJ1dGUgdmFsdWU/XG4gKlxuICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkQXR0cmlidXRlVmFsdWUgKHZhbHVlKSB7XG4gIHZhciB2YWx1ZVR5cGUgPSB0eXBlKHZhbHVlKVxuICBzd2l0Y2ggKHZhbHVlVHlwZSkge1xuICBjYXNlICdzdHJpbmcnOlxuICBjYXNlICdudW1iZXInOlxuICAgIHJldHVybiB0cnVlO1xuXG4gIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIHJldHVybiB2YWx1ZTtcblxuICBkZWZhdWx0OlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG59LHtcIi4vbm9kZS10eXBlXCI6NCxcImNvbXBvbmVudC10eXBlXCI6MTAsXCJvYmplY3QtZGVmYXVsdHNcIjoyNH1dLDc6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0VsZW1lbnQ6IF9yZXF1aXJlKCdpcy1zdmctZWxlbWVudCcpLmlzRWxlbWVudCxcbiAgaXNBdHRyaWJ1dGU6IF9yZXF1aXJlKCdpcy1zdmctYXR0cmlidXRlJyksXG4gIG5hbWVzcGFjZTogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xufVxuXG59LHtcImlzLXN2Zy1hdHRyaWJ1dGVcIjoyMixcImlzLXN2Zy1lbGVtZW50XCI6MjN9XSw4OltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICBmdW5jdGlvbiBvbigpIHtcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cbn0se31dLDk6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKWAuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgZmFsbGJhY2s7XG5cbi8qKlxuICogRmFsbGJhY2sgaW1wbGVtZW50YXRpb24uXG4gKi9cblxudmFyIHByZXYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbmZ1bmN0aW9uIGZhbGxiYWNrKGZuKSB7XG4gIHZhciBjdXJyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHZhciBtcyA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnIgLSBwcmV2KSk7XG4gIHZhciByZXEgPSBzZXRUaW1lb3V0KGZuLCBtcyk7XG4gIHByZXYgPSBjdXJyO1xuICByZXR1cm4gcmVxO1xufVxuXG4vKipcbiAqIENhbmNlbC5cbiAqL1xuXG52YXIgY2FuY2VsID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LmNsZWFyVGltZW91dDtcblxuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbihpZCl7XG4gIGNhbmNlbC5jYWxsKHdpbmRvdywgaWQpO1xufTtcblxufSx7fV0sMTA6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogdG9TdHJpbmcgcmVmLlxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSB0eXBlIG9mIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCl7XG4gIHN3aXRjaCAodG9TdHJpbmcuY2FsbCh2YWwpKSB7XG4gICAgY2FzZSAnW29iamVjdCBEYXRlXSc6IHJldHVybiAnZGF0ZSc7XG4gICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzogcmV0dXJuICdyZWdleHAnO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJndW1lbnRzXSc6IHJldHVybiAnYXJndW1lbnRzJztcbiAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6IHJldHVybiAnYXJyYXknO1xuICAgIGNhc2UgJ1tvYmplY3QgRXJyb3JdJzogcmV0dXJuICdlcnJvcic7XG4gIH1cblxuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICBpZiAodmFsID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJztcbiAgaWYgKHZhbCAhPT0gdmFsKSByZXR1cm4gJ25hbic7XG4gIGlmICh2YWwgJiYgdmFsLm5vZGVUeXBlID09PSAxKSByZXR1cm4gJ2VsZW1lbnQnO1xuXG4gIHZhbCA9IHZhbC52YWx1ZU9mXG4gICAgPyB2YWwudmFsdWVPZigpXG4gICAgOiBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YuYXBwbHkodmFsKVxuXG4gIHJldHVybiB0eXBlb2YgdmFsO1xufTtcblxufSx7fV0sMTE6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmRJbnRlcm5hbDMgPSBfcmVxdWlyZSgnLi4vZnVuY3Rpb24vYmluZEludGVybmFsMycpO1xuXG4vKipcbiAqICMgRm9yIEVhY2hcbiAqXG4gKiBBIGZhc3QgYC5mb3JFYWNoKClgIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgICBzdWJqZWN0ICAgICBUaGUgYXJyYXkgKG9yIGFycmF5LWxpa2UpIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgICAgICBUaGUgdmlzaXRvciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge09iamVjdH0gICB0aGlzQ29udGV4dCBUaGUgY29udGV4dCBmb3IgdGhlIHZpc2l0b3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmFzdEZvckVhY2ggKHN1YmplY3QsIGZuLCB0aGlzQ29udGV4dCkge1xuICB2YXIgbGVuZ3RoID0gc3ViamVjdC5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWwzKGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGl0ZXJhdG9yKHN1YmplY3RbaV0sIGksIHN1YmplY3QpO1xuICB9XG59O1xuXG59LHtcIi4uL2Z1bmN0aW9uL2JpbmRJbnRlcm5hbDNcIjoxNH1dLDEyOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kSW50ZXJuYWw0ID0gX3JlcXVpcmUoJy4uL2Z1bmN0aW9uL2JpbmRJbnRlcm5hbDQnKTtcblxuLyoqXG4gKiAjIFJlZHVjZVxuICpcbiAqIEEgZmFzdCBgLnJlZHVjZSgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gICAgc3ViamVjdCAgICAgIFRoZSBhcnJheSAob3IgYXJyYXktbGlrZSkgdG8gcmVkdWNlLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHRoaXNDb250ZXh0ICBUaGUgY29udGV4dCBmb3IgdGhlIHJlZHVjZXIuXG4gKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmFzdFJlZHVjZSAoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpIHtcbiAgdmFyIGxlbmd0aCA9IHN1YmplY3QubGVuZ3RoLFxuICAgICAgaXRlcmF0b3IgPSB0aGlzQ29udGV4dCAhPT0gdW5kZWZpbmVkID8gYmluZEludGVybmFsNChmbiwgdGhpc0NvbnRleHQpIDogZm4sXG4gICAgICBpLCByZXN1bHQ7XG5cbiAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IDE7XG4gICAgcmVzdWx0ID0gc3ViamVjdFswXTtcbiAgfVxuICBlbHNlIHtcbiAgICBpID0gMDtcbiAgICByZXN1bHQgPSBpbml0aWFsVmFsdWU7XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBzdWJqZWN0W2ldLCBpLCBzdWJqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG59LHtcIi4uL2Z1bmN0aW9uL2JpbmRJbnRlcm5hbDRcIjoxNX1dLDEzOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoQXJyYXkgPSBfcmVxdWlyZSgnLi9hcnJheS9mb3JFYWNoJyksXG4gICAgZm9yRWFjaE9iamVjdCA9IF9yZXF1aXJlKCcuL29iamVjdC9mb3JFYWNoJyk7XG5cbi8qKlxuICogIyBGb3JFYWNoXG4gKlxuICogQSBmYXN0IGAuZm9yRWFjaCgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheXxPYmplY3R9IHN1YmplY3QgICAgIFRoZSBhcnJheSBvciBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtICB7RnVuY3Rpb259ICAgICBmbiAgICAgICAgICBUaGUgdmlzaXRvciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgdGhpc0NvbnRleHQgVGhlIGNvbnRleHQgZm9yIHRoZSB2aXNpdG9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RGb3JFYWNoIChzdWJqZWN0LCBmbiwgdGhpc0NvbnRleHQpIHtcbiAgaWYgKHN1YmplY3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBmb3JFYWNoQXJyYXkoc3ViamVjdCwgZm4sIHRoaXNDb250ZXh0KTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZm9yRWFjaE9iamVjdChzdWJqZWN0LCBmbiwgdGhpc0NvbnRleHQpO1xuICB9XG59O1xufSx7XCIuL2FycmF5L2ZvckVhY2hcIjoxMSxcIi4vb2JqZWN0L2ZvckVhY2hcIjoxN31dLDE0OltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDMgYXJndW1lbnRzXG4gKiB0byBhIGdpdmVuIGNvbnRleHQuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZEludGVybmFsMyAoZnVuYywgdGhpc0NvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQ29udGV4dCwgYSwgYiwgYyk7XG4gIH07XG59O1xuXG59LHt9XSwxNTpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEludGVybmFsIGhlbHBlciB0byBiaW5kIGEgZnVuY3Rpb24ga25vd24gdG8gaGF2ZSA0IGFyZ3VtZW50c1xuICogdG8gYSBnaXZlbiBjb250ZXh0LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmRJbnRlcm5hbDQgKGZ1bmMsIHRoaXNDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0NvbnRleHQsIGEsIGIsIGMsIGQpO1xuICB9O1xufTtcblxufSx7fV0sMTY6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBbmFsb2d1ZSBvZiBPYmplY3QuYXNzaWduKCkuXG4gKiBDb3BpZXMgcHJvcGVydGllcyBmcm9tIG9uZSBvciBtb3JlIHNvdXJjZSBvYmplY3RzIHRvXG4gKiBhIHRhcmdldCBvYmplY3QuIEV4aXN0aW5nIGtleXMgb24gdGhlIHRhcmdldCBvYmplY3Qgd2lsbCBiZSBvdmVyd3JpdHRlbi5cbiAqXG4gKiA+IE5vdGU6IFRoaXMgZGlmZmVycyBmcm9tIHNwZWMgaW4gc29tZSBpbXBvcnRhbnQgd2F5czpcbiAqID4gMS4gV2lsbCB0aHJvdyBpZiBwYXNzZWQgbm9uLW9iamVjdHMsIGluY2x1ZGluZyBgdW5kZWZpbmVkYCBvciBgbnVsbGAgdmFsdWVzLlxuICogPiAyLiBEb2VzIG5vdCBzdXBwb3J0IHRoZSBjdXJpb3VzIEV4Y2VwdGlvbiBoYW5kbGluZyBiZWhhdmlvciwgZXhjZXB0aW9ucyBhcmUgdGhyb3duIGltbWVkaWF0ZWx5LlxuICogPiBGb3IgbW9yZSBkZXRhaWxzLCBzZWU6XG4gKiA+IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ25cbiAqXG4gKlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdGFyZ2V0ICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtICB7T2JqZWN0fSBzb3VyY2UsIC4uLiBUaGUgc291cmNlKHMpIHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICBUaGUgdXBkYXRlZCB0YXJnZXQgb2JqZWN0LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RBc3NpZ24gKHRhcmdldCkge1xuICB2YXIgdG90YWxBcmdzID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIHNvdXJjZSwgaSwgdG90YWxLZXlzLCBrZXlzLCBrZXksIGo7XG5cbiAgZm9yIChpID0gMTsgaSA8IHRvdGFsQXJnczsgaSsrKSB7XG4gICAgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHRvdGFsS2V5cyA9IGtleXMubGVuZ3RoO1xuICAgIGZvciAoaiA9IDA7IGogPCB0b3RhbEtleXM7IGorKykge1xuICAgICAga2V5ID0ga2V5c1tqXTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG59LHt9XSwxNzpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZEludGVybmFsMyA9IF9yZXF1aXJlKCcuLi9mdW5jdGlvbi9iaW5kSW50ZXJuYWwzJyk7XG5cbi8qKlxuICogIyBGb3IgRWFjaFxuICpcbiAqIEEgZmFzdCBvYmplY3QgYC5mb3JFYWNoKClgIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBzdWJqZWN0ICAgICBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgICAgICBUaGUgdmlzaXRvciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge09iamVjdH0gICB0aGlzQ29udGV4dCBUaGUgY29udGV4dCBmb3IgdGhlIHZpc2l0b3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmFzdEZvckVhY2hPYmplY3QgKHN1YmplY3QsIGZuLCB0aGlzQ29udGV4dCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWwzKGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICBpdGVyYXRvcihzdWJqZWN0W2tleV0sIGtleSwgc3ViamVjdCk7XG4gIH1cbn07XG5cbn0se1wiLi4vZnVuY3Rpb24vYmluZEludGVybmFsM1wiOjE0fV0sMTg6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmRJbnRlcm5hbDQgPSBfcmVxdWlyZSgnLi4vZnVuY3Rpb24vYmluZEludGVybmFsNCcpO1xuXG4vKipcbiAqICMgUmVkdWNlXG4gKlxuICogQSBmYXN0IG9iamVjdCBgLnJlZHVjZSgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc3ViamVjdCAgICAgIFRoZSBvYmplY3QgdG8gcmVkdWNlIG92ZXIuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgICAgICAgIFRoZSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7bWl4ZWR9ICAgIGluaXRpYWxWYWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlZHVjZXIsIGRlZmF1bHRzIHRvIHN1YmplY3RbMF0uXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgdGhpc0NvbnRleHQgIFRoZSBjb250ZXh0IGZvciB0aGUgcmVkdWNlci5cbiAqIEByZXR1cm4ge21peGVkfSAgICAgICAgICAgICAgICAgVGhlIGZpbmFsIHJlc3VsdC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmYXN0UmVkdWNlT2JqZWN0IChzdWJqZWN0LCBmbiwgaW5pdGlhbFZhbHVlLCB0aGlzQ29udGV4dCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWw0KGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGksIGtleSwgcmVzdWx0O1xuXG4gIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGkgPSAxO1xuICAgIHJlc3VsdCA9IHN1YmplY3Rba2V5c1swXV07XG4gIH1cbiAgZWxzZSB7XG4gICAgaSA9IDA7XG4gICAgcmVzdWx0ID0gaW5pdGlhbFZhbHVlO1xuICB9XG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBzdWJqZWN0W2tleV0sIGtleSwgc3ViamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxufSx7XCIuLi9mdW5jdGlvbi9iaW5kSW50ZXJuYWw0XCI6MTV9XSwxOTpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVkdWNlQXJyYXkgPSBfcmVxdWlyZSgnLi9hcnJheS9yZWR1Y2UnKSxcbiAgICByZWR1Y2VPYmplY3QgPSBfcmVxdWlyZSgnLi9vYmplY3QvcmVkdWNlJyk7XG5cbi8qKlxuICogIyBSZWR1Y2VcbiAqXG4gKiBBIGZhc3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7QXJyYXl8T2JqZWN0fSBzdWJqZWN0ICAgICAgVGhlIGFycmF5IG9yIG9iamVjdCB0byByZWR1Y2Ugb3Zlci5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICAgZm4gICAgICAgICAgIFRoZSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7bWl4ZWR9ICAgICAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgICAgICB0aGlzQ29udGV4dCAgVGhlIGNvbnRleHQgZm9yIHRoZSByZWR1Y2VyLlxuICogQHJldHVybiB7QXJyYXl8T2JqZWN0fSAgICAgICAgICAgICAgVGhlIGFycmF5IG9yIG9iamVjdCBjb250YWluaW5nIHRoZSByZXN1bHRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RSZWR1Y2UgKHN1YmplY3QsIGZuLCBpbml0aWFsVmFsdWUsIHRoaXNDb250ZXh0KSB7XG4gIGlmIChzdWJqZWN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gcmVkdWNlQXJyYXkoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiByZWR1Y2VPYmplY3Qoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpO1xuICB9XG59O1xufSx7XCIuL2FycmF5L3JlZHVjZVwiOjEyLFwiLi9vYmplY3QvcmVkdWNlXCI6MTh9XSwyMDpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqIGdlbmVyYXRlIHVuaXF1ZSBpZCBmb3Igc2VsZWN0b3IgKi9cclxudmFyIGNvdW50ZXIgPSBEYXRlLm5vdygpICUgMWU5O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRVaWQoKXtcclxuXHRyZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAxZTkgPj4+IDApICsgKGNvdW50ZXIrKyk7XHJcbn07XG59LHt9XSwyMTpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLypnbG9iYWwgd2luZG93Ki9cblxuLyoqXG4gKiBDaGVjayBpZiBvYmplY3QgaXMgZG9tIG5vZGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc05vZGUodmFsKXtcbiAgaWYgKCF2YWwgfHwgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgaWYgKHdpbmRvdyAmJiAnb2JqZWN0JyA9PSB0eXBlb2Ygd2luZG93Lk5vZGUpIHJldHVybiB2YWwgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZTtcbiAgcmV0dXJuICdudW1iZXInID09IHR5cGVvZiB2YWwubm9kZVR5cGUgJiYgJ3N0cmluZycgPT0gdHlwZW9mIHZhbC5ub2RlTmFtZTtcbn1cblxufSx7fV0sMjI6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogU3VwcG9ydGVkIFNWRyBhdHRyaWJ1dGVzXG4gKi9cblxuZXhwb3J0cy5hdHRyaWJ1dGVzID0ge1xuICAnY3gnOiB0cnVlLFxuICAnY3knOiB0cnVlLFxuICAnZCc6IHRydWUsXG4gICdkeCc6IHRydWUsXG4gICdkeSc6IHRydWUsXG4gICdmaWxsJzogdHJ1ZSxcbiAgJ2ZpbGxPcGFjaXR5JzogdHJ1ZSxcbiAgJ2ZvbnRGYW1pbHknOiB0cnVlLFxuICAnZm9udFNpemUnOiB0cnVlLFxuICAnZngnOiB0cnVlLFxuICAnZnknOiB0cnVlLFxuICAnZ3JhZGllbnRUcmFuc2Zvcm0nOiB0cnVlLFxuICAnZ3JhZGllbnRVbml0cyc6IHRydWUsXG4gICdtYXJrZXJFbmQnOiB0cnVlLFxuICAnbWFya2VyTWlkJzogdHJ1ZSxcbiAgJ21hcmtlclN0YXJ0JzogdHJ1ZSxcbiAgJ29mZnNldCc6IHRydWUsXG4gICdvcGFjaXR5JzogdHJ1ZSxcbiAgJ3BhdHRlcm5Db250ZW50VW5pdHMnOiB0cnVlLFxuICAncGF0dGVyblVuaXRzJzogdHJ1ZSxcbiAgJ3BvaW50cyc6IHRydWUsXG4gICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJzogdHJ1ZSxcbiAgJ3InOiB0cnVlLFxuICAncngnOiB0cnVlLFxuICAncnknOiB0cnVlLFxuICAnc3ByZWFkTWV0aG9kJzogdHJ1ZSxcbiAgJ3N0b3BDb2xvcic6IHRydWUsXG4gICdzdG9wT3BhY2l0eSc6IHRydWUsXG4gICdzdHJva2UnOiB0cnVlLFxuICAnc3Ryb2tlRGFzaGFycmF5JzogdHJ1ZSxcbiAgJ3N0cm9rZUxpbmVjYXAnOiB0cnVlLFxuICAnc3Ryb2tlT3BhY2l0eSc6IHRydWUsXG4gICdzdHJva2VXaWR0aCc6IHRydWUsXG4gICd0ZXh0QW5jaG9yJzogdHJ1ZSxcbiAgJ3RyYW5zZm9ybSc6IHRydWUsXG4gICd2ZXJzaW9uJzogdHJ1ZSxcbiAgJ3ZpZXdCb3gnOiB0cnVlLFxuICAneDEnOiB0cnVlLFxuICAneDInOiB0cnVlLFxuICAneCc6IHRydWUsXG4gICd5MSc6IHRydWUsXG4gICd5Mic6IHRydWUsXG4gICd5JzogdHJ1ZVxufVxuXG4vKipcbiAqIEFyZSBlbGVtZW50J3MgYXR0cmlidXRlcyBTVkc/XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGF0dHJcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhdHRyKSB7XG4gIHJldHVybiBhdHRyIGluIGV4cG9ydHMuYXR0cmlidXRlc1xufVxuXG59LHt9XSwyMzpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4gKiBTdXBwb3J0ZWQgU1ZHIGVsZW1lbnRzXG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG5cbmV4cG9ydHMuZWxlbWVudHMgPSB7XG4gICdhbmltYXRlJzogdHJ1ZSxcbiAgJ2NpcmNsZSc6IHRydWUsXG4gICdkZWZzJzogdHJ1ZSxcbiAgJ2VsbGlwc2UnOiB0cnVlLFxuICAnZyc6IHRydWUsXG4gICdsaW5lJzogdHJ1ZSxcbiAgJ2xpbmVhckdyYWRpZW50JzogdHJ1ZSxcbiAgJ21hc2snOiB0cnVlLFxuICAncGF0aCc6IHRydWUsXG4gICdwYXR0ZXJuJzogdHJ1ZSxcbiAgJ3BvbHlnb24nOiB0cnVlLFxuICAncG9seWxpbmUnOiB0cnVlLFxuICAncmFkaWFsR3JhZGllbnQnOiB0cnVlLFxuICAncmVjdCc6IHRydWUsXG4gICdzdG9wJzogdHJ1ZSxcbiAgJ3N2Zyc6IHRydWUsXG4gICd0ZXh0JzogdHJ1ZSxcbiAgJ3RzcGFuJzogdHJ1ZVxufVxuXG4vKipcbiAqIElzIGVsZW1lbnQncyBuYW1lc3BhY2UgU1ZHP1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKi9cblxuZXhwb3J0cy5pc0VsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZSBpbiBleHBvcnRzLmVsZW1lbnRzXG59XG5cbn0se31dLDI0OltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG4gICAgaWYgKCFzb3VyY2UpIGNvbnRpbnVlXG5cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAodW5kZWZpbmVkID09PSB0YXJnZXRba2V5XSlcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGFyZ2V0XG59XG5cbn0se31dLDI1OltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgbmV4dDpjYW50IHRlc3QqL1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIHJvb3Qub2JqZWN0UGF0aCA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhclxuICAgIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpe1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b1N0cmluZyh0eXBlKXtcbiAgICByZXR1cm4gdG9TdHIuY2FsbCh0eXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKXtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0b1N0cmluZyh2YWx1ZSkgPT09IFwiW29iamVjdCBOdW1iZXJdXCI7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0cmluZyhvYmope1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fCB0b1N0cmluZyhvYmopID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmcob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQXJyYXkob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT09ICdudW1iZXInICYmIHRvU3RyaW5nKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nIHx8IHRvU3RyaW5nKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpe1xuICAgIHZhciBpbnRLZXkgPSBwYXJzZUludChrZXkpO1xuICAgIGlmIChpbnRLZXkudG9TdHJpbmcoKSA9PT0ga2V5KSB7XG4gICAgICByZXR1cm4gaW50S2V5O1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG9iaiwgcGF0aCwgdmFsdWUsIGRvTm90UmVwbGFjZSl7XG4gICAgaWYgKGlzTnVtYmVyKHBhdGgpKSB7XG4gICAgICBwYXRoID0gW3BhdGhdO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShwYXRoKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICByZXR1cm4gc2V0KG9iaiwgcGF0aC5zcGxpdCgnLicpLm1hcChnZXRLZXkpLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKTtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRQYXRoID0gcGF0aFswXTtcblxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIG9sZFZhbCA9IG9ialtjdXJyZW50UGF0aF07XG4gICAgICBpZiAob2xkVmFsID09PSB2b2lkIDAgfHwgIWRvTm90UmVwbGFjZSkge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsO1xuICAgIH1cblxuICAgIGlmIChvYmpbY3VycmVudFBhdGhdID09PSB2b2lkIDApIHtcbiAgICAgIC8vY2hlY2sgaWYgd2UgYXNzdW1lIGFuIGFycmF5XG4gICAgICBpZihpc051bWJlcihwYXRoWzFdKSkge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbChvYmosIHBhdGgpIHtcbiAgICBpZiAoaXNOdW1iZXIocGF0aCkpIHtcbiAgICAgIHBhdGggPSBbcGF0aF07XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkob2JqKSkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbXB0eShwYXRoKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHJldHVybiBkZWwob2JqLCBwYXRoLnNwbGl0KCcuJykpO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50UGF0aCA9IGdldEtleShwYXRoWzBdKTtcbiAgICB2YXIgb2xkVmFsID0gb2JqW2N1cnJlbnRQYXRoXTtcblxuICAgIGlmKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAob2xkVmFsICE9PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIG9iai5zcGxpY2UoY3VycmVudFBhdGgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBvYmpbY3VycmVudFBhdGhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvYmpbY3VycmVudFBhdGhdICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGRlbChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIG9iamVjdFBhdGggPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0UGF0aCkucmVkdWNlKGZ1bmN0aW9uKHByb3h5LCBwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIG9iamVjdFBhdGhbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJveHlbcHJvcF0gPSBvYmplY3RQYXRoW3Byb3BdLmJpbmQob2JqZWN0UGF0aCwgb2JqKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmhhcyA9IGZ1bmN0aW9uIChvYmosIHBhdGgpIHtcbiAgICBpZiAoaXNFbXB0eShvYmopKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKHBhdGgpKSB7XG4gICAgICBwYXRoID0gW3BhdGhdO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkocGF0aCkgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBqID0gcGF0aFtpXTtcbiAgICAgIGlmICgoaXNPYmplY3Qob2JqKSB8fCBpc0FycmF5KG9iaikpICYmIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaikpIHtcbiAgICAgICAgb2JqID0gb2JqW2pdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZW5zdXJlRXhpc3RzID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgdmFsdWUpe1xuICAgIHJldHVybiBzZXQob2JqLCBwYXRoLCB2YWx1ZSwgdHJ1ZSk7XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5zZXQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKXtcbiAgICByZXR1cm4gc2V0KG9iaiwgcGF0aCwgdmFsdWUsIGRvTm90UmVwbGFjZSk7XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5pbnNlcnQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSwgYXQpe1xuICAgIHZhciBhcnIgPSBvYmplY3RQYXRoLmdldChvYmosIHBhdGgpO1xuICAgIGF0ID0gfn5hdDtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgYXJyID0gW107XG4gICAgICBvYmplY3RQYXRoLnNldChvYmosIHBhdGgsIGFycik7XG4gICAgfVxuICAgIGFyci5zcGxpY2UoYXQsIDAsIHZhbHVlKTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmVtcHR5ID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgaWYgKGlzRW1wdHkocGF0aCkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KG9iaikpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlLCBpO1xuICAgIGlmICghKHZhbHVlID0gb2JqZWN0UGF0aC5nZXQob2JqLCBwYXRoKSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9iamVjdFBhdGguc2V0KG9iaiwgcGF0aCwgJycpO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9iamVjdFBhdGguc2V0KG9iaiwgcGF0aCwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gb2JqZWN0UGF0aC5zZXQob2JqLCBwYXRoLCAwKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5sZW5ndGggPSAwO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBmb3IgKGkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBpKSkge1xuICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2JqZWN0UGF0aC5zZXQob2JqLCBwYXRoLCBudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5wdXNoID0gZnVuY3Rpb24gKG9iaiwgcGF0aCAvKiwgdmFsdWVzICovKXtcbiAgICB2YXIgYXJyID0gb2JqZWN0UGF0aC5nZXQob2JqLCBwYXRoKTtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgYXJyID0gW107XG4gICAgICBvYmplY3RQYXRoLnNldChvYmosIHBhdGgsIGFycik7XG4gICAgfVxuXG4gICAgYXJyLnB1c2guYXBwbHkoYXJyLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpKTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmNvYWxlc2NlID0gZnVuY3Rpb24gKG9iaiwgcGF0aHMsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXRocy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCh2YWx1ZSA9IG9iamVjdFBhdGguZ2V0KG9iaiwgcGF0aHNbaV0pKSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZ2V0ID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKXtcbiAgICBpZiAoaXNOdW1iZXIocGF0aCkpIHtcbiAgICAgIHBhdGggPSBbcGF0aF07XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KHBhdGgpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShvYmopKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHJldHVybiBvYmplY3RQYXRoLmdldChvYmosIHBhdGguc3BsaXQoJy4nKSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFBhdGggPSBnZXRLZXkocGF0aFswXSk7XG5cbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChvYmpbY3VycmVudFBhdGhdID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbY3VycmVudFBhdGhdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RQYXRoLmdldChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpLCBkZWZhdWx0VmFsdWUpO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZGVsID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgcmV0dXJuIGRlbChvYmosIHBhdGgpO1xuICB9O1xuXG4gIHJldHVybiBvYmplY3RQYXRoO1xufSk7XG5cbn0se31dfSx7fSxbM10pKDMpXG59KTsiXX0=
}, {}],
4: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _textField = require('./text-field');

var _textField2 = _interopRequireDefault(_textField);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _code = require('./code');

var _code2 = _interopRequireDefault(_code);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

exports.TextField = _textField2['default'];
exports.Checkbox = _checkbox2['default'];
exports.DropDown = _dropdown2['default'];
exports.Button = _button2['default'];
exports.Table = _table2['default'];
exports.Code = _code2['default'];
exports.Menu = _menu2['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt5QkFBc0IsY0FBYzs7Ozt3QkFDZixZQUFZOzs7O3dCQUNaLFlBQVk7Ozs7c0JBQ2QsVUFBVTs7OztxQkFDWCxTQUFTOzs7O29CQUNWLFFBQVE7Ozs7b0JBQ1IsUUFBUTs7OztRQUd2QixTQUFTO1FBQ1QsUUFBUTtRQUNSLFFBQVE7UUFDUixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSixJQUFJIiwiZmlsZSI6ImxpYi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHRGaWVsZCBmcm9tICcuL3RleHQtZmllbGQnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vY2hlY2tib3gnO1xuaW1wb3J0IERyb3BEb3duIGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQgQ29kZSBmcm9tICcuL2NvZGUnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcblxuZXhwb3J0IHtcbiAgVGV4dEZpZWxkLFxuICBDaGVja2JveCxcbiAgRHJvcERvd24sXG4gIEJ1dHRvbixcbiAgVGFibGUsXG4gIENvZGUsXG4gIE1lbnVcbn07XG4iXX0=
}, {"./text-field":6,"./checkbox":7,"./dropdown":8,"./button":9,"./table":10,"./code":11,"./menu":12}],
6: [function(require, module, exports) {
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
}, {"dekujs/virtual-element":2}],
7: [function(require, module, exports) {
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
}, {"dekujs/virtual-element":2}],
8: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

var _menu = require('../menu');

/**
 * DropDown.
 */

exports['default'] = {
  propTypes: {
    items: { type: 'array' }
  },

  render: function render(_ref, updateState) {
    var props = _ref.props;
    var state = _ref.state;
    var items = props.items;
    var isChoosing = state.isChoosing;
    var activeItem = state.activeItem;

    return (0, _dekujsVirtualElement2['default'])(
      'div',
      { 'class': 'matter-DropDown', onClick: change },
      isChoosing ? (0, _dekujsVirtualElement2['default'])(_menu.Menu, { items: items, onChange: setActive }) : activeItem || items[0]
    );

    function change() {
      updateState({ isChoosing: !isChoosing });
    }

    function setActive(name) {
      updateState({ activeItem: name });
      updateState({ isChoosing: !isChoosing });
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9kcm9wZG93bi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQ0FBb0Isd0JBQXdCOzs7O29CQUN2QixTQUFTOzs7Ozs7cUJBTWY7QUFDYixXQUFTLEVBQUU7QUFDVCxTQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0dBQ3pCOztBQUVELFFBQU0sRUFBQSxnQkFBQyxJQUFnQixFQUFFLFdBQVcsRUFBRTtRQUE3QixLQUFLLEdBQVAsSUFBZ0IsQ0FBZCxLQUFLO1FBQUUsS0FBSyxHQUFkLElBQWdCLENBQVAsS0FBSztRQUNiLEtBQUssR0FBSyxLQUFLLENBQWYsS0FBSztRQUNMLFVBQVUsR0FBaUIsS0FBSyxDQUFoQyxVQUFVO1FBQUUsVUFBVSxHQUFLLEtBQUssQ0FBcEIsVUFBVTs7QUFFNUIsV0FDRTs7UUFBSyxTQUFNLGlCQUFpQixFQUFDLE9BQU8sRUFBRyxNQUFNLEFBQUU7TUFFM0MsVUFBVSxHQUNWLHFEQUFNLEtBQUssRUFBRyxLQUFLLEFBQUUsRUFBQyxRQUFRLEVBQUcsU0FBUyxBQUFFLEdBQUUsR0FDOUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FFcEIsQ0FDTjs7QUFFRixhQUFTLE1BQU0sR0FBRztBQUNoQixpQkFBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztLQUMxQzs7QUFFRCxhQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDdkIsaUJBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLGlCQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0tBQzFDO0dBQ0Y7Q0FDRiIsImZpbGUiOiJsaWIvZHJvcGRvd24vaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL21lbnUnO1xuXG4vKipcbiAqIERyb3BEb3duLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgaXRlbXM6IHsgdHlwZTogJ2FycmF5JyB9XG4gIH0sXG5cbiAgcmVuZGVyKHsgcHJvcHMsIHN0YXRlIH0sIHVwZGF0ZVN0YXRlKSB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHByb3BzO1xuICAgIGxldCB7IGlzQ2hvb3NpbmcsIGFjdGl2ZUl0ZW0gfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9J21hdHRlci1Ecm9wRG93bicgb25DbGljaz17IGNoYW5nZSB9PlxuICAgICAgICB7XG4gICAgICAgICAgaXNDaG9vc2luZyA/XG4gICAgICAgICAgPE1lbnUgaXRlbXM9eyBpdGVtcyB9IG9uQ2hhbmdlPXsgc2V0QWN0aXZlIH0vPiA6XG4gICAgICAgICAgYWN0aXZlSXRlbSB8fCBpdGVtc1swXVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlKCkge1xuICAgICAgdXBkYXRlU3RhdGUoeyBpc0Nob29zaW5nOiAhaXNDaG9vc2luZyB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3RpdmUobmFtZSkge1xuICAgICAgdXBkYXRlU3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pO1xuICAgICAgdXBkYXRlU3RhdGUoeyBpc0Nob29zaW5nOiAhaXNDaG9vc2luZyB9KTtcbiAgICB9XG4gIH1cbn07XG4iXX0=
}, {"dekujs/virtual-element":2,"../menu":12}],
12: [function(require, module, exports) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29DQUFvQix3QkFBd0I7Ozs7Ozs7O3FCQU03QjtBQUNiLFdBQVMsRUFBRTtBQUNULFlBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDOUIsU0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtHQUN6Qjs7QUFFRCxRQUFNLEVBQUEsZ0JBQUMsSUFBZ0IsRUFBRSxXQUFXLEVBQUU7UUFBN0IsS0FBSyxHQUFQLElBQWdCLENBQWQsS0FBSztRQUFFLEtBQUssR0FBZCxJQUFnQixDQUFQLEtBQUs7UUFDYixLQUFLLEdBQWUsS0FBSyxDQUF6QixLQUFLO1FBQUUsUUFBUSxHQUFLLEtBQUssQ0FBbEIsUUFBUTtRQUNmLFVBQVUsR0FBSyxLQUFLLENBQXBCLFVBQVU7O0FBRWhCLFFBQUksV0FBVyxHQUFHLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXpDLFFBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUU7QUFDdkMsYUFDRTs7VUFBSyxTQUFNLGtCQUFrQixFQUFDLE9BQU8sRUFBRyxPQUFPLEFBQUUsRUFBQyxNQUFNLEVBQUcsV0FBVyxLQUFLLElBQUksQUFBRTtRQUMvRTs7O1VBQU8sSUFBSTtTQUFRO09BQ2YsQ0FDTjs7QUFFRixlQUFTLE9BQU8sR0FBRTtBQUNoQixtQkFBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEMsWUFBSSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzlCO0tBQ0YsQ0FBQyxDQUFDOztBQUVILFdBQ0U7O1FBQUssU0FBTSxhQUFhO01BQ3BCLFNBQVM7S0FDUCxDQUNOO0dBQ0g7Q0FDRiIsImZpbGUiOiJsaWIvbWVudS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5cbi8qKlxuICogTWVudS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BUeXBlczoge1xuICAgIG9uQ2hhbmdlOiB7IHR5cGU6ICdmdW5jdGlvbicgfSxcbiAgICBpdGVtczogeyB0eXBlOiAnYXJyYXknIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcywgc3RhdGUgfSwgdXBkYXRlU3RhdGUpIHtcbiAgICBsZXQgeyBpdGVtcywgb25DaGFuZ2UgfSA9IHByb3BzO1xuICAgIGxldCB7IGFjdGl2ZUl0ZW0gfSA9IHN0YXRlO1xuXG4gICAgbGV0IGN1cnJlbnRJdGVtID0gYWN0aXZlSXRlbSB8fCBpdGVtc1swXTtcblxuICAgIGxldCBtZW51SXRlbXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz0nbWF0dGVyLU1lbnUtaXRlbScgb25DbGljaz17IG9uQ2xpY2sgfSBhY3RpdmU9eyBjdXJyZW50SXRlbSA9PT0gaXRlbSB9PlxuICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBvbkNsaWNrKCl7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHsgYWN0aXZlSXRlbTogaXRlbSB9KTtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSBvbkNoYW5nZShpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPSdtYXR0ZXItTWVudSc+XG4gICAgICAgIHsgbWVudUl0ZW1zIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG4iXX0=
}, {"dekujs/virtual-element":2}],
9: [function(require, module, exports) {
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
}, {"dekujs/virtual-element":2}],
10: [function(require, module, exports) {
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
}, {"dekujs/virtual-element":2}],
11: [function(require, module, exports) {
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
}, {"dekujs/virtual-element":2,"segmentio/highlight":13,"segmentio/highlight-objective-c":14,"segmentio/highlight-javascript":15,"segmentio/highlight-csharp":16,"segmentio/highlight-python":17,"segmentio/highlight-java":18,"segmentio/highlight-bash":19,"segmentio/highlight-ruby":20,"segmentio/highlight-yaml":21,"segmentio/highlight-xml":22,"segmentio/highlight-php":23,"segmentio/highlight-css":24,"segmentio/highlight-go":25}],
13: [function(require, module, exports) {
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
}, {"escape-html":26}],
26: [function(require, module, exports) {
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
14: [function(require, module, exports) {

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
15: [function(require, module, exports) {

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
16: [function(require, module, exports) {

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
17: [function(require, module, exports) {

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
18: [function(require, module, exports) {

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
19: [function(require, module, exports) {

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
20: [function(require, module, exports) {

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
21: [function(require, module, exports) {

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
22: [function(require, module, exports) {

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
23: [function(require, module, exports) {

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
24: [function(require, module, exports) {

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
25: [function(require, module, exports) {

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
5: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

var _textField = require('./text-field');

var _textField2 = _interopRequireDefault(_textField);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _code = require('./code');

var _code2 = _interopRequireDefault(_code);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

/**
 * Examples.
 */

exports['default'] = {
  Code: {
    component: (0, _dekujsVirtualElement2['default'])(_code2['default'], null),
    code: '<Code language=\'javascript\'>\n{\`\nvar Git = require(\'gity\');\n\nvar git = Git()\n  .add(\'*.js\')\n  .commit(\'-m \"added js files\"\')\n  .run();\n\`}\n</Code>'
  },
  Table: {
    component: (0, _dekujsVirtualElement2['default'])(_table2['default'], null),
    code: "let people = [\n  ['Full Name', 'Age'],\n  ['Steven Miller', '25'],\n  ['Tamara Jordan', '23'],\n  ['John Smith', '28']\n];\n\n<Table rows={ people } />"
  },
  Menu: {
    component: (0, _dekujsVirtualElement2['default'])(_menu2['default'], null),
    code: "let sections = ['Home', 'Profile', 'Messages', 'Notifications'];\n\n<Menu onChange={ change } items={ sections } />"
  },
  TextField: {
    component: (0, _dekujsVirtualElement2['default'])(_textField2['default'], null),
    code: "<TextField placeholder='e.g. Steven Miller'/>"
  },
  Button: {
    component: (0, _dekujsVirtualElement2['default'])(_button2['default'], null),
    code: "<Button label='Large' size='large' type='primary'/>\n<Button label='Medium' size='medium' type='primary'/>\n<Button label='Small' size='small' type='primary'/>\n\n<Button label='Primary' size='medium' type='primary'/>\n<Button label='Secondary' size='medium' type='secondary'/>\n<Button label='Danger' size='medium' type='danger'/>"
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29DQUFvQix3QkFBd0I7Ozs7eUJBQ2YsY0FBYzs7OztzQkFDakIsVUFBVTs7OztxQkFDWCxTQUFTOzs7O29CQUNWLFFBQVE7Ozs7b0JBQ1IsUUFBUTs7Ozs7Ozs7cUJBTWpCO0FBQ2IsTUFBSSxFQUFFO0FBQ0osYUFBUyxFQUFFLCtEQUFjO0FBQ3pCLFFBQUksRUFBRSx1S0FBdUs7R0FDOUs7QUFDRCxPQUFLLEVBQUU7QUFDTCxhQUFTLEVBQUUsZ0VBQWU7QUFDMUIsUUFBSSxFQUFFLDBKQUEwSjtHQUNqSztBQUNELE1BQUksRUFBRTtBQUNKLGFBQVMsRUFBRSwrREFBYztBQUN6QixRQUFJLEVBQUUscUhBQXFIO0dBQzVIO0FBQ0QsV0FBUyxFQUFFO0FBQ1QsYUFBUyxFQUFFLG9FQUFtQjtBQUM5QixRQUFJLEVBQUUsK0NBQStDO0dBQ3REO0FBQ0QsUUFBTSxFQUFFO0FBQ04sYUFBUyxFQUFFLGlFQUFnQjtBQUMzQixRQUFJLEVBQUUsNlVBQTZVO0dBQ3BWO0NBQ0YiLCJmaWxlIjoiZXhhbXBsZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IFRleHRGaWVsZEV4YW1wbGUgZnJvbSAnLi90ZXh0LWZpZWxkJztcbmltcG9ydCBCdXR0b25FeGFtcGxlIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBUYWJsZUV4YW1wbGUgZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQgQ29kZUV4YW1wbGUgZnJvbSAnLi9jb2RlJztcbmltcG9ydCBNZW51RXhhbXBsZSBmcm9tICcuL21lbnUnO1xuXG4vKipcbiAqIEV4YW1wbGVzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQ29kZToge1xuICAgIGNvbXBvbmVudDogPENvZGVFeGFtcGxlLz4sXG4gICAgY29kZTogJzxDb2RlIGxhbmd1YWdlPVxcJ2phdmFzY3JpcHRcXCc+XFxue1xcYFxcbnZhciBHaXQgPSByZXF1aXJlKFxcJ2dpdHlcXCcpO1xcblxcbnZhciBnaXQgPSBHaXQoKVxcbiAgLmFkZChcXCcqLmpzXFwnKVxcbiAgLmNvbW1pdChcXCctbSBcXFwiYWRkZWQganMgZmlsZXNcXFwiXFwnKVxcbiAgLnJ1bigpO1xcblxcYH1cXG48L0NvZGU+J1xuICB9LFxuICBUYWJsZToge1xuICAgIGNvbXBvbmVudDogPFRhYmxlRXhhbXBsZS8+LFxuICAgIGNvZGU6IFwibGV0IHBlb3BsZSA9IFtcXG4gIFsnRnVsbCBOYW1lJywgJ0FnZSddLFxcbiAgWydTdGV2ZW4gTWlsbGVyJywgJzI1J10sXFxuICBbJ1RhbWFyYSBKb3JkYW4nLCAnMjMnXSxcXG4gIFsnSm9obiBTbWl0aCcsICcyOCddXFxuXTtcXG5cXG48VGFibGUgcm93cz17IHBlb3BsZSB9IC8+XCJcbiAgfSxcbiAgTWVudToge1xuICAgIGNvbXBvbmVudDogPE1lbnVFeGFtcGxlLz4sXG4gICAgY29kZTogXCJsZXQgc2VjdGlvbnMgPSBbJ0hvbWUnLCAnUHJvZmlsZScsICdNZXNzYWdlcycsICdOb3RpZmljYXRpb25zJ107XFxuXFxuPE1lbnUgb25DaGFuZ2U9eyBjaGFuZ2UgfSBpdGVtcz17IHNlY3Rpb25zIH0gLz5cIlxuICB9LFxuICBUZXh0RmllbGQ6IHtcbiAgICBjb21wb25lbnQ6IDxUZXh0RmllbGRFeGFtcGxlLz4sXG4gICAgY29kZTogXCI8VGV4dEZpZWxkIHBsYWNlaG9sZGVyPSdlLmcuIFN0ZXZlbiBNaWxsZXInLz5cIlxuICB9LFxuICBCdXR0b246IHtcbiAgICBjb21wb25lbnQ6IDxCdXR0b25FeGFtcGxlLz4sXG4gICAgY29kZTogXCI8QnV0dG9uIGxhYmVsPSdMYXJnZScgc2l6ZT0nbGFyZ2UnIHR5cGU9J3ByaW1hcnknLz5cXG48QnV0dG9uIGxhYmVsPSdNZWRpdW0nIHNpemU9J21lZGl1bScgdHlwZT0ncHJpbWFyeScvPlxcbjxCdXR0b24gbGFiZWw9J1NtYWxsJyBzaXplPSdzbWFsbCcgdHlwZT0ncHJpbWFyeScvPlxcblxcbjxCdXR0b24gbGFiZWw9J1ByaW1hcnknIHNpemU9J21lZGl1bScgdHlwZT0ncHJpbWFyeScvPlxcbjxCdXR0b24gbGFiZWw9J1NlY29uZGFyeScgc2l6ZT0nbWVkaXVtJyB0eXBlPSdzZWNvbmRhcnknLz5cXG48QnV0dG9uIGxhYmVsPSdEYW5nZXInIHNpemU9J21lZGl1bScgdHlwZT0nZGFuZ2VyJy8+XCJcbiAgfVxufTtcbiJdfQ==
}, {"dekujs/virtual-element":2,"./text-field":27,"./button":28,"./table":29,"./code":30,"./menu":31}],
27: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

var _lib = require('/lib');

/**
 * TextField example.
 */

exports['default'] = {
  render: function render() {
    return (0, _dekujsVirtualElement2['default'])(_lib.TextField, { placeholder: 'e.g. Steven Miller' });
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3RleHQtZmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0NBQW9CLHdCQUF3Qjs7OzttQkFDbEIsTUFBTTs7Ozs7O3FCQU1qQjtBQUNiLFFBQU0sRUFBQSxrQkFBRztBQUNQLFdBQU8seURBQVcsV0FBVyxFQUFDLG9CQUFvQixHQUFFLENBQUM7R0FDdEQ7Q0FDRiIsImZpbGUiOiJleGFtcGxlcy90ZXh0LWZpZWxkLmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxlbWVudCBmcm9tICdkZWt1anMvdmlydHVhbC1lbGVtZW50JztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJy9saWInO1xuXG4vKipcbiAqIFRleHRGaWVsZCBleGFtcGxlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VGV4dEZpZWxkIHBsYWNlaG9sZGVyPSdlLmcuIFN0ZXZlbiBNaWxsZXInLz47XG4gIH1cbn07XG4iXX0=
}, {"dekujs/virtual-element":2,"/lib":4}],
28: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

var _lib = require('/lib');

/**
 * Button example.
 */

exports['default'] = {
  render: function render() {
    return (0, _dekujsVirtualElement2['default'])(
      'div',
      null,
      (0, _dekujsVirtualElement2['default'])(
        'div',
        null,
        (0, _dekujsVirtualElement2['default'])(
          'div',
          { style: 'margin-top:7px;' },
          (0, _dekujsVirtualElement2['default'])(_lib.Button, { label: 'Large', size: 'large', type: 'primary' })
        ),
        (0, _dekujsVirtualElement2['default'])(
          'div',
          { style: 'margin-top:7px;' },
          (0, _dekujsVirtualElement2['default'])(_lib.Button, { label: 'Medium', size: 'medium', type: 'primary' })
        ),
        (0, _dekujsVirtualElement2['default'])(
          'div',
          { style: 'margin-top:7px;' },
          (0, _dekujsVirtualElement2['default'])(_lib.Button, { label: 'Small', size: 'small', type: 'primary' })
        )
      ),
      (0, _dekujsVirtualElement2['default'])(
        'div',
        { style: 'margin-top:40px;' },
        (0, _dekujsVirtualElement2['default'])(
          'div',
          { style: 'margin-top:7px;' },
          (0, _dekujsVirtualElement2['default'])(_lib.Button, { label: 'Primary', size: 'medium', type: 'primary' })
        ),
        (0, _dekujsVirtualElement2['default'])(
          'div',
          { style: 'margin-top:7px;' },
          (0, _dekujsVirtualElement2['default'])(_lib.Button, { label: 'Secondary', size: 'medium', type: 'secondary' })
        ),
        (0, _dekujsVirtualElement2['default'])(
          'div',
          { style: 'margin-top:7px;' },
          (0, _dekujsVirtualElement2['default'])(_lib.Button, { label: 'Warning', size: 'medium', type: 'warning' })
        )
      )
    );
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQ0FBb0Isd0JBQXdCOzs7O21CQUNyQixNQUFNOzs7Ozs7cUJBTWQ7QUFDYixRQUFNLEVBQUEsa0JBQUc7QUFDUCxXQUNFOzs7TUFDRTs7O1FBQ0U7O1lBQUssS0FBSyxFQUFDLGlCQUFpQjtVQUMxQixzREFBUSxLQUFLLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLFNBQVMsR0FBRTtTQUMvQztRQUNOOztZQUFLLEtBQUssRUFBQyxpQkFBaUI7VUFDMUIsc0RBQVEsS0FBSyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxTQUFTLEdBQUU7U0FDakQ7UUFDTjs7WUFBSyxLQUFLLEVBQUMsaUJBQWlCO1VBQzFCLHNEQUFRLEtBQUssRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsU0FBUyxHQUFFO1NBQy9DO09BQ0Y7TUFDTjs7VUFBSyxLQUFLLEVBQUMsa0JBQWtCO1FBQzNCOztZQUFLLEtBQUssRUFBQyxpQkFBaUI7VUFDMUIsc0RBQVEsS0FBSyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxTQUFTLEdBQUU7U0FDbEQ7UUFDTjs7WUFBSyxLQUFLLEVBQUMsaUJBQWlCO1VBQzFCLHNEQUFRLEtBQUssRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsV0FBVyxHQUFFO1NBQ3REO1FBQ047O1lBQUssS0FBSyxFQUFDLGlCQUFpQjtVQUMxQixzREFBUSxLQUFLLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFNBQVMsR0FBRTtTQUNsRDtPQUNGO0tBQ0YsQ0FDTjtHQUNIO0NBQ0YiLCJmaWxlIjoiZXhhbXBsZXMvYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxlbWVudCBmcm9tICdkZWt1anMvdmlydHVhbC1lbGVtZW50JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy9saWInO1xuXG4vKipcbiAqIEJ1dHRvbiBleGFtcGxlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOjdweDtcIj5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9J0xhcmdlJyBzaXplPSdsYXJnZScgdHlwZT0ncHJpbWFyeScvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOjdweDtcIj5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9J01lZGl1bScgc2l6ZT0nbWVkaXVtJyB0eXBlPSdwcmltYXJ5Jy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6N3B4O1wiPlxuICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD0nU21hbGwnIHNpemU9J3NtYWxsJyB0eXBlPSdwcmltYXJ5Jy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPSdtYXJnaW4tdG9wOjQwcHg7Jz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDo3cHg7XCI+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPSdQcmltYXJ5JyBzaXplPSdtZWRpdW0nIHR5cGU9J3ByaW1hcnknLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDo3cHg7XCI+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPSdTZWNvbmRhcnknIHNpemU9J21lZGl1bScgdHlwZT0nc2Vjb25kYXJ5Jy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6N3B4O1wiPlxuICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD0nV2FybmluZycgc2l6ZT0nbWVkaXVtJyB0eXBlPSd3YXJuaW5nJy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcbiJdfQ==
}, {"dekujs/virtual-element":2,"/lib":4}],
29: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

var _lib = require('/lib');

/**
 * Table example.
 */

exports['default'] = {
  render: function render() {
    var people = [['Full Name', 'Age'], ['Steven Miller', '25'], ['Tamara Jordan', '23'], ['John Smith', '28']];

    return (0, _dekujsVirtualElement2['default'])(_lib.Table, { rows: people });
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29DQUFvQix3QkFBd0I7Ozs7bUJBQ3RCLE1BQU07Ozs7OztxQkFNYjtBQUNiLFFBQU0sRUFBQSxrQkFBRztBQUNQLFFBQUksTUFBTSxHQUFHLENBQ1gsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQ3BCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxFQUN2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsRUFDdkIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQ3JCLENBQUM7O0FBRUYsV0FBTyxxREFBTyxJQUFJLEVBQUcsTUFBTSxBQUFFLEdBQUUsQ0FBQTtHQUNoQztDQUNGIiwiZmlsZSI6ImV4YW1wbGVzL3RhYmxlLmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxlbWVudCBmcm9tICdkZWt1anMvdmlydHVhbC1lbGVtZW50JztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnL2xpYic7XG5cbi8qKlxuICogVGFibGUgZXhhbXBsZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcGVvcGxlID0gW1xuICAgICAgWydGdWxsIE5hbWUnLCAnQWdlJ10sXG4gICAgICBbJ1N0ZXZlbiBNaWxsZXInLCAnMjUnXSxcbiAgICAgIFsnVGFtYXJhIEpvcmRhbicsICcyMyddLFxuICAgICAgWydKb2huIFNtaXRoJywgJzI4J11cbiAgICBdO1xuXG4gICAgcmV0dXJuIDxUYWJsZSByb3dzPXsgcGVvcGxlIH0vPlxuICB9XG59O1xuIl19
}, {"dekujs/virtual-element":2,"/lib":4}],
30: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

var _lib = require('/lib');

/**
 * Code example.
 */

exports['default'] = {
  render: function render() {
    return (0, _dekujsVirtualElement2['default'])(
      'div',
      null,
      (0, _dekujsVirtualElement2['default'])(
        _lib.Code,
        { language: 'javascript' },
        '\n  var Git = require(\'gity\');\n\n  var git = Git()\n    .add(\'*.js\')\n    .commit(\'-m "added js files"\')\n    .run();\n  '
      )
    );
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2NvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0NBQW9CLHdCQUF3Qjs7OzttQkFDdkIsTUFBTTs7Ozs7O3FCQU1aO0FBQ2IsUUFBTSxFQUFBLGtCQUFHO0FBQ1AsV0FDRTs7O01BQ0U7O1VBQU0sUUFBUSxFQUFDLFlBQVk7O09BU3BCO0tBQ0gsQ0FDTjtHQUNIO0NBQ0YiLCJmaWxlIjoiZXhhbXBsZXMvY29kZS5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5pbXBvcnQgeyBDb2RlIH0gZnJvbSAnL2xpYic7XG5cbi8qKlxuICogQ29kZSBleGFtcGxlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29kZSBsYW5ndWFnZT0namF2YXNjcmlwdCc+XG4gIHtgXG4gIHZhciBHaXQgPSByZXF1aXJlKCdnaXR5Jyk7XG5cbiAgdmFyIGdpdCA9IEdpdCgpXG4gICAgLmFkZCgnKi5qcycpXG4gICAgLmNvbW1pdCgnLW0gXCJhZGRlZCBqcyBmaWxlc1wiJylcbiAgICAucnVuKCk7XG4gIGB9XG4gICAgICAgIDwvQ29kZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG4iXX0=
}, {"dekujs/virtual-element":2,"/lib":4}],
31: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

var _lib = require('/lib');

/**
 * Menu example.
 */

exports['default'] = {
  render: function render() {
    var sections = ['Home', 'Profile', 'Messages', 'Notifications'];

    return (0, _dekujsVirtualElement2['default'])(_lib.Menu, { items: sections, onChange: change });

    function change(item) {
      // ...
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL21lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0NBQW9CLHdCQUF3Qjs7OzttQkFDdkIsTUFBTTs7Ozs7O3FCQU1aO0FBQ2IsUUFBTSxFQUFBLGtCQUFHO0FBQ1AsUUFBSSxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQzs7QUFFaEUsV0FBTyxvREFBTSxLQUFLLEVBQUcsUUFBUSxBQUFFLEVBQUMsUUFBUSxFQUFHLE1BQU0sQUFBRSxHQUFFLENBQUE7O0FBRXJELGFBQVMsTUFBTSxDQUFDLElBQUksRUFBRTs7S0FFckI7R0FDRjtDQUNGIiwiZmlsZSI6ImV4YW1wbGVzL21lbnUuanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy9saWInO1xuXG4vKipcbiAqIE1lbnUgZXhhbXBsZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSBbJ0hvbWUnLCAnUHJvZmlsZScsICdNZXNzYWdlcycsICdOb3RpZmljYXRpb25zJ107XG5cbiAgICByZXR1cm4gPE1lbnUgaXRlbXM9eyBzZWN0aW9ucyB9IG9uQ2hhbmdlPXsgY2hhbmdlIH0vPlxuXG4gICAgZnVuY3Rpb24gY2hhbmdlKGl0ZW0pIHtcbiAgICAgIC8vIC4uLlxuICAgIH1cbiAgfVxufTtcbiJdfQ==
}, {"dekujs/virtual-element":2,"/lib":4}]}, {}, {"1":""})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXF1aXJlLmpzIiwiL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvZGVrdWpzLXZpcnR1YWwtZWxlbWVudEAxLjEuMi9idWlsZC92aXJ0dWFsLWVsZW1lbnQuanMiLCIvY29tcG9uZW50cy9kZWt1anMtZGVrdUAwLjUuNC9idWlsZC9kZWt1LmpzIiwiL2xpYi9pbmRleC5qcyIsIi9saWIvdGV4dC1maWVsZC9pbmRleC5qcyIsIi9saWIvY2hlY2tib3gvaW5kZXguanMiLCIvbGliL2Ryb3Bkb3duL2luZGV4LmpzIiwiL2xpYi9tZW51L2luZGV4LmpzIiwiL2xpYi9idXR0b24vaW5kZXguanMiLCIvbGliL3RhYmxlL2luZGV4LmpzIiwiL2xpYi9jb2RlL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodEAwLjAuMi9saWIvaW5kZXguanMiLCIvY29tcG9uZW50cy9jb21wb25lbnQtZXNjYXBlLWh0bWxAdjEuMC4yL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1vYmplY3RpdmUtY0BtYXN0ZXIvaW5kZXguanMiLCIvY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LWphdmFzY3JpcHRAMC4wLjMvbGliL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1jc2hhcnBAbWFzdGVyL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1weXRob25AMC4wLjMvaW5kZXguanMiLCIvY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LWphdmFAbWFzdGVyL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1iYXNoQG1hc3Rlci9pbmRleC5qcyIsIi9jb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtcnVieUBtYXN0ZXIvaW5kZXguanMiLCIvY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LXlhbWxAbWFzdGVyL2luZGV4LmpzIiwiL2NvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC14bWxAbWFzdGVyL2xpYi9pbmRleC5qcyIsIi9jb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtcGhwQG1hc3Rlci9pbmRleC5qcyIsIi9jb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtY3NzQDAuMC4yL2xpYi9pbmRleC5qcyIsIi9jb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtZ29AMC4wLjEvbGliL2luZGV4LmpzIiwiL2V4YW1wbGVzL2luZGV4LmpzIiwiL2V4YW1wbGVzL3RleHQtZmllbGQuanMiLCIvZXhhbXBsZXMvYnV0dG9uLmpzIiwiL2V4YW1wbGVzL3RhYmxlLmpzIiwiL2V4YW1wbGVzL2NvZGUuanMiLCIvZXhhbXBsZXMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O29DQzFGb0Isd0JBQXdCOzs7OzBCQUNmLGFBQWE7O21CQUNmLE9BQU87O3dCQUNiLFlBQVk7Ozs7Ozs7O0FBTWpDLElBQUksR0FBRyxHQUFHO0FBQ1IsUUFBTSxFQUFBLGdCQUFDLElBQWdCLEVBQUUsV0FBVyxFQUFFO1FBQTdCLEtBQUssR0FBUCxJQUFnQixDQUFkLEtBQUs7UUFBRSxLQUFLLEdBQWQsSUFBZ0IsQ0FBUCxLQUFLO1FBQ2IsUUFBUSxHQUFLLEtBQUssQ0FBbEIsUUFBUTs7QUFDZCxRQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0MsUUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFbEMsV0FDRTs7UUFBSyxTQUFNLEtBQUs7TUFDZDs7VUFBSyxTQUFNLFVBQVU7UUFDbkIsb0RBQU0sS0FBSyxFQUFHLEtBQUssQUFBRSxFQUFDLFFBQVEsRUFBRyxhQUFhLEFBQUUsR0FBRTtPQUM5QztNQUNOOztVQUFLLFNBQU0sYUFBYTtRQUN0Qjs7WUFBSyxTQUFNLHVCQUF1QjtVQUM5QixPQUFPLENBQUMsU0FBUztTQUNmO1FBQ047O1lBQUssU0FBTSxrQkFBa0I7VUFDM0I7O2NBQU0sUUFBUSxFQUFDLE1BQU07WUFDakIsT0FBTyxDQUFDLElBQUk7V0FDVDtTQUNIO09BQ0Y7S0FDRixDQUNOOztBQUVGLGFBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRTtBQUM5QixpQkFBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDN0M7R0FDRjtDQUNGLENBQUM7O0FBRUYsSUFBSSxHQUFHLEdBQUcsc0JBQUssdUNBQUMsR0FBRyxJQUFDLFFBQVEsdUJBQWEsR0FBRSxDQUFDLENBQUM7QUFDN0Msd0JBQU8sR0FBRyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0FDeEM1QyxDQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsTUFBRyxPQUFPLE9BQU8sS0FBRyxRQUFRLElBQUUsT0FBTyxNQUFNLEtBQUcsV0FBVyxFQUFDO0FBQUMsVUFBTSxDQUFDLE9BQU8sR0FBQyxDQUFDLEVBQUUsQ0FBQTtHQUFDLE1BQUssSUFBRyxPQUFPLE1BQU0sS0FBRyxVQUFVLElBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQztBQUFDLFVBQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxNQUFJO0FBQUMsUUFBSSxDQUFDLENBQUMsSUFBRyxPQUFPLE1BQU0sS0FBRyxXQUFXLEVBQUM7QUFBQyxPQUFDLEdBQUMsTUFBTSxDQUFBO0tBQUMsTUFBSyxJQUFHLE9BQU8sTUFBTSxLQUFHLFdBQVcsRUFBQztBQUFDLE9BQUMsR0FBQyxNQUFNLENBQUE7S0FBQyxNQUFLLElBQUcsT0FBTyxJQUFJLEtBQUcsV0FBVyxFQUFDO0FBQUMsT0FBQyxHQUFDLElBQUksQ0FBQTtLQUFDLE1BQUk7QUFBQyxPQUFDLEdBQUMsSUFBSSxDQUFBO0tBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUUsQ0FBQTtHQUFDO0NBQUMsQ0FBQSxDQUFFLFlBQVU7QUFBQyxNQUFJLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGFBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxVQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQUMsWUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztBQUFDLGNBQUksQ0FBQyxHQUFDLE9BQU8sUUFBUSxJQUFFLFVBQVUsSUFBRSxRQUFRLENBQUMsSUFBRyxDQUFDLENBQUMsSUFBRSxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxLQUFLLENBQUMsc0JB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QVEsSUFBRSxVQUFVLElBQUUsUUFBUSxDQUFDLElBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixHQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUMsa0JBQWtCLEVBQUMsQ0FBQyxDQUFBLENBQUE7U0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsY0FBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7U0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO0tBQUMsSUFBSSxDQUFDLEdBQUMsT0FBTyxRQUFRLElBQUUsVUFBVSxJQUFFLFFBQVEsQ0FBQyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7R0FBQyxDQUFBLENBQUUsRUFB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Q0g7Q0FDRjs7Ozs7Ozs7Ozs7OztvQ0N4Qm1CLHdCQUF3Qjs7OzttQkFDdkIsTUFBTTs7Ozs7O3FCQU1aO0FBQ2IsUUFBTSxFQUFBLGtCQUFHO0FBQ1AsUUFBSSxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQzs7QUFFaEUsV0FBTyxvREFBTSxLQUFLLEVBQUcsUUFBUSxBQUFFLEVBQUMsUUFBUSxFQUFHLE1BQU0sQUFBRSxHQUFFLENBQUE7O0FBRXJELGFBQVMsTUFBTSxDQUFDLElBQUksRUFBRTs7S0FFckI7R0FDRjtDQUNGIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9kdW8iLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gb3V0ZXIobW9kdWxlcywgY2FjaGUsIGVudHJpZXMpe1xuXG4gIC8qKlxuICAgKiBHbG9iYWxcbiAgICovXG5cbiAgdmFyIGdsb2JhbCA9IChmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSkoKTtcblxuICAvKipcbiAgICogUmVxdWlyZSBgbmFtZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlcXVpcmUobmFtZSl7XG4gICAgaWYgKGNhY2hlW25hbWVdKSByZXR1cm4gY2FjaGVbbmFtZV0uZXhwb3J0cztcbiAgICBpZiAobW9kdWxlc1tuYW1lXSkgcmV0dXJuIGNhbGwobmFtZSwgcmVxdWlyZSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgZmluZCBtb2R1bGUgXCInICsgbmFtZSArICdcIicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgbW9kdWxlIGBpZGAgYW5kIGNhY2hlIGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVxdWlyZVxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNhbGwoaWQsIHJlcXVpcmUpe1xuICAgIHZhciBtID0gY2FjaGVbaWRdID0geyBleHBvcnRzOiB7fSB9O1xuICAgIHZhciBtb2QgPSBtb2R1bGVzW2lkXTtcbiAgICB2YXIgbmFtZSA9IG1vZFsyXTtcbiAgICB2YXIgZm4gPSBtb2RbMF07XG4gICAgdmFyIHRocmV3ID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICBmbi5jYWxsKG0uZXhwb3J0cywgZnVuY3Rpb24ocmVxKXtcbiAgICAgICAgdmFyIGRlcCA9IG1vZHVsZXNbaWRdWzFdW3JlcV07XG4gICAgICAgIHJldHVybiByZXF1aXJlKGRlcCB8fCByZXEpO1xuICAgICAgfSwgbSwgbS5leHBvcnRzLCBvdXRlciwgbW9kdWxlcywgY2FjaGUsIGVudHJpZXMpO1xuICAgICAgdGhyZXcgPSBmYWxzZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKHRocmV3KSB7XG4gICAgICAgIGRlbGV0ZSBjYWNoZVtpZF07XG4gICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgICAgLy8gZXhwb3NlIGFzICduYW1lJy5cbiAgICAgICAgY2FjaGVbbmFtZV0gPSBjYWNoZVtpZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlW2lkXS5leHBvcnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVpcmUgYWxsIGVudHJpZXMgZXhwb3NpbmcgdGhlbSBvbiBnbG9iYWwgaWYgbmVlZGVkLlxuICAgKi9cblxuICBmb3IgKHZhciBpZCBpbiBlbnRyaWVzKSB7XG4gICAgaWYgKGVudHJpZXNbaWRdKSB7XG4gICAgICBnbG9iYWxbZW50cmllc1tpZF1dID0gcmVxdWlyZShpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVpcmUoaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEdW8gZmxhZy5cbiAgICovXG5cbiAgcmVxdWlyZS5kdW8gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBFeHBvc2UgY2FjaGUuXG4gICAqL1xuXG4gIHJlcXVpcmUuY2FjaGUgPSBjYWNoZTtcblxuICAvKipcbiAgICogRXhwb3NlIG1vZHVsZXNcbiAgICovXG5cbiAgcmVxdWlyZS5tb2R1bGVzID0gbW9kdWxlcztcblxuICAvKipcbiAgICogUmV0dXJuIG5ld2VzdCByZXF1aXJlLlxuICAgKi9cblxuICAgcmV0dXJuIHJlcXVpcmU7XG59KSIsImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IHsgZGVrdSwgcmVuZGVyIH0gZnJvbSAnZGVrdWpzL2Rla3UnO1xuaW1wb3J0IHsgTWVudSwgQ29kZSB9IGZyb20gJy4vbGliJztcbmltcG9ydCBleGFtcGxlcyBmcm9tICcuL2V4YW1wbGVzJyA7XG5cbi8qKlxuICogQXBwLlxuICovXG5cbmxldCBBcHAgPSB7XG4gIHJlbmRlcih7IHByb3BzLCBzdGF0ZSB9LCB1cGRhdGVTdGF0ZSkge1xuICAgIGxldCB7IGV4YW1wbGVzIH0gPSBwcm9wcztcbiAgICBsZXQgZXhhbXBsZSA9IHN0YXRlLmV4YW1wbGUgfHwgZXhhbXBsZXMuQ29kZTtcbiAgICBsZXQgaXRlbXMgPSBPYmplY3Qua2V5cyhleGFtcGxlcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz0nQXBwJz5cbiAgICAgICAgPGRpdiBjbGFzcz0nQXBwLW1lbnUnPlxuICAgICAgICAgIDxNZW51IGl0ZW1zPXsgaXRlbXMgfSBvbkNoYW5nZT17IGNoYW5nZUV4YW1wbGUgfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdBcHAtZXhhbXBsZSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nQXBwLWV4YW1wbGUtY29tcG9uZW50Jz5cbiAgICAgICAgICAgIHsgZXhhbXBsZS5jb21wb25lbnQgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J0FwcC1leGFtcGxlLWNvZGUnPlxuICAgICAgICAgICAgPENvZGUgbGFuZ3VhZ2U9J2h0bWwnPlxuICAgICAgICAgICAgICB7IGV4YW1wbGUuY29kZSB9XG4gICAgICAgICAgICA8L0NvZGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZUV4YW1wbGUoZXhhbXBsZSkge1xuICAgICAgdXBkYXRlU3RhdGUoeyBleGFtcGxlOiBleGFtcGxlc1tleGFtcGxlXSB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmxldCBhcHAgPSBkZWt1KDxBcHAgZXhhbXBsZXM9eyBleGFtcGxlcyB9Lz4pO1xucmVuZGVyKGFwcCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpKTtcbiIsIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLnZpcnR1YWxFbGVtZW50ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiBfcmVxdWlyZT09XCJmdW5jdGlvblwiJiZfcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgX3JlcXVpcmU9PVwiZnVuY3Rpb25cIiYmX3JlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHNsaWNlID0gX3JlcXVpcmUoJ3NsaWNlZCcpXG52YXIgZmxhdHRlbiA9IF9yZXF1aXJlKCdhcnJheS1mbGF0dGVuJylcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGxldHMgdXMgY3JlYXRlIHZpcnR1YWwgbm9kZXMgdXNpbmcgYSBzaW1wbGVcbiAqIHN5bnRheC4gSXQgaXMgY29tcGF0aWJsZSB3aXRoIEpTWCB0cmFuc2Zvcm1zIHNvIHlvdSBjYW4gdXNlXG4gKiBKU1ggdG8gd3JpdGUgbm9kZXMgdGhhdCB3aWxsIGNvbXBpbGUgdG8gdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBsZXQgbm9kZSA9IGVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdmb28nIH0sIFtcbiAqICAgZWxlbWVudCgnYScsIHsgaHJlZjogJ2h0dHA6Ly9nb29nbGUuY29tJyB9LCAnR29vZ2xlJylcbiAqIF0pXG4gKlxuICogWW91IGNhbiBsZWF2ZSBvdXQgdGhlIGF0dHJpYnV0ZXMgb3IgdGhlIGNoaWxkcmVuIGlmIGVpdGhlclxuICogb2YgdGhlbSBhcmVuJ3QgbmVlZGVkIGFuZCBpdCB3aWxsIGZpZ3VyZSBvdXQgd2hhdCB5b3UncmVcbiAqIHRyeWluZyB0byBkby5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRcblxuLyoqXG4gKiBDcmVhdGUgdmlydHVhbCB0cmVlcyBvZiBjb21wb25lbnRzLlxuICpcbiAqIFRoaXMgY3JlYXRlcyB0aGUgbmljZXIgQVBJIGZvciB0aGUgdXNlci5cbiAqIEl0IHRyYW5zbGF0ZXMgdGhhdCBmcmllbmRseSBBUEkgaW50byBhbiBhY3R1YWwgdHJlZSBvZiBub2Rlcy5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge0FycmF5fSBjaGlsZHJlblxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbGVtZW50ICh0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuICAvLyBEZWZhdWx0IHRvIGRpdiB3aXRoIG5vIGFyZ3NcbiAgaWYgKCF0eXBlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZWxlbWVudCgpIG5lZWRzIGEgdHlwZS4nKVxuICB9XG5cbiAgLy8gU2tpcHBlZCBhZGRpbmcgYXR0cmlidXRlcyBhbmQgd2UncmUgcGFzc2luZ1xuICAvLyBpbiBjaGlsZHJlbiBpbnN0ZWFkLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAodHlwZW9mIGF0dHJpYnV0ZXMgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoYXR0cmlidXRlcykpKSB7XG4gICAgY2hpbGRyZW4gPSBhdHRyaWJ1dGVzXG4gICAgYXR0cmlidXRlcyA9IHt9XG4gIH1cblxuICAvLyBBY2NvdW50IGZvciBKU1ggcHV0dGluZyB0aGUgY2hpbGRyZW4gYXMgbXVsdGlwbGUgYXJndW1lbnRzLlxuICAvLyBUaGlzIGlzIGVzc2VudGlhbGx5IGp1c3QgdGhlIEVTNiByZXN0IHBhcmFtXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBjaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPT09IGZhbHNlKSB7XG4gICAgY2hpbGRyZW4gPSBzbGljZShhcmd1bWVudHMsIDIpXG4gIH1cblxuICBjaGlsZHJlbiA9IGNoaWxkcmVuIHx8IFtdXG4gIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzIHx8IHt9XG5cbiAgLy8gcGFzc2luZyBpbiBhIHNpbmdsZSBjaGlsZCwgeW91IGNhbiBza2lwXG4gIC8vIHVzaW5nIHRoZSBhcnJheVxuICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgY2hpbGRyZW4gPSBbY2hpbGRyZW5dXG4gIH1cblxuICAvLyBGbGF0dGVuIG5lc3RlZCBjaGlsZCBhcnJheXMuIFRoaXMgaXMgaG93IEpTWCBjb21waWxlcyBzb21lIG5vZGVzLlxuICBjaGlsZHJlbiA9IGZsYXR0ZW4oY2hpbGRyZW4sIDIpXG5cbiAgLy8gaWYgeW91IHBhc3MgaW4gYSBmdW5jdGlvbiwgaXQncyBhIGBDb21wb25lbnRgIGNvbnN0cnVjdG9yLlxuICAvLyBvdGhlcndpc2UgaXQncyBhbiBlbGVtZW50LlxuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfVxufVxuXG59LHtcImFycmF5LWZsYXR0ZW5cIjoyLFwic2xpY2VkXCI6M31dLDI6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEV4cG9zZSBgYXJyYXlGbGF0dGVuYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZsYXR0ZW5cblxuLyoqXG4gKiBSZWN1cnNpdmUgZmxhdHRlbiBmdW5jdGlvbiB3aXRoIGRlcHRoLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSAgcmVzdWx0XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlcHRoXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbldpdGhEZXB0aCAoYXJyYXksIHJlc3VsdCwgZGVwdGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldXG5cbiAgICBpZiAoZGVwdGggPiAwICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmbGF0dGVuV2l0aERlcHRoKHZhbHVlLCByZXN1bHQsIGRlcHRoIC0gMSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFJlY3Vyc2l2ZSBmbGF0dGVuIGZ1bmN0aW9uLiBPbWl0dGluZyBkZXB0aCBpcyBzbGlnaHRseSBmYXN0ZXIuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gcmVzdWx0XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkZvcmV2ZXIgKGFycmF5LCByZXN1bHQpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZsYXR0ZW5Gb3JldmVyKHZhbHVlLCByZXN1bHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuIGFycmF5LCB3aXRoIHRoZSBhYmlsaXR5IHRvIGRlZmluZSBhIGRlcHRoLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgYXJyYXlcbiAqIEBwYXJhbSAge051bWJlcn0gZGVwdGhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBhcnJheUZsYXR0ZW4gKGFycmF5LCBkZXB0aCkge1xuICBpZiAoZGVwdGggPT0gbnVsbCkge1xuICAgIHJldHVybiBmbGF0dGVuRm9yZXZlcihhcnJheSwgW10pXG4gIH1cblxuICByZXR1cm4gZmxhdHRlbldpdGhEZXB0aChhcnJheSwgW10sIGRlcHRoKVxufVxuXG59LHt9XSwzOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBfcmVxdWlyZSgnLi9saWIvc2xpY2VkJyk7XG5cbn0se1wiLi9saWIvc2xpY2VkXCI6NH1dLDQ6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxuLyoqXG4gKiBBbiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpIGFsdGVybmF0aXZlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3Mgc29tZXRoaW5nIHdpdGggYSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBzbGljZVxuICogQHBhcmFtIHtOdW1iZXJ9IHNsaWNlRW5kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3MsIHNsaWNlLCBzbGljZUVuZCkge1xuICB2YXIgcmV0ID0gW107XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcblxuICBpZiAoMCA9PT0gbGVuKSByZXR1cm4gcmV0O1xuXG4gIHZhciBzdGFydCA9IHNsaWNlIDwgMFxuICAgID8gTWF0aC5tYXgoMCwgc2xpY2UgKyBsZW4pXG4gICAgOiBzbGljZSB8fCAwO1xuXG4gIGlmIChzbGljZUVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuID0gc2xpY2VFbmQgPCAwXG4gICAgICA/IHNsaWNlRW5kICsgbGVuXG4gICAgICA6IHNsaWNlRW5kXG4gIH1cblxuICB3aGlsZSAobGVuLS0gPiBzdGFydCkge1xuICAgIHJldFtsZW4gLSBzdGFydF0gPSBhcmdzW2xlbl07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5cbn0se31dfSx7fSxbMV0pKDEpXG59KTsiLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5kZWt1ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiBfcmVxdWlyZT09XCJmdW5jdGlvblwiJiZfcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgX3JlcXVpcmU9PVwiZnVuY3Rpb25cIiYmX3JlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSBfcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKVxuXG4vKipcbiAqIEV4cG9zZSBgc2NlbmVgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQXBwbGljYXRpb25cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgYEFwcGxpY2F0aW9uYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBPcHRpb25hbCBpbml0aWFsIGVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBBcHBsaWNhdGlvbiAoZWxlbWVudCkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQXBwbGljYXRpb24pKSByZXR1cm4gbmV3IEFwcGxpY2F0aW9uKGVsZW1lbnQpXG4gIHRoaXMub3B0aW9ucyA9IHt9XG4gIHRoaXMuc291cmNlcyA9IHt9XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbn1cblxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihBcHBsaWNhdGlvbi5wcm90b3R5cGUpXG5cbi8qKlxuICogQWRkIGEgcGx1Z2luXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luXG4gKi9cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgcGx1Z2luKHRoaXMpXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogU2V0IGFuIG9wdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKi9cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLm9wdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCB2YWwpIHtcbiAgdGhpcy5vcHRpb25zW25hbWVdID0gdmFsXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogU2V0IHZhbHVlIHVzZWQgc29tZXdoZXJlIGluIHRoZSBJTyBuZXR3b3JrLlxuICovXG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuICB0aGlzLnNvdXJjZXNbbmFtZV0gPSBkYXRhXG4gIHRoaXMuZW1pdCgnc291cmNlJywgbmFtZSwgZGF0YSlcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBNb3VudCBhIHZpcnR1YWwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge1ZpcnR1YWxFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICB0aGlzLmVtaXQoJ21vdW50JywgZWxlbWVudClcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHdvcmxkLiBVbm1vdW50IGV2ZXJ5dGhpbmcuXG4gKi9cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cbiAgdGhpcy5lbGVtZW50ID0gbnVsbFxuICB0aGlzLmVtaXQoJ3VubW91bnQnKVxuICByZXR1cm4gdGhpc1xufVxuXG59LHtcImNvbXBvbmVudC1lbWl0dGVyXCI6OH1dLDI6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogQWxsIG9mIHRoZSBldmVudHMgY2FuIGJpbmQgdG9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb25CbHVyOiAnYmx1cicsXG4gIG9uQ2hhbmdlOiAnY2hhbmdlJyxcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25Db250ZXh0TWVudTogJ2NvbnRleHRtZW51JyxcbiAgb25Db3B5OiAnY29weScsXG4gIG9uQ3V0OiAnY3V0JyxcbiAgb25Eb3VibGVDbGljazogJ2RibGNsaWNrJyxcbiAgb25EcmFnOiAnZHJhZycsXG4gIG9uRHJhZ0VuZDogJ2RyYWdlbmQnLFxuICBvbkRyYWdFbnRlcjogJ2RyYWdlbnRlcicsXG4gIG9uRHJhZ0V4aXQ6ICdkcmFnZXhpdCcsXG4gIG9uRHJhZ0xlYXZlOiAnZHJhZ2xlYXZlJyxcbiAgb25EcmFnT3ZlcjogJ2RyYWdvdmVyJyxcbiAgb25EcmFnU3RhcnQ6ICdkcmFnc3RhcnQnLFxuICBvbkRyb3A6ICdkcm9wJyxcbiAgb25FcnJvcjogJ2Vycm9yJyxcbiAgb25Gb2N1czogJ2ZvY3VzJyxcbiAgb25JbnB1dDogJ2lucHV0JyxcbiAgb25JbnZhbGlkOiAnaW52YWxpZCcsXG4gIG9uS2V5RG93bjogJ2tleWRvd24nLFxuICBvbktleVByZXNzOiAna2V5cHJlc3MnLFxuICBvbktleVVwOiAna2V5dXAnLFxuICBvbk1vdXNlRG93bjogJ21vdXNlZG93bicsXG4gIG9uTW91c2VFbnRlcjogJ21vdXNlZW50ZXInLFxuICBvbk1vdXNlTGVhdmU6ICdtb3VzZWxlYXZlJyxcbiAgb25Nb3VzZU1vdmU6ICdtb3VzZW1vdmUnLFxuICBvbk1vdXNlT3V0OiAnbW91c2VvdXQnLFxuICBvbk1vdXNlT3ZlcjogJ21vdXNlb3ZlcicsXG4gIG9uTW91c2VVcDogJ21vdXNldXAnLFxuICBvblBhc3RlOiAncGFzdGUnLFxuICBvblJlc2V0OiAncmVzZXQnLFxuICBvblNjcm9sbDogJ3Njcm9sbCcsXG4gIG9uU3VibWl0OiAnc3VibWl0JyxcbiAgb25Ub3VjaENhbmNlbDogJ3RvdWNoY2FuY2VsJyxcbiAgb25Ub3VjaEVuZDogJ3RvdWNoZW5kJyxcbiAgb25Ub3VjaE1vdmU6ICd0b3VjaG1vdmUnLFxuICBvblRvdWNoU3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgb25XaGVlbDogJ3doZWVsJ1xufVxuXG59LHt9XSwzOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiAqIENyZWF0ZSB0aGUgYXBwbGljYXRpb24uXG4gKi9cblxuZXhwb3J0cy50cmVlID1cbmV4cG9ydHMuc2NlbmUgPVxuZXhwb3J0cy5kZWt1ID0gX3JlcXVpcmUoJy4vYXBwbGljYXRpb24nKVxuXG4vKipcbiAqIFJlbmRlciBzY2VuZXMgdG8gdGhlIERPTS5cbiAqL1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBleHBvcnRzLnJlbmRlciA9IF9yZXF1aXJlKCcuL3JlbmRlcicpXG59XG5cbi8qKlxuICogUmVuZGVyIHNjZW5lcyB0byBhIHN0cmluZ1xuICovXG5cbmV4cG9ydHMucmVuZGVyU3RyaW5nID0gX3JlcXVpcmUoJy4vc3RyaW5naWZ5Jylcbn0se1wiLi9hcHBsaWNhdGlvblwiOjEsXCIuL3JlbmRlclwiOjUsXCIuL3N0cmluZ2lmeVwiOjZ9XSw0OltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgdHlwZSA9IF9yZXF1aXJlKCdjb21wb25lbnQtdHlwZScpXG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZpcnR1YWwgbm9kZVxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gbm9kZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9kZVR5cGUgKG5vZGUpIHtcbiAgdmFyIHYgPSB0eXBlKG5vZGUpXG4gIGlmICh2ID09PSAnbnVsbCcgfHwgbm9kZSA9PT0gZmFsc2UpIHJldHVybiAnZW1wdHknXG4gIGlmICh2ICE9PSAnb2JqZWN0JykgcmV0dXJuICd0ZXh0J1xuICBpZiAodHlwZShub2RlLnR5cGUpID09PSAnc3RyaW5nJykgcmV0dXJuICdlbGVtZW50J1xuICByZXR1cm4gJ2NvbXBvbmVudCdcbn1cblxufSx7XCJjb21wb25lbnQtdHlwZVwiOjEwfV0sNTpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4gKiBEZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHJhZiA9IF9yZXF1aXJlKCdjb21wb25lbnQtcmFmJylcbnZhciBpc0RvbSA9IF9yZXF1aXJlKCdpcy1kb20nKVxudmFyIHVpZCA9IF9yZXF1aXJlKCdnZXQtdWlkJylcbnZhciBrZXlwYXRoID0gX3JlcXVpcmUoJ29iamVjdC1wYXRoJylcbnZhciBldmVudHMgPSBfcmVxdWlyZSgnLi9ldmVudHMnKVxudmFyIHN2ZyA9IF9yZXF1aXJlKCcuL3N2ZycpXG52YXIgZGVmYXVsdHMgPSBfcmVxdWlyZSgnb2JqZWN0LWRlZmF1bHRzJylcbnZhciBmb3JFYWNoID0gX3JlcXVpcmUoJ2Zhc3QuanMvZm9yRWFjaCcpXG52YXIgYXNzaWduID0gX3JlcXVpcmUoJ2Zhc3QuanMvb2JqZWN0L2Fzc2lnbicpXG52YXIgcmVkdWNlID0gX3JlcXVpcmUoJ2Zhc3QuanMvcmVkdWNlJylcbnZhciBub2RlVHlwZSA9IF9yZXF1aXJlKCcuL25vZGUtdHlwZScpXG5cbi8qKlxuICogRXhwb3NlIGBkb21gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVuZGVyXG5cbi8qKlxuICogUmVuZGVyIGFuIGFwcCB0byB0aGUgRE9NXG4gKlxuICogQHBhcmFtIHtBcHBsaWNhdGlvbn0gYXBwXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIHJlbmRlciAoYXBwLCBjb250YWluZXIsIG9wdHMpIHtcbiAgdmFyIGZyYW1lSWRcbiAgdmFyIGlzUmVuZGVyaW5nXG4gIHZhciByb290SWQgPSAncm9vdCdcbiAgdmFyIGN1cnJlbnRFbGVtZW50XG4gIHZhciBjdXJyZW50TmF0aXZlRWxlbWVudFxuICB2YXIgY29ubmVjdGlvbnMgPSB7fVxuICB2YXIgY29tcG9uZW50cyA9IHt9XG4gIHZhciBlbnRpdGllcyA9IHt9XG4gIHZhciBoYW5kbGVycyA9IHt9XG4gIHZhciBtb3VudFF1ZXVlID0gW11cbiAgdmFyIGNoaWxkcmVuID0ge31cbiAgY2hpbGRyZW5bcm9vdElkXSA9IHt9XG5cbiAgaWYgKCFpc0RvbShjb250YWluZXIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgZWxlbWVudCBtdXN0IGJlIGEgRE9NIGVsZW1lbnQnKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcmluZyBvcHRpb25zLiBCYXRjaGluZyBpcyBvbmx5IGV2ZXIgcmVhbGx5IGRpc2FibGVkXG4gICAqIHdoZW4gcnVubmluZyB0ZXN0cywgYW5kIHBvb2xpbmcgY2FuIGJlIGRpc2FibGVkIGlmIHRoZSB1c2VyXG4gICAqIGlzIGRvaW5nIHNvbWV0aGluZyBzdHVwaWQgd2l0aCB0aGUgRE9NIGluIHRoZWlyIGNvbXBvbmVudHMuXG4gICAqL1xuXG4gIHZhciBvcHRpb25zID0gZGVmYXVsdHMoYXNzaWduKHt9LCBhcHAub3B0aW9ucyB8fCB7fSwgb3B0cyB8fCB7fSksIHtcbiAgICBiYXRjaGluZzogdHJ1ZVxuICB9KVxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gRE9NIGV2ZW50c1xuICAgKi9cbiAgdmFyIHJvb3RFbGVtZW50ID0gZ2V0Um9vdEVsZW1lbnQoY29udGFpbmVyKVxuICBhZGROYXRpdmVFdmVudExpc3RlbmVycygpXG5cbiAgLyoqXG4gICAqIFdhdGNoIGZvciBjaGFuZ2VzIHRvIHRoZSBhcHAgc28gdGhhdCB3ZSBjYW4gdXBkYXRlXG4gICAqIHRoZSBET00gYXMgbmVlZGVkLlxuICAgKi9cblxuICBhcHAub24oJ3VubW91bnQnLCBvbnVubW91bnQpXG4gIGFwcC5vbignbW91bnQnLCBvbm1vdW50KVxuICBhcHAub24oJ3NvdXJjZScsIG9udXBkYXRlKVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYXBwIGhhcyBhbHJlYWR5IG1vdW50ZWQgYW4gZWxlbWVudCwgd2UgY2FuIGp1c3RcbiAgICogcmVuZGVyIHRoYXQgc3RyYWlnaHQgYXdheS5cbiAgICovXG5cbiAgaWYgKGFwcC5lbGVtZW50KSByZW5kZXIoKVxuXG4gIC8qKlxuICAgKiBUZWFyZG93biB0aGUgRE9NIHJlbmRlcmluZyBzbyB0aGF0IGl0IHN0b3BzXG4gICAqIHJlbmRlcmluZyBhbmQgZXZlcnl0aGluZyBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRlYXJkb3duICgpIHtcbiAgICByZW1vdmVOYXRpdmVFdmVudExpc3RlbmVycygpXG4gICAgcmVtb3ZlTmF0aXZlRWxlbWVudCgpXG4gICAgYXBwLm9mZigndW5tb3VudCcsIG9udW5tb3VudClcbiAgICBhcHAub2ZmKCdtb3VudCcsIG9ubW91bnQpXG4gICAgYXBwLm9mZignc291cmNlJywgb251cGRhdGUpXG4gIH1cblxuICAvKipcbiAgICogU3dhcCB0aGUgY3VycmVudCByZW5kZXJlZCBub2RlIHdpdGggYSBuZXcgb25lIHRoYXQgaXMgcmVuZGVyZWRcbiAgICogZnJvbSB0aGUgbmV3IHZpcnR1YWwgZWxlbWVudCBtb3VudGVkIG9uIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSB7VmlydHVhbEVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG5cbiAgZnVuY3Rpb24gb25tb3VudCAoKSB7XG4gICAgaW52YWxpZGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICogSWYgdGhlIGFwcCB1bm1vdW50cyBhbiBlbGVtZW50LCB3ZSBzaG91bGQgY2xlYXIgb3V0IHRoZSBjdXJyZW50XG4gICAqIHJlbmRlcmVkIGVsZW1lbnQuIFRoaXMgd2lsbCByZW1vdmUgYWxsIHRoZSBlbnRpdGllcy5cbiAgICovXG5cbiAgZnVuY3Rpb24gb251bm1vdW50ICgpIHtcbiAgICByZW1vdmVOYXRpdmVFbGVtZW50KClcbiAgICBjdXJyZW50RWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWxsIGNvbXBvbmVudHMgdGhhdCBhcmUgYm91bmQgdG8gdGhlIHNvdXJjZVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0geyp9IGRhdGFcbiAgICovXG5cbiAgZnVuY3Rpb24gb251cGRhdGUgKG5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIWNvbm5lY3Rpb25zW25hbWVdKSByZXR1cm47XG4gICAgY29ubmVjdGlvbnNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih1cGRhdGUpIHtcbiAgICAgIHVwZGF0ZShkYXRhKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGFuZCBtb3VudCBhIGNvbXBvbmVudCB0byB0aGUgbmF0aXZlIGRvbS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG5cbiAgZnVuY3Rpb24gbW91bnRFbnRpdHkgKGVudGl0eSkge1xuICAgIHJlZ2lzdGVyKGVudGl0eSlcbiAgICBzZXRTb3VyY2VzKGVudGl0eSlcbiAgICBjaGlsZHJlbltlbnRpdHkuaWRdID0ge31cbiAgICBlbnRpdGllc1tlbnRpdHkuaWRdID0gZW50aXR5XG5cbiAgICAvLyBjb21taXQgaW5pdGlhbCBzdGF0ZSBhbmQgcHJvcHMuXG4gICAgY29tbWl0KGVudGl0eSlcblxuICAgIC8vIGNhbGxiYWNrIGJlZm9yZSBtb3VudGluZy5cbiAgICB0cmlnZ2VyKCdiZWZvcmVNb3VudCcsIGVudGl0eSwgW2VudGl0eS5jb250ZXh0XSlcbiAgICB0cmlnZ2VyKCdiZWZvcmVSZW5kZXInLCBlbnRpdHksIFtlbnRpdHkuY29udGV4dF0pXG5cbiAgICAvLyByZW5kZXIgdmlydHVhbCBlbGVtZW50LlxuICAgIHZhciB2aXJ0dWFsRWxlbWVudCA9IHJlbmRlckVudGl0eShlbnRpdHkpXG4gICAgLy8gY3JlYXRlIG5hdGl2ZSBlbGVtZW50LlxuICAgIHZhciBuYXRpdmVFbGVtZW50ID0gdG9OYXRpdmUoZW50aXR5LmlkLCAnMCcsIHZpcnR1YWxFbGVtZW50KVxuXG4gICAgZW50aXR5LnZpcnR1YWxFbGVtZW50ID0gdmlydHVhbEVsZW1lbnRcbiAgICBlbnRpdHkubmF0aXZlRWxlbWVudCA9IG5hdGl2ZUVsZW1lbnRcblxuICAgIC8vIEZpcmUgYWZ0ZXJSZW5kZXIgYW5kIGFmdGVyTW91bnQgaG9va3MgYXQgdGhlIGVuZFxuICAgIC8vIG9mIHRoZSByZW5kZXIgY3ljbGVcbiAgICBtb3VudFF1ZXVlLnB1c2goZW50aXR5LmlkKVxuXG4gICAgcmV0dXJuIG5hdGl2ZUVsZW1lbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBjb21wb25lbnQgZnJvbSB0aGUgbmF0aXZlIGRvbS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKi9cblxuICBmdW5jdGlvbiB1bm1vdW50RW50aXR5IChlbnRpdHlJZCkge1xuICAgIHZhciBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF1cbiAgICBpZiAoIWVudGl0eSkgcmV0dXJuXG4gICAgdHJpZ2dlcignYmVmb3JlVW5tb3VudCcsIGVudGl0eSwgW2VudGl0eS5jb250ZXh0LCBlbnRpdHkubmF0aXZlRWxlbWVudF0pXG4gICAgdW5tb3VudENoaWxkcmVuKGVudGl0eUlkKVxuICAgIHJlbW92ZUFsbEV2ZW50cyhlbnRpdHlJZClcbiAgICB2YXIgY29tcG9uZW50RW50aXRpZXMgPSBjb21wb25lbnRzW2VudGl0eUlkXS5lbnRpdGllcztcbiAgICBkZWxldGUgY29tcG9uZW50RW50aXRpZXNbZW50aXR5SWRdXG4gICAgZGVsZXRlIGNvbXBvbmVudHNbZW50aXR5SWRdXG4gICAgZGVsZXRlIGVudGl0aWVzW2VudGl0eUlkXVxuICAgIGRlbGV0ZSBjaGlsZHJlbltlbnRpdHlJZF1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGVudGl0eSBhbmQgbWFrZSBzdXJlIGl0IHJldHVybnMgYSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICpcbiAgICogQHJldHVybiB7VmlydHVhbFRyZWV9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbmRlckVudGl0eSAoZW50aXR5KSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IGVudGl0eS5jb21wb25lbnRcbiAgICB2YXIgZm4gPSB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nID8gY29tcG9uZW50IDogY29tcG9uZW50LnJlbmRlclxuICAgIGlmICghZm4pIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IG5lZWRzIGEgcmVuZGVyIGZ1bmN0aW9uJylcbiAgICB2YXIgcmVzdWx0ID0gZm4oZW50aXR5LmNvbnRleHQsIHNldFN0YXRlKGVudGl0eSkpXG4gICAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBFcnJvcignUmVuZGVyIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGFuIGVsZW1lbnQuJylcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogV2hlbmV2ZXIgc2V0U3RhdGUgb3Igc2V0UHJvcHMgaXMgY2FsbGVkLCB3ZSBtYXJrIHRoZSBlbnRpdHlcbiAgICogYXMgZGlydHkgaW4gdGhlIHJlbmRlcmVyLiBUaGlzIGxldHMgdXMgb3B0aW1pemUgdGhlIHJlLXJlbmRlcmluZ1xuICAgKiBhbmQgc2tpcCBjb21wb25lbnRzIHRoYXQgZGVmaW5pdGVseSBoYXZlbid0IGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICpcbiAgICogQHJldHVybiB7RnVuY3Rpb259IEEgY3VycmllZCBmdW5jdGlvbiBmb3IgdXBkYXRpbmcgdGhlIHN0YXRlIG9mIGFuIGVudGl0eVxuICAgKi9cblxuICBmdW5jdGlvbiBzZXRTdGF0ZSAoZW50aXR5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0U3RhdGUpIHtcbiAgICAgIHVwZGF0ZUVudGl0eVN0YXRlKGVudGl0eSwgbmV4dFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxsIHRoZSBhcHAgaXQncyBkaXJ0eSBhbmQgbmVlZHMgdG8gcmUtcmVuZGVyLiBJZiBiYXRjaGluZyBpcyBkaXNhYmxlZFxuICAgKiB3ZSBjYW4ganVzdCB0cmlnZ2VyIGEgcmVuZGVyIGltbWVkaWF0ZWx5LCBvdGhlcndpc2Ugd2UnbGwgd2FpdCB1bnRpbFxuICAgKiB0aGUgbmV4dCBhdmFpbGFibGUgZnJhbWUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGludmFsaWRhdGUgKCkge1xuICAgIGlmICghb3B0aW9ucy5iYXRjaGluZykge1xuICAgICAgaWYgKCFpc1JlbmRlcmluZykgcmVuZGVyKClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFmcmFtZUlkKSBmcmFtZUlkID0gcmFmKHJlbmRlcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBET00uIElmIHRoZSB1cGRhdGUgZmFpbHMgd2Ugc3RvcCB0aGUgbG9vcFxuICAgKiBzbyB3ZSBkb24ndCBnZXQgZXJyb3JzIG9uIGV2ZXJ5IGZyYW1lLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIC8vIElmIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgd2UgbmVlZCB0b1xuICAgIC8vIGNhbmNlbCBhbnkgcGVuZGluZyBmdXR1cmUgdXBkYXRlc1xuICAgIGNsZWFyRnJhbWUoKVxuXG4gICAgLy8gSWYgdGhlIHJlbmRlcmluZyBmcm9tIHRoZSBwcmV2aW91cyBmcmFtZSBpcyBzdGlsbCBnb2luZyxcbiAgICAvLyB3ZSdsbCBqdXN0IHdhaXQgdW50aWwgdGhlIG5leHQgZnJhbWUuIElkZWFsbHkgcmVuZGVycyBzaG91bGRcbiAgICAvLyBub3QgdGFrZSBvdmVyIDE2bXMgdG8gc3RheSB3aXRoaW4gYSBzaW5nbGUgZnJhbWUsIGJ1dCB0aGlzIHNob3VsZFxuICAgIC8vIGNhdGNoIGl0IGlmIGl0IGRvZXMuXG4gICAgaWYgKGlzUmVuZGVyaW5nKSB7XG4gICAgICBmcmFtZUlkID0gcmFmKHJlbmRlcilcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBpc1JlbmRlcmluZyA9IHRydWVcbiAgICB9XG5cbiAgICAvLyAxLiBJZiB0aGVyZSBpc24ndCBhIG5hdGl2ZSBlbGVtZW50IHJlbmRlcmVkIGZvciB0aGUgY3VycmVudCBtb3VudGVkIGVsZW1lbnRcbiAgICAvLyB0aGVuIHdlIG5lZWQgdG8gY3JlYXRlIGl0IGZyb20gc2NyYXRjaC5cbiAgICAvLyAyLiBJZiBhIG5ldyBlbGVtZW50IGhhcyBiZWVuIG1vdW50ZWQsIHdlIHNob3VsZCBkaWZmIHRoZW0uXG4gICAgLy8gMy4gV2Ugc2hvdWxkIHVwZGF0ZSBjaGVjayBhbGwgY2hpbGQgY29tcG9uZW50cyBmb3IgY2hhbmdlcy5cbiAgICBpZiAoIWN1cnJlbnROYXRpdmVFbGVtZW50KSB7XG4gICAgICBjdXJyZW50RWxlbWVudCA9IGFwcC5lbGVtZW50XG4gICAgICBjdXJyZW50TmF0aXZlRWxlbWVudCA9IHRvTmF0aXZlKHJvb3RJZCwgJzAnLCBjdXJyZW50RWxlbWVudClcbiAgICAgIGlmIChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ2Rla3U6IFRoZSBjb250YWluZXIgZWxlbWVudCBpcyBub3QgZW1wdHkuIFRoZXNlIGVsZW1lbnRzIHdpbGwgYmUgcmVtb3ZlZC4gUmVhZCBtb3JlOiBodHRwOi8vY2wubHkvYjBTcicpXG4gICAgICB9XG4gICAgICBpZiAoY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignZGVrdTogVXNpbmcgZG9jdW1lbnQuYm9keSBpcyBhbGxvd2VkIGJ1dCBpdCBjYW4gY2F1c2Ugc29tZSBpc3N1ZXMuIFJlYWQgbW9yZTogaHR0cDovL2NsLmx5L2IwU0MnKVxuICAgICAgfVxuICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY29udGFpbmVyKVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnROYXRpdmVFbGVtZW50KVxuICAgIH0gZWxzZSBpZiAoY3VycmVudEVsZW1lbnQgIT09IGFwcC5lbGVtZW50KSB7XG4gICAgICBjdXJyZW50TmF0aXZlRWxlbWVudCA9IHBhdGNoKHJvb3RJZCwgY3VycmVudEVsZW1lbnQsIGFwcC5lbGVtZW50LCBjdXJyZW50TmF0aXZlRWxlbWVudClcbiAgICAgIGN1cnJlbnRFbGVtZW50ID0gYXBwLmVsZW1lbnRcbiAgICAgIHVwZGF0ZUNoaWxkcmVuKHJvb3RJZClcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlQ2hpbGRyZW4ocm9vdElkKVxuICAgIH1cblxuICAgIC8vIENhbGwgbW91bnQgZXZlbnRzIG9uIGFsbCBuZXcgZW50aXRpZXNcbiAgICBmbHVzaE1vdW50UXVldWUoKVxuXG4gICAgLy8gQWxsb3cgcmVuZGVyaW5nIGFnYWluLlxuICAgIGlzUmVuZGVyaW5nID0gZmFsc2VcblxuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgaG9va3MgZm9yIGFsbCBuZXcgZW50aXRpZXMgdGhhdCBoYXZlIGJlZW4gY3JlYXRlZCBpblxuICAgKiB0aGUgbGFzdCByZW5kZXIgZnJvbSB0aGUgYm90dG9tIHVwLlxuICAgKi9cblxuICBmdW5jdGlvbiBmbHVzaE1vdW50UXVldWUgKCkge1xuICAgIHdoaWxlIChtb3VudFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBlbnRpdHlJZCA9IG1vdW50UXVldWUuc2hpZnQoKVxuICAgICAgdmFyIGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgICAgdHJpZ2dlcignYWZ0ZXJSZW5kZXInLCBlbnRpdHksIFtlbnRpdHkuY29udGV4dCwgZW50aXR5Lm5hdGl2ZUVsZW1lbnRdKVxuICAgICAgdHJpZ2dlcignYWZ0ZXJNb3VudCcsIGVudGl0eSwgW2VudGl0eS5jb250ZXh0LCBlbnRpdHkubmF0aXZlRWxlbWVudCwgc2V0U3RhdGUoZW50aXR5KV0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjdXJyZW50IHNjaGVkdWxlZCBmcmFtZVxuICAgKi9cblxuICBmdW5jdGlvbiBjbGVhckZyYW1lICgpIHtcbiAgICBpZiAoIWZyYW1lSWQpIHJldHVyblxuICAgIHJhZi5jYW5jZWwoZnJhbWVJZClcbiAgICBmcmFtZUlkID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogVGhlIGVudGl0eSBpcyBqdXN0IHRoZSBkYXRhIG9iamVjdCBmb3IgYSBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCBDb21wb25lbnQgaW5zdGFuY2UgaWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUVudGl0eSAoZW50aXR5SWQpIHtcbiAgICB2YXIgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdXG4gICAgc2V0U291cmNlcyhlbnRpdHkpXG5cbiAgICBpZiAoIXNob3VsZFVwZGF0ZShlbnRpdHkpKSB7XG4gICAgICBjb21taXQoZW50aXR5KVxuICAgICAgcmV0dXJuIHVwZGF0ZUNoaWxkcmVuKGVudGl0eUlkKVxuICAgIH1cblxuICAgIHZhciBjdXJyZW50VHJlZSA9IGVudGl0eS52aXJ0dWFsRWxlbWVudFxuICAgIHZhciBuZXh0UHJvcHMgPSBlbnRpdHkucGVuZGluZ1Byb3BzXG4gICAgdmFyIG5leHRTdGF0ZSA9IGVudGl0eS5wZW5kaW5nU3RhdGVcbiAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IGVudGl0eS5jb250ZXh0LnN0YXRlXG4gICAgdmFyIHByZXZpb3VzUHJvcHMgPSBlbnRpdHkuY29udGV4dC5wcm9wc1xuXG4gICAgLy8gaG9vayBiZWZvcmUgcmVuZGVyaW5nLiBjb3VsZCBtb2RpZnkgc3RhdGUganVzdCBiZWZvcmUgdGhlIHJlbmRlciBvY2N1cnMuXG4gICAgdHJpZ2dlcignYmVmb3JlVXBkYXRlJywgZW50aXR5LCBbZW50aXR5LmNvbnRleHQsIG5leHRQcm9wcywgbmV4dFN0YXRlXSlcbiAgICB0cmlnZ2VyKCdiZWZvcmVSZW5kZXInLCBlbnRpdHksIFtlbnRpdHkuY29udGV4dF0pXG5cbiAgICAvLyBjb21taXQgc3RhdGUgYW5kIHByb3BzLlxuICAgIGNvbW1pdChlbnRpdHkpXG5cbiAgICAvLyByZS1yZW5kZXIuXG4gICAgdmFyIG5leHRUcmVlID0gcmVuZGVyRW50aXR5KGVudGl0eSlcblxuICAgIC8vIGlmIHRoZSB0cmVlIGlzIHRoZSBzYW1lIHdlIGNhbiBqdXN0IHNraXAgdGhpcyBjb21wb25lbnRcbiAgICAvLyBidXQgd2Ugc2hvdWxkIHN0aWxsIGNoZWNrIHRoZSBjaGlsZHJlbiB0byBzZWUgaWYgdGhleSdyZSBkaXJ0eS5cbiAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBtZW1vaXplIHRoZSByZW5kZXIgZnVuY3Rpb24gb2YgY29tcG9uZW50cy5cbiAgICBpZiAobmV4dFRyZWUgPT09IGN1cnJlbnRUcmVlKSByZXR1cm4gdXBkYXRlQ2hpbGRyZW4oZW50aXR5SWQpXG5cbiAgICAvLyBhcHBseSBuZXcgdmlydHVhbCB0cmVlIHRvIG5hdGl2ZSBkb20uXG4gICAgZW50aXR5Lm5hdGl2ZUVsZW1lbnQgPSBwYXRjaChlbnRpdHlJZCwgY3VycmVudFRyZWUsIG5leHRUcmVlLCBlbnRpdHkubmF0aXZlRWxlbWVudClcbiAgICBlbnRpdHkudmlydHVhbEVsZW1lbnQgPSBuZXh0VHJlZVxuICAgIHVwZGF0ZUNoaWxkcmVuKGVudGl0eUlkKVxuXG4gICAgLy8gdHJpZ2dlciByZW5kZXIgaG9va1xuICAgIHRyaWdnZXIoJ2FmdGVyUmVuZGVyJywgZW50aXR5LCBbZW50aXR5LmNvbnRleHQsIGVudGl0eS5uYXRpdmVFbGVtZW50XSlcblxuICAgIC8vIHRyaWdnZXIgYWZ0ZXJVcGRhdGUgYWZ0ZXIgYWxsIGNoaWxkcmVuIGhhdmUgdXBkYXRlZC5cbiAgICB0cmlnZ2VyKCdhZnRlclVwZGF0ZScsIGVudGl0eSwgW2VudGl0eS5jb250ZXh0LCBwcmV2aW91c1Byb3BzLCBwcmV2aW91c1N0YXRlLCBzZXRTdGF0ZShlbnRpdHkpXSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWxsIHRoZSBjaGlsZHJlbiBvZiBhbiBlbnRpdHkuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCBDb21wb25lbnQgaW5zdGFuY2UgaWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuIChlbnRpdHlJZCkge1xuICAgIGZvckVhY2goY2hpbGRyZW5bZW50aXR5SWRdLCBmdW5jdGlvbiAoY2hpbGRJZCkge1xuICAgICAgdXBkYXRlRW50aXR5KGNoaWxkSWQpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIG9mIHRoZSBjaGlsZCBlbnRpdGllcyBvZiBhbiBlbnRpdHlcbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKi9cblxuICBmdW5jdGlvbiB1bm1vdW50Q2hpbGRyZW4gKGVudGl0eUlkKSB7XG4gICAgZm9yRWFjaChjaGlsZHJlbltlbnRpdHlJZF0sIGZ1bmN0aW9uIChjaGlsZElkKSB7XG4gICAgICB1bm1vdW50RW50aXR5KGNoaWxkSWQpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHJvb3QgZWxlbWVudC4gSWYgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSB3ZSBuZWVkIHRvXG4gICAqIGNhbmNlbCBhbnkgcGVuZGluZyBmdXR1cmUgdXBkYXRlcy5cbiAgICovXG5cbiAgZnVuY3Rpb24gcmVtb3ZlTmF0aXZlRWxlbWVudCAoKSB7XG4gICAgY2xlYXJGcmFtZSgpXG4gICAgcmVtb3ZlRWxlbWVudChyb290SWQsICcwJywgY3VycmVudE5hdGl2ZUVsZW1lbnQpXG4gICAgY3VycmVudE5hdGl2ZUVsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmF0aXZlIGVsZW1lbnQgZnJvbSBhIHZpcnR1YWwgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudGl0eUlkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgKlxuICAgKiBAcmV0dXJuIHtIVE1MRG9jdW1lbnRGcmFnbWVudH1cbiAgICovXG5cbiAgZnVuY3Rpb24gdG9OYXRpdmUgKGVudGl0eUlkLCBwYXRoLCB2bm9kZSkge1xuICAgIHN3aXRjaCAobm9kZVR5cGUodm5vZGUpKSB7XG4gICAgICBjYXNlICd0ZXh0JzogcmV0dXJuIHRvTmF0aXZlVGV4dCh2bm9kZSlcbiAgICAgIGNhc2UgJ2VtcHR5JzogcmV0dXJuIHRvTmF0aXZlRW1wdHlFbGVtZW50KGVudGl0eUlkLCBwYXRoKVxuICAgICAgY2FzZSAnZWxlbWVudCc6IHJldHVybiB0b05hdGl2ZUVsZW1lbnQoZW50aXR5SWQsIHBhdGgsIHZub2RlKVxuICAgICAgY2FzZSAnY29tcG9uZW50JzogcmV0dXJuIHRvTmF0aXZlQ29tcG9uZW50KGVudGl0eUlkLCBwYXRoLCB2bm9kZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmF0aXZlIHRleHQgZWxlbWVudCBmcm9tIGEgdmlydHVhbCBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICovXG5cbiAgZnVuY3Rpb24gdG9OYXRpdmVUZXh0ICh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmF0aXZlIGVsZW1lbnQgZnJvbSBhIHZpcnR1YWwgZWxlbWVudC5cbiAgICovXG5cbiAgZnVuY3Rpb24gdG9OYXRpdmVFbGVtZW50IChlbnRpdHlJZCwgcGF0aCwgdm5vZGUpIHtcbiAgICB2YXIgZWxcbiAgICB2YXIgYXR0cmlidXRlcyA9IHZub2RlLmF0dHJpYnV0ZXNcbiAgICB2YXIgdGFnTmFtZSA9IHZub2RlLnR5cGVcbiAgICB2YXIgY2hpbGROb2RlcyA9IHZub2RlLmNoaWxkcmVuXG5cbiAgICAvLyBjcmVhdGUgZWxlbWVudCBlaXRoZXIgZnJvbSBwb29sIG9yIGZyZXNoLlxuICAgIGlmIChzdmcuaXNFbGVtZW50KHRhZ05hbWUpKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmcubmFtZXNwYWNlLCB0YWdOYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcbiAgICB9XG5cbiAgICAvLyBzZXQgYXR0cmlidXRlcy5cbiAgICBmb3JFYWNoKGF0dHJpYnV0ZXMsIGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgc2V0QXR0cmlidXRlKGVudGl0eUlkLCBwYXRoLCBlbCwgbmFtZSwgdmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGFkZCBjaGlsZHJlbi5cbiAgICBmb3JFYWNoKGNoaWxkTm9kZXMsIGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgdmFyIGNoaWxkRWwgPSB0b05hdGl2ZShlbnRpdHlJZCwgcGF0aCArICcuJyArIGksIGNoaWxkKVxuICAgICAgaWYgKCFjaGlsZEVsLnBhcmVudE5vZGUpIGVsLmFwcGVuZENoaWxkKGNoaWxkRWwpXG4gICAgfSlcblxuICAgIC8vIHN0b3JlIGtleXMgb24gdGhlIG5hdGl2ZSBlbGVtZW50IGZvciBmYXN0IGV2ZW50IGhhbmRsaW5nLlxuICAgIGVsLl9fZW50aXR5X18gPSBlbnRpdHlJZFxuICAgIGVsLl9fcGF0aF9fID0gcGF0aFxuXG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmF0aXZlIGVsZW1lbnQgZnJvbSBhIHZpcnR1YWwgZWxlbWVudC5cbiAgICovXG5cbiAgZnVuY3Rpb24gdG9OYXRpdmVFbXB0eUVsZW1lbnQgKGVudGl0eUlkLCBwYXRoKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbm9zY3JpcHQnKVxuICAgIGVsLl9fZW50aXR5X18gPSBlbnRpdHlJZFxuICAgIGVsLl9fcGF0aF9fID0gcGF0aFxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5hdGl2ZSBlbGVtZW50IGZyb20gYSBjb21wb25lbnQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRvTmF0aXZlQ29tcG9uZW50IChlbnRpdHlJZCwgcGF0aCwgdm5vZGUpIHtcbiAgICB2YXIgY2hpbGQgPSBuZXcgRW50aXR5KHZub2RlLnR5cGUsIGFzc2lnbih7IGNoaWxkcmVuOiB2bm9kZS5jaGlsZHJlbiB9LCB2bm9kZS5hdHRyaWJ1dGVzKSwgZW50aXR5SWQpXG4gICAgY2hpbGRyZW5bZW50aXR5SWRdW3BhdGhdID0gY2hpbGQuaWRcbiAgICByZXR1cm4gbW91bnRFbnRpdHkoY2hpbGQpXG4gIH1cblxuICAvKipcbiAgICogUGF0Y2ggYW4gZWxlbWVudCB3aXRoIHRoZSBkaWZmIGZyb20gdHdvIHRyZWVzLlxuICAgKi9cblxuICBmdW5jdGlvbiBwYXRjaCAoZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKSB7XG4gICAgcmV0dXJuIGRpZmZOb2RlKCcwJywgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGRpZmYgYmV0d2VlbiB0d28gdHJlZXMgb2Ygbm9kZXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGRpZmZOb2RlIChwYXRoLCBlbnRpdHlJZCwgcHJldiwgbmV4dCwgZWwpIHtcbiAgICB2YXIgbGVmdFR5cGUgPSBub2RlVHlwZShwcmV2KVxuICAgIHZhciByaWdodFR5cGUgPSBub2RlVHlwZShuZXh0KVxuXG4gICAgLy8gVHlwZSBjaGFuZ2VkLiBUaGlzIGNvdWxkIGJlIGZyb20gZWxlbWVudC0+dGV4dCwgdGV4dC0+Q29tcG9uZW50QSxcbiAgICAvLyBDb21wb25lbnRBLT5Db21wb25lbnRCIGV0Yy4gQnV0IE5PVCBkaXYtPnNwYW4uIFRoZXNlIGFyZSB0aGUgc2FtZSB0eXBlXG4gICAgLy8gKEVsZW1lbnROb2RlKSBidXQgZGlmZmVyZW50IHRhZyBuYW1lLlxuICAgIGlmIChsZWZ0VHlwZSAhPT0gcmlnaHRUeXBlKSByZXR1cm4gcmVwbGFjZUVsZW1lbnQoZW50aXR5SWQsIHBhdGgsIGVsLCBuZXh0KVxuXG4gICAgc3dpdGNoIChyaWdodFR5cGUpIHtcbiAgICAgIGNhc2UgJ3RleHQnOiByZXR1cm4gZGlmZlRleHQocHJldiwgbmV4dCwgZWwpXG4gICAgICBjYXNlICdlbXB0eSc6IHJldHVybiBlbFxuICAgICAgY2FzZSAnZWxlbWVudCc6IHJldHVybiBkaWZmRWxlbWVudChwYXRoLCBlbnRpdHlJZCwgcHJldiwgbmV4dCwgZWwpXG4gICAgICBjYXNlICdjb21wb25lbnQnOiByZXR1cm4gZGlmZkNvbXBvbmVudChwYXRoLCBlbnRpdHlJZCwgcHJldiwgbmV4dCwgZWwpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpZmYgdHdvIHRleHQgbm9kZXMgYW5kIHVwZGF0ZSB0aGUgZWxlbWVudC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZGlmZlRleHQgKHByZXZpb3VzLCBjdXJyZW50LCBlbCkge1xuICAgIGlmIChjdXJyZW50ICE9PSBwcmV2aW91cykgZWwuZGF0YSA9IGN1cnJlbnRcbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIC8qKlxuICAgKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhbiBFbGVtZW50Tm9kZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gZGlmZkNoaWxkcmVuIChwYXRoLCBlbnRpdHlJZCwgcHJldiwgbmV4dCwgZWwpIHtcbiAgICB2YXIgcG9zaXRpb25zID0gW11cbiAgICB2YXIgaGFzS2V5cyA9IGZhbHNlXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZWwuY2hpbGROb2RlcylcbiAgICB2YXIgbGVmdEtleXMgPSByZWR1Y2UocHJldi5jaGlsZHJlbiwga2V5TWFwUmVkdWNlciwge30pXG4gICAgdmFyIHJpZ2h0S2V5cyA9IHJlZHVjZShuZXh0LmNoaWxkcmVuLCBrZXlNYXBSZWR1Y2VyLCB7fSlcbiAgICB2YXIgY3VycmVudENoaWxkcmVuID0gYXNzaWduKHt9LCBjaGlsZHJlbltlbnRpdHlJZF0pXG5cbiAgICBmdW5jdGlvbiBrZXlNYXBSZWR1Y2VyIChhY2MsIGNoaWxkLCBpKSB7XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQuYXR0cmlidXRlcyAmJiBjaGlsZC5hdHRyaWJ1dGVzLmtleSAhPSBudWxsKSB7XG4gICAgICAgIGFjY1tjaGlsZC5hdHRyaWJ1dGVzLmtleV0gPSB7XG4gICAgICAgICAgZWxlbWVudDogY2hpbGQsXG4gICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgfVxuICAgICAgICBoYXNLZXlzID0gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH1cblxuICAgIC8vIERpZmYgYWxsIG9mIHRoZSBub2RlcyB0aGF0IGhhdmUga2V5cy4gVGhpcyBsZXRzIHVzIHJlLXVzZWQgZWxlbWVudHNcbiAgICAvLyBpbnN0ZWFkIG9mIG92ZXJyaWRpbmcgdGhlbSBhbmQgbGV0cyB1cyBtb3ZlIHRoZW0gYXJvdW5kLlxuICAgIGlmIChoYXNLZXlzKSB7XG5cbiAgICAgIC8vIFJlbW92YWxzXG4gICAgICBmb3JFYWNoKGxlZnRLZXlzLCBmdW5jdGlvbiAobGVmdE5vZGUsIGtleSkge1xuICAgICAgICBpZiAocmlnaHRLZXlzW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBsZWZ0UGF0aCA9IHBhdGggKyAnLicgKyBsZWZ0Tm9kZS5pbmRleFxuICAgICAgICAgIHJlbW92ZUVsZW1lbnQoXG4gICAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICAgIGxlZnRQYXRoLFxuICAgICAgICAgICAgY2hpbGROb2Rlc1tsZWZ0Tm9kZS5pbmRleF1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIFVwZGF0ZSBub2Rlc1xuICAgICAgZm9yRWFjaChyaWdodEtleXMsIGZ1bmN0aW9uIChyaWdodE5vZGUsIGtleSkge1xuICAgICAgICB2YXIgbGVmdE5vZGUgPSBsZWZ0S2V5c1trZXldXG5cbiAgICAgICAgLy8gV2Ugb25seSB3YW50IHVwZGF0ZXMgZm9yIG5vd1xuICAgICAgICBpZiAobGVmdE5vZGUgPT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgICAgdmFyIGxlZnRQYXRoID0gcGF0aCArICcuJyArIGxlZnROb2RlLmluZGV4XG5cbiAgICAgICAgLy8gVXBkYXRlZFxuICAgICAgICBwb3NpdGlvbnNbcmlnaHROb2RlLmluZGV4XSA9IGRpZmZOb2RlKFxuICAgICAgICAgIGxlZnRQYXRoLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIGxlZnROb2RlLmVsZW1lbnQsXG4gICAgICAgICAgcmlnaHROb2RlLmVsZW1lbnQsXG4gICAgICAgICAgY2hpbGROb2Rlc1tsZWZ0Tm9kZS5pbmRleF1cbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgYWxsIGNoaWxkIGNvbXBvbmVudHMgYW5kIGV2ZW50IGhhbmRsZXJzXG4gICAgICBmb3JFYWNoKHJpZ2h0S2V5cywgZnVuY3Rpb24gKHJpZ2h0Tm9kZSwga2V5KSB7XG4gICAgICAgIHZhciBsZWZ0Tm9kZSA9IGxlZnRLZXlzW2tleV1cblxuICAgICAgICAvLyBXZSBqdXN0IHdhbnQgZWxlbWVudHMgdGhhdCBoYXZlIG1vdmVkIGFyb3VuZFxuICAgICAgICBpZiAobGVmdE5vZGUgPT0gbnVsbCB8fCBsZWZ0Tm9kZS5pbmRleCA9PT0gcmlnaHROb2RlLmluZGV4KSByZXR1cm5cblxuICAgICAgICB2YXIgcmlnaHRQYXRoID0gcGF0aCArICcuJyArIHJpZ2h0Tm9kZS5pbmRleFxuICAgICAgICB2YXIgbGVmdFBhdGggPSBwYXRoICsgJy4nICsgbGVmdE5vZGUuaW5kZXhcblxuICAgICAgICAvLyBVcGRhdGUgYWxsIHRoZSBjaGlsZCBjb21wb25lbnQgcGF0aCBwb3NpdGlvbnMgdG8gbWF0Y2hcbiAgICAgICAgLy8gdGhlIGxhdGVzdCBwb3NpdGlvbnMgaWYgdGhleSd2ZSBjaGFuZ2VkLiBUaGlzIGlzIGEgYml0IGhhY2t5LlxuICAgICAgICBmb3JFYWNoKGN1cnJlbnRDaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkSWQsIGNoaWxkUGF0aCkge1xuICAgICAgICAgIGlmIChsZWZ0UGF0aCA9PT0gY2hpbGRQYXRoKSB7XG4gICAgICAgICAgICBkZWxldGUgY2hpbGRyZW5bZW50aXR5SWRdW2NoaWxkUGF0aF1cbiAgICAgICAgICAgIGNoaWxkcmVuW2VudGl0eUlkXVtyaWdodFBhdGhdID0gY2hpbGRJZFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIE5vdyBhZGQgYWxsIG9mIHRoZSBuZXcgbm9kZXMgbGFzdCBpbiBjYXNlIHRoZWlyIHBhdGhcbiAgICAgIC8vIHdvdWxkIGhhdmUgY29uZmxpY3RlZCB3aXRoIG9uZSBvZiB0aGUgcHJldmlvdXMgcGF0aHMuXG4gICAgICBmb3JFYWNoKHJpZ2h0S2V5cywgZnVuY3Rpb24gKHJpZ2h0Tm9kZSwga2V5KSB7XG4gICAgICAgIHZhciByaWdodFBhdGggPSBwYXRoICsgJy4nICsgcmlnaHROb2RlLmluZGV4XG4gICAgICAgIGlmIChsZWZ0S2V5c1trZXldID09IG51bGwpIHtcbiAgICAgICAgICBwb3NpdGlvbnNbcmlnaHROb2RlLmluZGV4XSA9IHRvTmF0aXZlKFxuICAgICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgICByaWdodFBhdGgsXG4gICAgICAgICAgICByaWdodE5vZGUuZWxlbWVudFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF4TGVuZ3RoID0gTWF0aC5tYXgocHJldi5jaGlsZHJlbi5sZW5ndGgsIG5leHQuY2hpbGRyZW4ubGVuZ3RoKVxuXG4gICAgICAvLyBOb3cgZGlmZiBhbGwgb2YgdGhlIG5vZGVzIHRoYXQgZG9uJ3QgaGF2ZSBrZXlzXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heExlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsZWZ0Tm9kZSA9IHByZXYuY2hpbGRyZW5baV1cbiAgICAgICAgdmFyIHJpZ2h0Tm9kZSA9IG5leHQuY2hpbGRyZW5baV1cblxuICAgICAgICAvLyBSZW1vdmFsc1xuICAgICAgICBpZiAocmlnaHROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZW1vdmVFbGVtZW50KFxuICAgICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgICBwYXRoICsgJy4nICsgaSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNbaV1cbiAgICAgICAgICApXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5ldyBOb2RlXG4gICAgICAgIGlmIChsZWZ0Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcG9zaXRpb25zW2ldID0gdG9OYXRpdmUoXG4gICAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICAgIHBhdGggKyAnLicgKyBpLFxuICAgICAgICAgICAgcmlnaHROb2RlXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGVkXG4gICAgICAgIHBvc2l0aW9uc1tpXSA9IGRpZmZOb2RlKFxuICAgICAgICAgIHBhdGggKyAnLicgKyBpLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIGxlZnROb2RlLFxuICAgICAgICAgIHJpZ2h0Tm9kZSxcbiAgICAgICAgICBjaGlsZE5vZGVzW2ldXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXBvc2l0aW9uIGFsbCB0aGUgZWxlbWVudHNcbiAgICBmb3JFYWNoKHBvc2l0aW9ucywgZnVuY3Rpb24gKGNoaWxkRWwsIG5ld1Bvc2l0aW9uKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZWwuY2hpbGROb2Rlc1tuZXdQb3NpdGlvbl1cbiAgICAgIGlmIChjaGlsZEVsICYmIGNoaWxkRWwgIT09IHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgZWwuaW5zZXJ0QmVmb3JlKGNoaWxkRWwsIHRhcmdldClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChjaGlsZEVsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaWZmIHRoZSBhdHRyaWJ1dGVzIGFuZCBhZGQvcmVtb3ZlIHRoZW0uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGRpZmZBdHRyaWJ1dGVzIChwcmV2LCBuZXh0LCBlbCwgZW50aXR5SWQsIHBhdGgpIHtcbiAgICB2YXIgbmV4dEF0dHJzID0gbmV4dC5hdHRyaWJ1dGVzXG4gICAgdmFyIHByZXZBdHRycyA9IHByZXYuYXR0cmlidXRlc1xuXG4gICAgLy8gYWRkIG5ldyBhdHRyc1xuICAgIGZvckVhY2gobmV4dEF0dHJzLCBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgIGlmIChldmVudHNbbmFtZV0gfHwgIShuYW1lIGluIHByZXZBdHRycykgfHwgcHJldkF0dHJzW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICBzZXRBdHRyaWJ1dGUoZW50aXR5SWQsIHBhdGgsIGVsLCBuYW1lLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gcmVtb3ZlIG9sZCBhdHRyc1xuICAgIGZvckVhY2gocHJldkF0dHJzLCBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gbmV4dEF0dHJzKSkge1xuICAgICAgICByZW1vdmVBdHRyaWJ1dGUoZW50aXR5SWQsIHBhdGgsIGVsLCBuYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGEgY29tcG9uZW50IHdpdGggdGhlIHByb3BzIGZyb20gdGhlIG5leHQgbm9kZS4gSWZcbiAgICogdGhlIGNvbXBvbmVudCB0eXBlIGhhcyBjaGFuZ2VkLCB3ZSdsbCBqdXN0IHJlbW92ZSB0aGUgb2xkIG9uZVxuICAgKiBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgY29tcG9uZW50LlxuICAgKi9cblxuICBmdW5jdGlvbiBkaWZmQ29tcG9uZW50IChwYXRoLCBlbnRpdHlJZCwgcHJldiwgbmV4dCwgZWwpIHtcbiAgICBpZiAobmV4dC50eXBlICE9PSBwcmV2LnR5cGUpIHtcbiAgICAgIHJldHVybiByZXBsYWNlRWxlbWVudChlbnRpdHlJZCwgcGF0aCwgZWwsIG5leHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0YXJnZXRJZCA9IGNoaWxkcmVuW2VudGl0eUlkXVtwYXRoXVxuXG4gICAgICAvLyBUaGlzIGlzIGEgaGFjayBmb3Igbm93XG4gICAgICBpZiAodGFyZ2V0SWQpIHtcbiAgICAgICAgdXBkYXRlRW50aXR5UHJvcHModGFyZ2V0SWQsIGFzc2lnbih7IGNoaWxkcmVuOiBuZXh0LmNoaWxkcmVuIH0sIG5leHQuYXR0cmlidXRlcykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaWZmIHR3byBlbGVtZW50IG5vZGVzLlxuICAgKi9cblxuICBmdW5jdGlvbiBkaWZmRWxlbWVudCAocGF0aCwgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKSB7XG4gICAgaWYgKG5leHQudHlwZSAhPT0gcHJldi50eXBlKSByZXR1cm4gcmVwbGFjZUVsZW1lbnQoZW50aXR5SWQsIHBhdGgsIGVsLCBuZXh0KVxuICAgIGRpZmZBdHRyaWJ1dGVzKHByZXYsIG5leHQsIGVsLCBlbnRpdHlJZCwgcGF0aClcbiAgICBkaWZmQ2hpbGRyZW4ocGF0aCwgZW50aXR5SWQsIHByZXYsIG5leHQsIGVsKVxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBET00gYW5kIHVubW91bnRzIGFuZCBjb21wb25lbnRzXG4gICAqIHRoYXQgYXJlIHdpdGhpbiB0aGF0IGJyYW5jaFxuICAgKlxuICAgKiBzaWRlIGVmZmVjdHM6XG4gICAqICAgLSByZW1vdmVzIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAqICAgLSByZW1vdmVzIGludGVybmFsIHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudGl0eUlkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQgKGVudGl0eUlkLCBwYXRoLCBlbCkge1xuICAgIHZhciBjaGlsZHJlbkJ5UGF0aCA9IGNoaWxkcmVuW2VudGl0eUlkXVxuICAgIHZhciBjaGlsZElkID0gY2hpbGRyZW5CeVBhdGhbcGF0aF1cbiAgICB2YXIgZW50aXR5SGFuZGxlcnMgPSBoYW5kbGVyc1tlbnRpdHlJZF0gfHwge31cbiAgICB2YXIgcmVtb3ZhbHMgPSBbXVxuXG4gICAgLy8gSWYgdGhlIHBhdGggcG9pbnRzIHRvIGEgY29tcG9uZW50IHdlIHNob3VsZCB1c2UgdGhhdFxuICAgIC8vIGNvbXBvbmVudHMgZWxlbWVudCBpbnN0ZWFkLCBiZWNhdXNlIGl0IG1pZ2h0IGhhdmUgbW92ZWQgaXQuXG4gICAgaWYgKGNoaWxkSWQpIHtcbiAgICAgIHZhciBjaGlsZCA9IGVudGl0aWVzW2NoaWxkSWRdXG4gICAgICBlbCA9IGNoaWxkLm5hdGl2ZUVsZW1lbnRcbiAgICAgIHVubW91bnRFbnRpdHkoY2hpbGRJZClcbiAgICAgIHJlbW92YWxzLnB1c2gocGF0aClcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBKdXN0IHJlbW92ZSB0aGUgdGV4dCBub2RlXG4gICAgICBpZiAoIWlzRWxlbWVudChlbCkpIHJldHVybiBlbCAmJiBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG4gICAgICAvLyBUaGVuIHdlIG5lZWQgdG8gZmluZCBhbnkgY29tcG9uZW50cyB3aXRoaW4gdGhpc1xuICAgICAgLy8gYnJhbmNoIGFuZCB1bm1vdW50IHRoZW0uXG4gICAgICBmb3JFYWNoKGNoaWxkcmVuQnlQYXRoLCBmdW5jdGlvbiAoY2hpbGRJZCwgY2hpbGRQYXRoKSB7XG4gICAgICAgIGlmIChjaGlsZFBhdGggPT09IHBhdGggfHwgaXNXaXRoaW5QYXRoKHBhdGgsIGNoaWxkUGF0aCkpIHtcbiAgICAgICAgICB1bm1vdW50RW50aXR5KGNoaWxkSWQpXG4gICAgICAgICAgcmVtb3ZhbHMucHVzaChjaGlsZFBhdGgpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnRzIGF0IHRoaXMgcGF0aCBvciBiZWxvdyBpdFxuICAgICAgZm9yRWFjaChlbnRpdHlIYW5kbGVycywgZnVuY3Rpb24gKGZuLCBoYW5kbGVyUGF0aCkge1xuICAgICAgICBpZiAoaGFuZGxlclBhdGggPT09IHBhdGggfHwgaXNXaXRoaW5QYXRoKHBhdGgsIGhhbmRsZXJQYXRoKSkge1xuICAgICAgICAgIHJlbW92ZUV2ZW50KGVudGl0eUlkLCBoYW5kbGVyUGF0aClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIHBhdGhzIGZyb20gdGhlIG9iamVjdCB3aXRob3V0IHRvdWNoaW5nIHRoZVxuICAgIC8vIG9sZCBvYmplY3QuIFRoaXMga2VlcHMgdGhlIG9iamVjdCB1c2luZyBmYXN0IHByb3BlcnRpZXMuXG4gICAgZm9yRWFjaChyZW1vdmFscywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgIGRlbGV0ZSBjaGlsZHJlbltlbnRpdHlJZF1bcGF0aF1cbiAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIERPTVxuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSBhbiBlbGVtZW50IGluIHRoZSBET00uIFJlbW92aW5nIGFsbCBjb21wb25lbnRzXG4gICAqIHdpdGhpbiB0aGF0IGVsZW1lbnQgYW5kIHJlLXJlbmRlcmluZyB0aGUgbmV3IHZpcnR1YWwgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cbiAgZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQgKGVudGl0eUlkLCBwYXRoLCBlbCwgdm5vZGUpIHtcbiAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZVxuICAgIHZhciBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkTm9kZXMsIGVsKVxuXG4gICAgLy8gcmVtb3ZlIHRoZSBwcmV2aW91cyBlbGVtZW50IGFuZCBhbGwgbmVzdGVkIGNvbXBvbmVudHMuIFRoaXNcbiAgICAvLyBuZWVkcyB0byBoYXBwZW4gYmVmb3JlIHdlIGNyZWF0ZSB0aGUgbmV3IGVsZW1lbnQgc28gd2UgZG9uJ3RcbiAgICAvLyBnZXQgY2xhc2hlcyBvbiB0aGUgY29tcG9uZW50IHBhdGhzLlxuICAgIHJlbW92ZUVsZW1lbnQoZW50aXR5SWQsIHBhdGgsIGVsKVxuXG4gICAgLy8gdGhlbiBhZGQgdGhlIG5ldyBlbGVtZW50IGluIHRoZXJlXG4gICAgdmFyIG5ld0VsID0gdG9OYXRpdmUoZW50aXR5SWQsIHBhdGgsIHZub2RlKVxuICAgIHZhciB0YXJnZXQgPSBwYXJlbnQuY2hpbGROb2Rlc1tpbmRleF1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobmV3RWwsIHRhcmdldClcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0VsKVxuICAgIH1cblxuICAgIC8vIHdhbGsgdXAgdGhlIHRyZWUgYW5kIHVwZGF0ZSBhbGwgYGVudGl0eS5uYXRpdmVFbGVtZW50YCByZWZlcmVuY2VzLlxuICAgIGlmIChlbnRpdHlJZCAhPT0gJ3Jvb3QnICYmIHBhdGggPT09ICcwJykge1xuICAgICAgdXBkYXRlTmF0aXZlRWxlbWVudChlbnRpdHlJZCwgbmV3RWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFsbCBlbnRpdGllcyBpbiBhIGJyYW5jaCB0aGF0IGhhdmUgdGhlIHNhbWUgbmF0aXZlRWxlbWVudC4gVGhpc1xuICAgKiBoYXBwZW5zIHdoZW4gYSBjb21wb25lbnQgaGFzIGFub3RoZXIgY29tcG9uZW50IGFzIGl0J3Mgcm9vdCBub2RlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW50aXR5SWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbmV3RWxcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlTmF0aXZlRWxlbWVudCAoZW50aXR5SWQsIG5ld0VsKSB7XG4gICAgdmFyIHRhcmdldCA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgIGlmICh0YXJnZXQub3duZXJJZCA9PT0gJ3Jvb3QnKSByZXR1cm5cbiAgICBpZiAoY2hpbGRyZW5bdGFyZ2V0Lm93bmVySWRdWycwJ10gPT09IGVudGl0eUlkKSB7XG4gICAgICBlbnRpdGllc1t0YXJnZXQub3duZXJJZF0ubmF0aXZlRWxlbWVudCA9IG5ld0VsXG4gICAgICB1cGRhdGVOYXRpdmVFbGVtZW50KHRhcmdldC5vd25lcklkLCBuZXdFbClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBhdHRyaWJ1dGUgb2YgYW4gZWxlbWVudCwgcGVyZm9ybWluZyBhZGRpdGlvbmFsIHRyYW5zZm9ybWF0aW9uc1xuICAgKiBkZXBlbmRuaW5nIG9uIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICovXG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlIChlbnRpdHlJZCwgcGF0aCwgZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKGVudGl0eUlkLCBwYXRoLCBlbCwgbmFtZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZXZlbnRzW25hbWVdKSB7XG4gICAgICBhZGRFdmVudChlbnRpdHlJZCwgcGF0aCwgZXZlbnRzW25hbWVdLCB2YWx1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgY2FzZSAnZGlzYWJsZWQnOlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICBlbFtuYW1lXSA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2lubmVySFRNTCc6XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHZhbHVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgIHNldEVsZW1lbnRWYWx1ZShlbCwgdmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIHN2Zy5pc0F0dHJpYnV0ZShuYW1lKTpcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlTlMoc3ZnLm5hbWVzcGFjZSwgbmFtZSwgdmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBhdHRyaWJ1dGUsIHBlcmZvcm1pbmcgYWRkaXRpb25hbCB0cmFuc2Zvcm1hdGlvbnNcbiAgICogZGVwZW5kbmluZyBvbiB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlIChlbnRpdHlJZCwgcGF0aCwgZWwsIG5hbWUpIHtcbiAgICBpZiAoZXZlbnRzW25hbWVdKSB7XG4gICAgICByZW1vdmVFdmVudChlbnRpdHlJZCwgcGF0aCwgZXZlbnRzW25hbWVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSAnY2hlY2tlZCc6XG4gICAgICBjYXNlICdkaXNhYmxlZCc6XG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIGVsW25hbWVdID0gZmFsc2VcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2lubmVySFRNTCc6XG4gICAgICAgIGVsLmlubmVySFRNTCA9ICcnXG4gICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgIHNldEVsZW1lbnRWYWx1ZShlbCwgbnVsbClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIG9uZSB0cmVlIHBhdGggaXMgd2l0aGluXG4gICAqIGFub3RoZXIgdHJlZSBwYXRoLiBFeGFtcGxlOlxuICAgKlxuICAgKiAwLjEgdnMgMC4xLjEgPSB0cnVlXG4gICAqIDAuMiB2cyAwLjMuNSA9IGZhbHNlXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG5cbiAgZnVuY3Rpb24gaXNXaXRoaW5QYXRoICh0YXJnZXQsIHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKHRhcmdldCArICcuJykgPT09IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBJcyB0aGUgRE9NIG5vZGUgYW4gZWxlbWVudCBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudCAoZWwpIHtcbiAgICByZXR1cm4gISEoZWwgJiYgZWwudGFnTmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIHRoZSBjaGlsZCBub2RlcyBmcm9tIGFuIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4gKGVsKSB7XG4gICAgd2hpbGUgKGVsLmZpcnN0Q2hpbGQpIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIGhvb2sgb24gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgaG9vay5cbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eSBUaGUgY29tcG9uZW50IGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRvIHBhc3MgYWxvbmcgdG8gaG9vay5cbiAgICovXG5cbiAgZnVuY3Rpb24gdHJpZ2dlciAobmFtZSwgZW50aXR5LCBhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBlbnRpdHkuY29tcG9uZW50W25hbWVdICE9PSAnZnVuY3Rpb24nKSByZXR1cm5cbiAgICByZXR1cm4gZW50aXR5LmNvbXBvbmVudFtuYW1lXS5hcHBseShudWxsLCBhcmdzKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhbiBlbnRpdHkgdG8gbWF0Y2ggdGhlIGxhdGVzdCByZW5kZXJlZCB2b2RlLiBXZSBhbHdheXNcbiAgICogcmVwbGFjZSB0aGUgcHJvcHMgb24gdGhlIGNvbXBvbmVudCB3aGVuIGNvbXBvc2luZyB0aGVtLiBUaGlzXG4gICAqIHdpbGwgdHJpZ2dlciBhIHJlLXJlbmRlciBvbiBhbGwgY2hpbGRyZW4gYmVsb3cgdGhpcyBwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlRW50aXR5UHJvcHMgKGVudGl0eUlkLCBuZXh0UHJvcHMpIHtcbiAgICB2YXIgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdXG4gICAgZW50aXR5LnBlbmRpbmdQcm9wcyA9IGRlZmF1bHRzKHt9LCBuZXh0UHJvcHMsIGVudGl0eS5jb21wb25lbnQuZGVmYXVsdFByb3BzIHx8IHt9KVxuICAgIGVudGl0eS5kaXJ0eSA9IHRydWVcbiAgICBpbnZhbGlkYXRlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29tcG9uZW50IGluc3RhbmNlIHN0YXRlLlxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVFbnRpdHlTdGF0ZSAoZW50aXR5LCBuZXh0U3RhdGUpIHtcbiAgICBlbnRpdHkucGVuZGluZ1N0YXRlID0gYXNzaWduKGVudGl0eS5wZW5kaW5nU3RhdGUsIG5leHRTdGF0ZSlcbiAgICBlbnRpdHkuZGlydHkgPSB0cnVlXG4gICAgaW52YWxpZGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICogQ29tbWl0IHByb3BzIGFuZCBzdGF0ZSBjaGFuZ2VzIHRvIGFuIGVudGl0eS5cbiAgICovXG5cbiAgZnVuY3Rpb24gY29tbWl0IChlbnRpdHkpIHtcbiAgICBlbnRpdHkuY29udGV4dCA9IHtcbiAgICAgIHN0YXRlOiBlbnRpdHkucGVuZGluZ1N0YXRlLFxuICAgICAgcHJvcHM6IGVudGl0eS5wZW5kaW5nUHJvcHMsXG4gICAgICBpZDogZW50aXR5LmlkXG4gICAgfVxuICAgIGVudGl0eS5wZW5kaW5nU3RhdGUgPSBhc3NpZ24oe30sIGVudGl0eS5jb250ZXh0LnN0YXRlKVxuICAgIGVudGl0eS5wZW5kaW5nUHJvcHMgPSBhc3NpZ24oe30sIGVudGl0eS5jb250ZXh0LnByb3BzKVxuICAgIGVudGl0eS5kaXJ0eSA9IGZhbHNlXG4gICAgaWYgKHR5cGVvZiBlbnRpdHkuY29tcG9uZW50LnZhbGlkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbnRpdHkuY29tcG9uZW50LnZhbGlkYXRlKGVudGl0eS5jb250ZXh0KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gYXZvaWQgY3JlYXRpbmcgbmV3IHZpcnR1YWwgZG9tIGlmIHBvc3NpYmxlLlxuICAgKlxuICAgKiBMYXRlciB3ZSBtYXkgZXhwb3NlIHRoaXMgc28geW91IGNhbiBvdmVycmlkZSwgYnV0IG5vdCB0aGVyZSB5ZXQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHNob3VsZFVwZGF0ZSAoZW50aXR5KSB7XG4gICAgaWYgKCFlbnRpdHkuZGlydHkpIHJldHVybiBmYWxzZVxuICAgIGlmICghZW50aXR5LmNvbXBvbmVudC5zaG91bGRVcGRhdGUpIHJldHVybiB0cnVlXG4gICAgdmFyIG5leHRQcm9wcyA9IGVudGl0eS5wZW5kaW5nUHJvcHNcbiAgICB2YXIgbmV4dFN0YXRlID0gZW50aXR5LnBlbmRpbmdTdGF0ZVxuICAgIHZhciBib29sID0gZW50aXR5LmNvbXBvbmVudC5zaG91bGRVcGRhdGUoZW50aXR5LmNvbnRleHQsIG5leHRQcm9wcywgbmV4dFN0YXRlKVxuICAgIHJldHVybiBib29sXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZW50aXR5LlxuICAgKlxuICAgKiBUaGlzIGlzIG1vc3RseSB0byBwcmUtcHJlcHJvY2VzcyBjb21wb25lbnQgcHJvcGVydGllcyBhbmQgdmFsdWVzIGNoYWlucy5cbiAgICpcbiAgICogVGhlIGVuZCByZXN1bHQgaXMgZm9yIGV2ZXJ5IGNvbXBvbmVudCB0aGF0IGdldHMgbW91bnRlZCxcbiAgICogeW91IGNyZWF0ZSBhIHNldCBvZiBJTyBub2RlcyBpbiB0aGUgbmV0d29yayBmcm9tIHRoZSBgdmFsdWVgIGRlZmluaXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyIChlbnRpdHkpIHtcbiAgICByZWdpc3RlckVudGl0eShlbnRpdHkpXG4gICAgdmFyIGNvbXBvbmVudCA9IGVudGl0eS5jb21wb25lbnRcbiAgICBpZiAoY29tcG9uZW50LnJlZ2lzdGVyZWQpIHJldHVyblxuXG4gICAgLy8gaW5pdGlhbGl6ZSBzb3VyY2VzIG9uY2UgZm9yIGEgY29tcG9uZW50IHR5cGUuXG4gICAgcmVnaXN0ZXJTb3VyY2VzKGVudGl0eSlcbiAgICBjb21wb25lbnQucmVnaXN0ZXJlZCA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZW50aXR5IHRvIGRhdGEtc3RydWN0dXJlcyByZWxhdGVkIHRvIGNvbXBvbmVudHMvZW50aXRpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJFbnRpdHkoZW50aXR5KSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IGVudGl0eS5jb21wb25lbnRcbiAgICAvLyBhbGwgZW50aXRpZXMgZm9yIHRoaXMgY29tcG9uZW50IHR5cGUuXG4gICAgdmFyIGVudGl0aWVzID0gY29tcG9uZW50LmVudGl0aWVzID0gY29tcG9uZW50LmVudGl0aWVzIHx8IHt9XG4gICAgLy8gYWRkIGVudGl0eSB0byBjb21wb25lbnQgbGlzdFxuICAgIGVudGl0aWVzW2VudGl0eS5pZF0gPSBlbnRpdHlcbiAgICAvLyBtYXAgdG8gY29tcG9uZW50IHNvIHlvdSBjYW4gcmVtb3ZlIGxhdGVyLlxuICAgIGNvbXBvbmVudHNbZW50aXR5LmlkXSA9IGNvbXBvbmVudFxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgc291cmNlcyBmb3IgYSBjb21wb25lbnQgYnkgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICAgKi9cblxuICBmdW5jdGlvbiByZWdpc3RlclNvdXJjZXMoZW50aXR5KSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IGNvbXBvbmVudHNbZW50aXR5LmlkXVxuICAgIC8vIGdldCAnY2xhc3MtbGV2ZWwnIHNvdXJjZXMuXG4gICAgLy8gaWYgd2UndmUgYWxyZWFkeSBob29rZWQgaXQgdXAsIHRoZW4gd2UncmUgZ29vZC5cbiAgICB2YXIgc291cmNlcyA9IGNvbXBvbmVudC5zb3VyY2VzXG4gICAgaWYgKHNvdXJjZXMpIHJldHVyblxuICAgIHZhciBlbnRpdGllcyA9IGNvbXBvbmVudC5lbnRpdGllc1xuXG4gICAgLy8gaG9vayB1cCBzb3VyY2VzLlxuICAgIHZhciBtYXAgPSBjb21wb25lbnQuc291cmNlVG9Qcm9wZXJ0eU5hbWUgPSB7fVxuICAgIGNvbXBvbmVudC5zb3VyY2VzID0gc291cmNlcyA9IFtdXG4gICAgdmFyIHByb3BUeXBlcyA9IGNvbXBvbmVudC5wcm9wVHlwZXNcbiAgICBmb3IgKHZhciBuYW1lIGluIHByb3BUeXBlcykge1xuICAgICAgdmFyIGRhdGEgPSBwcm9wVHlwZXNbbmFtZV1cbiAgICAgIGlmICghZGF0YSkgY29udGludWVcbiAgICAgIGlmICghZGF0YS5zb3VyY2UpIGNvbnRpbnVlXG4gICAgICBzb3VyY2VzLnB1c2goZGF0YS5zb3VyY2UpXG4gICAgICBtYXBbZGF0YS5zb3VyY2VdID0gbmFtZVxuICAgIH1cblxuICAgIC8vIHNlbmQgdmFsdWUgdXBkYXRlcyB0byBhbGwgY29tcG9uZW50IGluc3RhbmNlcy5cbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgY29ubmVjdGlvbnNbc291cmNlXSA9IGNvbm5lY3Rpb25zW3NvdXJjZV0gfHwgW11cbiAgICAgIGNvbm5lY3Rpb25zW3NvdXJjZV0ucHVzaCh1cGRhdGUpXG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZSAoZGF0YSkge1xuICAgICAgICB2YXIgcHJvcCA9IG1hcFtzb3VyY2VdXG4gICAgICAgIGZvciAodmFyIGVudGl0eUlkIGluIGVudGl0aWVzKSB7XG4gICAgICAgICAgdmFyIGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgICAgICAgIHZhciBjaGFuZ2VzID0ge31cbiAgICAgICAgICBjaGFuZ2VzW3Byb3BdID0gZGF0YVxuICAgICAgICAgIHVwZGF0ZUVudGl0eVByb3BzKGVudGl0eUlkLCBhc3NpZ24oZW50aXR5LnBlbmRpbmdQcm9wcywgY2hhbmdlcykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzb3VyY2UgdmFsdWUgb24gdGhlIGVudGl0eVxuICAgKlxuICAgKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHNldFNvdXJjZXMgKGVudGl0eSkge1xuICAgIHZhciBjb21wb25lbnQgPSBlbnRpdHkuY29tcG9uZW50XG4gICAgdmFyIG1hcCA9IGNvbXBvbmVudC5zb3VyY2VUb1Byb3BlcnR5TmFtZVxuICAgIHZhciBzb3VyY2VzID0gY29tcG9uZW50LnNvdXJjZXNcbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgdmFyIG5hbWUgPSBtYXBbc291cmNlXVxuICAgICAgaWYgKGVudGl0eS5wZW5kaW5nUHJvcHNbbmFtZV0gIT0gbnVsbCkgcmV0dXJuXG4gICAgICBlbnRpdHkucGVuZGluZ1Byb3BzW25hbWVdID0gYXBwLnNvdXJjZXNbc291cmNlXSAvLyBnZXQgbGF0ZXN0IHZhbHVlIHBsdWdnZWQgaW50byBnbG9iYWwgc3RvcmVcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbGwgb2YgdGhlIERPTSBldmVudCBsaXN0ZW5lcnNcbiAgICovXG5cbiAgZnVuY3Rpb24gYWRkTmF0aXZlRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XG4gICAgICByb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlRXZlbnQsIHRydWUpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWxsIG9mIHRoZSBET00gZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZU5hdGl2ZUV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICBmb3JFYWNoKGV2ZW50cywgZnVuY3Rpb24gKGV2ZW50VHlwZSkge1xuICAgICAgcm9vdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZUV2ZW50LCB0cnVlKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGFuIGV2ZW50IHRoYXQgaGFzIG9jY3VyZWQgd2l0aGluIHRoZSBjb250YWluZXJcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICovXG5cbiAgZnVuY3Rpb24gaGFuZGxlRXZlbnQgKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgIHZhciBldmVudFR5cGUgPSBldmVudC50eXBlXG5cbiAgICAvLyBXYWxrIHVwIHRoZSBET00gdHJlZSBhbmQgc2VlIGlmIHRoZXJlIGlzIGEgaGFuZGxlclxuICAgIC8vIGZvciB0aGlzIGV2ZW50IHR5cGUgaGlnaGVyIHVwLlxuICAgIHdoaWxlICh0YXJnZXQpIHtcbiAgICAgIHZhciBmbiA9IGtleXBhdGguZ2V0KGhhbmRsZXJzLCBbdGFyZ2V0Ll9fZW50aXR5X18sIHRhcmdldC5fX3BhdGhfXywgZXZlbnRUeXBlXSlcbiAgICAgIGlmIChmbikge1xuICAgICAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRhcmdldFxuICAgICAgICBpZiAoZm4oZXZlbnQpID09PSBmYWxzZSkgYnJlYWtcbiAgICAgIH1cbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnRzIGZvciBhbiBlbGVtZW50LCBhbmQgYWxsIGl0J3MgcmVuZGVyZWQgY2hpbGQgZWxlbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKi9cblxuICBmdW5jdGlvbiBhZGRFdmVudCAoZW50aXR5SWQsIHBhdGgsIGV2ZW50VHlwZSwgZm4pIHtcbiAgICBrZXlwYXRoLnNldChoYW5kbGVycywgW2VudGl0eUlkLCBwYXRoLCBldmVudFR5cGVdLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXVxuICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIGUsIGVudGl0eS5jb250ZXh0LCBzZXRTdGF0ZShlbnRpdHkpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGV2ZW50cyBmb3IgYSBlbnRpdHlJZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW50aXR5SWRcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQgKGVudGl0eUlkLCBwYXRoLCBldmVudFR5cGUpIHtcbiAgICB2YXIgYXJncyA9IFtlbnRpdHlJZF1cbiAgICBpZiAocGF0aCkgYXJncy5wdXNoKHBhdGgpXG4gICAgaWYgKGV2ZW50VHlwZSkgYXJncy5wdXNoKGV2ZW50VHlwZSlcbiAgICBrZXlwYXRoLmRlbChoYW5kbGVycywgYXJncylcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYWxsIGV2ZW50cyBmcm9tIGFuIGVudGl0eVxuICAgKlxuICAgKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbEV2ZW50cyAoZW50aXR5SWQpIHtcbiAgICBrZXlwYXRoLmRlbChoYW5kbGVycywgW2VudGl0eUlkXSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIGZvciBkZWJ1Z2dpbmcgdG8gaW5zcGVjdCB0aGUgY3VycmVudCBzdGF0ZSB3aXRob3V0XG4gICAqIHVzIG5lZWRpbmcgdG8gZXhwbGljaXRseSBtYW5hZ2Ugc3RvcmluZy91cGRhdGluZyByZWZlcmVuY2VzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdGllczogZW50aXRpZXMsXG4gICAgICBoYW5kbGVyczogaGFuZGxlcnMsXG4gICAgICBjb25uZWN0aW9uczogY29ubmVjdGlvbnMsXG4gICAgICBjdXJyZW50RWxlbWVudDogY3VycmVudEVsZW1lbnQsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgYXBwOiBhcHAsXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gb2JqZWN0IHRoYXQgbGV0cyB1cyBjb21wbGV0ZWx5IHJlbW92ZSB0aGUgYXV0b21hdGljXG4gICAqIERPTSByZW5kZXJpbmcgYW5kIGV4cG9ydCBkZWJ1Z2dpbmcgdG9vbHMuXG4gICAqL1xuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlOiB0ZWFyZG93bixcbiAgICBpbnNwZWN0OiBpbnNwZWN0XG4gIH1cbn1cblxuLyoqXG4gKiBBIHJlbmRlcmVkIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAqXG4gKiBUaGlzIG1hbmFnZXMgdGhlIGxpZmVjeWNsZSwgcHJvcHMgYW5kIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gKiBJdCdzIGJhc2ljYWxseSBqdXN0IGEgZGF0YSBvYmplY3QgZm9yIG1vcmUgc3RyYWlnaHRmb3dhcmQgbG9va3VwLlxuICpcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICovXG5cbmZ1bmN0aW9uIEVudGl0eSAoY29tcG9uZW50LCBwcm9wcywgb3duZXJJZCkge1xuICB0aGlzLmlkID0gdWlkKClcbiAgdGhpcy5vd25lcklkID0gb3duZXJJZFxuICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudFxuICB0aGlzLnByb3BUeXBlcyA9IGNvbXBvbmVudC5wcm9wVHlwZXMgfHwge31cbiAgdGhpcy5jb250ZXh0ID0ge31cbiAgdGhpcy5jb250ZXh0LmlkID0gdGhpcy5pZFxuICB0aGlzLmNvbnRleHQucHJvcHMgPSBkZWZhdWx0cyhwcm9wcyB8fCB7fSwgY29tcG9uZW50LmRlZmF1bHRQcm9wcyB8fCB7fSlcbiAgdGhpcy5jb250ZXh0LnN0YXRlID0gdGhpcy5jb21wb25lbnQuaW5pdGlhbFN0YXRlID8gdGhpcy5jb21wb25lbnQuaW5pdGlhbFN0YXRlKHRoaXMuY29udGV4dC5wcm9wcykgOiB7fVxuICB0aGlzLnBlbmRpbmdQcm9wcyA9IGFzc2lnbih7fSwgdGhpcy5jb250ZXh0LnByb3BzKVxuICB0aGlzLnBlbmRpbmdTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5jb250ZXh0LnN0YXRlKVxuICB0aGlzLmRpcnR5ID0gZmFsc2VcbiAgdGhpcy52aXJ0dWFsRWxlbWVudCA9IG51bGxcbiAgdGhpcy5uYXRpdmVFbGVtZW50ID0gbnVsbFxuICB0aGlzLmRpc3BsYXlOYW1lID0gY29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCdcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgbmVhcmVzdCAnYm9keScgYW5jZXN0b3Igb2YgdGhlIGdpdmVuIGVsZW1lbnQgb3IgZWxzZSB0aGUgcm9vdFxuICogZWxlbWVudCBvZiB0aGUgZG9jdW1lbnQgaW4gd2hpY2ggc3RhbmRzIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGlmIHlvdSB3YW50IHRvIGF0dGFjaCB0aGUgZXZlbnRzIGhhbmRsZXIgdG8gdGhlIGNvcnJlY3RcbiAqIGVsZW1lbnQgYW5kIGJlIGFibGUgdG8gZGlzcGF0Y2ggZXZlbnRzIGluIGRvY3VtZW50IGZyYWdtZW50cyBzdWNoIGFzXG4gKiBTaGFkb3cgRE9NLlxuICpcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCBUaGUgZWxlbWVudCBvbiB3aGljaCB3ZSB3aWxsIHJlbmRlciBhbiBhcHAuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgVGhlIHJvb3QgZWxlbWVudCBvbiB3aGljaCB3ZSB3aWxsIGF0dGFjaCB0aGUgZXZlbnRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5cbiAqL1xuXG5mdW5jdGlvbiBnZXRSb290RWxlbWVudCAoZWwpIHtcbiAgd2hpbGUgKGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICBpZiAoZWwudGFnTmFtZSA9PT0gJ0JPRFknIHx8ICFlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50XG4gIH1cbiAgcmV0dXJuIGVsXG59XG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZSBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IGFuZCBrZWVwIHRoZSB0ZXh0IHNlbGVjdGlvblxuICogZm9yIGlucHV0IGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gc2V0RWxlbWVudFZhbHVlIChlbCwgdmFsdWUpIHtcbiAgaWYgKGVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGNhblNlbGVjdFRleHQoZWwpKSB7XG4gICAgdmFyIHN0YXJ0ID0gZWwuc2VsZWN0aW9uU3RhcnRcbiAgICB2YXIgZW5kID0gZWwuc2VsZWN0aW9uRW5kXG4gICAgZWwudmFsdWUgPSB2YWx1ZVxuICAgIGVsLnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpXG4gIH0gZWxzZSB7XG4gICAgZWwudmFsdWUgPSB2YWx1ZVxuICB9XG59XG5cbi8qKlxuICogRm9yIHNvbWUgcmVhc29uIG9ubHkgY2VydGFpbiB0eXBlcyBvZiBpbnB1dHMgY2FuIHNldCB0aGUgc2VsZWN0aW9uIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBjYW5TZWxlY3RUZXh0IChlbCkge1xuICByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBbJ3RleHQnLCdzZWFyY2gnLCdwYXNzd29yZCcsJ3RlbCcsJ3VybCddLmluZGV4T2YoZWwudHlwZSkgPiAtMVxufVxuXG59LHtcIi4vZXZlbnRzXCI6MixcIi4vbm9kZS10eXBlXCI6NCxcIi4vc3ZnXCI6NyxcImNvbXBvbmVudC1yYWZcIjo5LFwiZmFzdC5qcy9mb3JFYWNoXCI6MTMsXCJmYXN0LmpzL29iamVjdC9hc3NpZ25cIjoxNixcImZhc3QuanMvcmVkdWNlXCI6MTksXCJnZXQtdWlkXCI6MjAsXCJpcy1kb21cIjoyMSxcIm9iamVjdC1kZWZhdWx0c1wiOjI0LFwib2JqZWN0LXBhdGhcIjoyNX1dLDY6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBkZWZhdWx0cyA9IF9yZXF1aXJlKCdvYmplY3QtZGVmYXVsdHMnKVxudmFyIG5vZGVUeXBlID0gX3JlcXVpcmUoJy4vbm9kZS10eXBlJylcbnZhciB0eXBlID0gX3JlcXVpcmUoJ2NvbXBvbmVudC10eXBlJylcblxuLyoqXG4gKiBFeHBvc2UgYHN0cmluZ2lmeWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwKSB7XG4gIGlmICghYXBwLmVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgbW91bnRlZCcpXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRvIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3Byb3BzXVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeSAoY29tcG9uZW50LCBvcHRQcm9wcywgY2hpbGRyZW4pIHtcbiAgICB2YXIgcHJvcFR5cGVzID0gY29tcG9uZW50LnByb3BUeXBlcyB8fCB7fVxuICAgIHZhciBwcm9wcyA9IGRlZmF1bHRzKG9wdFByb3BzIHx8IHt9LCBjb21wb25lbnQuZGVmYXVsdFByb3BzIHx8IHt9KVxuICAgIHZhciBzdGF0ZSA9IGNvbXBvbmVudC5pbml0aWFsU3RhdGUgPyBjb21wb25lbnQuaW5pdGlhbFN0YXRlKHByb3BzKSA6IHt9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gcHJvcFR5cGVzKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHByb3BUeXBlc1tuYW1lXVxuICAgICAgaWYgKG9wdGlvbnMuc291cmNlKSB7XG4gICAgICAgIHByb3BzW25hbWVdID0gYXBwLnNvdXJjZXNbb3B0aW9ucy5zb3VyY2VdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudC5iZWZvcmVNb3VudCkgY29tcG9uZW50LmJlZm9yZU1vdW50KHsgcHJvcHM6IHByb3BzLCBzdGF0ZTogc3RhdGUgfSlcbiAgICBpZiAoY29tcG9uZW50LmJlZm9yZVJlbmRlcikgY29tcG9uZW50LmJlZm9yZVJlbmRlcih7IHByb3BzOiBwcm9wcywgc3RhdGU6IHN0YXRlIH0pXG4gICAgdmFyIG5vZGUgPSBjb21wb25lbnQucmVuZGVyKHsgcHJvcHM6IHByb3BzLCBzdGF0ZTogc3RhdGUgfSlcbiAgICByZXR1cm4gc3RyaW5naWZ5Tm9kZShub2RlLCAnMCcpXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGEgbm9kZSB0byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtUcmVlfSB0cmVlXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG5cbiAgZnVuY3Rpb24gc3RyaW5naWZ5Tm9kZSAobm9kZSwgcGF0aCkge1xuICAgIHN3aXRjaCAobm9kZVR5cGUobm9kZSkpIHtcbiAgICAgIGNhc2UgJ2VtcHR5JzogcmV0dXJuICc8bm9zY3JpcHQgLz4nXG4gICAgICBjYXNlICd0ZXh0JzogcmV0dXJuIG5vZGVcbiAgICAgIGNhc2UgJ2VsZW1lbnQnOlxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzXG4gICAgICAgIHZhciB0YWdOYW1lID0gbm9kZS50eXBlXG4gICAgICAgIHZhciBpbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmlubmVySFRNTFxuICAgICAgICB2YXIgc3RyID0gJzwnICsgdGFnTmFtZSArIGF0dHJzKGF0dHJpYnV0ZXMpICsgJz4nXG5cbiAgICAgICAgaWYgKGlubmVySFRNTCkge1xuICAgICAgICAgIHN0ciArPSBpbm5lckhUTUxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgc3RyICs9IHN0cmluZ2lmeU5vZGUoY2hpbGRyZW5baV0sIHBhdGggKyAnLicgKyBpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0ciArPSAnPC8nICsgdGFnTmFtZSArICc+J1xuICAgICAgICByZXR1cm4gc3RyXG4gICAgICBjYXNlICdjb21wb25lbnQnOiByZXR1cm4gc3RyaW5naWZ5KG5vZGUudHlwZSwgbm9kZS5hdHRyaWJ1dGVzLCBub2RlLmNoaWxkcmVuKVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0eXBlJylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnlOb2RlKGFwcC5lbGVtZW50LCAnMCcpXG59XG5cbi8qKlxuICogSFRNTCBhdHRyaWJ1dGVzIHRvIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gYXR0cnMgKGF0dHJpYnV0ZXMpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1trZXldXG4gICAgaWYgKGtleSA9PT0gJ2lubmVySFRNTCcpIGNvbnRpbnVlXG4gICAgaWYgKGlzVmFsaWRBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpIHN0ciArPSBhdHRyKGtleSwgYXR0cmlidXRlc1trZXldKVxuICB9XG4gIHJldHVybiBzdHJcbn1cblxuLyoqXG4gKiBIVE1MIGF0dHJpYnV0ZSB0byBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gYXR0ciAoa2V5LCB2YWwpIHtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJ1xufVxuXG4vKipcbiAqIElzIGEgdmFsdWUgYWJsZSB0byBiZSBzZXQgYSBhbiBhdHRyaWJ1dGUgdmFsdWU/XG4gKlxuICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkQXR0cmlidXRlVmFsdWUgKHZhbHVlKSB7XG4gIHZhciB2YWx1ZVR5cGUgPSB0eXBlKHZhbHVlKVxuICBzd2l0Y2ggKHZhbHVlVHlwZSkge1xuICBjYXNlICdzdHJpbmcnOlxuICBjYXNlICdudW1iZXInOlxuICAgIHJldHVybiB0cnVlO1xuXG4gIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIHJldHVybiB2YWx1ZTtcblxuICBkZWZhdWx0OlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG59LHtcIi4vbm9kZS10eXBlXCI6NCxcImNvbXBvbmVudC10eXBlXCI6MTAsXCJvYmplY3QtZGVmYXVsdHNcIjoyNH1dLDc6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0VsZW1lbnQ6IF9yZXF1aXJlKCdpcy1zdmctZWxlbWVudCcpLmlzRWxlbWVudCxcbiAgaXNBdHRyaWJ1dGU6IF9yZXF1aXJlKCdpcy1zdmctYXR0cmlidXRlJyksXG4gIG5hbWVzcGFjZTogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xufVxuXG59LHtcImlzLXN2Zy1hdHRyaWJ1dGVcIjoyMixcImlzLXN2Zy1lbGVtZW50XCI6MjN9XSw4OltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICBmdW5jdGlvbiBvbigpIHtcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cbn0se31dLDk6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKWAuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgZmFsbGJhY2s7XG5cbi8qKlxuICogRmFsbGJhY2sgaW1wbGVtZW50YXRpb24uXG4gKi9cblxudmFyIHByZXYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbmZ1bmN0aW9uIGZhbGxiYWNrKGZuKSB7XG4gIHZhciBjdXJyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHZhciBtcyA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnIgLSBwcmV2KSk7XG4gIHZhciByZXEgPSBzZXRUaW1lb3V0KGZuLCBtcyk7XG4gIHByZXYgPSBjdXJyO1xuICByZXR1cm4gcmVxO1xufVxuXG4vKipcbiAqIENhbmNlbC5cbiAqL1xuXG52YXIgY2FuY2VsID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LmNsZWFyVGltZW91dDtcblxuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbihpZCl7XG4gIGNhbmNlbC5jYWxsKHdpbmRvdywgaWQpO1xufTtcblxufSx7fV0sMTA6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogdG9TdHJpbmcgcmVmLlxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSB0eXBlIG9mIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCl7XG4gIHN3aXRjaCAodG9TdHJpbmcuY2FsbCh2YWwpKSB7XG4gICAgY2FzZSAnW29iamVjdCBEYXRlXSc6IHJldHVybiAnZGF0ZSc7XG4gICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzogcmV0dXJuICdyZWdleHAnO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJndW1lbnRzXSc6IHJldHVybiAnYXJndW1lbnRzJztcbiAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6IHJldHVybiAnYXJyYXknO1xuICAgIGNhc2UgJ1tvYmplY3QgRXJyb3JdJzogcmV0dXJuICdlcnJvcic7XG4gIH1cblxuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICBpZiAodmFsID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJztcbiAgaWYgKHZhbCAhPT0gdmFsKSByZXR1cm4gJ25hbic7XG4gIGlmICh2YWwgJiYgdmFsLm5vZGVUeXBlID09PSAxKSByZXR1cm4gJ2VsZW1lbnQnO1xuXG4gIHZhbCA9IHZhbC52YWx1ZU9mXG4gICAgPyB2YWwudmFsdWVPZigpXG4gICAgOiBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YuYXBwbHkodmFsKVxuXG4gIHJldHVybiB0eXBlb2YgdmFsO1xufTtcblxufSx7fV0sMTE6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmRJbnRlcm5hbDMgPSBfcmVxdWlyZSgnLi4vZnVuY3Rpb24vYmluZEludGVybmFsMycpO1xuXG4vKipcbiAqICMgRm9yIEVhY2hcbiAqXG4gKiBBIGZhc3QgYC5mb3JFYWNoKClgIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgICBzdWJqZWN0ICAgICBUaGUgYXJyYXkgKG9yIGFycmF5LWxpa2UpIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgICAgICBUaGUgdmlzaXRvciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge09iamVjdH0gICB0aGlzQ29udGV4dCBUaGUgY29udGV4dCBmb3IgdGhlIHZpc2l0b3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmFzdEZvckVhY2ggKHN1YmplY3QsIGZuLCB0aGlzQ29udGV4dCkge1xuICB2YXIgbGVuZ3RoID0gc3ViamVjdC5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWwzKGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGl0ZXJhdG9yKHN1YmplY3RbaV0sIGksIHN1YmplY3QpO1xuICB9XG59O1xuXG59LHtcIi4uL2Z1bmN0aW9uL2JpbmRJbnRlcm5hbDNcIjoxNH1dLDEyOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kSW50ZXJuYWw0ID0gX3JlcXVpcmUoJy4uL2Z1bmN0aW9uL2JpbmRJbnRlcm5hbDQnKTtcblxuLyoqXG4gKiAjIFJlZHVjZVxuICpcbiAqIEEgZmFzdCBgLnJlZHVjZSgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gICAgc3ViamVjdCAgICAgIFRoZSBhcnJheSAob3IgYXJyYXktbGlrZSkgdG8gcmVkdWNlLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHRoaXNDb250ZXh0ICBUaGUgY29udGV4dCBmb3IgdGhlIHJlZHVjZXIuXG4gKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmFzdFJlZHVjZSAoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpIHtcbiAgdmFyIGxlbmd0aCA9IHN1YmplY3QubGVuZ3RoLFxuICAgICAgaXRlcmF0b3IgPSB0aGlzQ29udGV4dCAhPT0gdW5kZWZpbmVkID8gYmluZEludGVybmFsNChmbiwgdGhpc0NvbnRleHQpIDogZm4sXG4gICAgICBpLCByZXN1bHQ7XG5cbiAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IDE7XG4gICAgcmVzdWx0ID0gc3ViamVjdFswXTtcbiAgfVxuICBlbHNlIHtcbiAgICBpID0gMDtcbiAgICByZXN1bHQgPSBpbml0aWFsVmFsdWU7XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBzdWJqZWN0W2ldLCBpLCBzdWJqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG59LHtcIi4uL2Z1bmN0aW9uL2JpbmRJbnRlcm5hbDRcIjoxNX1dLDEzOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoQXJyYXkgPSBfcmVxdWlyZSgnLi9hcnJheS9mb3JFYWNoJyksXG4gICAgZm9yRWFjaE9iamVjdCA9IF9yZXF1aXJlKCcuL29iamVjdC9mb3JFYWNoJyk7XG5cbi8qKlxuICogIyBGb3JFYWNoXG4gKlxuICogQSBmYXN0IGAuZm9yRWFjaCgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheXxPYmplY3R9IHN1YmplY3QgICAgIFRoZSBhcnJheSBvciBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtICB7RnVuY3Rpb259ICAgICBmbiAgICAgICAgICBUaGUgdmlzaXRvciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgdGhpc0NvbnRleHQgVGhlIGNvbnRleHQgZm9yIHRoZSB2aXNpdG9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RGb3JFYWNoIChzdWJqZWN0LCBmbiwgdGhpc0NvbnRleHQpIHtcbiAgaWYgKHN1YmplY3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBmb3JFYWNoQXJyYXkoc3ViamVjdCwgZm4sIHRoaXNDb250ZXh0KTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZm9yRWFjaE9iamVjdChzdWJqZWN0LCBmbiwgdGhpc0NvbnRleHQpO1xuICB9XG59O1xufSx7XCIuL2FycmF5L2ZvckVhY2hcIjoxMSxcIi4vb2JqZWN0L2ZvckVhY2hcIjoxN31dLDE0OltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDMgYXJndW1lbnRzXG4gKiB0byBhIGdpdmVuIGNvbnRleHQuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZEludGVybmFsMyAoZnVuYywgdGhpc0NvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQ29udGV4dCwgYSwgYiwgYyk7XG4gIH07XG59O1xuXG59LHt9XSwxNTpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEludGVybmFsIGhlbHBlciB0byBiaW5kIGEgZnVuY3Rpb24ga25vd24gdG8gaGF2ZSA0IGFyZ3VtZW50c1xuICogdG8gYSBnaXZlbiBjb250ZXh0LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmRJbnRlcm5hbDQgKGZ1bmMsIHRoaXNDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0NvbnRleHQsIGEsIGIsIGMsIGQpO1xuICB9O1xufTtcblxufSx7fV0sMTY6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBbmFsb2d1ZSBvZiBPYmplY3QuYXNzaWduKCkuXG4gKiBDb3BpZXMgcHJvcGVydGllcyBmcm9tIG9uZSBvciBtb3JlIHNvdXJjZSBvYmplY3RzIHRvXG4gKiBhIHRhcmdldCBvYmplY3QuIEV4aXN0aW5nIGtleXMgb24gdGhlIHRhcmdldCBvYmplY3Qgd2lsbCBiZSBvdmVyd3JpdHRlbi5cbiAqXG4gKiA+IE5vdGU6IFRoaXMgZGlmZmVycyBmcm9tIHNwZWMgaW4gc29tZSBpbXBvcnRhbnQgd2F5czpcbiAqID4gMS4gV2lsbCB0aHJvdyBpZiBwYXNzZWQgbm9uLW9iamVjdHMsIGluY2x1ZGluZyBgdW5kZWZpbmVkYCBvciBgbnVsbGAgdmFsdWVzLlxuICogPiAyLiBEb2VzIG5vdCBzdXBwb3J0IHRoZSBjdXJpb3VzIEV4Y2VwdGlvbiBoYW5kbGluZyBiZWhhdmlvciwgZXhjZXB0aW9ucyBhcmUgdGhyb3duIGltbWVkaWF0ZWx5LlxuICogPiBGb3IgbW9yZSBkZXRhaWxzLCBzZWU6XG4gKiA+IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ25cbiAqXG4gKlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdGFyZ2V0ICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtICB7T2JqZWN0fSBzb3VyY2UsIC4uLiBUaGUgc291cmNlKHMpIHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICBUaGUgdXBkYXRlZCB0YXJnZXQgb2JqZWN0LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RBc3NpZ24gKHRhcmdldCkge1xuICB2YXIgdG90YWxBcmdzID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIHNvdXJjZSwgaSwgdG90YWxLZXlzLCBrZXlzLCBrZXksIGo7XG5cbiAgZm9yIChpID0gMTsgaSA8IHRvdGFsQXJnczsgaSsrKSB7XG4gICAgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHRvdGFsS2V5cyA9IGtleXMubGVuZ3RoO1xuICAgIGZvciAoaiA9IDA7IGogPCB0b3RhbEtleXM7IGorKykge1xuICAgICAga2V5ID0ga2V5c1tqXTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG59LHt9XSwxNzpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZEludGVybmFsMyA9IF9yZXF1aXJlKCcuLi9mdW5jdGlvbi9iaW5kSW50ZXJuYWwzJyk7XG5cbi8qKlxuICogIyBGb3IgRWFjaFxuICpcbiAqIEEgZmFzdCBvYmplY3QgYC5mb3JFYWNoKClgIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBzdWJqZWN0ICAgICBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgICAgICBUaGUgdmlzaXRvciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge09iamVjdH0gICB0aGlzQ29udGV4dCBUaGUgY29udGV4dCBmb3IgdGhlIHZpc2l0b3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmFzdEZvckVhY2hPYmplY3QgKHN1YmplY3QsIGZuLCB0aGlzQ29udGV4dCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWwzKGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICBpdGVyYXRvcihzdWJqZWN0W2tleV0sIGtleSwgc3ViamVjdCk7XG4gIH1cbn07XG5cbn0se1wiLi4vZnVuY3Rpb24vYmluZEludGVybmFsM1wiOjE0fV0sMTg6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmRJbnRlcm5hbDQgPSBfcmVxdWlyZSgnLi4vZnVuY3Rpb24vYmluZEludGVybmFsNCcpO1xuXG4vKipcbiAqICMgUmVkdWNlXG4gKlxuICogQSBmYXN0IG9iamVjdCBgLnJlZHVjZSgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc3ViamVjdCAgICAgIFRoZSBvYmplY3QgdG8gcmVkdWNlIG92ZXIuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgICAgICAgIFRoZSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7bWl4ZWR9ICAgIGluaXRpYWxWYWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlZHVjZXIsIGRlZmF1bHRzIHRvIHN1YmplY3RbMF0uXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgdGhpc0NvbnRleHQgIFRoZSBjb250ZXh0IGZvciB0aGUgcmVkdWNlci5cbiAqIEByZXR1cm4ge21peGVkfSAgICAgICAgICAgICAgICAgVGhlIGZpbmFsIHJlc3VsdC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmYXN0UmVkdWNlT2JqZWN0IChzdWJqZWN0LCBmbiwgaW5pdGlhbFZhbHVlLCB0aGlzQ29udGV4dCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWw0KGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGksIGtleSwgcmVzdWx0O1xuXG4gIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGkgPSAxO1xuICAgIHJlc3VsdCA9IHN1YmplY3Rba2V5c1swXV07XG4gIH1cbiAgZWxzZSB7XG4gICAgaSA9IDA7XG4gICAgcmVzdWx0ID0gaW5pdGlhbFZhbHVlO1xuICB9XG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBzdWJqZWN0W2tleV0sIGtleSwgc3ViamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxufSx7XCIuLi9mdW5jdGlvbi9iaW5kSW50ZXJuYWw0XCI6MTV9XSwxOTpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVkdWNlQXJyYXkgPSBfcmVxdWlyZSgnLi9hcnJheS9yZWR1Y2UnKSxcbiAgICByZWR1Y2VPYmplY3QgPSBfcmVxdWlyZSgnLi9vYmplY3QvcmVkdWNlJyk7XG5cbi8qKlxuICogIyBSZWR1Y2VcbiAqXG4gKiBBIGZhc3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7QXJyYXl8T2JqZWN0fSBzdWJqZWN0ICAgICAgVGhlIGFycmF5IG9yIG9iamVjdCB0byByZWR1Y2Ugb3Zlci5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICAgZm4gICAgICAgICAgIFRoZSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7bWl4ZWR9ICAgICAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgICAgICB0aGlzQ29udGV4dCAgVGhlIGNvbnRleHQgZm9yIHRoZSByZWR1Y2VyLlxuICogQHJldHVybiB7QXJyYXl8T2JqZWN0fSAgICAgICAgICAgICAgVGhlIGFycmF5IG9yIG9iamVjdCBjb250YWluaW5nIHRoZSByZXN1bHRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhc3RSZWR1Y2UgKHN1YmplY3QsIGZuLCBpbml0aWFsVmFsdWUsIHRoaXNDb250ZXh0KSB7XG4gIGlmIChzdWJqZWN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gcmVkdWNlQXJyYXkoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiByZWR1Y2VPYmplY3Qoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpO1xuICB9XG59O1xufSx7XCIuL2FycmF5L3JlZHVjZVwiOjEyLFwiLi9vYmplY3QvcmVkdWNlXCI6MTh9XSwyMDpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqIGdlbmVyYXRlIHVuaXF1ZSBpZCBmb3Igc2VsZWN0b3IgKi9cclxudmFyIGNvdW50ZXIgPSBEYXRlLm5vdygpICUgMWU5O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRVaWQoKXtcclxuXHRyZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAxZTkgPj4+IDApICsgKGNvdW50ZXIrKyk7XHJcbn07XG59LHt9XSwyMTpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLypnbG9iYWwgd2luZG93Ki9cblxuLyoqXG4gKiBDaGVjayBpZiBvYmplY3QgaXMgZG9tIG5vZGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc05vZGUodmFsKXtcbiAgaWYgKCF2YWwgfHwgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgaWYgKHdpbmRvdyAmJiAnb2JqZWN0JyA9PSB0eXBlb2Ygd2luZG93Lk5vZGUpIHJldHVybiB2YWwgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZTtcbiAgcmV0dXJuICdudW1iZXInID09IHR5cGVvZiB2YWwubm9kZVR5cGUgJiYgJ3N0cmluZycgPT0gdHlwZW9mIHZhbC5ub2RlTmFtZTtcbn1cblxufSx7fV0sMjI6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogU3VwcG9ydGVkIFNWRyBhdHRyaWJ1dGVzXG4gKi9cblxuZXhwb3J0cy5hdHRyaWJ1dGVzID0ge1xuICAnY3gnOiB0cnVlLFxuICAnY3knOiB0cnVlLFxuICAnZCc6IHRydWUsXG4gICdkeCc6IHRydWUsXG4gICdkeSc6IHRydWUsXG4gICdmaWxsJzogdHJ1ZSxcbiAgJ2ZpbGxPcGFjaXR5JzogdHJ1ZSxcbiAgJ2ZvbnRGYW1pbHknOiB0cnVlLFxuICAnZm9udFNpemUnOiB0cnVlLFxuICAnZngnOiB0cnVlLFxuICAnZnknOiB0cnVlLFxuICAnZ3JhZGllbnRUcmFuc2Zvcm0nOiB0cnVlLFxuICAnZ3JhZGllbnRVbml0cyc6IHRydWUsXG4gICdtYXJrZXJFbmQnOiB0cnVlLFxuICAnbWFya2VyTWlkJzogdHJ1ZSxcbiAgJ21hcmtlclN0YXJ0JzogdHJ1ZSxcbiAgJ29mZnNldCc6IHRydWUsXG4gICdvcGFjaXR5JzogdHJ1ZSxcbiAgJ3BhdHRlcm5Db250ZW50VW5pdHMnOiB0cnVlLFxuICAncGF0dGVyblVuaXRzJzogdHJ1ZSxcbiAgJ3BvaW50cyc6IHRydWUsXG4gICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJzogdHJ1ZSxcbiAgJ3InOiB0cnVlLFxuICAncngnOiB0cnVlLFxuICAncnknOiB0cnVlLFxuICAnc3ByZWFkTWV0aG9kJzogdHJ1ZSxcbiAgJ3N0b3BDb2xvcic6IHRydWUsXG4gICdzdG9wT3BhY2l0eSc6IHRydWUsXG4gICdzdHJva2UnOiB0cnVlLFxuICAnc3Ryb2tlRGFzaGFycmF5JzogdHJ1ZSxcbiAgJ3N0cm9rZUxpbmVjYXAnOiB0cnVlLFxuICAnc3Ryb2tlT3BhY2l0eSc6IHRydWUsXG4gICdzdHJva2VXaWR0aCc6IHRydWUsXG4gICd0ZXh0QW5jaG9yJzogdHJ1ZSxcbiAgJ3RyYW5zZm9ybSc6IHRydWUsXG4gICd2ZXJzaW9uJzogdHJ1ZSxcbiAgJ3ZpZXdCb3gnOiB0cnVlLFxuICAneDEnOiB0cnVlLFxuICAneDInOiB0cnVlLFxuICAneCc6IHRydWUsXG4gICd5MSc6IHRydWUsXG4gICd5Mic6IHRydWUsXG4gICd5JzogdHJ1ZVxufVxuXG4vKipcbiAqIEFyZSBlbGVtZW50J3MgYXR0cmlidXRlcyBTVkc/XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGF0dHJcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhdHRyKSB7XG4gIHJldHVybiBhdHRyIGluIGV4cG9ydHMuYXR0cmlidXRlc1xufVxuXG59LHt9XSwyMzpbZnVuY3Rpb24oX3JlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4gKiBTdXBwb3J0ZWQgU1ZHIGVsZW1lbnRzXG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG5cbmV4cG9ydHMuZWxlbWVudHMgPSB7XG4gICdhbmltYXRlJzogdHJ1ZSxcbiAgJ2NpcmNsZSc6IHRydWUsXG4gICdkZWZzJzogdHJ1ZSxcbiAgJ2VsbGlwc2UnOiB0cnVlLFxuICAnZyc6IHRydWUsXG4gICdsaW5lJzogdHJ1ZSxcbiAgJ2xpbmVhckdyYWRpZW50JzogdHJ1ZSxcbiAgJ21hc2snOiB0cnVlLFxuICAncGF0aCc6IHRydWUsXG4gICdwYXR0ZXJuJzogdHJ1ZSxcbiAgJ3BvbHlnb24nOiB0cnVlLFxuICAncG9seWxpbmUnOiB0cnVlLFxuICAncmFkaWFsR3JhZGllbnQnOiB0cnVlLFxuICAncmVjdCc6IHRydWUsXG4gICdzdG9wJzogdHJ1ZSxcbiAgJ3N2Zyc6IHRydWUsXG4gICd0ZXh0JzogdHJ1ZSxcbiAgJ3RzcGFuJzogdHJ1ZVxufVxuXG4vKipcbiAqIElzIGVsZW1lbnQncyBuYW1lc3BhY2UgU1ZHP1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKi9cblxuZXhwb3J0cy5pc0VsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZSBpbiBleHBvcnRzLmVsZW1lbnRzXG59XG5cbn0se31dLDI0OltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG4gICAgaWYgKCFzb3VyY2UpIGNvbnRpbnVlXG5cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAodW5kZWZpbmVkID09PSB0YXJnZXRba2V5XSlcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGFyZ2V0XG59XG5cbn0se31dLDI1OltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgbmV4dDpjYW50IHRlc3QqL1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIHJvb3Qub2JqZWN0UGF0aCA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhclxuICAgIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpe1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b1N0cmluZyh0eXBlKXtcbiAgICByZXR1cm4gdG9TdHIuY2FsbCh0eXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKXtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0b1N0cmluZyh2YWx1ZSkgPT09IFwiW29iamVjdCBOdW1iZXJdXCI7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0cmluZyhvYmope1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fCB0b1N0cmluZyhvYmopID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmcob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQXJyYXkob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT09ICdudW1iZXInICYmIHRvU3RyaW5nKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKXtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nIHx8IHRvU3RyaW5nKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpe1xuICAgIHZhciBpbnRLZXkgPSBwYXJzZUludChrZXkpO1xuICAgIGlmIChpbnRLZXkudG9TdHJpbmcoKSA9PT0ga2V5KSB7XG4gICAgICByZXR1cm4gaW50S2V5O1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG9iaiwgcGF0aCwgdmFsdWUsIGRvTm90UmVwbGFjZSl7XG4gICAgaWYgKGlzTnVtYmVyKHBhdGgpKSB7XG4gICAgICBwYXRoID0gW3BhdGhdO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShwYXRoKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICByZXR1cm4gc2V0KG9iaiwgcGF0aC5zcGxpdCgnLicpLm1hcChnZXRLZXkpLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKTtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRQYXRoID0gcGF0aFswXTtcblxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIG9sZFZhbCA9IG9ialtjdXJyZW50UGF0aF07XG4gICAgICBpZiAob2xkVmFsID09PSB2b2lkIDAgfHwgIWRvTm90UmVwbGFjZSkge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsO1xuICAgIH1cblxuICAgIGlmIChvYmpbY3VycmVudFBhdGhdID09PSB2b2lkIDApIHtcbiAgICAgIC8vY2hlY2sgaWYgd2UgYXNzdW1lIGFuIGFycmF5XG4gICAgICBpZihpc051bWJlcihwYXRoWzFdKSkge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbY3VycmVudFBhdGhdID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbChvYmosIHBhdGgpIHtcbiAgICBpZiAoaXNOdW1iZXIocGF0aCkpIHtcbiAgICAgIHBhdGggPSBbcGF0aF07XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkob2JqKSkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbXB0eShwYXRoKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHJldHVybiBkZWwob2JqLCBwYXRoLnNwbGl0KCcuJykpO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50UGF0aCA9IGdldEtleShwYXRoWzBdKTtcbiAgICB2YXIgb2xkVmFsID0gb2JqW2N1cnJlbnRQYXRoXTtcblxuICAgIGlmKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAob2xkVmFsICE9PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIG9iai5zcGxpY2UoY3VycmVudFBhdGgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBvYmpbY3VycmVudFBhdGhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvYmpbY3VycmVudFBhdGhdICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGRlbChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIG9iamVjdFBhdGggPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0UGF0aCkucmVkdWNlKGZ1bmN0aW9uKHByb3h5LCBwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIG9iamVjdFBhdGhbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJveHlbcHJvcF0gPSBvYmplY3RQYXRoW3Byb3BdLmJpbmQob2JqZWN0UGF0aCwgb2JqKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmhhcyA9IGZ1bmN0aW9uIChvYmosIHBhdGgpIHtcbiAgICBpZiAoaXNFbXB0eShvYmopKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKHBhdGgpKSB7XG4gICAgICBwYXRoID0gW3BhdGhdO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkocGF0aCkgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBqID0gcGF0aFtpXTtcbiAgICAgIGlmICgoaXNPYmplY3Qob2JqKSB8fCBpc0FycmF5KG9iaikpICYmIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaikpIHtcbiAgICAgICAgb2JqID0gb2JqW2pdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZW5zdXJlRXhpc3RzID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgdmFsdWUpe1xuICAgIHJldHVybiBzZXQob2JqLCBwYXRoLCB2YWx1ZSwgdHJ1ZSk7XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5zZXQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKXtcbiAgICByZXR1cm4gc2V0KG9iaiwgcGF0aCwgdmFsdWUsIGRvTm90UmVwbGFjZSk7XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5pbnNlcnQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSwgYXQpe1xuICAgIHZhciBhcnIgPSBvYmplY3RQYXRoLmdldChvYmosIHBhdGgpO1xuICAgIGF0ID0gfn5hdDtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgYXJyID0gW107XG4gICAgICBvYmplY3RQYXRoLnNldChvYmosIHBhdGgsIGFycik7XG4gICAgfVxuICAgIGFyci5zcGxpY2UoYXQsIDAsIHZhbHVlKTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmVtcHR5ID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgaWYgKGlzRW1wdHkocGF0aCkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KG9iaikpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlLCBpO1xuICAgIGlmICghKHZhbHVlID0gb2JqZWN0UGF0aC5nZXQob2JqLCBwYXRoKSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9iamVjdFBhdGguc2V0KG9iaiwgcGF0aCwgJycpO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9iamVjdFBhdGguc2V0KG9iaiwgcGF0aCwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gb2JqZWN0UGF0aC5zZXQob2JqLCBwYXRoLCAwKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5sZW5ndGggPSAwO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBmb3IgKGkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBpKSkge1xuICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2JqZWN0UGF0aC5zZXQob2JqLCBwYXRoLCBudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5wdXNoID0gZnVuY3Rpb24gKG9iaiwgcGF0aCAvKiwgdmFsdWVzICovKXtcbiAgICB2YXIgYXJyID0gb2JqZWN0UGF0aC5nZXQob2JqLCBwYXRoKTtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgYXJyID0gW107XG4gICAgICBvYmplY3RQYXRoLnNldChvYmosIHBhdGgsIGFycik7XG4gICAgfVxuXG4gICAgYXJyLnB1c2guYXBwbHkoYXJyLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpKTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmNvYWxlc2NlID0gZnVuY3Rpb24gKG9iaiwgcGF0aHMsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXRocy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCh2YWx1ZSA9IG9iamVjdFBhdGguZ2V0KG9iaiwgcGF0aHNbaV0pKSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZ2V0ID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKXtcbiAgICBpZiAoaXNOdW1iZXIocGF0aCkpIHtcbiAgICAgIHBhdGggPSBbcGF0aF07XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KHBhdGgpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShvYmopKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHJldHVybiBvYmplY3RQYXRoLmdldChvYmosIHBhdGguc3BsaXQoJy4nKSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFBhdGggPSBnZXRLZXkocGF0aFswXSk7XG5cbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChvYmpbY3VycmVudFBhdGhdID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbY3VycmVudFBhdGhdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RQYXRoLmdldChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpLCBkZWZhdWx0VmFsdWUpO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZGVsID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgcmV0dXJuIGRlbChvYmosIHBhdGgpO1xuICB9O1xuXG4gIHJldHVybiBvYmplY3RQYXRoO1xufSk7XG5cbn0se31dfSx7fSxbM10pKDMpXG59KTsiLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gJy4vdGV4dC1maWVsZCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9jaGVja2JveCc7XG5pbXBvcnQgRHJvcERvd24gZnJvbSAnLi9kcm9wZG93bic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBUYWJsZSBmcm9tICcuL3RhYmxlJztcbmltcG9ydCBDb2RlIGZyb20gJy4vY29kZSc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuXG5leHBvcnQge1xuICBUZXh0RmllbGQsXG4gIENoZWNrYm94LFxuICBEcm9wRG93bixcbiAgQnV0dG9uLFxuICBUYWJsZSxcbiAgQ29kZSxcbiAgTWVudVxufTtcbiIsImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuXG4vKipcbiAqIFRleHRGaWVsZC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BUeXBlczoge1xuICAgIHBsYWNlaG9sZGVyOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcywgc3RhdGUgfSkge1xuICAgIGxldCB7IHBsYWNlaG9sZGVyIH0gPSBwcm9wcztcblxuICAgIGxldCBhdHRycyA9IHtcbiAgICAgIGNsYXNzOiAnbWF0dGVyLVRleHRGaWVsZCcsXG4gICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dCB7IC4uLmF0dHJzIH0+XG4gICAgICA8L2lucHV0PlxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgZWxlbWVudCBmcm9tICdkZWt1anMvdmlydHVhbC1lbGVtZW50JztcblxuLyoqXG4gKiBDaGVja2JveC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BUeXBlczoge1xuICAgIHNpemU6IHsgdHlwZTogJ3N0cmluZycsIGV4cGVjdHM6IFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10gfSxcbiAgICBvbkNsaWNrOiB7IHR5cGU6ICdmdW5jdGlvbicgfSxcbiAgICBjaGVja2VkOiB7IHR5cGU6ICdib29sZWFuJyB9XG4gIH0sXG5cbiAgcmVuZGVyKHsgcHJvcHMgfSkge1xuICAgIGxldCB7IHNpemUsIGNoZWNrZWQsIG9uQ2xpY2sgfSA9IHByb3BzO1xuICAgIFxuICAgIGxldCBhdHRycyA9IHtcbiAgICAgIGNsYXNzOiAnbWF0dGVyLUNoZWNrYm94JyxcbiAgICAgIHNpemU6IHNpemUgfHwgJ21lZGl1bScsXG4gICAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgIHR5cGU6ICdjaGVja2JveCdcbiAgICB9O1xuXG4gICAgcmV0dXJuIDxpbnB1dCB7IC4uLmF0dHJzIH0vPlxuICB9XG59O1xuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi4vbWVudSc7XG5cbi8qKlxuICogRHJvcERvd24uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wVHlwZXM6IHtcbiAgICBpdGVtczogeyB0eXBlOiAnYXJyYXknIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcywgc3RhdGUgfSwgdXBkYXRlU3RhdGUpIHtcbiAgICBsZXQgeyBpdGVtcyB9ID0gcHJvcHM7XG4gICAgbGV0IHsgaXNDaG9vc2luZywgYWN0aXZlSXRlbSB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz0nbWF0dGVyLURyb3BEb3duJyBvbkNsaWNrPXsgY2hhbmdlIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBpc0Nob29zaW5nID9cbiAgICAgICAgICA8TWVudSBpdGVtcz17IGl0ZW1zIH0gb25DaGFuZ2U9eyBzZXRBY3RpdmUgfS8+IDpcbiAgICAgICAgICBhY3RpdmVJdGVtIHx8IGl0ZW1zWzBdXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2UoKSB7XG4gICAgICB1cGRhdGVTdGF0ZSh7IGlzQ2hvb3Npbmc6ICFpc0Nob29zaW5nIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZShuYW1lKSB7XG4gICAgICB1cGRhdGVTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSk7XG4gICAgICB1cGRhdGVTdGF0ZSh7IGlzQ2hvb3Npbmc6ICFpc0Nob29zaW5nIH0pO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuXG4vKipcbiAqIE1lbnUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wVHlwZXM6IHtcbiAgICBvbkNoYW5nZTogeyB0eXBlOiAnZnVuY3Rpb24nIH0sXG4gICAgaXRlbXM6IHsgdHlwZTogJ2FycmF5JyB9XG4gIH0sXG5cbiAgcmVuZGVyKHsgcHJvcHMsIHN0YXRlIH0sIHVwZGF0ZVN0YXRlKSB7XG4gICAgbGV0IHsgaXRlbXMsIG9uQ2hhbmdlIH0gPSBwcm9wcztcbiAgICBsZXQgeyBhY3RpdmVJdGVtIH0gPSBzdGF0ZTtcblxuICAgIGxldCBjdXJyZW50SXRlbSA9IGFjdGl2ZUl0ZW0gfHwgaXRlbXNbMF07XG5cbiAgICBsZXQgbWVudUl0ZW1zID0gaXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9J21hdHRlci1NZW51LWl0ZW0nIG9uQ2xpY2s9eyBvbkNsaWNrIH0gYWN0aXZlPXsgY3VycmVudEl0ZW0gPT09IGl0ZW0gfT5cbiAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcblxuICAgICAgZnVuY3Rpb24gb25DbGljaygpe1xuICAgICAgICB1cGRhdGVTdGF0ZSh7IGFjdGl2ZUl0ZW06IGl0ZW0gfSk7XG4gICAgICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2UoaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz0nbWF0dGVyLU1lbnUnPlxuICAgICAgICB7IG1lbnVJdGVtcyB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5cbi8qKlxuICogQnV0dG9uLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgdHlwZTogeyB0eXBlOiAnc3RyaW5nJywgZXhwZWN0czogWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICd3YXJuaW5nJ10gfSxcbiAgICBzaXplOiB7IHR5cGU6ICdzdHJpbmcnLCBleHBlY3RzOiBbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddIH0sXG4gICAgb25DbGljazogeyB0eXBlOiAnZnVuY3Rpb24nIH0sXG4gICAgbGFiZWw6IHsgdHlwZTogJ3N0cmluZycgfVxuICB9LFxuXG4gIHJlbmRlcih7IHByb3BzIH0pIHtcbiAgICBsZXQgeyBsYWJlbCwgc2l6ZSwgdHlwZSwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgICBsZXQgYXR0cnMgPSB7XG4gICAgICB0eXBlOiB0eXBlIHx8ICdwcmltYXJ5JyxcbiAgICAgIHNpemU6IHNpemUgfHwgJ21lZGl1bScsXG4gICAgICBjbGFzczogJ21hdHRlci1CdXR0b24nLFxuICAgICAgb25DbGljazogb25DbGlja1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiB7IC4uLmF0dHJzIH0+XG4gICAgICAgIHsgbGFiZWwgfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuXG4vKipcbiAqIFRhYmxlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgcm93czogeyB0eXBlOiAnYXJyYXknIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcywgc3RhdGUgfSwgc2V0U3RhdGUpIHtcbiAgICBsZXQgeyByb3dzIH0gPSBwcm9wcztcblxuICAgIGxldCB0YWJsZVJvd3MgPSByb3dzLm1hcChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGxldCByb3dDZWxscyA9IHJvdy5tYXAoZnVuY3Rpb24oY2VsbCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0ZCBjbGFzcz0nbWF0dGVyLVRhYmxlLWNlbGwnIGNvbHNwYW49JzEnIHJvd3NwYW49JzEnPlxuICAgICAgICAgICAgPHNwYW4+eyBjZWxsIH08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHIgY2xhc3M9J21hdHRlci1UYWJsZS1yb3cnPlxuICAgICAgICAgIHsgcm93Q2VsbHMgfVxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3M9J21hdHRlci1UYWJsZScgY2VsbHBhZGRpbmc9JzAnIGNlbGxzcGFjaW5nPScwJz5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHsgdGFibGVSb3dzIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0JztcblxuLyoqXG4gKiBMYW5ndWFnZXMuXG4gKi9cblxuaW1wb3J0IG9iamMgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1vYmplY3RpdmUtYyc7XG5pbXBvcnQganMgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1qYXZhc2NyaXB0JztcbmltcG9ydCBjc2hhcnAgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1jc2hhcnAnO1xuaW1wb3J0IHB5dGhvbiBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LXB5dGhvbic7XG5pbXBvcnQgamF2YSBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LWphdmEnO1xuaW1wb3J0IGJhc2ggZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1iYXNoJztcbmltcG9ydCBydWJ5IGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtcnVieSc7XG5pbXBvcnQgeWFtbCBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LXlhbWwnO1xuaW1wb3J0IHhtbCBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LXhtbCc7XG5pbXBvcnQgcGhwIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtcGhwJztcbmltcG9ydCBjc3MgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1jc3MnO1xuaW1wb3J0IGdvIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtZ28nO1xuXG4vKipcbiAqIEhpZ2hsaWdodC5cbiAqL1xuXG5sZXQgaGlnaGxpZ2h0ID0gbmV3IEhpZ2hsaWdodCgpXG4gIC51c2UocHl0aG9uKVxuICAudXNlKGNzaGFycClcbiAgLnVzZSh5YW1sKVxuICAudXNlKGphdmEpXG4gIC51c2UocnVieSlcbiAgLnVzZShiYXNoKVxuICAudXNlKG9iamMpXG4gIC51c2UoeG1sKVxuICAudXNlKGNzcylcbiAgLnVzZShwaHApXG4gIC51c2UoanMpXG4gIC51c2UoZ28pO1xuXG4vKipcbiAqIENvZGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wVHlwZXM6IHtcbiAgICBsYW5ndWFnZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gIH0sXG5cbiAgcmVuZGVyKHsgcHJvcHMgfSkge1xuICAgIGxldCB7IGxhbmd1YWdlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICBsZXQgdW5mb3JtYXR0ZWRDb2RlID0gY2hpbGRyZW5bMF07XG4gICAgbGV0IGZvcm1hdHRlZENvZGUgPSBoaWdobGlnaHQuc3RyaW5nKHVuZm9ybWF0dGVkQ29kZSwgbGFuZ3VhZ2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9J21hdHRlci1Db2RlJz5cbiAgICAgICAgPGNvZGUgY2xhc3M9J21hdHRlci1Db2RlLWNvZGUnIGlubmVySFRNTD17IGZvcm1hdHRlZENvZGUgfT5cbiAgICAgICAgPC9jb2RlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcbiIsIlxudmFyIGVzY2FwZSA9IHJlcXVpcmUoJ2VzY2FwZS1odG1sJyk7XG5cbi8qKlxuICogRXhwb3NlIGBIaWdobGlnaHRgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gSGlnaGxpZ2h0O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEhpZ2hsaWdodGAgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gSGlnaGxpZ2h0KCl7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBIaWdobGlnaHQpKSByZXR1cm4gbmV3IEhpZ2hsaWdodCgpO1xuICB0aGlzLmxhbmd1YWdlcyA9IHt9O1xuICB0aGlzLnByZWZpeCgnSGlnaGxpZ2h0LScpO1xufVxuXG4vKipcbiAqIFVzZSBhIGBwbHVnaW5gIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBsdWdpblxuICogQHJldHVybiB7SGlnaGxpZ2h0fVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24ocGx1Z2luKXtcbiAgcGx1Z2luKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogR2V0IG9yIHNldCB0aGUgaGlnaGxpZ2h0ZWQgY2xhc3MgYHByZWZpeGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByZWZpeFxuICogQHJldHVybiB7SGlnaGxpZ2h0IG9yIFN0cmluZ31cbiAqL1xuXG5IaWdobGlnaHQucHJvdG90eXBlLnByZWZpeCA9IGZ1bmN0aW9uKHByZWZpeCl7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3ByZWZpeDtcbiAgdGhpcy5fcHJlZml4ID0gcHJlZml4O1xuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBuZXcgYGxhbmd1YWdlYCB3aXRoIGEgYGdyYW1tYXJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZVxuICogQHBhcmFtIHtPYmplY3R9IGdyYW1tYXJcbiAqIEByZXR1cm4ge0hpZ2hsaWdodH1cbiAqL1xuXG5IaWdobGlnaHQucHJvdG90eXBlLmxhbmd1YWdlID0gZnVuY3Rpb24obGFuZ3VhZ2UsIGdyYW1tYXIpe1xuICB0aGlzLmxhbmd1YWdlc1tsYW5ndWFnZV0gPSBncmFtbWFyO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSGlnaGxpZ2h0IGFuIEhUTUwgYHN0cmluZ2Agb2YgYSBnaXZlbiBgbGFuZ3VhZ2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUuc3RyaW5nID0gZnVuY3Rpb24oc3RyaW5nLCBsYW5ndWFnZSl7XG4gIHZhciBhc3QgPSB0aGlzLnBhcnNlKHN0cmluZywgbGFuZ3VhZ2UpO1xuICB2YXIgc3RyID0gdGhpcy5zdHJpbmdpZnkoYXN0KTtcbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogSGlnaGxpZ2h0IGFuIGBlbGAsIHdpdGggb3B0aW9uYWwgYGxhbmd1YWdlYC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnQgb3IgU3RyaW5nfSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlIChvcHRpb25hbClcbiAqL1xuXG5IaWdobGlnaHQucHJvdG90eXBlLmVsZW1lbnQgPSBmdW5jdGlvbihlbCwgbGFuZ3VhZ2Upe1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGVsKSBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICB2YXIgc3RyID0gdGhpcy5zdHJpbmcoZWwudGV4dENvbnRlbnQsIGxhbmd1YWdlIHx8IGxhbmcoZWwpKTtcbiAgZWwuaW5uZXJIVE1MID0gc3RyO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHQgYW4gYXJyYXkgb2YgYGVsc2AsIHdpdGggb3B0aW9uYWwgYGxhbmd1YWdlYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5IG9yIFN0cmluZ30gZWxzXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2UgKG9wdGlvbmFsKVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUuZWxlbWVudHMgPSBmdW5jdGlvbihlbHMsIGxhbmd1YWdlKXtcbiAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBlbHMpIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxzKTtcbiAgZm9yICh2YXIgaSA9IDAsIGVsOyBlbCA9IGVsc1tpXTsgaSsrKSB0aGlzLmVsZW1lbnQoZWwsIGxhbmd1YWdlKTtcbn07XG5cbi8qKlxuICogSGlnaGxpZ2h0IGFsbCBlbGVtZW50cyBpbiB0aGUgRE9NIHdpdGggbGFuZ3VhZ2UgYXR0cmlidXRlcy5cbiAqL1xuXG5IaWdobGlnaHQucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuZWxlbWVudHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGFuZ3VhZ2VdJykpO1xuICB0aGlzLmVsZW1lbnRzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJsYW5ndWFnZS1cIl0nKSk7XG4gIHRoaXMuZWxlbWVudHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImxhbmctXCJdJykpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBhIGBzdHJpbmdgIHdpdGggYSBnaXZlbiBsYW5ndWFnZSdzIGBncmFtbWFyYCwgcmV0dXJuaW5nIGFuIEFTVC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcGFyYW0ge1N0cmluZyBvciBPYmplY3R9IGdyYW1tYXJcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihzdHJpbmcsIGdyYW1tYXIpe1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGdyYW1tYXIpIHtcbiAgICB2YXIgbGFuZyA9IGdyYW1tYXI7XG4gICAgZ3JhbW1hciA9IHRoaXMubGFuZ3VhZ2VzW2xhbmddO1xuICAgIGlmICghZ3JhbW1hcikgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGxhbmd1YWdlIFwiJyArIGxhbmcgKyAnXCInKTtcbiAgfVxuXG4gIGlmICghZ3JhbW1hcikgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHByb3ZpZGUgYSBncmFtbWFyJyk7XG4gIGlmICghc3RyaW5nKSByZXR1cm4gW107XG4gIHZhciByZXQgPSBbc3RyaW5nXTtcblxuICBmb3IgKHZhciBrZXkgaW4gZ3JhbW1hcikge1xuICAgIHZhciBydWxlID0gZ3JhbW1hcltrZXldO1xuICAgIHZhciByZWdleHAgPSBydWxlLnBhdHRlcm4gfHwgcnVsZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3RyID0gcmV0W2ldO1xuICAgICAgaWYgKCdvYmplY3QnID09IHR5cGVvZiBzdHIpIGNvbnRpbnVlO1xuICAgICAgdmFyIG0gPSByZWdleHAuZXhlYyhzdHIpO1xuICAgICAgaWYgKCFtKSBjb250aW51ZTtcblxuICAgICAgdmFyIGNvbnRlbnRzID0gbVswXTtcbiAgICAgIHZhciBiZWZvcmUgPSBzdHIuc2xpY2UoMCwgbS5pbmRleCk7XG4gICAgICB2YXIgYWZ0ZXIgPSBzdHIuc2xpY2UobS5pbmRleCArIGNvbnRlbnRzLmxlbmd0aCk7XG4gICAgICB2YXIgYXJncyA9IFtpLCAxXTtcbiAgICAgIHZhciB0b2tlbiA9IHtcbiAgICAgICAgdHlwZToga2V5LFxuICAgICAgICB2YWx1ZTogcnVsZS5jaGlsZHJlbiA/IHRoaXMucGFyc2UoY29udGVudHMsIHJ1bGUuY2hpbGRyZW4pIDogY29udGVudHNcbiAgICAgIH07XG5cbiAgICAgIGlmIChiZWZvcmUpIGFyZ3MucHVzaChiZWZvcmUpO1xuICAgICAgYXJncy5wdXNoKHRva2VuKTtcbiAgICAgIGlmIChhZnRlcikgYXJncy5wdXNoKGFmdGVyKTtcbiAgICAgIHJldC5zcGxpY2UuYXBwbHkocmV0LCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIFN0cmluZ2lmeSBhIGdpdmVuIGBhc3RgLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFzdFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24oYXN0KXtcbiAgdmFyIHByZWZpeCA9IHRoaXMucHJlZml4KCk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICByZXR1cm4gYXN0Lm1hcChmdW5jdGlvbih0KXtcbiAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIHQpIHJldHVybiBlc2NhcGUodCk7XG4gICAgdmFyIHR5cGUgPSB0LnR5cGU7XG4gICAgdmFyIHZhbHVlID0gJ29iamVjdCcgPT0gdHlwZW9mIHQudmFsdWVcbiAgICAgID8gc2VsZi5zdHJpbmdpZnkodC52YWx1ZSlcbiAgICAgIDogZXNjYXBlKHQudmFsdWUpO1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgcHJlZml4ICsgdHlwZSArICdcIj4nICsgdmFsdWUgKyAnPC9zcGFuPic7XG4gIH0pLmpvaW4oJycpO1xufTtcblxuLyoqXG4gKiBMYW5ndWFnZSBjbGFzcyBtYXRjaGVyLlxuICovXG5cbnZhciBtYXRjaGVyID0gL1xcYmxhbmcoPzp1YWdlKT8tKFxcdyspXFxiL2k7XG5cbi8qKlxuICogR2V0IHRoZSBjb2RlIGxhbmd1YWdlIGZvciBhIGdpdmVuIGBlbGAuIEZpcnN0IGxvb2sgZm9yIGEgYGRhdGEtbGFuZ3VhZ2VgXG4gKiBhdHRyaWJ1dGUsIHRoZW4gYSBgbGFuZ3VhZ2UtKmAgY2xhc3MsIHRoZW4gc2VhcmNoIHVwIHRoZSBET00gdHJlZSBmb3IgdGhlbS5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gbGFuZyhlbCl7XG4gIGlmICghZWwpIHJldHVybjtcbiAgdmFyIG07XG4gIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbGFuZ3VhZ2UnKSkgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sYW5ndWFnZScpO1xuICBpZiAobSA9IG1hdGNoZXIuZXhlYyhlbC5jbGFzc05hbWUpKSByZXR1cm4gbVsxXTtcbiAgcmV0dXJuIGxhbmd1YWdlKGVsLnBhcmVudE5vZGUpO1xufSIsIi8qIVxuICogZXNjYXBlLWh0bWxcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTMgVEogSG9sb3dheWNodWtcbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGVIdG1sO1xuXG4vKipcbiAqIEVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gdGhlIGdpdmVuIHN0cmluZyBvZiBodG1sLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gZXNjYXBlIGZvciBpbnNlcnRpbmcgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XG4gIHJldHVybiBTdHJpbmcoaHRtbClcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuIiwiXG4vKipcbiAqIEV4cG9zZSBgb2JqZWN0aXZlQ2BcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdGl2ZUM7XG5cbi8qKlxuICogQWRkIGBPYmplY3RpdmUtQ2AgYXMgYSBwbHVnaW4uXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBvYmplY3RpdmVDKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodFxuICAgIC5sYW5ndWFnZSgnb2JqZWN0aXZlLWMnLCBvYmplY3RpdmVDKVxuICAgIC5sYW5ndWFnZSgnb2JqYycsIG9iamVjdGl2ZUMpO1xufVxuXG4vKipcbiAqIE1ldGhvZHNcbiAqL1xuXG5vYmplY3RpdmVDLm1ldGhvZCA9IC9cXFtcXHcrIChcXHcrKVxcXS87XG5cbi8qKlxuICogQm9vbGVhbnNcbiAqL1xuXG5vYmplY3RpdmVDLmJvb2xlYW4gPSAvXFxiKHllc3xub3x0cnVlfGZhbHNlKVxcYi9pO1xuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxub2JqZWN0aXZlQy5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JCkvbTtcblxuLyoqXG4gKiBDbGFzc2VzXG4gKi9cblxub2JqZWN0aXZlQy5jbGFzcyA9IC9AKGltcGxlbWVudGF0aW9ufGludGVyZmFjZXxjbGFzcykgKyhcXHcrKS87XG5vYmplY3RpdmVDLmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvQChpbXBsZW1lbnRhdGlvbnxpbnRlcmZhY2V8Y2xhc3MpLyB9O1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxub2JqZWN0aXZlQy5rZXl3b3JkID0gL1xcYih2b2lkfGNoYXJ8c2hvcnR8aW50fGxvbmd8ZmxvYXR8ZG91YmxlfHNpZ25lZHx1bnNpZ25lZHxpZHxjb25zdHx2b2xhdGlsZXxpbnxvdXR8aW5vdXR8Ynljb3B5fGJ5cmVmfG9uZXdheXxzZWxmfHN1cGVyKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbm9iamVjdGl2ZUMubnVtYmVyID0gL1xcYkA/Wy0rXT8oMHhbQS1GYS1mMC05XSt8XFxkKylcXGIvO1xuXG4vKipcbiAqIFN0cmluZ3NcbiAqL1xuXG5vYmplY3RpdmVDLnN0cmluZyA9IC8oQD9cIihcXFxcPy4pKj9cIikvO1xuXG4vKipcbiAqIE9wZXJhdG9yXG4gKi9cblxub2JqZWN0aXZlQy5vcGVyYXRvciA9IC8oWy0rXXsxLDJ9fCF8Jmx0Oz0/fD49P3w9ezEsM318Jmx0O3sxLDJ9fD57MSwyfXwoJmFtcDspezEsMn18XFx8ezEsMn18XFw/fFxcKnxcXC98XFx+fFxcXnxcXCUpLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvblxuICovXG5cbm9iamVjdGl2ZUMucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuOl0vOyIsIlxuLyoqXG4gKiBFeHBvc2UgYHBsdWdpbmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW47XG5cbi8qKlxuICogUGx1Z2luIHRvIGhpZ2hsaWdodCBKYXZhc2NyaXB0IGNvZGUuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICovXG5cbmZ1bmN0aW9uIHBsdWdpbihoaWdobGlnaHQpe1xuICBoaWdobGlnaHRcbiAgICAubGFuZ3VhZ2UoJ2phdmFzY3JpcHQnLCBncmFtbWFyKVxuICAgIC5sYW5ndWFnZSgnanMnLCBncmFtbWFyKTtcbn1cblxuLyoqXG4gKiBHcmFtbWFyLlxuICovXG5cbnZhciBncmFtbWFyID0ge307XG5cbi8qKlxuICogQ29tbWVudHMuXG4gKi9cblxuZ3JhbW1hci5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JCkvbTtcblxuLyoqXG4gKiBCb29sZWFucy5cbiAqL1xuXG5ncmFtbWFyLmJvb2xlYW4gPSAvXFxiKHRydWV8ZmFsc2UpXFxiLztcblxuLyoqXG4gKiBTdHJpbmdzLlxuICovXG5cbmdyYW1tYXIuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogS2V5d29yZHMuXG4gKi9cblxuZ3JhbW1hci5rZXl3b3JkID0gL1xcYihicmVha3xjYXRjaHxjb250aW51ZXxkZWxldGV8ZG98ZWxzZXxmaW5hbGx5fGZvcnxmdW5jdGlvbnxpZnxpbnxpbnN0YW5jZW9mfGxldHxuZXd8bnVsbHxyZXR1cm58dGhpc3xzZWxmfHRocm93fHRyeXx0eXBlb2Z8dmFyfHdoaWxlfHdpdGh8eWllbGQpXFxiLztcblxuLyoqXG4gKiBDb25zdGFudHMuXG4gKi9cblxuZ3JhbW1hci5jb25zdGFudCA9IC9cXGIoZG9jdW1lbnR8d2luZG93fGdsb2JhbClcXGIvO1xuXG4vKipcbiAqIEZ1bmN0aW9ucy5cbiAqXG4gKiBDaGlsZHJlbiBhcmUgc2V0IHNlcGFyYXRlbHkgdG8gbWFpbnRhaW4gb3JkZXJpbmcuXG4gKi9cblxuZ3JhbW1hci5mdW5jdGlvbiA9IHtcbiAgcGF0dGVybjogLyhcXHcrKVxcKC8sXG4gIGNoaWxkcmVuOiB7fVxufTtcblxuZ3JhbW1hci5mdW5jdGlvbi5jaGlsZHJlbi5jbGFzcyA9IC9cXGIoW0EtWl1cXHcqKVxcYi87XG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLmZ1bmN0aW9uID0gLyhcXHcrKS87XG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLnB1bmN0dWF0aW9uID0gL1xcKC87XG5cbi8qKlxuICogTnVtYmVycy5cbiAqL1xuXG5ncmFtbWFyLm51bWJlciA9IC9cXGItPygweFtcXGRBLUZhLWZdK3xcXGQqXFwuP1xcZCsoW0VlXS0/XFxkKyk/fE5hTnwtP0luZmluaXR5KVxcYi87XG5cbi8qKlxuICogT3BlcmF0b3JzLlxuICovXG5cbmdyYW1tYXIub3BlcmF0b3IgPSAvKFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb24uXG4gKi9cblxuZ3JhbW1hci5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC46XS87IiwiXG4vKipcbiAqIEV4cG9zZSBgY3NoYXJwYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY3NoYXJwO1xuXG4vKipcbiAqIEFkZCBgY3NoYXJwYCBhcyBhIHBsdWdpbi5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNzaGFycChoaWdobGlnaHQpe1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ2NzaGFycCcsIGNzaGFycCk7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnYy1zaGFycCcsIGNzaGFycCk7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnYyMnLCBjc2hhcnApO1xufVxuXG4vKipcbiAqIEJvb2xlYW5zXG4gKi9cblxuY3NoYXJwLmJvb2xlYW4gPSAvXFxiKHRydWV8ZmFsc2UpXFxiLztcblxuLyoqXG4gKiBDb21tZW50c1xuICovXG5cbmNzaGFycC5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JCkvbTtcblxuLyoqXG4gKiBDbGFzc2VzXG4gKi9cblxuY3NoYXJwLmNsYXNzID0gL2NsYXNzICsoXFx3KykvO1xuY3NoYXJwLmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvY2xhc3MvIH07XG5cbi8qKlxuICogU3RyaW5nc1xuICovXG5cbmNzaGFycC5zdHJpbmcgPSAvKFwiKFxcXFw/LikqP1wiKS9cblxuLyoqXG4gKiBLZXl3b3Jkc1xuICovXG5cbmNzaGFycC5rZXl3b3JkID0gL1xcYihhYnN0cmFjdHxiYXNlfGJvb2x8YnJlYWt8Ynl0ZXxjYXNlfGNhdGNofGNoYXJ8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVjaW1hbHxkZWZhdWx0fGRlbGVnYXRlfGRvfGRvdWJsZXxlbHNlfGVudW18ZXZlbnR8ZXhwbGljaXR8ZXh0ZXJufGZpbmFsbHl8Zml4ZWR8ZmxvYXR8Zm9yfGZvcmVhY2h8Z290b3xpZnxpbXBsaWNpdHxpbnxpbnR8aW50ZXJmYWNlfGludGVybmFsfGxvY2t8bG9uZ3xuYW1lc3BhY2V8bnVsbHxvYmplY3R8b3BlcmF0b3J8b3V0fG92ZXJyaWRlfHBhcmFtc3xwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmVhZG9ubHl8cmVmfHJldHVybnxzYnl0ZXxzZWFsZWR8c2hvcnR8c3RhY2thbGxvY3xzdGF0aWN8c3RyaW5nfHN0cnVjdHxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dWludHx1bG9uZ3x1bnNhZmV8dXNob3J0fHVzaW5nfHZpcnR1YWx8dm9pZHx2b2xhdGlsZXx3aGlsZSlcXGIvO1xuXG4vKipcbiAqIE51bWJlcnNcbiAqL1xuXG5jc2hhcnAubnVtYmVyID0gL1xcYlstK10/KDB4W1xcZGEtZl0rfFxcZCpcXC4/XFxkKyhlLT9cXGQrKT8pXFxiLztcblxuLyoqXG4gKiBNZXRob2RcbiAqL1xuXG5jc2hhcnAubWV0aG9kID0gLyhcXHcrKSAqXFwoLztcbmNzaGFycC5tZXRob2QuY2hpbGRyZW4gPSB7IHB1bmN0dWF0aW9uOiAvXFwoLyB9O1xuXG4vKipcbiAqIE9wZXJhdG9yc1xuICovXG5cbmNzaGFycC5vcGVyYXRvciA9IC8oYXdhaXR8YXN8aXN8bmV3fHR5cGVvZnxjaGVja2VkfHVuY2hlY2tlZHxkZWZhdWx0fGRlbGVnYXRlfHNpemVvZnwtPnxbLStdezEsMn18IXwmbHQ7PT98Pj0/fD17MSwzfXwmbHQ7ezEsMn18PnsxLDJ9fCgmYW1wOyl7MSwyfXxcXHx7MSwyfXxcXD98XFwqfFxcL3xcXH58XFxefFxcJSkvO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxuY3NoYXJwLnB1bmN0dWF0aW9uID0gL1t7fVtcXF07KCksLjpdLzsiLCJcbi8qKlxuICogRXhwb3NlIGBweXRob25gXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBweXRob247XG5cbi8qKlxuICogQWRkIGBweXRob25gIGFzIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBweXRob24oaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdweXRob24nLCBweXRob24pO1xufVxuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxucHl0aG9uLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoIy4qPyQpL207XG5cbi8qKlxuICogU3RyaW5nc1xuICovXG5cbnB5dGhvbi5zdHJpbmcgPSAvKChcIlwiXCJ8XCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogQm9vbGVhbnNcbiAqL1xuXG5weXRob24uYm9vbGVhbiA9IC9cXGIoVHJ1ZXxGYWxzZSlcXGIvO1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxucHl0aG9uLmtleXdvcmQgPSAvXFxiKGFuZHxhc3xhc3NlcnR8YnJlYWt8Y2xhc3N8Y29udGludWV8ZGVmfGRlbHxlbGlmfGVsc2V8ZXhjZXB0fGV4ZWN8ZmluYWxseXxmb3J8ZnJvbXxnbG9iYWx8aWZ8aW1wb3J0fGlufGlzfGxhbWJkYXxub3R8b3J8cGFzc3xwcmludHxyYWlzZXxyZXR1cm58dHJ5fHdoaWxlfHdpdGh8eWllbGQpXFxiLztcblxuXG4vKipcbiAqIENsYXNzZXNcbiAqL1xuXG5weXRob24uY2xhc3MgPSAvY2xhc3MgKyhcXHcrKS87XG5weXRob24uY2xhc3MuY2hpbGRyZW4gPSB7IGtleXdvcmQ6IC9jbGFzcy8gfTtcblxuLyoqXG4gKiBGdW5jdGlvbnNcbiAqL1xuXG5weXRob24uZnVuY3Rpb24gPSAvKFxcdyspICpcXCgvO1xucHl0aG9uLmZ1bmN0aW9uLmNoaWxkcmVuID0geyBwdW5jdHVhdGlvbjogL1xcKC8gfTtcbi8qKlxuICogTnVtYmVyc1xuICovXG5cbnB5dGhvbi5udW1iZXIgPSAvXFxiWy0rXT8oMHhbYS1mQS1GMC05XSt8MGJbMC0xXSt8MFswLTddK3xbMS05XVswLTldKilcXGIvO1xuXG4vKipcbiAqIE9wZXJhdG9yc1xuICovXG5cbnB5dGhvbi5vcGVyYXRvciA9IC8oWy0rXXsxLDJ9fCF8Jmx0Oz0/fD49P3w9ezEsM318Jmx0O3sxLDJ9fD57MSwyfXwoJmFtcDspezEsMn18XFx8ezEsMn18XFw/fFxcKnxcXC98XFx+fFxcXnxcXCV8XFwqXFwqPz0pLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvblxuICovXG5cbnB5dGhvbi5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC46XS87IiwiXG4vKipcbiAqIEV4cG9zZSBgamF2YWBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGphdmE7XG5cbi8qKlxuICogQWRkIGBqYXZhYCBhcyBhIGxhbmd1YWdlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gamF2YShoaWdobGlnaHQpe1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ2phdmEnLCBqYXZhKTtcbn1cblxuLyoqXG4gKiBCb29sZWFuXG4gKi9cblxuamF2YS5ib29sZWFuID0gL1xcYih0cnVlfGZhbHNlKVxcYi87XG5cbi8qKlxuICogQ29tbWVudFxuICovXG5cbmphdmEuY29tbWVudCA9IC8oPyFcXFxcezJ9KShcXC9cXCpbXFx3XFxXXSo/XFwqXFwvfFxcL1xcLy4qPyQpL207XG5cbi8qKlxuICogQ2xhc3NcbiAqL1xuXG5qYXZhLmNsYXNzID0gL2NsYXNzICsoXFx3KykvO1xuamF2YS5jbGFzcy5jaGlsZHJlbiA9IHsga2V5d29yZDogL2NsYXNzLyB9O1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxuamF2YS5rZXl3b3JkID0gL1xcYihhYnN0cmFjdHxhc3NlcnR8Ym9vbGVhbnxicmVha3xieXRlfGNhc2V8Y2F0Y2h8Y2hhcnxjbGFzc3xjb25zdHxjb250aW51ZXxkZWZhdWx0fGRvfGRvdWJsZXxlbHNlfGVudW18ZXh0ZW5kc3xmaW5hbHxmaW5hbGx5fGZsb2F0fGZvcnxnb3RvfGlmfGltcGxlbWVudHN8aW1wb3J0fGluc3RhbmNlb2Z8aW50fGludGVyZmFjZXxsb25nfG5hdGl2ZXxuZXd8cGFja2FnZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzdGF0aWN8c3RhdGljZnB8c3VwZXJ8c3dpdGNofHN5bmNocm9uaXplZHx0aGlzfHRocm93fHRocm93c3x0cmFuc2llbnR8dHJ5fHZvaWR8dm9sYXRpbGV8d2hpbGUpXFxiLztcblxuLyoqXG4gKiBOdW1iZXJcbiAqL1xuXG5qYXZhLm51bWJlciA9IC9cXGJbLStdPygwW2J4XVtcXGRhLWZdK3xcXGQqXFwuP1xcZCsoZS0/XFxkKyk/KVxcYi87XG5cbi8qKlxuICogU3RyaW5nXG4gKi9cblxuamF2YS5zdHJpbmcgPSAvKFwiKFxcXFw/LikqP1wiKS87XG5cbi8qKlxuICogTWV0aG9kXG4gKi9cblxuamF2YS5tZXRob2QgPSAvKFxcdyspICpcXCgvO1xuamF2YS5tZXRob2QuY2hpbGRyZW4gPSB7IHB1bmN0dWF0aW9uOiAvXFwoLyB9O1xuXG4vKipcbiAqIE9wZXJhdG9yXG4gKi9cblxuamF2YS5vcGVyYXRvciA9IC8oWy0rXXsxLDJ9fCF8Jmx0Oz0/fD49P3w9ezEsM318Jmx0O3sxLDJ9fD57MSwyfXwoJmFtcDspezEsMn18XFx8ezEsMn18XFw/fFxcKnxcXC98XFx+fFxcXnxcXCUpLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvblxuICovXG5cbmphdmEucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuOl0vOyIsIlxuLyoqXG4gKiBFeHBvc2UgYGJhc2hgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNoO1xuXG4vKipcbiAqIEFkZCBgYmFzaGAgYXMgYSBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGJhc2goaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdzaCcsIGJhc2gpO1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ2Jhc2gnLCBiYXNoKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdzaGVsbHNjcmlwdCcsIGJhc2gpO1xufVxuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxuYmFzaC5jb21tZW50ID0gLygjLio/JCkvbVxuXG4vKipcbiAqIFN0cmluZ3NcbiAqL1xuXG5iYXNoLnN0cmluZyA9IC8oKFwifCcpKFxcXFw/LikqP1xcMikvO1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxuYmFzaC5rZXl3b3JkID0gL1xcYihpZnx0aGVufGVsc2V8ZWxpZnxmaXxmb3J8aW58ZG98ZG9uZXxzZWxlY3R8Y2FzZXxjb250aW51ZXxlc2FjfHdoaWxlfHVudGlsfHJldHVybnxleHBvcnR8ZGVjbGFyZXx0eXBlc2V0fGxvY2FsfHJlYWRvbmx5KVxcYi87XG5cbi8qKlxuICogT3BlcmF0b3JzXG4gKi9cblxuYmFzaC5vcGVyYXRvciA9IC8oO3wmJj98XFx8XFx8fD1bPX5dP3whPT98Jmx0O3wmZ3Q7fFxcfCkvO1xuXG4vKipcbiAqIEJ1aWx0aW5zXG4gKi9cblxuYmFzaC5idWlsdGluID0gL1xcYihhbGlhc3xiZ3xiaW5kfGJyZWFrfGJ1aWx0aW58Y2FsbGVyfGNkfGNvbW1hbmR8Y29tcGdlbnxjb21wbGV0ZXxkaXJzfGRpc293bnxlY2hvfGVuYWJsZXxldmFsfGV4ZWN8ZXhpdHxmYWxzZXxmY3xmZ3xnZXRvcHRzfGhhc2h8aGVscHxoaXN0b3J5fGpvYnN8a2lsbHxsZXR8bG9nb3V0fHBvcGR8cHJpbnRmfHB1c2hkfHB3ZHxyZWFkfHJlYWRvbmx5fHNldHxzaGlmdHxzaG9wdHxzb3VyY2V8c3VzcGVuZHx0ZXN0fHRpbWVzfHRyYXB8dHJ1ZXx0eXBlfHVsaW1pdHx1bWFza3x1bmFsaWFzfHVuc2V0fHdhaXQpXFxiLzsiLCJcbi8qKlxuICogRXhwb3NlIGBydWJ5YFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcnVieTtcblxuLyoqXG4gKiBBZGQgYHJ1YnlgIGFzIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBydWJ5KGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgncnVieScsIHJ1YnkpO1xufVxuXG4vKipcbiAqIEJvb2xlYW5zXG4gKi9cblxucnVieS5ib29sZWFuID0gL1xcYih0cnVlfGZhbHNlKVxcYi87XG5cbi8qKlxuICogU3RyaW5nc1xuICovXG5cbnJ1Ynkuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogQ29tbWVudHNcbiAqL1xuXG5ydWJ5LmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoIy4qPyQpL207XG5cbi8qKlxuICogQ2xhc3Nlc1xuICovXG5cbnJ1YnkuY2xhc3MgPSAvY2xhc3MgKyhcXHcrKS87XG5ydWJ5LmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvY2xhc3MvIH07XG5cbi8qKlxuICogS2V5d29yZHNcbiAqL1xuXG5ydWJ5LmtleXdvcmQgPSAvXFxiKGFsaWFzfGFuZHxiZWdpbnxicmVha3xjYXNlfGNhdGNofGNsYXNzfGRlZnxkb3xlbHNpZnxlbHNlfGZhaWx8ZW5zdXJlfGZvcnxlbmR8aWZ8aW58bW9kdWxlfG5leHR8bm90fG9yfHJhaXNlfHJlZG98cmVzY3VlfHJldHJ5fHJldHVybnx0aGVufHRocm93fHN1cGVyfHVubGVzc3x1bmRlZnx1bnRpbHx3aGVufHdoaWxlfHlpZWxkKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbnJ1YnkubnVtYmVyID0gL1xcYlstK10/KDB4W2EtZkEtRjAtOV0rfDBiWzAtMV9dK3wwWzAtN10qfFsxLTldWzAtOV9lRS5dKilcXGIvO1xuXG4vKipcbiAqIEZ1bmN0aW9uc1xuICovXG5cbnJ1YnkuZnVuY3Rpb24gPSAvKFxcdyspICpcXCgvO1xucnVieS5mdW5jdGlvbi5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG5cbi8qKlxuICogT3BlcmF0b3JcbiAqL1xuXG5ydWJ5Lm9wZXJhdG9yID0gLyhbLStdezEsMn18IXwmbHQ7PT98Pj0/fD17MSwzfXwmbHQ7ezEsMn18PnsxLDJ9fCgmYW1wOyl7MSwyfXxcXHx7MSwyfXxcXD98XFwqfFxcL3xcXH58XFxefFxcJSkvO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxucnVieS5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC46XS87XG4iLCJcbi8qKlxuICogRXhwb3NlIGB5YW1sYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0geWFtbDtcblxuLyoqXG4gKiBBZGQgYHlhbWxgIGFzIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiB5YW1sKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgneW1sJywgeWFtbCk7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgneWFtbCcsIHlhbWwpO1xufVxuXG4vKipcbiAqIEJvb2xlYW5cbiAqL1xuXG55YW1sLmJvb2xlYW4gPSAvXFxiKFllc3xObylcXGIvO1xuXG4vKipcbiAqIE51bWJlcnNcbiAqL1xuXG55YW1sLm51bWJlciA9IC9cXGIoXFxkKlxcLlxcZCspXFxiLztcblxuLyoqXG4gKiBDb21tZW50c1xuICovXG5cbnlhbWwuY29tbWVudCA9IC8oI1teXFxuXSopLztcblxuLyoqXG4gKiBLZXl3b3Jkc1xuICovXG5cbnlhbWwua2V5d29yZCA9IC8oXFx3Kyk6LztcbnlhbWwua2V5d29yZC5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC86LyB9O1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxueWFtbC5wdW5jdHVhdGlvbiA9IC8oWzp8Pj9dKS87XG5cbi8qKlxuICogU3RyaW5nc1xuICovXG5cbnlhbWwuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG4iLCJcbi8qKlxuICogRXhwb3NlIGBwbHVnaW5gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGx1Z2luO1xuXG4vKipcbiAqIFBsdWdpbiB0byBoaWdobGlnaHQgWE1MIGNvZGUuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICovXG5cbmZ1bmN0aW9uIHBsdWdpbihoaWdobGlnaHQpe1xuICBoaWdobGlnaHRcbiAgICAubGFuZ3VhZ2UoJ3htbCcsIGdyYW1tYXIpXG4gICAgLmxhbmd1YWdlKCdodG1sJywgZ3JhbW1hcik7XG59XG5cbi8qKlxuICogR3JhbW1hci5cbiAqL1xuXG52YXIgZ3JhbW1hciA9IHt9O1xuXG4vKipcbiAqIENvbW1lbnRzLlxuICovXG5cbmdyYW1tYXIuY29tbWVudCA9IC88IS0tW1xcd1xcV10qPy0tPi9tO1xuXG4vKipcbiAqIEVudGl0aWVzLlxuICovXG5cbmdyYW1tYXIuZW50aXR5ID0gLyYjP1tcXGRBLVphLXpdezEsOH07LztcblxuLyoqXG4gKiBEb2N0eXBlcy5cbiAqL1xuXG5ncmFtbWFyLmRvY3R5cGUgPSAvPCFET0NUWVBFLis/Pi9pO1xuXG4vKipcbiAqIENEQVRBLlxuICovXG5cbmdyYW1tYXIuY2RhdGEgPSAvPCFcXFtDREFUQVxcW1tcXHdcXFddKj9dXT4vaTtcblxuLyoqXG4gKiBQcm9sb2dzLlxuICovXG5cbmdyYW1tYXIucHJvbG9nID0gLzxcXD8uKz9cXD8+LztcblxuLyoqXG4gKiBUYWdzLiBDaGlsZHJlbiBkZWNsYXJlZCBzZXBhcmF0ZWx5IHRvIG1haW50YWluIG9yZGVyLlxuICovXG5cbnZhciBjaGlsZHJlbiA9IHtcbiAgc3RyaW5nOiAvKCd8XCIpW1xcd1xcV10qP1xcMS8sXG4gIHB1bmN0dWF0aW9uOiAvKF48XFwvP3xcXC8/PiR8PSkvLFxuICBuYW1lOiAvXltcXHc6LV0rLyxcbiAgYXR0cmlidXRlOiAvW1xcdzotXSsvXG59O1xuXG5ncmFtbWFyLnRhZyA9IHtcbiAgcGF0dGVybjogLzxcXC8/W1xcdzotXStcXHMqKFxccytbXFx3Oi1dKyg9KChcInwnKVtcXHdcXFddKlxcNHxbXlxccydcIj49XSspKT9cXHMqKSpcXC8/Pi8sXG4gIGNoaWxkcmVuOiBjaGlsZHJlblxufTsiLCJcbi8qKlxuICogRXhwb3NlIGBwaHBgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwaHA7XG5cbi8qKlxuICogQWRkIGBwaHBgIGFzIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwaHAoaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdwaHAnLCBwaHApO1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ1BIUCcsIHBocCk7XG59XG5cbi8qKlxuICogQm9vbGVhbnNcbiAqL1xuXG5waHAuYm9vbGVhbiA9IC9cXGIodHJ1ZXxmYWxzZSlcXGIvO1xuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxucGhwLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoXFwvXFwqW1xcd1xcV10qP1xcKlxcL3xcXC9cXC8uKj8kfCMuKj8kKS9tO1xuXG4vKipcbiAqIENsYXNzZXNcbiAqL1xuXG5waHAuY2xhc3MgPSAvY2xhc3MgKyhcXHcrKS87XG5waHAuY2xhc3MuY2hpbGRyZW4gPSB7IGtleXdvcmQ6IC9jbGFzcy8gfTtcblxuLyoqXG4gKiBLZXl3b3Jkc1xuICovXG5cbnBocC5rZXl3b3JkID0gL1xcYihfX2hhbHRfY29tcGlsZXJ8YWJzdHJhY3R8YW5kfGFycmF5fGFzfGJyZWFrfGNhbGxhYmxlfGNhc2V8Y2F0Y2h8Y2xhc3N8Y2xvbmV8Y29uc3R8Y29udGludWV8ZGVjbGFyZXxkZWZhdWx0fGRpZXxkb3xlY2hvfGVsc2V8ZWxzZWlmfGVtcHR5fGVuZGRlY2xhcmV8ZW5kZm9yfGVuZGZvcmVhY2h8ZW5kaWZ8ZW5kc3dpdGNofGVuZHdoaWxlfGV2YWx8ZXhpdHxleHRlbmRzfGZpbmFsfGZpbmFsbHl8Zm9yfGZvcmVhY2h8ZnVuY3Rpb258Z2xvYmFsfGdvdG98aWZ8aW1wbGVtZW50c3xpbmNsdWRlfGluY2x1ZGVfb25jZXxpbnN0YW5jZW9mfGluc3RlYWRvZnxpbnRlcmZhY2V8aXNzZXR8bGlzdHxuYW1lc3BhY2V8bmV3fG9yfHByaW50fHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXF1aXJlfHJlcXVpcmVfb25jZXxyZXR1cm58c3RhdGljfHN3aXRjaHx0aHJvd3x0cmFpdHx0cnl8dW5zZXR8dXNlfHZhcnx3aGlsZXx4b3J8eWllbGQpXFxiLztcblxuLyoqXG4gKiBOdW1iZXJzXG4gKi9cblxucGhwLm51bWJlciA9IC9cXGJbLStdPygweFswLTlhLWZBLUZdfDBbMC03XSt8MGJbMDFdK3xbMS05XVswLTldKilcXGIvO1xuXG4vKipcbiAqIFN0cmluZ1xuICovXG5cbnBocC5zdHJpbmcgPSAvKChcInwnKShcXFxcPy4pKj9cXDIpLztcblxuLyoqXG4gKiBGdW5jdGlvbnNcbiAqL1xuXG5waHAuZnVuY3Rpb24gPSAvKFxcdyspICpcXCgvO1xucGhwLmZ1bmN0aW9uLmNoaWxkcmVuID0geyBwdW5jdHVhdGlvbjogL1xcKC8gfTtcblxuLyoqXG4gKiBPcGVyYXRvcnNcbiAqL1xuXG5waHAub3BlcmF0b3IgPSAvKFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb25cbiAqL1xuXG5waHAucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuXS87IiwiXG4vKipcbiAqIEV4cG9zZSBgcGx1Z2luYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpbjtcblxuLyoqXG4gKiBQbHVnaW4gdG8gaGlnaGxpZ2h0IENTUyBjb2RlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqL1xuXG5mdW5jdGlvbiBwbHVnaW4oaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdjc3MnLCBncmFtbWFyKTtcbn1cblxuLyoqXG4gKiBHcmFtbWFyLlxuICovXG5cbnZhciBncmFtbWFyID0ge307XG5cbi8qKlxuICogQ29tbWVudHMuXG4gKi9cblxuZ3JhbW1hci5jb21tZW50ID0gL1xcL1xcKltcXHdcXFddKj9cXCpcXC8vbTtcblxuLyoqXG4gKiBTdHJpbmdzLlxuICovXG5cbmdyYW1tYXIuc3RyaW5nID0gLyhcInwnKS4qP1xcMS87XG5cbi8qKlxuICogQC1ydWxlcy5cbiAqL1xuXG5ncmFtbWFyWydhdC1ydWxlJ10gPSAvQFtcXHctXStcXGIvO1xuXG4vKipcbiAqIFNlbGVjdG9ycy5cbiAqL1xuXG5ncmFtbWFyLnNlbGVjdG9yID0ge1xuICBwYXR0ZXJuOiAvW15cXHtcXH1cXHNdW15cXHtcXH07XSo/XFx7LyxcbiAgY2hpbGRyZW46IHtcbiAgICBjbGFzczogL1xcLlstLlxcd10rLyxcbiAgICBpZDogLyNbLVxcd10rLyxcbiAgICAncHNldWRvLWVsZW1lbnQnOiAvOihhZnRlcnxiZWZvcmV8Zmlyc3QtbGV0dGVyfGZpcnN0LWxpbmV8c2VsZWN0aW9uKXw6OlstXFx3XSsvLFxuICAgICdwc2V1ZG8tY2xhc3MnOiAvOlstXFx3XSsoXFwoLipcXCkpPy8sXG4gICAgcHVuY3R1YXRpb246IC9cXHsvXG4gIH1cbn07XG5cbi8qKlxuICogRnVuY3Rpb25zLlxuICovXG5cbmdyYW1tYXIuZnVuY3Rpb24gPSB7XG4gIHBhdHRlcm46IC9bXFx3LV0rXFwoLyxcbiAgY2hpbGRyZW46IHtcbiAgICBwdW5jdHVhdGlvbjogL1xcKC9cbiAgfVxufTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzLlxuICovXG5cbmdyYW1tYXIucHJvcGVydHkgPSAvW1xcdy1dKyg/PVxccyo6KS87XG5cbi8qKlxuICogS2V5d29yZHMuXG4gKi9cblxuZ3JhbW1hci5rZXl3b3JkID0gL1tcXGJ8IV1pbXBvcnRhbnR8aW5pdGlhbHxpbmhlcml0fG5vbmV8dHJhbnNwYXJlbnRcXGIvO1xuXG4vKipcbiAqIE51bWJlcnMuXG4gKi9cblxuZ3JhbW1hci5udW1iZXIgPSAvKCNbQS1GYS1mXFxkXXszLDh9fFxcYlxcZCpcXC4/XFxkKykvO1xuXG4vKipcbiAqIE9wZXJhdG9ycy5cbiAqL1xuXG5ncmFtbWFyLm9wZXJhdG9yID0gL1stK1xcLyolXl0vO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uLlxuICovXG5cbmdyYW1tYXIucHVuY3R1YXRpb24gPSAvW3t9KCksOjtdLztcblxuLyoqXG4gKiBDb25zdGFudC5cbiAqL1xuXG5ncmFtbWFyLmNvbnN0YW50ID0gLyg/IVxcZCkoY2h8Y218ZGVnfGRwY218ZHBpfGRwcHh8ZW18ZXh8Z3JhZHxIenxrSHp8aW58bW18cGN8cHR8cHh8cmFkfHJlbXxzfG1zfHR1cm58dmh8dm1heHx2bWlufHZ3KVxcYi87XG4iLCJcbi8qKlxuICogRXhwb3NlIGBwbHVnaW5gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGx1Z2luO1xuXG4vKipcbiAqIFBsdWdpbiB0byBoaWdobGlnaHQgZ28gY29kZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKi9cblxuZnVuY3Rpb24gcGx1Z2luKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnZ28nLCBncmFtbWFyKTtcbn1cblxuLyoqXG4gKiBHcmFtbWFyLlxuICovXG5cbnZhciBncmFtbWFyID0ge307XG5cbi8qKlxuICogU3RyaW5ncy5cbiAqL1xuXG5ncmFtbWFyLnN0cmluZyA9IC8oKFwifCcpKFxcXFw/LikqP1xcMikvO1xuXG4vKipcbiAqIENvbW1lbnRzLlxuICovXG5cbmdyYW1tYXIuY29tbWVudCA9IC8oPyFcXFxcezJ9KShcXC9cXCpbXFx3XFxXXSo/XFwqXFwvfFxcL1xcLy4qPyQpL207XG5cbi8qKlxuICogQm9vbGVhbnMuXG4gKi9cblxuZ3JhbW1hci5ib29sZWFuID0gL1xcYih0cnVlfGZhbHNlKVxcYi87XG5cbi8qKlxuICogS2V5d29yZHMuXG4gKi9cblxuZ3JhbW1hci5rZXl3b3JkID0gL1xcYihicmVha3xkZWZhdWx0fGZ1bmN8aW50ZXJmYWNlfHNlbGVjdHxjYXNlfGRlZmVyfGdvfG1hcHxzdHJ1Y3R8Y2hhbn1lbHNlfWdvdG99cGFja2FnZXxzd2l0Y2h8Y29uc3R8ZmFsbHRocm91Z2h8aWZ8cmFuZ2V8dHlwZXxjb250aW51ZXxmb3J8aW1wb3J0fHJldHVybnx2YXIpXFxiLztcblxuLyoqXG4gKiBGdW5jdGlvbnMuXG4gKlxuICogQ2hpbGRyZW4gYXJlIHNldCBzZXBhcmF0ZWx5IHRvIG1haW50YWluIG9yZGVyaW5nLlxuICovXG5cbmdyYW1tYXIuZnVuY3Rpb24gPSB7XG4gIHBhdHRlcm46IC8oXFx3KylcXCgvLFxuICBjaGlsZHJlbjoge31cbn07XG5cbmdyYW1tYXIuZnVuY3Rpb24uY2hpbGRyZW4uY2xhc3MgPSAvXFxiKFtBLVpdXFx3KilcXGIvO1xuZ3JhbW1hci5mdW5jdGlvbi5jaGlsZHJlbi5mdW5jdGlvbiA9IC8oXFx3KykvO1xuZ3JhbW1hci5mdW5jdGlvbi5jaGlsZHJlbi5wdW5jdHVhdGlvbiA9IC9cXCgvO1xuXG4vKipcbiAqIE51bWJlcnMuXG4gKi9cblxuZ3JhbW1hci5udW1iZXIgPSAvXFxiLT8oMHhbXFxkQS1GYS1mXSt8XFxkKlxcLj9cXGQrKFtFZV0tP1xcZCspP3xOYU58LT9JbmZpbml0eSlcXGIvO1xuXG4vKipcbiAqIE9wZXJhdG9ycy5cbiAqL1xuXG5ncmFtbWFyLm9wZXJhdG9yID0gLyhbLStdezEsMn18IXwmbHQ7PT98Pj0/fD17MSwzfXwmbHQ7ezEsMn18PnsxLDJ9fCgmYW1wOyl7MSwyfXxcXHx7MSwyfXxcXD98XFwqfFxcL3xcXH58XFxefFxcJSkvO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uLlxuICovXG5cbmdyYW1tYXIucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuOl0vOyIsImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IFRleHRGaWVsZEV4YW1wbGUgZnJvbSAnLi90ZXh0LWZpZWxkJztcbmltcG9ydCBCdXR0b25FeGFtcGxlIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBUYWJsZUV4YW1wbGUgZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQgQ29kZUV4YW1wbGUgZnJvbSAnLi9jb2RlJztcbmltcG9ydCBNZW51RXhhbXBsZSBmcm9tICcuL21lbnUnO1xuXG4vKipcbiAqIEV4YW1wbGVzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQ29kZToge1xuICAgIGNvbXBvbmVudDogPENvZGVFeGFtcGxlLz4sXG4gICAgY29kZTogJzxDb2RlIGxhbmd1YWdlPVxcJ2phdmFzY3JpcHRcXCc+XFxue1xcYFxcbnZhciBHaXQgPSByZXF1aXJlKFxcJ2dpdHlcXCcpO1xcblxcbnZhciBnaXQgPSBHaXQoKVxcbiAgLmFkZChcXCcqLmpzXFwnKVxcbiAgLmNvbW1pdChcXCctbSBcXFwiYWRkZWQganMgZmlsZXNcXFwiXFwnKVxcbiAgLnJ1bigpO1xcblxcYH1cXG48L0NvZGU+J1xuICB9LFxuICBUYWJsZToge1xuICAgIGNvbXBvbmVudDogPFRhYmxlRXhhbXBsZS8+LFxuICAgIGNvZGU6IFwibGV0IHBlb3BsZSA9IFtcXG4gIFsnRnVsbCBOYW1lJywgJ0FnZSddLFxcbiAgWydTdGV2ZW4gTWlsbGVyJywgJzI1J10sXFxuICBbJ1RhbWFyYSBKb3JkYW4nLCAnMjMnXSxcXG4gIFsnSm9obiBTbWl0aCcsICcyOCddXFxuXTtcXG5cXG48VGFibGUgcm93cz17IHBlb3BsZSB9IC8+XCJcbiAgfSxcbiAgTWVudToge1xuICAgIGNvbXBvbmVudDogPE1lbnVFeGFtcGxlLz4sXG4gICAgY29kZTogXCJsZXQgc2VjdGlvbnMgPSBbJ0hvbWUnLCAnUHJvZmlsZScsICdNZXNzYWdlcycsICdOb3RpZmljYXRpb25zJ107XFxuXFxuPE1lbnUgb25DaGFuZ2U9eyBjaGFuZ2UgfSBpdGVtcz17IHNlY3Rpb25zIH0gLz5cIlxuICB9LFxuICBUZXh0RmllbGQ6IHtcbiAgICBjb21wb25lbnQ6IDxUZXh0RmllbGRFeGFtcGxlLz4sXG4gICAgY29kZTogXCI8VGV4dEZpZWxkIHBsYWNlaG9sZGVyPSdlLmcuIFN0ZXZlbiBNaWxsZXInLz5cIlxuICB9LFxuICBCdXR0b246IHtcbiAgICBjb21wb25lbnQ6IDxCdXR0b25FeGFtcGxlLz4sXG4gICAgY29kZTogXCI8QnV0dG9uIGxhYmVsPSdMYXJnZScgc2l6ZT0nbGFyZ2UnIHR5cGU9J3ByaW1hcnknLz5cXG48QnV0dG9uIGxhYmVsPSdNZWRpdW0nIHNpemU9J21lZGl1bScgdHlwZT0ncHJpbWFyeScvPlxcbjxCdXR0b24gbGFiZWw9J1NtYWxsJyBzaXplPSdzbWFsbCcgdHlwZT0ncHJpbWFyeScvPlxcblxcbjxCdXR0b24gbGFiZWw9J1ByaW1hcnknIHNpemU9J21lZGl1bScgdHlwZT0ncHJpbWFyeScvPlxcbjxCdXR0b24gbGFiZWw9J1NlY29uZGFyeScgc2l6ZT0nbWVkaXVtJyB0eXBlPSdzZWNvbmRhcnknLz5cXG48QnV0dG9uIGxhYmVsPSdEYW5nZXInIHNpemU9J21lZGl1bScgdHlwZT0nZGFuZ2VyJy8+XCJcbiAgfVxufTtcbiIsImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnL2xpYic7XG5cbi8qKlxuICogVGV4dEZpZWxkIGV4YW1wbGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxUZXh0RmllbGQgcGxhY2Vob2xkZXI9J2UuZy4gU3RldmVuIE1pbGxlcicvPjtcbiAgfVxufTtcbiIsImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnL2xpYic7XG5cbi8qKlxuICogQnV0dG9uIGV4YW1wbGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6N3B4O1wiPlxuICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD0nTGFyZ2UnIHNpemU9J2xhcmdlJyB0eXBlPSdwcmltYXJ5Jy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6N3B4O1wiPlxuICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD0nTWVkaXVtJyBzaXplPSdtZWRpdW0nIHR5cGU9J3ByaW1hcnknLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDo3cHg7XCI+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPSdTbWFsbCcgc2l6ZT0nc21hbGwnIHR5cGU9J3ByaW1hcnknLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9J21hcmdpbi10b3A6NDBweDsnPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOjdweDtcIj5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9J1ByaW1hcnknIHNpemU9J21lZGl1bScgdHlwZT0ncHJpbWFyeScvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOjdweDtcIj5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9J1NlY29uZGFyeScgc2l6ZT0nbWVkaXVtJyB0eXBlPSdzZWNvbmRhcnknLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDo3cHg7XCI+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPSdXYXJuaW5nJyBzaXplPSdtZWRpdW0nIHR5cGU9J3dhcm5pbmcnLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJy9saWInO1xuXG4vKipcbiAqIFRhYmxlIGV4YW1wbGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHBlb3BsZSA9IFtcbiAgICAgIFsnRnVsbCBOYW1lJywgJ0FnZSddLFxuICAgICAgWydTdGV2ZW4gTWlsbGVyJywgJzI1J10sXG4gICAgICBbJ1RhbWFyYSBKb3JkYW4nLCAnMjMnXSxcbiAgICAgIFsnSm9obiBTbWl0aCcsICcyOCddXG4gICAgXTtcblxuICAgIHJldHVybiA8VGFibGUgcm93cz17IHBlb3BsZSB9Lz5cbiAgfVxufTtcbiIsImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuaW1wb3J0IHsgQ29kZSB9IGZyb20gJy9saWInO1xuXG4vKipcbiAqIENvZGUgZXhhbXBsZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvZGUgbGFuZ3VhZ2U9J2phdmFzY3JpcHQnPlxuICB7YFxuICB2YXIgR2l0ID0gcmVxdWlyZSgnZ2l0eScpO1xuXG4gIHZhciBnaXQgPSBHaXQoKVxuICAgIC5hZGQoJyouanMnKVxuICAgIC5jb21taXQoJy1tIFwiYWRkZWQganMgZmlsZXNcIicpXG4gICAgLnJ1bigpO1xuICBgfVxuICAgICAgICA8L0NvZGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnZGVrdWpzL3ZpcnR1YWwtZWxlbWVudCc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnL2xpYic7XG5cbi8qKlxuICogTWVudSBleGFtcGxlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWN0aW9ucyA9IFsnSG9tZScsICdQcm9maWxlJywgJ01lc3NhZ2VzJywgJ05vdGlmaWNhdGlvbnMnXTtcblxuICAgIHJldHVybiA8TWVudSBpdGVtcz17IHNlY3Rpb25zIH0gb25DaGFuZ2U9eyBjaGFuZ2UgfS8+XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2UoaXRlbSkge1xuICAgICAgLy8gLi4uXG4gICAgfVxuICB9XG59O1xuIl19