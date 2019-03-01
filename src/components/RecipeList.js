import React, {Component} from 'react'
import Recipe from './Recipe';
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {

    
    render() {
        const {recipes,handekDetails,value,handelsubmit,handelChange,error } = this.props;
        return ( 
            
            <React.Fragment>
            <RecipeSearch  value={value} handelChange={handelChange} handelsubmit={handelsubmit}/>
            <div className="container my-5 ">
        {/*title*/}  
            <div className="row">
               <div className="col-10 mx-auto col-md-6 text-center
               text-uppercase mb-3">
                <h1 className="text_slant">
                recipe list
                </h1>

            </div>
            </div>
        {/*title end*/} 


        <div className="row">
{error?<h1 className="text-danger text-center" >{error}</h1>:
recipes.map(recipe => {
    return(
        <Recipe key={recipe.recipe_id} recipe={recipe} handekDetails={()=>handekDetails(0,recipe.recipe_id)} />
        
        
        )
})
}            
      
        </div>
            </div>

        

            </React.Fragment>
        )
    }
}