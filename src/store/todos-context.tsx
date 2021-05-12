import React, { useState } from 'react';
import Todos from '../components/Todos';

import Todo from '../models/todo'

const TodosContext = React.createContext<{
    items: Todo[];
    addTodo: () => void;
    removeTodo: (id: string) => void;
    }>({
        items: [], 
        addTodo: () => {},
        removeTodo: (id:string) => {}
    })

