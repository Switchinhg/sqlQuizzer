
import { useNavigate  } from "react-router-dom"
export default function Startgame() {
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/game')
    }
  return (
    <div className="startgame">
        <button onClick={handleClick}>Start New Game</button>
    </div>
  )
}
