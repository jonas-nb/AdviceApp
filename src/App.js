/** @format */

import Footer from "./Components/footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/main/Main";

function App() {
  return (
    <>
      <div className="bg-[#000017] h-screen flex flex-col justify-between">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
