import { Layout } from './Layout';

export const App = () => {
  const [value, setValue] = useState(0);
  return <Layout>{value}</Layout>;
};
