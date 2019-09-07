import React from 'react';

const HeroCard = ({name, attr, img}) => {
    return(
        <div className='heroCard'>
            <h2>{name}</h2>
            <h3>{attr}</h3>
            <img className='heroImg' alt='heroImg' src={img} weight='120' height='120'/>
        </div>
    );
}

export default HeroCard;
