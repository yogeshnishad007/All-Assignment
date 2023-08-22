import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/action";

const Home = () => {
  const Data = useSelector((state) => state.users);
  console.log("data", Data);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => dispatch(getData(data)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {Data.map((el) => {
        return (
          <>
            <h5>{el.name}</h5>
          </>
        );
      })}
    </div>
  );
};

export default Home;
