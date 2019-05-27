import React from 'react';
import Item  from  './Item';
import ItemData from './ItemData';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };

    }

    componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

   componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }

    handleChange = (e) => {
      let currentList = [];
      let newList = [];
      if (e.target.value !== "") {
        currentList = this.props.items;
        newList = currentList.filter(item => {
                      const lc = item.toLowerCase();
                      const filter = e.target.value.toLowerCase();
                      return lc.includes(filter);
      });

    } else {
      newList = this.props.items;
    }

    this.setState({
      filtered: newList
    });
  }

    render() {
        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                    <ul>
                        {this.state.filtered.map(item => (
                            <li key={item}>
                                {item} &nbsp;
                                <Item itemData = {new ItemData("1","2","3","4")}/>
                            </li>
                        ))}
                    </ul>
                </div>
        )
    }
}

export default List;
