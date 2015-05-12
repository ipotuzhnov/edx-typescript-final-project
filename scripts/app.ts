/// <reference path="typings/jquery.d.ts"/>

import $ = require('jquery');

/**
 * Painters gallery class.
 */
class PaintersGallery {
  name: string;
  age: number;
}

$(document).ready(() => {
  document.body.innerHTML = "Hello! It's Painters Gallery!"
});

(() => {
  var gallery = new PaintersGallery();
  return "hello world!!!";
})()
