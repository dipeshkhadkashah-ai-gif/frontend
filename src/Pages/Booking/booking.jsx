import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import styles from './styles.module.css'
export default function Booking() {
  
    return (
      <div className="container pt-5">
        <h3 style={{textAlign:'center'}}>Book Now!</h3>
        <Form style={{ border: "2px solid grey", padding: "50px",marginTop:'30px' }}>
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Input type="name" name="password" id="name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Address</Label>
            <Input type="address" name="address" id="address" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Contact</Label>
            <Input type="contact" name="contact" id="contact" />
          </FormGroup>
          <FormGroup>
          <Label for="exampleSelect">PhotoGraphy</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Basic</option>
            <option>Advance</option>
            <option>Beginner</option>
            <option>Professional</option>
          </Input>
        </FormGroup>
          <FormGroup>
          <Label for="exampleSelect">Videography</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Basic</option>
            <option>Advance</option>
            <option>Beginner</option>
            <option>Professional</option>
          </Input>
        </FormGroup>
         <button className={styles.submit} >Submit</button>
        </Form>
      </div>
    );
  
}
