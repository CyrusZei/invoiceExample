import React, { Component } from "react";
import styled from "styled-components";

import TextInput from "./lib/TextInput";
import Button from "./lib/TextInput";

const Container = styled.div`
  display: flex;
`;

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Container>
        <h1>Invoice Crud example</h1>
        <TextInput />
        <Button title="Add Invoice" />
      </Container>
    );
  }
}
export default Main;
