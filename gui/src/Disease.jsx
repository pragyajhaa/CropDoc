import React from "react";
import Navbar from "./Navbar.jsx";
import "./Disease.css";
import diseaseList from "./data/diseaseList.json";

function Disease() {
    const list = diseaseList.diseaseList;

    return (
        <div className="container">
            <Navbar />
            <h1>Disease GUI</h1>
            <div className="diseases">
                {list.map((item) => (
                    <div className="list" key={item.plant_id}>
                        <p className="plant_id">Plant #{item.plant_id}</p>
                        <img
                            src={
                                require(`gui/src/data/${item.image_path.slice(
                                    2
                                )}`).default
                            }
                            alt={item.prediction}
                        />
                        <h2 className="prediction">{item.prediction}</h2>
                        {/* <p className="logits">{item.logits}</p> */}
                        <p className="content">{item.content}</p>
                        {console.log(`.src/data/${item.image_path.slice(2)}`)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Disease;
