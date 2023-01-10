import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForms from "./components/FeedbackForms";
import Header from "./Header";
import FeedbackList from "./components/FeedbackList";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <>
      <FeedbackProvider>
        <BrowserRouter>
          <Header />

          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForms />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              ></Route>

              <Route path="/about" element={<About />} />
            </Routes>
            <AboutIconLink />
          </div>
        </BrowserRouter>
      </FeedbackProvider>
    </>
  );
}

export default App;
