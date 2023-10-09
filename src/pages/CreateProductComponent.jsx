import React, { Component } from 'react'
import ProductServices from '../services/ProductServices';
// import EmployeeService from '../services/EmployeeService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            brand: '',
            price: '',
            status: '',
            component: '',
            guide: '',
            instruction: '',
            madeIn: '',
            object: '',
            preservation: '',
            store: '',
            vitue: '',
            category: '',
            imageUrls: []
        }
        this.changeName = this.changeName.bind(this);
        this.changeBrand = this.changeBrand.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeComponent = this.changeComponent.bind(this);
        this.changeGuide = this.changeGuide.bind(this);
        this.changeInstruction = this.changeInstruction.bind(this);
        this.changeMadein = this.changeMadein.bind(this);
        this.changeObject = this.changeObject.bind(this);
        this.changePreservation = this.changePreservation.bind(this);
        this.changeStore = this.changeStore.bind(this);
        this.changeVitue = this.changeVitue.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.changeImg = this.changeImg.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            ProductServices.getProductById(this.state.id).then((res) => {
                let product = res.data;
                this.setState({
                    name: product.name,
                    brand: product.brand,
                    price: product.price,
                    status: product.status,
                    category_id: product.category_id,
                    component: product.component,
                    guide: product.guide,
                    instruction: product.instruction,
                    madeIn: product.madeIn,
                    object: product.object,
                    preservation: product.preservation,
                    store: product.store,
                    vitue: product.vitue,
                    imageUrls: product.imageUrls
                });
            });
        }
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {
            name: this.state.name,
            brand: this.state.brand,
            price: this.state.price,
            status: this.state.status,
            category_id: this.state.category_id,
            component: this.state.component,
            guide: this.state.guide,
            instruction: this.state.instruction,
            madeIn: this.state.madeIn,
            object: this.state.object,
            preservation: this.state.preservation,
            store: this.state.store,
            vitue: this.state.vitue,
            imageUrls: this.state.imageUrls




        };
        console.log('product => ' + JSON.stringify(product));

        // step 5
        if (this.state.id === '_add') {
            ProductServices.CreateProductComponent(product).then(res => {
                this.props.history.push('/viewproduct');
            });
        } else {
            ProductServices.product(product, this.state.id).then(res => {
                this.props.history.push('/viewproduct');
            });
        }
    }

    changeName = (event) => {
        this.setState({ name: event.target.value });
    }

    changeBrand = (event) => {
        this.setState({ brand: event.target.value });
    }

    changePrice = (event) => {
        this.setState({ price: event.target.value });
    }

    changeStatus = (event) => {
        this.setState({ status: event.target.value });
    }
    changeComponent = (event) => {
        this.setState({ component: event.target.value });
    }

    changeGuide = (event) => {
        this.setState({ guide: event.target.value });
    }

    changeInstruction = (event) => {
        this.setState({ instruction: event.target.value });
    }
    changeMadein = (event) => {
        this.setState({ madeIn: event.target.value });
    }

    changeObject = (event) => {
        this.setState({ object: event.target.value });
    }

    changePreservation = (event) => {
        this.setState({ preservation: event.target.value });
    }

    changeStore = (event) => {
        this.setState({ store: event.target.value });
    }

    changeVitue = (event) => {
        this.setState({ vitue: event.target.value });
    }

    changeCategory = (event) => {
        this.setState({ category: event.target.value });
    }
    changeImg = (event) => {
        this.setState({ imageUrls: event.target.value });
    }

    cancel() {
        this.props.history.push('/viewproduct');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 style={{ paddingTop: '15px' }} className="text-center">Add Product</h3>
        } else {
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <label className="form-label" for="customFile">Upload Product Image:</label>
                                    <input type="file" className="form-control" id="customFile" multiple style={{ height: '38px' }}
                                        name='imageUrls' onChange={this.changeImg} value={this.state.imageUrls} />
                                    <div className='row'>
                                        <div className="form-group col-md-6">
                                            <label for="a"> Product Name: </label>
                                            <input id='a' placeholder="Type......" name="name" className="form-control"
                                                value={this.state.name} onChange={this.changeName} required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label> Product Brand: </label>
                                            <input placeholder="Type......" name="brand" className="form-control"
                                                value={this.state.brand} onChange={this.changeBrand} required />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="form-group col-md-6">
                                            <label> Product Price: </label>
                                            <input placeholder="Type......" name="price" className="form-control"
                                                value={this.state.price} onChange={this.changePrice} required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label> Product Status: </label>
                                            <br></br>
                                            <select onChange={this.changeStatus} style={{ width: '100%', height: '56%', outline: 'none', borderRadius: '0.375rem', borderColor: '#dee2e6', color: '#212529' }} name="status" required>
                                                <option value="1">In Stock</option>
                                                <option value="0">Out Of Stock</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label> Product Component: </label>
                                        <textarea placeholder="Type......" name="component" className="form-control"
                                            value={this.state.component} onChange={this.changeComponent} id="" cols="30" rows="3"></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label> Product Guide: </label>
                                        <input placeholder="Type......" name="guide" className="form-control"
                                            value={this.state.guide} onChange={this.changeGuide} />
                                    </div>

                                    <div className="form-group">
                                        <label> Product Instruction: </label>
                                        <input placeholder="Type......" name="instruction" className="form-control"
                                            value={this.state.instruction} onChange={this.changeInstruction} />
                                    </div>

                                    <div className='row'>
                                        <div className="form-group col-md-6">
                                            <label for="a"> Made In: </label>
                                            <input id='a' placeholder="Type......" name="madeIn" className="form-control"
                                                value={this.state.madeIn} onChange={this.changeMadein} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Object: </label>
                                            <input placeholder="Type......" name="object" className="form-control"
                                                value={this.state.object} onChange={this.changeObject} />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="form-group col-md-6">
                                            <label for="a"> Preservation: </label>
                                            <input id='a' placeholder="Type......" name="preservation" className="form-control"
                                                value={this.state.preservation} onChange={this.changePreservation} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Store: </label>
                                            <input placeholder="Type......" name="store" className="form-control"
                                                value={this.state.store} onChange={this.changeStore} />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="form-group col-md-6">
                                            <label for="a"> Vitue: </label>
                                            <input id='a' placeholder="Type......" name="virtue" className="form-control"
                                                value={this.state.vitue} onChange={this.changeVitue} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Category: </label>
                                            <br></br>
                                            <select style={{ width: '100%', height: '56%', outline: 'none', borderRadius: '0.375rem', borderColor: '#dee2e6', color: '#212529' }} name="category"
                                                value={this.state.category} onChange={this.changeCategory} id="">
                                                <option value="1">A</option>
                                                <option value="0">B</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateProductComponent