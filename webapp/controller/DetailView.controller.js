sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("app.miningjsonproject.controller.DetailView", {
        onInit() {
          var oRouter=this.getOwnerComponent().getRouter()
          oRouter.attachRoutePatternMatched(this._onRouteMatched,this)
        },

        _onRouteMatched:function(oEvent){
          

                    var Index1 = oEvent.getParameter("arguments").detailIndex;
                    var sPath = "MiningModel>/locations/" +Index1;
                      var oView = this.getView();
                       oView.bindElement(sPath);
          

       }
    });
  });