import React from "react";
import { useNavigate } from "react-router-dom";

const TableBodyRow = ({ customer, customers, setCustomers, handleDeleteCustomer }) => {
    const navigate = useNavigate();

    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.surname}</td>
            <td>{customer.isikukood}</td>
            <td>{customer.driverLicenseNumber}</td>
            <td>{customer.address}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>
                <button
                    type="button"
                    className="viewButton"
                    onClick={() => navigate(`customer/view/${customer.isikukood}`)}
                >VIEW</button>
            </td>
            <td>
                <button
                    type="button"
                    className="deleteButton"
                    onClick={() => handleDeleteCustomer(customer.id)}
                >DELETE</button>
            </td>
        </tr>
    )
}

export default TableBodyRow;