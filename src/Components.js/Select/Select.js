import React, { Fragment } from "react";
import FontAwesome from "react-fontawesome";

import "./Select.css";
import List from "../List/List";

class Select extends React.Component {
  state = {
    searchValues: [],
    searchValue: "",
    isMenuVisible: false
  };

  addSearchValue = event => {
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
  };

  removeSearchValue = index => {
    const { searchValues } = this.state;

    this.setState({
      searchValues: [...searchValues.filter(value => value !== index)]
    });
  };

  selectValueFromMenu = value => {
    const { searchValues } = this.state;
    const { isMultipleSelection } = this.props;

    this.setState({
      isMenuVisible: false,
      searchValue: ""
    });

    if (!isMultipleSelection && searchValues.length > 0) {
      return;
    } else if (!searchValues.includes(value)) {
      this.setState({
        searchValues: [...searchValues, value]
      });
    }
  };

  handleSearchValue = event => {
    this.setState(
      {
        searchValue: event.target.value,
        isMenuVisible: true
      },
      () => document.addEventListener("click", this.closeMenu)
    );
  };

  closeMenu = event => {
    if (this.menu && !this.menu.contains(event.target)) {
      this.setState({ isMenuVisible: false, searchValue: "" }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
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
                size="2x"
              />
              <span>{value}</span>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder={placeholder || "Search.."}
          value={searchValue}
          onKeyUp={event => this.addSearchValue(event)}
          onChange={this.handleSearchValue}
        />
      </div>
    );
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

  render() {
    const { isMenuVisible, searchValues } = this.state;

    return (
      <Fragment>
        <div
          className="c-select"
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
