'use client'
import React from 'react'

import { useSearchParams } from 'next/navigation'

const ParkingLayout = () => {
    const searchParams = useSearchParams()
    const parking = searchParams.get('parking')
    
  return (
    <div>ParkingLayout</div>
    
  )
}

export default ParkingLayout