import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
	<Html data-theme="winter">
		<Head>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
)

export default Document
