<template>
    <div class="menu">
      <router-link to="/" class="back-button"> < Retour</router-link>
      <h1 class="admin-title">ESPACE ADMIN</h1>
    </div>
    <div class="container">
      <div class="content">
        <form class="login-form">
          <h2>username</h2>
          <input type="text" class="input-field">
          <h2>password</h2>
          <input type="password" class="input-field">
          <button type="submit" class="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  .back-button {
    text-decoration: none;
    font-size: 24px;
    padding: 5px 10px;
    background-color: black;
    color: white; 
    border-radius: 10px; 
    margin-right: 20px;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #2c2c2c;
    color: #fff;
  }
  
  .content {
    text-align: center;
  }
  
  .admin-title {
    color: #ff3f34;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .menu {
    display: flex;
    align-items: center;
    margin-bottom: 0px;
    background-color: #2c2c2c;
  }
  
  h1 {
    text-align: center;
  }
  
  .input-field {
    width: 300px;
    height: 40px;
    margin-bottom: 10px;
    padding: 5px 10px;
    background-color: #555;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
  }
  
  .login-form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .login-button {
    width: 150px;
    height: 40px;
    background-color: #ff3f34;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px; 
  }
  
  .login-button:hover {
    background-color: #e2361c;
  }
  </style>