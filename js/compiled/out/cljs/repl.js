// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30236){
var map__30237 = p__30236;
var map__30237__$1 = (((((!((map__30237 == null))))?(((((map__30237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30237):map__30237);
var m = map__30237__$1;
var n = cljs.core.get.call(null,map__30237__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30237__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30239_30271 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30240_30272 = null;
var count__30241_30273 = (0);
var i__30242_30274 = (0);
while(true){
if((i__30242_30274 < count__30241_30273)){
var f_30275 = cljs.core._nth.call(null,chunk__30240_30272,i__30242_30274);
cljs.core.println.call(null,"  ",f_30275);


var G__30276 = seq__30239_30271;
var G__30277 = chunk__30240_30272;
var G__30278 = count__30241_30273;
var G__30279 = (i__30242_30274 + (1));
seq__30239_30271 = G__30276;
chunk__30240_30272 = G__30277;
count__30241_30273 = G__30278;
i__30242_30274 = G__30279;
continue;
} else {
var temp__5720__auto___30280 = cljs.core.seq.call(null,seq__30239_30271);
if(temp__5720__auto___30280){
var seq__30239_30281__$1 = temp__5720__auto___30280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30239_30281__$1)){
var c__4556__auto___30282 = cljs.core.chunk_first.call(null,seq__30239_30281__$1);
var G__30283 = cljs.core.chunk_rest.call(null,seq__30239_30281__$1);
var G__30284 = c__4556__auto___30282;
var G__30285 = cljs.core.count.call(null,c__4556__auto___30282);
var G__30286 = (0);
seq__30239_30271 = G__30283;
chunk__30240_30272 = G__30284;
count__30241_30273 = G__30285;
i__30242_30274 = G__30286;
continue;
} else {
var f_30287 = cljs.core.first.call(null,seq__30239_30281__$1);
cljs.core.println.call(null,"  ",f_30287);


var G__30288 = cljs.core.next.call(null,seq__30239_30281__$1);
var G__30289 = null;
var G__30290 = (0);
var G__30291 = (0);
seq__30239_30271 = G__30288;
chunk__30240_30272 = G__30289;
count__30241_30273 = G__30290;
i__30242_30274 = G__30291;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30292 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30292);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30292)))?cljs.core.second.call(null,arglists_30292):arglists_30292));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30243_30293 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30244_30294 = null;
var count__30245_30295 = (0);
var i__30246_30296 = (0);
while(true){
if((i__30246_30296 < count__30245_30295)){
var vec__30257_30297 = cljs.core._nth.call(null,chunk__30244_30294,i__30246_30296);
var name_30298 = cljs.core.nth.call(null,vec__30257_30297,(0),null);
var map__30260_30299 = cljs.core.nth.call(null,vec__30257_30297,(1),null);
var map__30260_30300__$1 = (((((!((map__30260_30299 == null))))?(((((map__30260_30299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30260_30299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30260_30299):map__30260_30299);
var doc_30301 = cljs.core.get.call(null,map__30260_30300__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30302 = cljs.core.get.call(null,map__30260_30300__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30298);

cljs.core.println.call(null," ",arglists_30302);

if(cljs.core.truth_(doc_30301)){
cljs.core.println.call(null," ",doc_30301);
} else {
}


var G__30303 = seq__30243_30293;
var G__30304 = chunk__30244_30294;
var G__30305 = count__30245_30295;
var G__30306 = (i__30246_30296 + (1));
seq__30243_30293 = G__30303;
chunk__30244_30294 = G__30304;
count__30245_30295 = G__30305;
i__30246_30296 = G__30306;
continue;
} else {
var temp__5720__auto___30307 = cljs.core.seq.call(null,seq__30243_30293);
if(temp__5720__auto___30307){
var seq__30243_30308__$1 = temp__5720__auto___30307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30243_30308__$1)){
var c__4556__auto___30309 = cljs.core.chunk_first.call(null,seq__30243_30308__$1);
var G__30310 = cljs.core.chunk_rest.call(null,seq__30243_30308__$1);
var G__30311 = c__4556__auto___30309;
var G__30312 = cljs.core.count.call(null,c__4556__auto___30309);
var G__30313 = (0);
seq__30243_30293 = G__30310;
chunk__30244_30294 = G__30311;
count__30245_30295 = G__30312;
i__30246_30296 = G__30313;
continue;
} else {
var vec__30262_30314 = cljs.core.first.call(null,seq__30243_30308__$1);
var name_30315 = cljs.core.nth.call(null,vec__30262_30314,(0),null);
var map__30265_30316 = cljs.core.nth.call(null,vec__30262_30314,(1),null);
var map__30265_30317__$1 = (((((!((map__30265_30316 == null))))?(((((map__30265_30316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30265_30316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30265_30316):map__30265_30316);
var doc_30318 = cljs.core.get.call(null,map__30265_30317__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30319 = cljs.core.get.call(null,map__30265_30317__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30315);

cljs.core.println.call(null," ",arglists_30319);

if(cljs.core.truth_(doc_30318)){
cljs.core.println.call(null," ",doc_30318);
} else {
}


var G__30320 = cljs.core.next.call(null,seq__30243_30308__$1);
var G__30321 = null;
var G__30322 = (0);
var G__30323 = (0);
seq__30243_30293 = G__30320;
chunk__30244_30294 = G__30321;
count__30245_30295 = G__30322;
i__30246_30296 = G__30323;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__30267 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30268 = null;
var count__30269 = (0);
var i__30270 = (0);
while(true){
if((i__30270 < count__30269)){
var role = cljs.core._nth.call(null,chunk__30268,i__30270);
var temp__5720__auto___30324__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30324__$1)){
var spec_30325 = temp__5720__auto___30324__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30325));
} else {
}


var G__30326 = seq__30267;
var G__30327 = chunk__30268;
var G__30328 = count__30269;
var G__30329 = (i__30270 + (1));
seq__30267 = G__30326;
chunk__30268 = G__30327;
count__30269 = G__30328;
i__30270 = G__30329;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30267);
if(temp__5720__auto____$1){
var seq__30267__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30267__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30267__$1);
var G__30330 = cljs.core.chunk_rest.call(null,seq__30267__$1);
var G__30331 = c__4556__auto__;
var G__30332 = cljs.core.count.call(null,c__4556__auto__);
var G__30333 = (0);
seq__30267 = G__30330;
chunk__30268 = G__30331;
count__30269 = G__30332;
i__30270 = G__30333;
continue;
} else {
var role = cljs.core.first.call(null,seq__30267__$1);
var temp__5720__auto___30334__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30334__$2)){
var spec_30335 = temp__5720__auto___30334__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30335));
} else {
}


var G__30336 = cljs.core.next.call(null,seq__30267__$1);
var G__30337 = null;
var G__30338 = (0);
var G__30339 = (0);
seq__30267 = G__30336;
chunk__30268 = G__30337;
count__30269 = G__30338;
i__30270 = G__30339;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30340 = cljs.core.conj.call(null,via,t);
var G__30341 = cljs.core.ex_cause.call(null,t);
via = G__30340;
t = G__30341;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30344 = datafied_throwable;
var map__30344__$1 = (((((!((map__30344 == null))))?(((((map__30344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30344):map__30344);
var via = cljs.core.get.call(null,map__30344__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30344__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30344__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30345 = cljs.core.last.call(null,via);
var map__30345__$1 = (((((!((map__30345 == null))))?(((((map__30345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30345):map__30345);
var type = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30346 = data;
var map__30346__$1 = (((((!((map__30346 == null))))?(((((map__30346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30346):map__30346);
var problems = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30347 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30347__$1 = (((((!((map__30347 == null))))?(((((map__30347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30347):map__30347);
var top_data = map__30347__$1;
var source = cljs.core.get.call(null,map__30347__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30352 = phase;
var G__30352__$1 = (((G__30352 instanceof cljs.core.Keyword))?G__30352.fqn:null);
switch (G__30352__$1) {
case "read-source":
var map__30353 = data;
var map__30353__$1 = (((((!((map__30353 == null))))?(((((map__30353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30353):map__30353);
var line = cljs.core.get.call(null,map__30353__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30353__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30355 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30355__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30355,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30355);
var G__30355__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30355__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30355__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30355__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30355__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30356 = top_data;
var G__30356__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30356,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30356);
var G__30356__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30356__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30356__$1);
var G__30356__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30356__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30356__$2);
var G__30356__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30356__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30356__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30356__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30356__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30357 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30357,(0),null);
var method = cljs.core.nth.call(null,vec__30357,(1),null);
var file = cljs.core.nth.call(null,vec__30357,(2),null);
var line = cljs.core.nth.call(null,vec__30357,(3),null);
var G__30360 = top_data;
var G__30360__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30360,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30360);
var G__30360__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30360__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30360__$1);
var G__30360__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__30360__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30360__$2);
var G__30360__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30360__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30360__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30360__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30360__$4;
}

break;
case "execution":
var vec__30361 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30361,(0),null);
var method = cljs.core.nth.call(null,vec__30361,(1),null);
var file = cljs.core.nth.call(null,vec__30361,(2),null);
var line = cljs.core.nth.call(null,vec__30361,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__30343_SHARP_){
var or__4126__auto__ = (p1__30343_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30343_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__30364 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30364__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30364,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30364);
var G__30364__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30364__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30364__$1);
var G__30364__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30364__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30364__$2);
var G__30364__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30364__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30364__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30364__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30364__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30352__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30368){
var map__30369 = p__30368;
var map__30369__$1 = (((((!((map__30369 == null))))?(((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var triage_data = map__30369__$1;
var phase = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30371 = phase;
var G__30371__$1 = (((G__30371 instanceof cljs.core.Keyword))?G__30371.fqn:null);
switch (G__30371__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30372_30381 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30373_30382 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30374_30383 = true;
var _STAR_print_fn_STAR__temp_val__30375_30384 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30374_30383);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30375_30384);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30366_SHARP_){
return cljs.core.dissoc.call(null,p1__30366_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30373_30382);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30372_30381);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30376_30385 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30377_30386 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30378_30387 = true;
var _STAR_print_fn_STAR__temp_val__30379_30388 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30378_30387);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30379_30388);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30367_SHARP_){
return cljs.core.dissoc.call(null,p1__30367_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30377_30386);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30376_30385);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30371__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1603913410552