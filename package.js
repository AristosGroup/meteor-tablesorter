Package.describe({
	summary: "tablesorter is a jQuery plugin for turning a standard HTML table with THEAD and TBODY tags into a sortable table without page refreshes. tablesorter can successfully parse and sort many types of data including linked data in a cell."
});

Package.on_use(function (api) {
	api.add_files([
		'lib/bootstrap-daterangepicker/daterangepicker.css',
		'lib/bootstrap-daterangepicker/date.js',
		'lib/bootstrap-daterangepicker/daterangepicker.js'
		], 'client');
});