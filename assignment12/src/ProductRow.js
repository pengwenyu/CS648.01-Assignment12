import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class ProductRow extends Component {

    destroy = () => {
        this.props.onDestroy(this.props.product.id);
   }

    render() {
        let name = this.props.product.name;
        let price = this.props.product.price;
        let category = this.props.product.category;
        return (
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{'$'+price}</td>
                <td>
                    <Button onClick={this.destroy}>Delete</Button>
                </td>
            </tr>
        )
    }
}

export default ProductRow