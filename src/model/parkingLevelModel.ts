import mongoose from 'mongoose'

const parkingLevelSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: [true, "Please enter floor level ID"]
        },
        parkingLotID: {
            type: String,
            required: [true, "Please enter Parking Lot ID"]
        },
        name: {
            type: String,
            required: [true, "Please enter the name of the floor level."]
        },
        description: {
            type: String,
            required: [true, "Please enter the decription for this floor level."]
        },
        grid: {
            type: Number,
            required: [true, "Please enter preferred grid number."]
        }
    },
    {
        timestamps: true
    }
)

const ParkingLevel = mongoose.models.parkinglevel || mongoose.model("parkinglevel", parkingLevelSchema)
export default ParkingLevel