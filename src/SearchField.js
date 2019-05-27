import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import ItemData from './ItemData';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [new ItemData("video 1","10-10-2010","3000","lalaalalalalalala"),
              new ItemData("second video","10-10-2010","2000","ljjjjjtggggg"),
              new ItemData("last video","10-10-2010","400","iiiyytttttty")]
    };
  }

  render() {
    return (
      <div className="content">
        <div key = {1} className="container">
          <section className="section">
                        <List items={this.state.list} delete={this.removeItem} />
          </section>
        </div>
      </div>
    );
  }
}

export default SearchField;
