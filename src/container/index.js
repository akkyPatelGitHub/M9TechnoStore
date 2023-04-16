import React from "react";
import Footer from "./footer";
import Header from "./header";
import Middle from "./middle";

const Index = () => {
  const onUserListScroll = async (event) => {
    console.log(
      event.currentTarget.scrollHeight - event.currentTarget.scrollTop ==
        event.currentTarget.clientHeight
    );
    console.log(
      "event.currentTarget.clientHeight => ",
      event.currentTarget.clientHeight
    );
  };

  return (
    <>
      <div onScroll={onUserListScroll}>
        <Header />
        <Middle />
        <Footer />
      </div>
    </>
  );
};

export default Index;
