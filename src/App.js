"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var MyText = function (_a) {
    var human = _a.human;
    return react_1.default.createElement(react_native_1.Text, null, human.name + human.age);
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var newHuman = { name: 'gleb', age: 12 };
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(MyText, { human: newHuman })));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
