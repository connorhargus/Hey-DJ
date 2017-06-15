class Songform extends React.Component {

	 constructor(props) {
    super(props);
    this.state = {name: '', url: ''};

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
	    /*var state = this.state;
  		state['name'] = '';
  		state['url'] = '';
    	this.setState(state);*/
	    console.log('sent request');
	  })
	  .fail(function(data) {
	    console.log('failed to register');
	  });

	}

  render() {
		return (
			<div className="ui input" id="form-test">
			<form onSubmit={this.handleSubmit}>
  			<label>Your Name: </label>
  			<input type="text" name="name" placeholder="e.g. Jane Doe..." value={this.state.name} onChange={this.handleChange}/>
  			<label>SoundCloud: </label>
  			<input type="text" name="url" placeholder="e.g. Jane Doe..." value={this.state.url} onChange={this.handleChange}/>
  			<input type="submit" value="Submit" />
			
			</form>
			</div>
		)
	}
}