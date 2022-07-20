import React, { Component } from "react";
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartTwoTone,
  HeartFilled,
  DeleteOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Modal, Input, Row, Col } from "antd";
const { Meta } = Card;

export class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: true,
      IsModalVisible: false,
      name: "",
      email: "",
      phone: "",
      website: "",
    };
  }
  showModal = () => {
    this.setState({ IsModalVisible: true });
  };
  handleCancel = () => {
    this.setState({ IsModalVisible: false });
  };
  handleOk = (id) => {
    this.props.editUser(
      id,
      this.state.name,
      this.state.email,
      this.state.phone,
      this.state.website
    );
    this.setState({ IsModalVisible: false });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Card
          key={this.props.indexVal}
          cover={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <img
                alt={this.props.username}
                src={this.props.image}
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          }
          actions={[
            <>
              {this.state.like ? (
                <HeartTwoTone
                  twoToneColor="#eb2f96"
                  key="like"
                  onClick={() => this.setState({ like: false })}
                />
              ) : (
                <HeartFilled
                  style={{ color: "#eb2f96" }}
                  onClick={() => this.setState({ like: true })}
                />
              )}
            </>,
            <EditOutlined key="edit" onClick={this.showModal} />,
            <DeleteOutlined
              key="delete"
              onClick={() => this.props.deleteUser(this.props.indexVal)}
            />,
          ]}
        >
          <Meta title={this.props.name} style={{ paddingBottom: "0.5rem" }} />
          <Meta
            avatar={<MailOutlined />}
            description={this.props.email}
            style={{ paddingBottom: "0.5rem" }}
          />
          <Meta
            avatar={<PhoneOutlined />}
            description={this.props.phone}
            style={{ paddingBottom: "0.5rem" }}
          />
          <Meta
            avatar={<GlobalOutlined />}
            description={this.props.website}
            style={{ paddingBottom: "0.5rem" }}
          />
        </Card>
        <Modal
          title="Basic Modal"
          visible={this.state.IsModalVisible}
          onOk={() => this.handleOk(this.props.indexVal)}
          onCancel={this.handleCancel}
        >
          <Row gutter={[16, 16]}>
            <Col span={8} style={{ textAlign: "end" }}>
              <p>
                <span style={{ color: "red" }}>*</span>Name
              </p>
            </Col>
            <Col span={16}>
              <Input
                name="name"
                placeholder={this.props.name}
                defaultValue={this.state.name}
                onChange={this.handleChange}
              />
            </Col>
            <Col span={8} style={{ textAlign: "end" }}>
              <p>
                <span style={{ color: "red" }}>*</span>Email
              </p>
            </Col>
            <Col span={16}>
              <Input
                name="email"
                placeholder={this.props.email}
                defaultValue={this.state.email}
                onChange={this.handleChange}
              />
            </Col>
            <Col span={8} style={{ textAlign: "end" }}>
              <p>
                <span style={{ color: "red" }}>*</span>Phone
              </p>
            </Col>
            <Col span={16}>
              <Input
                name="phone"
                placeholder={this.props.phone}
                defaultValue={this.state.phone}
                onChange={this.handleChange}
              />
            </Col>
            <Col span={8} style={{ textAlign: "end" }}>
              <p>
                <span style={{ color: "red" }}>*</span>Website
              </p>
            </Col>
            <Col span={16}>
              <Input
                name="website"
                placeholder={this.props.website}
                defaultValue={this.state.website}
                onChange={this.handleChange}
              />
            </Col>
          </Row>
        </Modal>
      </>
    );
  }
}

export default UserCard;
