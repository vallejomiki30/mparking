import ParkingLevel from '@/model/parkingLevelModel';
import Sequence from '@/model/sequenceModel';
import { dbconn } from '@/db/conn'
import { NextRequest, NextResponse } from "next/server";

dbconn()

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json()

        const { parkingLotID, name, description,grid } = reqBody
        const existing = await ParkingLevel.findOne({ parkingLotID, name })
    
        if (!existing) {
    
            const updateSequence = await Sequence.findOneAndUpdate({ name: "parkinglevel" }, { "$inc": { "val": 1 } }, { new: true })
            let valID
            if (updateSequence === null) {
                Sequence.create({
                    name: "parkinglevel",
                    val: 1001
                })
                valID = 1001
            }
            else {
                valID = updateSequence.val
            }
    
            const newParkingLevel = await ParkingLevel.create({
                id: valID,
                parkingLotID,
                name,
                description,
                grid
            })
    
            if (newParkingLevel) {
                return NextResponse.json({
                    message: "New Parking Level has been added.",
                })
            }
    
            else {
                return NextResponse.json({
                    message: "Something went wrong when adding a new parking level.",
                })
            }
        }
    
        else {
            return NextResponse.json({
                error: "Parking Level with that name already exists.",
            })
        }
    } catch (error) {
        return NextResponse.json({
            error: "An unexpected error occured.",
        })
    }


}

