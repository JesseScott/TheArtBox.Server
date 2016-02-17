module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Article extends Nodal.Model {}

  Article.setDatabase(Nodal.require('db/main.js'));
  Article.setSchema(Nodal.my.Schema.models.Article);

  Article.validates('title', 'must be at least 4 characters', v => v && v.length > 4);

  return Article;

})();
