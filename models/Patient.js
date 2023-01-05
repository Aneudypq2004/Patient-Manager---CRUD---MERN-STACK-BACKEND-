import mongoose from "mongoose";

const PatientSchema = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    
    email : {
        type: String,
        required: true
    }, 

    date: {
        type: Date,
        required: true
    },

    number: {
        type: Number
    },

    symptom: {
        type: String,
        required: true
    },

    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }
}, 

{
    timestamps : true
}

)

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;