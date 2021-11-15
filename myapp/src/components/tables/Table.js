import React from "react";
import Button from "../button/Button";
import Titletable from "./Titletable";
import {dataBook} from "../../helpers/Data";

function Table(props){
  

    return(
        <>
      
  
      
            <td class="p-3 font-medium capitalize">{props.id}</td>
            <td class="p-3">{props.title}</td>
            <td class="p-3">{props.author}</td>
            <td class="p-3 uppercase">{props.category}</td>

            <td class="p-3">
              {props.nbpages}
              
            </td>
            <td class="p-3">
              <Button value="Update"/>
              <Button value="Delete"/>
            </td>

      
            
      
    
 
        </>
    )
};
export default Table;
