import "../styles/globals.scss";
import "../styles/Font_scheme.scss";

import "../styles/Index_layout.scss";
import "../styles/Header.scss";
import "../styles/Project_summery.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
