module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title : "Home"
    });
}

module.exports.setProfile = function(req, res){
    return res.end('<h1>POST : User Profile</h1>');
}