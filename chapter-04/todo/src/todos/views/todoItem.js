import React, {PropTypes} from 'react';


//<TodoItem
//    key={item.id}
//    text={item.text}
//    completed={item.completed}
//    onToggle={() => onToggleTodo(item.id)}
//    onRemove={() => onRemoveTodo(item.id)}
///>

// 与使用组件时的 props 对应，键对应上
const TodoItem = ({onToggle, onRemove, completed, text}) => {
    const checkedProp = completed ? {checked: true} : {};
    return (
        <li
            className="todo-item"
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
            <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle}/>
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemove}>×</button>
        </li>
    )
}


TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;
