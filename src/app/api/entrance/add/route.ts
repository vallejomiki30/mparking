import ParkingEntrance from '@/model/parkingEntranceModel';
import ParkingLevel from '@/model/parkingLevelModel';
import ParkingLot from '@/model/parkingLotModel';
import Sequence from '@/model/sequenceModel';
import { dbconn } from '@/db/conn'
import { NextRequest, NextResponse } from "next/server";

dbconn()

export async function POST(req: NextRequest) {

    try {
        const reqBody = await req.json()
        const {name, description} = await reqBody.mutateValues.values
        const parkingLevel = reqBody.mutateValues.levelID
        const location = reqBody.mutateValues.locationID
        const getParkingLevel = await ParkingLevel.findOne({ id: parkingLevel })
        const existing = await ParkingEntrance.findOne({ "parkingLot.parkingLotID": getParkingLevel.parkingLot.parkingLotID, "parkingLot.parkingLevelID": parkingLevel, name })

        if (!existing) {
            if (location > getParkingLevel.grid) {
                return NextResponse.json({
                    error: "The Location point is outside the grid scope.",
                })
            }

            const updateSequence = await Sequence.findOneAndUpdate({ name: "parkingentrance" }, { "$inc": { "val": 1 } }, { new: true })
            let valID
            if (updateSequence === null) {
                Sequence.create({
                    name: "parkingentrance",
                    val: 1001
                })
                valID = 1001
            }
            else {
                valID = updateSequence.val
            }

            const newParkingEntrance = await ParkingEntrance.create({
                id: valID,
                parkingLot: {
                    parkingLotID: getParkingLevel.parkingLot.parkingLotID,
                    parkingLotName: getParkingLevel.parkingLot.parkingLotName
                },
                parkingLevel: {
                    parkingLevelID: getParkingLevel.id,
                    parkingLevelName: getParkingLevel.name
                },
                name,
                description,
                location
            })

            if (newParkingEntrance) {
                return NextResponse.json({
                    message: "New Parking Entrance has been added.",
                })
            }

            else {
                return NextResponse.json({
                    message: "Something went wrong when adding a new parking entrance.",
                })
            }
        }

        else {
            return NextResponse.json({
                error: "Parking Entrance with that name already exists.",
            })
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: "An unexpected error occured.",
        })
    }


}

