"use strict";

module.exports = {
	js: [{
		source: "./src/index.jsx",
		target: "./dist/bundle.js",
		transpiler: {
			features: ["es2015", "jsx"],
			jsx: { pragma: "createElement" }
		}
	}]
};
