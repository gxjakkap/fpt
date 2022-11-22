const Card = ({props}) => {
    let s = ""
    let clr = ""
    if (props.win){
        s = "ชนะ"
        clr = "text-green-600"
    }
    else {
        if (props.score[0] == props.score[1]){
            s = "เสมอ"
            clr = "text-gray-500"
        }
        else {
            s = "แพ้"
            clr = "text-red-700"
        }
    }
    return (
        <>
            <div className="card w-96 h-full bg-base-100 shadow-xl z-0">
                <div className="card-body">
                    <h2 className="card-title ml-auto mr-auto text-lg text-center">{props.name}</h2>
                    <p className={`ml-auto mr-auto text-xl ${clr}`}>{`${s} ${props.score[0]} - ${props.score[1]}`}</p>
                </div>
            </div>
        </>
    )
}

export default Card