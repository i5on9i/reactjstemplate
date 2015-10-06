

###
###
LoginBox = React.createClass(
	getInitialState : ()->
		{msg : ""}

	handleLoginInfoSubmit: (info)->
		{id, pw} = info
		console.log("request with login info")
		this.setState(
			msg : "test"
		)

	render : ()->


		`(
			<div className='loginBox'>
				<LoginHeader text='Login Page, Welcome'/>
				<NotiMsgBox data={this.state.msg}/>
				<LoginForm onSubmitHandler={this.handleLoginInfoSubmit}/>
			</div>
		)`
)


###
###
LoginHeader = React.createClass(
	render : ()->

		`(
			<div className='loginHeader'>
				{this.props.text}
			</div>
		)`
)


###
###
NotiMsgBox = React.createClass(
	render : ()->

		`(
			<div className='notiMsgBox'>
				{this.props.data}
			</div>
				
		)`
)

###
###
LoginForm = React.createClass(
	handleSubmit: (e)->
		e.preventDefault()
		id = React.findDOMNode(this.refs.id).value.trim()
		pw = React.findDOMNode(this.refs.pw).value.trim()

		@.props.onSubmitHandler
			id : id
			pw : pw




	render : ()->
		`(
			<form className="loginForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your ID" ref="id" />
				<input type="text" placeholder="Password" ref="pw" />
				<input type="submit" value="Post" />
			</form>
		)`

)



# current path : /src/html

# React.render(`<CommentBox data={data}/>`, document.getElementById('content'))
React.render(`<LoginBox />`, document.getElementById('content'))


