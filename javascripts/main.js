$(document).ready(function(){
  data = {
    "title": "JavaScript Templates",
    "license": {
      "name": "MIT license",
      "url": "http://www.opensource.org/licenses/MIT"
    },
    "features": [
      "lightweight & fast",
      "powerful",
      "zero dependencies"
    ]
  };
  debugger
  $('.result').html(window.tmpl("tmpl-demo", data));
})