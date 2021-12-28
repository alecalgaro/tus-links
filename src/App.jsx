import './styles/global.css'
import styled from 'styled-components'
import { Header } from './components/Header';
import { Form } from './components/Form';
import { ListLinks } from './components/ListLinks';

function App() {
  return (
    <AppContainer>
      <Header />
      <Form />
      <ListLinks />
    </AppContainer>
  );
}

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 90vw; */
`

export default App;