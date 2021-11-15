import React from "react";

function Button (props){
    return(
        <div class="text-center">
        <button  class="p-2 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300" >{props.value}</button>
    </div>
    );

};

export default Button;