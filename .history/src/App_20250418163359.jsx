import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="container"><Header />
          {/* this is content area */}
          
          <Content />
          {/* foô content */}
          <Footer />
          </div> 
      </div>
    );
  }
}
export default App;