const defaultState = "all";

const selectReducer = (state=defaultState, action) => {
    const type = action.type;

    switch (type) {
        case "SELECT_DONE_TASKS":
            return "only-done";
        case "SELECT_PENDING_TASKS":
            return "only-pending";
        case "SELECT_ALL_TASKS":
            return "all";
        default:
            return state;
    }
}

export default selectReducer;