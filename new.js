function mooncakeSayes(message){
    let mooncake='(0.o)';
    if (! message){
        return '${mooncake} chookity?';
    
    }
    return '${mooncake} ${message}!';
}
module.exports.mooncakeSayes=mooncakeSayes;
