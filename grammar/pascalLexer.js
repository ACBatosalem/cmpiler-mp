// Generated from pascal.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002@\u01ef\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0004H\tH\u0004I\tI\u0004J\tJ\u0004K\tK\u0004L\tL\u0004",
    "M\tM\u0004N\tN\u0004O\tO\u0004P\tP\u0004Q\tQ\u0004R\tR\u0004S\tS\u0004",
    "T\tT\u0004U\tU\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003",
    "#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'",
    "\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003",
    "*\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u00030\u0003",
    "0\u00030\u00030\u00030\u00031\u00031\u00031\u00032\u00032\u00032\u0003",
    "2\u00032\u00033\u00033\u00033\u00033\u00034\u00034\u00034\u00034\u0003",
    "4\u00034\u00035\u00035\u00036\u00036\u00037\u00037\u00038\u00038\u0003",
    "9\u00039\u00039\u0003:\u0003:\u0003;\u0003;\u0003<\u0003<\u0003=\u0003",
    "=\u0003=\u0003>\u0003>\u0003?\u0003?\u0003?\u0003@\u0003@\u0003@\u0003",
    "A\u0003A\u0003B\u0003B\u0003C\u0003C\u0003D\u0003D\u0003E\u0003E\u0003",
    "F\u0003F\u0003F\u0003G\u0003G\u0003H\u0003H\u0003H\u0003I\u0003I\u0003",
    "J\u0003J\u0003J\u0003K\u0003K\u0003K\u0003K\u0003K\u0003K\u0003K\u0003",
    "L\u0003L\u0003L\u0003L\u0003L\u0003M\u0003M\u0003M\u0003M\u0003M\u0003",
    "M\u0003N\u0003N\u0003N\u0003N\u0003O\u0003O\u0003O\u0003O\u0003P\u0005",
    "P\u01ba\nP\u0003P\u0003P\u0003P\u0003P\u0003Q\u0003Q\u0003Q\u0003Q\u0007",
    "Q\u01c4\nQ\fQ\u000eQ\u01c7\u000bQ\u0003Q\u0003Q\u0003Q\u0003Q\u0003",
    "Q\u0003R\u0003R\u0007R\u01d0\nR\fR\u000eR\u01d3\u000bR\u0003R\u0003",
    "R\u0003R\u0003R\u0003S\u0006S\u01da\nS\rS\u000eS\u01db\u0003T\u0003",
    "T\u0007T\u01e0\nT\fT\u000eT\u01e3\u000bT\u0003U\u0003U\u0003U\u0003",
    "U\u0007U\u01e9\nU\fU\u000eU\u01ec\u000bU\u0003U\u0003U\u0004\u01c5\u01d1",
    "\u0002V\u0003\u0002\u0005\u0002\u0007\u0002\t\u0002\u000b\u0002\r\u0002",
    "\u000f\u0002\u0011\u0002\u0013\u0002\u0015\u0002\u0017\u0002\u0019\u0002",
    "\u001b\u0002\u001d\u0002\u001f\u0002!\u0002#\u0002%\u0002\'\u0002)\u0002",
    "+\u0002-\u0002/\u00031\u00043\u00055\u00067\u00079\b;\t=\n?\u000bA\f",
    "C\rE\u000eG\u000fI\u0010K\u0011M\u0012O\u0013Q\u0014S\u0015U\u0016W",
    "\u0017Y\u0018[\u0019]\u001a_\u001ba\u001cc\u001de\u001eg\u001fi k!m",
    "\"o#q$s%u&w\'y({)}*\u007f+\u0081,\u0083-\u0085.\u0087/\u00890\u008b",
    "1\u008d2\u008f3\u00914\u00935\u00956\u00977\u00998\u009b9\u009d:\u009f",
    ";\u00a1<\u00a3=\u00a5>\u00a7?\u00a9@\u0003\u0002\u001c\u0004\u0002C",
    "Ccc\u0004\u0002DDdd\u0004\u0002EEee\u0004\u0002FFff\u0004\u0002GGgg",
    "\u0004\u0002HHhh\u0004\u0002IIii\u0004\u0002JJjj\u0004\u0002KKkk\u0004",
    "\u0002NNnn\u0004\u0002OOoo\u0004\u0002PPpp\u0004\u0002QQqq\u0004\u0002",
    "RRrr\u0004\u0002TTtt\u0004\u0002UUuu\u0004\u0002VVvv\u0004\u0002WWw",
    "w\u0004\u0002XXxx\u0004\u0002YYyy\u0004\u0002ZZzz\u0004\u0002[[{{\u0003",
    "\u00022;\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0003\u0002))\u0002",
    "\u01df\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002",
    "\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u0002",
    "7\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003",
    "\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002",
    "\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002",
    "\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002",
    "\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002",
    "M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003",
    "\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002",
    "\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002\u0002",
    "\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002\u0002",
    "\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002\u0002",
    "c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002g\u0003",
    "\u0002\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002k\u0003\u0002",
    "\u0002\u0002\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003\u0002\u0002",
    "\u0002\u0002q\u0003\u0002\u0002\u0002\u0002s\u0003\u0002\u0002\u0002",
    "\u0002u\u0003\u0002\u0002\u0002\u0002w\u0003\u0002\u0002\u0002\u0002",
    "y\u0003\u0002\u0002\u0002\u0002{\u0003\u0002\u0002\u0002\u0002}\u0003",
    "\u0002\u0002\u0002\u0002\u007f\u0003\u0002\u0002\u0002\u0002\u0081\u0003",
    "\u0002\u0002\u0002\u0002\u0083\u0003\u0002\u0002\u0002\u0002\u0085\u0003",
    "\u0002\u0002\u0002\u0002\u0087\u0003\u0002\u0002\u0002\u0002\u0089\u0003",
    "\u0002\u0002\u0002\u0002\u008b\u0003\u0002\u0002\u0002\u0002\u008d\u0003",
    "\u0002\u0002\u0002\u0002\u008f\u0003\u0002\u0002\u0002\u0002\u0091\u0003",
    "\u0002\u0002\u0002\u0002\u0093\u0003\u0002\u0002\u0002\u0002\u0095\u0003",
    "\u0002\u0002\u0002\u0002\u0097\u0003\u0002\u0002\u0002\u0002\u0099\u0003",
    "\u0002\u0002\u0002\u0002\u009b\u0003\u0002\u0002\u0002\u0002\u009d\u0003",
    "\u0002\u0002\u0002\u0002\u009f\u0003\u0002\u0002\u0002\u0002\u00a1\u0003",
    "\u0002\u0002\u0002\u0002\u00a3\u0003\u0002\u0002\u0002\u0002\u00a5\u0003",
    "\u0002\u0002\u0002\u0002\u00a7\u0003\u0002\u0002\u0002\u0002\u00a9\u0003",
    "\u0002\u0002\u0002\u0003\u00ab\u0003\u0002\u0002\u0002\u0005\u00ad\u0003",
    "\u0002\u0002\u0002\u0007\u00af\u0003\u0002\u0002\u0002\t\u00b1\u0003",
    "\u0002\u0002\u0002\u000b\u00b3\u0003\u0002\u0002\u0002\r\u00b5\u0003",
    "\u0002\u0002\u0002\u000f\u00b7\u0003\u0002\u0002\u0002\u0011\u00b9\u0003",
    "\u0002\u0002\u0002\u0013\u00bb\u0003\u0002\u0002\u0002\u0015\u00bd\u0003",
    "\u0002\u0002\u0002\u0017\u00bf\u0003\u0002\u0002\u0002\u0019\u00c1\u0003",
    "\u0002\u0002\u0002\u001b\u00c3\u0003\u0002\u0002\u0002\u001d\u00c5\u0003",
    "\u0002\u0002\u0002\u001f\u00c7\u0003\u0002\u0002\u0002!\u00c9\u0003",
    "\u0002\u0002\u0002#\u00cb\u0003\u0002\u0002\u0002%\u00cd\u0003\u0002",
    "\u0002\u0002\'\u00cf\u0003\u0002\u0002\u0002)\u00d1\u0003\u0002\u0002",
    "\u0002+\u00d3\u0003\u0002\u0002\u0002-\u00d5\u0003\u0002\u0002\u0002",
    "/\u00d7\u0003\u0002\u0002\u00021\u00db\u0003\u0002\u0002\u00023\u00e1",
    "\u0003\u0002\u0002\u00025\u00e7\u0003\u0002\u0002\u00027\u00ef\u0003",
    "\u0002\u0002\u00029\u00f4\u0003\u0002\u0002\u0002;\u00f9\u0003\u0002",
    "\u0002\u0002=\u00ff\u0003\u0002\u0002\u0002?\u0103\u0003\u0002\u0002",
    "\u0002A\u0106\u0003\u0002\u0002\u0002C\u010b\u0003\u0002\u0002\u0002",
    "E\u010f\u0003\u0002\u0002\u0002G\u0113\u0003\u0002\u0002\u0002I\u011c",
    "\u0003\u0002\u0002\u0002K\u011f\u0003\u0002\u0002\u0002M\u0122\u0003",
    "\u0002\u0002\u0002O\u012a\u0003\u0002\u0002\u0002Q\u0130\u0003\u0002",
    "\u0002\u0002S\u0134\u0003\u0002\u0002\u0002U\u0138\u0003\u0002\u0002",
    "\u0002W\u013b\u0003\u0002\u0002\u0002Y\u013e\u0003\u0002\u0002\u0002",
    "[\u0148\u0003\u0002\u0002\u0002]\u0150\u0003\u0002\u0002\u0002_\u0154",
    "\u0003\u0002\u0002\u0002a\u0159\u0003\u0002\u0002\u0002c\u015c\u0003",
    "\u0002\u0002\u0002e\u0161\u0003\u0002\u0002\u0002g\u0165\u0003\u0002",
    "\u0002\u0002i\u016b\u0003\u0002\u0002\u0002k\u016d\u0003\u0002\u0002",
    "\u0002m\u016f\u0003\u0002\u0002\u0002o\u0171\u0003\u0002\u0002\u0002",
    "q\u0173\u0003\u0002\u0002\u0002s\u0176\u0003\u0002\u0002\u0002u\u0178",
    "\u0003\u0002\u0002\u0002w\u017a\u0003\u0002\u0002\u0002y\u017c\u0003",
    "\u0002\u0002\u0002{\u017f\u0003\u0002\u0002\u0002}\u0181\u0003\u0002",
    "\u0002\u0002\u007f\u0184\u0003\u0002\u0002\u0002\u0081\u0187\u0003\u0002",
    "\u0002\u0002\u0083\u0189\u0003\u0002\u0002\u0002\u0085\u018b\u0003\u0002",
    "\u0002\u0002\u0087\u018d\u0003\u0002\u0002\u0002\u0089\u018f\u0003\u0002",
    "\u0002\u0002\u008b\u0191\u0003\u0002\u0002\u0002\u008d\u0194\u0003\u0002",
    "\u0002\u0002\u008f\u0196\u0003\u0002\u0002\u0002\u0091\u0199\u0003\u0002",
    "\u0002\u0002\u0093\u019b\u0003\u0002\u0002\u0002\u0095\u019e\u0003\u0002",
    "\u0002\u0002\u0097\u01a5\u0003\u0002\u0002\u0002\u0099\u01aa\u0003\u0002",
    "\u0002\u0002\u009b\u01b0\u0003\u0002\u0002\u0002\u009d\u01b4\u0003\u0002",
    "\u0002\u0002\u009f\u01b9\u0003\u0002\u0002\u0002\u00a1\u01bf\u0003\u0002",
    "\u0002\u0002\u00a3\u01cd\u0003\u0002\u0002\u0002\u00a5\u01d9\u0003\u0002",
    "\u0002\u0002\u00a7\u01dd\u0003\u0002\u0002\u0002\u00a9\u01e4\u0003\u0002",
    "\u0002\u0002\u00ab\u00ac\t\u0002\u0002\u0002\u00ac\u0004\u0003\u0002",
    "\u0002\u0002\u00ad\u00ae\t\u0003\u0002\u0002\u00ae\u0006\u0003\u0002",
    "\u0002\u0002\u00af\u00b0\t\u0004\u0002\u0002\u00b0\b\u0003\u0002\u0002",
    "\u0002\u00b1\u00b2\t\u0005\u0002\u0002\u00b2\n\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\t\u0006\u0002\u0002\u00b4\f\u0003\u0002\u0002\u0002\u00b5",
    "\u00b6\t\u0007\u0002\u0002\u00b6\u000e\u0003\u0002\u0002\u0002\u00b7",
    "\u00b8\t\b\u0002\u0002\u00b8\u0010\u0003\u0002\u0002\u0002\u00b9\u00ba",
    "\t\t\u0002\u0002\u00ba\u0012\u0003\u0002\u0002\u0002\u00bb\u00bc\t\n",
    "\u0002\u0002\u00bc\u0014\u0003\u0002\u0002\u0002\u00bd\u00be\t\u000b",
    "\u0002\u0002\u00be\u0016\u0003\u0002\u0002\u0002\u00bf\u00c0\t\f\u0002",
    "\u0002\u00c0\u0018\u0003\u0002\u0002\u0002\u00c1\u00c2\t\r\u0002\u0002",
    "\u00c2\u001a\u0003\u0002\u0002\u0002\u00c3\u00c4\t\u000e\u0002\u0002",
    "\u00c4\u001c\u0003\u0002\u0002\u0002\u00c5\u00c6\t\u000f\u0002\u0002",
    "\u00c6\u001e\u0003\u0002\u0002\u0002\u00c7\u00c8\t\u0010\u0002\u0002",
    "\u00c8 \u0003\u0002\u0002\u0002\u00c9\u00ca\t\u0011\u0002\u0002\u00ca",
    "\"\u0003\u0002\u0002\u0002\u00cb\u00cc\t\u0012\u0002\u0002\u00cc$\u0003",
    "\u0002\u0002\u0002\u00cd\u00ce\t\u0013\u0002\u0002\u00ce&\u0003\u0002",
    "\u0002\u0002\u00cf\u00d0\t\u0014\u0002\u0002\u00d0(\u0003\u0002\u0002",
    "\u0002\u00d1\u00d2\t\u0015\u0002\u0002\u00d2*\u0003\u0002\u0002\u0002",
    "\u00d3\u00d4\t\u0016\u0002\u0002\u00d4,\u0003\u0002\u0002\u0002\u00d5",
    "\u00d6\t\u0017\u0002\u0002\u00d6.\u0003\u0002\u0002\u0002\u00d7\u00d8",
    "\u0005\u0003\u0002\u0002\u00d8\u00d9\u0005\u0019\r\u0002\u00d9\u00da",
    "\u0005\t\u0005\u0002\u00da0\u0003\u0002\u0002\u0002\u00db\u00dc\u0005",
    "\u0003\u0002\u0002\u00dc\u00dd\u0005\u001f\u0010\u0002\u00dd\u00de\u0005",
    "\u001f\u0010\u0002\u00de\u00df\u0005\u0003\u0002\u0002\u00df\u00e0\u0005",
    "-\u0017\u0002\u00e02\u0003\u0002\u0002\u0002\u00e1\u00e2\u0005\u0005",
    "\u0003\u0002\u00e2\u00e3\u0005\u000b\u0006\u0002\u00e3\u00e4\u0005\u000f",
    "\b\u0002\u00e4\u00e5\u0005\u0013\n\u0002\u00e5\u00e6\u0005\u0019\r\u0002",
    "\u00e64\u0003\u0002\u0002\u0002\u00e7\u00e8\u0005\u0005\u0003\u0002",
    "\u00e8\u00e9\u0005\u001b\u000e\u0002\u00e9\u00ea\u0005\u001b\u000e\u0002",
    "\u00ea\u00eb\u0005\u0015\u000b\u0002\u00eb\u00ec\u0005\u000b\u0006\u0002",
    "\u00ec\u00ed\u0005\u0003\u0002\u0002\u00ed\u00ee\u0005\u0019\r\u0002",
    "\u00ee6\u0003\u0002\u0002\u0002\u00ef\u00f0\u0005\u0007\u0004\u0002",
    "\u00f0\u00f1\u0005\u0003\u0002\u0002\u00f1\u00f2\u0005!\u0011\u0002",
    "\u00f2\u00f3\u0005\u000b\u0006\u0002\u00f38\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\u0005\u0007\u0004\u0002\u00f5\u00f6\u0005\u0011\t\u0002",
    "\u00f6\u00f7\u0005\u0003\u0002\u0002\u00f7\u00f8\u0005\u001f\u0010\u0002",
    "\u00f8:\u0003\u0002\u0002\u0002\u00f9\u00fa\u0005\u0007\u0004\u0002",
    "\u00fa\u00fb\u0005\u001b\u000e\u0002\u00fb\u00fc\u0005\u0019\r\u0002",
    "\u00fc\u00fd\u0005!\u0011\u0002\u00fd\u00fe\u0005#\u0012\u0002\u00fe",
    "<\u0003\u0002\u0002\u0002\u00ff\u0100\u0005\t\u0005\u0002\u0100\u0101",
    "\u0005\u0013\n\u0002\u0101\u0102\u0005\'\u0014\u0002\u0102>\u0003\u0002",
    "\u0002\u0002\u0103\u0104\u0005\t\u0005\u0002\u0104\u0105\u0005\u001b",
    "\u000e\u0002\u0105@\u0003\u0002\u0002\u0002\u0106\u0107\u0005\u000b",
    "\u0006\u0002\u0107\u0108\u0005\u0015\u000b\u0002\u0108\u0109\u0005!",
    "\u0011\u0002\u0109\u010a\u0005\u000b\u0006\u0002\u010aB\u0003\u0002",
    "\u0002\u0002\u010b\u010c\u0005\u000b\u0006\u0002\u010c\u010d\u0005\u0019",
    "\r\u0002\u010d\u010e\u0005\t\u0005\u0002\u010eD\u0003\u0002\u0002\u0002",
    "\u010f\u0110\u0005\r\u0007\u0002\u0110\u0111\u0005\u001b\u000e\u0002",
    "\u0111\u0112\u0005\u001f\u0010\u0002\u0112F\u0003\u0002\u0002\u0002",
    "\u0113\u0114\u0005\r\u0007\u0002\u0114\u0115\u0005%\u0013\u0002\u0115",
    "\u0116\u0005\u0019\r\u0002\u0116\u0117\u0005\u0007\u0004\u0002\u0117",
    "\u0118\u0005#\u0012\u0002\u0118\u0119\u0005\u0013\n\u0002\u0119\u011a",
    "\u0005\u001b\u000e\u0002\u011a\u011b\u0005\u0019\r\u0002\u011bH\u0003",
    "\u0002\u0002\u0002\u011c\u011d\u0005\u0013\n\u0002\u011d\u011e\u0005",
    "\r\u0007\u0002\u011eJ\u0003\u0002\u0002\u0002\u011f\u0120\u0005\u0013",
    "\n\u0002\u0120\u0121\u0005\u0019\r\u0002\u0121L\u0003\u0002\u0002\u0002",
    "\u0122\u0123\u0005\u0013\n\u0002\u0123\u0124\u0005\u0019\r\u0002\u0124",
    "\u0125\u0005#\u0012\u0002\u0125\u0126\u0005\u000b\u0006\u0002\u0126",
    "\u0127\u0005\u000f\b\u0002\u0127\u0128\u0005\u000b\u0006\u0002\u0128",
    "\u0129\u0005\u001f\u0010\u0002\u0129N\u0003\u0002\u0002\u0002\u012a",
    "\u012b\u0005\u0015\u000b\u0002\u012b\u012c\u0005\u0003\u0002\u0002\u012c",
    "\u012d\u0005\u0005\u0003\u0002\u012d\u012e\u0005\u000b\u0006\u0002\u012e",
    "\u012f\u0005\u0015\u000b\u0002\u012fP\u0003\u0002\u0002\u0002\u0130",
    "\u0131\u0005\u0017\f\u0002\u0131\u0132\u0005\u001b\u000e\u0002\u0132",
    "\u0133\u0005\t\u0005\u0002\u0133R\u0003\u0002\u0002\u0002\u0134\u0135",
    "\u0005\u0019\r\u0002\u0135\u0136\u0005\u001b\u000e\u0002\u0136\u0137",
    "\u0005#\u0012\u0002\u0137T\u0003\u0002\u0002\u0002\u0138\u0139\u0005",
    "\u001b\u000e\u0002\u0139\u013a\u0005\r\u0007\u0002\u013aV\u0003\u0002",
    "\u0002\u0002\u013b\u013c\u0005\u001b\u000e\u0002\u013c\u013d\u0005\u001f",
    "\u0010\u0002\u013dX\u0003\u0002\u0002\u0002\u013e\u013f\u0005\u001d",
    "\u000f\u0002\u013f\u0140\u0005\u001f\u0010\u0002\u0140\u0141\u0005\u001b",
    "\u000e\u0002\u0141\u0142\u0005\u0007\u0004\u0002\u0142\u0143\u0005\u000b",
    "\u0006\u0002\u0143\u0144\u0005\t\u0005\u0002\u0144\u0145\u0005%\u0013",
    "\u0002\u0145\u0146\u0005\u001f\u0010\u0002\u0146\u0147\u0005\u000b\u0006",
    "\u0002\u0147Z\u0003\u0002\u0002\u0002\u0148\u0149\u0005\u001d\u000f",
    "\u0002\u0149\u014a\u0005\u001f\u0010\u0002\u014a\u014b\u0005\u001b\u000e",
    "\u0002\u014b\u014c\u0005\u000f\b\u0002\u014c\u014d\u0005\u001f\u0010",
    "\u0002\u014d\u014e\u0005\u0003\u0002\u0002\u014e\u014f\u0005\u0017\f",
    "\u0002\u014f\\\u0003\u0002\u0002\u0002\u0150\u0151\u0005!\u0011\u0002",
    "\u0151\u0152\u0005\u000b\u0006\u0002\u0152\u0153\u0005#\u0012\u0002",
    "\u0153^\u0003\u0002\u0002\u0002\u0154\u0155\u0005#\u0012\u0002\u0155",
    "\u0156\u0005\u0011\t\u0002\u0156\u0157\u0005\u000b\u0006\u0002\u0157",
    "\u0158\u0005\u0019\r\u0002\u0158`\u0003\u0002\u0002\u0002\u0159\u015a",
    "\u0005#\u0012\u0002\u015a\u015b\u0005\u001b\u000e\u0002\u015bb\u0003",
    "\u0002\u0002\u0002\u015c\u015d\u0005#\u0012\u0002\u015d\u015e\u0005",
    "-\u0017\u0002\u015e\u015f\u0005\u001d\u000f\u0002\u015f\u0160\u0005",
    "\u000b\u0006\u0002\u0160d\u0003\u0002\u0002\u0002\u0161\u0162\u0005",
    "\'\u0014\u0002\u0162\u0163\u0005\u0003\u0002\u0002\u0163\u0164\u0005",
    "\u001f\u0010\u0002\u0164f\u0003\u0002\u0002\u0002\u0165\u0166\u0005",
    ")\u0015\u0002\u0166\u0167\u0005\u0011\t\u0002\u0167\u0168\u0005\u0013",
    "\n\u0002\u0168\u0169\u0005\u0015\u000b\u0002\u0169\u016a\u0005\u000b",
    "\u0006\u0002\u016ah\u0003\u0002\u0002\u0002\u016b\u016c\u0007-\u0002",
    "\u0002\u016cj\u0003\u0002\u0002\u0002\u016d\u016e\u0007/\u0002\u0002",
    "\u016el\u0003\u0002\u0002\u0002\u016f\u0170\u0007,\u0002\u0002\u0170",
    "n\u0003\u0002\u0002\u0002\u0171\u0172\u0007=\u0002\u0002\u0172p\u0003",
    "\u0002\u0002\u0002\u0173\u0174\u0007<\u0002\u0002\u0174\u0175\u0007",
    "?\u0002\u0002\u0175r\u0003\u0002\u0002\u0002\u0176\u0177\u0007.\u0002",
    "\u0002\u0177t\u0003\u0002\u0002\u0002\u0178\u0179\u0007<\u0002\u0002",
    "\u0179v\u0003\u0002\u0002\u0002\u017a\u017b\u0007?\u0002\u0002\u017b",
    "x\u0003\u0002\u0002\u0002\u017c\u017d\u0007>\u0002\u0002\u017d\u017e",
    "\u0007@\u0002\u0002\u017ez\u0003\u0002\u0002\u0002\u017f\u0180\u0007",
    ">\u0002\u0002\u0180|\u0003\u0002\u0002\u0002\u0181\u0182\u0007>\u0002",
    "\u0002\u0182\u0183\u0007?\u0002\u0002\u0183~\u0003\u0002\u0002\u0002",
    "\u0184\u0185\u0007@\u0002\u0002\u0185\u0186\u0007?\u0002\u0002\u0186",
    "\u0080\u0003\u0002\u0002\u0002\u0187\u0188\u0007@\u0002\u0002\u0188",
    "\u0082\u0003\u0002\u0002\u0002\u0189\u018a\u0007*\u0002\u0002\u018a",
    "\u0084\u0003\u0002\u0002\u0002\u018b\u018c\u0007+\u0002\u0002\u018c",
    "\u0086\u0003\u0002\u0002\u0002\u018d\u018e\u0007B\u0002\u0002\u018e",
    "\u0088\u0003\u0002\u0002\u0002\u018f\u0190\u0007]\u0002\u0002\u0190",
    "\u008a\u0003\u0002\u0002\u0002\u0191\u0192\u0007*\u0002\u0002\u0192",
    "\u0193\u00070\u0002\u0002\u0193\u008c\u0003\u0002\u0002\u0002\u0194",
    "\u0195\u0007_\u0002\u0002\u0195\u008e\u0003\u0002\u0002\u0002\u0196",
    "\u0197\u00070\u0002\u0002\u0197\u0198\u0007+\u0002\u0002\u0198\u0090",
    "\u0003\u0002\u0002\u0002\u0199\u019a\u00070\u0002\u0002\u019a\u0092",
    "\u0003\u0002\u0002\u0002\u019b\u019c\u00070\u0002\u0002\u019c\u019d",
    "\u00070\u0002\u0002\u019d\u0094\u0003\u0002\u0002\u0002\u019e\u019f",
    "\u0005!\u0011\u0002\u019f\u01a0\u0005#\u0012\u0002\u01a0\u01a1\u0005",
    "\u001f\u0010\u0002\u01a1\u01a2\u0005\u0013\n\u0002\u01a2\u01a3\u0005",
    "\u0019\r\u0002\u01a3\u01a4\u0005\u000f\b\u0002\u01a4\u0096\u0003\u0002",
    "\u0002\u0002\u01a5\u01a6\u0005#\u0012\u0002\u01a6\u01a7\u0005\u001f",
    "\u0010\u0002\u01a7\u01a8\u0005%\u0013\u0002\u01a8\u01a9\u0005\u000b",
    "\u0006\u0002\u01a9\u0098\u0003\u0002\u0002\u0002\u01aa\u01ab\u0005\r",
    "\u0007\u0002\u01ab\u01ac\u0005\u0003\u0002\u0002\u01ac\u01ad\u0005\u0015",
    "\u000b\u0002\u01ad\u01ae\u0005!\u0011\u0002\u01ae\u01af\u0005\u000b",
    "\u0006\u0002\u01af\u009a\u0003\u0002\u0002\u0002\u01b0\u01b1\u0007\"",
    "\u0002\u0002\u01b1\u01b2\u0003\u0002\u0002\u0002\u01b2\u01b3\bN\u0002",
    "\u0002\u01b3\u009c\u0003\u0002\u0002\u0002\u01b4\u01b5\u0007\u000b\u0002",
    "\u0002\u01b5\u01b6\u0003\u0002\u0002\u0002\u01b6\u01b7\bO\u0002\u0002",
    "\u01b7\u009e\u0003\u0002\u0002\u0002\u01b8\u01ba\u0007\u000f\u0002\u0002",
    "\u01b9\u01b8\u0003\u0002\u0002\u0002\u01b9\u01ba\u0003\u0002\u0002\u0002",
    "\u01ba\u01bb\u0003\u0002\u0002\u0002\u01bb\u01bc\u0007\f\u0002\u0002",
    "\u01bc\u01bd\u0003\u0002\u0002\u0002\u01bd\u01be\bP\u0002\u0002\u01be",
    "\u00a0\u0003\u0002\u0002\u0002\u01bf\u01c0\u0007*\u0002\u0002\u01c0",
    "\u01c1\u0007,\u0002\u0002\u01c1\u01c5\u0003\u0002\u0002\u0002\u01c2",
    "\u01c4\u000b\u0002\u0002\u0002\u01c3\u01c2\u0003\u0002\u0002\u0002\u01c4",
    "\u01c7\u0003\u0002\u0002\u0002\u01c5\u01c6\u0003\u0002\u0002\u0002\u01c5",
    "\u01c3\u0003\u0002\u0002\u0002\u01c6\u01c8\u0003\u0002\u0002\u0002\u01c7",
    "\u01c5\u0003\u0002\u0002\u0002\u01c8\u01c9\u0007,\u0002\u0002\u01c9",
    "\u01ca\u0007+\u0002\u0002\u01ca\u01cb\u0003\u0002\u0002\u0002\u01cb",
    "\u01cc\bQ\u0002\u0002\u01cc\u00a2\u0003\u0002\u0002\u0002\u01cd\u01d1",
    "\u0007}\u0002\u0002\u01ce\u01d0\u000b\u0002\u0002\u0002\u01cf\u01ce",
    "\u0003\u0002\u0002\u0002\u01d0\u01d3\u0003\u0002\u0002\u0002\u01d1\u01d2",
    "\u0003\u0002\u0002\u0002\u01d1\u01cf\u0003\u0002\u0002\u0002\u01d2\u01d4",
    "\u0003\u0002\u0002\u0002\u01d3\u01d1\u0003\u0002\u0002\u0002\u01d4\u01d5",
    "\u0007\u007f\u0002\u0002\u01d5\u01d6\u0003\u0002\u0002\u0002\u01d6\u01d7",
    "\bR\u0002\u0002\u01d7\u00a4\u0003\u0002\u0002\u0002\u01d8\u01da\t\u0018",
    "\u0002\u0002\u01d9\u01d8\u0003\u0002\u0002\u0002\u01da\u01db\u0003\u0002",
    "\u0002\u0002\u01db\u01d9\u0003\u0002\u0002\u0002\u01db\u01dc\u0003\u0002",
    "\u0002\u0002\u01dc\u00a6\u0003\u0002\u0002\u0002\u01dd\u01e1\t\u0019",
    "\u0002\u0002\u01de\u01e0\t\u001a\u0002\u0002\u01df\u01de\u0003\u0002",
    "\u0002\u0002\u01e0\u01e3\u0003\u0002\u0002\u0002\u01e1\u01df\u0003\u0002",
    "\u0002\u0002\u01e1\u01e2\u0003\u0002\u0002\u0002\u01e2\u00a8\u0003\u0002",
    "\u0002\u0002\u01e3\u01e1\u0003\u0002\u0002\u0002\u01e4\u01ea\u0007)",
    "\u0002\u0002\u01e5\u01e6\u0007)\u0002\u0002\u01e6\u01e9\u0007)\u0002",
    "\u0002\u01e7\u01e9\n\u001b\u0002\u0002\u01e8\u01e5\u0003\u0002\u0002",
    "\u0002\u01e8\u01e7\u0003\u0002\u0002\u0002\u01e9\u01ec\u0003\u0002\u0002",
    "\u0002\u01ea\u01e8\u0003\u0002\u0002\u0002\u01ea\u01eb\u0003\u0002\u0002",
    "\u0002\u01eb\u01ed\u0003\u0002\u0002\u0002\u01ec\u01ea\u0003\u0002\u0002",
    "\u0002\u01ed\u01ee\u0007)\u0002\u0002\u01ee\u00aa\u0003\u0002\u0002",
    "\u0002\n\u0002\u01b9\u01c5\u01d1\u01db\u01e1\u01e8\u01ea\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function pascalLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

pascalLexer.prototype = Object.create(antlr4.Lexer.prototype);
pascalLexer.prototype.constructor = pascalLexer;

Object.defineProperty(pascalLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

pascalLexer.EOF = antlr4.Token.EOF;
pascalLexer.AND = 1;
pascalLexer.ARRAY = 2;
pascalLexer.BEGIN = 3;
pascalLexer.BOOLEAN = 4;
pascalLexer.CASE = 5;
pascalLexer.CHAR = 6;
pascalLexer.CONST = 7;
pascalLexer.DIV = 8;
pascalLexer.DO = 9;
pascalLexer.ELSE = 10;
pascalLexer.END = 11;
pascalLexer.FOR = 12;
pascalLexer.FUNCTION = 13;
pascalLexer.IF = 14;
pascalLexer.IN = 15;
pascalLexer.INTEGER = 16;
pascalLexer.LABEL = 17;
pascalLexer.MOD = 18;
pascalLexer.NOT = 19;
pascalLexer.OF = 20;
pascalLexer.OR = 21;
pascalLexer.PROCEDURE = 22;
pascalLexer.PROGRAM = 23;
pascalLexer.SET = 24;
pascalLexer.THEN = 25;
pascalLexer.TO = 26;
pascalLexer.TYPE = 27;
pascalLexer.VAR = 28;
pascalLexer.WHILE = 29;
pascalLexer.ADD = 30;
pascalLexer.SUB = 31;
pascalLexer.MULT = 32;
pascalLexer.SEMI = 33;
pascalLexer.ASSIGN = 34;
pascalLexer.COMMA = 35;
pascalLexer.COLON = 36;
pascalLexer.EQUAL = 37;
pascalLexer.NOT_EQUAL = 38;
pascalLexer.LT = 39;
pascalLexer.LE = 40;
pascalLexer.GE = 41;
pascalLexer.GT = 42;
pascalLexer.LP = 43;
pascalLexer.RP = 44;
pascalLexer.AT = 45;
pascalLexer.LBRACK = 46;
pascalLexer.LBRACK2 = 47;
pascalLexer.RBRACK = 48;
pascalLexer.RBRACK2 = 49;
pascalLexer.DOT = 50;
pascalLexer.DOTDOT = 51;
pascalLexer.STRING = 52;
pascalLexer.TRUE = 53;
pascalLexer.FALSE = 54;
pascalLexer.WHITESPACE = 55;
pascalLexer.TAB = 56;
pascalLexer.NL = 57;
pascalLexer.COMMENT_1 = 58;
pascalLexer.COMMENT_2 = 59;
pascalLexer.NUMBER = 60;
pascalLexer.ID = 61;
pascalLexer.STRING_LITERAL = 62;

pascalLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

pascalLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

pascalLexer.prototype.literalNames = [ null, null, null, null, null, null, 
                                       null, null, null, null, null, null, 
                                       null, null, null, null, null, null, 
                                       null, null, null, null, null, null, 
                                       null, null, null, null, null, null, 
                                       "'+'", "'-'", "'*'", "';'", "':='", 
                                       "','", "':'", "'='", "'<>'", "'<'", 
                                       "'<='", "'>='", "'>'", "'('", "')'", 
                                       "'@'", "'['", "'(.'", "']'", "'.)'", 
                                       "'.'", "'..'", null, null, null, 
                                       "' '", "'\t'" ];

pascalLexer.prototype.symbolicNames = [ null, "AND", "ARRAY", "BEGIN", "BOOLEAN", 
                                        "CASE", "CHAR", "CONST", "DIV", 
                                        "DO", "ELSE", "END", "FOR", "FUNCTION", 
                                        "IF", "IN", "INTEGER", "LABEL", 
                                        "MOD", "NOT", "OF", "OR", "PROCEDURE", 
                                        "PROGRAM", "SET", "THEN", "TO", 
                                        "TYPE", "VAR", "WHILE", "ADD", "SUB", 
                                        "MULT", "SEMI", "ASSIGN", "COMMA", 
                                        "COLON", "EQUAL", "NOT_EQUAL", "LT", 
                                        "LE", "GE", "GT", "LP", "RP", "AT", 
                                        "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", 
                                        "DOT", "DOTDOT", "STRING", "TRUE", 
                                        "FALSE", "WHITESPACE", "TAB", "NL", 
                                        "COMMENT_1", "COMMENT_2", "NUMBER", 
                                        "ID", "STRING_LITERAL" ];

pascalLexer.prototype.ruleNames = [ "A", "B", "C", "D", "E", "F", "G", "H", 
                                    "I", "L", "M", "N", "O", "P", "R", "S", 
                                    "T", "U", "V", "W", "X", "Y", "AND", 
                                    "ARRAY", "BEGIN", "BOOLEAN", "CASE", 
                                    "CHAR", "CONST", "DIV", "DO", "ELSE", 
                                    "END", "FOR", "FUNCTION", "IF", "IN", 
                                    "INTEGER", "LABEL", "MOD", "NOT", "OF", 
                                    "OR", "PROCEDURE", "PROGRAM", "SET", 
                                    "THEN", "TO", "TYPE", "VAR", "WHILE", 
                                    "ADD", "SUB", "MULT", "SEMI", "ASSIGN", 
                                    "COMMA", "COLON", "EQUAL", "NOT_EQUAL", 
                                    "LT", "LE", "GE", "GT", "LP", "RP", 
                                    "AT", "LBRACK", "LBRACK2", "RBRACK", 
                                    "RBRACK2", "DOT", "DOTDOT", "STRING", 
                                    "TRUE", "FALSE", "WHITESPACE", "TAB", 
                                    "NL", "COMMENT_1", "COMMENT_2", "NUMBER", 
                                    "ID", "STRING_LITERAL" ];

pascalLexer.prototype.grammarFileName = "pascal.g4";



exports.pascalLexer = pascalLexer;

