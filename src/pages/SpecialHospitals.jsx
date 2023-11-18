import Header from "../components/dashboard/Header.jsx";
import ListHospitals from "../components/dashboard/ListHospitals.jsx";

function GeneralHospitals() {
    return (
        <Header title="Daftar Rumah Sakit Khusus">
            <ListHospitals type="khusus" />
        </Header>
    )
}

export default GeneralHospitals