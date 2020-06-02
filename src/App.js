import React from 'react';

import { Grid } from '@material-ui/core';      // acurly in grid not in yt coz grid is not by default we hav to specify it
import youtube from './api/youtube'                     //it is already exported(export default) from youtube.js file

//import SearchBar from './components/SearchBar';        it is quite boring to add these again and again solu..make an index.js and done
//import VideoDetail from './components/VideoDetail';

import {SearchBar,VideoDetail,VideoList} from './components'     //index files are special no need for /index.js

class App extends React.Component {
    state={
        videos:[],                                       //khali state baad main setState se add kardenge videos
        selectedVideo:null
    }

    componentDidMount(){                                        //just for th sake that initially some data is shown in app and that is pdf gene..
            this.handleSubmit('Believer')
    }

    onVideoSelect=(video)=>{
        this.setState({
            selectedVideo:video
        });
    }

    handleSubmit= async (searchTerm) =>{                    //making searchterm asynchronous
        const response=await youtube.get('search',{
            params:{
                part:'snippet',
                maxResults: 5,                              //5 results to shown
                key:'AIzaSyBKIQLOETF5QLL53z824bK_2UjvuJf3Kug',
                q:searchTerm                                //in query
            }
        });

        this.setState({
            videos:response.data.items,                          //basicly wan array of videos is created on searching something 
            selectedVideo:response.data.items[0]                // and then access them using selectedVideo
        }); 
    }
    render() {
        const {selectedVideo,videos}=this.state        //destructuring
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}> 
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default App;
