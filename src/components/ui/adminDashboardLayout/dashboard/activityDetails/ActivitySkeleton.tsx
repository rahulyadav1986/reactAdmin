import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const ActivitySkeleton = () => {
  return (
    <div className="list_two_column_skeleton_wrapper activity">   
        <ul className="list_sketon_wrapper">
            <li>
                <div className="circle">
                    <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                        <Skeleton count={1} />
                    </SkeletonTheme>
                </div>
                <div className="line">
                    <div className="big_line">
                        <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                            <Skeleton count={1} />
                        </SkeletonTheme>
                    </div>
                    <div className="small_line">
                        <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                            <Skeleton count={1} />
                        </SkeletonTheme>
                    </div>
                </div>
            </li>
            <li>
                <div className="circle">
                    <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                        <Skeleton count={1} />
                    </SkeletonTheme>
                </div>
                <div className="line">
                    <div className="big_line">
                        <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                            <Skeleton count={1} />
                        </SkeletonTheme>
                    </div>
                    <div className="small_line">
                        <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                            <Skeleton count={1} />
                        </SkeletonTheme>
                    </div>
                </div>
            </li>
            <li>
                <div className="circle">
                    <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                        <Skeleton count={1} />
                    </SkeletonTheme>
                </div>
                <div className="line">
                    <div className="big_line">
                        <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                            <Skeleton count={1} />
                        </SkeletonTheme>
                    </div>
                    <div className="small_line">
                        <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                            <Skeleton count={1} />
                        </SkeletonTheme>
                    </div>
                </div>
            </li>
            <li>
                <div className="circle">
                    <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                        <Skeleton count={1} />
                    </SkeletonTheme>
                </div>
                <div className="line">
                    <div className="big_line">
                        <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                            <Skeleton count={1} />
                        </SkeletonTheme>
                    </div>
                    <div className="small_line">
                        <SkeletonTheme baseColor="#EDEFF1" highlightColor="#fff">
                            <Skeleton count={1} />
                        </SkeletonTheme>
                    </div>
                </div>
            </li>
        </ul>
        
    </div>
  )
}

export default ActivitySkeleton