import React,{Component} from "react";
import {Card, Row, Avatar} from "antd";
import {LinkedinFilled, GithubFilled, TwitterCircleFilled} from "@ant-design/icons"
import "./index.css";

class MemberCard extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.role = this.props.role;
        this.bio = this.props.bio;
        this.linkedin = this.props.linkedin;
        this.github = this.props.github
        this.avatar = this.props.avatar
    }

    render() {
        return (
            <Card span={6} size="default" className="memberCard" bordered={false} >
                <div className="memberCard__header">
                    <Avatar className="memberCard__avatar" size={120} src={this.avatar} shape="circle" alt={this.name}/>
                    <Row className="memberCard__name">{this.name}</Row>
                    <Row className="memberCard__role">{this.role}</Row>
                </div>
                
                <Row className="memberCard__bio">{this.bio}</Row>
                <Row className="memberCard__socialMedia">
                    <a className="memberCard__socialMedia--linkedin" href={this.linkedin}>
                        <LinkedinFilled />
                    </a>
                    <a className="memberCard__socialMedia--github" href={this.github}>
                        <GithubFilled />
                    </a>
                </Row>
            </Card>
        )
    }
}

export default MemberCard;