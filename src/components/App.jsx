import Labyrinth from './Labyrinth';
import styled from 'styled-components'
import Header from './Header';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <Labyrinth/>
    </AppWrapper>
  );
}

export default App;
