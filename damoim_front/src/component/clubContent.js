import '../css/clubContent.css';
import { Link } from 'react-router-dom';
import PostList from './postList';

export const ClubContent = (props) => {
    let clubName = props.url.clubName;
    let url = clubName + '/posting';

    return (
        <>
            <section className="clubInfo">
                <img src="/image/Kit_Logo.png" />
                <div>
                    <h3 className='clubName'>동아리 이름</h3>
                    <h4>동아리 소개: </h4>
                    <a className='clubIntro'>
                        동아리 소개글입니다.
                    </a>
                    <a href="" className="contact">
                        문의하기
                    </a>
                </div>
                <a className='clubLocation'>
                    동아리방 위치:
                    동방 위치는 다음과 같습니다.
                </a>
            </section>

            <section className="clubPost">
                <div className='write'>
                    <Link className='writeBtn'
                        to={`/club/${url}`}
                        style={{
                            textDecoration: 'none',
                            color: 'black'
                        }}>
                        글쓰기
                    </Link>
                </div>
                <div className='postList'>
                    <PostList />
                </div>
            </section>
        </>
    )
}