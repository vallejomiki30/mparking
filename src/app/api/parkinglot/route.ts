import ParkingLot from '@/model/parkingLotModel';
import { dbconn } from '@/db/conn'
import { NextRequest, NextResponse } from "next/server";

dbconn()

export async function GET() {
    return NextResponse.json({
        message: "Success",
    })
    // try {
    //     const parkinglot = await ParkingLot.find({}, {_id: 0,createdAt:0,updatedAt:0,__v:0})
    //     if (parkinglot) {
    //         return NextResponse.json({
    //             message: "Success",
    //             categories:parkinglot
    //         })
    //     }
    // } catch (error) {
    //     return NextResponse.json({
    //         error: "Invalid Request",
    //     })
    // }
}