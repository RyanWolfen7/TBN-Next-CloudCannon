import {CloudCannonConnect} from '@cloudcannon/react-connector'
import { landingPage } from '@/lib/data';

export default function App({ Component, pageProps }) {
	const AppComponent = CloudCannonConnect(Component);
	return <AppComponent {...pageProps} langingPage={landingPage} />
}
