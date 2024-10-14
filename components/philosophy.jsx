import React from 'react'
import ColoredCard from './coloredCard'

function Philosophy() {
    return (
        <>
            <div className='bg-green-100 p-16'>
                <h1 className='text-center uppercase text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-black'>our philosophy</h1>
                <p className='text-center md:text-lg'>
                    We aim to create a meaningful impact on your life with our holistic financial solution.
                    <br /> Our vision resonates with the idea of simplifying and assuring ethical presence as a
                    <br /> financial guide to uplift financial awareness.
                </p>

              <div className="flex">
                <ColoredCard/>
              </div>

            </div>
        </>
    )
}

export default Philosophy