import DefaultLayout from "@/layout/index.jsx";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
