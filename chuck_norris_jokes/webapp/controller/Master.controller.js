sap.ui.define([
	"chuck/norris/jokes/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("chuck.norris.jokes.controller.Master", {

		onNewJoke: function() {
			
			var oComp = this.getOwnerComponent();
			var that = this;
			
			// this.getModel().refresh(true) did not work...
			
			$.ajax({ 
				url: oComp.jokesURL, 
				success: function(response){
					that.getModel().setData(response);
				}
			}); 
		}
		
	});

});