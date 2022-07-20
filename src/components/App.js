import React, { Component } from "react";
import UserCard from "./UserCard";
import { Col, Row } from "antd";
import { Layout } from "antd";
import "../App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      isSubmitted: true,
    };
  }
  componentDidMount() {
    this.mounted = true;
    Promise.resolve(this.props.getPlaceHolder()).then(() => {
      this.setState({ allData: this.props.user });
    });
  }
  async componentDidUpdate(prevProps, prevState) {
    if (this.mounted && this.state.isSubmitted && this.props.user) {
      this.setState({ isSubmitted: false, allData: this.props.user });
    }
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  deleteUser = (id) => {
    let deletedUser = this.state.allData.filter((e, i) => i !== id);
    this.setState({ allData: deletedUser });
  };

  editUser = (id, name, email, phone, website) => {
    let editData = {
      id,
      name,
      email,
      phone,
      website,
    };

    const updatedProjects = [
      ...this.state.allData.slice(0, id),
      editData,
      ...this.state.allData.slice(id + 1),
    ];

    this.setState({ allData: updatedProjects });
  };
  render() {
    console.log(this.props);
    console.log(this.state.allData);
    const { Content } = Layout;
    return (
      <div>
        <Content style={{ padding: " 24px" }}>
          {this.state.allData < 9 ? (
            <div class="spinner"></div>
          ) : (
            <Row gutter={[24, 24]}>
              {this.state.allData.map((e, i) => (
                <Col span={6}>
                  <UserCard
                    key={i}
                    indexVal={i}
                    image={`https://avatars.dicebear.com/v2/avataaars/${e.username}.svg?options[mood][]=happy`}
                    username={e.username}
                    name={e.name}
                    phone={e.phone}
                    email={e.email}
                    website={e.website}
                    deleteUser={this.deleteUser}
                    editUser={this.editUser}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Content>
      </div>
    );
  }
}

export default App;
