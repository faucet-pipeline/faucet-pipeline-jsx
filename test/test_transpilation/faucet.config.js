"use strict";

let config = {
	manifest: false,
	bundles: [{
		entryPoint: "src/index.jsx",
		target: "dist/bundle.js",
		transpiler: {
			features: ["es2015", "jsx"],
			jsx: { pragma: "createElement" }
		}
	}]
};

module.exports = {
	js: config
};
