class Playing extends React.Component {
    render() {
        return (
            <section id="download" className="content-section text-center">
                <div className="download-section">
                    <div className="container">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h2>Now playing:</h2>
                            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322628230&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}