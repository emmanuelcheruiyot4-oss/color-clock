import { format } from 'date-fns'
import './style.css'
 
function App(){
  return(
    <>
      <div className="time">
      <p>
        current time: {format(new Date(), 'PPpp')}
      </p>
      </div>
    </>
  )
}
export default App