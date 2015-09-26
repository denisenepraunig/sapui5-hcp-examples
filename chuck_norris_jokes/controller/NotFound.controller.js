sap.ui.define([
	"chuck/norris/jokes/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("chuck.norris.jokes.controller.NotFound", {

		/**
		 * Navigates to the master when the link is pressed
		 * @public
		 */
		onLinkPressed: function() {
			this.getRouter().navTo("master");
		}

	});

});