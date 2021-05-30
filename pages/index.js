import {Counter} from '../components/counter'

export default function Home() {
  return (
    <div style={{
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Counter/>
    </div>
  )
}
