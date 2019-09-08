import React from 'react';
import HeroCard from './HeroCard';

const HeroList = ({heroes, attr, ablities}) => {
    return(
        <div className='heroList'>
            {
                heroes.map((hero, index) =>{
                    if (hero.primary_attr === attr) {
                        return(
                            <HeroCard
                                key={hero.id}
                                hero={hero}
                                listOfAblities={ablities}
                                />
                        );
                    }
                })
            }
        </div>
    );
}

export default HeroList;