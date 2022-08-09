import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import DishComments from "./DishComments";

const Dishdetail = (props) => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>
            {props.dish.description}
            <br />
            {props.dish.price}/-
          </CardText>
          <DishComments comments={props.dish.comments} />;
        </CardBody>
      </Card>
    </div>
  );
};

export default Dishdetail;
