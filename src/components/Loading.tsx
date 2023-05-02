function Loading () {
    return <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-light opacity-75" style={{zIndex: "1000"}}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
}

export default Loading;