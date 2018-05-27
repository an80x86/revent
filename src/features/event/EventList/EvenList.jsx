import React, { Component } from "react";
import EvenListItem from "./EvenListItem";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <h1>EventList</h1>
        {events.map((event) => (
            <EvenListItem key={event.id} event={event} />
        ))}
      </div>
    );
  }
}

export default EventList;
