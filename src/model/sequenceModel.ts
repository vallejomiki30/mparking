import mongoose from 'mongoose'

const sequenceSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter sequence name"]
        },
        val: {
            type: Number,
            required: [true, "Please enter the ID for this sequence"]
        }
    },
    {
        timestamps: true
    }
)

const Sequence = mongoose.models.sequences || mongoose.model("sequences", sequenceSchema)
export default Sequence