// import ParkingLevel from '@/model/parkingLevelModel';
import ParkingEntrance from '@/model/parkingEntranceModel';
import { dbconn } from '@/db/conn'
import { NextRequest, NextResponse } from "next/server";

dbconn()

export async function GET(req: NextRequest, { params }: { params: { parkinglevel: string } }) {
    try {
        const parkinglevel = params.parkinglevel
        const parkingEntrance = await ParkingEntrance.find({"parkingLevel.parkingLevelID": parkinglevel }, {_id: 0,createdAt:0,updatedAt:0,__v:0})
        
        if (parkingEntrance.length > 0) {
            return NextResponse.json({
                message: "Success",
                data: parkingEntrance
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