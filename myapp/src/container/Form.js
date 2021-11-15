import React from "react";
import Button from "../components/button/Button";

function Form(){

    return(
        <>

<div class="bg-white-200 py-32 px-10 min-h-screen ">
  
  <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form action="">


<div class="flex items-center mb-5">
 
  
  <input type="text" id="name" name="name" placeholder="Book's Name" 
         class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                text-gray-600 placeholder-gray-400
                outline-none"/>
</div>

<div class="flex items-center mb-5">
 

  <input type="text" id="name" name="name" placeholder="Author's Name" 
         class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                text-gray-600 placeholder-gray-400
                outline-none"/>
</div>

<div class="flex items-center mb-5">
 
 
  <input type="number" id="number" name="number" placeholder="Number of pages" 
         class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                text-gray-600 placeholder-gray-400
                outline-none"/>
</div>



<div>
<p class="inline-block w-20 mr-6 text-right 
                           font-bold text-gray-600">Categories</p>
<div class="flex items-center mb-5">
  <select class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                text-gray-600 placeholder-gray-400
                outline-none">
      <option>Fantasy</option>
      <option>Action</option>
      <option>Adventure</option>
      <option>Horror</option>
      <option>Historical</option>
      <option>Literary Fiction</option>
  </select>
</div>
</div>
<div class="text-right">
  <Button class="py-3 px-8 bg-green-400 text-white font-bold" value="Validate"/>
</div>

</form>
</div>
</div>
        </>
    )
};

export default Form
