const information = async (url) => {
  try {
    const res = await fetch(url)
    return { res }
  } catch (error) {
    console.log("Network Error. Can't fetch the website!")
  }
}

module.exports = information