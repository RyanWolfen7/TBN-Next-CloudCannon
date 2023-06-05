import '../styles/globals.css'
import '../styles/editor.css'
import '../styles/socialMediaSection.css'
import { CloudCannonConnect } from '@cloudcannon/react-connector'
import NavBar from './../components/navbar/index';
import SocialMediaSection from './../components/SocialMediaSection';
import Footer from './../components/Footer';

export default function App({ Component, pageProps }) {
	const AppComponent = CloudCannonConnect(Component);
	return (
		<>
			<NavBar />
			<AppComponent {...pageProps} />
			<SocialMediaSection />
			<Footer />
		</>
	)
}
