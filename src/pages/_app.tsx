import { useState } from 'react';
import type {AppProps} from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import { QueryClientProvider, QueryClient } from 'react-query'

const App = ({ Component, pageProps }: AppProps) => {
    const [ queryClient ] = useState(()=> new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </QueryClientProvider>
    
    )
}

export default App;