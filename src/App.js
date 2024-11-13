import './App.css';
// import { useState } from 'react'
import kalash1 from './img/kalash1.png'
import contacticon from './img/contactnew.gif'
import swastik from './img/swastik.svg'
import service1 from './img/service1.png'
import service2 from './img/service2.png'
import service3 from './img/service3.png'
import service4 from './img/service4.png'
import service5 from './img/service5.png'
import service6 from './img/service6phirsenew.png'
import service7 from './img/service7.png'
import service8 from './img/service8.png'
import service9 from './img/service9.png'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className='flex bg-[#faedd7] font-extrabold text-xs md:text-xl text-[#ca824c] justify-evenly w-[80%] md:w-[35%] mx-auto mt-8 p-2 md:py-3 rounded-3xl'>
        <p className=''>|| श्री गणेशाय नमः||</p>
        <p className=''>|| श्री महालक्ष्मी प्रसन्न ||</p>
      </div>
      {/* Intro */}
      <div className='mt-8 md:mt-20'>
        <img src={kalash1} alt="" className='absolute z-10 top-[4.5rem] md:top-20 left-0 md:left-16 w-[35%] h-40 md:size-auto -translate-x-8'/>
        <div className='py-2 md:py-5 bg-[#fee9de] flex flex-col'>
          <h1 className=' md:w-[35%] mx-auto py-3 bg-gradient-to-r from-[#e08e02] to-[#f54b10] inline-block text-transparent bg-clip-text text-2xl md:text-5xl font-semibold'>पंडित कृष्णा चौबे</h1>
          <p className='md:w-[20%] py-1 md:text-2xl font-semibold mx-auto bg-gradient-to-r from-[#e08e02] to-[#f54b10] inline-block text-transparent bg-clip-text'>(काशी, बनारस वाले)</p>
        </div>
        <img src={kalash1} alt="" className='absolute z-10 top-[4.5rem] md:top-20 right-0 md:right-32 w-[35%] h-40 md:size-auto'/>
      </div>
      {/* Contact */}
      <div className='flex justify-center md:justify-evenly md:w-[18%] md:mx-auto mt-10 items-center'>
        <img src={contacticon} alt="" className='w-10 md:w-12 md:size-auto mr-1 md:mr-0 border-2 border-[#e97209] p-2 rounded-full bg-[#fee9de]'/>
        <p className='text-[#e97209] text-lg md:text-2xl font-semibold'>+91 8581020828</p>
      </div>
      {/* Services */}
      <div className='mt-10 w-[85%] md:w-[70%] mx-auto rounded-2xl bg-[#fee9de] md:pb-10'>
        <div className='flex justify-evenly items-center md:w-1/2 mx-auto pt-5'>
          <img src={swastik} alt="" className='size-9 md:size-auto'/>
          <h2 className='text-[#f54b10] text-2xl md:text-4xl font-semibold'>हमारी सेवाएँ</h2>
          <img src={swastik} alt="" className='size-9 md:size-auto'/>
        </div>
        <div className='w-[85%] md:grid gap-y-5 grid-cols-3 mt-4 md:mt-8 mx-auto p-3'>
          <div className='services'>
            <img src={service1} alt="" className='serviceimg'/> 
            {<div className='titles'>विवाह</div>}
          </div>
          <div className='services'><img src={service2} alt="" className='serviceimg'/> {<div className='titles'>कुंडली</div>}</div>
          <div className='services'><img src={service3} alt="" className='serviceimg'/> {<div className='titles'>सत्यनारायण पूजा</div>}</div>
          <div className='services'><img src={service4} alt="" className='serviceimg'/> {<div className='titles'>वास्तुशांती</div>}</div>
          <div className='services'><img src={service5} alt="" className='serviceimg'/> {<div className='titles'>सतचंडी</div>}</div>
          <div className='services'><img src={service6} alt="" className='serviceimg'/> {<div className='titles'>महामृत्युंजय</div>}</div>
          <div className='services'><img src={service7} alt="" className='serviceimg'/> {<div className='titles'>अभिषेक</div>}</div>
          <div className='services'><img src={service8} alt="" className='serviceimg'/> {<div className='titles'>गृहप्रवेश</div>}</div>
          <div className='services'><img src={service9} alt="" className='serviceimg'/> {<div className='titles'>ग्रहशांती</div>}</div>
        </div>
      </div>
      {/* Footer */}
      <div className='mt-8 mb-4 bg-[#ed680b] md:text-2xl py-2 text-white font-semibold'>
        <p>अधिक जानकारी के लिए कॉल करें</p>
        <p>+91 8581020828</p>
      </div>
      <footer className='md:text-xl font-semibold text-[#ed680b] h-16 flex justify-center items-center'>
        <h1>Copyright © 2024 | NexGen</h1>
      </footer>
    </div>
  );
}

export default App;
