import { Html, Head, Main, NextScript } from 'next/document';
import tw from 'twin.macro';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/pictures/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/pictures/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/pictures/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/pictures/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/pictures/favicon/safari-pinned-tab.svg" color="#565656" />
        <link rel="shortcut icon" href="/pictures/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="msapplication-config" content="/pictures/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  )
}

const Body = tw.body`mt-[80px] bg-[#f4f4f4]`