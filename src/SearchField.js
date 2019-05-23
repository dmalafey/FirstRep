import React from 'react';


class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['first video', 'second video', 'last video'],
    };

  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
          </section>
          <hr />
          <section className="section">
            <form className="form" id="addItemForm">
              <input
                type="text"
                className="input"
                id="addInput"
                placeholder="Something that needs ot be done..."
              />
              <button className="button is-info" type="submit" onClick={this.addItem}>
                ADD
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default SearchField;
