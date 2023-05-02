import { useLocation, NavLink } from "react-router-dom"

export default function QueryNavLink ({ to, ...props}) {
    return <NavLink to={to + location.search} {...props} />
}