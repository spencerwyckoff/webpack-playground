// Pre-webpack.config.js file addition
// require("!style!css!./style.css");


// Post-webpack.config.js file addition
require("./style.css");
document.write(require("./content.js"));
