import {createContext, useEffect, useState} from "react";
import RoomAPI from "../api/RoomAPI.jsx";
import PropTypes from "prop-types";

const HospitalContext = createContext([]);

function HospitalProvider({children}) {
    const [hospitals, setHospitals] = useState([]);
    const api = new RoomAPI();

    useEffect(() => {
        if (hospitals.length < 1) {
            api.getHospitals().then((data) => {
                setHospitals(data);
            })
        }
    }, [hospitals]);

    return (
        <HospitalContext.Provider value={hospitals} >
            {children}
        </HospitalContext.Provider>
    )
}

export {HospitalContext, HospitalProvider}

HospitalProvider.propTypes = {
    children: PropTypes.element
}