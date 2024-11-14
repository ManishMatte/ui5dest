sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("manishtest.controller.worklist", {
        onInit: function () {

        },
        fetchNorthwindData : function(){

            var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");

            var appPath = appId.replaceAll(".", "/");

            var appModulePath = jQuery.sap.getModulePath(appPath);

            $.ajax({
                type: "GET",
                url: appModulePath + '/northwind/V4/Northwind/Northwind.svc/Products',
                success: function ({ value }) {
                  console.log(value);
                }
            });
          }
    });
});
