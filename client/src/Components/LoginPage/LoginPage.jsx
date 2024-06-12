import './LoginPage.css';
import Button from '../Button/Button';
import { useState } from 'react';

function LoginPage({ getLocation, handleName, name }) {
  return (
    <>
      <div className="login-container">
        <div className="login-background"></div>
        <div className="login">
          <form className="login-form" onSubmit={getLocation}>
            <h1>Welcome to OutFitMe</h1>
            <label htmlFor="name">Please enter your name:</label>
            <input
              className="name-input"
              type="text"
              name="name"
              id="name"
              placeholder="Write your name here"
              value={name}
              onChange={handleName}
              required
            />

            <Button text="Go to closet" />
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
