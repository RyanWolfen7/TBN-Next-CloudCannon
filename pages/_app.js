import {CloudCannonConnect} from '@cloudcannon/react-connector'
import { landingPage } from '@/lib/data';

App.getInitialProps = async (ctx) => {
	return { 
		pageProps: {
			landingPage
		}
	};
};

export default function App({ Component, pageProps }) {
	console.log('_app', pageProps)
	const AppComponent = CloudCannonConnect(Component);
	return <AppComponent {...pageProps}/>
}
