import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "./Modal.module.css";

const Modal = ({modalHeader, isOpen, setIsOpen, entryID, submitAction}) => {
    let allTaskData = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [taskData, setTaskData] = useState(allTaskData[entryID - 1]);
    console.log(entryID, entryID > 0, taskData, allTaskData[entryID - 1]);
    const [taskTitle, setTaskTitle] = useState(() => taskData.title ? taskData.title: "");
    const [taskIsDone, setTaskIsDone] = useState(() => taskData.isDone === undefined ? false: taskData.isDone);
    const titleRef = useRef();
    const isDoneRef = useRef();

    useEffect(() => {
        setTaskData(allTaskData[entryID - 1]);
        setTaskTitle(taskData.title);
        setTaskIsDone(taskData.isDone);
    }, [entryID, taskData]);

    useEffect(() => {
        if (entryID > 0) setTaskData(allTaskData[entryID - 1]);
        else setTaskData({id: "", title: "", isDone: false, date: ""});
    }, [taskData])

    const openModal = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(!isOpen);
        }
    };

    const onTitleChange = (e) => {
        setTaskTitle(titleRef.current.value);
    }

    const onDoneChange = (e) => {
        setTaskIsDone(prev => !prev);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = document.getElementById("modalForm").getElementsByTagName("input");
        let entry = {
            id: taskData.id,
            title: formData[0].value,
            isDone: formData[1].checked,
            data: Date.now().toString()
        }
        console.log({type: submitAction, payload: entry});
        dispatch({type: submitAction, payload: entry});
        setIsOpen(false);
    }

    return (
        <div className={`${styles.modal} ${isOpen ? styles.show : ''}`} onClick={openModal}>
            <div className={styles.modalContent}>
                <h1>{modalHeader}</h1>
                <form id="modalForm" className={styles.modalForm}>
                    <label className={styles.modalFormLabel} htmlFor="title">Task Title</label>
                    <input
                        name="title"
                        type="text"
                        value={taskTitle}
                        onChange={onTitleChange}
                        ref={titleRef}
                    />
                    <label className={styles.modalFormLabel} htmlFor="checkBox">Is done</label>
                    <input
                        name="isDone"
                        type="checkbox"
                        className={styles.modalFormCheckbox}
                        checked={taskIsDone}
                        onChange={onDoneChange}
                        ref={isDoneRef}
                    />
                    <button className={styles.modalFormButton} onClick={onSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;