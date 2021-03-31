import React from "react";

const Header = () => {
    let date = `${new Date()}`;
    return (
        <header>
            <div>
                <h2>Counter app!</h2>
                <p>{date}</p>
            </div>
        </header>
    );
};

export default Header;