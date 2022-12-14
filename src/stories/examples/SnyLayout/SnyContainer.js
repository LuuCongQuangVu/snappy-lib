import React from 'react';
import { SnyContainer } from 'snappy';

function Example(props) {
  return (
    <>
      <SnyContainer className="example border mb-4">.container</SnyContainer>
      <SnyContainer className="example border mb-4" fluid="sm">
        .container-sm
      </SnyContainer>
      <SnyContainer className="example border mb-4" fluid="md">
        .container-md
      </SnyContainer>
      <SnyContainer className="example border mb-4" fluid="lg">
        .container-lg
      </SnyContainer>
      <SnyContainer className="example border mb-4" fluid="xl">
        .container-xl
      </SnyContainer>
      <SnyContainer className="example border mb-4" fluid>
        .container-fluid
      </SnyContainer>
    </>
  );
}

export default Example;
