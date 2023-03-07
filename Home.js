import React, { useState } from "react";

function Home() {

    const [valid, setValid] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [check, setCheck] = useState("");
    const [mailvalid, setMailvalid] = useState(true);
    const [passvalid, setPassvalid] = useState(true);



    const HandleSubmit = (e) => {
        e.preventDefault();

        if (name != "" && age != "" && email != "" && password != "") {
            alert("from submitted Successfully");
        }
        else {
            setValid(true)
        }
    }



    const HandleChangeEmail = (e) => {

        let regEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        if (!regEmail.test(e.target.value)) {
            setMailvalid(false)
        } else {
            setMailvalid(true)
        }
        setEmail(e.target.value)
    }


    const HandleChangePassword = (e) => {

        let regPass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

        if (!regPass.test(e.target.value)) {
            setPassvalid(false)
        } else {
            setPassvalid(true)
        }
        setpassword(e.target.value)
    }



    return (

        <div className="row bg-success text-white">
            <form className="mx-auto col-10 col-md-8 col-lg-6">
                <div class="form-group w-50">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
                    {name === "" && valid ? <span className="text-danger">*Required</span> : ""}
                </div>
                <div class="form-group w-50">
                    <label for="exampleInputEmail1">Age</label>
                    <input type="number" class="form-control" value={age} onChange={e => setAge(e.target.value)} />
                    {age == "" && valid ? <span className="text-danger">*Required</span> :
                        age < 1 || age > 100  ? <span className="text-danger">*Invalid Age</span> : ""}
                </div>
                <div class="form-group w-50">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" value={email} onChange={HandleChangeEmail} />
                    {email === "" && valid ? <span className="text-danger">*Required</span> :
                        email !== "" && !mailvalid ? <span className="text-danger">*Invalid Email</span> : ""}
                </div>
                <div class="form-group w-50">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" value={password} onChange={HandleChangePassword} />
                    {password == "" && valid ? <span className="text-danger">*Required</span> :
                        password !== "" && !passvalid  && valid? <span className="text-danger">*Invalid Password</span> : ""}
                </div>
                <div class="form-check w-50">
                    <input type="checkbox" class="form-check-input" value={check} onChange={e => setCheck(e.target.value)} />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" onClick={HandleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Home;