import React from "react";
import Header from "./components/Header";
import Markdown from "./components/Markdown";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-content">
      <Header />
      <div className="text-panels">
        <Markdown />
        <Preview />
      </div>
      <Footer />
    </div>
  );
}

export default App;
