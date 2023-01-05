import express from "express";
import { NewPatient, getPatients, updatePatient, deletePatient, getPatient} from "../controllers/PatientController.js";

const router = express.Router();

router.post('/', NewPatient)
router.get('/', getPatients)
router.get('/:id', getPatient)
router.put('/:id', updatePatient)
router.delete('/:id', deletePatient)



export default router;

