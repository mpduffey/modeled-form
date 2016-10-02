"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var keys_pipe_1 = require('modules/keys-pipe/keys-pipe');
var ModeledForm = (function () {
    function ModeledForm() {
        var _this = this;
        this.isArray = function (val) { return Array.isArray(val); };
        this.add = function (x) {
            _this.formObject.push(x);
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ModeledForm.prototype, "formObject", void 0);
    ModeledForm = __decorate([
        core_1.Component({
            selector: 'modeled-form',
            template: "\n\t\t<form class=\"form-horizontal\">\n\t\t\t<form-input [parentIsArray]=\"isArray(formObject)\" *ngFor=\"let prop of formObject | keys\" [property]=\"prop\"></form-input>\n\t\t\t<form-input *ngIf=\"isArray(formObject)\" (addArrayItem)=\"add($event)\" [button]=\"true\" [parentIsArray]=\"isArray(formObject)\" [property]=\"{key: 'New', value: null}\"></form-input>\n\t\t</form>\n\t",
            pipes: [keys_pipe_1.KeysPipe],
            styles: ["\n\t\tform {max-width: 600px;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], ModeledForm);
    return ModeledForm;
}());
exports.ModeledForm = ModeledForm;
//# sourceMappingURL=modeled-form.js.map