import React from "react";
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import { FaSearchLocation } from 'react-icons/fa';





export const Maps = (props) => {

    const mapState = {
        controls: ['default']
    };
    return <>
        <Map onAPIAvailable={function () { console.log('API loaded'); }} width={'100%'} height={'300px'} state={mapState} center={[56.488163, 84.948595]} zoom={9}>
            <Marker lat="56.488163" lon="84.948595">
                <MarkerLayout>
                    <FaSearchLocation size="32px" color="brown"  />
                </MarkerLayout>
            </Marker>
        </Map>
    </>;
}