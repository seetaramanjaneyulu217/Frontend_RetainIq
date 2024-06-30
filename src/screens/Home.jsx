import React from 'react'
import { useSelector } from 'react-redux'
// import ProductFilterColumn from '../components/ProductFilterColumn'
// import Column from '../components/Column'

const Home = () => {
    const tableColumnsData = useSelector(state => state.tableData.tableColumnsData)
    const columns = tableColumnsData.map(column => {
        return Object.keys(column)
    })
    let length = 0;
    let finalColumns = columns.map(column => {
        if (column.length > length) {
            length = column.length
            return column
        }
    })
    finalColumns = finalColumns.filter(column => column)
    const finalVariantColumns = finalColumns[0].slice(2)
    console.log(finalVariantColumns)
    return (
        <div className='flex items-center gap-x-10 border border-gray-400 mt-44'>
            <table>
                <thead>
                    <tr>
                        {
                            finalColumns[0].map(columnData => (
                                <th key={columnData}>
                                    {columnData}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        tableColumnsData.map(columnData => (
                            <tr key={columnData.id}>
                                <td>{columnData.id}</td>
                                <td>{columnData.productFilters.map(filter => (
                                    <p key={filter.id}>{filter.filter}</p>
                                ))}</td>
                                {
                                    finalVariantColumns.map((column) => (
                                        columnData[column]
                                            ? <td><div key={column}>
                                                <img src={columnData[column].imgURL} />
                                                <p>{columnData[column].variantText}</p>
                                            </div>
                                            </td>
                                            : <td><div key={column}>

                                            </div>
                                            </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home