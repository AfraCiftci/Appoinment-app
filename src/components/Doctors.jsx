import Container from "react-bootstrap/Container"
import {doctorData} from "../helper/data"
import { Col, Row } from "react-bootstrap"

const Doctors = () => {
  console.log(doctorData)
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>

<Row>

{doctorData.map((item) => (
  <Col xs={6}>
  <img src="" alt="" />
  <h5></h5>
  <h6></h6>
  </Col>
))}

  <Col></Col>
</Row>
     
    </Container>
  )
}

export default Doctors
