import React from 'react'

const ProductFilterColumn = ({ productFilters }) => {
    const keyWords = ['is', 'is empty', 'contains']
    const res = productFilters.map(filter => {
        if (filter.filter?.includes('is empty'))
            return [...filter.filter.split(' is empty'), 'is empty']
        else
            return filter.filter.split(' ')
    })
    return (
        <div>
            {
                productFilters?.map(filter => (
                    <div key={filter.id}>
                        {filter.filter}
                    </div>
                ))
            }
        </div>
    )
}

export default ProductFilterColumn