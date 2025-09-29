import Waitlist from "./components/Waitlist/Waitlist";
import "./globals.css"

export default function Home() {

  // may be
  // setTimeout(() => {
  //   console.log("Hello World")
  // }, 1000)
  
  return (
    <>
      <div className="waitlist-wrapper">
        <h1 className='waitlist-title'>Join our Waitlist</h1>
        <p>& Become a Part of Something Big</p>
        <Waitlist />
      </div>
    </>
  );
}

// https://tpp-vite.vercel.app/ add this website to our portfolio