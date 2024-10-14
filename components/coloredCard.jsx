import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain  } from '@fortawesome/free-solid-svg-icons'



function ColoredCard() {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow light:bg-green-800 light:border-green-700">
            <div className="flex flex-col items-center pb-10">
         
                {/* <span className='w-24 h-24 mb-3 rounded-full shadow-lg text-center'> */}
                <FontAwesomeIcon icon="fa-regular fa-comment" />
                  <FontAwesomeIcon className="w-14 h-14 mb-3 rounded-full shadow-lg p-6" icon={faBrain} />
                {/* </span> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 light:text-black">Bonnie Green</h5>
                <p className="text-sm text-center text-wrap text-gray-500 dark:text-gray-400">Visual Designer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam neque accusantium ducimus ipsam incidunt nobis, at ullam odio explicabo suscipit quibusdam, animi, dolores quod corporis non nisi magni delectus.</p>
                {/* <div className="flex mt-4 md:mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                    <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                </div> */}
            </div>
        </div>

    )
}

export default ColoredCard