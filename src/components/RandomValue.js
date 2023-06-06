
const RandomValue = ({ rouletteValues, seeValue, setSeeValue }) => {

    const value = rouletteValues.split('\n')[Math.round(Math.random() * (rouletteValues.split('\n').length - 1))]
    console.log(value)
    return (
        <div className="absolute flex  justify-center items-center w-[100%] h-[200%] sm:h-screen z-20  " style={{
            background: 'rgba(0, 0, 0, .45)'
        }}>
            <article
                className="rounded-lg border border-gray-100 bg-[#AEE0EC] p-4 shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25 sm:p-6 dark:text-white font-bold text-black mt-52 sm:mt-0"
            >

                <h3 className="mt-0.5 text-2xl font-medium text-gray-900 dark:text-white text-center m-4">
                    {value}
                </h3>
                <button className="inline-block rounded border border-[#1273C4] bg-[#1273C4] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#1273C4] focus:outline-none focus:ring active:text-[#1273C4] dark:border-[#0BCDA8] dark:bg-[#0BCDA8] dark:hover:text-[#0BCDA8] dark:active:text-[#0BCDA8]"
                    onClick={() => setSeeValue(!seeValue)}>OK</button>
            </article>

        </div>
    )
}

export default RandomValue