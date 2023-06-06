'use client'
import { useState } from "react";
import confetti from "canvas-confetti";

import Arrow from "./Arrow"


const Roulette = ({ rouletteValues, seeValue, setSeeValue }) => {

    const [isSpinning, setIsSpinning] = useState(false)
    const roulette = rouletteValues.split('\n')


    function Spinning() {
        if (roulette.length > 1) {
            setIsSpinning(true)
            setTimeout(() => {
                setSeeValue(true)
                confetti({
                    angle: 60,
                    particleCount: 100,
                    spread: 70,
                    origin: {
                        x: 0
                    }
                })
                confetti({
                    angle: 120,
                    particleCount: 100,
                    spread: 70,
                    origin: {
                        x: 1
                    }
                })
                setIsSpinning(false)
            }, 4000)
        }
    }
    const colors = {
        '0': 'bg-red-500',
        '1': 'bg-yellow-500',
        '2': 'bg-green-500',
        '3': 'bg-blue-500',
        '4': 'bg-purple-500',
    }
    return (
        <div className="flex justify-center items-center flex-col relative">
            <Arrow />

            <div className={`w-[300px] h-[300px] bg-[#333] rounded-[50%] shadow-[0_0_0_5px_rgba(255,255,255,1)]  overflow-hidden relative ${isSpinning ? 'transition-all duration-[5000ms] rotate-[1800deg]' : ''}`} onClick={Spinning}>
                {
                    roulette.map((valor, index) => {
                        const angle = index * (360 / roulette.length);
                        let sectorStyle = {
                            backgroundColor: colors[index % 5],
                            transform: `rotate(${angle}deg)`,
                            clipPath: `polygon(0 0, ${(450 + roulette.length * 5) / roulette.length}% 0, 100% 100%,0 ${(450 + roulette.length * 5) / roulette.length}%`,
                            width: '50%',
                            height: '50%',
                        }

                        if (roulette.length === 1) {
                            sectorStyle = {
                                width: '100%',
                                height: '100%',
                                backgroundColor: colors[index % 5],
                            }
                        } else if (roulette.length === 2) {
                            sectorStyle = {
                                width: '50%',
                                height: '100%',
                                backgroundColor: colors[index % 5],
                                transform: `rotate(${angle}deg)`,
                                top: `${-300 * index}px`,
                            }
                        }
                        return (
                            <div
                                key={index}
                                className={`${colors[index % 5]} flex justify-center items-center  text-black absolute font-bold origin-bottom-right transition-all`}
                                style={sectorStyle}
                            >
                                {valor}
                            </div>
                        )
                    })

                }

            </div>



        </div>
    )
}

export default Roulette