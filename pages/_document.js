import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { site } from '../lib/data'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
				<link rel="apple-touch-icon" href={`${site.baseurl}/apple-touch-icon.png`} />
				<link rel="icon" type="image/png" href={`${site.baseurl}/touch-icon.png`} sizes="192x192" />
				<link rel="icon" type="image/png" href={`${site.baseurl}/images/favicon.png`} />

				{site.google_analytics_key &&
					<>
						<Script
							id="google-seo"
							dangerouslySetInnerHTML={{
								__html: `
									window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
									ga('create', '${site.google_analytics_key}', 'auto');
									ga('send', 'pageview');
								`,
							}}
						/>
						<Script async src={'https://www.google-analytics.com/analytics.js'} />
					</>
				}

			</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
