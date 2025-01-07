function status(request, response) {
  response.status(200).json({message: "Status OK, aplicação rodando"});
}

export default status;