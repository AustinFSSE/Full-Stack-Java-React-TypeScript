"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRowItem = void 0;
const react_1 = __importDefault(require("react"));
const TodoRowItem = (props) => {
    return (<tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>);
};
exports.TodoRowItem = TodoRowItem;
