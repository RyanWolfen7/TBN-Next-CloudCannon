import '../styles/globals.css'
import {CloudCannonConnect} from '@cloudcannon/react-connector'
import { landingPage } from '@/lib/data';
import NavBar from './../components/navbar/index';

export default function App({ Component, pageProps }) {
	console.log('_app', pageProps)
	const AppComponent = CloudCannonConnect(Component);
	return (
		<>
			<NavBar/>
			<AppComponent {...pageProps}/>
		</>
	)
}
