/*global QUnit*/

sap.ui.define([
	"app/miningjsonproject/controller/CompanyView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CompanyView Controller");

	QUnit.test("I should test the CompanyView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
