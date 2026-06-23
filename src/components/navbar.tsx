import React from 'react'
import LogoSRC from '../assets/Logo.png'
import '../styles/navbar.css'

interface NavbarProps{
    sections: string[]
}

function Navbar({sections}: NavbarProps){
    let children = [];
    let logo = React.createElement(
        'img',
        {src:LogoSRC,alt:"Image Unavailable", className: 'logo'},
        null);
    let linkList = [];
    for(let i =0;i<sections.length;i++){
        linkList.push(React.createElement(
            'li',
            {className: 'link'},
            sections[i]
        ));
    }
    let links = React.createElement(
        'ul',
        {className: 'links'},
        linkList
    )
    children.push(logo);
    children.push(links)
    let navbar = React.createElement('nav',{className: 'navbar'},children);
    return(navbar)
}

export default Navbar;