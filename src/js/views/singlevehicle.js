import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = () => {
    const { store, actions } = useContext(Context);
    const { vehicleId } = useParams();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${vehicleId}`)
            .then((result) => result.json())
            .then((data) => actions.setVehicleData(vehicleId, data.result.properties))
            .catch((error) => {
                console.error("Error fetching vehicle data:", error);
            });
    }, [vehicleId]); // Asegúrate de que vehicleId esté en la lista de dependencias

    const vehicle = store.vehicles.find(vehicle => vehicle.uid === vehicleId);

    return (
        <div className="container">
            <div>
                {vehicle ? (
                    <div className="row d-flex" key={vehicle.uid}>
                        <div className="col-sm-12 col-md-6">
                            <img src="https://barrie360.com/wp-content/uploads/2019/08/Star-Wars-400x200.png" style={{ width: "100%", height: "75%" }} alt="vehicle" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h4 className="">{vehicle.name}</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque
                                nesciunt suscipit alias architecto voluptates fuga cupiditate, accusamus
                                exercitationem, expedita non perferendis error autem neque reiciendis, minus
                                iusto? Minima, natus.
                            </p>
                            <hr className="text-danger" />
                            <div className="row d-flex">
                                <div className="col-4 text-danger">
                                    <p>Name</p>
                                    <p>{vehicle.name}</p>
                                </div>
                                <div className="col-4 text-danger">
                                    <p>Model</p>
                                    <p>{vehicle.model}</p>
                                </div>
                                <div className="col-4 text-danger">
                                    <p>Manufacturer</p>
                                    <p>{vehicle.manufacturer}</p>
                                </div>
                                {/* Agrega más campos según sea necesario */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Link to="/">
                <button className="btn btn-primary" href="#" role="button">
                    Back home
                </button>
            </Link>
        </div>
    );
};
