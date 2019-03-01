import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {


    const{value,handelsubmit,handelChange} = this.props
    return (
        <React.Fragment>
       <div className="container">
          <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slant text-capitalize">
              search for recipes with your<strong className="text-info"> choice!</strong>
              </h1>
        <form className="mt-4" onSubmit={handelsubmit}>
        <label htmlFor="search" className="text-capitalize">
        type recipes seperated by comma
        </label>
          <div className="input-group ">
            <input className="form-control" type="text" value={value} onChange={handelChange} name="search" placeholder="onions,apple,bread"/>

<div className="input-group-append">
  <button className="btn input-group-text bg-primary text-white" type="submit">
   <i className="fa fa-search" aria-hidden="true"></i>
  </button>
</div>
          </div>
        </form>
              
              </div>

          </div>
       </div>
  
        </React.Fragment>
    )
  }
}
