import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from './slices/tableDataSlice'

const store = configureStore({
    reducer: {
        tableData: tableDataReducer
    }
})

export default store