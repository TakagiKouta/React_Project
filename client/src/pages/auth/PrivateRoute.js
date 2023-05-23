import { Route, Routes } from "react-router-dom";
import Login from "./Login";

const PrivateRoute = (props) => {
  const { component: Component } = props;
  // alert("Privateに届いたよ")
  console.log(Component)
    const isDone = false;

  const Componentd = isDone ? Component : Login;
  console.log(Componentd)
  //currentUserがtrueの場合component＝Home、falseならLoginコンポーネントにroute

  return <Routes><Route element={Componentd } /></Routes>  
};

export default PrivateRoute;
