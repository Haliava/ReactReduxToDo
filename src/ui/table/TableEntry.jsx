import React from 'react';
import styles from "../../styles/TableEntry.module.css";
import ToDoButton from "../button/ToDoButton";
import {useDispatch} from "react-redux";

const TableEntry = ({entry, toggleModal, setEntryId, setSubmitAction, setModalHeader}) => {
    const dispatch = useDispatch();

    function entryToggleModal(action) {
        setModalHeader(action.split("_")[0]);
        setSubmitAction(action);
        setEntryId(entry.id);
        toggleModal(prev => {
            return !prev;
        });
    }

    function selectEntry(e) {
        dispatch({type: "CHECK_TASK", payload: entry});
    }

    return (
        <div className={styles.tableEntry}>
            <div className={styles.tableEntryInner}>
                <input onChange={selectEntry} className={styles.todoCheckbox} type="checkbox"
                       checked={entry.isDone}/>
                <div className={`${styles.entryTextDiv} ${entry.isDone ? styles.crossOut : ""}`}>
                    <p>{entry.title}</p>
                    <p>{entry.date}</p>
                </div>
            </div>
            <div className={styles.tableEntryInner}>
                <ToDoButton onClick={() => entryToggleModal("EDIT_TASK")} buttonType="edit" />
                <ToDoButton onClick={() => entryToggleModal("REMOVE_TASK")} buttonType="delete" />
            </div>
        </div>
    );
};

export default TableEntry;