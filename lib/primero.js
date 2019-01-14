"use strict";

System.register(["@babel/runtime-corejs2/regenerator", "@babel/runtime-corejs2/helpers/asyncToGenerator", "./segundo.js"], function (_export, _context) {
  "use strict";

  var _regeneratorRuntime, _asyncToGenerator, otro;

  function pp() {
    return _pp.apply(this, arguments);
  }

  function _pp() {
    _pp = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('dentro de pp');

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee, this);
    }));
    return _pp.apply(this, arguments);
  }

  return {
    setters: [function (_babelRuntimeCorejs2Regenerator) {
      _regeneratorRuntime = _babelRuntimeCorejs2Regenerator.default;
    }, function (_babelRuntimeCorejs2HelpersAsyncToGenerator) {
      _asyncToGenerator = _babelRuntimeCorejs2HelpersAsyncToGenerator.default;
    }, function (_segundoJs) {
      otro = _segundoJs.otro;
    }],
    execute: function () {
      console.log('primero');
      console.log('otro -> ', otro);
      pp();
    }
  };
});