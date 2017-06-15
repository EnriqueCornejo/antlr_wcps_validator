var antlr4 = require('antlr4');
var WCPSLexer = require('./parsers/WCPSLexer');
var WCPSParser = require('./parsers/WCPSParser');
var WCPSListener = require('./parsers/WCPSListener');
var WCPSVisitor = require('./parsers/WCPSVisitor');


const inputQuery = 'for c in (AvgLandTemp) return 1';
const chars = new antlr4.InputStream(inputQuery);
const lexer = new WCPSLexer.WCPSLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new WCPSParser.WCPSParser(tokens);
parser.buildParseTrees = true;
// const tree = parser.file();
const tree = parser.wcpsQuery();
console.log(tree.children);
