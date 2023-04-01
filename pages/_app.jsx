import DefaultLayout from "@/Layout/index";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
