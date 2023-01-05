import Patient from "../models/Patient.js";

const NewPatient = async (req, res) => {

    const StoredPatient = await Patient.findOne({ email: req.body.email });

    if (StoredPatient) {
        const error = new Error('The patient already exists');
        return res.status(403).json({ msg: error.message })
    }



    try {
        const patient = await new Patient(req.body);
        await patient.save();
        res.json(patient)

    } catch (error) {
        console.log(error)
    }
}

const updatePatient = async (req, res) => {

    const { id } = req.params

    const { email, name, date, number, symptom } = req.body

    const patient = await Patient.findById(id);

    if (!patient) {
        const error = new Error("THE USER DOES NOT EXISTS")
        return res.status(404).json({ msg: error.message })
            
    }
    
    try {
        patient.email = email || patient.email
        patient.name = name || patient.name
        patient.date = date || patient.date
        patient.number = number || patient.number
        patient.symptom = symptom|| patient.symptom
        const updatePatient = await patient.save();
        res.json(updatePatient);

    } catch (error) {

    }

}


const deletePatient = async (req, res) => {

    const { id } = req.params;

    const patient = await Patient.findById(id);

    if (!patient) {
        const error = new Error("THE USER DOES NOT EXISTS")
        return res.status(404).json({ msg: error.message })
    }

    try {
        const deletePatient = await patient.deleteOne()
        res.json(deletePatient)
    } catch (error) {

    }

}

const getPatients = async (req, res) => {

    try {
        const patients = await Patient.find()
        res.json(patients)

    } catch (error) {
    }



}
const getPatient = async (req, res) => {
    const {id} = req.params

    try {
        const patient = await Patient.findById(id)
        res.json(patient)

    } catch (error) {
    }

}

export { NewPatient, updatePatient, deletePatient, getPatients, getPatient }