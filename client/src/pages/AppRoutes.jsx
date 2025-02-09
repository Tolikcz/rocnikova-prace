import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MonkeyCreateForm from "./MonkeyCreateForm";
import MonkeyUpdateForm from "./MonkeyUpdateForm";
import MonkeyView from "./MonkeyView";
import MonkeyList from "./MonkeyList";


export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/create-monkey" element={<MonkeyCreateForm/>}/>
                <Route path="/update-monkey" element={<MonkeyUpdateForm/>}/>
                <Route path="/monkey/:id" element={<MonkeyView/>}/>
                <Route path="/monkeys" element={<MonkeyList/>}/>
            </Routes>        
        </BrowserRouter>
    </>
  )
}
