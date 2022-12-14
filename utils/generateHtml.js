
  const HTMLgen = ({ compName, mangName, mangID, mangOffice, mangEmail, mangImage}) =>
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/style.css">
    <title>Document</title>
</head>
<body>

<header>
<h1>${compName}</h1>
</header>

<div class="row">

    <div class="card" id="manager">
        <img src="../assets/${mangImage}.png" class="avatar">
        <div class="container">
          <h4><b>${mangName}</b></h4>
          <p class="title"> Manager </p>
          <p>Employee ID: ${mangID} </p>
          <p>Office No: ${mangOffice} </p>
          <p><a
            href="mailto:${mangEmail}">
            ${mangEmail}</a></p>
        </div>
      </div>


`;

module.exports = HTMLgen;