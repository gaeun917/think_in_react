import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <div>
                <input type="text"
                       placeholder='Search'
                       value={filterText}
                       onChange={this.handleFilterTextChange}/>
                <input className='searchbar_checkbox'
                       type="checkbox"
                       checked={inStockOnly}
                       onChange={this.handleInStockChange}/>
            </div>
        );
    }
}

export default SearchBar;