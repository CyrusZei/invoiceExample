import React from "react";
import styled from "styled-components";

const Text = styled.input`
  margin-left: 10px;
`;
const InputLabel = styled.label``;

const TextInput = ({ stateValue, textName, changeState, title }) => {
  return (
    <InputLabel for={textName}>
      {title}
      <Text
        type="text"
        value={stateValue[textName]}
        onChange={e => changeState(e, textName)}
        name={textName}
      />
    </InputLabel>
  );
};

export default TextInput;
