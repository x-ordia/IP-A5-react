function Table({tableData}){
    return(
        <table className="table" style={{color: 'black', backgroundColor: 'white', borderWidth:'0px', 
        borderStyle: 'solid', borderRadius: '30px', marginTop: '30px',marginBottom: '80px', marginLeft: '200px'}}>
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Domain</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.fullName}</td>
                            <td>{data.emailAddress}</td>
                            <td>{data.domain}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;