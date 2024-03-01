import { useImperativeHandle } from "react"
import "../styling/navbar.css"
import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="nav-div">
            <h1>SKGS</h1>
            <ul>
                <CustomLink to="/home">HEM</CustomLink>
                <CustomLink to="/meetings">MÖTEN</CustomLink>
                <CustomLink to="/excursions">EXKURSIONER</CustomLink>
                <CustomLink to="/membership">MEDLEMSKAP</CustomLink>
                <CustomLink to="/about">OM OSS</CustomLink>
                <CustomLink to="/topical">AKTUELLT</CustomLink>
                <CustomLink to="/contact">KONTAKT</CustomLink>
            </ul>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
   const resolvePath = useResolvedPath(to)
   const isActive = useMatch({path: resolvePath.pathname,end: true})
      
    return(
        <li className={isActive ? "active" : "" }>
        <Link to={to} {...props}>{children}</Link>
        </li>

    )
   
}