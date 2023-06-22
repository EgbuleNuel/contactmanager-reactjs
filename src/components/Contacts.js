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

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter((contact) => contact.id !== id);

    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
