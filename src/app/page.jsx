// "use client"
import Waitlist from "./components/Waitlist/Waitlist";
import "./globals.css"

export default function Home() {
  return (
    <>
      <div className="waitlist-wrapper">
        <h1 className='waitlist-title'>Join our the Waitlist</h1>
        <p>& Be Part of Something Big</p>
        <Waitlist />
      </div>
    </>
  );
}

