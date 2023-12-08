import { useNavigate } from "react-router";

const Something = () => {
  const navigate = useNavigate();

  return (
    <>
    <p>something</p>
    <button onClick={() => navigate("/haha")}>Change</button>
    </>
  )
}

export default Something;