import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='string'>Olá, Mundo1</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo est,
        laboriosam asperiores non dolorem natus quas praesentium iure suscipit
        quibusdam, nisi iusto ad temporibus. Dolorum iure accusamus incidunt
        nihil ipsum.
      </p>
    </>
  );
}
