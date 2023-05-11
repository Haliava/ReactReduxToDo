import React, {useContext, useEffect, useState} from 'react';
import data from "../../db/tasks.json";

const TableContext = React.createContext(null);

export function useTableContext() {
    return useContext(TableContext);
}

const TableCtxProvider = ({children}) => {
    const [tasks, setTasks] = useState(data);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        
    }, [open]);

    return (
        <TableContext.Provider value={tasks}>
            {children}
        </TableContext.Provider>
    );
};

export default TableCtxProvider;