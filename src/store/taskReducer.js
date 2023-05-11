import data from "../db/tasks.json";

const defaultState = data;

const writeToFile = (newData) => {
}

const taskReducer = (state = defaultState, action) => {
    let task = action.payload;
    let stateCopy = null;
    // action = {type: "", payload: ""}
    switch (action.type) {
        case "ADD_TASK":
            stateCopy = structuredClone(state);
            stateCopy.push({
                id: `${parseInt(state.at(-1).id) + 1}`,
                title: task.title,
                date: Date.now(),
                isDone: task.isDone
            });
            console.log(stateCopy.at(-1));
            writeToFile(stateCopy);

            return stateCopy;
        case "EDIT_TASK":
            stateCopy = structuredClone(state);
            stateCopy[task.id - 1] = task;
            writeToFile(stateCopy);

            return stateCopy;
        case "REMOVE_TASK":
            writeToFile(state.filter(person => person.id !== task.id));
            return state.filter(person => person.id !== task.id);
        case "CHECK_TASK":
            stateCopy = structuredClone(state);
            stateCopy[task.id - 1].isDone = !stateCopy[task.id - 1].isDone;
            writeToFile(stateCopy);

            return stateCopy;
        default:
            return state;
    }
}

export default taskReducer;