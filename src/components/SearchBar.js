import React, { Component } from 'react'
import {Paper,TextField} from '@material-ui/core'

class SearchBar extends Component {
    state={
        searchTerm:''
    }
    
    handleChange=(event)=>{
        this.setState({
            searchTerm:event.target.value                       //event.target.value to get what we have serached
        })
    }

    handleSubmit=(event)=>{
        const {searchTerm}=this.state                          //destructuring to avoid those this.state
        const {onFormSubmit}=this.props                         //connecting handle submit with app.js using props
        onFormSubmit(searchTerm)                                //calling onformsubmit and passing the searchterm

        event.preventDefault()                              //to pervent the page full refresh after searching smting
    }
    render() {
        return (
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search....." onChange={this.handleChange}/>
                </form>    
            </Paper>
        )
    }
}

export default SearchBar
