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
import { useRouter } from 'next/navigation'

const ParkingLotSelection = () => {
    const router = useRouter()
    const { data, isLoading, isError }: any = getParkingLots()
    if (isLoading) return <><p>Loading...</p></>
    if (isError) return <><p>Error...</p></>

    const test = (value:any) => {
        router.push(`?parking=${value.toLowerCase()}`)
    }

    return (
        <div>
            <Select onValueChange={(e:any)=>test(e)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Parking Lot" />
                </SelectTrigger>
                <SelectContent>
                    {data.data.map((parkinglot:any)=>{
                        return (
                            <SelectItem key={parkinglot.id} value={parkinglot.name}>{parkinglot.name}</SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </div>
    )

}

export default ParkingLotSelection