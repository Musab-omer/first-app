import React from "react";


import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

import card1 from "../../assets/imgs/sudan.jpeg";
import card2 from "../../assets/imgs/egypt.jpg";
import card3 from "../../assets/imgs/ksa.jpeg";
import card4 from "../../assets/imgs/dubai.jpeg";

import CountryCard from "./CountryCard";



class CounrtyCards extends React.Component {
    render() {
        let pragraph1 = 'Meroe, Begarawiyah, Kush, Sudan: Nubian pyramids of Meroe, ruins of King Arqamani tomb in the center - S6, S5, S4, S3, S2, S1 pyramids - South cemetery aka East Necropolis, tombs of the Kushite kingdoms, dating ca.';
        let pragraph2 = 'The Mosque-Madrasa of Sultan Hasan (Arabic: مسجد ومدرسة السلطان حسن) is a monumental mosque and madrasa located in Salah al-Din Square in the historic district of Cairo, Egypt. It was built between 1356 and 1363 ';
        let pragraph3 = 'Abraj Al-Bait Towers, Saudi Arabia,Located in front of Al Masjid Al-Haram, Dar Al Tawhid Intercontinental Makkah is a 5-star hotel offering luxury spacious accommodations overlooking the Grand Mosque.';
        let pragraph4 = 'Dubai Marina is an affluent residential neighborhood known for The Beach at JBR, a leisure complex with al fresco dining and sandy stretches to relax on. Smart cafes and pop-up craft markets line waterside ';

        let countries=['sudan','egypt','saudi arabia','dubai']
        return (
            <React.Fragment>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3">
                            <CountryCard cardImg={card1} country={countries[0]} pragraph={pragraph1} />
                        </div>
                        <div className="col-md-3">
                            <CountryCard cardImg={card2} country={countries[1]} pragraph={pragraph2} />
                        </div>
                        <div className="col-md-3">
                            <CountryCard cardImg={card3} country={countries[2]} pragraph={pragraph3} />
                        </div>
                        <div className="col-md-3">
                            <CountryCard cardImg={card4} country={countries[3]} pragraph={pragraph4} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CounrtyCards;