import type { NextPage } from "next";
import axios from "axios";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: response.data,
    },
  };
};
export default Home;
