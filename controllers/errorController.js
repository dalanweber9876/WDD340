const errorController = {}

errorController.produceError = async function(req, res){
  res.render("index", {title: "Home", nav})
}

module.exports = errorController