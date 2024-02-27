'use client'

import React from 'react'
import { getFloors } from '@/services/getFloors'
import ParkingGridMap from './parkingGridMap'

const ParkingGrid = ({ parking }: any) => {
  const { data, isLoading, isError } = getFloors(parking)
  if (isLoading) return <><p>Loading...</p></>
  if (isError) return <><p>Error...</p></>

  return (
    <div>
      {data.data.map((level: any) => {
        return (
          <div className='grid grid-cols-10 items-center justify-center w-full gap-4 p-2'>
            <ParkingGridMap gridCount={level.grid}></ParkingGridMap>
          </div>
        )
      })}
    </div>
  )

}

export default ParkingGrid