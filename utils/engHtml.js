const engHtml = ({ engImage, engName, engID, engEmail, engGithub}) =>
`
<div class="card">
<img src="../assets/${engImage}.png" class="avatar">
<div class="container">
  <h4><b>engern</b></h4>
  <p> ${engName} </p>
  <p>Employee ID: ${engID} </p>
  <p>School: ${engGithub} </p>
  <p><a
    href="mailto:${engEmail}">
    ${engEmail}</a></p>
</div>
</div>
`;

module.exports = engHtml;