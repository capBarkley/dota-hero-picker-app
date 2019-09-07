import React from 'react';
import HeroCard from './HeroCard';

const convertAttr = (attr) => {
    switch (attr) {
        case "agi":
            return "Agility";
        case "str":
            return "Strength";
        case "int":
            return "Intelligence";
    }
}

const HeroList = ({heroes}) => {
    return(
        <div>
            {
                heroes.map(hero =>{
                    return(
                        <HeroCard
                            key={hero.id}
                            name={hero.localized_name}
                            attr={convertAttr(hero.primary_attr)}
                            img={`https://api.opendota.com${hero.img}`}/>
                    );
                })
            }
        </div>
    );
}

export default HeroList;