import React from "react";
import { NeuCard, NeuProgressBar } from "neumorphic-ui";
function Test() {
  return (
    <div>
      <NeuCard width="350px" height="320px">
        ...Child components
      </NeuCard>
      <NeuProgressBar progress="80%" />
    </div>
  );
}

export default Test;
