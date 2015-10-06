ProductCategoryRow = React.createClass(
	render: ->
		return `(
			<tr><th colSpan="2">{this.props.category}</th></tr>
		)`
)


ProductRow = React.createClass(
	render: ->
		name = if this.props.product.stocked then this.props.product.name 
		else `<span style={{color: 'red'}}>
				{this.props.product.name}
			</span>`

		`(
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		)`
		
)


ProductTable = React.createClass(
	render: ->
		rows = []
		lastCategory = null
		this.props.products.forEach (product) ->
			if product.category != lastCategory
				rows.push `<ProductCategoryRow category={product.category} key={product.category} />`
			rows.push `<ProductRow product={product} key={product.name} />`
			lastCategory = product.category
			return
		return `(
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			)`
		
)

SearchBar = React.createClass(
	render: ->
		return `(
			<form>
				<input type="text" placeholder="Search..." />
				<p>
					<input type="checkbox" />
					{' '}
					Only show products in stock
				</p>
			</form>
		)`
		
)

FilterableProductTable = React.createClass(
	render: ->
		return `(
			<div>
				<SearchBar />
				<ProductTable products={this.props.products} />
			</div>
		)`
)



PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]
 
React.render(`<FilterableProductTable products={PRODUCTS} />`, document.body);
