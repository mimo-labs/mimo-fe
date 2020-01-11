import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 150px auto;
`;

export const Main = styled.main`
  /* ADD GRID SIZES TO EACH PART OF THE MAIN LAYOUT */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
`;
