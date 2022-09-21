import "./ColdFunnel.css";
import footer from "../assets/footer.svg";
import logo from "../assets/logo.svg";
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s3.png";
import s4 from "../assets/images/s4.png";
import s5 from "../assets/images/s5.png";
import s6 from "../assets/images/s6.png";
import s7 from "../assets/images/s7.png";
import s8 from "../assets/images/s8.png";
import s9 from "../assets/images/s9.png";
import s10 from "../assets/images/s10.png";
import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import React, { useState } from "react";
import useMountTransition from "../hooks/useMountTransition";

const stages = [
    { 
        type: "QUESTION", 
        id: "Q1",
        indicator: "Frage 1 von 3 ⚡️", 
        text: "In welchem Bereich bist Du tätig?",  
        answers: [
            { image: s1, text: "Dienstleistungen" },
            { image: s2, text: "Einzelhandel" },
        ],
        bg: "white"
    },
    { 
        type: "QUESTION", 
        id: "Q2",
        indicator: "Frage 2 von 3 ⚡️", 
        text: "Wie groß ist dein Werbebudget?",  
        answers: [
            { image: s3, text: "unter 250€" },
            { image: s4, text: "250€ - 500€" },
            { image: s5, text: "501€ - 1000€" },
            { image: s6, text: "über 1000€" }
        ],
        bg: "white"
    },
    { 
        type: "QUESTION", 
        id: "Q4",
        indicator: "Gleich fertig ✌️", 
        text: "Was willst Du erreichen?",  
        answers: [
            { image: s7, text: "Neukunden" },
            { image: s8, text: "Mehr Mitarbeiter" },
            { image: s9, text: "Stärkere Brand" },
            { image: s10, text: "Loyale Kunden" }
        ],
        bg: "white"
    },
    { 
        type: "CONTACT_FORM", 
        id: "F1",
        indicator: "Deine Case-Analyse 🎉", 
        text: "Gleich erhältst Du direkt dein persönliches Ergebnis:",
        bg: "rgb(255, 0, 102, 0.01)"
    },
    { 
        type: "FINISH", 
        id: "F2",
        top_image: f1, 
        indicator: "Fertig!", 
        text: "Deine persönliche Case Study",
        bg: "white" 
    },
    {
        type: "PHONE_FORM",
        id: "F3",
        indicator: "Deine Brand-Analyse ✌️",
        text: "Finde heraus, wie du mit Funnels deine Ziele erreichst",
        bg: "rgb(255, 0, 102, 0.01)",
        available_appointments: [
            { date: "21.09. um 12:00 (30 min)" },
            { date: "21.09. um 12:30 (30 min)" },
            { date: "21.09. um 13:0 (30 min)" },
            { date: "22.09. um 12:00 (30 min)" },
            { date: "22.09. um 12:30 (30 min)" },
            { date: "22.09. um 13:00 (30 min)" },
        ]
    },
    { 
        type: "FINISH_PHONE", 
        id: "F4",
        top_image: f2, 
        indicator: "Coffee-Call gebucht ✅", 
        text: "Für deinen Erfolg.",
        bg: "white" 
    }
]


export default function ColdFunnel() {
    const [stage, setStage] = useState(0);
    const [isMounted, setIsMounted] = useState(true);
    const hasTransitionedIn = useMountTransition(isMounted, 1000);

    function next() {
        setIsMounted(false);
        if(stage != stages.length - 1){
            setStage(stage + 1);
        }
        setInterval(() => setIsMounted(true), 500);
    }

    return (
        <div className="cold-funnel" style={{ backgroundColor: stages[stage].bg }}>
            <div className="main">
                <div className="nav">
                    <img src={logo} alt="Oneup" />
                </div>
                <div className="content">
                    {(hasTransitionedIn || isMounted) && (
                        <div className={`question ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}>
                            {stages[stage].top_image && <div className="question-image">
                                <img src={stages[stage].top_image} width="100%" />
                            </div>}
                            <div className="question-indicator">
                            {stages[stage].indicator}
                            </div>
                            <div className="question-headline">
                                {stages[stage].text}
                            </div>
                            {
                                stages[stage].type === "QUESTION" && <div className="cards">
                                    {stages[stage].answers?.map((answer, id) => (
                                        <Card key={id} image={answer.image} text={answer.text} onClick={next} />
                                    ))}
                                </div>
                            }
                            {
                                stages[stage].type === "CONTACT_FORM" && <ContactForm onClick={next} />
                            }
                            {
                                stages[stage].type === "FINISH" && <Finish onClick={next} />
                            }
                            {
                                stages[stage].type === "PHONE_FORM" && <PhoneForm stage={stage} onClick={next} />
                            }
                            {
                                stages[stage].type === "FINISH_PHONE" && <FinishPhone />
                            }
                        </div>
                    )}
                </div>
            </div>
            <div className="footer">
                <img src={footer} width="100%" alt="Oneup Web" />
            </div>
        </div>
    )
}

function Finish({ ...rest }) {
    return <div className="finish">
        <div className="finish-text">
            Wir haben dir deine Case Study per E-Mail geschickt. Steigere deinen Erfolg durch Funnels und mache einen unverbindlichen Coffee-Call in einer entspannten Umgebung mit uns aus. Wir zeigen dir, wie du durch <b>Funnels Potential schöpfst und deine Ziele erreichst</b>.
        </div>
        <div className="finish-button">
            <button {...rest}>👋 Coffe-Call vereinbaren</button>
        </div>
        <div className="finish-headline">Wir schaffen Value</div>
        <div className="list">
            <div className="list-item">
                <div className="list-icon">🤩</div>
                <div className="list-text">
                    <div><b>Mehr KundInnen</b></div>
                    Durch Funnels generierst du passiv, also nebenbei, KundInnen.
                </div>
            </div>
            <div className="list-item">
                <div className="list-icon">💛</div>
                <div className="list-text">
                    <div><b>Mehr MitarbeiterInnen</b></div>
                    Funnels helfen dir dein wichtigstes Asset zu vergrößern - dein Team.
                </div>
            </div>
            <div className="list-item">
                <div className="list-icon">💬</div>
                <div className="list-text">
                    <div><b>Authorität</b></div>
                    Deine Brand gewinnt an Authorität - Du bist der Experte am Markt.
                </div>
            </div>
            <div className="list-item">
                <div className="list-icon">🤝</div>
                <div className="list-text">
                    <div><b>Loyale Kunden</b></div>
                    Funnels helfen dir, Kunden langfrisitg zu halten und Profite zu maximieren.
                </div>
            </div>
        </div>
        <div className="finish-button">
            <button {...rest}>👋 Coffe-Call vereinbaren</button>
        </div>
    </div>
}

function FinishPhone({ ...rest }) {
    return <div className="finish">
        <div className="finish-text text-align-left">
            <h3 style={{ marginTop: "4rem" }}>Dauer:</h3>
            <div>Wir können uns 30 min für dich Zeit nehmen.</div>
            <h3 style={{ marginTop: "4rem" }}>Ablauf:</h3>
            <div>Zur gebuchten Uhrzeit am gebuchten Tag rufen wir dich an - Du musst dich um nichts kümmern.</div>
            <h3 style={{ marginTop: "4rem" }}>Agenda:</h3>
            <ul>
                <li>Kennenlernen</li>
                <li>Überblick über deine Brand</li>
                <li>Zielgruppenanalyse</li>
                <li>Bedürfnisanalyse - AIDA</li>
                <li><b>Deine Funnel-Strategie</b></li>
            </ul>
        </div>
    </div>
}

function Card({ image, text, onClick, ...rest }: { image: string, text: string, onClick: React.MouseEventHandler<HTMLDivElement> }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-image">
                <img src={image} width="100%" />
            </div>
            <div className="card-text">
                {text}
            </div>
        </div>
    )
}

function ContactForm({ ...rest }) {
    return (
        <div className="form">
            <div className="input input-top">
                <div className="input-icon">👋</div>
                <input type="text" placeholder="Dein Vorname"></input>
            </div>
            <div className="input input-middle">
                <div className="input-icon">✉️</div>
                <input type="text" placeholder="Deine E-Mail Adresse"></input>
            </div>
            <div className="input input-bottom">
                <div className="input-icon">
                    <input type="checkbox" name="checkbox" />
                </div>
                <div className="input-text">Ich akzeptiere die <a href="#">Datenschutzbestimmungen</a></div>
            </div>
            <div className="form-button">
                <button {...rest}>Jetzt Case Study erhalten 👉</button>
            </div>
            <div className="form-disclaimer">
                Kein Spam, versprochen 🔒
            </div>
        </div>
    )
}

function PhoneForm({ stage, onClick, ...rest }: { stage: number, onClick: React.MouseEventHandler<HTMLButtonElement> }) {
    return (
        <div className="form">
            <div className="input input-top">
                <div className="input-icon">📞</div>
                <input type="text" placeholder="Dein Telefonnummer"></input>
            </div>
            <div className="input input-bottom-w">
                <div className="input-icon">🗓</div>
                <select name="appointment" id="appointment">
                    <option value="" disabled selected>Termin wählen</option>
                    {
                        stages[stage].available_appointments?.map((app, key) => (
                            <option key={key} value={app.date}>{app.date}</option>
                        ))
                    }
                </select>
            </div>
            <div className="form-button">
                <button onClick={onClick}>Gratis Coffee-Call buchen</button>
            </div>
            <div className="form-disclaimer">
                Der Termin gehört Dir! Wir melden uns an deinem ausgwählten Termin bei dir. 
            </div>
        </div>
    )
}
