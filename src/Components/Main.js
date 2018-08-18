import React, { Component } from "react";
import styled from "styled-components";

import TextInput from "./lib/TextInput";
import Button from "./lib/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
`;

const InvoicesTable = styled.div`
  display: flex;
  flex-direction: row;
`;

const InvoicesItem = styled.div`
  flex: 1;
  margin-bottom: 10px;
`;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      invoices: [],
      invoice: {
        name: "",
        total: 0
      }
    };
  }
  handleAddInvoice = () => {
    const invoice = this.state.invoice;
    this.setState(prevState => ({
      invoices: [...prevState.invoices, invoice]
    }));
  };

  handleRemoveInvoice = index => {
    const invoices = [...this.state.invoices];
    invoices.splice(index, 1);
    this.setState({ invoices });
  };

  handleTextInput = (e, name) => {
    this.setState({
      invoice: { ...this.state.invoice, [name]: e.target.value }
    });
  };

  render() {
    return (
      <Container>
        <h1>Invoice Crud example</h1>
        <hr />
        <h2>Invoices</h2>
        <InvoicesTable>
          <InvoicesItem>Name</InvoicesItem>
          <InvoicesItem>Price</InvoicesItem>
          <InvoicesItem>Edit</InvoicesItem>
          <InvoicesItem>Delete</InvoicesItem>
        </InvoicesTable>
        {this.state.invoices.map((invoice, index) => {
          return (
            <InvoicesTable key={index}>
              <InvoicesItem>{invoice.name}</InvoicesItem>
              <InvoicesItem>{invoice.total}</InvoicesItem>
              <InvoicesItem>Edit</InvoicesItem>
              <InvoicesItem onClick={() => this.handleRemoveInvoice(index)}>
                Delete
              </InvoicesItem>
            </InvoicesTable>
          );
        })}
        <hr />
        <h2>Add invoice</h2>
        <TextInput
          textName="name"
          stateValue={this.state.invoice}
          changeState={this.handleTextInput}
          title="Name"
        />
        <TextInput
          textName="total"
          stateValue={this.state.invoice}
          changeState={this.handleTextInput}
          title="Price"
        />
        <Button title="Add Invoice" addInvoice={this.handleAddInvoice} />
      </Container>
    );
  }
}
export default Main;
