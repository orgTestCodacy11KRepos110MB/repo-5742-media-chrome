export function dashedToCamel(t){return t.split("-").map(function(e,o){return(o?e[0].toUpperCase():e[0].toLowerCase())+e.slice(1).toLowerCase()}).join("")}export function constToCamel(t,e=!1){return t.split("_").map(function(o,r){return(r||e?o[0].toUpperCase():o[0].toLowerCase())+o.slice(1).toLowerCase()}).join("")}