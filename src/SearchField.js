import React from 'react';
import ReactDOM from 'react-dom';
import List from './List'

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["video 1", "second video", "last video"]
    };

    this.removeItem = this.removeItem.bind(this);
  }


  removeItem(item) {
    const list = this.state.list.slice();
    list.some((el, i) => {
      if (el === item) {
      list.splice(i, 1);
        return true;
      }
    });
    // Set state to list
    this.setState({
      list: list
    });
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
                        <List items={this.state.list} delete={this.removeItem} />
          </section>
        </div>
      </div>
    );
  }
}

export default SearchField;
