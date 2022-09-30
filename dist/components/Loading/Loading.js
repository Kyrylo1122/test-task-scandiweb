"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_loading_1 = __importDefault(require("react-loading"));
function Loading() {
    return (<react_loading_1.default type="spinningBubbles" color={"#5ECE7B"} height={66} width={37}/>);
}
exports.default = Loading;
