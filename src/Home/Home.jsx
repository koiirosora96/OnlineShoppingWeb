import NarBar from '../NarBar/NarBar.js'
import ContactSession from '../ContactSession/ContactSession.js';
import { Outlet } from 'react-router-dom';
import '../App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../Home/Home.module.scss'

export function BasicExample() {
    return (
        <div>
            <Form>
                <Form.Group className={`${styles.form} mb-3`} controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com" aria-label=".form-control-lg example" disabled/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        </div>
    );
  }

export default function Home() {
    return (
        <div className='App'>
            <NarBar />
            <BasicExample />
            <Outlet />
            <ContactSession />
        </div>
    )
}