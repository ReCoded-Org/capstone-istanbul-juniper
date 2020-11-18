import React,{useState, useEffect} from "react";
import db from "./../../firebaseConfig";
import someImg from "./../../images/yellow-spot.svg"
import MemberCard from "./../MemberCard"
import "./index.css"

const FIREBASE_LINK = "https://firebasestorage.googleapis.com/v0/b/";
const MEMBERS_NAMES = ["ammar", "ibrahim", "majd", "sule", "tarkan", "yaman"]

const TeamCards = () => {
    const [dataState, setDataState] = useState([])
    let avatars;

    const fetchData = async () => {
        const res = await db.collection("team").doc("teamInfo").get()
        const data = res.data()
        
        setDataState(data.info)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(()=>{
        console.log("data", dataState)
        // avatars = dataState.map((member) => <MemberCard name={member.name} avatar={someImg} bio="" />)
        avatars = dataState.map((member) => <img src={someImg} alt="" />)
        console.log(avatars)
    }, [dataState])

    return(
        <>
        <div>hiii</div>
        <div>{dataState.map((member) => <MemberCard name={member.name} avatar={FIREBASE_LINK+member.avatar.slice(5)} bio="" />)}</div>
        {/* <div>{dataState.map((member) => <img src={FIREBASE_LINK+member.avatar.slice(5)} alt={member.name+"'s picture"} />)}</div> */}
        </>
    )

}

export default TeamCards