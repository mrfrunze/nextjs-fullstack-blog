"use client"

import NavLink from "./navLink/navLink"
import styles from "./links.module.css"
// import path from "path"
import { useState } from "react"
import Image from "next/image"

const Links = () => {
    
    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ];

    const [open, setOpen] = useState(false)

    // Temporary
    const session = true
    const isAdmin = true


    return (
    <div className={styles.container}>
        <div className={styles.links}>
            {links.map(link => (
                <NavLink item={link} key={link.title} />
            ))}
            {session ? (
                <>
                    {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}
                    <button className={styles.logout}>Logout</button>
                </>
                )  : (
                    <NavLink item={{title: "Login", path: "/login"}}/>
                )  
            }
        </div>
        <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>
            <Image src={open ? "/close.svg" : "/menu.svg"} alt="menu" width={60} height={60}/>
        </button>
        {
            open && <div className={styles.mobileLinks}>
                {links.map(link => (
                    <NavLink key={link.title} item={link}/>
                ))}
            </div>
        }

    </div>
    )
}


export default Links