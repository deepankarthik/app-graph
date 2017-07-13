"use strict";
exports.__esModule = true;
var ActionTypes_1 = require("../constants/ActionTypes");
var TodoFilters_1 = require("../constants/TodoFilters");
var initialTodo = {
    text: 'Use ngrx/store',
    completed: false,
    id: 0
};
var initialVisibility = { type: TodoFilters_1.SHOW_ALL, filter: function (todo) { return true; } };
exports.todos = function (state, action) {
    if (state === void 0) { state = [initialTodo]; }
    switch (action.type) {
        case ActionTypes_1.ADD_TODO:
            return [
                {
                    id: state.reduce(function (maxId, todo) { return Math.max(todo.id, maxId); }, -1) + 1,
                    completed: false,
                    text: action.text
                }
            ].concat(state);
        case ActionTypes_1.DELETE_TODO:
            return state.filter(function (todo) {
                return todo.id !== action.id;
            });
        case ActionTypes_1.EDIT_TODO:
            return state.map(function (todo) {
                return todo.id === action.id ?
                    Object.assign({}, todo, { text: action.text }) :
                    todo;
            });
        case ActionTypes_1.COMPLETE_TODO:
            return state.map(function (todo) {
                return todo.id === action.id ?
                    Object.assign({}, todo, { completed: !todo.completed }) :
                    todo;
            });
        case ActionTypes_1.COMPLETE_ALL:
            var areAllMarked_1 = state.every(function (todo) { return todo.completed; });
            return state.map(function (todo) { return Object.assign({}, todo, {
                completed: !areAllMarked_1
            }); });
        case ActionTypes_1.CLEAR_COMPLETED:
            return state.filter(function (todo) { return todo.completed === false; });
        default:
            return state;
    }
};
exports.visibility = function (state, action) {
    if (state === void 0) { state = initialVisibility; }
    switch (action.type) {
        case TodoFilters_1.SHOW_ALL:
            return { type: TodoFilters_1.SHOW_ALL, filter: function (todo) { return true; } };
        case TodoFilters_1.SHOW_COMPLETED:
            return { type: TodoFilters_1.SHOW_COMPLETED, filter: function (todo) { return todo.completed; } };
        case TodoFilters_1.SHOW_ACTIVE:
            return { type: TodoFilters_1.SHOW_ACTIVE, filter: function (todo) { return !todo.completed; } };
        default:
            return state;
    }
};
//# sourceMappingURL=todos.js.map