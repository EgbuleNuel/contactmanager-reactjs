import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  // the constructor to
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "0234 234 2342",
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "ksmith@gmail.com",
        phone: "5555 555 5555",
      },
      {
        id: 3,
        name: "Jimmy Hoffa",
        email: "jhoffa@gmail.com",
        phone: "1234 567 8901",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {Contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
