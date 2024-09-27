// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useLocation } from "react-router-dom";
// import { Header, Home } from "./components";
// import { Destination, Crew, Technology } from "./pages";
// import { AnimatePresence } from "framer-motion";

// function App() {
//   const location = useLocation();

//   return (
//     <Router>
//       <Header />
//       <AnimatePresence>
//         <Routes location={useLocation} key={location.pathname}>
//         <Route path="/" exact element={<Home/>}/>
//         <Route path="/destination" element={<Destination />} />
//         <Route path="/crew" element={<Crew />} />
//         <Route path="/technology" element={<Technology />} />
//       </Routes>
//       </AnimatePresence>
     
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Header, Home } from "./components";
import { Destination, Crew, Technology } from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation(); // Now properly inside Router

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;

