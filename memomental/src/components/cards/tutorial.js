import React, { Component } from 'react';
import begin from './images/begin.png';
import info from './images/info.png';
import recto from './images/recto.png';
import verso from './images/verso.png';
import gcard from './images/gcard.png';
import viewcard from './images/viewcard.png';
import daycard from './images/daycard.png';
import enteranswer from './images/enteranswer.png';
import end from './images/end.jpg';
import {Button, Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";

class tutorial extends Component{

    render(){
        return(
            <div>
                <h3>Tutoriel</h3>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={begin}
                            alt="First slide"
                        />
                        <div>
                            <p>Touhez pour ajouter une nouvelle carte et enrichir vos connaissances</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={info}
                            alt="Third slide"
                        />
                        <div>
                            <p>Remplissez un nom et une catégorie pour différencier toutes vos cartes</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={recto}
                            alt="Third slide"
                        />
                        <div>
                            <p>Le but est d'apprendre une information dans les deux sens, Entrez d'abord un premier côté de la carte qui vous sera propsé en remplissant une question et sa réponse</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={verso}
                            alt="Third slide"
                        />
                        <div>
                            <p>Ajoutez ensuite la même question mais dans l'autre sens comme sur cet exemple pour le verso. Puis validez votre carte</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={gcard}
                            alt="Third slide"
                        />
                        <div>
                            <p>Votre nouvelle carte apparaît dans l'onglet (Mes cartes), vous pouvez vois les informations quelle contient</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={viewcard}
                            alt="Third slide"
                        />
                        <div>
                            <p>Vous pouvez également modifier ou supprimer une carte</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={daycard}
                            alt="Third slide"
                        />
                        <div>
                            <p>Pour tester vos connaissances, rendez-vous dans l'onglet (Mes cartes du jour) afin de retrouver les cartes que vous devez réviser aujourd'hui</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={enteranswer}
                            alt="Third slide"
                        />
                        <div>
                            <p>Entrez une réponse</p>
                            <p>Si elle est juste : elle vous rapportera des points et cette carte vous sera reproposée plus tard</p>
                            <p>Si elle est fausse : elle vous fera perdre 1 point et cette carte vous sera reproposée demain</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={end}
                            alt="Third slide"
                        />
                        <div>
                            <p>Félicitation vous avez terminez le tutoriel, vous pouvez le voir à nouveau ou commencer à apprendre</p>
                        </div>
                    </Carousel.Item>
                </Carousel>

                <Link to="/card">
                    <Button
                        className="btn-info"
                        bssize="small"
                        type="submit"
                    >
                        C'est parti !
                    </Button>
                </Link>
            </div>
        )
    }

}

export default tutorial;


