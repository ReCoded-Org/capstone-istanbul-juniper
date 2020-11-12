import React,{useState} from "react"
import {Col, Row} from "antd"

// This component contains the list of images the user can choose to solve
// it also renders the PuzzleGrid component
// When the user clicks on an image it will be passed to the PuzzleGrid component as a prop
// PuzzleGrid then renders the puzzle tiles of that image

const PuzzleGameContainer = () => {
    const [currentImage, setCurrentImage] = useState("");
    
    const handleImageClick = (e) => {
        setCurrentImage(e.target)
    }

    return(
        <Col className="gameContainer">
            <Row class= "gameContainer__listOfImages">
                {/*Images are mapped through here*/}
            </Row>
            <Row>
                {/*PuzzleGrid is rendered here*/}
            </Row>
        </Col>
    )
}