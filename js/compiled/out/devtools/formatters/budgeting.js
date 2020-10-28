// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__22386__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__22386__auto__["add"]).call(o__22386__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__22386__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__22386__auto__["delete"]).call(o__22386__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__22386__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__22386__auto__["has"]).call(o__22386__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__24900 = data;
var target__22391__auto__ = G__24900;
if(cljs.core.truth_(target__22391__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24900)].join(''),"\n","target__22391__auto__"].join('')));
}

(target__22391__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__24900;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_24905 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_24905);
} else {
var seq__24901_24906 = cljs.core.seq.call(null,json_ml);
var chunk__24902_24907 = null;
var count__24903_24908 = (0);
var i__24904_24909 = (0);
while(true){
if((i__24904_24909 < count__24903_24908)){
var item_24910 = cljs.core._nth.call(null,chunk__24902_24907,i__24904_24909);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_24910,new_depth_budget_24905);


var G__24911 = seq__24901_24906;
var G__24912 = chunk__24902_24907;
var G__24913 = count__24903_24908;
var G__24914 = (i__24904_24909 + (1));
seq__24901_24906 = G__24911;
chunk__24902_24907 = G__24912;
count__24903_24908 = G__24913;
i__24904_24909 = G__24914;
continue;
} else {
var temp__5720__auto___24915 = cljs.core.seq.call(null,seq__24901_24906);
if(temp__5720__auto___24915){
var seq__24901_24916__$1 = temp__5720__auto___24915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24901_24916__$1)){
var c__4556__auto___24917 = cljs.core.chunk_first.call(null,seq__24901_24916__$1);
var G__24918 = cljs.core.chunk_rest.call(null,seq__24901_24916__$1);
var G__24919 = c__4556__auto___24917;
var G__24920 = cljs.core.count.call(null,c__4556__auto___24917);
var G__24921 = (0);
seq__24901_24906 = G__24918;
chunk__24902_24907 = G__24919;
count__24903_24908 = G__24920;
i__24904_24909 = G__24921;
continue;
} else {
var item_24922 = cljs.core.first.call(null,seq__24901_24916__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_24922,new_depth_budget_24905);


var G__24923 = cljs.core.next.call(null,seq__24901_24916__$1);
var G__24924 = null;
var G__24925 = (0);
var G__24926 = (0);
seq__24901_24906 = G__24923;
chunk__24902_24907 = G__24924;
count__24903_24908 = G__24925;
i__24904_24909 = G__24926;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5718__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5718__auto__)){
var initial_hierarchy_depth_budget = temp__5718__auto__;
var remaining_depth_budget = (function (){var or__4126__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1603913406639