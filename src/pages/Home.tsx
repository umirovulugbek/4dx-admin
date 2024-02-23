import Header from "../layout/Header";
import Layout from "../layout/layout";

const Home = () => {
  return (
    <Layout>
      <Header label="Doshboard" />
      <div className="p-8">Home</div>
    </Layout>
  );
};

export default Home;
