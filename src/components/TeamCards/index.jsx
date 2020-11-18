import React,{useState, useEffect} from "react";
import db from "./../../firebaseConfig";
import someImg from "./../../images/yellow-spot.svg"
import MemberCard from "./../MemberCard"
import { useTranslation } from "react-i18next";
import {Row} from "antd"
import "./index.css"

const FIREBASE_LINK = "https://firebasestorage.googleapis.com/v0/b/";
const MEMBERS_NAMES = ["ammar", "ibrahim", "majd", "sule", "tarkan", "yaman"]

const TeamCards = () => {
    const [t] = useTranslation();
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
        <Row className="teamCards">
            {dataState.map((member) => <MemberCard 
            key={member.name+" card"} 
            name={t(`about.teamInfo.${member.name}.name`)} 
            avatar={FIREBASE_LINK+member.avatar.slice(5)} 
            bio={t(`about.teamInfo.${member.name}.bio`)} 
            role={t(`about.teamInfo.${member.name}.role`)} 
            linkedin={member.linkedin}
            github={member.github}/>)}
        </ Row>
    )

}

export default TeamCards