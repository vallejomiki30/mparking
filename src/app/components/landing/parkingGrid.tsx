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
          <div key={level.id} className='p-2'>
          <p>{level.name}</p>
          <div className='grid grid-cols-10 w-full gap-4 p-2'>
            <ParkingGridMap levelID={level.id} gridCount={level.grid}></ParkingGridMap>
          </div>
          </div>
        )
      })}
    </div>
  )

}

export default ParkingGrid