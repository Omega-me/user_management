import { Layout } from './modules';
import { AppRouter } from './routes';

const AppContainer = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};

export default AppContainer;
