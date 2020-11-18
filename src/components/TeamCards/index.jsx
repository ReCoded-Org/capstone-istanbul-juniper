import React,{useState, useEffect} from "react";
import db from "./../../firebaseConfig"
import "./index.css"

const FIREBASE_LINK = "";
const MEMBERS_NAMES = ["ammar", "ibrahim", "majd", "sule", "tarkan", "yaman"]

const TeamCards = () => {
    const [dataState, setDataState] = useState([])
    const [imageUrl, setImageUrl] = useState([]);
    const [linkedinUrl, setLinkedinUrl] = useState([]);
    const [githubUrl, setGithubUrl] = useState([]);

    const fetchData = async () => {
        const res = await db.collection("team").doc("teamInfo").get()
        const data = res.data()
        
        setDataState(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(()=>{
        console.log("data", dataState.info)
    }, [dataState])

    return(
        <>
        </>
    )

}

export default TeamCards