import React from "react";


function SvgStack () {
    return (
        <span className="mt-1 flex space-x-4">
            {/* WordPress Icon */}
            <i className="fab fa-wordpress text-4xl text-blue-700"></i>
 
            {/* PHP Icon */}
            <i className="fab fa-php text-4xl text-blue-700"></i>
            
            {/* React Icon */}
            <i className="fab fa-react text-4xl text-blue-600"></i>

            {/* JavaScript Icon */}
            <i className="fab fa-js-square text-4xl text-yellow-500"></i>

            {/* CSS Icon */}
            <i className="fab fa-css3-alt text-4xl text-blue-500"></i>
        </span>
    )
}


export default SvgStack;