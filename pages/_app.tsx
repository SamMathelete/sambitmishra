import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <Header />
      <Component {...pageProps} />
      <div className="filler"/>
      <Footer />
    </div>
  );
}
