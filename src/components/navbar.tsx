import React from 'react'
import '../styles/navbar.css'

interface NavbarProps{
    sections: string[],
    logoSRC: string,
    navColor: string
}

function Navbar({sections,logoSRC,navColor}: NavbarProps){
    let children = [];
    let logo = React.createElement(
        'img',
        {src: logoSRC, alt:"Image Unavailable", className: 'logo'},
        null);
    let linkList = [];
    for(let i =0;i<sections.length;i++){
        linkList.push(React.createElement(
            'li',
            {className: 'link', key: `${i}`},
            React.createElement('a',{href: `#${sections[i]}`},sections[i])
        ));
    }
    let links = React.createElement(
        'ul',
        {className: 'links'},
        linkList
    )
    children.push(logo);
    children.push(links)
    let navbar = React.createElement(
        'nav',
        {className: 'navbar', style: {backgroundColor: navColor}},
        children);
    return(navbar)
}

export default Navbar;