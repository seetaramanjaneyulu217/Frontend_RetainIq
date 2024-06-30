import React from 'react'

const Column = ({ variant }) => {
    return (
        <>
            {
                variant
                    ? <div>
                        <img src={variant.imgURL} />
                        <h1>{variant.variantText}</h1>
                    </div>
                    : <div>
                        
                    </div>
            }
        </>
    )
}

export default Column