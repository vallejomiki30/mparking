import React from 'react'
import ParkingLotSelection from './parkingSelection'

const NavbarLayout = () => {
  return (
    <header className='flex justify-start gap-4 items-center h-full px-2 py-2'>
        <p>Select Parking Lot: </p>
        <ParkingLotSelection></ParkingLotSelection>
    </header>
  )
}

export default NavbarLayout