import React,{Component} from 'react';
class AddForm extends Component{
  state={
    name:'',
    address:'',
    contact:''
  }
  onChangeHandler =event=>{
    this.setState(
      {
        [event.target.id]:event.target.value
      }
    );
  }

  


clickHandler=event=>{
  console.log(this.state);
  this.props.onSave(this.state)
  this.setState({name:"",address:"",contact:""})
}

  render(){
    return(
      <div>
        <div>
          <label for="name">Name</label>
        <input onChange={this.onChangeHandler} className="form-control mb-2" type="text" id="name" placeHolder="Enter your friend name" value={this.state.name} />
        </div>
        <div>
        <label for="address">Address</label>
        <input onChange={this.onChangeHandler} className="form-control mb-2" placeHolder="Enter your friend address" type="text" id="address" value={this.state.address} />
        </div>
        <div className="mb-2">
        <label for="number">Contact Number</label>
        <input onChange={this.onChangeHandler}  className="form-control mb-2" type="text"placeHolder="Enter your friend contact number" id="contact" value={this.state.contact} />
        <small className="form-text text-muted">Your contact number will not be shared</small>
        </div>
        <button className="btn btn-danger mb-3" onClick={this.clickHandler}>Save</button>
        
      </div>
    )
  }
}

export default  AddForm;