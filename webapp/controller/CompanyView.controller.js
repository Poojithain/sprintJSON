sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/core/format/NumberFormat",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
   
], (Controller, NumberFormat,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("app.miningjsonproject.controller.CompanyView", {
        onInit() {
          
        },
        
        currencyFormatter(value) {
            
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
             currencyCode: false
            });

             return "₹" + oCurrencyFormat.format(value);
         },
            

       

       
          onTilePress: function (oEvent) {
                var oTile = oEvent.getSource();
                var oBindingContext = oTile.getBindingContext("MiningModel");
                var sPath = oBindingContext.getPath();
               var sPathParts = sPath.split("/");
               var index = sPathParts[sPathParts.length - 1];
    
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteDetailView", {
               detailIndex: index
             });
    


           },

           onSearch: function() {
            let aFilter = [];
            let sFiloc = this.getView().byId("Filloca").getValue();


            if (sFiloc) {
                let filterName = new Filter("name", FilterOperator.Contains, sFiloc);
                aFilter.push(filterName);
            }

            let oTable = this.getView().byId("idTab");
            let bindingInfo = oTable.getBinding("items");
            if (bindingInfo) {
                bindingInfo.filter(aFilter);
            }
        }
    });
});
