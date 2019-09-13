import React from 'react';
import HeroCard from './HeroCard';

const HeroList = ({heroes, attr}) => {
    return(
        <div className='heroList'>
            {
                heroes
                    .filter(hero => hero.primary_attr === attr)
                    .map((hero, index) => <HeroCard key={hero.id} hero={hero}/>)
            }
        </div>
    );
}

export default HeroList;