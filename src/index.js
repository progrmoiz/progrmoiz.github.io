
require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./scripts/zoom-vanilla.min');
import LazyLoad from "vanilla-lazyload";

document.addEventListener("DOMContentLoaded", () => {

});

const myLazyLoad = new LazyLoad();
// After your content has changed...
myLazyLoad.update();