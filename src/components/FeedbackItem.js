import React, { useContext } from "react";

import { FaTimes, FaEdit } from "react-icons/fa";

import Card from "./sheared/Card";

import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes color="purple" onClick={() => deleteFeedback(item.id)} />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="tex-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
