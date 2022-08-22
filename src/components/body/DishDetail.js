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
import CommentForm from "./CommentForm";
import { baseUrl } from "../../redux/baseUrl";

const Dishdetail = (props) => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg
          top
          src={baseUrl + props.dish.image}
          alt={props.dish.name}
        ></CardImg>
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>
            {props.dish.description}
            <br />
            {props.dish.price}/-
          </CardText>
          <hr />
          <DishComments comments={props.comments} isLoading={props.isLoading} />
          <hr />
          <CommentForm dishId={props.dish.id} addComment={props.addComment} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Dishdetail;
