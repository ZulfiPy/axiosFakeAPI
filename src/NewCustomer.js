import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import api from "./api/customers";

const NewCustomer = ({ customers, setCustomers }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [isikukood, setIsikukood] = useState("");
    const [driverLicenseNumber, setDriverLicenseNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate("");

    const clearInputNavHome = () => {
        setName("");
        setSurname("");
        setIsikukood("");
        setDriverLicenseNumber("");
        setAddress("");
        setEmail("");
        setPhone("");
        navigate("/");
    }

    const handleAddCustomer = async (event) => {
        event.preventDefault();
        const newCustomer = { id: nanoid(), name, surname, isikukood, driverLicenseNumber, address, email, phone };
        try {
            const response = await api.post("/customers", newCustomer);
            const allCustomers = [...customers, response.data];
            setCustomers(allCustomers);
            clearInputNavHome();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <main className="NewCustomer">
            <h1>NEW CUSTOMER FORM</h1>
            <form className="inputForm" onSubmit={(event) => handleAddCustomer(event)}>
                <div className="inputWrap">
                    <label htmlFor="name">NAME:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter a name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="inputWrap">
                    <label htmlFor="surname">SURNAME:</label>
                    <input
                        type="text"
                        id="surname"
                        placeholder="Enter a surname"
                        required
                        value={surname}
                        onChange={(event) => setSurname(event.target.value)}
                    />
                </div>

                <div className="inputWrap">
                    <label htmlFor="isikukood">ISIKUKOOD:</label>
                    <input
                        type="text"
                        id="isikukood"
                        placeholder="Enter a isikukood"
                        required
                        value={isikukood}
                        onChange={(event) => setIsikukood(event.target.value)}
                    />
                </div>

                <div className="inputWrap">
                    <label htmlFor="drivingLicenseNumber">DRIVER LICENSE NR.:</label>
                    <input
                        type="text"
                        id="driverLicenseNumber"
                        placeholder="Enter a driver license nr."
                        required
                        value={driverLicenseNumber}
                        onChange={(event) => setDriverLicenseNumber(event.target.value)}
                    />
                </div>

                <div className="inputWrap">
                    <label htmlFor="address">ADDRESS:</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter a address"
                        required
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>

                <div className="inputWrap">
                    <label htmlFor="email">EMAIL:</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter a email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                
                <div className="inputWrap">
                    <label htmlFor="phone">PHONE:</label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Enter a phone number"
                        required
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>

                <div>
                    <button type="submit">ADD NEW CUSTOMER TO DATABASE</button>
                </div>
            </form>
            
        </main>
    )
}

export default NewCustomer;