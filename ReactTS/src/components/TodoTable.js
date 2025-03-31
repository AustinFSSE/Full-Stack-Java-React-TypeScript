"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoTable = void 0;
const react_1 = __importDefault(require("react"));
const TodoRowItem_1 = require("./TodoRowItem");
const TodoTable = (props) => {
    return (<table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (<TodoRowItem_1.TodoRowItem key={todo.rowNumber} rowNumber={todo.rowNumber} rowDescription={todo.rowDescription} rowAssigned={todo.rowAssigned} deleteTodo={props.deleteTodo}/>))}
            </tbody>
        </table>);
};
exports.TodoTable = TodoTable;
