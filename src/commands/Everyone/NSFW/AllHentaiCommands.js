const hmtai = require("hmtai");

async function hentaiParser( func )
{   
    func = func.toLowerCase()
    try{
        return(eval(func+"()"))
    }
    catch{return(0)}
}

//Add ur own easily

async function ass(){ 
    return(hmtai.nsfw.ass())
};
async function bdsm(){ 
    return(hmtai.nsfw.bdsm())
};
async function cum(){ 
    return(hmtai.nsfw.cum())
};
async function creampie(){ 
    return(hmtai.nsfw.creampie())
};
async function manga(){ 
    return(hmtai.nsfw.manga())
};
async function femdom(){ 
    return(hmtai.nsfw.femdom())
};
async function hentai(){ 
    return(hmtai.nsfw.hentai())
};
async function incest(){ 
    return(hmtai.nsfw.incest())
};
async function masturbation(){ 
    return(hmtai.nsfw.masturbation())
};
async function public(){ 
    return(hmtai.nsfw.public())
};
async function ero(){ 
    return(hmtai.nsfw.ero())
};
async function orgy(){ 
    return(hmtai.nsfw.orgy())
};
async function elves(){ 
    return(hmtai.nsfw.elves())
};
async function yuri(){ 
    return(hmtai.nsfw.yuri())
};
async function pantsu(){ 
    return(hmtai.nsfw.pantsu())
};
async function glasses(){ 
    return(hmtai.nsfw.glasses())
};
async function cuckold(){ 
    return(hmtai.nsfw.cuckold())
};
async function blowjob(){ 
    return(hmtai.nsfw.blowjob())
};
async function boobjob(){ 
    return(hmtai.nsfw.boobjob())
};
async function foot(){ 
    return(hmtai.nsfw.foot())
};
async function thighs(){ 
    return(hmtai.nsfw.thighs())
};
async function vagina(){ 
    return(hmtai.nsfw.vagina())
};
async function ahegao(){ 
    return(hmtai.nsfw.ahegao())
};
async function uniform(){ 
    return(hmtai.nsfw.uniform())
};
async function gangbang(){ 
    return(hmtai.nsfw.gangbang())
};
async function tentacles(){ 
    return(hmtai.nsfw.tentacles())
};
async function gif(){ 
    return(hmtai.nsfw.gif())
};
async function nsfwneko(){ 
    return(hmtai.nsfw.nsfwNeko())
};
async function zettairyouiki(){ 
    return(hmtai.nsfw.zettaiRyouiki())
};

module.exports = { 
    hentaiParser
}