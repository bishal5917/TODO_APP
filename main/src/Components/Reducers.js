//reducers 
export const reducer = (state, action) => {
    if (action.type === "ADD") {
        const newOne = [...state.lists, action.payload]
        return {
            lists: newOne
        }
    }
    if (action.type === "DELETE") {
        const filtered = state.lists.filter((item) => item.id !== action.payload)
        return {
            lists: filtered
        }
    }
    if (action.type === "UPDATE") {

    }
    return state;
}