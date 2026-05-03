export default function NewGame(props){
    return(
        <div className="newgame">
            <button onClick={props.onClick}>
                New Game
            </button>
        </div>
    )
}