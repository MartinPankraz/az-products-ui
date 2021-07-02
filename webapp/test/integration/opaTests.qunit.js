/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"my/azure/productsui/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});