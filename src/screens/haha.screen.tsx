import { useNavigate } from "react-router";

const Haha = () => {
  const navigate = useNavigate();

  return (
    <>
    <p>haha</p>
    <button onClick={() => navigate("/something")}>Change</button>
    </>
  )
}

export default Haha;