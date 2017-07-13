"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var routes_1 = require("./routes");
var reducers_1 = require("./reducers");
var App_1 = require("./containers/App");
var Footer_1 = require("./components/Footer");
var Header_1 = require("./components/Header");
var MainSection_1 = require("./components/MainSection");
var TodoItem_1 = require("./components/TodoItem");
var TodoTextInput_1 = require("./components/TodoTextInput");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            routes_1.routing,
            reducers_1.store
        ],
        declarations: [
            routes_1.RootComponent,
            App_1.AppComponent,
            Footer_1.FooterComponent,
            Header_1.HeaderComponent,
            MainSection_1.MainSectionComponent,
            TodoItem_1.TodoItemComponent,
            TodoTextInput_1.TodoTextInputComponent
        ],
        bootstrap: [routes_1.RootComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=index.js.map