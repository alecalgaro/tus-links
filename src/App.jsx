import './styles/global.css'
import styled from 'styled-components'
import { Header } from './components/Header';
import { Form } from './components/Form';

function App() {
  return (
    <AppContainer>
      <Header />
      <Form />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`