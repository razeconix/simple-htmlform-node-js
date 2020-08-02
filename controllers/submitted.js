module.exports = (request, response) => {
    const name = request.body.name
    const num = request.body.num
    size=[]
    for(var i = 1;i<request.body.num;i++){
            size.push(i+2)
    }

    const context ={name,num,size}
    
  response.render('submitted',context)
}