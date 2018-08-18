import React from "react";
import styled from "styled-components";

const NormalButton = styled.button`
  width: 200px;
`;

const Container = styled.div`
  width: 500px;
`;

const Button = ({ title, addInvoice }) => {
  return (
    <Container>
      <NormalButton onClick={addInvoice}>{title}</NormalButton>
    </Container>
  );
};

export default Button;
