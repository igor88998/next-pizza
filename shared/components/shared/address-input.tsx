'use client'

import React from 'react';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import {
    GeoapifyGeocoderAutocomplete,
    GeoapifyContext
} from '@geoapify/react-geocoder-autocomplete';

interface PlaceProperties {
    formatted: string;
}

interface Place {
    properties: PlaceProperties;
}

interface Props {
    onChange?: (value?: string) => void
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {

    const handlePlaceSelect = (place: Place) => {
        const address = place?.properties?.formatted; // Get formatted address from place properties
        if (onChange) {
            onChange(address); // Call onChange with the formatted address
        }
    };

    return (

        <GeoapifyContext apiKey="ba6dd63a8ebe4b8e8864b18ab4972600">
            <GeoapifyGeocoderAutocomplete
                placeholder="Enter address here"
                placeSelect={handlePlaceSelect}
            />
        </GeoapifyContext>
    )
}


