import React from 'react';
import SongList from "../components/SongList";
import SongDetail from "../components/SongDetail";

class ChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
  }

  componentDidMount(){
      fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(json => this.setState({songs: json.feed.entry}));
      }


        render(){
          return (
            <div>
              <h2>Itunes Top 20</h2>
              <SongList
                songs={this.state.songs}
              />

            </div>
          );
        }
      }

      export default ChartContainer;
