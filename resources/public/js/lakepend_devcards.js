var CLOSURE_UNCOMPILED_DEFINES = null;
if(typeof goog == "undefined") document.write('<script src="js/devcards_out/goog/base.js"></script>');
document.write('<script src="js/devcards_out/cljs_deps.js"></script>');
document.write('<script>if (typeof goog != "undefined") { goog.require("lakepend.example"); } else { console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?"); };</script>');

document.write("<script>figwheel.connect.start();</script>");