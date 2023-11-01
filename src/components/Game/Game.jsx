import { useState } from "react"

export default function Game() {
    const [games] = useState([{"game":1,"words":["SELECT","*","FROM","USERS"],"show":["SELECT","UPDATE","FROM","EMPLOYEES","*", "NAME","FROM","ALTER","INSERT","USERS"]}])
    const [currentGame, setCurrentGame] = useState(1)
    const [doneGame, setDoneGame] = useState()
    const [texts, settexts] = useState()
    const [bucket, setBucket] = useState()


    const handleDrag = (e, string) =>{
        e.dataTransfer.setData("widget", string)
        console.log('dragged')
    }
    const handleDrop = (e) =>{
        console.log('dropped')
        const data = e.dataTransfer.getData("widget")

        console.log(data)
    }

    const getRandomGame = () =>{
        
    }

  return (
    <div>
        <div>Game {currentGame}</div>
        <div className="div">
            <div draggable onDragStart={(e)=>handleDrag(e, "SELECT")}>SELECT</div>
            <div draggable onDragStart={(e)=>handleDrag(e, "*")}>*</div>
            <div draggable onDragStart={(e)=>handleDrag(e, "FROM")}>FROM</div>
            <div draggable onDragStart={(e)=>handleDrag(e, "USERS")}>USERS</div>
            <div draggable onDragStart={(e)=>handleDrag(e, "EMPLOYEES")}>EMPLOYEES</div>
            <div draggable onDragStart={(e)=>handleDrag(e, "WHERE")}>WHERE</div>
            <div draggable onDragStart={(e)=>handleDrag(e, "UPDATE")}>UPDATE</div>
            <div draggable onDragStart={(e)=>handleDrag(e, "name")}>name</div>
            <div draggable onDragStart={(e)=>handleDrag(e, "id")}>id</div>
        </div>

        <div className="dispose" onDrop={handleDrop} onDragOver={(e)=>e.preventDefault()}>

        </div>
    </div>
  )
}
