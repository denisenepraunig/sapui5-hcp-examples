sap.ui.define([
		"star/wars/app/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("star.wars.app.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);