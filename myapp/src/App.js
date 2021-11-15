import React from "react";
import Title from "./components/Title";
import Table from "./components/tables/Table";
import './index.css';
import {dataBook} from "./helpers/Data";
import Titletable from "./components/tables/Titletable";


function App() {
  return (
    <div className="page">
      
  	<Title/>
    <Titletable/>

    
    
    
    <tbody>

      {dataBook.map(item=>(
        <tr key={item.id}>
        <Table id={item.id}
         title={item.title}
        author={item.author}
        nbpages={item.nbpages}
        category={item.category} />

      </tr>

      ))}
    </tbody>
    
              
            
</div>
  );
}

export default App;
