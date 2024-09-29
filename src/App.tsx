import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
const app = () => {

  useGSAP(()=>{
    gsap.fromTo(
        "#page1 .image",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      );
  })

  return (
    <div className="w-screen relative overflow-x-hidden h-screen">
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  )
}

export default app;