import {Carousel} from './components/Carousel';
import React from "react";
import {ExploreTopBooks} from "./components/ExploreTopBooks";
import {Heroes} from "./components/Heroes";
import {LibraryServices} from "./components/LibraryServices";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks />
            <Carousel/>
            <Heroes/>
            <LibraryServices/>
        </>

    );
}