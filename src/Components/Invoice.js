import { useParams, useNavigate, useLocation} from 'react-router-dom'
import { getInvoice, deleteInvoice} from '../data'

export default function Invoice(){
    let params = useParams()
    let navigate = useNavigate()
    let location = useLocation()
    let invoice = getInvoice(parseInt(params.invoiceId, 10))
    return (
        <main style={{padding: '1rem 0'}}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>{invoice.name}: {invoice.number}</p>
        <p>Due Date: {invoice.due}</p>
        <button
        onClick={()=>{
            deleteInvoice(invoice.number)
            navigate('/invoices' + location.search)
        }}>
            Delete
        </button>
        </main>
    )
}