var assoc_rule = require("./techniques/assoc_rule");
var ann = require("./techniques/ann");
var random_forest = require("./techniques/random_forest");
var k_means = require("./techniques/k_means");
var nlp = require("./techniques/nlp");
var reinforcement_learning = require("./techniques/reinforcement_learning");
var poly = require("./techniques/poly");



function getDetailView(technique_id) {
    var techniques = {
        reinforcement_learning,
        ann,
        random_forest,
        k_means,
        nlp,
        poly
    }
    return techniques[technique_id];
}
function getAllTechniques(asArray){
    var techniques = {
        reinforcement_learning,
        ann,
        random_forest,
        k_means,
        nlp,
        poly
    }
    if(asArray){
        var result = []
        for (var key in techniques) {
            if (techniques.hasOwnProperty(key)) 
            {
                var current_technique = techniques[key];
                result.push(current_technique);
            }
        }
        return result;
    }
    
    return techniques;
}
module.exports.getDetailView = getDetailView;
module.exports.getAllTechniques = getAllTechniques;