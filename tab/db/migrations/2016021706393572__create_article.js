module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateArticle extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016021706393572;
    }

    up() {

      return [
        this.createTable("articles", [{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"subtitle","type":"string"},{"name":"body","type":"string"},{"name":"featured","type":"boolean"}])
      ];

    }

    down() {

      return [
        this.dropTable("articles")
      ];

    }

  }

  return CreateArticle;

})();
