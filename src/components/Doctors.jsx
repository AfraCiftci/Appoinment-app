import Container from "react-bootstrap/Container"
import { doctorData } from "../helper/data"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AddModal from "./AddModal"
import { useState } from "react"

const Doctors = () => {
  const [show, setShow] = useState(false)

  const handleImgClick = () => {
    setShow(true)
  }
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>

      <Row>
        {doctorData.map(({ id, img, dep, name }) => (
          <Col xs={6} sm={4} md={3}>
            <img
              src={img}
              alt={name}
              className="img-thumbnail doctor-img"
              onClick={handleImgClick}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal show={show} handleClose={() => setShow(false)} />
    </Container>
  )
}

export default Doctors
