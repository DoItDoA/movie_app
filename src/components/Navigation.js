import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

//Link를 사용하면 to에서 주소(ex:/about)를 확인하고 상위 컴포넌트(BrowserRouter)에서 Route로 지정된 주소로 이동한다.

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
