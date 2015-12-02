

###
###
class InvGallery extends React.Component
	# static variable
	@defaultProps =
		bar: 'baz'

	constructor: (props) ->
		super props
		@state =
			data: [
				{
					roi: 0.1141,
					link: "http://daum.net"
				},
			]

		url = '/api/inv/recent-items/'

		# TODO : how to deal with debug option
		_debug = false
		if _debug
			url = 'http://127.0.0.1:9081/jsonp/recent-items'
			dataType = 'jsonp'

		that = @
		$.ajax
			url: url,
			dataType: 'json',
			cache: false,
			success: (res) ->
				items = res.success.items
				that.setState(data: items)
				return
			
			error: (xhr, status, err) ->
				console.error(url, status, err.toString())
				return


	render : ()->
		`(
			<div className='invGallery container'>
				<h1>{this.props.title}</h1>
				<InvItemList data={this.state.data}/>
			</div>
		)`




###
"items" : {
	"roi": 0.1141,  # 1 means 100%
	"link": "http://daum.net",
	"period": 240,  # days
	"org": {
		"name": "Terra funding",
		"url": "http://www.terafunding.com/"
	}
},

###
class InvItemList extends React.Component
	@defaultProps = 
		data: [
			{
				id: 1,
				roi: 0.1141,
				link: "http://daum.net"
			},
		]

	constructor: (props) ->
		super props

	render : ()->
		nodes  = @props.data.map (info)->
			return `(
				<InvItem data={info} />
			)`

		`(
			<div className='invItemList row'>
				{nodes}
			</div>
		)`



###
###
class InvItem extends React.Component
	constructor: (props) ->
		super props



	render : ()->

		dec = 
			roi : (val)->
				roi = parseFloat(val * 100).toPrecision(4)
				return "#{roi} %"
			link : (val)->
				return `<span><a target='_blank' href={val}> More + </a></span>`
			period: (val)->
				return "#{val} days"
			org: (val)->
				name = val.name
				url = val.url
				return `<a target='_blank' href={url}>{name}</a>`

			
		
		items = this.props.data
		r = []
		for k, v of items
			clsname = "inv-item-#{k}"
			vv = if typeof dec[k] is "undefined" then v else dec[k](v)

			r.push(`(<li className={clsname}>{vv}</li>)`)

		`(
			<div className='invItem item' key={this.props.data.id}>
				<div className='well'>
				<ul>
					{r}
				</ul>
				</div>
			</div>
		)`




# current path : /src/html

# React.render(`<CommentBox data={data}/>`, document.getElementById('content'))
React.render(`<InvGallery title="p2p 대출"/>`, document.getElementById('content'))


