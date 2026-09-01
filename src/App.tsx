import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action="">
          <div className='formRow'>
            <DefaultInput id="task" type="text" labelText="task" placeholder='Digite algo' />
          </div>
          <div className='formRow'>
            <p>Próximo ciclo é de FUNCTION</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  )
}

