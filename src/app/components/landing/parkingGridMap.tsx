import React from 'react'

const ParkingGridMap = (gridCount:any) => {
    let gridBlocks = []
    for (let i = 0; i < gridCount; i++) {
        gridBlocks.push(
            <div className='flex justify-center items-center p-8 border-2 border-black'>{i}</div>
        );
    }
    return (
        <>
            {gridBlocks}
        </>
    )
}

export default ParkingGridMap