import mongoose from 'mongoose'

const parkingEntranceSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: [true, "Please enter entrance ID"]
        },
        parkingLot:{
            parkingLotID: {
                type: String,
                required: [true, "Please enter Parking Lot ID"]
            },
            parkingLotName: {
                type: String,
                required: [true, "Please enter Parking Lot Name"]
            },
        },
        parkingLevel:{
            parkingLevelID: {
                type: String,
                required: [true, "Please enter Parking Level ID"]
            },
            parkingLevelName: {
                type: String,
                required: [true, "Please enter Parking Level Name"]
            },
        },
        name: {
            type: String,
            required: [true, "Please enter the name of the floor level."]
        },
        description: {
            type: String,
            required: [true, "Please enter the decription for this floor level."]
        },
        location: {
            type: Number,
            required: [true, "Please enter preferred location number."]
        }
    },
    {
        timestamps: true
    }
)

const ParkingEntrance = mongoose.models.parkingentrance || mongoose.model("parkingentrance", parkingEntranceSchema)
export default ParkingEntrance