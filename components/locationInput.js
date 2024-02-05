import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {geocodeByAddress,geocodeByPlaceId,getLatLng,} from 'react-places-autocomplete';

export default function LocationInput() {
    

    const handleChange = (e) => {
        setAddress(e.target.value);
    }




    const[address,setAddress] = useState('');
    const [coordinate, setCoordinate] = useState(
        {
            lat: null, 
            lng: null
        }
    )
    const handleSelect = async (value) => {
        if (value.trim() === '') {
          // Handle the case where the value is empty
          return;
        }
      
        try {
          const results = await geocodeByAddress(value);
          const ll = await getLatLng(results[0]);
          console.log(ll);
          setAddress(value);
          setCoordinate(ll);
        } catch (error) {
          console.error('Error fetching geocode data:', error);
          // Handle the error as needed
        }
      };
      

    return ( 
        <div>
            <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
                <input
                {...getInputProps({
                    placeholder: 'Enter a location',
                    className: 'location-search-input',
                    id: 'location',
                })}
                />
                <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion, index) => {
                    const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                    <div
                        key={index}
                        {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                        })}
                    >
                        <span>{suggestion.description}</span>
                    </div>
                    );
                })}
                </div>
            </div>
            )}
        </PlacesAutocomplete>
        <br/>
        </div>
    )
}

;
