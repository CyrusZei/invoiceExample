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

const HrLine = styled.hr`
  width: 100%;
`;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      invoices: [],
      invoice: {
        name: "",
        total: 0
      },
      isEditing: false,
      currentInvoiceIndex: null
    };
  }
  handleAddInvoice = () => {
    if (this.state.isEditing) {
      const currentState = { ...this.state };
      const newInvoice = {
        name: this.state.invoice.name,
        total: this.state.invoice.total
      };
      currentState.invoices.splice(
        this.state.currentInvoiceIndex,
        1,
        newInvoice
      );

      currentState.invoice.name = "";
      currentState.invoice.total = "";
      currentState.isEditing = false;

      this.setState({ ...currentState });
    } else {
      const invoice = { ...this.state.invoice };
      this.setState(prevState => ({
        invoices: [...prevState.invoices, invoice],
        invoice: {
          name: "",
          total: 0
        }
      }));
    }
  };

  handleEditInvoice = index => {
    const currentInvoices = { ...this.state };
    currentInvoices.isEditing = true;
    currentInvoices.invoices[index];
    currentInvoices.invoice.name = currentInvoices.invoices[index].name;
    currentInvoices.invoice.total = currentInvoices.invoices[index].total;
    currentInvoices.currentInvoiceIndex = index;
    this.setState({ ...currentInvoices });
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
        <HrLine />
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
              <InvoicesItem onClick={() => this.handleEditInvoice(index)}>
                Edit
              </InvoicesItem>
              <InvoicesItem onClick={() => this.handleRemoveInvoice(index)}>
                Delete
              </InvoicesItem>
            </InvoicesTable>
          );
        })}
        <HrLine />
        <h2>{this.state.isEditing ? "Edit invoice" : "Add invoice"}</h2>
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
        <Button
          isEditing={this.state.isEditing}
          addInvoice={this.handleAddInvoice}
        />
      </Container>
    );
  }
}
export default Main;
