import React from "react";
import styled from "styled-components";

const Text = styled.input``;

const TextInput = ({ value }) => {
  return <Text type="text" value={value} />;
};

export default TextInput;
