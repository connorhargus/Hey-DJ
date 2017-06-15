class Leaderboard extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {upvotes: []}

		var stateCopy = this.state
		this.props.plays.map(function(play, i){
			stateCopy.upvotes.push(play.votes)
		})

		this.state = stateCopy;
		this.handleUpvote = this.handleUpvote.bind(this);
	}

	handleUpvote(e) {

		var state = this.state
		state.upvotes[e.target.id] = state.upvotes[e.target.id] + 1
		this.setState(state)

		var data = {
	    id: e.target.name,
	  }
	  var ajaxParams = {
	    type: 'POST',
	    dataType: 'json',
	    url: '/api/newvote',
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
					        			<td>{this.state.upvotes[i]} <input type="button" name={play.id} id={i} className="upvote" onClick={this.handleUpvote} value="+"/> </td>
					        			<td>{play.author}</td>
					      			</tr>
					    			)
					    	}.bind(this))}
					      
					    </tbody>
					  </table>
					</div>
		    </section>
		)
	}
}