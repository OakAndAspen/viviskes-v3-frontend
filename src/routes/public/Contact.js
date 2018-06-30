import React from 'react';
import ContactForm from "../../components/ContactForm";
import "../../components/CustomTab.css";

export default class Contact extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-tabs my-4 nav-fill" id="CustomTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="contact-form-tab" data-toggle="tab" href="#contact-form">
                                Contactez-nous!</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="our-services-tab" data-toggle="tab" href="#our-services">
                                Nos prestations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="join-us-tab" data-toggle="tab" href="#join-us">
                                Nous rejoindre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="map-tab" data-toggle="tab" href="#map">
                                Plan d'accès</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane show active" id="contact-form">
                            <h2>Nous contacter</h2>
                            <p>Souhaitez-vous venir participer ou assister à un de nos entraînement? Nous proposer un contrat
                                pour une animation? Le formulaire ci-dessous est fait pour ça!</p>
                            <ContactForm/>
                        </div>
                        <div className="tab-pane" id="our-services">
                            <h2 className="mt-2">Nos prestations</h2>
                            <p>Depuis 5 ans, nos quarante membres font partager leur amour de l’Antiquité à travers une très
                                grande variété d’animations destinées au public. Si nos activités vous intéressent, nous pouvons
                                vous proposer les animations suivantes :</p>
                            <ul>
                                <li>Batailles scénarisées et duels (à l'interne ou en partenariat avec d'autres associations de
                                    reconstitution historique)
                                </li>
                                <li>Initiations au combat/au tir de javelots pour adultes et enfants</li>
                                <li>Campement historique complet pour animer une manifestation</li>
                                <li>Stand informatif sur l'armement celte (sous la période laténienne) et sur la vie quotidienne
                                    des Celtes (textile, cuisine, artisanat)
                                </li>
                                <li>Animation pédagogique, jeux et ateliers pour des scolaires</li>
                                <p>Si l'une ou l'ensemble de ces prestations vous intéresse, n'hésitez pas à nous écrire via le
                                    formulaire de contact et nous vous répondrons dans les plus brefs délais.</p>
                            </ul>
                        </div>
                        <div className="tab-pane" id="join-us">
                            <h2>Nous rejoindre</h2>
                            <p>Tu es intéressé par l'histoire antique? Passionné du monde des Celtes? Tu en as marre de croire
                                que les Celtes ne mangeaient que du sanglier? Tu aimerais avoir une pratique sportive et
                                artisanale originale ?</p>
                            <p>Alors Viviskes est fait pour toi !</p>
                            <p>Notre association est basée à Vevey (Suisse) et organise régulièrement des entraînements et des
                                évènements. Prends contact avec nous via le formulaire de contact et nous te convierons avec
                                plaisir à l'un de nos entraînements!</p>
                            <p>Viviskes apporte :</p>
                            <ul>
                                <li>Un approfondissement original d'une période mal connue de l'histoire antique</li>
                                <li>La possibilité de développer des talents artisanaux via la reconstitution de costumes et
                                    équipements celtes
                                </li>
                                <li>Une pratique sportive relativement intensive dans un cadre détendu</li>
                                <li>Une expérience humaine forte dans un groupe de passionnés d'histoire!</li>
                            </ul>
                            <p>Nos entraînements se déroulent de mars à octobre à Vevey au terrain de sport de Crédeiles, le
                                jeudi à partir de 18h00.</p>
                        </div>
                        <div className="tab-pane" id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6536.675380871455!2d6.849338535090632!3d46.46190278982262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e9ccbc6bd7b33%3A0xc4d820dd37782e62!2sCr%C3%A9deiles!5e0!3m2!1sen!2sch!4v1454702907143"
                                    width="100%" height="450" frameBorder="0" allowFullScreen/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

