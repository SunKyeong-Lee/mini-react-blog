import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [time, setTime] = useState(new Date());

  // 현재 페이지가 실행되었을 때, setInterval을 이용하여 시간값을 1초마다 바꿔서 출력
  // setInterval은 한번만 작성해주면 된다.
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const getTime = () => {};

  return (
    <div>
      {/** 현재시간 출력 */}
      <h1>
        {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
      </h1>
    </div>
  );
};

export default Home;
