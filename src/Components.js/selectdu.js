import React, { Fragment } from "react";
import FontAwesome from "react-fontawesome";

class Select extends React.Component {
  state = {
    searchedData: [],
    isMenuVisible: false,
    searchValue: ""
  };

  addUniqueSearchedValue = event => {
    const { searchedData } = this.state;
    const { isMultipleSelection } = this.props;

    if (!isMultipleSelection && searchedData.length > 0) {
      return;
    } else if (
      event.key === "Enter" &&
      event.target.value !== "" &&
      !searchedData.includes(event.target.value)
    ) {
      this.setState({
        searchedData: [...searchedData, event.target.value],
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
    const { searchedData } = this.state;
    const { isMultipleSelection } = this.props;

    if (!isMultipleSelection && searchedData.length > 0) {
      return;
    } else if (!searchedData.includes(value)) {
      this.setState({
        searchedData: [...this.state.searchedData, value],
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

  removeSearchedValue = index => {
    const { searchedData } = this.state;

    this.setState({
      searchedData: [...searchedData.filter(value => value !== index)]
    });
  };

  handleSearchedValue = event => {
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
    const { searchedData, searchValue } = this.state;
    const { placeholder } = this.props;

    return (
      // <div
      //   className="c-select"
      //   ref={element => {
      //     this.menu = element;
      //   }}
      // >
      <Fragment>
        <div className="c-select__body">
          {searchedData.map((value, index) => (
            <div key={index}>
              <FontAwesome
                onClick={() => this.removeSearchedValue(value)}
                name="times-circle"
                size="1x"
                style={{ color: "black" }}
              />
              <span className="c-select__tag">{value}</span>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder={(placeholder && placeholder) || "Search.."}
          value={searchValue}
          onKeyUp={event => this.addUniqueSearchedValue(event)}
          onChange={this.handleSearchedValue}
        />
      </Fragment>
    );
  };

  render() {
    const { isMenuVisible } = this.state;

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
      </Fragment>
    );
  }
}
export default Select;
