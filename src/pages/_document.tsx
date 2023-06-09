import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
    <Html>
        <Head>
            <meta name="viewport" content="viewport-fit=cover" />
            
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />

            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
)

export default Document;