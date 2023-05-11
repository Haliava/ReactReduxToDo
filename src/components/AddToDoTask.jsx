import React from 'react';
import styles from "../styles/AddToDoTask.module.css"

const AddToDoTask = ({modalData, setSubmitAction}) => {
    const [, setOpenModal] = modalData.isOpen;
    const [, setTitleModal] = modalData.title;
    const [, setTaskID] = modalData.entryID;

    function openModal() {
        setSubmitAction("ADD_TASK");
        setTitleModal("New Task");
        setOpenModal(true);
        setTaskID(1);
        console.log("1!!")
    }

    return (
        <button onClick={openModal} className={styles.addTaskButton}>
            Add Task
        </button>
    );
};

export default AddToDoTask;