(function () {
    "use strict";
    var EXT_NAME = "XCockpit", hidden_class = 'hiddenhidden';
    var _hide = function (node) {
        node.classList.add(hidden_class);
    };
    var _toggle = function (e) {
        var node = e.target || e.srcElement;
        node.classList.toggle(hidden_class);
    };
    window.addEventListener("load", function () {
        // WIDGETS ARE LOADED ASYNCHRONOUSLY, THIS DOES NOT WORK
        /*var widgets = document.getElementsByClassName('widget'),
            widgets_l = widgets.length;
    
        alert(widgets_l);
        */
        /* first hide all widgets and then add toggle listener */
        // WIDGETS ARE LOADED ASYNCHRONOUSLY, THIS DOES NOT WORK
        /*for (var i = 0; i < widgets_l; i++) {
    
          _hide(widgets[i]);
    
          widgets[i].addEventListener('click', function(e){ _toggle(e); });
    
        }*/
    });
    // hello world
    console.log(EXT_NAME + " extension loaded.");
})();
