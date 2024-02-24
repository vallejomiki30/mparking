import mongoose from 'mongoose'

const parkingLotSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: [true, "Please enter user ID"]
        },
        name: {
            type: String,
            required: [true, "Please enter your firstname."]
        },
        description: {
            type: String,
            required: [true, "Please enter your lastname."]
        },
    },
    {
        timestamps: true
    }
)

const ParkingLot = mongoose.models.parkinglot || mongoose.model("parkinglot", parkingLotSchema)
export default ParkingLot