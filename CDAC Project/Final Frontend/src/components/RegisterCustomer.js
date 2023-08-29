import { useState } from "react";
import Navbar from "./Navbar";
import LoginServiceCustomer from "../Service/LoginServiceCustomer";
import { useNavigate } from "react-router-dom";
import format from "date-fns/format";

function RegisterCustomer() {
    let token = sessionStorage.getItem('user');
    const config = {
        //  headers: { Authorization: `Bearer ${token}` }
        headers: {
            'authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd");
    const [registeredDate, setRegisteredDate] = useState(formattedDate);
    const [status, setStatus] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('CUSTOMER');
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        LoginServiceCustomer.registerUser(firstName, lastName, email, password, confirmPassword, dateOfBirth, address, city, phoneNumber, registeredDate, role).then((result) => {
            var msg = JSON.stringify(result.message);
            console.log(msg);
            setStatus('Registration successful!');
            createCart(userId);
            navigate("/users/signin");
        }).catch((err) => {
            setStatus('Internal SERVER error...please try again after some time');
        });
    }

    const createCart = () => {
        LoginServiceCustomer.addUserCart(userId, config)
            .then((result) => {
                var msg = JSON.stringify(result.message);
                console.log(msg)
                setStatus('Registration successful!!! Created the cart sucessfully!!!');
            }).catch((err) => {
                setStatus('Does not create cart');
            });
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="container-fluid register-form">
                <div className="row align-items-center justify-content-evenly " style={{ height: "100vh" }}>
                    <div className="col-6 align-self-center p-5  rounded" >
                        <h1 className="log-in-in mb-5">Register User</h1>

                        <form onSubmit={handleRegister}>
                            <span className="row g-3 mb-2">
                                <div className="col-md-6">
                                    <label className="form-label">First Name</label>
                                    <div className="">
                                        <input className="form-control " type="text" placeholder="First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required></input>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Last Name</label>
                                    <div className="">
                                        <input className="form-control " type="text" placeholder="Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)} required></input>
                                    </div>
                                </div>
                            </span>
                            <span className="row g-3 mb-2">
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <div className="">
                                        <input className="form-control " type="email" placeholder="abc@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} required></input>
                                    </div>
                                </div>

                                <div className="col-md-6 ">
                                    <label className="form-label">Password</label>

                                    <div className="">
                                        <input className="form-control " type="password" placeholder="****" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
                                    </div>
                                </div>

                            </span>
                            <span className="row g-3 mb-2">
                                <div className="col-md-6">
                                    <label className="form-label">Confirm Password</label>
                                    <div className="">
                                        <input className="form-control " type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required></input>
                                    </div>
                                </div>

                                <div className="col-md-6 ">
                                    <label className="form-label">Date Of Birth</label>

                                    <div className="">
                                        <input className="form-control " type="date" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} required></input>
                                    </div>
                                </div>

                            </span>
                            <span className="row g-3 mb-2">
                                <div className="col-md-6">
                                    <label className="form-label">Role</label>
                                    <div className="">
                                        <input className="form-control " type="text" placeholder="Address Line 1" value={role} onChange={(event) => setRole(event.target.value)} disabled></input>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Address</label>
                                    <div className="">
                                        <textarea className="form-control" placeholder="Address" value={address} onChange={(event) => setAddress(event.target.value)} required></textarea>
                                    </div>
                                </div>
                            </span>

                            <span className="row g-3 mb-2">
                                <div className="col-md-6">
                                    <label className="form-label">Mobile No</label>
                                    <div className="">
                                        <input className="form-control " type="text" placeholder="Phone Number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required></input>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">City</label>
                                    <input className="form-control " type="text" placeholder="City" value={city} onChange={(event) => setCity(event.target.value)} required></input>
                                    <div className="valid-feedback">
                                    </div>
                                </div>
                            </span>

                            <span className="row g-3 mb-2">

                                <div className="col-md-6">
                                    <label className="form-label">Registered Date</label>
                                    <input type="date" className="form-control " value={registeredDate} onChange={(event) => setRegisteredDate(event.target.value)} disabled></input>
                                    <div className="valid-feedback">

                                    </div>
                                </div>
                            </span>
                            <span className="row g-3 mb-2">

                            </span>
                            <br></br>
                            <div className=" d-grid gap-2 col-6 mx-auto mb-2 ">
                                <button className="btn btn-success rounded" type="submit">Register</button>
                                {status ? <div className='text-success'>{status}</div> : null}
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default RegisterCustomer;