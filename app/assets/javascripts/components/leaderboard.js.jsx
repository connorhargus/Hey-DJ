class Leaderboard extends React.Component {
	render() {
		return (
			<section id="about" className="container content-section">
		        <div className="row">
		            <div className="col-lg-8 col-lg-offset-2">
		              <div className="container">
		                	<h2>Current Leaderboard</h2>
									  <table className="table table-striped">
									    <thead>
									      <tr>
									        <th>Title</th>
									        <th>Artist</th>
									        <th>Votes</th>
									      </tr>
									    </thead>
									    <tbody>
									      <tr>
									        <td>John</td>
									        <td>Doe</td>
									        <td>john@example.com</td>
									      </tr>
									      <tr>
									        <td>Mary</td>
									        <td>Moe</td>
									        <td>mary@example.com</td>
									      </tr>
									      <tr>
									        <td>July</td>
									        <td>Dooley</td>
									        <td>july@example.com</td>
									      </tr>
									    </tbody>
									  </table>
									</div>

									<div className="media text-center">
										<div className="">
										<h5 className="mt-0">How It Works:</h5>
										Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
									  </div>
									</div>
									  
						
		            </div>
		        </div>
		    </section>
		)
	}
}