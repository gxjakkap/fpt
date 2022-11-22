const SportCard = ({props}) => {
    return (
        <>
            <div className="card w-96 h-full bg-base-100 shadow-xl z-0">
                <div className="card-body">
                    <h2 className="card-title ml-auto mr-auto text-lg text-center">{props}</h2>
                </div>
            </div>
        </>
    )
}

export default SportCard