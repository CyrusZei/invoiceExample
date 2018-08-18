import React from "react";
import styled from "styled-components";

const NormalButton = styled.button`
  width: 200px;
`;

const Container = styled.div`
  width: 500px;
`;

const Button = ({ title, addInvoice, isEditing }) => {
  return (
    <Container>
      <NormalButton onClick={addInvoice}>
        {isEditing ? "Save" : "Add"}
      </NormalButton>
    </Container>
  );
};

export default Button;
