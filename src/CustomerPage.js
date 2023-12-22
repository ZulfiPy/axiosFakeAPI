import { useParams, useNavigate } from "react-router-dom";

const CustomerPage = ({ customers, handleDeleteCustomer }) => {
    const { isikukood } = useParams();
    const navigate = useNavigate();
    const customer = customers.find(customer => (customer.isikukood).toString() === isikukood);

    const handleDeleteCustomerNav = (id) => {
        handleDeleteCustomer(id);
        navigate("/");
    }

    return (
        <main className="Customer">
            <article>
                {customer &&
                <>
                    <h1>{customer.name} {customer.surname} profile</h1>
                    <p><span className="profileSpan">NAME:</span> {customer.name}</p>
                    <p><span className="profileSpan">SURNAME:</span> {customer.surname}</p>
                    <p><span className="profileSpan">ISIKUKOOD:</span> {customer.isikukood}</p>
                    <p><span className="profileSpan">DRIVER LICENSE NR.:</span> {customer.driverLicenseNumber}</p>
                    <p><span className="profileSpan">ADDRESS:</span> {customer.address}</p>
                    <p><span className="profileSpan">EMAIL:</span> {customer.email}</p>
                    <p><span className="profileSpan">PHONE:</span> {customer.phone}</p>

                    <button
                        type="button"
                        className="editButton"
                        onClick={() => navigate(`/customer/edit/${customer.isikukood}`)}
                    >EDIT</button>
                    <button
                        type="button"
                        className="deleteButton"
                        onClick={() => handleDeleteCustomerNav(customer.id)}
                    >DELETE</button>
                </>
                }
                {!customer && 
                    <p>Customer page not found, sorry...</p>
                }
            </article>
        </main>
    )
}

export default CustomerPage;