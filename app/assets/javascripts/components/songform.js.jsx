class Songform extends React.Component {

	 constructor(props) {
    super(props);
    this.state = {name: '', url: '', title: '', artist: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  	var state = this.state;
  	state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);

	  var data = {
	    name: this.state.name,
	    url: this.state.url,
	    title: this.state.title,
	    artist: this.state.artist,
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
			<div className="ui input container" id="form-test">
			<form onSubmit={this.handleSubmit}>
				<div className="row">
				<div className="col-xs-6">
					<div className="row rowlabel">
	  			<label>Your Name:</label>
	  			</div>
	  			<div className="row rowlabel">
	  			<label>Song Title: </label>
	  			</div>
	  			<div className="row rowlabel">
	  			<label>Artist: </label>
	  			</div>
	  			<div className="row rowlabel">
	  			<label>SoundCloud Embed Link: </label>
	  			</div>
				</div>
				<div className="col-xs-6">
					<div className="row">
	  			<input type="text" name="name" placeholder="e.g. Jane Doe" value={this.state.name} onChange={this.handleChange}/>
	  			</div>
	  			<div className="row">
	  			<input type="text" name="title" placeholder="e.g. Come Together" value={this.state.title} onChange={this.handleChange}/>
	  			</div>
	  			<div className="row">
	  			<input type="text" name="artist" placeholder="e.g. The Beatles" value={this.state.artist} onChange={this.handleChange}/>
	  			</div>
	  			<div className="row">
	  			<input type="text" name="url" placeholder="e.g. <iframe..." value={this.state.url} onChange={this.handleChange}/>
	  			</div>
	  			<div className="submitButton">
	  			<input type="submit" value="Submit" />
					</div>
				</div>
				</div>
  			
			</form>
			</div>
		)
	}
}