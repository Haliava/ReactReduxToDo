import React, {useEffect, useState} from 'react';
import TableEntry from "./TableEntry";
import styles from "../../styles/TableBody.module.css";
import Modal from "../modal/Modal";

const TableBody = ({settings}) => {
    const [modalOpen, setModalOpen] = settings.modalOpenState;
    const data = settings.data;
    const [taskData, setTaskData] = settings.taskDataState;
    const [selectedTaskId, setSelectedTaskId] = settings.selectedTaskIdState;
    const [modalTitle, setModalTitle] = settings.modalTitleState;
    const selectedFilter = settings.selectedFilter;
    const [onSubmitDispatchCommand, setOnSubmitDispatchCommand] = settings.onSubmitDispatchCommand;

    let filteredEntries = taskData.filter(task => {
        switch (selectedFilter) {
            case "only-done":
                return task.isDone;
            case "only-pending":
                return !task.isDone;
            case "all":
            default:
                return true;
        }
    });

    useEffect(() => {
        setTaskData(data);
    }, [selectedFilter, data]);

    return (
        <div className={styles.tableBody}>
            <Modal
                modalHeader={modalTitle}
                isOpen={modalOpen}
                setIsOpen={setModalOpen}
                entryID={selectedTaskId}
                submitAction={onSubmitDispatchCommand}
            />
            {filteredEntries.length > 0
                ?
                filteredEntries.map(task => {
                return <TableEntry
                    key={task.id}
                    entry={task}
                    toggleModal={setModalOpen}
                    setEntryId={setSelectedTaskId}
                    setSubmitAction={setOnSubmitDispatchCommand}
                    setModalHeader={setModalTitle}
                />
                })
                :
                <h3>No tasks here</h3>
            }
        </div>
    );
}

export default TableBody;