// @flow 
import * as React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

export const LoadingSpinner = () => {
    const array = new Array(6);
    array.fill();

    return (
        <SkeletonTheme baseColor='#ebebeb' height={300}>
            {
                array.map((el, index) => (
                    <div className='d-flex flex-column m-3 col-11 col-sm-6 col-md-3' key={index}>
                        <p>
                            <Skeleton count={1} height={10} />
                        </p>
                        <p>
                            <Skeleton count={5} height={10} />
                        </p>
                    </div>
                ))
            }
        </SkeletonTheme>
    );
};

export default LoadingSpinner;