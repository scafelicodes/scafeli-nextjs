import React, { Component } from "react";
import ReviewList from "./ReviewList";
import Modal from "../common/atoms/Modal";

const reviews = [
  {
    stars: "5",
    title: "Perfect",
    description: "Great fit and feel. They elevate lounging to the next level!",
    reviewBy: "Heidi C.",
    date: "December, 2019"
  },
  {
    stars: "3.5",
    title: "So comfortable!",
    description:
      "I sized up just in case and kind of wished I hadn’t. Very comfortable and I live in them exclusively during the weekend.",
    reviewBy: "Heidi C.",
    date: "December, 2019"
  },
  {
    stars: "4",
    title: "Comfy but thin",
    description:
      "Comfortable but kinda thin for a pant. I typically wear a 32/33 pant and had to size up to XL for these to not fit like a legging. Have been wearing pretty solid for a month of so and there's some pilling, but not a lot. Good price for OK product.",
    reviewBy: "Heidi C.",
    date: "December, 2019"
  },
  {
    stars: "5",
    title: "So comfortable!",
    description:
      "I sized up just in case and kind of wished I hadn’t. Very comfortable and I live in them exclusively during the weekend.",
    reviewBy: "Heidi C.",
    date: "December, 2019"
  }
];

export default class ClientReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAllReviews: false
    };
  }
  render() {
    const { showAllReviews } = this.state;
    return (
      <div id="reviews" className="custom-container pb-5">
        <Modal
          isOpen={showAllReviews}
          onClose={() => this.setState({ showAllReviews: false })}
          maxW="1000px"
        >
          <div className="d-flex justify-content-between align-items-center pb-3">
            <p className="font-size-subheader font-weight-medium">
              All Reviews
            </p>
            <img
              tabIndex="0"
              src="/icon/cross.svg"
              className="w-24 cursor-pointer"
              onClick={() => this.setState({ showAllReviews: false })}
            />
          </div>
          <ReviewList reviews={reviews} />
        </Modal>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-sm-center mb-3">
              <p className="font-size-title font-weight-medium mb-2 mb-sm-0">
                4.3 stars from 10 reviews
              </p>
              <p
                className="text-decoration-underline text-write cursor-pointer"
                tabIndex="0"
              >
                Write a review
              </p>
            </div>
            <ReviewList reviews={reviews}>
              <button
                onClick={() => this.setState({ showAllReviews: true })}
                className="text-center bg-transparent w-100 h-72 px-3 text-decoration-underline"
              >
                View all Reviews
              </button>
            </ReviewList>
          </div>
        </div>
      </div>
    );
  }
}