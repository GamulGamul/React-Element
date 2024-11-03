import "./style/App.css";
import Header from "./Header";
import Content from "./Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SlideData from "./components/slide/SlideData";
import PublishLayout from "./components/publish/PublishLayout";
import { PublishingGuideMenu } from "./components/publish/PublishingMenuList";
import HeightMoreContent from "./components/heightMoreContent/HeightMoreContent";
import TabSlide from "./components/tabslide/TabSlide";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/slide" element={<SlideData />} />
          <Route path="/guide" element={<PublishLayout />} />
          <Route path="/morecontent" element={<HeightMoreContent />} />
          <Route path="/tabslide" element={<TabSlide />} />
          <Route element={<PublishLayout />}>
            {PublishingGuideMenu.map((item) => {
              return (
                <Route
                  key={item.key}
                  path={item.path}
                  element={item.component}
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
