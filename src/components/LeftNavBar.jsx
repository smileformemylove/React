import React from "react";

class LeftNavBar extends React.Component {
    render() {
        const buttons = [
            { id: 1, text: "The current button"},
            { id: 2, text: "A second button item"},
            { id: 3, text: "A third button item"},
            { id: 4, text: "A fourth button item"},
            { id: 5, text: "A fifth button item"},
            { id: 6, text: "A sixth button item"},
            { id: 7, text: "A seventh button item"},
            { id: 8, text: "A eighth button item"},
            { id: 9, text: "A ninth button item"},
            { id: 10, text: "A tenth button item"},
            { id: 11, text: "A eleventh button item"},
            { id: 12, text: "A twelfth button item"},
        ];
        return (
            <div className="list-group p-1 text-center d-flex flex-column">
                {buttons.map(button => (
                    <button
                        key={button.id}
                        type="button"
                        className="list-group-item list-group-item-action p-4"
                    >
                        {button.text}
                    </button>
                ))}
            </div>
        );
    }
}

export default LeftNavBar;