jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"star/wars/app/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"star/wars/app/test/integration/pages/Worklist",
		"star/wars/app/test/integration/pages/Object",
		"star/wars/app/test/integration/pages/NotFound",
		"star/wars/app/test/integration/pages/Browser",
		"star/wars/app/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "star.wars.app.view."
	});

	sap.ui.require([
		"star/wars/app/test/integration/WorklistJourney",
		"star/wars/app/test/integration/ObjectJourney",
		"star/wars/app/test/integration/NavigationJourney",
		"star/wars/app/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});