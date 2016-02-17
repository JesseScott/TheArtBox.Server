module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class IndexController extends Nodal.Controller {

    get() {

      this.render(
        Nodal.Template.generate('layout.html', 'index.html').render(
          this.params,
          {
            test: this.params.query.test,
            name: 'tab Application'
          }
        )
      );

    }

  }

  return IndexController;

})();
