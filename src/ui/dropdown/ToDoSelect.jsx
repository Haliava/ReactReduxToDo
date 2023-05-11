import React, {useRef} from 'react';
import styles from "./ToDoSelect.module.css";
import {useDispatch} from "react-redux";

const ToDoSelect = ({defaultVal, options, children, ...props}) => {
    const selectRef = useRef(null);
    const dispatch = useDispatch();

    function selectTasks() {
        dispatch({type: selectRef.current[selectRef.current.selectedIndex].value, payload: {}});
    }

    return (
        <select {...props} className={styles.todoSelect} onChange={selectTasks} ref={selectRef}>
            {children}
            <option className={styles.optionElem} value="" disabled hidden>{defaultVal}</option>
            {options.map(option => {
                return <option
                    key={option.value}
                    className={styles.optionElem}
                    value={option.value}>{option.name}</option>
            })}
        </select>
    );
};

export default ToDoSelect;