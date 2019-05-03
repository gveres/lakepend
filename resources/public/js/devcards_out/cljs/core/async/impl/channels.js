// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331 = (function (box,val,meta27332){
this.box = box;
this.val = val;
this.meta27332 = meta27332;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27333,meta27332__$1){
var self__ = this;
var _27333__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331(self__.box,self__.val,meta27332__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27333){
var self__ = this;
var _27333__$1 = this;
return self__.meta27332;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null)))], null)),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta27332","meta27332",-2068738553,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels27331";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331.cljs$lang$ctorPrWriter = (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels27331");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels27331 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels27331(box__$1,val__$1,meta27332){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331(box__$1,val__$1,meta27332));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27331(cljs$core$async$impl$channels$box,val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__25663__auto__ = (((this$ == null))?null:this$);
var m__25664__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,this$);
} else {
var m__25664__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_27343 = self__.puts.pop();
if((putter_27343 == null)){
} else {
var put_handler_27344 = putter_27343.handler;
var val_27345 = putter_27343.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_27344)){
var put_cb_27346 = cljs.core.async.impl.protocols.commit.call(null,put_handler_27344);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_27346,put_handler_27344,val_27345,putter_27343,this$__$1){
return (function (){
return put_cb_27346.call(null,true);
});})(put_cb_27346,put_handler_27344,val_27345,putter_27343,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null)))))].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__24996__auto__ = self__.buf;
if(cljs.core.truth_(and__24996__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__24996__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__27347 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__27347;
continue;
} else {
var G__27348 = takers;
takers = G__27348;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__27334_27349 = cljs.core.seq.call(null,take_cbs);
var chunk__27335_27350 = null;
var count__27336_27351 = (0);
var i__27337_27352 = (0);
while(true){
if((i__27337_27352 < count__27336_27351)){
var f_27353 = cljs.core._nth.call(null,chunk__27335_27350,i__27337_27352);
cljs.core.async.impl.dispatch.run.call(null,f_27353);

var G__27354 = seq__27334_27349;
var G__27355 = chunk__27335_27350;
var G__27356 = count__27336_27351;
var G__27357 = (i__27337_27352 + (1));
seq__27334_27349 = G__27354;
chunk__27335_27350 = G__27355;
count__27336_27351 = G__27356;
i__27337_27352 = G__27357;
continue;
} else {
var temp__4657__auto___27358 = cljs.core.seq.call(null,seq__27334_27349);
if(temp__4657__auto___27358){
var seq__27334_27359__$1 = temp__4657__auto___27358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27334_27359__$1)){
var c__25811__auto___27360 = cljs.core.chunk_first.call(null,seq__27334_27359__$1);
var G__27361 = cljs.core.chunk_rest.call(null,seq__27334_27359__$1);
var G__27362 = c__25811__auto___27360;
var G__27363 = cljs.core.count.call(null,c__25811__auto___27360);
var G__27364 = (0);
seq__27334_27349 = G__27361;
chunk__27335_27350 = G__27362;
count__27336_27351 = G__27363;
i__27337_27352 = G__27364;
continue;
} else {
var f_27365 = cljs.core.first.call(null,seq__27334_27359__$1);
cljs.core.async.impl.dispatch.run.call(null,f_27365);

var G__27366 = cljs.core.next.call(null,seq__27334_27359__$1);
var G__27367 = null;
var G__27368 = (0);
var G__27369 = (0);
seq__27334_27349 = G__27366;
chunk__27335_27350 = G__27367;
count__27336_27351 = G__27368;
i__27337_27352 = G__27369;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"puts","puts",-1883877054,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))))].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__4655__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__4655__auto__)){
var take_cb = temp__4655__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__27338 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__24996__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__24996__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__24996__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__27370 = cbs__$1;
cbs = G__27370;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__27338,(0),null);
var cbs = cljs.core.nth.call(null,vec__27338,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__27339_27371 = cljs.core.seq.call(null,cbs);
var chunk__27340_27372 = null;
var count__27341_27373 = (0);
var i__27342_27374 = (0);
while(true){
if((i__27342_27374 < count__27341_27373)){
var cb_27375 = cljs.core._nth.call(null,chunk__27340_27372,i__27342_27374);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__27339_27371,chunk__27340_27372,count__27341_27373,i__27342_27374,cb_27375,val,vec__27338,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_27375.call(null,true);
});})(seq__27339_27371,chunk__27340_27372,count__27341_27373,i__27342_27374,cb_27375,val,vec__27338,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__27376 = seq__27339_27371;
var G__27377 = chunk__27340_27372;
var G__27378 = count__27341_27373;
var G__27379 = (i__27342_27374 + (1));
seq__27339_27371 = G__27376;
chunk__27340_27372 = G__27377;
count__27341_27373 = G__27378;
i__27342_27374 = G__27379;
continue;
} else {
var temp__4657__auto___27380 = cljs.core.seq.call(null,seq__27339_27371);
if(temp__4657__auto___27380){
var seq__27339_27381__$1 = temp__4657__auto___27380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27339_27381__$1)){
var c__25811__auto___27382 = cljs.core.chunk_first.call(null,seq__27339_27381__$1);
var G__27383 = cljs.core.chunk_rest.call(null,seq__27339_27381__$1);
var G__27384 = c__25811__auto___27382;
var G__27385 = cljs.core.count.call(null,c__25811__auto___27382);
var G__27386 = (0);
seq__27339_27371 = G__27383;
chunk__27340_27372 = G__27384;
count__27341_27373 = G__27385;
i__27342_27374 = G__27386;
continue;
} else {
var cb_27387 = cljs.core.first.call(null,seq__27339_27381__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__27339_27371,chunk__27340_27372,count__27341_27373,i__27342_27374,cb_27387,seq__27339_27381__$1,temp__4657__auto___27380,val,vec__27338,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_27387.call(null,true);
});})(seq__27339_27371,chunk__27340_27372,count__27341_27373,i__27342_27374,cb_27387,seq__27339_27381__$1,temp__4657__auto___27380,val,vec__27338,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__27388 = cljs.core.next.call(null,seq__27339_27381__$1);
var G__27389 = null;
var G__27390 = (0);
var G__27391 = (0);
seq__27339_27371 = G__27388;
chunk__27340_27372 = G__27389;
count__27341_27373 = G__27390;
i__27342_27374 = G__27391;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__24996__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__24996__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__24996__auto__;
}
})())){
var has_val = (function (){var and__24996__auto__ = self__.buf;
if(cljs.core.truth_(and__24996__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__24996__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"takes","takes",298247964,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))))].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__24996__auto__ = self__.buf;
if(cljs.core.truth_(and__24996__auto__)){
return (self__.puts.length === (0));
} else {
return and__24996__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_27392 = self__.takes.pop();
if((taker_27392 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_27392)){
var take_cb_27393 = cljs.core.async.impl.protocols.commit.call(null,taker_27392);
var val_27394 = (cljs.core.truth_((function (){var and__24996__auto__ = self__.buf;
if(cljs.core.truth_(and__24996__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__24996__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_27393,val_27394,taker_27392,this$__$1){
return (function (){
return take_cb_27393.call(null,val_27394);
});})(take_cb_27393,val_27394,taker_27392,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__25008__auto__ = exh;
if(cljs.core.truth_(or__25008__auto__)){
return or__25008__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var args27395 = [];
var len__26066__auto___27400 = arguments.length;
var i__26067__auto___27401 = (0);
while(true){
if((i__26067__auto___27401 < len__26066__auto___27400)){
args27395.push((arguments[i__26067__auto___27401]));

var G__27402 = (i__26067__auto___27401 + (1));
i__26067__auto___27401 = G__27402;
continue;
} else {
}
break;
}

var G__27397 = args27395.length;
switch (G__27397) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27395.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__27404 = null;
var G__27404__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e27398){var t = e27398;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__27404__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e27399){var t = e27399;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__27404 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__27404__1.call(this,buf__$1);
case 2:
return G__27404__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27404.cljs$core$IFn$_invoke$arity$1 = G__27404__1;
G__27404.cljs$core$IFn$_invoke$arity$2 = G__27404__2;
return G__27404;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=channels.js.map?rel=1525285172279