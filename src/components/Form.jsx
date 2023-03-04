const Form = () => {

  return (

    <div className="container">
      <div className="min-vh-100 row py-5">
        <div className="col-4 m-auto">
        <form className data-bitwarden-watching={1}>
        <div className="form-floating mb-3">
          <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button> 
      </form>

        </div>
      </div>
    </div>
  )



}

export default Form;