import { useParams } from "react-router-dom";

const Show = (e) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default Show;
