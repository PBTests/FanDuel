import App, { Container } from "next/app";
import Global from "../components/Global";

class MyApp extends App {
  /*static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }*/
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Global>
          <Component {...pageProps} />
        </Global>
      </Container>
    );
  }
}

export default MyApp;
