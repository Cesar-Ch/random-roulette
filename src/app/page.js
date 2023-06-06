'use client'

import RandomValue from "@/components/RandomValue";
import Roulette from "@/components/Roulette";
import { useState } from "react";

export default function Home() {

  const [rouletteValues, setRouletteValues] = useState('')
  const [seeValue, setSeeValue] = useState(false)


  return (
    <div className='h-full w-full flex justify-around flex-wrap '>
      <div className='h-screen w-full sm:w-[50%]  bg-[#FFF] text-black flex justify-around text-center flex-col p-5 dark:bg-[#18162B] dark:text-white'>
        <div>
          <h1 className={`text-3xl font-bold `}>Random Roulette</h1>
        </div>

        <div className='flex items-center flex-col '>

          <h2 className='font-bold text-xl py-4'>Inputs</h2>

          <textarea className="p-3 rounded-md text-[#1273C4] bg-[#F3F3F3] border-gray-200 py-2.5 pe-10 shadow-sm dark:border-gray-700 dark:bg-[#302F41] dark:text-[#0BCDA8] sm:text-sm " name="" id="" cols="30" rows="10" placeholder='Enter text' onChange={(e) => setRouletteValues(e.target.value)}></textarea>

        </div>

      </div>

      <div className='h-screen w-full sm:w-[50%] flex justify-center items-center flex-col p-5 bg-[#CBCFDA] dark:bg-[#302F41] relative'>
        <Roulette rouletteValues={rouletteValues} seeValue={seeValue} setSeeValue={setSeeValue} />
      </div>
      {
        seeValue && <RandomValue rouletteValues={rouletteValues} seeValue={seeValue} setSeeValue={setSeeValue} />
      }
    </div >
  )
}
