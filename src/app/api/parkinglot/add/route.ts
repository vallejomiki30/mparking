import ParkingLot from '@/model/parkingLotModel';
import Sequence from '@/model/sequenceModel';
import { dbconn } from '@/db/conn'
import { NextRequest, NextResponse } from "next/server";

dbconn()

export async function POST(req: NextRequest) {
    const reqBody = await req.json()

    const { name, description } = reqBody
    const existing = await ParkingLot.findOne({ name })

    if (!existing) {

        const updateSequence = await Sequence.findOneAndUpdate({ name: "parkinglot" }, { "$inc": { "val": 1 } }, { new: true })
        let valID
        if (updateSequence === null) {
            Sequence.create({
                name: "categories",
                val: 1001
            })
            valID = 1001
        }
        else {
            valID = updateSequence.val
        }

        const newParkingLot = await ParkingLot.create({
            id: valID,
            name,
            description
        })

        if (newParkingLot) {
            return NextResponse.json({
                message: "New Parking Lot has been added.",
            })
        }

        else {
            return NextResponse.json({
                message: "Something went wrong when adding a new parking lot.",
            })
        }
    }

    else {
        return NextResponse.json({
            error: "Parking Lot with that name already exists.",
        })
    }

}

