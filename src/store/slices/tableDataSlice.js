import { createSlice } from "@reduxjs/toolkit";

const tableColumnsData = [
    {
        id: 1,
        productFilters: [
            {
                id: 1,
                filter: 'image_isList is empty'
            },
            {
                id: 2,
                filter: 'AND Discount Percentage is 0'
            }
        ],
        primaryVariant: {
            imgURL: '',
            variantText: 'variant'
        },
        Variant2: {
            imgURL: '',
            variantText: 'variant2'
        }
    },
    {
        id: 2,
        productFilters: [
            {
                id: 1,
                filter: 'tags contains onsale'
            }
        ],
        primaryVariant: {
            imgURL: '',
            variantText: ''
        }
    },
    {
        id: 3,
        productFilters: [
            {
                id: 1,
                filter: 'tags contains __label:New'
            }
        ],
        primaryVariant: {
            imgURL: '',
            variantText: ''
        }
    }
]

const tableDataSlice = createSlice({
    name: 'table',
    initialState: {
        tableColumnsData
    },
    reducers: {
        addNewVariant: (state, action) => {

        },
        deleteVariant: (state, action) => {

        }
    },
})


export default tableDataSlice.reducer
export const { addNewVariant, deleteVariant } = tableDataSlice.actions