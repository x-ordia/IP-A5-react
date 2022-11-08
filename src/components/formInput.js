function FormInput({handleChange, formInputData, handleSubmit}){
    return(
        <div className="form-row row" style={{marginTop: '50px',marginLeft: '200px', width: '780px'}}>
          <h2 style={{color: 'white', marginBottom: '40px'}}>Please enter this form for collaborations</h2>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" />
          </div>
          <div className="col">
            <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
          </div>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.domain} name="domain" className="form-control" placeholder="Domain" />
          </div>
          <div className="col">
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </div>
    )
    }
    
    export default FormInput;