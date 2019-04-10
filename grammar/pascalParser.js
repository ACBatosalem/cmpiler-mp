// Generated from pascal.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var pascalListener = require('./pascalListener').pascalListener;
var pascalVisitor = require('./pascalVisitor').pascalVisitor;

var grammarFileName = "pascal.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003H\u0246\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004",
    "A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004F\tF\u0004G\tG\u0004",
    "H\tH\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002\u0097\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005\u00a5\n\u0005\f\u0005",
    "\u000e\u0005\u00a8\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0006\u0006\u00ae\n\u0006\r\u0006\u000e\u0006\u00af\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0005\b\u00bd\n\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u00cc\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0005\u000f\u00da\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00e0\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u00f2\n\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u0104\n\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0007\u0017\u0109\n\u0017\f\u0017\u000e\u0017\u010c\u000b",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u0116\n\u001a\f\u001a\u000e",
    "\u001a\u0119\u000b\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0005\u001d\u0126\n\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0005\u001e\u012b\n\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001f\u0003\u001f\u0007\u001f\u0132\n\u001f\f\u001f\u000e\u001f",
    "\u0135\u000b\u001f\u0003\u001f\u0003\u001f\u0007\u001f\u0139\n\u001f",
    "\f\u001f\u000e\u001f\u013c\u000b\u001f\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0005 \u0147\n \u0003!\u0003",
    "!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0007\"\u0150\n\"\f\"\u000e",
    "\"\u0153\u000b\"\u0003#\u0003#\u0003#\u0005#\u0158\n#\u0003#\u0003#",
    "\u0003#\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0005%\u0163\n%\u0003",
    "&\u0003&\u0003&\u0003&\u0005&\u0169\n&\u0003\'\u0003\'\u0003\'\u0005",
    "\'\u016e\n\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003",
    ")\u0007)\u0178\n)\f)\u000e)\u017b\u000b)\u0003)\u0007)\u017e\n)\f)\u000e",
    ")\u0181\u000b)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003",
    "+\u0007+\u018b\n+\f+\u000e+\u018e\u000b+\u0003,\u0003,\u0003,\u0003",
    ",\u0003-\u0003-\u0003-\u0005-\u0197\n-\u0003-\u0003-\u0003-\u0003-\u0007",
    "-\u019d\n-\f-\u000e-\u01a0\u000b-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0007-\u01a8\n-\f-\u000e-\u01ab\u000b-\u0003-\u0003-\u0003",
    "-\u0003-\u0007-\u01b1\n-\f-\u000e-\u01b4\u000b-\u0003.\u0003.\u0003",
    ".\u0003.\u0005.\u01ba\n.\u0003/\u0003/\u00030\u00030\u00030\u00030\u0005",
    "0\u01c2\n0\u00031\u00031\u00032\u00032\u00032\u00032\u00052\u01ca\n",
    "2\u00033\u00033\u00034\u00054\u01cf\n4\u00034\u00034\u00035\u00035\u0003",
    "5\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u00055\u01dd\n5\u0003",
    "6\u00036\u00036\u00056\u01e2\n6\u00037\u00037\u00037\u00077\u01e7\n",
    "7\f7\u000e7\u01ea\u000b7\u00037\u00037\u00038\u00038\u00038\u00078\u01f1",
    "\n8\f8\u000e8\u01f4\u000b8\u00039\u00039\u00039\u00079\u01f9\n9\f9\u000e",
    "9\u01fc\u000b9\u00039\u00059\u01ff\n9\u0003:\u0003:\u0007:\u0203\n:",
    "\f:\u000e:\u0206\u000b:\u0003;\u0003;\u0003;\u0003<\u0003<\u0003=\u0003",
    "=\u0003=\u0005=\u0210\n=\u0003>\u0003>\u0003>\u0003>\u0003?\u0003?\u0003",
    "?\u0007?\u0219\n?\f?\u000e?\u021c\u000b?\u0003@\u0003@\u0003A\u0003",
    "A\u0003A\u0003A\u0003A\u0003A\u0005A\u0226\nA\u0003B\u0003B\u0003B\u0005",
    "B\u022b\nB\u0003C\u0003C\u0003C\u0003C\u0003C\u0003D\u0003D\u0003D\u0003",
    "D\u0003D\u0003E\u0003E\u0003E\u0003E\u0003E\u0003E\u0003E\u0003F\u0003",
    "F\u0003F\u0003F\u0003G\u0003G\u0003H\u0003H\u0003H\u0002\u0002I\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084",
    "\u0086\u0088\u008a\u008c\u008e\u0002\t\u0003\u0002&\'\u0003\u0002=>",
    "\u0006\u0002\u0006\u0006\b\b\u0013\u0013<<\u0003\u0002-2\u0004\u0002",
    "\u0018\u0018&\'\u0006\u0002\u0003\u0003\n\n\u0015\u0015((\u0004\u0002",
    "\f\f\u001f\u001f\u0002\u0245\u0002\u0090\u0003\u0002\u0002\u0002\u0004",
    "\u009c\u0003\u0002\u0002\u0002\u0006\u009e\u0003\u0002\u0002\u0002\b",
    "\u00a6\u0003\u0002\u0002\u0002\n\u00a9\u0003\u0002\u0002\u0002\f\u00b1",
    "\u0003\u0002\u0002\u0002\u000e\u00bc\u0003\u0002\u0002\u0002\u0010\u00cb",
    "\u0003\u0002\u0002\u0002\u0012\u00cd\u0003\u0002\u0002\u0002\u0014\u00cf",
    "\u0003\u0002\u0002\u0002\u0016\u00d1\u0003\u0002\u0002\u0002\u0018\u00d3",
    "\u0003\u0002\u0002\u0002\u001a\u00d5\u0003\u0002\u0002\u0002\u001c\u00d9",
    "\u0003\u0002\u0002\u0002\u001e\u00df\u0003\u0002\u0002\u0002 \u00e1",
    "\u0003\u0002\u0002\u0002\"\u00e5\u0003\u0002\u0002\u0002$\u00e9\u0003",
    "\u0002\u0002\u0002&\u00eb\u0003\u0002\u0002\u0002(\u00ed\u0003\u0002",
    "\u0002\u0002*\u0103\u0003\u0002\u0002\u0002,\u0105\u0003\u0002\u0002",
    "\u0002.\u010d\u0003\u0002\u0002\u00020\u010f\u0003\u0002\u0002\u0002",
    "2\u0111\u0003\u0002\u0002\u00024\u011c\u0003\u0002\u0002\u00026\u0120",
    "\u0003\u0002\u0002\u00028\u0125\u0003\u0002\u0002\u0002:\u0127\u0003",
    "\u0002\u0002\u0002<\u012f\u0003\u0002\u0002\u0002>\u0146\u0003\u0002",
    "\u0002\u0002@\u0148\u0003\u0002\u0002\u0002B\u014c\u0003\u0002\u0002",
    "\u0002D\u0154\u0003\u0002\u0002\u0002F\u015e\u0003\u0002\u0002\u0002",
    "H\u0162\u0003\u0002\u0002\u0002J\u0168\u0003\u0002\u0002\u0002L\u016d",
    "\u0003\u0002\u0002\u0002N\u016f\u0003\u0002\u0002\u0002P\u0174\u0003",
    "\u0002\u0002\u0002R\u0182\u0003\u0002\u0002\u0002T\u0187\u0003\u0002",
    "\u0002\u0002V\u018f\u0003\u0002\u0002\u0002X\u0196\u0003\u0002\u0002",
    "\u0002Z\u01b5\u0003\u0002\u0002\u0002\\\u01bb\u0003\u0002\u0002\u0002",
    "^\u01bd\u0003\u0002\u0002\u0002`\u01c3\u0003\u0002\u0002\u0002b\u01c5",
    "\u0003\u0002\u0002\u0002d\u01cb\u0003\u0002\u0002\u0002f\u01ce\u0003",
    "\u0002\u0002\u0002h\u01dc\u0003\u0002\u0002\u0002j\u01e1\u0003\u0002",
    "\u0002\u0002l\u01e3\u0003\u0002\u0002\u0002n\u01ed\u0003\u0002\u0002",
    "\u0002p\u01f5\u0003\u0002\u0002\u0002r\u0200\u0003\u0002\u0002\u0002",
    "t\u0207\u0003\u0002\u0002\u0002v\u020a\u0003\u0002\u0002\u0002x\u020f",
    "\u0003\u0002\u0002\u0002z\u0211\u0003\u0002\u0002\u0002|\u0215\u0003",
    "\u0002\u0002\u0002~\u021d\u0003\u0002\u0002\u0002\u0080\u021f\u0003",
    "\u0002\u0002\u0002\u0082\u022a\u0003\u0002\u0002\u0002\u0084\u022c\u0003",
    "\u0002\u0002\u0002\u0086\u0231\u0003\u0002\u0002\u0002\u0088\u0236\u0003",
    "\u0002\u0002\u0002\u008a\u023d\u0003\u0002\u0002\u0002\u008c\u0241\u0003",
    "\u0002\u0002\u0002\u008e\u0243\u0003\u0002\u0002\u0002\u0090\u0091\u0007",
    "\u001a\u0002\u0002\u0091\u0096\u0005\u0004\u0003\u0002\u0092\u0093\u0007",
    "3\u0002\u0002\u0093\u0094\u0005B\"\u0002\u0094\u0095\u00074\u0002\u0002",
    "\u0095\u0097\u0003\u0002\u0002\u0002\u0096\u0092\u0003\u0002\u0002\u0002",
    "\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0007)\u0002\u0002\u0099\u009a\u0005\u0006\u0004\u0002",
    "\u009a\u009b\u0007:\u0002\u0002\u009b\u0003\u0003\u0002\u0002\u0002",
    "\u009c\u009d\u0007F\u0002\u0002\u009d\u0005\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0005\b\u0005\u0002\u009f\u00a0\u0005z>\u0002\u00a0\u0007",
    "\u0003\u0002\u0002\u0002\u00a1\u00a5\u0005\n\u0006\u0002\u00a2\u00a5",
    "\u00052\u001a\u0002\u00a3\u00a5\u00056\u001c\u0002\u00a4\u00a1\u0003",
    "\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a3\u0003",
    "\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003",
    "\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\t\u0003",
    "\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a9\u00ad\u0007",
    "\t\u0002\u0002\u00aa\u00ab\u0005\f\u0007\u0002\u00ab\u00ac\u0007)\u0002",
    "\u0002\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad\u00aa\u0003\u0002\u0002",
    "\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002",
    "\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u000b\u0003\u0002\u0002",
    "\u0002\u00b1\u00b2\u0005\u0004\u0003\u0002\u00b2\u00b3\u0007-\u0002",
    "\u0002\u00b3\u00b4\u0005\u000e\b\u0002\u00b4\r\u0003\u0002\u0002\u0002",
    "\u00b5\u00bd\u0005\u0012\n\u0002\u00b6\u00b7\u0005\u0014\u000b\u0002",
    "\u00b7\u00b8\u0005\u0012\n\u0002\u00b8\u00bd\u0003\u0002\u0002\u0002",
    "\u00b9\u00bd\u0005\u0018\r\u0002\u00ba\u00bd\u0005\u001a\u000e\u0002",
    "\u00bb\u00bd\u0005\u0016\f\u0002\u00bc\u00b5\u0003\u0002\u0002\u0002",
    "\u00bc\u00b6\u0003\u0002\u0002\u0002\u00bc\u00b9\u0003\u0002\u0002\u0002",
    "\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bb\u0003\u0002\u0002\u0002",
    "\u00bd\u000f\u0003\u0002\u0002\u0002\u00be\u00cc\u0005\u0012\n\u0002",
    "\u00bf\u00c0\u0005\u0014\u000b\u0002\u00c0\u00c1\u0005\u0012\n\u0002",
    "\u00c1\u00cc\u0003\u0002\u0002\u0002\u00c2\u00cc\u0005\u0018\r\u0002",
    "\u00c3\u00cc\u0005\u001a\u000e\u0002\u00c4\u00cc\u0005X-\u0002\u00c5",
    "\u00c6\u0005\u0014\u000b\u0002\u00c6\u00c7\u0005X-\u0002\u00c7\u00cc",
    "\u0003\u0002\u0002\u0002\u00c8\u00cc\u0005\u0016\f\u0002\u00c9\u00cc",
    "\u0005Z.\u0002\u00ca\u00cc\u0005l7\u0002\u00cb\u00be\u0003\u0002\u0002",
    "\u0002\u00cb\u00bf\u0003\u0002\u0002\u0002\u00cb\u00c2\u0003\u0002\u0002",
    "\u0002\u00cb\u00c3\u0003\u0002\u0002\u0002\u00cb\u00c4\u0003\u0002\u0002",
    "\u0002\u00cb\u00c5\u0003\u0002\u0002\u0002\u00cb\u00c8\u0003\u0002\u0002",
    "\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00ca\u0003\u0002\u0002",
    "\u0002\u00cc\u0011\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007E\u0002",
    "\u0002\u00ce\u0013\u0003\u0002\u0002\u0002\u00cf\u00d0\t\u0002\u0002",
    "\u0002\u00d0\u0015\u0003\u0002\u0002\u0002\u00d1\u00d2\t\u0003\u0002",
    "\u0002\u00d2\u0017\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007H\u0002",
    "\u0002\u00d4\u0019\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007G\u0002",
    "\u0002\u00d6\u001b\u0003\u0002\u0002\u0002\u00d7\u00da\u0005\u001e\u0010",
    "\u0002\u00d8\u00da\u0005&\u0014\u0002\u00d9\u00d7\u0003\u0002\u0002",
    "\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002\u00da\u001d\u0003\u0002\u0002",
    "\u0002\u00db\u00e0\u0005 \u0011\u0002\u00dc\u00e0\u0005\"\u0012\u0002",
    "\u00dd\u00e0\u0005$\u0013\u0002\u00de\u00e0\u0005(\u0015\u0002\u00df",
    "\u00db\u0003\u0002\u0002\u0002\u00df\u00dc\u0003\u0002\u0002\u0002\u00df",
    "\u00dd\u0003\u0002\u0002\u0002\u00df\u00de\u0003\u0002\u0002\u0002\u00e0",
    "\u001f\u0003\u0002\u0002\u0002\u00e1\u00e2\u00073\u0002\u0002\u00e2",
    "\u00e3\u0005B\"\u0002\u00e3\u00e4\u00074\u0002\u0002\u00e4!\u0003\u0002",
    "\u0002\u0002\u00e5\u00e6\u0005\u0010\t\u0002\u00e6\u00e7\u0007;\u0002",
    "\u0002\u00e7\u00e8\u0005\u0010\t\u0002\u00e8#\u0003\u0002\u0002\u0002",
    "\u00e9\u00ea\t\u0004\u0002\u0002\u00ea%\u0003\u0002\u0002\u0002\u00eb",
    "\u00ec\u0005*\u0016\u0002\u00ec\'\u0003\u0002\u0002\u0002\u00ed\u00ee",
    "\u0007<\u0002\u0002\u00ee\u00f1\u00076\u0002\u0002\u00ef\u00f2\u0005",
    "\u0004\u0003\u0002\u00f0\u00f2\u0005\u0012\n\u0002\u00f1\u00ef\u0003",
    "\u0002\u0002\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u00078\u0002\u0002\u00f4)\u0003\u0002",
    "\u0002\u0002\u00f5\u00f6\u0007\u0004\u0002\u0002\u00f6\u00f7\u00076",
    "\u0002\u0002\u00f7\u00f8\u0005,\u0017\u0002\u00f8\u00f9\u00078\u0002",
    "\u0002\u00f9\u00fa\u0007\u0017\u0002\u0002\u00fa\u00fb\u00050\u0019",
    "\u0002\u00fb\u0104\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007\u0004\u0002",
    "\u0002\u00fd\u00fe\u00077\u0002\u0002\u00fe\u00ff\u0005,\u0017\u0002",
    "\u00ff\u0100\u00079\u0002\u0002\u0100\u0101\u0007\u0017\u0002\u0002",
    "\u0101\u0102\u00050\u0019\u0002\u0102\u0104\u0003\u0002\u0002\u0002",
    "\u0103\u00f5\u0003\u0002\u0002\u0002\u0103\u00fc\u0003\u0002\u0002\u0002",
    "\u0104+\u0003\u0002\u0002\u0002\u0105\u010a\u0005.\u0018\u0002\u0106",
    "\u0107\u0007+\u0002\u0002\u0107\u0109\u0005.\u0018\u0002\u0108\u0106",
    "\u0003\u0002\u0002\u0002\u0109\u010c\u0003\u0002\u0002\u0002\u010a\u0108",
    "\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002\u010b-",
    "\u0003\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010d\u010e",
    "\u0005\u001e\u0010\u0002\u010e/\u0003\u0002\u0002\u0002\u010f\u0110",
    "\u0005\u001c\u000f\u0002\u01101\u0003\u0002\u0002\u0002\u0111\u0112",
    "\u0007\"\u0002\u0002\u0112\u0117\u00054\u001b\u0002\u0113\u0114\u0007",
    ")\u0002\u0002\u0114\u0116\u00054\u001b\u0002\u0115\u0113\u0003\u0002",
    "\u0002\u0002\u0116\u0119\u0003\u0002\u0002\u0002\u0117\u0115\u0003\u0002",
    "\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u011a\u0003\u0002",
    "\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002\u011a\u011b\u0007)",
    "\u0002\u0002\u011b3\u0003\u0002\u0002\u0002\u011c\u011d\u0005B\"\u0002",
    "\u011d\u011e\u0007,\u0002\u0002\u011e\u011f\u0005\u001c\u000f\u0002",
    "\u011f5\u0003\u0002\u0002\u0002\u0120\u0121\u00058\u001d\u0002\u0121",
    "\u0122\u0007)\u0002\u0002\u01227\u0003\u0002\u0002\u0002\u0123\u0126",
    "\u0005:\u001e\u0002\u0124\u0126\u0005D#\u0002\u0125\u0123\u0003\u0002",
    "\u0002\u0002\u0125\u0124\u0003\u0002\u0002\u0002\u01269\u0003\u0002",
    "\u0002\u0002\u0127\u0128\u0007\u0019\u0002\u0002\u0128\u012a\u0005\u0004",
    "\u0003\u0002\u0129\u012b\u0005<\u001f\u0002\u012a\u0129\u0003\u0002",
    "\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002",
    "\u0002\u0002\u012c\u012d\u0007)\u0002\u0002\u012d\u012e\u0005\u0006",
    "\u0004\u0002\u012e;\u0003\u0002\u0002\u0002\u012f\u0133\u00073\u0002",
    "\u0002\u0130\u0132\u0005> \u0002\u0131\u0130\u0003\u0002\u0002\u0002",
    "\u0132\u0135\u0003\u0002\u0002\u0002\u0133\u0131\u0003\u0002\u0002\u0002",
    "\u0133\u0134\u0003\u0002\u0002\u0002\u0134\u013a\u0003\u0002\u0002\u0002",
    "\u0135\u0133\u0003\u0002\u0002\u0002\u0136\u0137\u0007)\u0002\u0002",
    "\u0137\u0139\u0005> \u0002\u0138\u0136\u0003\u0002\u0002\u0002\u0139",
    "\u013c\u0003\u0002\u0002\u0002\u013a\u0138\u0003\u0002\u0002\u0002\u013a",
    "\u013b\u0003\u0002\u0002\u0002\u013b\u013d\u0003\u0002\u0002\u0002\u013c",
    "\u013a\u0003\u0002\u0002\u0002\u013d\u013e\u00074\u0002\u0002\u013e",
    "=\u0003\u0002\u0002\u0002\u013f\u0147\u0005@!\u0002\u0140\u0141\u0007",
    "\"\u0002\u0002\u0141\u0147\u0005@!\u0002\u0142\u0143\u0007\u0010\u0002",
    "\u0002\u0143\u0147\u0005@!\u0002\u0144\u0145\u0007\u0019\u0002\u0002",
    "\u0145\u0147\u0005@!\u0002\u0146\u013f\u0003\u0002\u0002\u0002\u0146",
    "\u0140\u0003\u0002\u0002\u0002\u0146\u0142\u0003\u0002\u0002\u0002\u0146",
    "\u0144\u0003\u0002\u0002\u0002\u0147?\u0003\u0002\u0002\u0002\u0148",
    "\u0149\u0005B\"\u0002\u0149\u014a\u0007,\u0002\u0002\u014a\u014b\u0005",
    "$\u0013\u0002\u014bA\u0003\u0002\u0002\u0002\u014c\u0151\u0005\u0004",
    "\u0003\u0002\u014d\u014e\u0007+\u0002\u0002\u014e\u0150\u0005\u0004",
    "\u0003\u0002\u014f\u014d\u0003\u0002\u0002\u0002\u0150\u0153\u0003\u0002",
    "\u0002\u0002\u0151\u014f\u0003\u0002\u0002\u0002\u0151\u0152\u0003\u0002",
    "\u0002\u0002\u0152C\u0003\u0002\u0002\u0002\u0153\u0151\u0003\u0002",
    "\u0002\u0002\u0154\u0155\u0007\u0010\u0002\u0002\u0155\u0157\u0005\u0004",
    "\u0003\u0002\u0156\u0158\u0005<\u001f\u0002\u0157\u0156\u0003\u0002",
    "\u0002\u0002\u0157\u0158\u0003\u0002\u0002\u0002\u0158\u0159\u0003\u0002",
    "\u0002\u0002\u0159\u015a\u0007,\u0002\u0002\u015a\u015b\u0005F$\u0002",
    "\u015b\u015c\u0007)\u0002\u0002\u015c\u015d\u0005\u0006\u0004\u0002",
    "\u015dE\u0003\u0002\u0002\u0002\u015e\u015f\u0005$\u0013\u0002\u015f",
    "G\u0003\u0002\u0002\u0002\u0160\u0163\u0005J&\u0002\u0161\u0163\u0005",
    "x=\u0002\u0162\u0160\u0003\u0002\u0002\u0002\u0162\u0161\u0003\u0002",
    "\u0002\u0002\u0163I\u0003\u0002\u0002\u0002\u0164\u0169\u0005V,\u0002",
    "\u0165\u0169\u0005L\'\u0002\u0166\u0169\u0005p9\u0002\u0167\u0169\u0005",
    "v<\u0002\u0168\u0164\u0003\u0002\u0002\u0002\u0168\u0165\u0003\u0002",
    "\u0002\u0002\u0168\u0166\u0003\u0002\u0002\u0002\u0168\u0167\u0003\u0002",
    "\u0002\u0002\u0169K\u0003\u0002\u0002\u0002\u016a\u016e\u0005N(\u0002",
    "\u016b\u016e\u0005R*\u0002\u016c\u016e\u0005P)\u0002\u016d\u016a\u0003",
    "\u0002\u0002\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016d\u016c\u0003",
    "\u0002\u0002\u0002\u016eM\u0003\u0002\u0002\u0002\u016f\u0170\u0007",
    "\u001b\u0002\u0002\u0170\u0171\u00073\u0002\u0002\u0171\u0172\u0005",
    "B\"\u0002\u0172\u0173\u00074\u0002\u0002\u0173O\u0003\u0002\u0002\u0002",
    "\u0174\u017f\u0007%\u0002\u0002\u0175\u0179\u00073\u0002\u0002\u0176",
    "\u0178\u0005T+\u0002\u0177\u0176\u0003\u0002\u0002\u0002\u0178\u017b",
    "\u0003\u0002\u0002\u0002\u0179\u0177\u0003\u0002\u0002\u0002\u0179\u017a",
    "\u0003\u0002\u0002\u0002\u017a\u017c\u0003\u0002\u0002\u0002\u017b\u0179",
    "\u0003\u0002\u0002\u0002\u017c\u017e\u00074\u0002\u0002\u017d\u0175",
    "\u0003\u0002\u0002\u0002\u017e\u0181\u0003\u0002\u0002\u0002\u017f\u017d",
    "\u0003\u0002\u0002\u0002\u017f\u0180\u0003\u0002\u0002\u0002\u0180Q",
    "\u0003\u0002\u0002\u0002\u0181\u017f\u0003\u0002\u0002\u0002\u0182\u0183",
    "\u0007$\u0002\u0002\u0183\u0184\u00073\u0002\u0002\u0184\u0185\u0005",
    "T+\u0002\u0185\u0186\u00074\u0002\u0002\u0186S\u0003\u0002\u0002\u0002",
    "\u0187\u018c\u0005\u0010\t\u0002\u0188\u0189\u0007+\u0002\u0002\u0189",
    "\u018b\u0005\u0010\t\u0002\u018a\u0188\u0003\u0002\u0002\u0002\u018b",
    "\u018e\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002\u018c",
    "\u018d\u0003\u0002\u0002\u0002\u018dU\u0003\u0002\u0002\u0002\u018e",
    "\u018c\u0003\u0002\u0002\u0002\u018f\u0190\u0005X-\u0002\u0190\u0191",
    "\u0007*\u0002\u0002\u0191\u0192\u0005Z.\u0002\u0192W\u0003\u0002\u0002",
    "\u0002\u0193\u0194\u00075\u0002\u0002\u0194\u0197\u0005\u0004\u0003",
    "\u0002\u0195\u0197\u0005\u0004\u0003\u0002\u0196\u0193\u0003\u0002\u0002",
    "\u0002\u0196\u0195\u0003\u0002\u0002\u0002\u0197\u01b2\u0003\u0002\u0002",
    "\u0002\u0198\u0199\u00076\u0002\u0002\u0199\u019e\u0005Z.\u0002\u019a",
    "\u019b\u0007+\u0002\u0002\u019b\u019d\u0005Z.\u0002\u019c\u019a\u0003",
    "\u0002\u0002\u0002\u019d\u01a0\u0003\u0002\u0002\u0002\u019e\u019c\u0003",
    "\u0002\u0002\u0002\u019e\u019f\u0003\u0002\u0002\u0002\u019f\u01a1\u0003",
    "\u0002\u0002\u0002\u01a0\u019e\u0003\u0002\u0002\u0002\u01a1\u01a2\u0007",
    "8\u0002\u0002\u01a2\u01b1\u0003\u0002\u0002\u0002\u01a3\u01a4\u0007",
    "7\u0002\u0002\u01a4\u01a9\u0005Z.\u0002\u01a5\u01a6\u0007+\u0002\u0002",
    "\u01a6\u01a8\u0005Z.\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a8",
    "\u01ab\u0003\u0002\u0002\u0002\u01a9\u01a7\u0003\u0002\u0002\u0002\u01a9",
    "\u01aa\u0003\u0002\u0002\u0002\u01aa\u01ac\u0003\u0002\u0002\u0002\u01ab",
    "\u01a9\u0003\u0002\u0002\u0002\u01ac\u01ad\u00079\u0002\u0002\u01ad",
    "\u01b1\u0003\u0002\u0002\u0002\u01ae\u01af\u0007:\u0002\u0002\u01af",
    "\u01b1\u0005\u0004\u0003\u0002\u01b0\u0198\u0003\u0002\u0002\u0002\u01b0",
    "\u01a3\u0003\u0002\u0002\u0002\u01b0\u01ae\u0003\u0002\u0002\u0002\u01b1",
    "\u01b4\u0003\u0002\u0002\u0002\u01b2\u01b0\u0003\u0002\u0002\u0002\u01b2",
    "\u01b3\u0003\u0002\u0002\u0002\u01b3Y\u0003\u0002\u0002\u0002\u01b4",
    "\u01b2\u0003\u0002\u0002\u0002\u01b5\u01b9\u0005^0\u0002\u01b6\u01b7",
    "\u0005\\/\u0002\u01b7\u01b8\u0005Z.\u0002\u01b8\u01ba\u0003\u0002\u0002",
    "\u0002\u01b9\u01b6\u0003\u0002\u0002\u0002\u01b9\u01ba\u0003\u0002\u0002",
    "\u0002\u01ba[\u0003\u0002\u0002\u0002\u01bb\u01bc\t\u0005\u0002\u0002",
    "\u01bc]\u0003\u0002\u0002\u0002\u01bd\u01c1\u0005b2\u0002\u01be\u01bf",
    "\u0005`1\u0002\u01bf\u01c0\u0005^0\u0002\u01c0\u01c2\u0003\u0002\u0002",
    "\u0002\u01c1\u01be\u0003\u0002\u0002\u0002\u01c1\u01c2\u0003\u0002\u0002",
    "\u0002\u01c2_\u0003\u0002\u0002\u0002\u01c3\u01c4\t\u0006\u0002\u0002",
    "\u01c4a\u0003\u0002\u0002\u0002\u01c5\u01c9\u0005f4\u0002\u01c6\u01c7",
    "\u0005d3\u0002\u01c7\u01c8\u0005b2\u0002\u01c8\u01ca\u0003\u0002\u0002",
    "\u0002\u01c9\u01c6\u0003\u0002\u0002\u0002\u01c9\u01ca\u0003\u0002\u0002",
    "\u0002\u01cac\u0003\u0002\u0002\u0002\u01cb\u01cc\t\u0007\u0002\u0002",
    "\u01cce\u0003\u0002\u0002\u0002\u01cd\u01cf\t\u0002\u0002\u0002\u01ce",
    "\u01cd\u0003\u0002\u0002\u0002\u01ce\u01cf\u0003\u0002\u0002\u0002\u01cf",
    "\u01d0\u0003\u0002\u0002\u0002\u01d0\u01d1\u0005h5\u0002\u01d1g\u0003",
    "\u0002\u0002\u0002\u01d2\u01dd\u0005X-\u0002\u01d3\u01d4\u00073\u0002",
    "\u0002\u01d4\u01d5\u0005Z.\u0002\u01d5\u01d6\u00074\u0002\u0002\u01d6",
    "\u01dd\u0003\u0002\u0002\u0002\u01d7\u01dd\u0005l7\u0002\u01d8\u01dd",
    "\u0005j6\u0002\u01d9\u01da\u0007\u0016\u0002\u0002\u01da\u01dd\u0005",
    "h5\u0002\u01db\u01dd\u0005\u0016\f\u0002\u01dc\u01d2\u0003\u0002\u0002",
    "\u0002\u01dc\u01d3\u0003\u0002\u0002\u0002\u01dc\u01d7\u0003\u0002\u0002",
    "\u0002\u01dc\u01d8\u0003\u0002\u0002\u0002\u01dc\u01d9\u0003\u0002\u0002",
    "\u0002\u01dc\u01db\u0003\u0002\u0002\u0002\u01ddi\u0003\u0002\u0002",
    "\u0002\u01de\u01e2\u0005\u0012\n\u0002\u01df\u01e2\u0005\u0018\r\u0002",
    "\u01e0\u01e2\u0005\u001a\u000e\u0002\u01e1\u01de\u0003\u0002\u0002\u0002",
    "\u01e1\u01df\u0003\u0002\u0002\u0002\u01e1\u01e0\u0003\u0002\u0002\u0002",
    "\u01e2k\u0003\u0002\u0002\u0002\u01e3\u01e4\u0005X-\u0002\u01e4\u01e8",
    "\u00073\u0002\u0002\u01e5\u01e7\u0005n8\u0002\u01e6\u01e5\u0003\u0002",
    "\u0002\u0002\u01e7\u01ea\u0003\u0002\u0002\u0002\u01e8\u01e6\u0003\u0002",
    "\u0002\u0002\u01e8\u01e9\u0003\u0002\u0002\u0002\u01e9\u01eb\u0003\u0002",
    "\u0002\u0002\u01ea\u01e8\u0003\u0002\u0002\u0002\u01eb\u01ec\u00074",
    "\u0002\u0002\u01ecm\u0003\u0002\u0002\u0002\u01ed\u01f2\u0005r:\u0002",
    "\u01ee\u01ef\u0007+\u0002\u0002\u01ef\u01f1\u0005r:\u0002\u01f0\u01ee",
    "\u0003\u0002\u0002\u0002\u01f1\u01f4\u0003\u0002\u0002\u0002\u01f2\u01f0",
    "\u0003\u0002\u0002\u0002\u01f2\u01f3\u0003\u0002\u0002\u0002\u01f3o",
    "\u0003\u0002\u0002\u0002\u01f4\u01f2\u0003\u0002\u0002\u0002\u01f5\u01fe",
    "\u0005X-\u0002\u01f6\u01fa\u00073\u0002\u0002\u01f7\u01f9\u0005n8\u0002",
    "\u01f8\u01f7\u0003\u0002\u0002\u0002\u01f9\u01fc\u0003\u0002\u0002\u0002",
    "\u01fa\u01f8\u0003\u0002\u0002\u0002\u01fa\u01fb\u0003\u0002\u0002\u0002",
    "\u01fb\u01fd\u0003\u0002\u0002\u0002\u01fc\u01fa\u0003\u0002\u0002\u0002",
    "\u01fd\u01ff\u00074\u0002\u0002\u01fe\u01f6\u0003\u0002\u0002\u0002",
    "\u01fe\u01ff\u0003\u0002\u0002\u0002\u01ffq\u0003\u0002\u0002\u0002",
    "\u0200\u0204\u0005Z.\u0002\u0201\u0203\u0005t;\u0002\u0202\u0201\u0003",
    "\u0002\u0002\u0002\u0203\u0206\u0003\u0002\u0002\u0002\u0204\u0202\u0003",
    "\u0002\u0002\u0002\u0204\u0205\u0003\u0002\u0002\u0002\u0205s\u0003",
    "\u0002\u0002\u0002\u0206\u0204\u0003\u0002\u0002\u0002\u0207\u0208\u0007",
    ",\u0002\u0002\u0208\u0209\u0005Z.\u0002\u0209u\u0003\u0002\u0002\u0002",
    "\u020a\u020b\u0003\u0002\u0002\u0002\u020bw\u0003\u0002\u0002\u0002",
    "\u020c\u0210\u0005z>\u0002\u020d\u0210\u0005~@\u0002\u020e\u0210\u0005",
    "\u0082B\u0002\u020f\u020c\u0003\u0002\u0002\u0002\u020f\u020d\u0003",
    "\u0002\u0002\u0002\u020f\u020e\u0003\u0002\u0002\u0002\u0210y\u0003",
    "\u0002\u0002\u0002\u0211\u0212\u0007\u0005\u0002\u0002\u0212\u0213\u0005",
    "|?\u0002\u0213\u0214\u0007\u000e\u0002\u0002\u0214{\u0003\u0002\u0002",
    "\u0002\u0215\u021a\u0005H%\u0002\u0216\u0217\u0007)\u0002\u0002\u0217",
    "\u0219\u0005H%\u0002\u0218\u0216\u0003\u0002\u0002\u0002\u0219\u021c",
    "\u0003\u0002\u0002\u0002\u021a\u0218\u0003\u0002\u0002\u0002\u021a\u021b",
    "\u0003\u0002\u0002\u0002\u021b}\u0003\u0002\u0002\u0002\u021c\u021a",
    "\u0003\u0002\u0002\u0002\u021d\u021e\u0005\u0080A\u0002\u021e\u007f",
    "\u0003\u0002\u0002\u0002\u021f\u0220\u0007\u0011\u0002\u0002\u0220\u0221",
    "\u0005Z.\u0002\u0221\u0222\u0007\u001e\u0002\u0002\u0222\u0225\u0005",
    "H%\u0002\u0223\u0224\u0007\r\u0002\u0002\u0224\u0226\u0005H%\u0002\u0225",
    "\u0223\u0003\u0002\u0002\u0002\u0225\u0226\u0003\u0002\u0002\u0002\u0226",
    "\u0081\u0003\u0002\u0002\u0002\u0227\u022b\u0005\u0084C\u0002\u0228",
    "\u022b\u0005\u0086D\u0002\u0229\u022b\u0005\u0088E\u0002\u022a\u0227",
    "\u0003\u0002\u0002\u0002\u022a\u0228\u0003\u0002\u0002\u0002\u022a\u0229",
    "\u0003\u0002\u0002\u0002\u022b\u0083\u0003\u0002\u0002\u0002\u022c\u022d",
    "\u0007#\u0002\u0002\u022d\u022e\u0005Z.\u0002\u022e\u022f\u0007\u000b",
    "\u0002\u0002\u022f\u0230\u0005H%\u0002\u0230\u0085\u0003\u0002\u0002",
    "\u0002\u0231\u0232\u0007\u001c\u0002\u0002\u0232\u0233\u0005|?\u0002",
    "\u0233\u0234\u0007!\u0002\u0002\u0234\u0235\u0005Z.\u0002\u0235\u0087",
    "\u0003\u0002\u0002\u0002\u0236\u0237\u0007\u000f\u0002\u0002\u0237\u0238",
    "\u0005\u0004\u0003\u0002\u0238\u0239\u0007*\u0002\u0002\u0239\u023a",
    "\u0005\u008aF\u0002\u023a\u023b\u0007\u000b\u0002\u0002\u023b\u023c",
    "\u0005H%\u0002\u023c\u0089\u0003\u0002\u0002\u0002\u023d\u023e\u0005",
    "\u008cG\u0002\u023e\u023f\t\b\u0002\u0002\u023f\u0240\u0005\u008eH\u0002",
    "\u0240\u008b\u0003\u0002\u0002\u0002\u0241\u0242\u0005Z.\u0002\u0242",
    "\u008d\u0003\u0002\u0002\u0002\u0243\u0244\u0005Z.\u0002\u0244\u008f",
    "\u0003\u0002\u0002\u0002/\u0096\u00a4\u00a6\u00af\u00bc\u00cb\u00d9",
    "\u00df\u00f1\u0103\u010a\u0117\u0125\u012a\u0133\u013a\u0146\u0151\u0157",
    "\u0162\u0168\u016d\u0179\u017f\u018c\u0196\u019e\u01a9\u01b0\u01b2\u01b9",
    "\u01c1\u01c9\u01ce\u01dc\u01e1\u01e8\u01f2\u01fa\u01fe\u0204\u020f\u021a",
    "\u0225\u022a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     "'+'", "'-'", "'*'", "';'", "':='", "','", "':'", "'='", 
                     "'<>'", "'<'", "'<='", "'>='", "'>'", "'('", "')'", 
                     "'@'", "'['", "'(.'", "']'", "'.)'", "'.'", "'..'", 
                     null, null, null, null, null, null, "' '", "'\t'" ];

var symbolicNames = [ null, "AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", 
                      "CHAR", "CONST", "DIV", "DO", "DOWNTO", "ELSE", "END", 
                      "FOR", "FUNCTION", "IF", "IN", "INTEGER", "LABEL", 
                      "MOD", "NOT", "OF", "OR", "PROCEDURE", "PROGRAM", 
                      "READLN", "REPEAT", "SET", "THEN", "TO", "TYPE", "UNTIL", 
                      "VAR", "WHILE", "WRITE", "WRITELN", "ADD", "SUB", 
                      "MULT", "SEMI", "ASSIGN", "COMMA", "COLON", "EQUAL", 
                      "NOT_EQUAL", "LT", "LE", "GE", "GT", "LP", "RP", "AT", 
                      "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", "DOT", "DOTDOT", 
                      "STRING", "TRUE", "FALSE", "COMMENT_1", "COMMENT_2", 
                      "COMMENT_3", "WHITESPACE", "TAB", "NL", "NUMBER", 
                      "ID", "CHAR_LITERAL", "STRING_LITERAL" ];

var ruleNames =  [ "program", "identifier", "block", "declarations", "constantDefinitionPart", 
                   "constantDefinition", "constantValues", "constant", "unsignedNumber", 
                   "sign", "bool", "string", "character", "type", "simpleType", 
                   "scalarType", "subrangeType", "typeIdentifier", "structuredType", 
                   "stringtype", "arrayType", "typeList", "indexType", "componentType", 
                   "variableDeclarationPart", "variableDeclaration", "procedureAndFunctionDeclarationPart", 
                   "procedureOrFunctionDeclaration", "procedureDeclaration", 
                   "formalParameterList", "formalParameterSection", "parameterGroup", 
                   "identifierList", "functionDeclaration", "resultType", 
                   "statement", "simpleStatement", "ioStatement", "readln", 
                   "writeln", "write", "outputList", "assignmentStatement", 
                   "variable", "expression", "relationaloperator", "simpleExpression", 
                   "additiveoperator", "term", "multiplicativeoperator", 
                   "signedFactor", "factor", "unsignedConstant", "functionDesignator", 
                   "parameterList", "procedureStatement", "actualParameter", 
                   "parameterwidth", "emptyStatement", "structuredStatement", 
                   "compoundStatement", "statements", "conditionalStatement", 
                   "ifStatement", "repetetiveStatement", "whileStatement", 
                   "repeatStatement", "forStatement", "forList", "initialValue", 
                   "finalValue" ];

function pascalParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

pascalParser.prototype = Object.create(antlr4.Parser.prototype);
pascalParser.prototype.constructor = pascalParser;

Object.defineProperty(pascalParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

pascalParser.EOF = antlr4.Token.EOF;
pascalParser.AND = 1;
pascalParser.ARRAY = 2;
pascalParser.BEGIN = 3;
pascalParser.BOOLEAN = 4;
pascalParser.CASE = 5;
pascalParser.CHAR = 6;
pascalParser.CONST = 7;
pascalParser.DIV = 8;
pascalParser.DO = 9;
pascalParser.DOWNTO = 10;
pascalParser.ELSE = 11;
pascalParser.END = 12;
pascalParser.FOR = 13;
pascalParser.FUNCTION = 14;
pascalParser.IF = 15;
pascalParser.IN = 16;
pascalParser.INTEGER = 17;
pascalParser.LABEL = 18;
pascalParser.MOD = 19;
pascalParser.NOT = 20;
pascalParser.OF = 21;
pascalParser.OR = 22;
pascalParser.PROCEDURE = 23;
pascalParser.PROGRAM = 24;
pascalParser.READLN = 25;
pascalParser.REPEAT = 26;
pascalParser.SET = 27;
pascalParser.THEN = 28;
pascalParser.TO = 29;
pascalParser.TYPE = 30;
pascalParser.UNTIL = 31;
pascalParser.VAR = 32;
pascalParser.WHILE = 33;
pascalParser.WRITE = 34;
pascalParser.WRITELN = 35;
pascalParser.ADD = 36;
pascalParser.SUB = 37;
pascalParser.MULT = 38;
pascalParser.SEMI = 39;
pascalParser.ASSIGN = 40;
pascalParser.COMMA = 41;
pascalParser.COLON = 42;
pascalParser.EQUAL = 43;
pascalParser.NOT_EQUAL = 44;
pascalParser.LT = 45;
pascalParser.LE = 46;
pascalParser.GE = 47;
pascalParser.GT = 48;
pascalParser.LP = 49;
pascalParser.RP = 50;
pascalParser.AT = 51;
pascalParser.LBRACK = 52;
pascalParser.LBRACK2 = 53;
pascalParser.RBRACK = 54;
pascalParser.RBRACK2 = 55;
pascalParser.DOT = 56;
pascalParser.DOTDOT = 57;
pascalParser.STRING = 58;
pascalParser.TRUE = 59;
pascalParser.FALSE = 60;
pascalParser.COMMENT_1 = 61;
pascalParser.COMMENT_2 = 62;
pascalParser.COMMENT_3 = 63;
pascalParser.WHITESPACE = 64;
pascalParser.TAB = 65;
pascalParser.NL = 66;
pascalParser.NUMBER = 67;
pascalParser.ID = 68;
pascalParser.CHAR_LITERAL = 69;
pascalParser.STRING_LITERAL = 70;

pascalParser.RULE_program = 0;
pascalParser.RULE_identifier = 1;
pascalParser.RULE_block = 2;
pascalParser.RULE_declarations = 3;
pascalParser.RULE_constantDefinitionPart = 4;
pascalParser.RULE_constantDefinition = 5;
pascalParser.RULE_constantValues = 6;
pascalParser.RULE_constant = 7;
pascalParser.RULE_unsignedNumber = 8;
pascalParser.RULE_sign = 9;
pascalParser.RULE_bool = 10;
pascalParser.RULE_string = 11;
pascalParser.RULE_character = 12;
pascalParser.RULE_type = 13;
pascalParser.RULE_simpleType = 14;
pascalParser.RULE_scalarType = 15;
pascalParser.RULE_subrangeType = 16;
pascalParser.RULE_typeIdentifier = 17;
pascalParser.RULE_structuredType = 18;
pascalParser.RULE_stringtype = 19;
pascalParser.RULE_arrayType = 20;
pascalParser.RULE_typeList = 21;
pascalParser.RULE_indexType = 22;
pascalParser.RULE_componentType = 23;
pascalParser.RULE_variableDeclarationPart = 24;
pascalParser.RULE_variableDeclaration = 25;
pascalParser.RULE_procedureAndFunctionDeclarationPart = 26;
pascalParser.RULE_procedureOrFunctionDeclaration = 27;
pascalParser.RULE_procedureDeclaration = 28;
pascalParser.RULE_formalParameterList = 29;
pascalParser.RULE_formalParameterSection = 30;
pascalParser.RULE_parameterGroup = 31;
pascalParser.RULE_identifierList = 32;
pascalParser.RULE_functionDeclaration = 33;
pascalParser.RULE_resultType = 34;
pascalParser.RULE_statement = 35;
pascalParser.RULE_simpleStatement = 36;
pascalParser.RULE_ioStatement = 37;
pascalParser.RULE_readln = 38;
pascalParser.RULE_writeln = 39;
pascalParser.RULE_write = 40;
pascalParser.RULE_outputList = 41;
pascalParser.RULE_assignmentStatement = 42;
pascalParser.RULE_variable = 43;
pascalParser.RULE_expression = 44;
pascalParser.RULE_relationaloperator = 45;
pascalParser.RULE_simpleExpression = 46;
pascalParser.RULE_additiveoperator = 47;
pascalParser.RULE_term = 48;
pascalParser.RULE_multiplicativeoperator = 49;
pascalParser.RULE_signedFactor = 50;
pascalParser.RULE_factor = 51;
pascalParser.RULE_unsignedConstant = 52;
pascalParser.RULE_functionDesignator = 53;
pascalParser.RULE_parameterList = 54;
pascalParser.RULE_procedureStatement = 55;
pascalParser.RULE_actualParameter = 56;
pascalParser.RULE_parameterwidth = 57;
pascalParser.RULE_emptyStatement = 58;
pascalParser.RULE_structuredStatement = 59;
pascalParser.RULE_compoundStatement = 60;
pascalParser.RULE_statements = 61;
pascalParser.RULE_conditionalStatement = 62;
pascalParser.RULE_ifStatement = 63;
pascalParser.RULE_repetetiveStatement = 64;
pascalParser.RULE_whileStatement = 65;
pascalParser.RULE_repeatStatement = 66;
pascalParser.RULE_forStatement = 67;
pascalParser.RULE_forList = 68;
pascalParser.RULE_initialValue = 69;
pascalParser.RULE_finalValue = 70;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.PROGRAM = function() {
    return this.getToken(pascalParser.PROGRAM, 0);
};

ProgramContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ProgramContext.prototype.SEMI = function() {
    return this.getToken(pascalParser.SEMI, 0);
};

ProgramContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ProgramContext.prototype.DOT = function() {
    return this.getToken(pascalParser.DOT, 0);
};

ProgramContext.prototype.LP = function() {
    return this.getToken(pascalParser.LP, 0);
};

ProgramContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

ProgramContext.prototype.RP = function() {
    return this.getToken(pascalParser.RP, 0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ProgramContext = ProgramContext;

pascalParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, pascalParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(pascalParser.PROGRAM);
        this.state = 143;
        this.identifier();
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pascalParser.LP) {
            this.state = 144;
            this.match(pascalParser.LP);
            this.state = 145;
            this.identifierList();
            this.state = 146;
            this.match(pascalParser.RP);
        }

        this.state = 150;
        this.match(pascalParser.SEMI);
        this.state = 151;
        this.block();
        this.state = 152;
        this.match(pascalParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.ID = function() {
    return this.getToken(pascalParser.ID, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.IdentifierContext = IdentifierContext;

pascalParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, pascalParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(pascalParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.declarations = function() {
    return this.getTypedRuleContext(DeclarationsContext,0);
};

BlockContext.prototype.compoundStatement = function() {
    return this.getTypedRuleContext(CompoundStatementContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.BlockContext = BlockContext;

pascalParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, pascalParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.declarations();
        this.state = 157;
        this.compoundStatement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeclarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_declarations;
    return this;
}

DeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationsContext.prototype.constructor = DeclarationsContext;

DeclarationsContext.prototype.constantDefinitionPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantDefinitionPartContext);
    } else {
        return this.getTypedRuleContext(ConstantDefinitionPartContext,i);
    }
};

DeclarationsContext.prototype.variableDeclarationPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableDeclarationPartContext);
    } else {
        return this.getTypedRuleContext(VariableDeclarationPartContext,i);
    }
};

DeclarationsContext.prototype.procedureAndFunctionDeclarationPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ProcedureAndFunctionDeclarationPartContext);
    } else {
        return this.getTypedRuleContext(ProcedureAndFunctionDeclarationPartContext,i);
    }
};

DeclarationsContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterDeclarations(this);
	}
};

DeclarationsContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitDeclarations(this);
	}
};

DeclarationsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitDeclarations(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.DeclarationsContext = DeclarationsContext;

pascalParser.prototype.declarations = function() {

    var localctx = new DeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, pascalParser.RULE_declarations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (pascalParser.CONST - 7)) | (1 << (pascalParser.FUNCTION - 7)) | (1 << (pascalParser.PROCEDURE - 7)) | (1 << (pascalParser.VAR - 7)))) !== 0)) {
            this.state = 162;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case pascalParser.CONST:
                this.state = 159;
                this.constantDefinitionPart();
                break;
            case pascalParser.VAR:
                this.state = 160;
                this.variableDeclarationPart();
                break;
            case pascalParser.FUNCTION:
            case pascalParser.PROCEDURE:
                this.state = 161;
                this.procedureAndFunctionDeclarationPart();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 166;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantDefinitionPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_constantDefinitionPart;
    return this;
}

ConstantDefinitionPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantDefinitionPartContext.prototype.constructor = ConstantDefinitionPartContext;

ConstantDefinitionPartContext.prototype.CONST = function() {
    return this.getToken(pascalParser.CONST, 0);
};

ConstantDefinitionPartContext.prototype.constantDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantDefinitionContext);
    } else {
        return this.getTypedRuleContext(ConstantDefinitionContext,i);
    }
};

ConstantDefinitionPartContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.SEMI);
    } else {
        return this.getToken(pascalParser.SEMI, i);
    }
};


ConstantDefinitionPartContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterConstantDefinitionPart(this);
	}
};

ConstantDefinitionPartContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitConstantDefinitionPart(this);
	}
};

ConstantDefinitionPartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitConstantDefinitionPart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ConstantDefinitionPartContext = ConstantDefinitionPartContext;

pascalParser.prototype.constantDefinitionPart = function() {

    var localctx = new ConstantDefinitionPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, pascalParser.RULE_constantDefinitionPart);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(pascalParser.CONST);
        this.state = 171; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 168;
            this.constantDefinition();
            this.state = 169;
            this.match(pascalParser.SEMI);
            this.state = 173; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===pascalParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_constantDefinition;
    return this;
}

ConstantDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantDefinitionContext.prototype.constructor = ConstantDefinitionContext;

ConstantDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ConstantDefinitionContext.prototype.EQUAL = function() {
    return this.getToken(pascalParser.EQUAL, 0);
};

ConstantDefinitionContext.prototype.constantValues = function() {
    return this.getTypedRuleContext(ConstantValuesContext,0);
};

ConstantDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterConstantDefinition(this);
	}
};

ConstantDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitConstantDefinition(this);
	}
};

ConstantDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitConstantDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ConstantDefinitionContext = ConstantDefinitionContext;

pascalParser.prototype.constantDefinition = function() {

    var localctx = new ConstantDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, pascalParser.RULE_constantDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.identifier();
        this.state = 176;
        this.match(pascalParser.EQUAL);
        this.state = 177;
        this.constantValues();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_constantValues;
    return this;
}

ConstantValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantValuesContext.prototype.constructor = ConstantValuesContext;

ConstantValuesContext.prototype.unsignedNumber = function() {
    return this.getTypedRuleContext(UnsignedNumberContext,0);
};

ConstantValuesContext.prototype.sign = function() {
    return this.getTypedRuleContext(SignContext,0);
};

ConstantValuesContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ConstantValuesContext.prototype.character = function() {
    return this.getTypedRuleContext(CharacterContext,0);
};

ConstantValuesContext.prototype.bool = function() {
    return this.getTypedRuleContext(BoolContext,0);
};

ConstantValuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterConstantValues(this);
	}
};

ConstantValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitConstantValues(this);
	}
};

ConstantValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitConstantValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ConstantValuesContext = ConstantValuesContext;

pascalParser.prototype.constantValues = function() {

    var localctx = new ConstantValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, pascalParser.RULE_constantValues);
    try {
        this.state = 186;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 179;
            this.unsignedNumber();
            break;
        case pascalParser.ADD:
        case pascalParser.SUB:
            this.enterOuterAlt(localctx, 2);
            this.state = 180;
            this.sign();
            this.state = 181;
            this.unsignedNumber();
            break;
        case pascalParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 3);
            this.state = 183;
            this.string();
            break;
        case pascalParser.CHAR_LITERAL:
            this.enterOuterAlt(localctx, 4);
            this.state = 184;
            this.character();
            break;
        case pascalParser.TRUE:
        case pascalParser.FALSE:
            this.enterOuterAlt(localctx, 5);
            this.state = 185;
            this.bool();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.unsignedNumber = function() {
    return this.getTypedRuleContext(UnsignedNumberContext,0);
};

ConstantContext.prototype.sign = function() {
    return this.getTypedRuleContext(SignContext,0);
};

ConstantContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ConstantContext.prototype.character = function() {
    return this.getTypedRuleContext(CharacterContext,0);
};

ConstantContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ConstantContext.prototype.bool = function() {
    return this.getTypedRuleContext(BoolContext,0);
};

ConstantContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ConstantContext.prototype.functionDesignator = function() {
    return this.getTypedRuleContext(FunctionDesignatorContext,0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitConstant(this);
	}
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ConstantContext = ConstantContext;

pascalParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, pascalParser.RULE_constant);
    try {
        this.state = 201;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 188;
            this.unsignedNumber();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 189;
            this.sign();
            this.state = 190;
            this.unsignedNumber();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 192;
            this.string();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 193;
            this.character();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 194;
            this.variable();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 195;
            this.sign();
            this.state = 196;
            this.variable();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 198;
            this.bool();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 199;
            this.expression();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 200;
            this.functionDesignator();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnsignedNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_unsignedNumber;
    return this;
}

UnsignedNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnsignedNumberContext.prototype.constructor = UnsignedNumberContext;

UnsignedNumberContext.prototype.NUMBER = function() {
    return this.getToken(pascalParser.NUMBER, 0);
};

UnsignedNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterUnsignedNumber(this);
	}
};

UnsignedNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitUnsignedNumber(this);
	}
};

UnsignedNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitUnsignedNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.UnsignedNumberContext = UnsignedNumberContext;

pascalParser.prototype.unsignedNumber = function() {

    var localctx = new UnsignedNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, pascalParser.RULE_unsignedNumber);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(pascalParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_sign;
    return this;
}

SignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignContext.prototype.constructor = SignContext;

SignContext.prototype.ADD = function() {
    return this.getToken(pascalParser.ADD, 0);
};

SignContext.prototype.SUB = function() {
    return this.getToken(pascalParser.SUB, 0);
};

SignContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterSign(this);
	}
};

SignContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitSign(this);
	}
};

SignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitSign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.SignContext = SignContext;

pascalParser.prototype.sign = function() {

    var localctx = new SignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, pascalParser.RULE_sign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        _la = this._input.LA(1);
        if(!(_la===pascalParser.ADD || _la===pascalParser.SUB)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BoolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_bool;
    return this;
}

BoolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolContext.prototype.constructor = BoolContext;

BoolContext.prototype.TRUE = function() {
    return this.getToken(pascalParser.TRUE, 0);
};

BoolContext.prototype.FALSE = function() {
    return this.getToken(pascalParser.FALSE, 0);
};

BoolContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterBool(this);
	}
};

BoolContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitBool(this);
	}
};

BoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.BoolContext = BoolContext;

pascalParser.prototype.bool = function() {

    var localctx = new BoolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, pascalParser.RULE_bool);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        _la = this._input.LA(1);
        if(!(_la===pascalParser.TRUE || _la===pascalParser.FALSE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING_LITERAL = function() {
    return this.getToken(pascalParser.STRING_LITERAL, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.StringContext = StringContext;

pascalParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, pascalParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.match(pascalParser.STRING_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CharacterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_character;
    return this;
}

CharacterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CharacterContext.prototype.constructor = CharacterContext;

CharacterContext.prototype.CHAR_LITERAL = function() {
    return this.getToken(pascalParser.CHAR_LITERAL, 0);
};

CharacterContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterCharacter(this);
	}
};

CharacterContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitCharacter(this);
	}
};

CharacterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitCharacter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.CharacterContext = CharacterContext;

pascalParser.prototype.character = function() {

    var localctx = new CharacterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, pascalParser.RULE_character);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(pascalParser.CHAR_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.simpleType = function() {
    return this.getTypedRuleContext(SimpleTypeContext,0);
};

TypeContext.prototype.structuredType = function() {
    return this.getTypedRuleContext(StructuredTypeContext,0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.TypeContext = TypeContext;

pascalParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, pascalParser.RULE_type);
    try {
        this.state = 215;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.BOOLEAN:
        case pascalParser.CHAR:
        case pascalParser.INTEGER:
        case pascalParser.NOT:
        case pascalParser.ADD:
        case pascalParser.SUB:
        case pascalParser.LP:
        case pascalParser.AT:
        case pascalParser.STRING:
        case pascalParser.TRUE:
        case pascalParser.FALSE:
        case pascalParser.NUMBER:
        case pascalParser.ID:
        case pascalParser.CHAR_LITERAL:
        case pascalParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 1);
            this.state = 213;
            this.simpleType();
            break;
        case pascalParser.ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 214;
            this.structuredType();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SimpleTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_simpleType;
    return this;
}

SimpleTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleTypeContext.prototype.constructor = SimpleTypeContext;

SimpleTypeContext.prototype.scalarType = function() {
    return this.getTypedRuleContext(ScalarTypeContext,0);
};

SimpleTypeContext.prototype.subrangeType = function() {
    return this.getTypedRuleContext(SubrangeTypeContext,0);
};

SimpleTypeContext.prototype.typeIdentifier = function() {
    return this.getTypedRuleContext(TypeIdentifierContext,0);
};

SimpleTypeContext.prototype.stringtype = function() {
    return this.getTypedRuleContext(StringtypeContext,0);
};

SimpleTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterSimpleType(this);
	}
};

SimpleTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitSimpleType(this);
	}
};

SimpleTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitSimpleType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.SimpleTypeContext = SimpleTypeContext;

pascalParser.prototype.simpleType = function() {

    var localctx = new SimpleTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, pascalParser.RULE_simpleType);
    try {
        this.state = 221;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.scalarType();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 218;
            this.subrangeType();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 219;
            this.typeIdentifier();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 220;
            this.stringtype();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ScalarTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_scalarType;
    return this;
}

ScalarTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScalarTypeContext.prototype.constructor = ScalarTypeContext;

ScalarTypeContext.prototype.LP = function() {
    return this.getToken(pascalParser.LP, 0);
};

ScalarTypeContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

ScalarTypeContext.prototype.RP = function() {
    return this.getToken(pascalParser.RP, 0);
};

ScalarTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterScalarType(this);
	}
};

ScalarTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitScalarType(this);
	}
};

ScalarTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitScalarType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ScalarTypeContext = ScalarTypeContext;

pascalParser.prototype.scalarType = function() {

    var localctx = new ScalarTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, pascalParser.RULE_scalarType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(pascalParser.LP);
        this.state = 224;
        this.identifierList();
        this.state = 225;
        this.match(pascalParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SubrangeTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_subrangeType;
    return this;
}

SubrangeTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubrangeTypeContext.prototype.constructor = SubrangeTypeContext;

SubrangeTypeContext.prototype.constant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantContext);
    } else {
        return this.getTypedRuleContext(ConstantContext,i);
    }
};

SubrangeTypeContext.prototype.DOTDOT = function() {
    return this.getToken(pascalParser.DOTDOT, 0);
};

SubrangeTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterSubrangeType(this);
	}
};

SubrangeTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitSubrangeType(this);
	}
};

SubrangeTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitSubrangeType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.SubrangeTypeContext = SubrangeTypeContext;

pascalParser.prototype.subrangeType = function() {

    var localctx = new SubrangeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, pascalParser.RULE_subrangeType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.constant();
        this.state = 228;
        this.match(pascalParser.DOTDOT);
        this.state = 229;
        this.constant();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_typeIdentifier;
    return this;
}

TypeIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeIdentifierContext.prototype.constructor = TypeIdentifierContext;

TypeIdentifierContext.prototype.CHAR = function() {
    return this.getToken(pascalParser.CHAR, 0);
};

TypeIdentifierContext.prototype.BOOLEAN = function() {
    return this.getToken(pascalParser.BOOLEAN, 0);
};

TypeIdentifierContext.prototype.INTEGER = function() {
    return this.getToken(pascalParser.INTEGER, 0);
};

TypeIdentifierContext.prototype.STRING = function() {
    return this.getToken(pascalParser.STRING, 0);
};

TypeIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterTypeIdentifier(this);
	}
};

TypeIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitTypeIdentifier(this);
	}
};

TypeIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitTypeIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.TypeIdentifierContext = TypeIdentifierContext;

pascalParser.prototype.typeIdentifier = function() {

    var localctx = new TypeIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, pascalParser.RULE_typeIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pascalParser.BOOLEAN) | (1 << pascalParser.CHAR) | (1 << pascalParser.INTEGER))) !== 0) || _la===pascalParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StructuredTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_structuredType;
    return this;
}

StructuredTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructuredTypeContext.prototype.constructor = StructuredTypeContext;

StructuredTypeContext.prototype.arrayType = function() {
    return this.getTypedRuleContext(ArrayTypeContext,0);
};

StructuredTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterStructuredType(this);
	}
};

StructuredTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitStructuredType(this);
	}
};

StructuredTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitStructuredType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.StructuredTypeContext = StructuredTypeContext;

pascalParser.prototype.structuredType = function() {

    var localctx = new StructuredTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, pascalParser.RULE_structuredType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.arrayType();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringtypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_stringtype;
    return this;
}

StringtypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringtypeContext.prototype.constructor = StringtypeContext;

StringtypeContext.prototype.STRING = function() {
    return this.getToken(pascalParser.STRING, 0);
};

StringtypeContext.prototype.LBRACK = function() {
    return this.getToken(pascalParser.LBRACK, 0);
};

StringtypeContext.prototype.RBRACK = function() {
    return this.getToken(pascalParser.RBRACK, 0);
};

StringtypeContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

StringtypeContext.prototype.unsignedNumber = function() {
    return this.getTypedRuleContext(UnsignedNumberContext,0);
};

StringtypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterStringtype(this);
	}
};

StringtypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitStringtype(this);
	}
};

StringtypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitStringtype(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.StringtypeContext = StringtypeContext;

pascalParser.prototype.stringtype = function() {

    var localctx = new StringtypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, pascalParser.RULE_stringtype);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(pascalParser.STRING);
        this.state = 236;
        this.match(pascalParser.LBRACK);
        this.state = 239;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.ID:
            this.state = 237;
            this.identifier();
            break;
        case pascalParser.NUMBER:
            this.state = 238;
            this.unsignedNumber();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 241;
        this.match(pascalParser.RBRACK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrayTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_arrayType;
    return this;
}

ArrayTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayTypeContext.prototype.constructor = ArrayTypeContext;

ArrayTypeContext.prototype.ARRAY = function() {
    return this.getToken(pascalParser.ARRAY, 0);
};

ArrayTypeContext.prototype.LBRACK = function() {
    return this.getToken(pascalParser.LBRACK, 0);
};

ArrayTypeContext.prototype.typeList = function() {
    return this.getTypedRuleContext(TypeListContext,0);
};

ArrayTypeContext.prototype.RBRACK = function() {
    return this.getToken(pascalParser.RBRACK, 0);
};

ArrayTypeContext.prototype.OF = function() {
    return this.getToken(pascalParser.OF, 0);
};

ArrayTypeContext.prototype.componentType = function() {
    return this.getTypedRuleContext(ComponentTypeContext,0);
};

ArrayTypeContext.prototype.LBRACK2 = function() {
    return this.getToken(pascalParser.LBRACK2, 0);
};

ArrayTypeContext.prototype.RBRACK2 = function() {
    return this.getToken(pascalParser.RBRACK2, 0);
};

ArrayTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterArrayType(this);
	}
};

ArrayTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitArrayType(this);
	}
};

ArrayTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitArrayType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ArrayTypeContext = ArrayTypeContext;

pascalParser.prototype.arrayType = function() {

    var localctx = new ArrayTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, pascalParser.RULE_arrayType);
    try {
        this.state = 257;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 243;
            this.match(pascalParser.ARRAY);
            this.state = 244;
            this.match(pascalParser.LBRACK);
            this.state = 245;
            this.typeList();
            this.state = 246;
            this.match(pascalParser.RBRACK);
            this.state = 247;
            this.match(pascalParser.OF);
            this.state = 248;
            this.componentType();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 250;
            this.match(pascalParser.ARRAY);
            this.state = 251;
            this.match(pascalParser.LBRACK2);
            this.state = 252;
            this.typeList();
            this.state = 253;
            this.match(pascalParser.RBRACK2);
            this.state = 254;
            this.match(pascalParser.OF);
            this.state = 255;
            this.componentType();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_typeList;
    return this;
}

TypeListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeListContext.prototype.constructor = TypeListContext;

TypeListContext.prototype.indexType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IndexTypeContext);
    } else {
        return this.getTypedRuleContext(IndexTypeContext,i);
    }
};

TypeListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.COMMA);
    } else {
        return this.getToken(pascalParser.COMMA, i);
    }
};


TypeListContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterTypeList(this);
	}
};

TypeListContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitTypeList(this);
	}
};

TypeListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitTypeList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.TypeListContext = TypeListContext;

pascalParser.prototype.typeList = function() {

    var localctx = new TypeListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, pascalParser.RULE_typeList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.indexType();
        this.state = 264;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pascalParser.COMMA) {
            this.state = 260;
            this.match(pascalParser.COMMA);
            this.state = 261;
            this.indexType();
            this.state = 266;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IndexTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_indexType;
    return this;
}

IndexTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexTypeContext.prototype.constructor = IndexTypeContext;

IndexTypeContext.prototype.simpleType = function() {
    return this.getTypedRuleContext(SimpleTypeContext,0);
};

IndexTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterIndexType(this);
	}
};

IndexTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitIndexType(this);
	}
};

IndexTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitIndexType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.IndexTypeContext = IndexTypeContext;

pascalParser.prototype.indexType = function() {

    var localctx = new IndexTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, pascalParser.RULE_indexType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.simpleType();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComponentTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_componentType;
    return this;
}

ComponentTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentTypeContext.prototype.constructor = ComponentTypeContext;

ComponentTypeContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ComponentTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterComponentType(this);
	}
};

ComponentTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitComponentType(this);
	}
};

ComponentTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitComponentType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ComponentTypeContext = ComponentTypeContext;

pascalParser.prototype.componentType = function() {

    var localctx = new ComponentTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, pascalParser.RULE_componentType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this.type();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableDeclarationPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_variableDeclarationPart;
    return this;
}

VariableDeclarationPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationPartContext.prototype.constructor = VariableDeclarationPartContext;

VariableDeclarationPartContext.prototype.VAR = function() {
    return this.getToken(pascalParser.VAR, 0);
};

VariableDeclarationPartContext.prototype.variableDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(VariableDeclarationContext,i);
    }
};

VariableDeclarationPartContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.SEMI);
    } else {
        return this.getToken(pascalParser.SEMI, i);
    }
};


VariableDeclarationPartContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterVariableDeclarationPart(this);
	}
};

VariableDeclarationPartContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitVariableDeclarationPart(this);
	}
};

VariableDeclarationPartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitVariableDeclarationPart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.VariableDeclarationPartContext = VariableDeclarationPartContext;

pascalParser.prototype.variableDeclarationPart = function() {

    var localctx = new VariableDeclarationPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, pascalParser.RULE_variableDeclarationPart);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(pascalParser.VAR);
        this.state = 272;
        this.variableDeclaration();
        this.state = 277;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 273;
                this.match(pascalParser.SEMI);
                this.state = 274;
                this.variableDeclaration(); 
            }
            this.state = 279;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

        this.state = 280;
        this.match(pascalParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

VariableDeclarationContext.prototype.COLON = function() {
    return this.getToken(pascalParser.COLON, 0);
};

VariableDeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitVariableDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.VariableDeclarationContext = VariableDeclarationContext;

pascalParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, pascalParser.RULE_variableDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this.identifierList();
        this.state = 283;
        this.match(pascalParser.COLON);
        this.state = 284;
        this.type();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProcedureAndFunctionDeclarationPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_procedureAndFunctionDeclarationPart;
    return this;
}

ProcedureAndFunctionDeclarationPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcedureAndFunctionDeclarationPartContext.prototype.constructor = ProcedureAndFunctionDeclarationPartContext;

ProcedureAndFunctionDeclarationPartContext.prototype.procedureOrFunctionDeclaration = function() {
    return this.getTypedRuleContext(ProcedureOrFunctionDeclarationContext,0);
};

ProcedureAndFunctionDeclarationPartContext.prototype.SEMI = function() {
    return this.getToken(pascalParser.SEMI, 0);
};

ProcedureAndFunctionDeclarationPartContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterProcedureAndFunctionDeclarationPart(this);
	}
};

ProcedureAndFunctionDeclarationPartContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitProcedureAndFunctionDeclarationPart(this);
	}
};

ProcedureAndFunctionDeclarationPartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitProcedureAndFunctionDeclarationPart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ProcedureAndFunctionDeclarationPartContext = ProcedureAndFunctionDeclarationPartContext;

pascalParser.prototype.procedureAndFunctionDeclarationPart = function() {

    var localctx = new ProcedureAndFunctionDeclarationPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, pascalParser.RULE_procedureAndFunctionDeclarationPart);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.procedureOrFunctionDeclaration();
        this.state = 287;
        this.match(pascalParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProcedureOrFunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_procedureOrFunctionDeclaration;
    return this;
}

ProcedureOrFunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcedureOrFunctionDeclarationContext.prototype.constructor = ProcedureOrFunctionDeclarationContext;

ProcedureOrFunctionDeclarationContext.prototype.procedureDeclaration = function() {
    return this.getTypedRuleContext(ProcedureDeclarationContext,0);
};

ProcedureOrFunctionDeclarationContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

ProcedureOrFunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterProcedureOrFunctionDeclaration(this);
	}
};

ProcedureOrFunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitProcedureOrFunctionDeclaration(this);
	}
};

ProcedureOrFunctionDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitProcedureOrFunctionDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ProcedureOrFunctionDeclarationContext = ProcedureOrFunctionDeclarationContext;

pascalParser.prototype.procedureOrFunctionDeclaration = function() {

    var localctx = new ProcedureOrFunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, pascalParser.RULE_procedureOrFunctionDeclaration);
    try {
        this.state = 291;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.PROCEDURE:
            this.enterOuterAlt(localctx, 1);
            this.state = 289;
            this.procedureDeclaration();
            break;
        case pascalParser.FUNCTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 290;
            this.functionDeclaration();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProcedureDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_procedureDeclaration;
    return this;
}

ProcedureDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcedureDeclarationContext.prototype.constructor = ProcedureDeclarationContext;

ProcedureDeclarationContext.prototype.PROCEDURE = function() {
    return this.getToken(pascalParser.PROCEDURE, 0);
};

ProcedureDeclarationContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ProcedureDeclarationContext.prototype.SEMI = function() {
    return this.getToken(pascalParser.SEMI, 0);
};

ProcedureDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ProcedureDeclarationContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

ProcedureDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterProcedureDeclaration(this);
	}
};

ProcedureDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitProcedureDeclaration(this);
	}
};

ProcedureDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitProcedureDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ProcedureDeclarationContext = ProcedureDeclarationContext;

pascalParser.prototype.procedureDeclaration = function() {

    var localctx = new ProcedureDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, pascalParser.RULE_procedureDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.match(pascalParser.PROCEDURE);
        this.state = 294;
        this.identifier();
        this.state = 296;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pascalParser.LP) {
            this.state = 295;
            this.formalParameterList();
        }

        this.state = 298;
        this.match(pascalParser.SEMI);
        this.state = 299;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormalParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_formalParameterList;
    return this;
}

FormalParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterListContext.prototype.constructor = FormalParameterListContext;

FormalParameterListContext.prototype.LP = function() {
    return this.getToken(pascalParser.LP, 0);
};

FormalParameterListContext.prototype.RP = function() {
    return this.getToken(pascalParser.RP, 0);
};

FormalParameterListContext.prototype.formalParameterSection = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParameterSectionContext);
    } else {
        return this.getTypedRuleContext(FormalParameterSectionContext,i);
    }
};

FormalParameterListContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.SEMI);
    } else {
        return this.getToken(pascalParser.SEMI, i);
    }
};


FormalParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitFormalParameterList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.FormalParameterListContext = FormalParameterListContext;

pascalParser.prototype.formalParameterList = function() {

    var localctx = new FormalParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, pascalParser.RULE_formalParameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(pascalParser.LP);
        this.state = 305;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (pascalParser.FUNCTION - 14)) | (1 << (pascalParser.PROCEDURE - 14)) | (1 << (pascalParser.VAR - 14)))) !== 0) || _la===pascalParser.ID) {
            this.state = 302;
            this.formalParameterSection();
            this.state = 307;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 312;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pascalParser.SEMI) {
            this.state = 308;
            this.match(pascalParser.SEMI);
            this.state = 309;
            this.formalParameterSection();
            this.state = 314;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 315;
        this.match(pascalParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FormalParameterSectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_formalParameterSection;
    return this;
}

FormalParameterSectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterSectionContext.prototype.constructor = FormalParameterSectionContext;

FormalParameterSectionContext.prototype.parameterGroup = function() {
    return this.getTypedRuleContext(ParameterGroupContext,0);
};

FormalParameterSectionContext.prototype.VAR = function() {
    return this.getToken(pascalParser.VAR, 0);
};

FormalParameterSectionContext.prototype.FUNCTION = function() {
    return this.getToken(pascalParser.FUNCTION, 0);
};

FormalParameterSectionContext.prototype.PROCEDURE = function() {
    return this.getToken(pascalParser.PROCEDURE, 0);
};

FormalParameterSectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterFormalParameterSection(this);
	}
};

FormalParameterSectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitFormalParameterSection(this);
	}
};

FormalParameterSectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitFormalParameterSection(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.FormalParameterSectionContext = FormalParameterSectionContext;

pascalParser.prototype.formalParameterSection = function() {

    var localctx = new FormalParameterSectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, pascalParser.RULE_formalParameterSection);
    try {
        this.state = 324;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 317;
            this.parameterGroup();
            break;
        case pascalParser.VAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 318;
            this.match(pascalParser.VAR);
            this.state = 319;
            this.parameterGroup();
            break;
        case pascalParser.FUNCTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 320;
            this.match(pascalParser.FUNCTION);
            this.state = 321;
            this.parameterGroup();
            break;
        case pascalParser.PROCEDURE:
            this.enterOuterAlt(localctx, 4);
            this.state = 322;
            this.match(pascalParser.PROCEDURE);
            this.state = 323;
            this.parameterGroup();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_parameterGroup;
    return this;
}

ParameterGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterGroupContext.prototype.constructor = ParameterGroupContext;

ParameterGroupContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

ParameterGroupContext.prototype.COLON = function() {
    return this.getToken(pascalParser.COLON, 0);
};

ParameterGroupContext.prototype.typeIdentifier = function() {
    return this.getTypedRuleContext(TypeIdentifierContext,0);
};

ParameterGroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterParameterGroup(this);
	}
};

ParameterGroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitParameterGroup(this);
	}
};

ParameterGroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitParameterGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ParameterGroupContext = ParameterGroupContext;

pascalParser.prototype.parameterGroup = function() {

    var localctx = new ParameterGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, pascalParser.RULE_parameterGroup);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326;
        this.identifierList();
        this.state = 327;
        this.match(pascalParser.COLON);
        this.state = 328;
        this.typeIdentifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_identifierList;
    return this;
}

IdentifierListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierListContext.prototype.constructor = IdentifierListContext;

IdentifierListContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

IdentifierListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.COMMA);
    } else {
        return this.getToken(pascalParser.COMMA, i);
    }
};


IdentifierListContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterIdentifierList(this);
	}
};

IdentifierListContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitIdentifierList(this);
	}
};

IdentifierListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitIdentifierList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.IdentifierListContext = IdentifierListContext;

pascalParser.prototype.identifierList = function() {

    var localctx = new IdentifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, pascalParser.RULE_identifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.identifier();
        this.state = 335;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pascalParser.COMMA) {
            this.state = 331;
            this.match(pascalParser.COMMA);
            this.state = 332;
            this.identifier();
            this.state = 337;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.FUNCTION = function() {
    return this.getToken(pascalParser.FUNCTION, 0);
};

FunctionDeclarationContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

FunctionDeclarationContext.prototype.COLON = function() {
    return this.getToken(pascalParser.COLON, 0);
};

FunctionDeclarationContext.prototype.resultType = function() {
    return this.getTypedRuleContext(ResultTypeContext,0);
};

FunctionDeclarationContext.prototype.SEMI = function() {
    return this.getToken(pascalParser.SEMI, 0);
};

FunctionDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FunctionDeclarationContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitFunctionDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.FunctionDeclarationContext = FunctionDeclarationContext;

pascalParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, pascalParser.RULE_functionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this.match(pascalParser.FUNCTION);
        this.state = 339;
        this.identifier();
        this.state = 341;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pascalParser.LP) {
            this.state = 340;
            this.formalParameterList();
        }

        this.state = 343;
        this.match(pascalParser.COLON);
        this.state = 344;
        this.resultType();
        this.state = 345;
        this.match(pascalParser.SEMI);
        this.state = 346;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ResultTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_resultType;
    return this;
}

ResultTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResultTypeContext.prototype.constructor = ResultTypeContext;

ResultTypeContext.prototype.typeIdentifier = function() {
    return this.getTypedRuleContext(TypeIdentifierContext,0);
};

ResultTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterResultType(this);
	}
};

ResultTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitResultType(this);
	}
};

ResultTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitResultType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ResultTypeContext = ResultTypeContext;

pascalParser.prototype.resultType = function() {

    var localctx = new ResultTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, pascalParser.RULE_resultType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.typeIdentifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.simpleStatement = function() {
    return this.getTypedRuleContext(SimpleStatementContext,0);
};

StatementContext.prototype.structuredStatement = function() {
    return this.getTypedRuleContext(StructuredStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.StatementContext = StatementContext;

pascalParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, pascalParser.RULE_statement);
    try {
        this.state = 352;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.ELSE:
        case pascalParser.END:
        case pascalParser.READLN:
        case pascalParser.UNTIL:
        case pascalParser.WRITE:
        case pascalParser.WRITELN:
        case pascalParser.SEMI:
        case pascalParser.AT:
        case pascalParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 350;
            this.simpleStatement();
            break;
        case pascalParser.BEGIN:
        case pascalParser.FOR:
        case pascalParser.IF:
        case pascalParser.REPEAT:
        case pascalParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 351;
            this.structuredStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SimpleStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_simpleStatement;
    return this;
}

SimpleStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleStatementContext.prototype.constructor = SimpleStatementContext;

SimpleStatementContext.prototype.assignmentStatement = function() {
    return this.getTypedRuleContext(AssignmentStatementContext,0);
};

SimpleStatementContext.prototype.ioStatement = function() {
    return this.getTypedRuleContext(IoStatementContext,0);
};

SimpleStatementContext.prototype.procedureStatement = function() {
    return this.getTypedRuleContext(ProcedureStatementContext,0);
};

SimpleStatementContext.prototype.emptyStatement = function() {
    return this.getTypedRuleContext(EmptyStatementContext,0);
};

SimpleStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterSimpleStatement(this);
	}
};

SimpleStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitSimpleStatement(this);
	}
};

SimpleStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitSimpleStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.SimpleStatementContext = SimpleStatementContext;

pascalParser.prototype.simpleStatement = function() {

    var localctx = new SimpleStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, pascalParser.RULE_simpleStatement);
    try {
        this.state = 358;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 354;
            this.assignmentStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 355;
            this.ioStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 356;
            this.procedureStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 357;
            this.emptyStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IoStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_ioStatement;
    return this;
}

IoStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IoStatementContext.prototype.constructor = IoStatementContext;

IoStatementContext.prototype.readln = function() {
    return this.getTypedRuleContext(ReadlnContext,0);
};

IoStatementContext.prototype.write = function() {
    return this.getTypedRuleContext(WriteContext,0);
};

IoStatementContext.prototype.writeln = function() {
    return this.getTypedRuleContext(WritelnContext,0);
};

IoStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterIoStatement(this);
	}
};

IoStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitIoStatement(this);
	}
};

IoStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitIoStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.IoStatementContext = IoStatementContext;

pascalParser.prototype.ioStatement = function() {

    var localctx = new IoStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, pascalParser.RULE_ioStatement);
    try {
        this.state = 363;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.READLN:
            this.enterOuterAlt(localctx, 1);
            this.state = 360;
            this.readln();
            break;
        case pascalParser.WRITE:
            this.enterOuterAlt(localctx, 2);
            this.state = 361;
            this.write();
            break;
        case pascalParser.WRITELN:
            this.enterOuterAlt(localctx, 3);
            this.state = 362;
            this.writeln();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReadlnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_readln;
    return this;
}

ReadlnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReadlnContext.prototype.constructor = ReadlnContext;

ReadlnContext.prototype.READLN = function() {
    return this.getToken(pascalParser.READLN, 0);
};

ReadlnContext.prototype.LP = function() {
    return this.getToken(pascalParser.LP, 0);
};

ReadlnContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

ReadlnContext.prototype.RP = function() {
    return this.getToken(pascalParser.RP, 0);
};

ReadlnContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterReadln(this);
	}
};

ReadlnContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitReadln(this);
	}
};

ReadlnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitReadln(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ReadlnContext = ReadlnContext;

pascalParser.prototype.readln = function() {

    var localctx = new ReadlnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, pascalParser.RULE_readln);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 365;
        this.match(pascalParser.READLN);
        this.state = 366;
        this.match(pascalParser.LP);
        this.state = 367;
        this.identifierList();
        this.state = 368;
        this.match(pascalParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WritelnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_writeln;
    return this;
}

WritelnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WritelnContext.prototype.constructor = WritelnContext;

WritelnContext.prototype.WRITELN = function() {
    return this.getToken(pascalParser.WRITELN, 0);
};

WritelnContext.prototype.LP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.LP);
    } else {
        return this.getToken(pascalParser.LP, i);
    }
};


WritelnContext.prototype.RP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.RP);
    } else {
        return this.getToken(pascalParser.RP, i);
    }
};


WritelnContext.prototype.outputList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OutputListContext);
    } else {
        return this.getTypedRuleContext(OutputListContext,i);
    }
};

WritelnContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterWriteln(this);
	}
};

WritelnContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitWriteln(this);
	}
};

WritelnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitWriteln(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.WritelnContext = WritelnContext;

pascalParser.prototype.writeln = function() {

    var localctx = new WritelnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, pascalParser.RULE_writeln);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 370;
        this.match(pascalParser.WRITELN);
        this.state = 381;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pascalParser.LP) {
            this.state = 371;
            this.match(pascalParser.LP);
            this.state = 375;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 20)) & ~0x1f) == 0 && ((1 << (_la - 20)) & ((1 << (pascalParser.NOT - 20)) | (1 << (pascalParser.ADD - 20)) | (1 << (pascalParser.SUB - 20)) | (1 << (pascalParser.LP - 20)) | (1 << (pascalParser.AT - 20)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (pascalParser.TRUE - 59)) | (1 << (pascalParser.FALSE - 59)) | (1 << (pascalParser.NUMBER - 59)) | (1 << (pascalParser.ID - 59)) | (1 << (pascalParser.CHAR_LITERAL - 59)) | (1 << (pascalParser.STRING_LITERAL - 59)))) !== 0)) {
                this.state = 372;
                this.outputList();
                this.state = 377;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 378;
            this.match(pascalParser.RP);
            this.state = 383;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WriteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_write;
    return this;
}

WriteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WriteContext.prototype.constructor = WriteContext;

WriteContext.prototype.WRITE = function() {
    return this.getToken(pascalParser.WRITE, 0);
};

WriteContext.prototype.LP = function() {
    return this.getToken(pascalParser.LP, 0);
};

WriteContext.prototype.outputList = function() {
    return this.getTypedRuleContext(OutputListContext,0);
};

WriteContext.prototype.RP = function() {
    return this.getToken(pascalParser.RP, 0);
};

WriteContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterWrite(this);
	}
};

WriteContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitWrite(this);
	}
};

WriteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitWrite(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.WriteContext = WriteContext;

pascalParser.prototype.write = function() {

    var localctx = new WriteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, pascalParser.RULE_write);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this.match(pascalParser.WRITE);
        this.state = 385;
        this.match(pascalParser.LP);
        this.state = 386;
        this.outputList();
        this.state = 387;
        this.match(pascalParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OutputListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_outputList;
    return this;
}

OutputListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutputListContext.prototype.constructor = OutputListContext;

OutputListContext.prototype.constant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantContext);
    } else {
        return this.getTypedRuleContext(ConstantContext,i);
    }
};

OutputListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.COMMA);
    } else {
        return this.getToken(pascalParser.COMMA, i);
    }
};


OutputListContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterOutputList(this);
	}
};

OutputListContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitOutputList(this);
	}
};

OutputListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitOutputList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.OutputListContext = OutputListContext;

pascalParser.prototype.outputList = function() {

    var localctx = new OutputListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, pascalParser.RULE_outputList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 389;
        this.constant();
        this.state = 394;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pascalParser.COMMA) {
            this.state = 390;
            this.match(pascalParser.COMMA);
            this.state = 391;
            this.constant();
            this.state = 396;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignmentStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_assignmentStatement;
    return this;
}

AssignmentStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentStatementContext.prototype.constructor = AssignmentStatementContext;

AssignmentStatementContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AssignmentStatementContext.prototype.ASSIGN = function() {
    return this.getToken(pascalParser.ASSIGN, 0);
};

AssignmentStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterAssignmentStatement(this);
	}
};

AssignmentStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitAssignmentStatement(this);
	}
};

AssignmentStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitAssignmentStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.AssignmentStatementContext = AssignmentStatementContext;

pascalParser.prototype.assignmentStatement = function() {

    var localctx = new AssignmentStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, pascalParser.RULE_assignmentStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 397;
        this.variable();
        this.state = 398;
        this.match(pascalParser.ASSIGN);
        this.state = 399;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.AT = function() {
    return this.getToken(pascalParser.AT, 0);
};

VariableContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

VariableContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.LBRACK);
    } else {
        return this.getToken(pascalParser.LBRACK, i);
    }
};


VariableContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

VariableContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.RBRACK);
    } else {
        return this.getToken(pascalParser.RBRACK, i);
    }
};


VariableContext.prototype.LBRACK2 = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.LBRACK2);
    } else {
        return this.getToken(pascalParser.LBRACK2, i);
    }
};


VariableContext.prototype.RBRACK2 = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.RBRACK2);
    } else {
        return this.getToken(pascalParser.RBRACK2, i);
    }
};


VariableContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.DOT);
    } else {
        return this.getToken(pascalParser.DOT, i);
    }
};


VariableContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.COMMA);
    } else {
        return this.getToken(pascalParser.COMMA, i);
    }
};


VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.VariableContext = VariableContext;

pascalParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, pascalParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 404;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.AT:
            this.state = 401;
            this.match(pascalParser.AT);
            this.state = 402;
            this.identifier();
            break;
        case pascalParser.ID:
            this.state = 403;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 432;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 52)) & ~0x1f) == 0 && ((1 << (_la - 52)) & ((1 << (pascalParser.LBRACK - 52)) | (1 << (pascalParser.LBRACK2 - 52)) | (1 << (pascalParser.DOT - 52)))) !== 0)) {
            this.state = 430;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case pascalParser.LBRACK:
                this.state = 406;
                this.match(pascalParser.LBRACK);
                this.state = 407;
                this.expression();
                this.state = 412;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===pascalParser.COMMA) {
                    this.state = 408;
                    this.match(pascalParser.COMMA);
                    this.state = 409;
                    this.expression();
                    this.state = 414;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 415;
                this.match(pascalParser.RBRACK);
                break;
            case pascalParser.LBRACK2:
                this.state = 417;
                this.match(pascalParser.LBRACK2);
                this.state = 418;
                this.expression();
                this.state = 423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===pascalParser.COMMA) {
                    this.state = 419;
                    this.match(pascalParser.COMMA);
                    this.state = 420;
                    this.expression();
                    this.state = 425;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 426;
                this.match(pascalParser.RBRACK2);
                break;
            case pascalParser.DOT:
                this.state = 428;
                this.match(pascalParser.DOT);
                this.state = 429;
                this.identifier();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 434;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.simpleExpression = function() {
    return this.getTypedRuleContext(SimpleExpressionContext,0);
};

ExpressionContext.prototype.relationaloperator = function() {
    return this.getTypedRuleContext(RelationaloperatorContext,0);
};

ExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ExpressionContext = ExpressionContext;

pascalParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, pascalParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        this.simpleExpression();
        this.state = 439;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (pascalParser.EQUAL - 43)) | (1 << (pascalParser.NOT_EQUAL - 43)) | (1 << (pascalParser.LT - 43)) | (1 << (pascalParser.LE - 43)) | (1 << (pascalParser.GE - 43)) | (1 << (pascalParser.GT - 43)))) !== 0)) {
            this.state = 436;
            this.relationaloperator();
            this.state = 437;
            this.expression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelationaloperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_relationaloperator;
    return this;
}

RelationaloperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelationaloperatorContext.prototype.constructor = RelationaloperatorContext;

RelationaloperatorContext.prototype.EQUAL = function() {
    return this.getToken(pascalParser.EQUAL, 0);
};

RelationaloperatorContext.prototype.NOT_EQUAL = function() {
    return this.getToken(pascalParser.NOT_EQUAL, 0);
};

RelationaloperatorContext.prototype.LT = function() {
    return this.getToken(pascalParser.LT, 0);
};

RelationaloperatorContext.prototype.LE = function() {
    return this.getToken(pascalParser.LE, 0);
};

RelationaloperatorContext.prototype.GE = function() {
    return this.getToken(pascalParser.GE, 0);
};

RelationaloperatorContext.prototype.GT = function() {
    return this.getToken(pascalParser.GT, 0);
};

RelationaloperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterRelationaloperator(this);
	}
};

RelationaloperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitRelationaloperator(this);
	}
};

RelationaloperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitRelationaloperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.RelationaloperatorContext = RelationaloperatorContext;

pascalParser.prototype.relationaloperator = function() {

    var localctx = new RelationaloperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, pascalParser.RULE_relationaloperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 441;
        _la = this._input.LA(1);
        if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (pascalParser.EQUAL - 43)) | (1 << (pascalParser.NOT_EQUAL - 43)) | (1 << (pascalParser.LT - 43)) | (1 << (pascalParser.LE - 43)) | (1 << (pascalParser.GE - 43)) | (1 << (pascalParser.GT - 43)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SimpleExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_simpleExpression;
    return this;
}

SimpleExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleExpressionContext.prototype.constructor = SimpleExpressionContext;

SimpleExpressionContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

SimpleExpressionContext.prototype.additiveoperator = function() {
    return this.getTypedRuleContext(AdditiveoperatorContext,0);
};

SimpleExpressionContext.prototype.simpleExpression = function() {
    return this.getTypedRuleContext(SimpleExpressionContext,0);
};

SimpleExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterSimpleExpression(this);
	}
};

SimpleExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitSimpleExpression(this);
	}
};

SimpleExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitSimpleExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.SimpleExpressionContext = SimpleExpressionContext;

pascalParser.prototype.simpleExpression = function() {

    var localctx = new SimpleExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, pascalParser.RULE_simpleExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 443;
        this.term();
        this.state = 447;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        if(la_===1) {
            this.state = 444;
            this.additiveoperator();
            this.state = 445;
            this.simpleExpression();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AdditiveoperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_additiveoperator;
    return this;
}

AdditiveoperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditiveoperatorContext.prototype.constructor = AdditiveoperatorContext;

AdditiveoperatorContext.prototype.ADD = function() {
    return this.getToken(pascalParser.ADD, 0);
};

AdditiveoperatorContext.prototype.SUB = function() {
    return this.getToken(pascalParser.SUB, 0);
};

AdditiveoperatorContext.prototype.OR = function() {
    return this.getToken(pascalParser.OR, 0);
};

AdditiveoperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterAdditiveoperator(this);
	}
};

AdditiveoperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitAdditiveoperator(this);
	}
};

AdditiveoperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitAdditiveoperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.AdditiveoperatorContext = AdditiveoperatorContext;

pascalParser.prototype.additiveoperator = function() {

    var localctx = new AdditiveoperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, pascalParser.RULE_additiveoperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
        _la = this._input.LA(1);
        if(!(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (pascalParser.OR - 22)) | (1 << (pascalParser.ADD - 22)) | (1 << (pascalParser.SUB - 22)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.signedFactor = function() {
    return this.getTypedRuleContext(SignedFactorContext,0);
};

TermContext.prototype.multiplicativeoperator = function() {
    return this.getTypedRuleContext(MultiplicativeoperatorContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.TermContext = TermContext;

pascalParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, pascalParser.RULE_term);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.signedFactor();
        this.state = 455;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pascalParser.AND) | (1 << pascalParser.DIV) | (1 << pascalParser.MOD))) !== 0) || _la===pascalParser.MULT) {
            this.state = 452;
            this.multiplicativeoperator();
            this.state = 453;
            this.term();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplicativeoperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_multiplicativeoperator;
    return this;
}

MultiplicativeoperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicativeoperatorContext.prototype.constructor = MultiplicativeoperatorContext;

MultiplicativeoperatorContext.prototype.MULT = function() {
    return this.getToken(pascalParser.MULT, 0);
};

MultiplicativeoperatorContext.prototype.DIV = function() {
    return this.getToken(pascalParser.DIV, 0);
};

MultiplicativeoperatorContext.prototype.MOD = function() {
    return this.getToken(pascalParser.MOD, 0);
};

MultiplicativeoperatorContext.prototype.AND = function() {
    return this.getToken(pascalParser.AND, 0);
};

MultiplicativeoperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterMultiplicativeoperator(this);
	}
};

MultiplicativeoperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitMultiplicativeoperator(this);
	}
};

MultiplicativeoperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitMultiplicativeoperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.MultiplicativeoperatorContext = MultiplicativeoperatorContext;

pascalParser.prototype.multiplicativeoperator = function() {

    var localctx = new MultiplicativeoperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, pascalParser.RULE_multiplicativeoperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 457;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pascalParser.AND) | (1 << pascalParser.DIV) | (1 << pascalParser.MOD))) !== 0) || _la===pascalParser.MULT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SignedFactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_signedFactor;
    return this;
}

SignedFactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignedFactorContext.prototype.constructor = SignedFactorContext;

SignedFactorContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

SignedFactorContext.prototype.ADD = function() {
    return this.getToken(pascalParser.ADD, 0);
};

SignedFactorContext.prototype.SUB = function() {
    return this.getToken(pascalParser.SUB, 0);
};

SignedFactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterSignedFactor(this);
	}
};

SignedFactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitSignedFactor(this);
	}
};

SignedFactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitSignedFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.SignedFactorContext = SignedFactorContext;

pascalParser.prototype.signedFactor = function() {

    var localctx = new SignedFactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, pascalParser.RULE_signedFactor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 460;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pascalParser.ADD || _la===pascalParser.SUB) {
            this.state = 459;
            _la = this._input.LA(1);
            if(!(_la===pascalParser.ADD || _la===pascalParser.SUB)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 462;
        this.factor();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

FactorContext.prototype.LP = function() {
    return this.getToken(pascalParser.LP, 0);
};

FactorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FactorContext.prototype.RP = function() {
    return this.getToken(pascalParser.RP, 0);
};

FactorContext.prototype.functionDesignator = function() {
    return this.getTypedRuleContext(FunctionDesignatorContext,0);
};

FactorContext.prototype.unsignedConstant = function() {
    return this.getTypedRuleContext(UnsignedConstantContext,0);
};

FactorContext.prototype.NOT = function() {
    return this.getToken(pascalParser.NOT, 0);
};

FactorContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

FactorContext.prototype.bool = function() {
    return this.getTypedRuleContext(BoolContext,0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitFactor(this);
	}
};

FactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.FactorContext = FactorContext;

pascalParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, pascalParser.RULE_factor);
    try {
        this.state = 474;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 464;
            this.variable();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 465;
            this.match(pascalParser.LP);
            this.state = 466;
            this.expression();
            this.state = 467;
            this.match(pascalParser.RP);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 469;
            this.functionDesignator();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 470;
            this.unsignedConstant();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 471;
            this.match(pascalParser.NOT);
            this.state = 472;
            this.factor();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 473;
            this.bool();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnsignedConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_unsignedConstant;
    return this;
}

UnsignedConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnsignedConstantContext.prototype.constructor = UnsignedConstantContext;

UnsignedConstantContext.prototype.unsignedNumber = function() {
    return this.getTypedRuleContext(UnsignedNumberContext,0);
};

UnsignedConstantContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

UnsignedConstantContext.prototype.character = function() {
    return this.getTypedRuleContext(CharacterContext,0);
};

UnsignedConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterUnsignedConstant(this);
	}
};

UnsignedConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitUnsignedConstant(this);
	}
};

UnsignedConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitUnsignedConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.UnsignedConstantContext = UnsignedConstantContext;

pascalParser.prototype.unsignedConstant = function() {

    var localctx = new UnsignedConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, pascalParser.RULE_unsignedConstant);
    try {
        this.state = 479;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 476;
            this.unsignedNumber();
            break;
        case pascalParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 477;
            this.string();
            break;
        case pascalParser.CHAR_LITERAL:
            this.enterOuterAlt(localctx, 3);
            this.state = 478;
            this.character();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionDesignatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_functionDesignator;
    return this;
}

FunctionDesignatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDesignatorContext.prototype.constructor = FunctionDesignatorContext;

FunctionDesignatorContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

FunctionDesignatorContext.prototype.LP = function() {
    return this.getToken(pascalParser.LP, 0);
};

FunctionDesignatorContext.prototype.RP = function() {
    return this.getToken(pascalParser.RP, 0);
};

FunctionDesignatorContext.prototype.parameterList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterListContext);
    } else {
        return this.getTypedRuleContext(ParameterListContext,i);
    }
};

FunctionDesignatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterFunctionDesignator(this);
	}
};

FunctionDesignatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitFunctionDesignator(this);
	}
};

FunctionDesignatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitFunctionDesignator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.FunctionDesignatorContext = FunctionDesignatorContext;

pascalParser.prototype.functionDesignator = function() {

    var localctx = new FunctionDesignatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, pascalParser.RULE_functionDesignator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 481;
        this.variable();
        this.state = 482;
        this.match(pascalParser.LP);
        this.state = 486;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 20)) & ~0x1f) == 0 && ((1 << (_la - 20)) & ((1 << (pascalParser.NOT - 20)) | (1 << (pascalParser.ADD - 20)) | (1 << (pascalParser.SUB - 20)) | (1 << (pascalParser.LP - 20)) | (1 << (pascalParser.AT - 20)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (pascalParser.TRUE - 59)) | (1 << (pascalParser.FALSE - 59)) | (1 << (pascalParser.NUMBER - 59)) | (1 << (pascalParser.ID - 59)) | (1 << (pascalParser.CHAR_LITERAL - 59)) | (1 << (pascalParser.STRING_LITERAL - 59)))) !== 0)) {
            this.state = 483;
            this.parameterList();
            this.state = 488;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 489;
        this.match(pascalParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_parameterList;
    return this;
}

ParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterListContext.prototype.constructor = ParameterListContext;

ParameterListContext.prototype.actualParameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ActualParameterContext);
    } else {
        return this.getTypedRuleContext(ActualParameterContext,i);
    }
};

ParameterListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.COMMA);
    } else {
        return this.getToken(pascalParser.COMMA, i);
    }
};


ParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterParameterList(this);
	}
};

ParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitParameterList(this);
	}
};

ParameterListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitParameterList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ParameterListContext = ParameterListContext;

pascalParser.prototype.parameterList = function() {

    var localctx = new ParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, pascalParser.RULE_parameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 491;
        this.actualParameter();
        this.state = 496;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pascalParser.COMMA) {
            this.state = 492;
            this.match(pascalParser.COMMA);
            this.state = 493;
            this.actualParameter();
            this.state = 498;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProcedureStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_procedureStatement;
    return this;
}

ProcedureStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcedureStatementContext.prototype.constructor = ProcedureStatementContext;

ProcedureStatementContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ProcedureStatementContext.prototype.LP = function() {
    return this.getToken(pascalParser.LP, 0);
};

ProcedureStatementContext.prototype.RP = function() {
    return this.getToken(pascalParser.RP, 0);
};

ProcedureStatementContext.prototype.parameterList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterListContext);
    } else {
        return this.getTypedRuleContext(ParameterListContext,i);
    }
};

ProcedureStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterProcedureStatement(this);
	}
};

ProcedureStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitProcedureStatement(this);
	}
};

ProcedureStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitProcedureStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ProcedureStatementContext = ProcedureStatementContext;

pascalParser.prototype.procedureStatement = function() {

    var localctx = new ProcedureStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, pascalParser.RULE_procedureStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 499;
        this.variable();
        this.state = 508;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===pascalParser.LP) {
            this.state = 500;
            this.match(pascalParser.LP);
            this.state = 504;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 20)) & ~0x1f) == 0 && ((1 << (_la - 20)) & ((1 << (pascalParser.NOT - 20)) | (1 << (pascalParser.ADD - 20)) | (1 << (pascalParser.SUB - 20)) | (1 << (pascalParser.LP - 20)) | (1 << (pascalParser.AT - 20)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (pascalParser.TRUE - 59)) | (1 << (pascalParser.FALSE - 59)) | (1 << (pascalParser.NUMBER - 59)) | (1 << (pascalParser.ID - 59)) | (1 << (pascalParser.CHAR_LITERAL - 59)) | (1 << (pascalParser.STRING_LITERAL - 59)))) !== 0)) {
                this.state = 501;
                this.parameterList();
                this.state = 506;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 507;
            this.match(pascalParser.RP);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ActualParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_actualParameter;
    return this;
}

ActualParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActualParameterContext.prototype.constructor = ActualParameterContext;

ActualParameterContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ActualParameterContext.prototype.parameterwidth = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterwidthContext);
    } else {
        return this.getTypedRuleContext(ParameterwidthContext,i);
    }
};

ActualParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterActualParameter(this);
	}
};

ActualParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitActualParameter(this);
	}
};

ActualParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitActualParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ActualParameterContext = ActualParameterContext;

pascalParser.prototype.actualParameter = function() {

    var localctx = new ActualParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, pascalParser.RULE_actualParameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 510;
        this.expression();
        this.state = 514;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pascalParser.COLON) {
            this.state = 511;
            this.parameterwidth();
            this.state = 516;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterwidthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_parameterwidth;
    return this;
}

ParameterwidthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterwidthContext.prototype.constructor = ParameterwidthContext;

ParameterwidthContext.prototype.COLON = function() {
    return this.getToken(pascalParser.COLON, 0);
};

ParameterwidthContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ParameterwidthContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterParameterwidth(this);
	}
};

ParameterwidthContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitParameterwidth(this);
	}
};

ParameterwidthContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitParameterwidth(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ParameterwidthContext = ParameterwidthContext;

pascalParser.prototype.parameterwidth = function() {

    var localctx = new ParameterwidthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, pascalParser.RULE_parameterwidth);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 517;
        this.match(pascalParser.COLON);
        this.state = 518;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmptyStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;


EmptyStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitEmptyStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.EmptyStatementContext = EmptyStatementContext;

pascalParser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, pascalParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StructuredStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_structuredStatement;
    return this;
}

StructuredStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructuredStatementContext.prototype.constructor = StructuredStatementContext;

StructuredStatementContext.prototype.compoundStatement = function() {
    return this.getTypedRuleContext(CompoundStatementContext,0);
};

StructuredStatementContext.prototype.conditionalStatement = function() {
    return this.getTypedRuleContext(ConditionalStatementContext,0);
};

StructuredStatementContext.prototype.repetetiveStatement = function() {
    return this.getTypedRuleContext(RepetetiveStatementContext,0);
};

StructuredStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterStructuredStatement(this);
	}
};

StructuredStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitStructuredStatement(this);
	}
};

StructuredStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitStructuredStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.StructuredStatementContext = StructuredStatementContext;

pascalParser.prototype.structuredStatement = function() {

    var localctx = new StructuredStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, pascalParser.RULE_structuredStatement);
    try {
        this.state = 525;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.BEGIN:
            this.enterOuterAlt(localctx, 1);
            this.state = 522;
            this.compoundStatement();
            break;
        case pascalParser.IF:
            this.enterOuterAlt(localctx, 2);
            this.state = 523;
            this.conditionalStatement();
            break;
        case pascalParser.FOR:
        case pascalParser.REPEAT:
        case pascalParser.WHILE:
            this.enterOuterAlt(localctx, 3);
            this.state = 524;
            this.repetetiveStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CompoundStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_compoundStatement;
    return this;
}

CompoundStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompoundStatementContext.prototype.constructor = CompoundStatementContext;

CompoundStatementContext.prototype.BEGIN = function() {
    return this.getToken(pascalParser.BEGIN, 0);
};

CompoundStatementContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

CompoundStatementContext.prototype.END = function() {
    return this.getToken(pascalParser.END, 0);
};

CompoundStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterCompoundStatement(this);
	}
};

CompoundStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitCompoundStatement(this);
	}
};

CompoundStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitCompoundStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.CompoundStatementContext = CompoundStatementContext;

pascalParser.prototype.compoundStatement = function() {

    var localctx = new CompoundStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, pascalParser.RULE_compoundStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 527;
        this.match(pascalParser.BEGIN);
        this.state = 528;
        this.statements();
        this.state = 529;
        this.match(pascalParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementsContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(pascalParser.SEMI);
    } else {
        return this.getToken(pascalParser.SEMI, i);
    }
};


StatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterStatements(this);
	}
};

StatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitStatements(this);
	}
};

StatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.StatementsContext = StatementsContext;

pascalParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, pascalParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 531;
        this.statement();
        this.state = 536;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===pascalParser.SEMI) {
            this.state = 532;
            this.match(pascalParser.SEMI);
            this.state = 533;
            this.statement();
            this.state = 538;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionalStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_conditionalStatement;
    return this;
}

ConditionalStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalStatementContext.prototype.constructor = ConditionalStatementContext;

ConditionalStatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

ConditionalStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterConditionalStatement(this);
	}
};

ConditionalStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitConditionalStatement(this);
	}
};

ConditionalStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitConditionalStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ConditionalStatementContext = ConditionalStatementContext;

pascalParser.prototype.conditionalStatement = function() {

    var localctx = new ConditionalStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, pascalParser.RULE_conditionalStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 539;
        this.ifStatement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.IF = function() {
    return this.getToken(pascalParser.IF, 0);
};

IfStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatementContext.prototype.THEN = function() {
    return this.getToken(pascalParser.THEN, 0);
};

IfStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

IfStatementContext.prototype.ELSE = function() {
    return this.getToken(pascalParser.ELSE, 0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitIfStatement(this);
	}
};

IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.IfStatementContext = IfStatementContext;

pascalParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, pascalParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 541;
        this.match(pascalParser.IF);
        this.state = 542;
        this.expression();
        this.state = 543;
        this.match(pascalParser.THEN);
        this.state = 544;
        this.statement();
        this.state = 547;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        if(la_===1) {
            this.state = 545;
            this.match(pascalParser.ELSE);
            this.state = 546;
            this.statement();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RepetetiveStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_repetetiveStatement;
    return this;
}

RepetetiveStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepetetiveStatementContext.prototype.constructor = RepetetiveStatementContext;

RepetetiveStatementContext.prototype.whileStatement = function() {
    return this.getTypedRuleContext(WhileStatementContext,0);
};

RepetetiveStatementContext.prototype.repeatStatement = function() {
    return this.getTypedRuleContext(RepeatStatementContext,0);
};

RepetetiveStatementContext.prototype.forStatement = function() {
    return this.getTypedRuleContext(ForStatementContext,0);
};

RepetetiveStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterRepetetiveStatement(this);
	}
};

RepetetiveStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitRepetetiveStatement(this);
	}
};

RepetetiveStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitRepetetiveStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.RepetetiveStatementContext = RepetetiveStatementContext;

pascalParser.prototype.repetetiveStatement = function() {

    var localctx = new RepetetiveStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, pascalParser.RULE_repetetiveStatement);
    try {
        this.state = 552;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case pascalParser.WHILE:
            this.enterOuterAlt(localctx, 1);
            this.state = 549;
            this.whileStatement();
            break;
        case pascalParser.REPEAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 550;
            this.repeatStatement();
            break;
        case pascalParser.FOR:
            this.enterOuterAlt(localctx, 3);
            this.state = 551;
            this.forStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WhileStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_whileStatement;
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.WHILE = function() {
    return this.getToken(pascalParser.WHILE, 0);
};

WhileStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileStatementContext.prototype.DO = function() {
    return this.getToken(pascalParser.DO, 0);
};

WhileStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

WhileStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterWhileStatement(this);
	}
};

WhileStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitWhileStatement(this);
	}
};

WhileStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitWhileStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.WhileStatementContext = WhileStatementContext;

pascalParser.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, pascalParser.RULE_whileStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 554;
        this.match(pascalParser.WHILE);
        this.state = 555;
        this.expression();
        this.state = 556;
        this.match(pascalParser.DO);
        this.state = 557;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RepeatStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_repeatStatement;
    return this;
}

RepeatStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepeatStatementContext.prototype.constructor = RepeatStatementContext;

RepeatStatementContext.prototype.REPEAT = function() {
    return this.getToken(pascalParser.REPEAT, 0);
};

RepeatStatementContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

RepeatStatementContext.prototype.UNTIL = function() {
    return this.getToken(pascalParser.UNTIL, 0);
};

RepeatStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RepeatStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterRepeatStatement(this);
	}
};

RepeatStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitRepeatStatement(this);
	}
};

RepeatStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitRepeatStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.RepeatStatementContext = RepeatStatementContext;

pascalParser.prototype.repeatStatement = function() {

    var localctx = new RepeatStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, pascalParser.RULE_repeatStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 559;
        this.match(pascalParser.REPEAT);
        this.state = 560;
        this.statements();
        this.state = 561;
        this.match(pascalParser.UNTIL);
        this.state = 562;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ForStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_forStatement;
    return this;
}

ForStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ForStatementContext.prototype.FOR = function() {
    return this.getToken(pascalParser.FOR, 0);
};

ForStatementContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ForStatementContext.prototype.ASSIGN = function() {
    return this.getToken(pascalParser.ASSIGN, 0);
};

ForStatementContext.prototype.forList = function() {
    return this.getTypedRuleContext(ForListContext,0);
};

ForStatementContext.prototype.DO = function() {
    return this.getToken(pascalParser.DO, 0);
};

ForStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ForStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterForStatement(this);
	}
};

ForStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitForStatement(this);
	}
};

ForStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitForStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ForStatementContext = ForStatementContext;

pascalParser.prototype.forStatement = function() {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 134, pascalParser.RULE_forStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 564;
        this.match(pascalParser.FOR);
        this.state = 565;
        this.identifier();
        this.state = 566;
        this.match(pascalParser.ASSIGN);
        this.state = 567;
        this.forList();
        this.state = 568;
        this.match(pascalParser.DO);
        this.state = 569;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ForListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_forList;
    return this;
}

ForListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForListContext.prototype.constructor = ForListContext;

ForListContext.prototype.initialValue = function() {
    return this.getTypedRuleContext(InitialValueContext,0);
};

ForListContext.prototype.finalValue = function() {
    return this.getTypedRuleContext(FinalValueContext,0);
};

ForListContext.prototype.TO = function() {
    return this.getToken(pascalParser.TO, 0);
};

ForListContext.prototype.DOWNTO = function() {
    return this.getToken(pascalParser.DOWNTO, 0);
};

ForListContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterForList(this);
	}
};

ForListContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitForList(this);
	}
};

ForListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitForList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.ForListContext = ForListContext;

pascalParser.prototype.forList = function() {

    var localctx = new ForListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 136, pascalParser.RULE_forList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 571;
        this.initialValue();
        this.state = 572;
        _la = this._input.LA(1);
        if(!(_la===pascalParser.DOWNTO || _la===pascalParser.TO)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 573;
        this.finalValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InitialValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_initialValue;
    return this;
}

InitialValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitialValueContext.prototype.constructor = InitialValueContext;

InitialValueContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InitialValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterInitialValue(this);
	}
};

InitialValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitInitialValue(this);
	}
};

InitialValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitInitialValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.InitialValueContext = InitialValueContext;

pascalParser.prototype.initialValue = function() {

    var localctx = new InitialValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 138, pascalParser.RULE_initialValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 575;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FinalValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = pascalParser.RULE_finalValue;
    return this;
}

FinalValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FinalValueContext.prototype.constructor = FinalValueContext;

FinalValueContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FinalValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.enterFinalValue(this);
	}
};

FinalValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof pascalListener ) {
        listener.exitFinalValue(this);
	}
};

FinalValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof pascalVisitor ) {
        return visitor.visitFinalValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




pascalParser.FinalValueContext = FinalValueContext;

pascalParser.prototype.finalValue = function() {

    var localctx = new FinalValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 140, pascalParser.RULE_finalValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 577;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.pascalParser = pascalParser;
