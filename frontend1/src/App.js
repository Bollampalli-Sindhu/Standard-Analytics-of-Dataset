import "./App.css";
import Home from "./pages/home/Home";
import AnalysisPage from "./pages/analysis/Analysis";
import { BrowserRouter as Router, Routes, useParams, Route } from "react-router-dom";

function App() {
  const Wrapper = (props) => {
    const params = useParams();
    return <AnalysisPage {...{ ...props, match: { params } }} />;
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/analysis/:datasetName" element={<Wrapper />} />
          {/* <Route path = '/analysis' element = {<AnalysisPage/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
