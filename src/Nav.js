import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="search">Search Customer</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Customer"
                />
            </form>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="customer">New Customer</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;