import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { appointmentData } from "../helper/data"
import {useState} from "react"


const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData)
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">AFRA HOSPITAL</h1>
      <Doctors />
      <AppointmentList apps={appointments} />
    </main>
  )
}

export default Home
