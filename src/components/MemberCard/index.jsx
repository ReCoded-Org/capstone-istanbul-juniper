import React,{Component} from "react"
import {Card, Row, Avatar} from "antd"
import { Link } from "react-router-dom"
import {LinkedinFilled, GithubFilled, TwitterCircleFilled} from "@ant-design/icons"
import "./index.css";

class MemberCard extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.bio = this.props.bio;
        this.linkedin = this.props.linkedin;
        this.github = this.props.github
        this.avatar = this.props.avatar
        this.state = {
            loading: true
        }
    }

    render() {
        return (
            <Card className="memberCard" loading={this.state.loading}>
                <Avatar src={this.avatar} shape="circle" alt={this.name}/>
                <Row>{this.name}</Row>
                <Row>{this.bio}</Row>
                <Row>
                    <Link to={this.linkedin}>
                        <LinkedinFilled />
                    </Link>
                    <Link to={this.github}>
                        <GithubFilled />
                    </Link>
                </Row>
            </Card>
        )
    }
}

export default MemberCard;