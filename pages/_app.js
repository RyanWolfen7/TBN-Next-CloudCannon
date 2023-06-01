import '../styles/globals.css'
import '../styles/editor.css'
import { CloudCannonConnect } from '@cloudcannon/react-connector'
import NavBar from './../components/navbar/index';

export default function App({ Component, pageProps }) {
	const AppComponent = CloudCannonConnect(Component);
	return (
		<>
			<NavBar />
			<AppComponent {...pageProps} />
		</>
	)
}
