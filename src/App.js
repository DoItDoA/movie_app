import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// react-router로 이동하여 실행된 컴포넌트는 props안에 history, location, match, staticContext가 새로 생겨난다.
// github에 홈페이지 전시할 때는 BrowserRouter 사용하면 까다롭기 때문에 HashRouter(주소에 #이 추가됨)로 변경하여 사용한다

function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <Navigation />
      {/* Link를 사용하는 Navigation은 반드시 BrowserRouter안에 있어야한다 */}
      <Route path="/about" component={About} />
      {/* path는 url경로이고 그 경로로 가면 component About으로 이동 */}
      <Route path="/" exact={true} component={Home} />
      {/* exact를 사용해야 주소 '/'를 단독으로 사용할 수 있다.*/}
      <Route path="/movie/:id" component={Detail} />
      {/* movie/:id 에서 ':'은 변수를 의미한다. */}
    </BrowserRouter>
  );
}

export default App;
