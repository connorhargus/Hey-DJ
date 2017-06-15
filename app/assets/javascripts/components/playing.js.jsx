class Playing extends React.Component {
    render() {
        return (
            <section id="download" className="content-section">
                <div className="download-section">
                    <div className="container">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h2>Now playing:</h2>
                            <div className="content" dangerouslySetInnerHTML={{__html: this.props.url}}></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}