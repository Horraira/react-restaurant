import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import Loading from "./Loading";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, rating, author, comment) =>
      dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
  };
};

class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  onDishSelect = (dish) => {
    this.setState({
      selectedDish: dish,
      modalOpen: !this.state.modalOpen,
    });
  };

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    document.title = "Menu";
    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else {
      const menu = this.props.dishes.dishes.map((item) => {
        return (
          <MenuItem
            dish={item}
            key={item.id}
            onDishSelect={this.onDishSelect}
          />
        );
      });

      let dishDetail = null;
      if (this.state.selectedDish != null) {
        const comments = this.props.comments.filter(
          (comment) => comment.dishId === this.state.selectedDish.id
        );
        dishDetail = (
          <DishDetail
            dish={this.state.selectedDish}
            comments={comments}
            addComment={this.props.addComment}
          />
        );
      }

      return (
        <div className="container">
          <div className="row">
            <CardColumns>{menu}</CardColumns>
            <Modal isOpen={this.state.modalOpen}>
              <ModalBody>{dishDetail}</ModalBody>
              <ModalFooter>
                <Button onClick={this.toggleModal} color="secondary">
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
