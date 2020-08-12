let users = [
    {id:1, name: 'Alice'},
    {id:2, name: 'Beck'},
    {id:3, name: 'Beck2'}
]

const index = (req,res)=>{
    req.query.limit = req.query.limit || 10
    const limit = parseInt(req.query.limit,10);

    if(Number.isNaN(limit)){
        res.status(400).end();
    }else{
        res.json(users.slice(0,limit));
    }    
}

const show = (req,res)=>{
    //id
    const id = parseInt(req.params.id,10);
    if(Number.isNaN(id)){
        return res.status(400).end(); 
    } 
    //users
    const user =users.filter(user=>user.id === id)[0];
    if(!user){
        return res.status(404).end();
    }
    res.json(user);
}

const destroy = (req,res)=>{
    //id
    const id = parseInt(req.params.id,10);
    if(Number.isNaN(id)){
        return res.status(400).end(); 
    } 
    //users
    const user =users.filter(user=>user.id === id)[0];
    if(!user){
        return res.status(404).end();
    }
    //user.delete(user); 
    users = users.filter(user=> user.id !== id); 
    return res.status(204).end(); 
    //response
}

const create = (req,res)=>{
    var name =req.body.name;
    if(!name){
        return res.status(400).end();
    }
    var result = users.filter(user=>user.name === name).length

    if(result>0){
        return res.status(409).end();
    }

    var id = Date.now();
    var user = {id,name};
    //users
    users.push(user);
    return res.status(201).json(user);
    //response
}

module.exports = {index,show,destroy,create};