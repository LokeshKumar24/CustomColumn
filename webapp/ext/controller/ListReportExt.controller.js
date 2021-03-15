sap.ui.controller("listreport1.ext.controller.ListReportExt", {

	/*
	 * Content of the custom field shall be stored in the app state, so that it can be restored later again e.g. after a back navigation.
	 * @param oCustomData  : referance to the custome data.
	 */
	getCustomAppStateDataExtension: function (oCustomAppData) {
		/*
		var oCustomField1 = this.oView.byId("SampleFilterFieldID");
		if (oCustomField1) {
			oCustomAppData.SampleFilterFieldID = oCustomField1.getValue();
		}
		return oCustomAppData;
		*/
	},
	/*
	 * In order to restore content of the custom field in the filterbar e.g. after a back navigation.
	 * @param oCustomData  : referance to the custome data.
	 */
	restoreCustomAppStateDataExtension: function (oCustomAppData) {
		/*
		if (oCustomAppData.SampleFilterFieldID !== undefined) {
			if ( this.oView.byId("SampleFilterFieldID") ) {
				this.oView.byId("SampleFilterFieldID").setSelectedKey(oCustomAppData.SampleFilterFieldID);
			}
		}
		*/
	},
	    onInit: function(){
              // var oGlobalFilter = this.getView().byId("LReport::sap.suite.ui.generic.template.ListReport.view.ListReport::Customer_and_Suppliers_by_Cities--listReportFilter-filterItemControl_BASIC-ContactName");

             this.byId("color").addStyleClass("myStyle");
         // sap.m.MessageToast.show("welcome");
       //Create JSON data that contains the Inital value of the filter
       //"company_code" is the name of the filter field. You should put your own field ID.
    //    var oDefaultFilter = {
    //        "ContactName": "Maria Anders"
    //    };
        },
        dialog:null,
        popUp:function(oEvent){
           // debugger;
            sap.m.MessageToast.show("welcome " +oEvent.getSource().getText());
            //    if(!this.dialog){
            //     this.dialog = new sap.ui.xmlfragment("listreport1.ext.fragment.popup",this);
            //     this.getView().addDependent(this.dialog);
            // }
            // this.dialog.open();
        }
 //debugger;

        //Set SmartFilterBar initial values
      //  oGlobalFilter.setFilterData(oDefaultFilter);
    // },
    
    // 	onInitSmartFilterBarExtension: function (oEvent) {
	// 	var smartFilterBar = this.getView().byId("listReportFilter");
	// 	var field1 = smartFilterBar.getControlByKey("City");
	// 	field1.setValue("Berlin");
	// 	// 	var field = smartFilterBar.getControlByKey("ContactName");
	// 	// field.setValue("Maria Anders");
	// }
	
});