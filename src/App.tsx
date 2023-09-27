import { ThemeProvider } from 'styled-components';
import { Zoom } from './components/molecules/zoom';
import { theme } from './theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <main className="flex w-screen h-screen justify-center align-center">
        <Zoom />
      </main>
    </ThemeProvider>
  );
}

export default App;
