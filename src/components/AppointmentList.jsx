import Container from "react-bootstrap/Container"

const AppointmentList = (apps) => {
  console.log(apps)
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
    </Container>
  )
}

export default AppointmentList
