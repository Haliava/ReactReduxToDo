import React from 'react';
import ToDoSelect from "../dropdown/ToDoSelect";
import AddToDoTask from "../../components/AddToDoTask";
import styles from "../../styles/TableHeader.module.css"

const TableHeader = ({modalData, setSubmitAction}) => {
    return (
        <div className={styles.tableHeader}>
            <AddToDoTask modalData={modalData} setSubmitAction={setSubmitAction} />
            <ToDoSelect
                defaultVal="Filter ToDo List"
                options={[
                {name: "all", value: "SELECT_ALL_TASKS"},
                {name: "completed", value: "SELECT_DONE_TASKS"},
                {name: "incomplete", value: "SELECT_PENDING_TASKS"}]}
             />
        </div>
    );
};

export default TableHeader;