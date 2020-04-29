import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

//Working on Autocomplete
/*import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';*/


import styles from './CountryPicker.module.css';

import { fetchCountries } from './../../api';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    /*const useStyles = makeStyles({
        option: {
          fontSize: 15,
          '& > span': {
            marginRight: 10,
            fontSize: 18,
          },
        },
      });

    const classes = useStyles();*/

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
            {/* <Autocomplete onChange={(event) => handleCountryChange(event.target.value)}
                id="country-select-demo"
                style={{ width: 300 }}
                options={fetchedCountries}
                classes={{
                    option: classes.option,
                }}
                autoHighlight
                getOptionLabel={(option) => option}
                renderOption={(option) => (
                    <React.Fragment>
                    {option}
                    </React.Fragment>
                )}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Choose a country"
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    />
                )}
            /> */}
        </FormControl>
    )
}

export default CountryPicker;