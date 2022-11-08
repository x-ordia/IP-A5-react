import React from "react";
import { useState } from "react";
import FormInput from "./formInput";
import Table from "./table";
function Main(){

 const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     fullName:'',
     emailAddress:'',
     domain:''
    }
 );
 
 const handleChange=(evnt)=>{  
     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setformInputData(newInput)
 }
  
 const handleSubmit= (evnt) =>{
     evnt.preventDefault();
     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
     if(checkEmptyInput)
     {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {fullName:'', emailAddress:'', domain:''}
      setformInputData(emptyInput)
     }
 }  

 return(
     <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
                    <Table tableData={tableData}/>
                </div>
            </div>
        </div>
     </React.Fragment>
 );
}
export default Main;