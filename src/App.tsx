import { ThemeProvider } from 'styled-components';
import { GridTest } from './components/atoms/Grid/Test';
import { theme } from './theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <main className="flex w-screen h-screen justify-center align-center">
        <div className="flex w-full">
          <GridTest />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
