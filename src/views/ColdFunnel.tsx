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
        text: "Deine persönliche Case Study befindet sich in deinem E-Mail-Postfach",
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
        text: "Agenda für den Coffee-Call:",
        bg: "white" 
    }
]


export default function ColdFunnel() {
    const [stage, setStage] = useState(0);

    function next() {
        if(stage != stages.length - 1){
            setStage(stage + 1);
        }
    }

    return (
        <div className="cold-funnel" style={{ backgroundColor: stages[stage].bg }}>
            <div className="main">
                <div className="nav">
                    <img src={logo} alt="Oneup" />
                </div>
                <div className="content">
                    <div className="question">
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
            Die Case-Study zeigt dir, wie Du von Funnels profieren könntest und <b>deinen Erfolg steigern kannst</b>. Falls Du mehr wissen willst, vereinbaren Wir gerne einen <b>Coffee-Call</b> und finden gemeinsam heraus, wo dein <b>Potential</b> liegt.
        </div>
        <div className="finish-button">
            <button {...rest}>👋 Coffe-Call vereinbaren</button>
        </div>
    </div>
}

function FinishPhone({ ...rest }) {
    return <div className="finish">
        <div className="finish-text text-align-left">
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
