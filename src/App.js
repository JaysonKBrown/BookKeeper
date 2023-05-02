import { Outlet, Link } from 'react-router-dom'

export default function App() {
    return (
    <>
<div className='App'>
<h1>BookKeeper</h1>
<nav style={{
    borderBottom: 'solid 1px',
    paddingBottom: '1rem'
}}
    >
        <Link to='/'>Home</Link> | {''}
        <Link to='/Invoices'>Invoices</Link> | {''}
        <Link to='/Expenses'>Expenses</Link>
    </nav>
    <Outlet />
</div>
    </>
    )
}