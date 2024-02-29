'use client'

import { getParkingEntrance } from '@/services/getParkingEntrance'
import React from 'react'

import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from 'lucide-react';
import UseParkingSlot from './useParkingSlot'

const ParkingGridMap = ({ levelID, gridCount }: any) => {

    const { data, isLoading, isErrorParkingEntrance } = getParkingEntrance(levelID)
    if (isLoading) return <><p>Loading...</p></>
    if (isErrorParkingEntrance) return <><p>Error...</p></>

    let gridBlocks = []
    for (let i = 0; i < gridCount; i++) {
        let entrance = (data.data.findIndex((e: any) => e.location === i))
        if (entrance >= 0) {
            gridBlocks.push(
                <div key={data.data[entrance].id} className='flex justify-center items-center border-2 border-black bg-yellow-500'>{data.data[entrance].name}</div>
            );
        }
        else {
            gridBlocks.push(
                <div key={i} className='flex-col flex justify-center bg-gray-500 border-2 border-black'>
                    <div className='inline-flex justify-center pt-2'>
                        <Dialog>
                            <DialogTrigger className='flex justify-center items-center'><Plus></Plus></DialogTrigger>
                            <UseParkingSlot levelID={levelID} slotLocation={i}></UseParkingSlot>
                        </Dialog>
                    </div>
                    <p className='my-1 text-white flex justify-end pr-1'>{i}</p>
                </div>
            );
        }
    }
    return (
        <>
                {gridBlocks}
        </>
    )
}

export default ParkingGridMap