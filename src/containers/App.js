/**
 * Created by godkill on 16/7/20.
 */
import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        console.log('add todo', text)
                    } />
                <TodoList
                    todos={[{
                        text: 'Use Redux',
                        completed: true
                    }, {
                        text: 'Learn to connect it to React',
                        completed: false
                    }]}
                    onTodoClick={todo =>
                        console.log('todo clicked', todo)
                    } />
                <Footer
                    filter='SHOW_ALL'
                    onFilterChange={filter =>
                        console.log('filter change', filter)
                    } />
            </div>
        );
    }
}

export default App;
