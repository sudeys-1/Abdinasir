import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FQ from "./components/FQ"
import Contact from "./Components/SingUp"
import ServiceProducts from "./components/ServiceProduct"
import WhyChoosign from "./components/WhyChoosign"
function App (){
  return<Routes>
    <Route path="/"element={<Home/>} />
    <Route path="/FQ" element ={<FQ/>}/>
    <Route path="/Sing In" element={<Contact/>}/>
    <Route path="/ServiceProduct" element={<ServiceProducts/>}/>
    <Route path="/WhyChooseUs" element={<WhyChoosign/>}/>
  </Routes>

}
export default App