import ParkingLevel from '@/model/parkingLevelModel';
import { dbconn } from '@/db/conn'
import { NextRequest, NextResponse } from "next/server";

dbconn()

export async function GET(req: NextRequest, { params }: { params: { parking: string } }) {
    try {
        const parking = params.parking
        const parkingLevels = await ParkingLevel.find({"parkingLot.parkingLotName": {  $regex: parking,$options:'i' } }, {_id: 0,createdAt:0,updatedAt:0,__v:0})
        
        if (ParkingLevel.length > 0) {
            return NextResponse.json({
                message: "Success",
                data: parkingLevels
            })
        }
        
        else{
            return NextResponse.json({
                error: "No level for this parking.",
            })
        }

    }
    catch (error) {
        return NextResponse.json({
            error: "Invalid Request",
        })
    }
}