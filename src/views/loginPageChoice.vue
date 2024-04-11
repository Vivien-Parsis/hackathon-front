<template>
    <div class="link-container">
      <a href="/loginAdmin" class="Admin-link">
        <p>ESPACE ADMIN</p>
      </a>
      <a href="/loginUser" class="User-link">
        <p>ESPACE VISITEUR</p>
      </a>
    </div>
  </template>
  
  <style>
  .link-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px; 
  }
  
  .Admin-link,
  .User-link {
    text-decoration: none;
    color: #FFD39F;
    background-color: #49290B; 
    border: 4px solid #FFD39F; 
    margin: 0 10px; 
  }
  
  .Admin-link p,
  .User-link p {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 90px;
  }
  
  p:hover {
    box-shadow: inset 800px 0 0 0 #FFD39F;
    color: #49290B;
  }
  </style>