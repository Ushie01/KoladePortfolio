import Portfolio from '@/src/client/components/portfolio';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Kola Portfolio</title>
				<meta
					name='description'
					content='Kola'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<Portfolio />
		</>
	);
}
