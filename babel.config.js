module.exports = function(api) {
	api.cache(true)

	const presets = ['babel-preset-expo']
	const plugins = [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@assets': './src/assets',
					'@components': './src/Components',
					'@routes': './src/Routes',
					'@screens': './src/Screens',
					'@storage': './src/Storage',
					'@theme': './src/Theme',
					'@utils': './src/Utils',
					'@service': './src/Service',
					'@contexts': './src/Contexts',
				},
			},
		],
	]

	return {
		presets,
		plugins,
	}
}
