class Leaderboard extends React.Component {
	
	constructor() {
		super(props);
		this.handleUpvote = this.handleUpvote.bind(this);
	}

	handleUpvote(e) {
		var data = {
	    /*title: */
	  }

	  var ajaxParams = {
	    type: 'POST',
	    dataType: 'json',
	    url: '/api/newplay',
	    data: data
	  }

	  // Submit form via jQuery/AJAX
	  $.ajax(ajaxParams)
	  .done(function(data) {
	    console.log('sent request');
	  })
	  .fail(function(data) {
	    console.log('failed to register');
	  });
	}

	render() {

		return (
				<section id="about" className="container content-section">
		      <div className="row">
            <h2>Song Leaderboard</h2>
					  <table className="table table-striped table-bordered">
					    <thead>
					      <tr>
					        <th>Title</th>
					        <th>Artist</th>
					        <th>Votes</th>
					        <th>Submitted By</th>
					      </tr>
					    </thead>
					    <tbody>
					    	{this.props.plays.map(function(play, i){
					    			return (
					    				<tr key={i}>
					        			<td>{play.title}</td>
					        			<td>{play.artist}</td>
					        			<td>{play.votes} <input className="upvote" type="submit" onClick={this.handleUpvote} value="+"/> </td>
					        			<td>{play.author}</td>
					      			</tr>
					    			)
					    	})}
					      
					    </tbody>
					  </table>
					</div>

					<div className="media text-center">
						<div className="">
						<h5 className="mt-0">How It Works:</h5>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					  </div>
					</div>
		    </section>
		)
	}
}