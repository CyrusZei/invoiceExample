import React from "react";
import styled from "styled-components";

const NormalButton = styled.button``;

const Button = ({ title }) => {
  return <NormalButton>{title}</NormalButton>;
};

export default Button;
