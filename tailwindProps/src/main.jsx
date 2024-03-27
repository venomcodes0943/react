import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Card from './components/Card'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Nav />
    <Landing />
    <Card username="MyCard" />
  </>
)
