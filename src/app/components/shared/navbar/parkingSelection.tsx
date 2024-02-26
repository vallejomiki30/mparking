'use client'
import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { getParkingLots } from '@/services/getParkingLots'

const ParkingLotSelection = () => {
    const { data, isLoading, isError }: any = getParkingLots()
    if (isLoading) return <><p>Loading...</p></>
    if (isError) return <><p>Error...</p></>
    return (
        <div>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Parking Lot" />
                </SelectTrigger>
                <SelectContent>
                    {data.data.map((parkinglot:any)=>{
                        return (
                            <SelectItem key={parkinglot.id} value={parkinglot.id}>{parkinglot.name}</SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </div>
    )

}

export default ParkingLotSelection