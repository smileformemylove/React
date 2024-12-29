import React from "react";
import patner from "../img/partner2.jpg"


class Central extends React.Component{
    render() {
        const cards = [
            { id: 1, title: "Card title 1", text: "Some bulk of the card's content." },
            { id: 2, title: "Card title 2", text: "Some bulk of the card's content." },
            { id: 3, title: "Card title 3", text: "Some bulk of the card's content." },
            { id: 4, title: "Card title 4", text: "Some bulk of the card's content." },
            { id: 5, title: "Card title 5", text: "Some bulk of the card's content." },
            { id: 6, title: "Card title 6", text: "Some bulk of the card's content." },
            { id: 7, title: "Card title 7", text: "Some bulk of the card's content." },
            { id: 8, title: "Card title 8", text: "Some bulk of the card's content." },
            { id: 9, title: "Card title 9", text: "Some bulk of the card's content." },
            { id: 10, title: "Card title 10", text: "Some bulk of the card's content." },
            { id: 11, title: "Card title 11", text: "Some bulk of the card's content." },
            { id: 12, title: "Card title 12", text: "Some bulk of the card's content." },
        ];
        return (
            <div className="container">
                <div className="row">
                    {cards.map(card => (
                        <div className="col-10 col-md-4 col-lg-3 mt-1" key={card.id}>
                            <div className="card">
                                <img src={patner} className="card-img-top" alt="..."
                                     style={{width: "100%", height: "300px", objectFit: "cover"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );

    }
}

export default Central;