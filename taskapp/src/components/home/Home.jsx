import React from "react";
import { Link } from "react-router-dom";

const HomePage = ()  => (
    <div>
        <h1> Home Title </h1>
        <Link to="about" className="link">
            Learn more
        </Link>


    </div>



)
export default HomePage;