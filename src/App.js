import React, { Component } from 'react';
import {recipes} from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import './App.css';

class App extends Component {
state={
  recipes:recipes,
  url:"https://www.food2fork.com/api/search?key=b687416c78ff163f056b0b0280c43331",
  base_url:"https://www.food2fork.com/api/search?key=b687416c78ff163f056b0b0280c43331",
  details_id:35382,
  pageIndex:1,
  search:"",
  query:'&q=',
  error:''


};

async getRecipes(){
  try{
const data = await fetch(this.state.url);
const jsonData = await data.json();

if(jsonData.recipes.length === 0){
  this.setState(()=>{
    return{error:'sorry, but your search did not return any results ' }
  })
}
else{
  this.setState({
    recipes:jsonData.recipes
  })
}


  }
  catch(error){
    console.log(error);
  }

}

componentDidMount(){
  this.getRecipes();
  
}


displayPage = (index) =>{
  switch(index){
    default:
    case 1 :
    return(<RecipeList recipes={this.state.recipes}
      
      handekDetails={this.handekDetails}
      value={this.state.search}
      handelChange={this.handelChange}
      handelsubmit={this.handelsubmit}
      error={this.state.error}
      />)
    case 0:
    return(<RecipeDetails id={this.state.details_id} handelIndex={this.handelIndex} />
      )

  }
}

handelIndex= (index)=>{
  this.setState({
pageIndex:index 
  })
}
handekDetails= (index,id)=>{
  this.setState({
pageIndex:index ,
details_id: id  
  })
}

handelChange= e=>{
  this.setState(
    {
    search:e.target.value
  },
  ()=>{
    console.log(this.state.search);
  });
};

handelsubmit= e =>{
  e.preventDefault();
const {base_url,query,search} = this.state;
this.setState(()=>{
  return{
    url:`${base_url}${query}${search}`,search:""
  };
},
()=>{
    this.getRecipes();
  }
);
};


  render() {

    // console.log(this.state.recipes); 
    return (
    
      <React.Fragment>
      {this.displayPage(this.state.pageIndex)}

      
     </React.Fragment>
      
      
    );
  }

}
export default App;