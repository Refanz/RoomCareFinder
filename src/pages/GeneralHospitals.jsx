import Header from "../components/dashboard/Header.jsx";
import ListHospitals from "../components/dashboard/ListHospitals.jsx";

function GeneralHospitals() {
    return (
        <Header title="Daftar Rumah Sakit Umum">
            <ListHospitals type="umum" />
        </Header>
    )
}

export default GeneralHospitals