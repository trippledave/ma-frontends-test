import React from "react";
import { Link } from "@reach/router";


export default function NavBar(props) {
    const { modules } = props;
    return (
        <nav>
            <ul>
                {modules.map((module) => (
                    <li><Link key={module} to={module.url}>{module.name}</Link></li>
                ))}
            </ul>
        </nav >
    );
}