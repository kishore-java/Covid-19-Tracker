 import React, { useState,useEffect} from 'react';
 import { NativeSelect,FormControl } from '@material-ui/core';
 import { Countries } from '../../api';
 import styles from './Country.module.css';
 
 
 const CountryPicker = ({handleCountryChange}) => {
    const [fetchCountries, setFetchCountries] =useState([]);

      useEffect(() => {
         const fetchAPI = async()=>{
            setFetchCountries(await Countries())
         }
          fetchAPI();
      },[setFetchCountries]);

      return (<div>
         <FormControl className={styles.formControl}>
             <NativeSelect defaultValue=""  onChange={ e => handleCountryChange(e.target.value)}>
                 <option value="global">
                     Global
                 </option>
                 {fetchCountries.map((country,i) =><option key={i} value={country}>{country}</option> )}
              </NativeSelect>
         </FormControl>
     </div>)
  }
  
  export default CountryPicker;



  

 