import React, { Fragment } from "react";
import FontAwesome from "react-fontawesome";

import List from "./List";

class Select extends React.Component {
  state = {
    searchValues: [],
    isMenuVisible: false,
    searchValue: ""
  };

  addUniqueSearchValue = event => {
    const { searchValues } = this.state;
    const { isMultipleSelection } = this.props;

    if (!isMultipleSelection && searchValues.length > 0) {
      return;
    } else if (
      event.key === "Enter" &&
      event.target.value !== "" &&
      !searchValues.includes(event.target.value)
    ) {
      this.setState({
        searchValues: [...searchValues, event.target.value],
        isMenuVisible: false,
        searchValue: ""
      });
    }

    // else if (!searchedData.includes(event)) {
    //   console.log(event.target.value);
    //   this.setState({
    //     searchedData: [...searchedData, event.target.value],
    //     // isMenuVisible: false,
    //     searchValue: ""
    //   });
    // }
  };

  selectValueFromMenu = value => {
    const { searchValues } = this.state;
    const { isMultipleSelection } = this.props;

    if (!isMultipleSelection && searchValues.length > 0) {
      return;
    } else if (!searchValues.includes(value)) {
      this.setState({
        searchValues: [...searchValues, value],
        isMenuVisible: false,
        searchValue: ""
      });
    } else {
      this.setState({
        isMenuVisible: false,
        searchValue: ""
      });
    }
  };

  removeSearchValue = index => {
    const { searchValues } = this.state;

    this.setState({
      searchValues: [...searchValues.filter(value => value !== index)]
    });
  };

  handleSearchValue = event => {
    this.setState({
      searchValue: event.target.value
    });

    this.setState({ isMenuVisible: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = event => {
    if (this.menu && !this.menu.contains(event.target)) {
      this.setState({ isMenuVisible: false, searchValue: "" }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  };

  renderMenu = () => {
    const { searchValue } = this.state;
    const { menuData } = this.props;

    return (
      <div className="c-select__menu">
        {menuData
          .filter(
            item => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
          )
          .map((item, index) => {
            return (
              <p key={index} onClick={() => this.selectValueFromMenu(item)}>
                {item}
              </p>
            );
          })}
      </div>
    );
  };

  renderTags = () => {
    const { searchValues, searchValue } = this.state;
    const { placeholder } = this.props;

    return (
      <div className="c-select__body">
        <div className="c-select__tags">
          {searchValues.map((value, index) => (
            <div key={index}>
              <FontAwesome
                onClick={() => this.removeSearchValue(value)}
                name="times-circle"
                size="1x"
                style={{ color: "black" }}
              />
              <span>{value}</span>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder={(placeholder && placeholder) || "Search.."}
          value={searchValue}
          onKeyUp={event => this.addUniqueSearchValue(event)}
          onChange={this.handleSearchValue}
        />
      </div>
    );
  };

  render() {
    const { isMenuVisible, searchValues } = this.state;

    return (
      <Fragment>
        <div
          classNAme="c-select"
          ref={element => {
            this.menu = element;
          }}
        >
          {this.renderTags()}
          {isMenuVisible ? this.renderMenu() : null}
        </div>

        <List array={searchValues} />
      </Fragment>
    );
  }
}
export default Select;
