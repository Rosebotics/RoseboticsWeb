'use strict';

angular.module('TeamApp', [ 'TeamControllers', 'TeamServices' ])
.run(function() {
  angular.element(document.querySelectorAll(".hidden.container")).removeClass("hidden");
  angular.element(document.querySelector("div.spinner")).addClass("hidden");
});
