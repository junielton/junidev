import 'tailwindcss/tailwind.css'
import NextNProgress from 'nextjs-progressbar'
import PropTypes from 'prop-types'
// import '../styles/globals.css'
import ThemeContext from '../context/ThemeContextProvider'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeContext>
			<NextNProgress height={8} color="#209cee" />
			<Component {...pageProps} />
		</ThemeContext>
	)
}

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
}
export default MyApp
