const internHtml = ({ intImage, intName, intID, intEmail, intSchool}) =>
`
<div class="card">
<img src="../assets/${intImage}.png" class="avatar">
<div class="container">
  <h4><b>${intName}</b></h4>
  <p class="title"> Intern </p>
  <p>Employee ID: ${intID} </p>
  <p>School: ${intSchool} </p>
  <p><a
    href="mailto:${intEmail}">
    ${intEmail}</a></p>
</div>
</div>
`;

module.exports = internHtml;