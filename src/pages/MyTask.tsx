import Header from "../layout/Header";
import Layout from "../layout/layout";

const MyTask = () => {
  return (
    <Layout>
      <Header label="My Tasks" />
      <div className="p-8">MyTask </div>
    </Layout>
  );
};

export default MyTask;
