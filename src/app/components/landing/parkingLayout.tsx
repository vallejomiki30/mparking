'use client'

import React from 'react'

import { useSearchParams } from 'next/navigation'
import ParkingGrid from './parkingGrid'

const ParkingLayout = () => {
  const searchParams = useSearchParams()
  const parking = searchParams.get('parking')

  return (
    <div className='flex flex-col w-full'>
      <p className='flex justify-center'>{parking}</p>
      <ParkingGrid parking={parking}></ParkingGrid>
    </div>
  )
}

export default ParkingLayout