import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSingleSkeleton = () => {
    return (
        <SkeletonTheme baseColor='#ebebeb' height={400}>
            <div className='col-12 d-flex flex-column align-items-center mt-5'>
                <div className='d-flex flex-column m-3 col-11 col-sm-6 col-md-3'>
                    <p>
                        <Skeleton count={1} height={10} />
                    </p>
                    <p>
                        <Skeleton count={5} height={10} />
                    </p>
                </div>
            </div>
        </SkeletonTheme>
    );
};

export default LoadingSingleSkeleton;