/**
 * Created by godkill on 16/7/20.
 */
import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <li onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        );
    }
}

Todo.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
};

export default Todo;
