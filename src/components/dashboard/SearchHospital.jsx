import {TextField} from "@mui/material";
import PropTypes from "prop-types";
function SearchHospital({setSearch}) {
    return (
        <TextField fullWidth variant="outlined" label="Search Hospitals" type="text" name="search" onChange={(e) => setSearch(e.target.value.toLowerCase())} />
    )
}

export default SearchHospital

SearchHospital.propTypes = {
    setSearch: PropTypes.func
}