import type {AppProps} from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
    </ThemeProvider>
)

export default App;