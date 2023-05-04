function Loading () {
    return (
        <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-light opacity-75"  style={{zIndex: "1100"}}>
            <div className="position-absolute top-0 start-50 spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;