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
            <p>{props.dish.description}</p>
            <p>{props.dish.price}/-</p>
          </CardText>
          <DishComments comments={props.dish.comments} />;
        </CardBody>
      </Card>
    </div>
  );
};

export default Dishdetail;
