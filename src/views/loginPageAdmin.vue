<template>
    <div class="menu">
      <router-link to="/loginChoice" class="back-button"> ◄ Retour</router-link>
    </div>
    <div class="container">
      <div class="content">
        <h1 class="admin-title">ESPACE ADMIN</h1>
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
  * {
    margin: 0;
    padding: 0;
    background-color: #292929;
    font-family: "Poppins", sans-serif;
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .back-button {
      margin: 20px 0;
      text-decoration: none;
      font-size: 20px;
      padding: .7em 1.5em;
      background-color: black;
      color: white; 
      border-radius: 2em; 
      transition: .2s;
    }
    .back-button:hover {
      color: black;
      background-color: white;
    }
    
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: calc(100vh - 98px);
    color: #fff;
    .content {
      margin-top: 8%;
      .admin-title {
        width: 100%;
        text-align: center;
        letter-spacing: 40px;
        text-indent: 40px;
        font-weight: 500;
        font-size: 35px;
        color: #ff3f34;
      }
      .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        .input-field {
          width: 50%;
          margin: 0 0 10px 0;
          padding: .3em;
          background-color: #555;
          border: none;
          border-radius: 5px;
          font-size: 26px;
          font-weight: 500;
          color: #fff;
        }
        h2 {
          font-weight: 300;
          font-size: 25px;
        }
        .login-button {
          width: 40%;
          background-color: #ebe8e8;
          color: #292929;
          border: none;
          border-radius: 2em;
          font-size: 30px;
          letter-spacing: 5px;
          text-indent: 5px;
          cursor: pointer;
          margin: 10px 0;
          transition: .1s;
          font-weight: 600;
        }
        .login-button:hover {
          background-color: #292929;
          color: white;
        }
        .login-button:active {
          background-color: white;
        }
      }
    }
  }

  @media (max-width: 1919px) {
    .menu {
      .back-button{
        font-size: 18px;
        padding: .5em 1.3em;
      }
    }
    .container {
      height: calc(100vh - 85px);
      .content {
        margin-top: 6%;
        .admin-title {
          letter-spacing: 35px;
          text-indent: 35px;
          font-size: 30px;
        }
        .login-form {
          margin-top: 15px;
          .input-field {
            margin: 0 0 8px 0;
            padding: .2em;
            font-size: 22px;
          }
          h2 {
            font-size: 21px;
          }
          .login-button {
            width: 35%;
            font-size: 25px;
            letter-spacing: 4px;
            text-indent: 4px;
            margin: 8px 0;
          }
        }
      }
    }
  }
  @media (max-width: 1279px) {
    .menu {
      .back-button{
        font-size: 15px;
        padding: .35em 1em;
      }
    }
    .container {
      height: calc(100vh - 74px);
      .content {
        margin-top: 6%;
        .admin-title {
          letter-spacing: 28px;
          text-indent: 28px;
          font-size: 26px;
        }
        .login-form {
          margin-top: 12px;
          .input-field {
            margin: 0 0 6px 0;
            padding: .2em;
            font-size: 19px;
          }
          h2 {
            font-size: 18px;
          }
          .login-button {
            width: 30%;
            font-size: 22px;
            letter-spacing: 3px;
            text-indent: 3px;
            margin: 6px 0;
          }
        }
      }
    }
  }
  @media (max-width: 799px) {
    .menu {
      .back-button{
        font-size: 13px;
        padding: .2em .85em;
      }
    }
    .container {
      height: calc(100vh);
      .content {
        margin-top: 0%;
        .admin-title {
          letter-spacing: 15px;
          text-indent: 15px;
          font-size: 15px;
        }
        .login-form {
          margin-top: 8px;
          .input-field {
            margin: 0 0 4px 0;
            padding: .1em;
            font-size: 15px;
          }
          h2 {
            font-size: 14px;
          }
          .login-button {
            width: 25%;
            font-size: 14px;
            letter-spacing: 2px;
            text-indent: 2px;
            margin: 4px 0;
          }
        }
      }
    }
  }
  
  
</style>
  