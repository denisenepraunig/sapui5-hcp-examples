sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
    "use strict";
    
    return UIComponent.extend("chuck.norris.jokes.Component", {
        
        metadata: {
            manifest: "json"
        },
        
        init: function() {
        	
        	var oConfig = this.getMetadata().getConfig();

        	this.jokesURL = oConfig.jokesRemote;
        	
        	var oModel = new JSONModel(this.jokesURL);
        	this.setModel(oModel);
        	
			UIComponent.prototype.init.apply(this, arguments);
			
			// create the views based on the url/hash
			this.getRouter().initialize();
        }
    });
});