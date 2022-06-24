/** @format */

import Footer from "./Components/footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/main/Main";
import { StyleStorage } from "./Components/contexts/ContextCss";
function App() {
  return (
    <>
      <StyleStorage>
        <div className="bg-[#000017] h-screen flex flex-col justify-between">
          <Header />
          <Main />
          <Footer />
        </div>
      </StyleStorage>
    </>
  );
}

export default App;
