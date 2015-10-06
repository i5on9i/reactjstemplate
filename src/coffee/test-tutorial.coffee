
CommentBox = React.createClass(

	getInitialState : ()->
		{data : []}
		
	loadCommentsFromServer : ()->
		that = @
		$.ajax
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: (data) ->
				that.setState(data: data)
				return
			
			error: (xhr, status, err) ->
				console.error(that.props.url, status, err.toString())
				return

	handleCommentSubmit: (comment)->
		comments = this.state.data
		newComments = comments.concat([comment])
		this.setState({data: newComments})

		that = @
		$.ajax
			url: this.props.url,
			dataType: 'json',
			type : "POST"
			data : comment
			success: (data) ->
				that.setState({data: data})
				return
			
			error: (xhr, status, err) ->
				console.error(that.props.url, status, err.toString())
				return


	componentDidMount: ()->
		@loadCommentsFromServer()
		setInterval(@loadCommentsFromServer, @props.pollInterval)

			
	

  
	render : ()->
		`(
			<div className="commentBox">
				Hello, world!
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
			</div>
		)`

)

CommentList = React.createClass(
	render : ()->
		commentNodes  = @props.data.map (comment)->
			return `(
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			)`
		
		`(
			<div className="commentList">
				{commentNodes}
			</div>
		)`
)

CommentForm = React.createClass(
	handleSubmit : (e)->
		# after submit
		e.preventDefault()

		author = React.findDOMNode(this.refs.author).value.trim()
		text = React.findDOMNode(this.refs.text).value.trim()
		if not text or not author
			return
		
		this.props.onCommentSubmit
			author : author
			text : text

		# TODO: send request to the server
		React.findDOMNode(this.refs.author).value = ''
		React.findDOMNode(this.refs.text).value = ''
		return


	render : ()->
		`(
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" ref="author" />
				<input type="text" placeholder="Say something..." ref="text" />
				<input type="submit" value="Post" />
			</form>
		)`
)

Comment = React.createClass(
	render : ()->
		`(
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		)`
)


data = [
	{author: "Pete Hunt", text: "This is one comment"},
	{author: "Jordan Walke", text: "This is *another* comment"}

]


# current path : /src/html

# React.render(`<CommentBox data={data}/>`, document.getElementById('content'))
React.render(`<CommentBox url="../../tools/data.json" pollInterval={2000}/>`, document.getElementById('content'))


