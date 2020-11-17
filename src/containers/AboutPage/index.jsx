import React from "react"
import {Row, Col} from "antd";
import "./index.css";

const AboutPage = () => {
    return (
        <div className="aboutUs">
            <Row className="aboutUs__upperContent">
                <Col className="textCol">
                    <Row className="textCol__aboutUs">
                        <h2>About us</h2>
                    </Row>
                    <Row className="textCol__whyWeDoIt">
                        <h2>Why we do it</h2>
                    </Row>
                </Col>
                <Col className="illustrationCol">
                    {/* illustrations here */}
                </Col>
            </Row>
            <Row className="team">
                {/* team members cards are rendered here */}
            </Row>
        </div>
    )
}

export default AboutPage