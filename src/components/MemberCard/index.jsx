import React,{Component} from "react"
import {Card, Row, Col, Avatar} from "antd"
import {LinkedinFilled, GithubFilled, TwitterCircleFilled} from "@ant-design/icons"
import "./index.css";

class MemberCard extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.bio = this.props.bio;
        this.socialMedia = this.props.socialMedia;
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
                    {this.socialMedia}
                </Row>
            </Card>
        )
    }
}

export default MemberCard;