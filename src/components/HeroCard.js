import React from 'react';
import {hero_abilities, abilities} from 'dotaconstants';

const HeroCard = ({hero, listOfAblities}) => {

    let bgColor = 'red'; //цвет фона карточки героя по умолчанию
    let attr = '';

    // устанавливаем цвет фона карточки героя в зависимости от атрибута и преобразовываем атрибут в нормальный вид
    switch (hero.primary_attr) {
        case "str":
            attr = 'Strength';
            bgColor = '#B21111';
            break;
        case "agi":
            attr = 'Agility';
            bgColor = '#11B22C';
            break;
        case "int":
            attr = 'Intelligence';
            bgColor = '#116FB2';
            break;
        default:
            attr = 'Unknown attribute';
            break;
    }

    //массив названий ролей героя
    const roles = hero.roles.map(role => {
        return `${role} `;
    });

    const name = hero.name; //id героя
    const abilitiesIds = hero_abilities[name].abilities.filter(abil => abil !== 'generic_hidden'); //массив из id скиллов героя, кроме 'generic_hidden'

    //массив обьектов скиллов героя из abilities.json модуля dotaconstants
    const abils = abilitiesIds.map(abil => {
        return abilities[abil];
    })

    let style = {
        backgroundColor: bgColor
    }
    
    return(
        <div className='heroCard' style={style}>
            <h2>{hero.localized_name}</h2>
            <img className='heroImg' alt={`${hero.localized_name}_img`} src={`https://api.opendota.com${hero.img}`} weight='120' height='120'/>
            <div className='heroDesc'>
                <p>{attr}</p>
                <p>{hero.attack_type}</p>
                {
                    roles.map((role, i) => <span key={roles[i]}>{`${role} `}</span>)
                }
            </div>
            <div className='heroAbil'>
                    {
                        abils.map((abil, i) => {
                            return(
                                <img key={abil[i]} alt={`${hero.localized_name}_abil`} src={`https://api.opendota.com${abil.img}`}/>
                            )
                        })
                    }
            </div>
        </div>
    );
}

export default HeroCard;
