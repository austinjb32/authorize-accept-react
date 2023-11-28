// ErrorComponent.jsx
import React from "react";
import { Text } from "rebass";
import styled from "styled-components";

const Button = styled.button({
  "&:hover": { cursor: "pointer" },
  padding: "10px",
  backgroundColor: "white",
  border: "2px solid black",
  fontWeight: 600,
  borderRadius: "2px"
});

const ErrorComponent = (props) => (
  <div>
    <Text fontSize={3} fontWeight={"500"} mb={3}>
      Failed to process payment
    </Text>
    {props.errors.map((error, index) => (
      <Text key={index} py={2}>
        {error}
      </Text>
    ))}
    <Button onClick={props.onBackButtonClick}>Go Back</Button>
  </div>
);

export default ErrorComponent;
