function JQuery(selector){
    this.nodes = document.querySelectorAll(selector);
    this.length = this.nodes.length
}

JQuery.prototype.each = function(callback){
    for(let i=0; i<this.length; i++){
        callback.call(this,this.nodes[i],i)
    }
    return this
}

function $(selector){
    return new JQuery(selector)
}

export default $;