// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__27936__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27935 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__27935,(0),null);
var body = cljs.core.nthnext.call(null,vec__27935,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27937__i = 0, G__27937__a = new Array(arguments.length -  0);
while (G__27937__i < G__27937__a.length) {G__27937__a[G__27937__i] = arguments[G__27937__i + 0]; ++G__27937__i;}
  args = new cljs.core.IndexedSeq(G__27937__a,0);
} 
return G__27936__delegate.call(this,args);};
G__27936.cljs$lang$maxFixedArity = 0;
G__27936.cljs$lang$applyTo = (function (arglist__27938){
var args = cljs.core.seq(arglist__27938);
return G__27936__delegate(args);
});
G__27936.cljs$core$IFn$_invoke$arity$variadic = G__27936__delegate;
return G__27936;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25780__auto__ = (function sablono$core$update_arglists_$_iter__27943(s__27944){
return (new cljs.core.LazySeq(null,(function (){
var s__27944__$1 = s__27944;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27944__$1);
if(temp__4657__auto__){
var s__27944__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27944__$2)){
var c__25778__auto__ = cljs.core.chunk_first.call(null,s__27944__$2);
var size__25779__auto__ = cljs.core.count.call(null,c__25778__auto__);
var b__27946 = cljs.core.chunk_buffer.call(null,size__25779__auto__);
if((function (){var i__27945 = (0);
while(true){
if((i__27945 < size__25779__auto__)){
var args = cljs.core._nth.call(null,c__25778__auto__,i__27945);
cljs.core.chunk_append.call(null,b__27946,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27947 = (i__27945 + (1));
i__27945 = G__27947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27946),sablono$core$update_arglists_$_iter__27943.call(null,cljs.core.chunk_rest.call(null,s__27944__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27946),null);
}
} else {
var args = cljs.core.first.call(null,s__27944__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__27943.call(null,cljs.core.rest.call(null,s__27944__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25780__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__26073__auto__ = [];
var len__26066__auto___27953 = arguments.length;
var i__26067__auto___27954 = (0);
while(true){
if((i__26067__auto___27954 < len__26066__auto___27953)){
args__26073__auto__.push((arguments[i__26067__auto___27954]));

var G__27955 = (i__26067__auto___27954 + (1));
i__26067__auto___27954 = G__27955;
continue;
} else {
}
break;
}

var argseq__26074__auto__ = ((((0) < args__26073__auto__.length))?(new cljs.core.IndexedSeq(args__26073__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__26074__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25780__auto__ = (function sablono$core$iter__27949(s__27950){
return (new cljs.core.LazySeq(null,(function (){
var s__27950__$1 = s__27950;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27950__$1);
if(temp__4657__auto__){
var s__27950__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27950__$2)){
var c__25778__auto__ = cljs.core.chunk_first.call(null,s__27950__$2);
var size__25779__auto__ = cljs.core.count.call(null,c__25778__auto__);
var b__27952 = cljs.core.chunk_buffer.call(null,size__25779__auto__);
if((function (){var i__27951 = (0);
while(true){
if((i__27951 < size__25779__auto__)){
var style = cljs.core._nth.call(null,c__25778__auto__,i__27951);
cljs.core.chunk_append.call(null,b__27952,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27956 = (i__27951 + (1));
i__27951 = G__27956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27952),sablono$core$iter__27949.call(null,cljs.core.chunk_rest.call(null,s__27950__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27952),null);
}
} else {
var style = cljs.core.first.call(null,s__27950__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__27949.call(null,cljs.core.rest.call(null,s__27950__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25780__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq27948){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27948));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to27957 = (function sablono$core$link_to27957(var_args){
var args__26073__auto__ = [];
var len__26066__auto___27960 = arguments.length;
var i__26067__auto___27961 = (0);
while(true){
if((i__26067__auto___27961 < len__26066__auto___27960)){
args__26073__auto__.push((arguments[i__26067__auto___27961]));

var G__27962 = (i__26067__auto___27961 + (1));
i__26067__auto___27961 = G__27962;
continue;
} else {
}
break;
}

var argseq__26074__auto__ = ((((1) < args__26073__auto__.length))?(new cljs.core.IndexedSeq(args__26073__auto__.slice((1)),(0))):null);
return sablono.core.link_to27957.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26074__auto__);
});

sablono.core.link_to27957.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to27957.cljs$lang$maxFixedArity = (1);

sablono.core.link_to27957.cljs$lang$applyTo = (function (seq27958){
var G__27959 = cljs.core.first.call(null,seq27958);
var seq27958__$1 = cljs.core.next.call(null,seq27958);
return sablono.core.link_to27957.cljs$core$IFn$_invoke$arity$variadic(G__27959,seq27958__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27957);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to27963 = (function sablono$core$mail_to27963(var_args){
var args__26073__auto__ = [];
var len__26066__auto___27968 = arguments.length;
var i__26067__auto___27969 = (0);
while(true){
if((i__26067__auto___27969 < len__26066__auto___27968)){
args__26073__auto__.push((arguments[i__26067__auto___27969]));

var G__27970 = (i__26067__auto___27969 + (1));
i__26067__auto___27969 = G__27970;
continue;
} else {
}
break;
}

var argseq__26074__auto__ = ((((1) < args__26073__auto__.length))?(new cljs.core.IndexedSeq(args__26073__auto__.slice((1)),(0))):null);
return sablono.core.mail_to27963.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26074__auto__);
});

sablono.core.mail_to27963.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__27966){
var vec__27967 = p__27966;
var content = cljs.core.nth.call(null,vec__27967,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__25008__auto__ = content;
if(cljs.core.truth_(or__25008__auto__)){
return or__25008__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to27963.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to27963.cljs$lang$applyTo = (function (seq27964){
var G__27965 = cljs.core.first.call(null,seq27964);
var seq27964__$1 = cljs.core.next.call(null,seq27964);
return sablono.core.mail_to27963.cljs$core$IFn$_invoke$arity$variadic(G__27965,seq27964__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27963);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list27971 = (function sablono$core$unordered_list27971(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25780__auto__ = (function sablono$core$unordered_list27971_$_iter__27976(s__27977){
return (new cljs.core.LazySeq(null,(function (){
var s__27977__$1 = s__27977;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27977__$1);
if(temp__4657__auto__){
var s__27977__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27977__$2)){
var c__25778__auto__ = cljs.core.chunk_first.call(null,s__27977__$2);
var size__25779__auto__ = cljs.core.count.call(null,c__25778__auto__);
var b__27979 = cljs.core.chunk_buffer.call(null,size__25779__auto__);
if((function (){var i__27978 = (0);
while(true){
if((i__27978 < size__25779__auto__)){
var x = cljs.core._nth.call(null,c__25778__auto__,i__27978);
cljs.core.chunk_append.call(null,b__27979,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27980 = (i__27978 + (1));
i__27978 = G__27980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27979),sablono$core$unordered_list27971_$_iter__27976.call(null,cljs.core.chunk_rest.call(null,s__27977__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27979),null);
}
} else {
var x = cljs.core.first.call(null,s__27977__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list27971_$_iter__27976.call(null,cljs.core.rest.call(null,s__27977__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25780__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27971);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list27981 = (function sablono$core$ordered_list27981(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25780__auto__ = (function sablono$core$ordered_list27981_$_iter__27986(s__27987){
return (new cljs.core.LazySeq(null,(function (){
var s__27987__$1 = s__27987;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27987__$1);
if(temp__4657__auto__){
var s__27987__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27987__$2)){
var c__25778__auto__ = cljs.core.chunk_first.call(null,s__27987__$2);
var size__25779__auto__ = cljs.core.count.call(null,c__25778__auto__);
var b__27989 = cljs.core.chunk_buffer.call(null,size__25779__auto__);
if((function (){var i__27988 = (0);
while(true){
if((i__27988 < size__25779__auto__)){
var x = cljs.core._nth.call(null,c__25778__auto__,i__27988);
cljs.core.chunk_append.call(null,b__27989,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27990 = (i__27988 + (1));
i__27988 = G__27990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27989),sablono$core$ordered_list27981_$_iter__27986.call(null,cljs.core.chunk_rest.call(null,s__27987__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27989),null);
}
} else {
var x = cljs.core.first.call(null,s__27987__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list27981_$_iter__27986.call(null,cljs.core.rest.call(null,s__27987__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25780__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27981);
/**
 * Create an image element.
 */
sablono.core.image27991 = (function sablono$core$image27991(var_args){
var args27992 = [];
var len__26066__auto___27995 = arguments.length;
var i__26067__auto___27996 = (0);
while(true){
if((i__26067__auto___27996 < len__26066__auto___27995)){
args27992.push((arguments[i__26067__auto___27996]));

var G__27997 = (i__26067__auto___27996 + (1));
i__26067__auto___27996 = G__27997;
continue;
} else {
}
break;
}

var G__27994 = args27992.length;
switch (G__27994) {
case 1:
return sablono.core.image27991.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image27991.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27992.length)].join('')));

}
});

sablono.core.image27991.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image27991.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image27991.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27991);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__27999_SHARP_,p2__28000_SHARP_){
return [cljs.core.str(p1__27999_SHARP_),cljs.core.str("["),cljs.core.str(p2__28000_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28001_SHARP_,p2__28002_SHARP_){
return [cljs.core.str(p1__28001_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28002_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field28003 = (function sablono$core$color_field28003(var_args){
var args28004 = [];
var len__26066__auto___28071 = arguments.length;
var i__26067__auto___28072 = (0);
while(true){
if((i__26067__auto___28072 < len__26066__auto___28071)){
args28004.push((arguments[i__26067__auto___28072]));

var G__28073 = (i__26067__auto___28072 + (1));
i__26067__auto___28072 = G__28073;
continue;
} else {
}
break;
}

var G__28006 = args28004.length;
switch (G__28006) {
case 1:
return sablono.core.color_field28003.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28003.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28004.length)].join('')));

}
});

sablono.core.color_field28003.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.color_field28003.call(null,name__27924__auto__,null);
});

sablono.core.color_field28003.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.color_field28003.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28003);

/**
 * Creates a date input field.
 */
sablono.core.date_field28007 = (function sablono$core$date_field28007(var_args){
var args28008 = [];
var len__26066__auto___28075 = arguments.length;
var i__26067__auto___28076 = (0);
while(true){
if((i__26067__auto___28076 < len__26066__auto___28075)){
args28008.push((arguments[i__26067__auto___28076]));

var G__28077 = (i__26067__auto___28076 + (1));
i__26067__auto___28076 = G__28077;
continue;
} else {
}
break;
}

var G__28010 = args28008.length;
switch (G__28010) {
case 1:
return sablono.core.date_field28007.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28007.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28008.length)].join('')));

}
});

sablono.core.date_field28007.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.date_field28007.call(null,name__27924__auto__,null);
});

sablono.core.date_field28007.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.date_field28007.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28007);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28011 = (function sablono$core$datetime_field28011(var_args){
var args28012 = [];
var len__26066__auto___28079 = arguments.length;
var i__26067__auto___28080 = (0);
while(true){
if((i__26067__auto___28080 < len__26066__auto___28079)){
args28012.push((arguments[i__26067__auto___28080]));

var G__28081 = (i__26067__auto___28080 + (1));
i__26067__auto___28080 = G__28081;
continue;
} else {
}
break;
}

var G__28014 = args28012.length;
switch (G__28014) {
case 1:
return sablono.core.datetime_field28011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28012.length)].join('')));

}
});

sablono.core.datetime_field28011.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.datetime_field28011.call(null,name__27924__auto__,null);
});

sablono.core.datetime_field28011.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.datetime_field28011.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28011);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28015 = (function sablono$core$datetime_local_field28015(var_args){
var args28016 = [];
var len__26066__auto___28083 = arguments.length;
var i__26067__auto___28084 = (0);
while(true){
if((i__26067__auto___28084 < len__26066__auto___28083)){
args28016.push((arguments[i__26067__auto___28084]));

var G__28085 = (i__26067__auto___28084 + (1));
i__26067__auto___28084 = G__28085;
continue;
} else {
}
break;
}

var G__28018 = args28016.length;
switch (G__28018) {
case 1:
return sablono.core.datetime_local_field28015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28016.length)].join('')));

}
});

sablono.core.datetime_local_field28015.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.datetime_local_field28015.call(null,name__27924__auto__,null);
});

sablono.core.datetime_local_field28015.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.datetime_local_field28015.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28015);

/**
 * Creates a email input field.
 */
sablono.core.email_field28019 = (function sablono$core$email_field28019(var_args){
var args28020 = [];
var len__26066__auto___28087 = arguments.length;
var i__26067__auto___28088 = (0);
while(true){
if((i__26067__auto___28088 < len__26066__auto___28087)){
args28020.push((arguments[i__26067__auto___28088]));

var G__28089 = (i__26067__auto___28088 + (1));
i__26067__auto___28088 = G__28089;
continue;
} else {
}
break;
}

var G__28022 = args28020.length;
switch (G__28022) {
case 1:
return sablono.core.email_field28019.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28019.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28020.length)].join('')));

}
});

sablono.core.email_field28019.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.email_field28019.call(null,name__27924__auto__,null);
});

sablono.core.email_field28019.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.email_field28019.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28019);

/**
 * Creates a file input field.
 */
sablono.core.file_field28023 = (function sablono$core$file_field28023(var_args){
var args28024 = [];
var len__26066__auto___28091 = arguments.length;
var i__26067__auto___28092 = (0);
while(true){
if((i__26067__auto___28092 < len__26066__auto___28091)){
args28024.push((arguments[i__26067__auto___28092]));

var G__28093 = (i__26067__auto___28092 + (1));
i__26067__auto___28092 = G__28093;
continue;
} else {
}
break;
}

var G__28026 = args28024.length;
switch (G__28026) {
case 1:
return sablono.core.file_field28023.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28023.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28024.length)].join('')));

}
});

sablono.core.file_field28023.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.file_field28023.call(null,name__27924__auto__,null);
});

sablono.core.file_field28023.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.file_field28023.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28023);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28027 = (function sablono$core$hidden_field28027(var_args){
var args28028 = [];
var len__26066__auto___28095 = arguments.length;
var i__26067__auto___28096 = (0);
while(true){
if((i__26067__auto___28096 < len__26066__auto___28095)){
args28028.push((arguments[i__26067__auto___28096]));

var G__28097 = (i__26067__auto___28096 + (1));
i__26067__auto___28096 = G__28097;
continue;
} else {
}
break;
}

var G__28030 = args28028.length;
switch (G__28030) {
case 1:
return sablono.core.hidden_field28027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28028.length)].join('')));

}
});

sablono.core.hidden_field28027.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.hidden_field28027.call(null,name__27924__auto__,null);
});

sablono.core.hidden_field28027.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.hidden_field28027.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28027);

/**
 * Creates a month input field.
 */
sablono.core.month_field28031 = (function sablono$core$month_field28031(var_args){
var args28032 = [];
var len__26066__auto___28099 = arguments.length;
var i__26067__auto___28100 = (0);
while(true){
if((i__26067__auto___28100 < len__26066__auto___28099)){
args28032.push((arguments[i__26067__auto___28100]));

var G__28101 = (i__26067__auto___28100 + (1));
i__26067__auto___28100 = G__28101;
continue;
} else {
}
break;
}

var G__28034 = args28032.length;
switch (G__28034) {
case 1:
return sablono.core.month_field28031.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28031.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28032.length)].join('')));

}
});

sablono.core.month_field28031.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.month_field28031.call(null,name__27924__auto__,null);
});

sablono.core.month_field28031.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.month_field28031.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28031);

/**
 * Creates a number input field.
 */
sablono.core.number_field28035 = (function sablono$core$number_field28035(var_args){
var args28036 = [];
var len__26066__auto___28103 = arguments.length;
var i__26067__auto___28104 = (0);
while(true){
if((i__26067__auto___28104 < len__26066__auto___28103)){
args28036.push((arguments[i__26067__auto___28104]));

var G__28105 = (i__26067__auto___28104 + (1));
i__26067__auto___28104 = G__28105;
continue;
} else {
}
break;
}

var G__28038 = args28036.length;
switch (G__28038) {
case 1:
return sablono.core.number_field28035.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28035.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28036.length)].join('')));

}
});

sablono.core.number_field28035.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.number_field28035.call(null,name__27924__auto__,null);
});

sablono.core.number_field28035.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.number_field28035.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28035);

/**
 * Creates a password input field.
 */
sablono.core.password_field28039 = (function sablono$core$password_field28039(var_args){
var args28040 = [];
var len__26066__auto___28107 = arguments.length;
var i__26067__auto___28108 = (0);
while(true){
if((i__26067__auto___28108 < len__26066__auto___28107)){
args28040.push((arguments[i__26067__auto___28108]));

var G__28109 = (i__26067__auto___28108 + (1));
i__26067__auto___28108 = G__28109;
continue;
} else {
}
break;
}

var G__28042 = args28040.length;
switch (G__28042) {
case 1:
return sablono.core.password_field28039.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28039.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28040.length)].join('')));

}
});

sablono.core.password_field28039.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.password_field28039.call(null,name__27924__auto__,null);
});

sablono.core.password_field28039.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.password_field28039.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28039);

/**
 * Creates a range input field.
 */
sablono.core.range_field28043 = (function sablono$core$range_field28043(var_args){
var args28044 = [];
var len__26066__auto___28111 = arguments.length;
var i__26067__auto___28112 = (0);
while(true){
if((i__26067__auto___28112 < len__26066__auto___28111)){
args28044.push((arguments[i__26067__auto___28112]));

var G__28113 = (i__26067__auto___28112 + (1));
i__26067__auto___28112 = G__28113;
continue;
} else {
}
break;
}

var G__28046 = args28044.length;
switch (G__28046) {
case 1:
return sablono.core.range_field28043.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28043.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28044.length)].join('')));

}
});

sablono.core.range_field28043.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.range_field28043.call(null,name__27924__auto__,null);
});

sablono.core.range_field28043.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.range_field28043.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28043);

/**
 * Creates a search input field.
 */
sablono.core.search_field28047 = (function sablono$core$search_field28047(var_args){
var args28048 = [];
var len__26066__auto___28115 = arguments.length;
var i__26067__auto___28116 = (0);
while(true){
if((i__26067__auto___28116 < len__26066__auto___28115)){
args28048.push((arguments[i__26067__auto___28116]));

var G__28117 = (i__26067__auto___28116 + (1));
i__26067__auto___28116 = G__28117;
continue;
} else {
}
break;
}

var G__28050 = args28048.length;
switch (G__28050) {
case 1:
return sablono.core.search_field28047.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28047.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28048.length)].join('')));

}
});

sablono.core.search_field28047.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.search_field28047.call(null,name__27924__auto__,null);
});

sablono.core.search_field28047.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.search_field28047.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28047);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28051 = (function sablono$core$tel_field28051(var_args){
var args28052 = [];
var len__26066__auto___28119 = arguments.length;
var i__26067__auto___28120 = (0);
while(true){
if((i__26067__auto___28120 < len__26066__auto___28119)){
args28052.push((arguments[i__26067__auto___28120]));

var G__28121 = (i__26067__auto___28120 + (1));
i__26067__auto___28120 = G__28121;
continue;
} else {
}
break;
}

var G__28054 = args28052.length;
switch (G__28054) {
case 1:
return sablono.core.tel_field28051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28052.length)].join('')));

}
});

sablono.core.tel_field28051.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.tel_field28051.call(null,name__27924__auto__,null);
});

sablono.core.tel_field28051.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.tel_field28051.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28051);

/**
 * Creates a text input field.
 */
sablono.core.text_field28055 = (function sablono$core$text_field28055(var_args){
var args28056 = [];
var len__26066__auto___28123 = arguments.length;
var i__26067__auto___28124 = (0);
while(true){
if((i__26067__auto___28124 < len__26066__auto___28123)){
args28056.push((arguments[i__26067__auto___28124]));

var G__28125 = (i__26067__auto___28124 + (1));
i__26067__auto___28124 = G__28125;
continue;
} else {
}
break;
}

var G__28058 = args28056.length;
switch (G__28058) {
case 1:
return sablono.core.text_field28055.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28055.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28056.length)].join('')));

}
});

sablono.core.text_field28055.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.text_field28055.call(null,name__27924__auto__,null);
});

sablono.core.text_field28055.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.text_field28055.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28055);

/**
 * Creates a time input field.
 */
sablono.core.time_field28059 = (function sablono$core$time_field28059(var_args){
var args28060 = [];
var len__26066__auto___28127 = arguments.length;
var i__26067__auto___28128 = (0);
while(true){
if((i__26067__auto___28128 < len__26066__auto___28127)){
args28060.push((arguments[i__26067__auto___28128]));

var G__28129 = (i__26067__auto___28128 + (1));
i__26067__auto___28128 = G__28129;
continue;
} else {
}
break;
}

var G__28062 = args28060.length;
switch (G__28062) {
case 1:
return sablono.core.time_field28059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28060.length)].join('')));

}
});

sablono.core.time_field28059.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.time_field28059.call(null,name__27924__auto__,null);
});

sablono.core.time_field28059.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.time_field28059.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28059);

/**
 * Creates a url input field.
 */
sablono.core.url_field28063 = (function sablono$core$url_field28063(var_args){
var args28064 = [];
var len__26066__auto___28131 = arguments.length;
var i__26067__auto___28132 = (0);
while(true){
if((i__26067__auto___28132 < len__26066__auto___28131)){
args28064.push((arguments[i__26067__auto___28132]));

var G__28133 = (i__26067__auto___28132 + (1));
i__26067__auto___28132 = G__28133;
continue;
} else {
}
break;
}

var G__28066 = args28064.length;
switch (G__28066) {
case 1:
return sablono.core.url_field28063.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28063.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28064.length)].join('')));

}
});

sablono.core.url_field28063.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.url_field28063.call(null,name__27924__auto__,null);
});

sablono.core.url_field28063.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.url_field28063.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28063);

/**
 * Creates a week input field.
 */
sablono.core.week_field28067 = (function sablono$core$week_field28067(var_args){
var args28068 = [];
var len__26066__auto___28135 = arguments.length;
var i__26067__auto___28136 = (0);
while(true){
if((i__26067__auto___28136 < len__26066__auto___28135)){
args28068.push((arguments[i__26067__auto___28136]));

var G__28137 = (i__26067__auto___28136 + (1));
i__26067__auto___28136 = G__28137;
continue;
} else {
}
break;
}

var G__28070 = args28068.length;
switch (G__28070) {
case 1:
return sablono.core.week_field28067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28068.length)].join('')));

}
});

sablono.core.week_field28067.cljs$core$IFn$_invoke$arity$1 = (function (name__27924__auto__){
return sablono.core.week_field28067.call(null,name__27924__auto__,null);
});

sablono.core.week_field28067.cljs$core$IFn$_invoke$arity$2 = (function (name__27924__auto__,value__27925__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__27924__auto__,value__27925__auto__);
});

sablono.core.week_field28067.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28067);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28139 = (function sablono$core$check_box28139(var_args){
var args28140 = [];
var len__26066__auto___28143 = arguments.length;
var i__26067__auto___28144 = (0);
while(true){
if((i__26067__auto___28144 < len__26066__auto___28143)){
args28140.push((arguments[i__26067__auto___28144]));

var G__28145 = (i__26067__auto___28144 + (1));
i__26067__auto___28144 = G__28145;
continue;
} else {
}
break;
}

var G__28142 = args28140.length;
switch (G__28142) {
case 1:
return sablono.core.check_box28139.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28139.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28139.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28140.length)].join('')));

}
});

sablono.core.check_box28139.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box28139.call(null,name,null);
});

sablono.core.check_box28139.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box28139.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box28139.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28139.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28139);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28147 = (function sablono$core$radio_button28147(var_args){
var args28148 = [];
var len__26066__auto___28151 = arguments.length;
var i__26067__auto___28152 = (0);
while(true){
if((i__26067__auto___28152 < len__26066__auto___28151)){
args28148.push((arguments[i__26067__auto___28152]));

var G__28153 = (i__26067__auto___28152 + (1));
i__26067__auto___28152 = G__28153;
continue;
} else {
}
break;
}

var G__28150 = args28148.length;
switch (G__28150) {
case 1:
return sablono.core.radio_button28147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28147.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28148.length)].join('')));

}
});

sablono.core.radio_button28147.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button28147.call(null,group,null);
});

sablono.core.radio_button28147.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button28147.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button28147.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28147.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28147);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28155 = (function sablono$core$select_options28155(coll){
var iter__25780__auto__ = (function sablono$core$select_options28155_$_iter__28164(s__28165){
return (new cljs.core.LazySeq(null,(function (){
var s__28165__$1 = s__28165;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28165__$1);
if(temp__4657__auto__){
var s__28165__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28165__$2)){
var c__25778__auto__ = cljs.core.chunk_first.call(null,s__28165__$2);
var size__25779__auto__ = cljs.core.count.call(null,c__25778__auto__);
var b__28167 = cljs.core.chunk_buffer.call(null,size__25779__auto__);
if((function (){var i__28166 = (0);
while(true){
if((i__28166 < size__25779__auto__)){
var x = cljs.core._nth.call(null,c__25778__auto__,i__28166);
cljs.core.chunk_append.call(null,b__28167,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28170 = x;
var text = cljs.core.nth.call(null,vec__28170,(0),null);
var val = cljs.core.nth.call(null,vec__28170,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28170,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options28155.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28172 = (i__28166 + (1));
i__28166 = G__28172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28167),sablono$core$select_options28155_$_iter__28164.call(null,cljs.core.chunk_rest.call(null,s__28165__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28167),null);
}
} else {
var x = cljs.core.first.call(null,s__28165__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28171 = x;
var text = cljs.core.nth.call(null,vec__28171,(0),null);
var val = cljs.core.nth.call(null,vec__28171,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28171,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options28155.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28155_$_iter__28164.call(null,cljs.core.rest.call(null,s__28165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25780__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28155);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28173 = (function sablono$core$drop_down28173(var_args){
var args28174 = [];
var len__26066__auto___28177 = arguments.length;
var i__26067__auto___28178 = (0);
while(true){
if((i__26067__auto___28178 < len__26066__auto___28177)){
args28174.push((arguments[i__26067__auto___28178]));

var G__28179 = (i__26067__auto___28178 + (1));
i__26067__auto___28178 = G__28179;
continue;
} else {
}
break;
}

var G__28176 = args28174.length;
switch (G__28176) {
case 2:
return sablono.core.drop_down28173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28173.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28174.length)].join('')));

}
});

sablono.core.drop_down28173.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28173.call(null,name,options,null);
});

sablono.core.drop_down28173.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down28173.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28173);
/**
 * Creates a text area element.
 */
sablono.core.text_area28181 = (function sablono$core$text_area28181(var_args){
var args28182 = [];
var len__26066__auto___28185 = arguments.length;
var i__26067__auto___28186 = (0);
while(true){
if((i__26067__auto___28186 < len__26066__auto___28185)){
args28182.push((arguments[i__26067__auto___28186]));

var G__28187 = (i__26067__auto___28186 + (1));
i__26067__auto___28186 = G__28187;
continue;
} else {
}
break;
}

var G__28184 = args28182.length;
switch (G__28184) {
case 1:
return sablono.core.text_area28181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28182.length)].join('')));

}
});

sablono.core.text_area28181.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area28181.call(null,name,null);
});

sablono.core.text_area28181.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area28181.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28181);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28189 = (function sablono$core$label28189(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28189);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28190 = (function sablono$core$submit_button28190(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28190);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28191 = (function sablono$core$reset_button28191(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28191);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28192 = (function sablono$core$form_to28192(var_args){
var args__26073__auto__ = [];
var len__26066__auto___28197 = arguments.length;
var i__26067__auto___28198 = (0);
while(true){
if((i__26067__auto___28198 < len__26066__auto___28197)){
args__26073__auto__.push((arguments[i__26067__auto___28198]));

var G__28199 = (i__26067__auto___28198 + (1));
i__26067__auto___28198 = G__28199;
continue;
} else {
}
break;
}

var argseq__26074__auto__ = ((((1) < args__26073__auto__.length))?(new cljs.core.IndexedSeq(args__26073__auto__.slice((1)),(0))):null);
return sablono.core.form_to28192.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26074__auto__);
});

sablono.core.form_to28192.cljs$core$IFn$_invoke$arity$variadic = (function (p__28195,body){
var vec__28196 = p__28195;
var method = cljs.core.nth.call(null,vec__28196,(0),null);
var action = cljs.core.nth.call(null,vec__28196,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to28192.cljs$lang$maxFixedArity = (1);

sablono.core.form_to28192.cljs$lang$applyTo = (function (seq28193){
var G__28194 = cljs.core.first.call(null,seq28193);
var seq28193__$1 = cljs.core.next.call(null,seq28193);
return sablono.core.form_to28192.cljs$core$IFn$_invoke$arity$variadic(G__28194,seq28193__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28192);

//# sourceMappingURL=core.js.map?rel=1525285173190