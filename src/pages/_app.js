import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        defer
        data-website-id="6e6d1977-23ad-40ad-80f3-9ec7444043a1"
        src="https://umai.supertype.ai/umami.js"
      />
      <Component {...pageProps} />
    </>
  );
}
