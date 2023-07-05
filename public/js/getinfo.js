const search_form = document.querySelector(".search")
const inputted_url = document.querySelector(".inputdata")
const data_element = document.querySelector(".data")

search_form.addEventListener('submit', getwebinfo)

async function getwebinfo(event) {

  event.preventDefault()
  const data = await fetch("/websitehealth?url=" + inputted_url.value)
  const textdata =
    `<span class="dataheader">Response URL: <span> <span class="takefull"></span> ${inputted_url.value}` +
    `<br> <span class="dataheader">Is Website Opening?: <span> <span class="takefull"></span> ${data.ok ? "Yes" : "No"}` +
    `<br> <span class="dataheader">Response Type: <span> <span class="takefull"></span> ${data.type}` +
    `<br> <span class="dataheader">Status Code: <span> <span class="takefull"></span> ${data.status}` +
    `<br> <span class="dataheader">Status Description: <span> <span class="takefull"></span> ${data.statusText}` +
    `<br> <span class="dataheader">Is Website redirecting?: <span> <span class="takefull"></span> ${data.redirected}`
  data_element.innerHTML = textdata
}