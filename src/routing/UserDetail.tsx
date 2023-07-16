import { useParams } from "react-router-dom";
const UserDetail = () => {
  const params = useParams();
  console.log(params);
  return <p>users:{params.id}</p>;
};

export default UserDetail;
