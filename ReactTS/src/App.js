"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(require("react"));
require("./App.css");
const TodoTable_1 = require("./components/TodoTable");
const NewTodoForm_1 = require("./components/NewTodoForm");
const App = () => {
    const [showAddTodoForm, setShowAddTodoForm] = (0, react_1.useState)(false);
    const [todos, setTodos] = (0, react_1.useState)([
        { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
        { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },
        { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One' },
        { rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One' }
    ]);
    const addTodo = (description, assigned) => {
        let rowNumber = 0;
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1;
        }
        else {
            rowNumber = 1;
        }
        const newTodo = {
            rowNumber: rowNumber,
            rowDescription: description,
            rowAssigned: assigned
        };
        setTodos(todos => [...todos, newTodo]);
    };
    const deleteTodo = (deleteTodoRowNumber) => {
        let filtered = todos.filter(function (value) {
            return value.rowNumber !== deleteTodoRowNumber;
        });
        setTodos(filtered);
    };
    return (<div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable_1.TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
        {showAddTodoForm &&
            <NewTodoForm_1.NewTodoForm addTodo={addTodo}/>}
        </div>
      </div>
    </div>);
};
exports.App = App;
