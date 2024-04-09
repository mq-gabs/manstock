import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/themes/global';
import light from './assets/themes/light';
import { Router } from './routes';
import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

function App() {
  return (
    <ThemeProvider theme={light}>
      <ToastProvider>
        <AuthProvider>
            <GlobalStyles />
            <Router />
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App;
