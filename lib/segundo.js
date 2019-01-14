"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var otro;
  return {
    setters: [],
    execute: function () {
      console.log('segundo');

      _export("otro", otro = 'segundo');
    }
  };
});