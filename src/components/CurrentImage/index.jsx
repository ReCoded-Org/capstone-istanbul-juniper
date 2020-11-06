import React,{ useState, useEffect } from "react";
import {Col, Row} from "antd"
import "./index.css"

const CurrentImage = () => {
    const [generatedTiles, setGeneratedTiles] = useState([])
    const [tileSelected, setTileSelected] = useState({id: null, selected: false})
    const [isSolved, setIsSolved] = useState(false) // if unsolved it displays the tiles and when solved it displays the full image
    const generateTiles = () => {
        let newTilesArray = [];
        for (let i=0; i<6; i++){
            let newTile = {id:i, selected: false} // These tiles are puzzle pieces
            newTilesArray.push(newTile)
        }
        let length = newTilesArray.length
        for(let i=0;i<length;i++){
            let random = Math.floor(Math.random()*(length-1))
            let randomItemArray = newTilesArray.splice(random,1)
            newTilesArray.push(randomItemArray[0])
        }
        setGeneratedTiles(newTilesArray)
    }

    useEffect(() => {
        generateTiles();
    }, [])

    useEffect(() => {
        checkSolution()
    }, [generatedTiles])

    const handleSelect = (currId) => {
        if (tileSelected.selected) {
            const prevId = tileSelected.id
            swapTiles(prevId, currId)
            
        } else {
            setTileSelected({id: currId, selected: true })
            const tileIndex = generatedTiles.findIndex(tile => tile.id === currId)
            generatedTiles[tileIndex] = {...generatedTiles[tileIndex], selected: true}
        }
    }

    const swapTiles = (id1, id2) => {
        let newTiles = [...generatedTiles]
        let index1 = generatedTiles.findIndex(tile => tile.id === id1)
        let index2 = generatedTiles.findIndex(tile => tile.id === id2)
        let tile1 = {...generatedTiles[index1]}
        let tile2 = {...generatedTiles[index2]}
        newTiles[index1] = tile2;
        newTiles[index2] = tile1;
        newTiles.map(tile => tile.selected = false)
        setGeneratedTiles(newTiles)
        setTileSelected({id: null, selected: false })
    }

    const checkSolution = () => {
        const isCorrect = generatedTiles.reduce((curr,tile, i) => {
                if(tile.id !== i){
                    curr = false
                    return curr
                }
                else {
                    curr = true
                    return curr
                }
        }, false)
        setIsSolved(isCorrect)
    }

    return (
        <Col className="puzzlePage__puzzleBox__CurrentImage" >
            
            {!isSolved? generatedTiles.map(tile => {
                return (
                    <Row key={"tileNumber"+tile.id} className={tile.selected? "selectedTile": ""} 
                    onClick={() => handleSelect(tile.id)}>{tile.id}</Row>
                )
            }): ""}
        </Col>
    )
}

export default CurrentImage;