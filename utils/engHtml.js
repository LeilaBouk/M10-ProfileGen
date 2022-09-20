const engHtml = ({ engImage, engName, engID, engEmail, engGithub}) =>
`
<div class="card">
<img src="../assets/${engImage}.png" class="avatar">
<div class="container">
  <h4><b>engern</b></h4>
  <p> ${engName} </p>
  <p>Employee ID: ${engID} </p>
  <p>Github: <a href="https://github.com/${engGithub}" target="_blank">${engGithub}</a> </p>
  <p><a
    href="mailto:${engEmail}">
    ${engEmail}</a></p>
</div>
</div>
`;

module.exports = engHtml;