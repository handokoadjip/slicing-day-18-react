import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionHeader,
  SectionJumbotron,
  SectionJourney,
  SectionExperience,
  SectionUpcomingClass,
  SectionSubscribe,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Afrian Hanafi | Makers Workshop";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
          <SectionHeader />
        </Header>
        <Main>
          <SectionJumbotron />
          <SectionJourney />
          <SectionExperience />
          <SectionUpcomingClass />
          <SectionSubscribe />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
