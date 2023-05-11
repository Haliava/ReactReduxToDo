import styles from './styles/App.module.css';
import TableHeader from "./ui/table/TableHeader";
import TableBody from "./ui/table/TableBody";
import {useState} from "react";
import {useSelector} from "react-redux";

function App() {
    const data = useSelector(state => {
        return state.tasks;
    });

    const selectedFilter = useSelector(state => {
        return state.select;
    });

    let settings = {
        modalOpenState: useState(false),
        data: data,
        taskDataState: useState(data),
        selectedTaskIdState: useState(1),
        modalTitleState: useState("Edit"),
        selectedFilter: selectedFilter,
        onSubmitDispatchCommand: useState("EDIT_TASK")
    };

    let modalData = {
        isOpen: settings.modalOpenState,
        title: settings.modalTitleState,
        entryID: settings.selectedTaskIdState,
    }

    return (
        <div className={styles.App}>
            <h1 className={styles.header}>TODO LIST</h1>
            <TableHeader modalData={modalData} setSubmitAction={settings.onSubmitDispatchCommand[1]} />
            <TableBody settings={settings} />
        </div>
    );
}

export default App;
