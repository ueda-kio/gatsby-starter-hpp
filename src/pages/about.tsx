import React from 'react';
import { SEO } from 'src/components';
import AboutMDX from 'src/internal/about.mdx';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>About</h1>
    <AboutMDX />
  </main>
);

const StyledComponent = styled(Component)`
  ${baseStyle};
`;

export default (props: any) => {
  return (
    <>
      <SEO title='Component' pathname={props.path} />
      <StyledComponent />
    </>
  );
};
