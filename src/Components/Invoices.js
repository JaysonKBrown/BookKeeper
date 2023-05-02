import { Outlet, useSearchParams } from 'react-router-dom'
import { getInvoices } from '../data'

import QueryNavLink from '../custom/QueryNavLink'

export default function Invoices(){
    let invoices = getInvoices()
    let [searchParams, setSearchParams] = useSearchParams()

    // console.log(invoices)
    return (
        <main style={{display: "flex"}}>
        <nav
        style={{
            borderRight: 'solid 1px',
            padding: '1rem'
        }}>
            <input
            value={searchParams.get('filter') | ''}
            onChange={(event)=> {
                let filter = event.target.value
                if (filter) {
                    setSearchParams({filter})
                } else {
                    setSearchParams({})
                }
            }}
            />
            {invoices.filter(invoice => {
                let filter = searchParams.get('filter')
                if (!filter) return true
                let name = invoice.name.toLowerCase()
                return name.startsWith(filter.toLowerCase())
            })
            .map((invoice)=> {
                return <QueryNavLink
                    style={({ isActive}) => {
                        return {
                            display: 'block',
                            margin: '1rem 0',
                            color: isActive ? '#109eff' : ''
                        }
                    }}
                    to={`/invoices/${invoice.number}`}
                    key={invoice.number}
                    >
                        {invoice.name}
                    </QueryNavLink>
            })
            }
        </nav>
        <Outlet />
        </main>
    )
}