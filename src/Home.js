import Table from "./Table";

const Home = ({ customers, setCustomers, isLoading, fetchError, handleDeleteCustomer }) => {
    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Data is loading...</p>}
            {!isLoading && fetchError && <p style={{ color: "red" }} className="statusMsg">{fetchError}</p>}
            {!isLoading && !fetchError && (customers.length ? 
            <Table customers={customers} setCustomers={setCustomers} handleDeleteCustomer={handleDeleteCustomer}/> : <p className="statusMsg">No posts to display</p>)}
        </main>
    )
}

export default Home;