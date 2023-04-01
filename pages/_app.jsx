import DefaultLayout from "@/layouts/index.jsx";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
