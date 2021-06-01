import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="shortcut icon" href="/ok_rychillie.png" />

          <meta
            name="monetization"
            content="$ilp.uphold.com/AJqZewhyjnMZ"
          ></meta>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-45575876-4"
          />

          <link rel="stylesheet" href="/fonts/fonts.css" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-45575876-4');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
