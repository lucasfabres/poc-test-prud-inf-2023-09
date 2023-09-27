import styled from 'styled-components';
import { Grid } from './Grid';

const Full = styled.div`
  width: 100%;
  height: 100%;

  padding: 1rem;

  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-weight: 600;

  text-align: center;

  border-radius: 4px;
`;

export const GridTest = (): JSX.Element => {
  return (
    <Grid container margin>
      <Grid xs={4} sm={8} md={8} lg={12} xl={12}>
        <Full>Eu ocupo sempre uma linha inteira</Full>
      </Grid>

      {Array.from({ length: 12 }).map((_, index) => (
        <Grid key={index} xs={1} sm={1} md={1} lg={1} xl={1}>
          <Full>Eu ocupo 1 linha</Full>
        </Grid>
      ))}

      <Grid xs={2} sm={4} md={4} lg={6} xl={6}>
        <Full>Eu ocupo sempre metade de uma linha</Full>
      </Grid>

      <Grid lg>
        <Full>
          Eu fico no tamanho maximo do conteúdo até o breakpoint 1024, depois
          disso tento me encaixar
        </Full>
      </Grid>

      <Grid xs={4} sm={4} md={4} lg={6} xl={6}>
        <Full>Eu ocupo metade da linha acima de xs</Full>
      </Grid>

      <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
        <Full>Eu ocupo 2 linhas</Full>
      </Grid>

      <Grid xs sm md lg xl>
        <Full>Eu tento meu melhor para me encaixar</Full>
      </Grid>
    </Grid>
  );
};
