export default function Form(){
    return (
        <div>
            <form>
                <div className="mb-3">
                    <br/>
                    <div className="input-group">
                        <span className="input-group-text">First and last name</span>
                        <input type="text" aria-label="First name" className="form-control form-control-lg"/>
                        <input type="text" aria-label="Last name" className="form-control form-control-lg"/>
                    </div>
                    <br />
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label for="inputPassword6" className="col-form-label">Password</label>
                        </div>
                        <div className="col-auto">
                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                            Must be 8-20 characters long.
                            </span>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}