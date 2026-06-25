import React from 'react'
import '../styles/about.css'

import StoreFront from '../assets/Storefront.png'
import Owner from '../assets/Owner.png'
import HandShake from '../assets/handshake.png'
import Grass from '../assets/grass.png'
import Pin from '../assets/location.png'

interface AboutProps {
    heroTitle: string,
    heroSubTitle: string,
    mission: string
}

function About({heroTitle,heroSubTitle,mission}: AboutProps){
    //Storefront img
    let storeFront = React.createElement(
        'img',
        {className: 'storeFront', src: StoreFront, alt: 'None'}
    )

    //children headers and parent div (slogan) for hero statements
    let expert = React.createElement(
        'h2',
        {className: 'heroTitle'},
        heroTitle
    );
    let local = React.createElement(
        'h4',
        {className: 'heroSubTitle'},
        heroSubTitle
    );
    let slogan = React.createElement(
        'div',
        {className: 'slogan'},
        [expert, local]
    );

    //Parent container for image and slogan, displays children overlapping
    let poster = React.createElement(
        'div',
        {className: 'poster'},
        [storeFront,slogan]
    );

    let owner = React.createElement(
        'img',
        {className: 'owner', src: Owner, alt: 'None'},
    );

    let aboutUs = React.createElement(
        'h2',
        {className: 'aboutUs'},
        'About Us'
    )

    let serving = React.createElement(
        'h3',
        {className: 'serving'},
        'Proudly Serving Our Community'
    )

    let missionText = React.createElement(
        'p',
        {className: 'mission'},
        mission
    )

    let handShake = React.createElement('img',{className: 'icon', src: HandShake})
    let grass = React.createElement('img',{className: 'icon', src: Grass})
    let pin = React.createElement('img',{className: 'icon', src: Pin})

    let handShakeText = React.createElement('p',{className: 'qualityText'},'Locally Owned')
    let grassText = React.createElement('p',{className: 'qualityText'},'Quality Lawn Care')
    let pinText = React.createElement('p',{className: 'qualityText'},'Trusted & Reliable')

    let data = [[handShake,handShakeText],[grass,grassText],[pin,pinText]]
    let qualitiesChildren = []

    for(let i = 0;i<data.length;i++){
        qualitiesChildren.push(React.createElement('div',{className:'quality'},data[i]))
    }

    let qualities = React.createElement(
        'div',
        {className: 'qualities'},
        qualitiesChildren
    )

    let business = React.createElement(
        'div',
        {className:'business'},
        [aboutUs, serving, missionText,qualities]
    );

    let aboutInfo = React.createElement(
        'div',
        {className: 'aboutInfo', id: 'About'},
        [owner, business]
    );

    //container for the entire about section
    let about = React.createElement(
        'section',
        {className: 'about'},
        [poster, aboutInfo]
    );
    return(about);
}

export default About;