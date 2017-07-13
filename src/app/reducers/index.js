"use strict";
exports.__esModule = true;
var store_1 = require("@ngrx/store");
var todos = require("./todos");
var reducer = store_1.combineReducers(todos);
exports.store = store_1.StoreModule.provideStore(reducer);
//# sourceMappingURL=index.js.map