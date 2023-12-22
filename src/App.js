import Layout from "./Layout";
import Home from "./Home";
import NewCustomer from "./NewCustomer";
import CustomerPage from "./CustomerPage";
import EditCustomer from "./EditCustomer";
import About from "./About";
import Missing from "./Missing";
import React, { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import api from "./api/customers"

function App() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/customers");
        setCustomers(response.data);
        setIsLoading(false);
      } catch (err) {
        setFetchError(err.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  const handleDeleteCustomer = async (id) => {
    try {
        await api.delete(`/customers/${id}`);
        const allPosts = customers.filter(customer => customer.id !== id);
        setCustomers(allPosts)
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home customers={customers} setCustomers={setCustomers} isLoading={isLoading} fetchError={fetchError} handleDeleteCustomer={handleDeleteCustomer} />} />
          <Route path="customer">
            <Route index element={<NewCustomer customers={customers} setCustomers={setCustomers}/>}/>
            <Route path="view/:isikukood" element={<CustomerPage customers={customers} handleDeleteCustomer={handleDeleteCustomer}/>}/>
            <Route path="edit/:isikukood" element={<EditCustomer customers={customers} setCustomers={setCustomers}/>}/>
          </Route>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<Missing />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
