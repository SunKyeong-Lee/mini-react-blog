import styled from "styled-components";
import Slider from "react-slick";

import { useEffect, useMemo } from "react";
import { useState } from "react";
import HomeLink from "../components/HomeLink";

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [words, setWords] = useState([
    {
      text: "거기에 많은 시간을 들였다는 이유만으로 실수에 집착하지 마세요",
      author: "익명",
    },
    { text: "처음부터 잘하면 외계인", author: "익명" },
    { text: "일 완벽하게 하려고 스트레스 받지 말자", author: "익명" },
  ]);
  const [imglist, setImglist] = useState([
    // 슬릭에 출력할 배경이미지 배열
    "background_1.jpg",
    "background_2.jpg",
    "background_3.jpg",
  ]);

  // 시계내용을 출력하는 함수 : return 값으로 시간을 돌려줌 - 문자열
  const printClock = () => {
    // 숫자를 문자로 바꿔서, 문자객체에 있는 0을 채우는 메소드 사용
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    return `${hour} : ${minute} : ${seconds}`;
  };

  // 글귀 또는 명언 출력 : 배열 안에 여러개의 문구를 넣어서 출력 (words)
  // 그 중 랜덤으로 하나의 값을 정해서 화면에 출력
  // ! 이슈 > printWord를 실행할 때마다 random 값이 바뀜
  // ? why > update를 할 때마다 printWord가 실행되기 때문
  //         printWord가 html 안에 있기 때문에 계속해서 실행
  // !! 해결 > 이 함수를 고정할 수 있는 방법 : useCallback, useMemo
  //           return값을 고정하기 위해 useMemo 사용
  const printWord = useMemo(() => {
    const randomNum = Math.floor(Math.random() * words.length);
    return words[randomNum];
  }, []);

  // 현재 페이지가 실행되었을 때 (마운트되었을 때),
  // setInterval을 이용하여 시간값을 1초마다 바꿔서 출력, setInterval은 한번만 작성해주면 된다.
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  // 슬릭 화면 사용 - 슬릭과 같은 라이브러리 사용할 때, 관련내용을 확인
  const settings = {
    arrow: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <StyledSlider {...settings}>
        {/** 슬라이더는 내용이 커지면 다음 페이지에 넘어간다. 크기를 조절해서 사용 */}
        {
          // map을 사용해서 출력 - 배열
          imglist.map((img, i) => (
            <div key={i}>
              <img src={require(`../img/${img}`)} alt="" />
            </div>
          ))
        }
      </StyledSlider>
      {/** 현재시간 출력 */}
      <ClockWrap>
        <h1>{printClock()}</h1>
        {/**
         * 배열 안에 있는 글귀 중 하나 출력
         * useMemo를 사용했을 경우, 그 함수의 return 값이 변수 안에 들어가게 된다.
         * 따라서 사용할 때 변수 이름으로만 사용
         */}
        <p>{printWord.text}</p>
        <p>- {printWord.author}</p>
      </ClockWrap>
      <HomeLink />
    </div>
  );
};

export default Home;

const ClockWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 5%;
  z-index: 2;
  color: whitesmoke;
  transform: translateY(-50%);
  h1 {
    margin-bottom: 1.5rem;
  }
`;

const StyledSlider = styled(Slider)`
  *:focus {
    outline: none;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    position: absolute;
    z-index: 1;
  }
  &.slick-initialized {
    overflow: hidden;
    height: 100vh;
  }
`;
