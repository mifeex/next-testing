import { Html, Head, Main, NextScript } from "next/document";
import { seoDefaults } from "@/components/Metas/globalMetas";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicons/favicon.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/manifest.webmanifest" />
        {seoDefaults.map((seoDefault) => (
          <meta
            name={seoDefault.name}
            content={seoDefault.content}
            key={seoDefault.name}
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
