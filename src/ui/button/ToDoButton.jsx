import React from 'react';
import styles from "./ToDoButton.module.css";
import pencil from "../../img/pencil.png";
import trashCan from "../../img/trash-can.png";

const ToDoButton = ({buttonType, onClick, ...props}) => {
    return (
        <button onClick={onClick} {...props} className={styles.todoButton}>
            <img className={styles.todoImg} src={buttonType === "edit" ? pencil: trashCan}  alt="pic"/>
        </button>
    );
};

export default ToDoButton;