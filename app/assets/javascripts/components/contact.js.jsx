class Contact extends React.Component {
    render() {
        return (
            <section id="contact" className="container content-section text-center">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <h2>Contact Hey DJ!</h2>
                        <p><a href="mailto:feedback@startbootstrap.com">connor.hargus-i@plated.com</a>
                        </p>
                        <ul className="list-inline banner-social-buttons">
                            <li>
                                <a href="https://twitter.com/officiaikanye?lang=en" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                            </li>
                            <li>
                                <a href="https://github.com/connorhargus/Hey-DJ" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                            </li>
                            <li>
                                <a href="https://soundcloud.com" className="btn btn-default btn-lg"><i className="fa fa-google-plus fa-fw"></i> <span className="network-name">SoundCloud</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}