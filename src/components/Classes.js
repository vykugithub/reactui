import React from "react";
import { fetchClasses } from "../actions";
import { connect } from "react-redux";

class Classes extends React.Component {
  componentDidMount() {
    console.log("did mount start");
    this.props.fetchClasses();
    console.log("did mount");
  }
  render() {
    console.log(this.props);
    if (!this.props.loading && this.props.classes) {
      return (
        <ul>
          {this.props.classes.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>-------</span>
                <span>{item.desc}</span>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <div>is loading......</div>;
    }
  }
}

const mapStateToProps = (state) => ({
  classes: state.classes.classes,
  loading: state.classes.loading,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchClasses: () => dispatch(fetchClasses()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Classes);
