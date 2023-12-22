import React, { useState } from "react";
import TableHeadRow from "./TableHeadRow";
import TableBodyRow from "./TableBodyRow";

const Table = ({ customers, setCustomers, handleDeleteCustomer }) => {
    return (
        <form className="tableForm" onSubmit={(event) => event.preventDefault()}>
            <table className="customerTable">
                <thead>
                    <TableHeadRow />
                </thead>

                <tbody>
                    {customers.map(customer =>
                    <TableBodyRow
                        key={customer.id}
                        customer={customer}
                        customers={customers}
                        setCustomers={setCustomers}
                        handleDeleteCustomer={handleDeleteCustomer}/>)}
                </tbody>
            </table>
        </form>
    )
}

export default Table;