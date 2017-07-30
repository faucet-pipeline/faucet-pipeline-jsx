let config = {
	manifest: {
		file: "dist/manifest.json",
		baseURI: "/assets"
	},
	bundles: [{
		entryPoint: "index.js",
		target: "dist/bundle.js",
		extensions: [".jsx"],
		transpiler: {
			features: ["es2015", "jsx"],
			jsx: { pragma: "createElement" }
		}
	}]
};

module.exports = {
	js: config
};
