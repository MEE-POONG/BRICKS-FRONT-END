import { Provider } from "react-redux";
import Layout from "../Layout/Layout";
import "../styles/globals.css";
import { store } from "/store/store"

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
