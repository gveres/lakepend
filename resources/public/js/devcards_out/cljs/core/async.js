// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29578 = [];
var len__26066__auto___29584 = arguments.length;
var i__26067__auto___29585 = (0);
while(true){
if((i__26067__auto___29585 < len__26066__auto___29584)){
args29578.push((arguments[i__26067__auto___29585]));

var G__29586 = (i__26067__auto___29585 + (1));
i__26067__auto___29585 = G__29586;
continue;
} else {
}
break;
}

var G__29580 = args29578.length;
switch (G__29580) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29578.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29581 = (function (f,blockable,meta29582){
this.f = f;
this.blockable = blockable;
this.meta29582 = meta29582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29583,meta29582__$1){
var self__ = this;
var _29583__$1 = this;
return (new cljs.core.async.t_cljs$core$async29581(self__.f,self__.blockable,meta29582__$1));
});

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29583){
var self__ = this;
var _29583__$1 = this;
return self__.meta29582;
});

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29582","meta29582",768753485,null)], null);
});

cljs.core.async.t_cljs$core$async29581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29581";

cljs.core.async.t_cljs$core$async29581.cljs$lang$ctorPrWriter = (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async/t_cljs$core$async29581");
});

cljs.core.async.__GT_t_cljs$core$async29581 = (function cljs$core$async$__GT_t_cljs$core$async29581(f__$1,blockable__$1,meta29582){
return (new cljs.core.async.t_cljs$core$async29581(f__$1,blockable__$1,meta29582));
});

}

return (new cljs.core.async.t_cljs$core$async29581(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29590 = [];
var len__26066__auto___29593 = arguments.length;
var i__26067__auto___29594 = (0);
while(true){
if((i__26067__auto___29594 < len__26066__auto___29593)){
args29590.push((arguments[i__26067__auto___29594]));

var G__29595 = (i__26067__auto___29594 + (1));
i__26067__auto___29594 = G__29595;
continue;
} else {
}
break;
}

var G__29592 = args29590.length;
switch (G__29592) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29590.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29597 = [];
var len__26066__auto___29600 = arguments.length;
var i__26067__auto___29601 = (0);
while(true){
if((i__26067__auto___29601 < len__26066__auto___29600)){
args29597.push((arguments[i__26067__auto___29601]));

var G__29602 = (i__26067__auto___29601 + (1));
i__26067__auto___29601 = G__29602;
continue;
} else {
}
break;
}

var G__29599 = args29597.length;
switch (G__29599) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29597.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29604 = [];
var len__26066__auto___29607 = arguments.length;
var i__26067__auto___29608 = (0);
while(true){
if((i__26067__auto___29608 < len__26066__auto___29607)){
args29604.push((arguments[i__26067__auto___29608]));

var G__29609 = (i__26067__auto___29608 + (1));
i__26067__auto___29608 = G__29609;
continue;
} else {
}
break;
}

var G__29606 = args29604.length;
switch (G__29606) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29604.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29611 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29611);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29611,ret){
return (function (){
return fn1.call(null,val_29611);
});})(val_29611,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29612 = [];
var len__26066__auto___29615 = arguments.length;
var i__26067__auto___29616 = (0);
while(true){
if((i__26067__auto___29616 < len__26066__auto___29615)){
args29612.push((arguments[i__26067__auto___29616]));

var G__29617 = (i__26067__auto___29616 + (1));
i__26067__auto___29616 = G__29617;
continue;
} else {
}
break;
}

var G__29614 = args29612.length;
switch (G__29614) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29612.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25911__auto___29619 = n;
var x_29620 = (0);
while(true){
if((x_29620 < n__25911__auto___29619)){
(a[x_29620] = (0));

var G__29621 = (x_29620 + (1));
x_29620 = G__29621;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29622 = (i + (1));
i = G__29622;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29626 = (function (alt_flag,flag,meta29627){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29627 = meta29627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29628,meta29627__$1){
var self__ = this;
var _29628__$1 = this;
return (new cljs.core.async.t_cljs$core$async29626(self__.alt_flag,self__.flag,meta29627__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29628){
var self__ = this;
var _29628__$1 = this;
return self__.meta29627;
});})(flag))
;

cljs.core.async.t_cljs$core$async29626.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29626.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29627","meta29627",-1687590986,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29626";

cljs.core.async.t_cljs$core$async29626.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async/t_cljs$core$async29626");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29626 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29626(alt_flag__$1,flag__$1,meta29627){
return (new cljs.core.async.t_cljs$core$async29626(alt_flag__$1,flag__$1,meta29627));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29626(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29632 = (function (alt_handler,flag,cb,meta29633){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29633 = meta29633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29634,meta29633__$1){
var self__ = this;
var _29634__$1 = this;
return (new cljs.core.async.t_cljs$core$async29632(self__.alt_handler,self__.flag,self__.cb,meta29633__$1));
});

cljs.core.async.t_cljs$core$async29632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29634){
var self__ = this;
var _29634__$1 = this;
return self__.meta29633;
});

cljs.core.async.t_cljs$core$async29632.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29632.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29633","meta29633",822782131,null)], null);
});

cljs.core.async.t_cljs$core$async29632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29632";

cljs.core.async.t_cljs$core$async29632.cljs$lang$ctorPrWriter = (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async/t_cljs$core$async29632");
});

cljs.core.async.__GT_t_cljs$core$async29632 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29632(alt_handler__$1,flag__$1,cb__$1,meta29633){
return (new cljs.core.async.t_cljs$core$async29632(alt_handler__$1,flag__$1,cb__$1,meta29633));
});

}

return (new cljs.core.async.t_cljs$core$async29632(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29635_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29635_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29636_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29636_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25008__auto__ = wport;
if(cljs.core.truth_(or__25008__auto__)){
return or__25008__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29637 = (i + (1));
i = G__29637;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25008__auto__ = ret;
if(cljs.core.truth_(or__25008__auto__)){
return or__25008__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24996__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24996__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24996__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26073__auto__ = [];
var len__26066__auto___29643 = arguments.length;
var i__26067__auto___29644 = (0);
while(true){
if((i__26067__auto___29644 < len__26066__auto___29643)){
args__26073__auto__.push((arguments[i__26067__auto___29644]));

var G__29645 = (i__26067__auto___29644 + (1));
i__26067__auto___29644 = G__29645;
continue;
} else {
}
break;
}

var argseq__26074__auto__ = ((((1) < args__26073__auto__.length))?(new cljs.core.IndexedSeq(args__26073__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26074__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29640){
var map__29641 = p__29640;
var map__29641__$1 = ((((!((map__29641 == null)))?((((map__29641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29641):map__29641);
var opts = map__29641__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29638){
var G__29639 = cljs.core.first.call(null,seq29638);
var seq29638__$1 = cljs.core.next.call(null,seq29638);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29639,seq29638__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29646 = [];
var len__26066__auto___29696 = arguments.length;
var i__26067__auto___29697 = (0);
while(true){
if((i__26067__auto___29697 < len__26066__auto___29696)){
args29646.push((arguments[i__26067__auto___29697]));

var G__29698 = (i__26067__auto___29697 + (1));
i__26067__auto___29697 = G__29698;
continue;
} else {
}
break;
}

var G__29648 = args29646.length;
switch (G__29648) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29646.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29533__auto___29700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___29700){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___29700){
return (function (state_29672){
var state_val_29673 = (state_29672[(1)]);
if((state_val_29673 === (7))){
var inst_29668 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29674_29701 = state_29672__$1;
(statearr_29674_29701[(2)] = inst_29668);

(statearr_29674_29701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (1))){
var state_29672__$1 = state_29672;
var statearr_29675_29702 = state_29672__$1;
(statearr_29675_29702[(2)] = null);

(statearr_29675_29702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (4))){
var inst_29651 = (state_29672[(7)]);
var inst_29651__$1 = (state_29672[(2)]);
var inst_29652 = (inst_29651__$1 == null);
var state_29672__$1 = (function (){var statearr_29676 = state_29672;
(statearr_29676[(7)] = inst_29651__$1);

return statearr_29676;
})();
if(cljs.core.truth_(inst_29652)){
var statearr_29677_29703 = state_29672__$1;
(statearr_29677_29703[(1)] = (5));

} else {
var statearr_29678_29704 = state_29672__$1;
(statearr_29678_29704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (13))){
var state_29672__$1 = state_29672;
var statearr_29679_29705 = state_29672__$1;
(statearr_29679_29705[(2)] = null);

(statearr_29679_29705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (6))){
var inst_29651 = (state_29672[(7)]);
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29672__$1,(11),to,inst_29651);
} else {
if((state_val_29673 === (3))){
var inst_29670 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29672__$1,inst_29670);
} else {
if((state_val_29673 === (12))){
var state_29672__$1 = state_29672;
var statearr_29680_29706 = state_29672__$1;
(statearr_29680_29706[(2)] = null);

(statearr_29680_29706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (2))){
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29672__$1,(4),from);
} else {
if((state_val_29673 === (11))){
var inst_29661 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
if(cljs.core.truth_(inst_29661)){
var statearr_29681_29707 = state_29672__$1;
(statearr_29681_29707[(1)] = (12));

} else {
var statearr_29682_29708 = state_29672__$1;
(statearr_29682_29708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (9))){
var state_29672__$1 = state_29672;
var statearr_29683_29709 = state_29672__$1;
(statearr_29683_29709[(2)] = null);

(statearr_29683_29709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (5))){
var state_29672__$1 = state_29672;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29684_29710 = state_29672__$1;
(statearr_29684_29710[(1)] = (8));

} else {
var statearr_29685_29711 = state_29672__$1;
(statearr_29685_29711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (14))){
var inst_29666 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29686_29712 = state_29672__$1;
(statearr_29686_29712[(2)] = inst_29666);

(statearr_29686_29712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (10))){
var inst_29658 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29687_29713 = state_29672__$1;
(statearr_29687_29713[(2)] = inst_29658);

(statearr_29687_29713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (8))){
var inst_29655 = cljs.core.async.close_BANG_.call(null,to);
var state_29672__$1 = state_29672;
var statearr_29688_29714 = state_29672__$1;
(statearr_29688_29714[(2)] = inst_29655);

(statearr_29688_29714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___29700))
;
return ((function (switch__29421__auto__,c__29533__auto___29700){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_29692 = [null,null,null,null,null,null,null,null];
(statearr_29692[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_29692[(1)] = (1));

return statearr_29692;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_29672){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_29672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e29693){if((e29693 instanceof Object)){
var ex__29425__auto__ = e29693;
var statearr_29694_29715 = state_29672;
(statearr_29694_29715[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29716 = state_29672;
state_29672 = G__29716;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_29672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_29672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___29700))
})();
var state__29535__auto__ = (function (){var statearr_29695 = f__29534__auto__.call(null);
(statearr_29695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___29700);

return statearr_29695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___29700))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29900){
var vec__29901 = p__29900;
var v = cljs.core.nth.call(null,vec__29901,(0),null);
var p = cljs.core.nth.call(null,vec__29901,(1),null);
var job = vec__29901;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29533__auto___30083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___30083,res,vec__29901,v,p,job,jobs,results){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___30083,res,vec__29901,v,p,job,jobs,results){
return (function (state_29906){
var state_val_29907 = (state_29906[(1)]);
if((state_val_29907 === (1))){
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29906__$1,(2),res,v);
} else {
if((state_val_29907 === (2))){
var inst_29903 = (state_29906[(2)]);
var inst_29904 = cljs.core.async.close_BANG_.call(null,res);
var state_29906__$1 = (function (){var statearr_29908 = state_29906;
(statearr_29908[(7)] = inst_29903);

return statearr_29908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29906__$1,inst_29904);
} else {
return null;
}
}
});})(c__29533__auto___30083,res,vec__29901,v,p,job,jobs,results))
;
return ((function (switch__29421__auto__,c__29533__auto___30083,res,vec__29901,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0 = (function (){
var statearr_29912 = [null,null,null,null,null,null,null,null];
(statearr_29912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__);

(statearr_29912[(1)] = (1));

return statearr_29912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1 = (function (state_29906){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_29906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e29913){if((e29913 instanceof Object)){
var ex__29425__auto__ = e29913;
var statearr_29914_30084 = state_29906;
(statearr_29914_30084[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30085 = state_29906;
state_29906 = G__30085;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__ = function(state_29906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1.call(this,state_29906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___30083,res,vec__29901,v,p,job,jobs,results))
})();
var state__29535__auto__ = (function (){var statearr_29915 = f__29534__auto__.call(null);
(statearr_29915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___30083);

return statearr_29915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___30083,res,vec__29901,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29916){
var vec__29917 = p__29916;
var v = cljs.core.nth.call(null,vec__29917,(0),null);
var p = cljs.core.nth.call(null,vec__29917,(1),null);
var job = vec__29917;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25911__auto___30086 = n;
var __30087 = (0);
while(true){
if((__30087 < n__25911__auto___30086)){
var G__29918_30088 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29918_30088) {
case "compute":
var c__29533__auto___30090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30087,c__29533__auto___30090,G__29918_30088,n__25911__auto___30086,jobs,results,process,async){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (__30087,c__29533__auto___30090,G__29918_30088,n__25911__auto___30086,jobs,results,process,async){
return (function (state_29931){
var state_val_29932 = (state_29931[(1)]);
if((state_val_29932 === (1))){
var state_29931__$1 = state_29931;
var statearr_29933_30091 = state_29931__$1;
(statearr_29933_30091[(2)] = null);

(statearr_29933_30091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (2))){
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29931__$1,(4),jobs);
} else {
if((state_val_29932 === (3))){
var inst_29929 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29931__$1,inst_29929);
} else {
if((state_val_29932 === (4))){
var inst_29921 = (state_29931[(2)]);
var inst_29922 = process.call(null,inst_29921);
var state_29931__$1 = state_29931;
if(cljs.core.truth_(inst_29922)){
var statearr_29934_30092 = state_29931__$1;
(statearr_29934_30092[(1)] = (5));

} else {
var statearr_29935_30093 = state_29931__$1;
(statearr_29935_30093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (5))){
var state_29931__$1 = state_29931;
var statearr_29936_30094 = state_29931__$1;
(statearr_29936_30094[(2)] = null);

(statearr_29936_30094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (6))){
var state_29931__$1 = state_29931;
var statearr_29937_30095 = state_29931__$1;
(statearr_29937_30095[(2)] = null);

(statearr_29937_30095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (7))){
var inst_29927 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
var statearr_29938_30096 = state_29931__$1;
(statearr_29938_30096[(2)] = inst_29927);

(statearr_29938_30096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30087,c__29533__auto___30090,G__29918_30088,n__25911__auto___30086,jobs,results,process,async))
;
return ((function (__30087,switch__29421__auto__,c__29533__auto___30090,G__29918_30088,n__25911__auto___30086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0 = (function (){
var statearr_29942 = [null,null,null,null,null,null,null];
(statearr_29942[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__);

(statearr_29942[(1)] = (1));

return statearr_29942;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1 = (function (state_29931){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_29931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e29943){if((e29943 instanceof Object)){
var ex__29425__auto__ = e29943;
var statearr_29944_30097 = state_29931;
(statearr_29944_30097[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30098 = state_29931;
state_29931 = G__30098;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__ = function(state_29931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1.call(this,state_29931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__;
})()
;})(__30087,switch__29421__auto__,c__29533__auto___30090,G__29918_30088,n__25911__auto___30086,jobs,results,process,async))
})();
var state__29535__auto__ = (function (){var statearr_29945 = f__29534__auto__.call(null);
(statearr_29945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___30090);

return statearr_29945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(__30087,c__29533__auto___30090,G__29918_30088,n__25911__auto___30086,jobs,results,process,async))
);


break;
case "async":
var c__29533__auto___30099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30087,c__29533__auto___30099,G__29918_30088,n__25911__auto___30086,jobs,results,process,async){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (__30087,c__29533__auto___30099,G__29918_30088,n__25911__auto___30086,jobs,results,process,async){
return (function (state_29958){
var state_val_29959 = (state_29958[(1)]);
if((state_val_29959 === (1))){
var state_29958__$1 = state_29958;
var statearr_29960_30100 = state_29958__$1;
(statearr_29960_30100[(2)] = null);

(statearr_29960_30100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29959 === (2))){
var state_29958__$1 = state_29958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29958__$1,(4),jobs);
} else {
if((state_val_29959 === (3))){
var inst_29956 = (state_29958[(2)]);
var state_29958__$1 = state_29958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29958__$1,inst_29956);
} else {
if((state_val_29959 === (4))){
var inst_29948 = (state_29958[(2)]);
var inst_29949 = async.call(null,inst_29948);
var state_29958__$1 = state_29958;
if(cljs.core.truth_(inst_29949)){
var statearr_29961_30101 = state_29958__$1;
(statearr_29961_30101[(1)] = (5));

} else {
var statearr_29962_30102 = state_29958__$1;
(statearr_29962_30102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29959 === (5))){
var state_29958__$1 = state_29958;
var statearr_29963_30103 = state_29958__$1;
(statearr_29963_30103[(2)] = null);

(statearr_29963_30103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29959 === (6))){
var state_29958__$1 = state_29958;
var statearr_29964_30104 = state_29958__$1;
(statearr_29964_30104[(2)] = null);

(statearr_29964_30104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29959 === (7))){
var inst_29954 = (state_29958[(2)]);
var state_29958__$1 = state_29958;
var statearr_29965_30105 = state_29958__$1;
(statearr_29965_30105[(2)] = inst_29954);

(statearr_29965_30105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30087,c__29533__auto___30099,G__29918_30088,n__25911__auto___30086,jobs,results,process,async))
;
return ((function (__30087,switch__29421__auto__,c__29533__auto___30099,G__29918_30088,n__25911__auto___30086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0 = (function (){
var statearr_29969 = [null,null,null,null,null,null,null];
(statearr_29969[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__);

(statearr_29969[(1)] = (1));

return statearr_29969;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1 = (function (state_29958){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_29958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e29970){if((e29970 instanceof Object)){
var ex__29425__auto__ = e29970;
var statearr_29971_30106 = state_29958;
(statearr_29971_30106[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30107 = state_29958;
state_29958 = G__30107;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__ = function(state_29958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1.call(this,state_29958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__;
})()
;})(__30087,switch__29421__auto__,c__29533__auto___30099,G__29918_30088,n__25911__auto___30086,jobs,results,process,async))
})();
var state__29535__auto__ = (function (){var statearr_29972 = f__29534__auto__.call(null);
(statearr_29972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___30099);

return statearr_29972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(__30087,c__29533__auto___30099,G__29918_30088,n__25911__auto___30086,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30108 = (__30087 + (1));
__30087 = G__30108;
continue;
} else {
}
break;
}

var c__29533__auto___30109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___30109,jobs,results,process,async){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___30109,jobs,results,process,async){
return (function (state_29994){
var state_val_29995 = (state_29994[(1)]);
if((state_val_29995 === (1))){
var state_29994__$1 = state_29994;
var statearr_29996_30110 = state_29994__$1;
(statearr_29996_30110[(2)] = null);

(statearr_29996_30110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (2))){
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29994__$1,(4),from);
} else {
if((state_val_29995 === (3))){
var inst_29992 = (state_29994[(2)]);
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29994__$1,inst_29992);
} else {
if((state_val_29995 === (4))){
var inst_29975 = (state_29994[(7)]);
var inst_29975__$1 = (state_29994[(2)]);
var inst_29976 = (inst_29975__$1 == null);
var state_29994__$1 = (function (){var statearr_29997 = state_29994;
(statearr_29997[(7)] = inst_29975__$1);

return statearr_29997;
})();
if(cljs.core.truth_(inst_29976)){
var statearr_29998_30111 = state_29994__$1;
(statearr_29998_30111[(1)] = (5));

} else {
var statearr_29999_30112 = state_29994__$1;
(statearr_29999_30112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (5))){
var inst_29978 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29994__$1 = state_29994;
var statearr_30000_30113 = state_29994__$1;
(statearr_30000_30113[(2)] = inst_29978);

(statearr_30000_30113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (6))){
var inst_29980 = (state_29994[(8)]);
var inst_29975 = (state_29994[(7)]);
var inst_29980__$1 = cljs.core.async.chan.call(null,(1));
var inst_29981 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29982 = [inst_29975,inst_29980__$1];
var inst_29983 = (new cljs.core.PersistentVector(null,2,(5),inst_29981,inst_29982,null));
var state_29994__$1 = (function (){var statearr_30001 = state_29994;
(statearr_30001[(8)] = inst_29980__$1);

return statearr_30001;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29994__$1,(8),jobs,inst_29983);
} else {
if((state_val_29995 === (7))){
var inst_29990 = (state_29994[(2)]);
var state_29994__$1 = state_29994;
var statearr_30002_30114 = state_29994__$1;
(statearr_30002_30114[(2)] = inst_29990);

(statearr_30002_30114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (8))){
var inst_29980 = (state_29994[(8)]);
var inst_29985 = (state_29994[(2)]);
var state_29994__$1 = (function (){var statearr_30003 = state_29994;
(statearr_30003[(9)] = inst_29985);

return statearr_30003;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29994__$1,(9),results,inst_29980);
} else {
if((state_val_29995 === (9))){
var inst_29987 = (state_29994[(2)]);
var state_29994__$1 = (function (){var statearr_30004 = state_29994;
(statearr_30004[(10)] = inst_29987);

return statearr_30004;
})();
var statearr_30005_30115 = state_29994__$1;
(statearr_30005_30115[(2)] = null);

(statearr_30005_30115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___30109,jobs,results,process,async))
;
return ((function (switch__29421__auto__,c__29533__auto___30109,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0 = (function (){
var statearr_30009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__);

(statearr_30009[(1)] = (1));

return statearr_30009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1 = (function (state_29994){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_29994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e30010){if((e30010 instanceof Object)){
var ex__29425__auto__ = e30010;
var statearr_30011_30116 = state_29994;
(statearr_30011_30116[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30117 = state_29994;
state_29994 = G__30117;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__ = function(state_29994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1.call(this,state_29994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___30109,jobs,results,process,async))
})();
var state__29535__auto__ = (function (){var statearr_30012 = f__29534__auto__.call(null);
(statearr_30012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___30109);

return statearr_30012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___30109,jobs,results,process,async))
);


var c__29533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto__,jobs,results,process,async){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto__,jobs,results,process,async){
return (function (state_30050){
var state_val_30051 = (state_30050[(1)]);
if((state_val_30051 === (7))){
var inst_30046 = (state_30050[(2)]);
var state_30050__$1 = state_30050;
var statearr_30052_30118 = state_30050__$1;
(statearr_30052_30118[(2)] = inst_30046);

(statearr_30052_30118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (20))){
var state_30050__$1 = state_30050;
var statearr_30053_30119 = state_30050__$1;
(statearr_30053_30119[(2)] = null);

(statearr_30053_30119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (1))){
var state_30050__$1 = state_30050;
var statearr_30054_30120 = state_30050__$1;
(statearr_30054_30120[(2)] = null);

(statearr_30054_30120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (4))){
var inst_30015 = (state_30050[(7)]);
var inst_30015__$1 = (state_30050[(2)]);
var inst_30016 = (inst_30015__$1 == null);
var state_30050__$1 = (function (){var statearr_30055 = state_30050;
(statearr_30055[(7)] = inst_30015__$1);

return statearr_30055;
})();
if(cljs.core.truth_(inst_30016)){
var statearr_30056_30121 = state_30050__$1;
(statearr_30056_30121[(1)] = (5));

} else {
var statearr_30057_30122 = state_30050__$1;
(statearr_30057_30122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (15))){
var inst_30028 = (state_30050[(8)]);
var state_30050__$1 = state_30050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30050__$1,(18),to,inst_30028);
} else {
if((state_val_30051 === (21))){
var inst_30041 = (state_30050[(2)]);
var state_30050__$1 = state_30050;
var statearr_30058_30123 = state_30050__$1;
(statearr_30058_30123[(2)] = inst_30041);

(statearr_30058_30123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (13))){
var inst_30043 = (state_30050[(2)]);
var state_30050__$1 = (function (){var statearr_30059 = state_30050;
(statearr_30059[(9)] = inst_30043);

return statearr_30059;
})();
var statearr_30060_30124 = state_30050__$1;
(statearr_30060_30124[(2)] = null);

(statearr_30060_30124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (6))){
var inst_30015 = (state_30050[(7)]);
var state_30050__$1 = state_30050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30050__$1,(11),inst_30015);
} else {
if((state_val_30051 === (17))){
var inst_30036 = (state_30050[(2)]);
var state_30050__$1 = state_30050;
if(cljs.core.truth_(inst_30036)){
var statearr_30061_30125 = state_30050__$1;
(statearr_30061_30125[(1)] = (19));

} else {
var statearr_30062_30126 = state_30050__$1;
(statearr_30062_30126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (3))){
var inst_30048 = (state_30050[(2)]);
var state_30050__$1 = state_30050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30050__$1,inst_30048);
} else {
if((state_val_30051 === (12))){
var inst_30025 = (state_30050[(10)]);
var state_30050__$1 = state_30050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30050__$1,(14),inst_30025);
} else {
if((state_val_30051 === (2))){
var state_30050__$1 = state_30050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30050__$1,(4),results);
} else {
if((state_val_30051 === (19))){
var state_30050__$1 = state_30050;
var statearr_30063_30127 = state_30050__$1;
(statearr_30063_30127[(2)] = null);

(statearr_30063_30127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (11))){
var inst_30025 = (state_30050[(2)]);
var state_30050__$1 = (function (){var statearr_30064 = state_30050;
(statearr_30064[(10)] = inst_30025);

return statearr_30064;
})();
var statearr_30065_30128 = state_30050__$1;
(statearr_30065_30128[(2)] = null);

(statearr_30065_30128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (9))){
var state_30050__$1 = state_30050;
var statearr_30066_30129 = state_30050__$1;
(statearr_30066_30129[(2)] = null);

(statearr_30066_30129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (5))){
var state_30050__$1 = state_30050;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30067_30130 = state_30050__$1;
(statearr_30067_30130[(1)] = (8));

} else {
var statearr_30068_30131 = state_30050__$1;
(statearr_30068_30131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (14))){
var inst_30028 = (state_30050[(8)]);
var inst_30030 = (state_30050[(11)]);
var inst_30028__$1 = (state_30050[(2)]);
var inst_30029 = (inst_30028__$1 == null);
var inst_30030__$1 = cljs.core.not.call(null,inst_30029);
var state_30050__$1 = (function (){var statearr_30069 = state_30050;
(statearr_30069[(8)] = inst_30028__$1);

(statearr_30069[(11)] = inst_30030__$1);

return statearr_30069;
})();
if(inst_30030__$1){
var statearr_30070_30132 = state_30050__$1;
(statearr_30070_30132[(1)] = (15));

} else {
var statearr_30071_30133 = state_30050__$1;
(statearr_30071_30133[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (16))){
var inst_30030 = (state_30050[(11)]);
var state_30050__$1 = state_30050;
var statearr_30072_30134 = state_30050__$1;
(statearr_30072_30134[(2)] = inst_30030);

(statearr_30072_30134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (10))){
var inst_30022 = (state_30050[(2)]);
var state_30050__$1 = state_30050;
var statearr_30073_30135 = state_30050__$1;
(statearr_30073_30135[(2)] = inst_30022);

(statearr_30073_30135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (18))){
var inst_30033 = (state_30050[(2)]);
var state_30050__$1 = state_30050;
var statearr_30074_30136 = state_30050__$1;
(statearr_30074_30136[(2)] = inst_30033);

(statearr_30074_30136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (8))){
var inst_30019 = cljs.core.async.close_BANG_.call(null,to);
var state_30050__$1 = state_30050;
var statearr_30075_30137 = state_30050__$1;
(statearr_30075_30137[(2)] = inst_30019);

(statearr_30075_30137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto__,jobs,results,process,async))
;
return ((function (switch__29421__auto__,c__29533__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0 = (function (){
var statearr_30079 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__);

(statearr_30079[(1)] = (1));

return statearr_30079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1 = (function (state_30050){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_30050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e30080){if((e30080 instanceof Object)){
var ex__29425__auto__ = e30080;
var statearr_30081_30138 = state_30050;
(statearr_30081_30138[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30139 = state_30050;
state_30050 = G__30139;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__ = function(state_30050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1.call(this,state_30050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29422__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto__,jobs,results,process,async))
})();
var state__29535__auto__ = (function (){var statearr_30082 = f__29534__auto__.call(null);
(statearr_30082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto__);

return statearr_30082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto__,jobs,results,process,async))
);

return c__29533__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30140 = [];
var len__26066__auto___30143 = arguments.length;
var i__26067__auto___30144 = (0);
while(true){
if((i__26067__auto___30144 < len__26066__auto___30143)){
args30140.push((arguments[i__26067__auto___30144]));

var G__30145 = (i__26067__auto___30144 + (1));
i__26067__auto___30144 = G__30145;
continue;
} else {
}
break;
}

var G__30142 = args30140.length;
switch (G__30142) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30140.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30147 = [];
var len__26066__auto___30150 = arguments.length;
var i__26067__auto___30151 = (0);
while(true){
if((i__26067__auto___30151 < len__26066__auto___30150)){
args30147.push((arguments[i__26067__auto___30151]));

var G__30152 = (i__26067__auto___30151 + (1));
i__26067__auto___30151 = G__30152;
continue;
} else {
}
break;
}

var G__30149 = args30147.length;
switch (G__30149) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30147.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30154 = [];
var len__26066__auto___30207 = arguments.length;
var i__26067__auto___30208 = (0);
while(true){
if((i__26067__auto___30208 < len__26066__auto___30207)){
args30154.push((arguments[i__26067__auto___30208]));

var G__30209 = (i__26067__auto___30208 + (1));
i__26067__auto___30208 = G__30209;
continue;
} else {
}
break;
}

var G__30156 = args30154.length;
switch (G__30156) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30154.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29533__auto___30211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___30211,tc,fc){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___30211,tc,fc){
return (function (state_30182){
var state_val_30183 = (state_30182[(1)]);
if((state_val_30183 === (7))){
var inst_30178 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
var statearr_30184_30212 = state_30182__$1;
(statearr_30184_30212[(2)] = inst_30178);

(statearr_30184_30212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (1))){
var state_30182__$1 = state_30182;
var statearr_30185_30213 = state_30182__$1;
(statearr_30185_30213[(2)] = null);

(statearr_30185_30213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (4))){
var inst_30159 = (state_30182[(7)]);
var inst_30159__$1 = (state_30182[(2)]);
var inst_30160 = (inst_30159__$1 == null);
var state_30182__$1 = (function (){var statearr_30186 = state_30182;
(statearr_30186[(7)] = inst_30159__$1);

return statearr_30186;
})();
if(cljs.core.truth_(inst_30160)){
var statearr_30187_30214 = state_30182__$1;
(statearr_30187_30214[(1)] = (5));

} else {
var statearr_30188_30215 = state_30182__$1;
(statearr_30188_30215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (13))){
var state_30182__$1 = state_30182;
var statearr_30189_30216 = state_30182__$1;
(statearr_30189_30216[(2)] = null);

(statearr_30189_30216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (6))){
var inst_30159 = (state_30182[(7)]);
var inst_30165 = p.call(null,inst_30159);
var state_30182__$1 = state_30182;
if(cljs.core.truth_(inst_30165)){
var statearr_30190_30217 = state_30182__$1;
(statearr_30190_30217[(1)] = (9));

} else {
var statearr_30191_30218 = state_30182__$1;
(statearr_30191_30218[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (3))){
var inst_30180 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30182__$1,inst_30180);
} else {
if((state_val_30183 === (12))){
var state_30182__$1 = state_30182;
var statearr_30192_30219 = state_30182__$1;
(statearr_30192_30219[(2)] = null);

(statearr_30192_30219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (2))){
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30182__$1,(4),ch);
} else {
if((state_val_30183 === (11))){
var inst_30159 = (state_30182[(7)]);
var inst_30169 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30182__$1,(8),inst_30169,inst_30159);
} else {
if((state_val_30183 === (9))){
var state_30182__$1 = state_30182;
var statearr_30193_30220 = state_30182__$1;
(statearr_30193_30220[(2)] = tc);

(statearr_30193_30220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (5))){
var inst_30162 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30163 = cljs.core.async.close_BANG_.call(null,fc);
var state_30182__$1 = (function (){var statearr_30194 = state_30182;
(statearr_30194[(8)] = inst_30162);

return statearr_30194;
})();
var statearr_30195_30221 = state_30182__$1;
(statearr_30195_30221[(2)] = inst_30163);

(statearr_30195_30221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (14))){
var inst_30176 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
var statearr_30196_30222 = state_30182__$1;
(statearr_30196_30222[(2)] = inst_30176);

(statearr_30196_30222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (10))){
var state_30182__$1 = state_30182;
var statearr_30197_30223 = state_30182__$1;
(statearr_30197_30223[(2)] = fc);

(statearr_30197_30223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (8))){
var inst_30171 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
if(cljs.core.truth_(inst_30171)){
var statearr_30198_30224 = state_30182__$1;
(statearr_30198_30224[(1)] = (12));

} else {
var statearr_30199_30225 = state_30182__$1;
(statearr_30199_30225[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___30211,tc,fc))
;
return ((function (switch__29421__auto__,c__29533__auto___30211,tc,fc){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_30203 = [null,null,null,null,null,null,null,null,null];
(statearr_30203[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_30203[(1)] = (1));

return statearr_30203;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_30182){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_30182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e30204){if((e30204 instanceof Object)){
var ex__29425__auto__ = e30204;
var statearr_30205_30226 = state_30182;
(statearr_30205_30226[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30227 = state_30182;
state_30182 = G__30227;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_30182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_30182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___30211,tc,fc))
})();
var state__29535__auto__ = (function (){var statearr_30206 = f__29534__auto__.call(null);
(statearr_30206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___30211);

return statearr_30206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___30211,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto__){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto__){
return (function (state_30291){
var state_val_30292 = (state_30291[(1)]);
if((state_val_30292 === (7))){
var inst_30287 = (state_30291[(2)]);
var state_30291__$1 = state_30291;
var statearr_30293_30314 = state_30291__$1;
(statearr_30293_30314[(2)] = inst_30287);

(statearr_30293_30314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (1))){
var inst_30271 = init;
var state_30291__$1 = (function (){var statearr_30294 = state_30291;
(statearr_30294[(7)] = inst_30271);

return statearr_30294;
})();
var statearr_30295_30315 = state_30291__$1;
(statearr_30295_30315[(2)] = null);

(statearr_30295_30315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (4))){
var inst_30274 = (state_30291[(8)]);
var inst_30274__$1 = (state_30291[(2)]);
var inst_30275 = (inst_30274__$1 == null);
var state_30291__$1 = (function (){var statearr_30296 = state_30291;
(statearr_30296[(8)] = inst_30274__$1);

return statearr_30296;
})();
if(cljs.core.truth_(inst_30275)){
var statearr_30297_30316 = state_30291__$1;
(statearr_30297_30316[(1)] = (5));

} else {
var statearr_30298_30317 = state_30291__$1;
(statearr_30298_30317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (6))){
var inst_30278 = (state_30291[(9)]);
var inst_30271 = (state_30291[(7)]);
var inst_30274 = (state_30291[(8)]);
var inst_30278__$1 = f.call(null,inst_30271,inst_30274);
var inst_30279 = cljs.core.reduced_QMARK_.call(null,inst_30278__$1);
var state_30291__$1 = (function (){var statearr_30299 = state_30291;
(statearr_30299[(9)] = inst_30278__$1);

return statearr_30299;
})();
if(inst_30279){
var statearr_30300_30318 = state_30291__$1;
(statearr_30300_30318[(1)] = (8));

} else {
var statearr_30301_30319 = state_30291__$1;
(statearr_30301_30319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (3))){
var inst_30289 = (state_30291[(2)]);
var state_30291__$1 = state_30291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30291__$1,inst_30289);
} else {
if((state_val_30292 === (2))){
var state_30291__$1 = state_30291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30291__$1,(4),ch);
} else {
if((state_val_30292 === (9))){
var inst_30278 = (state_30291[(9)]);
var inst_30271 = inst_30278;
var state_30291__$1 = (function (){var statearr_30302 = state_30291;
(statearr_30302[(7)] = inst_30271);

return statearr_30302;
})();
var statearr_30303_30320 = state_30291__$1;
(statearr_30303_30320[(2)] = null);

(statearr_30303_30320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (5))){
var inst_30271 = (state_30291[(7)]);
var state_30291__$1 = state_30291;
var statearr_30304_30321 = state_30291__$1;
(statearr_30304_30321[(2)] = inst_30271);

(statearr_30304_30321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (10))){
var inst_30285 = (state_30291[(2)]);
var state_30291__$1 = state_30291;
var statearr_30305_30322 = state_30291__$1;
(statearr_30305_30322[(2)] = inst_30285);

(statearr_30305_30322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (8))){
var inst_30278 = (state_30291[(9)]);
var inst_30281 = cljs.core.deref.call(null,inst_30278);
var state_30291__$1 = state_30291;
var statearr_30306_30323 = state_30291__$1;
(statearr_30306_30323[(2)] = inst_30281);

(statearr_30306_30323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto__))
;
return ((function (switch__29421__auto__,c__29533__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29422__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29422__auto____0 = (function (){
var statearr_30310 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30310[(0)] = cljs$core$async$reduce_$_state_machine__29422__auto__);

(statearr_30310[(1)] = (1));

return statearr_30310;
});
var cljs$core$async$reduce_$_state_machine__29422__auto____1 = (function (state_30291){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_30291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e30311){if((e30311 instanceof Object)){
var ex__29425__auto__ = e30311;
var statearr_30312_30324 = state_30291;
(statearr_30312_30324[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30325 = state_30291;
state_30291 = G__30325;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29422__auto__ = function(state_30291){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29422__auto____1.call(this,state_30291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29422__auto____0;
cljs$core$async$reduce_$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29422__auto____1;
return cljs$core$async$reduce_$_state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto__))
})();
var state__29535__auto__ = (function (){var statearr_30313 = f__29534__auto__.call(null);
(statearr_30313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto__);

return statearr_30313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto__))
);

return c__29533__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto__,f__$1){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto__,f__$1){
return (function (state_30345){
var state_val_30346 = (state_30345[(1)]);
if((state_val_30346 === (1))){
var inst_30340 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30345__$1 = state_30345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30345__$1,(2),inst_30340);
} else {
if((state_val_30346 === (2))){
var inst_30342 = (state_30345[(2)]);
var inst_30343 = f__$1.call(null,inst_30342);
var state_30345__$1 = state_30345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30345__$1,inst_30343);
} else {
return null;
}
}
});})(c__29533__auto__,f__$1))
;
return ((function (switch__29421__auto__,c__29533__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29422__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29422__auto____0 = (function (){
var statearr_30350 = [null,null,null,null,null,null,null];
(statearr_30350[(0)] = cljs$core$async$transduce_$_state_machine__29422__auto__);

(statearr_30350[(1)] = (1));

return statearr_30350;
});
var cljs$core$async$transduce_$_state_machine__29422__auto____1 = (function (state_30345){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_30345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e30351){if((e30351 instanceof Object)){
var ex__29425__auto__ = e30351;
var statearr_30352_30354 = state_30345;
(statearr_30352_30354[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30355 = state_30345;
state_30345 = G__30355;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29422__auto__ = function(state_30345){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29422__auto____1.call(this,state_30345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29422__auto____0;
cljs$core$async$transduce_$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29422__auto____1;
return cljs$core$async$transduce_$_state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto__,f__$1))
})();
var state__29535__auto__ = (function (){var statearr_30353 = f__29534__auto__.call(null);
(statearr_30353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto__);

return statearr_30353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto__,f__$1))
);

return c__29533__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30356 = [];
var len__26066__auto___30408 = arguments.length;
var i__26067__auto___30409 = (0);
while(true){
if((i__26067__auto___30409 < len__26066__auto___30408)){
args30356.push((arguments[i__26067__auto___30409]));

var G__30410 = (i__26067__auto___30409 + (1));
i__26067__auto___30409 = G__30410;
continue;
} else {
}
break;
}

var G__30358 = args30356.length;
switch (G__30358) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30356.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto__){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto__){
return (function (state_30383){
var state_val_30384 = (state_30383[(1)]);
if((state_val_30384 === (7))){
var inst_30365 = (state_30383[(2)]);
var state_30383__$1 = state_30383;
var statearr_30385_30412 = state_30383__$1;
(statearr_30385_30412[(2)] = inst_30365);

(statearr_30385_30412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30384 === (1))){
var inst_30359 = cljs.core.seq.call(null,coll);
var inst_30360 = inst_30359;
var state_30383__$1 = (function (){var statearr_30386 = state_30383;
(statearr_30386[(7)] = inst_30360);

return statearr_30386;
})();
var statearr_30387_30413 = state_30383__$1;
(statearr_30387_30413[(2)] = null);

(statearr_30387_30413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30384 === (4))){
var inst_30360 = (state_30383[(7)]);
var inst_30363 = cljs.core.first.call(null,inst_30360);
var state_30383__$1 = state_30383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30383__$1,(7),ch,inst_30363);
} else {
if((state_val_30384 === (13))){
var inst_30377 = (state_30383[(2)]);
var state_30383__$1 = state_30383;
var statearr_30388_30414 = state_30383__$1;
(statearr_30388_30414[(2)] = inst_30377);

(statearr_30388_30414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30384 === (6))){
var inst_30368 = (state_30383[(2)]);
var state_30383__$1 = state_30383;
if(cljs.core.truth_(inst_30368)){
var statearr_30389_30415 = state_30383__$1;
(statearr_30389_30415[(1)] = (8));

} else {
var statearr_30390_30416 = state_30383__$1;
(statearr_30390_30416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30384 === (3))){
var inst_30381 = (state_30383[(2)]);
var state_30383__$1 = state_30383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30383__$1,inst_30381);
} else {
if((state_val_30384 === (12))){
var state_30383__$1 = state_30383;
var statearr_30391_30417 = state_30383__$1;
(statearr_30391_30417[(2)] = null);

(statearr_30391_30417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30384 === (2))){
var inst_30360 = (state_30383[(7)]);
var state_30383__$1 = state_30383;
if(cljs.core.truth_(inst_30360)){
var statearr_30392_30418 = state_30383__$1;
(statearr_30392_30418[(1)] = (4));

} else {
var statearr_30393_30419 = state_30383__$1;
(statearr_30393_30419[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30384 === (11))){
var inst_30374 = cljs.core.async.close_BANG_.call(null,ch);
var state_30383__$1 = state_30383;
var statearr_30394_30420 = state_30383__$1;
(statearr_30394_30420[(2)] = inst_30374);

(statearr_30394_30420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30384 === (9))){
var state_30383__$1 = state_30383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30395_30421 = state_30383__$1;
(statearr_30395_30421[(1)] = (11));

} else {
var statearr_30396_30422 = state_30383__$1;
(statearr_30396_30422[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30384 === (5))){
var inst_30360 = (state_30383[(7)]);
var state_30383__$1 = state_30383;
var statearr_30397_30423 = state_30383__$1;
(statearr_30397_30423[(2)] = inst_30360);

(statearr_30397_30423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30384 === (10))){
var inst_30379 = (state_30383[(2)]);
var state_30383__$1 = state_30383;
var statearr_30398_30424 = state_30383__$1;
(statearr_30398_30424[(2)] = inst_30379);

(statearr_30398_30424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30384 === (8))){
var inst_30360 = (state_30383[(7)]);
var inst_30370 = cljs.core.next.call(null,inst_30360);
var inst_30360__$1 = inst_30370;
var state_30383__$1 = (function (){var statearr_30399 = state_30383;
(statearr_30399[(7)] = inst_30360__$1);

return statearr_30399;
})();
var statearr_30400_30425 = state_30383__$1;
(statearr_30400_30425[(2)] = null);

(statearr_30400_30425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto__))
;
return ((function (switch__29421__auto__,c__29533__auto__){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_30404 = [null,null,null,null,null,null,null,null];
(statearr_30404[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_30404[(1)] = (1));

return statearr_30404;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_30383){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_30383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e30405){if((e30405 instanceof Object)){
var ex__29425__auto__ = e30405;
var statearr_30406_30426 = state_30383;
(statearr_30406_30426[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30427 = state_30383;
state_30383 = G__30427;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_30383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_30383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto__))
})();
var state__29535__auto__ = (function (){var statearr_30407 = f__29534__auto__.call(null);
(statearr_30407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto__);

return statearr_30407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto__))
);

return c__29533__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25663__auto__ = (((_ == null))?null:_);
var m__25664__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,_);
} else {
var m__25664__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25663__auto__ = (((m == null))?null:m);
var m__25664__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25664__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25663__auto__ = (((m == null))?null:m);
var m__25664__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,m,ch);
} else {
var m__25664__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25663__auto__ = (((m == null))?null:m);
var m__25664__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,m);
} else {
var m__25664__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30649 = (function (mult,ch,cs,meta30650){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30650 = meta30650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30651,meta30650__$1){
var self__ = this;
var _30651__$1 = this;
return (new cljs.core.async.t_cljs$core$async30649(self__.mult,self__.ch,self__.cs,meta30650__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30651){
var self__ = this;
var _30651__$1 = this;
return self__.meta30650;
});})(cs))
;

cljs.core.async.t_cljs$core$async30649.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30649.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30649.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30649.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30649.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30649.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30650","meta30650",-121272584,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30649";

cljs.core.async.t_cljs$core$async30649.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async/t_cljs$core$async30649");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30649 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30649(mult__$1,ch__$1,cs__$1,meta30650){
return (new cljs.core.async.t_cljs$core$async30649(mult__$1,ch__$1,cs__$1,meta30650));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30649(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29533__auto___30870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___30870,cs,m,dchan,dctr,done){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___30870,cs,m,dchan,dctr,done){
return (function (state_30782){
var state_val_30783 = (state_30782[(1)]);
if((state_val_30783 === (7))){
var inst_30778 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30784_30871 = state_30782__$1;
(statearr_30784_30871[(2)] = inst_30778);

(statearr_30784_30871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (20))){
var inst_30683 = (state_30782[(7)]);
var inst_30693 = cljs.core.first.call(null,inst_30683);
var inst_30694 = cljs.core.nth.call(null,inst_30693,(0),null);
var inst_30695 = cljs.core.nth.call(null,inst_30693,(1),null);
var state_30782__$1 = (function (){var statearr_30785 = state_30782;
(statearr_30785[(8)] = inst_30694);

return statearr_30785;
})();
if(cljs.core.truth_(inst_30695)){
var statearr_30786_30872 = state_30782__$1;
(statearr_30786_30872[(1)] = (22));

} else {
var statearr_30787_30873 = state_30782__$1;
(statearr_30787_30873[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (27))){
var inst_30730 = (state_30782[(9)]);
var inst_30654 = (state_30782[(10)]);
var inst_30725 = (state_30782[(11)]);
var inst_30723 = (state_30782[(12)]);
var inst_30730__$1 = cljs.core._nth.call(null,inst_30723,inst_30725);
var inst_30731 = cljs.core.async.put_BANG_.call(null,inst_30730__$1,inst_30654,done);
var state_30782__$1 = (function (){var statearr_30788 = state_30782;
(statearr_30788[(9)] = inst_30730__$1);

return statearr_30788;
})();
if(cljs.core.truth_(inst_30731)){
var statearr_30789_30874 = state_30782__$1;
(statearr_30789_30874[(1)] = (30));

} else {
var statearr_30790_30875 = state_30782__$1;
(statearr_30790_30875[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (1))){
var state_30782__$1 = state_30782;
var statearr_30791_30876 = state_30782__$1;
(statearr_30791_30876[(2)] = null);

(statearr_30791_30876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (24))){
var inst_30683 = (state_30782[(7)]);
var inst_30700 = (state_30782[(2)]);
var inst_30701 = cljs.core.next.call(null,inst_30683);
var inst_30663 = inst_30701;
var inst_30664 = null;
var inst_30665 = (0);
var inst_30666 = (0);
var state_30782__$1 = (function (){var statearr_30792 = state_30782;
(statearr_30792[(13)] = inst_30663);

(statearr_30792[(14)] = inst_30700);

(statearr_30792[(15)] = inst_30664);

(statearr_30792[(16)] = inst_30666);

(statearr_30792[(17)] = inst_30665);

return statearr_30792;
})();
var statearr_30793_30877 = state_30782__$1;
(statearr_30793_30877[(2)] = null);

(statearr_30793_30877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (39))){
var state_30782__$1 = state_30782;
var statearr_30797_30878 = state_30782__$1;
(statearr_30797_30878[(2)] = null);

(statearr_30797_30878[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (4))){
var inst_30654 = (state_30782[(10)]);
var inst_30654__$1 = (state_30782[(2)]);
var inst_30655 = (inst_30654__$1 == null);
var state_30782__$1 = (function (){var statearr_30798 = state_30782;
(statearr_30798[(10)] = inst_30654__$1);

return statearr_30798;
})();
if(cljs.core.truth_(inst_30655)){
var statearr_30799_30879 = state_30782__$1;
(statearr_30799_30879[(1)] = (5));

} else {
var statearr_30800_30880 = state_30782__$1;
(statearr_30800_30880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (15))){
var inst_30663 = (state_30782[(13)]);
var inst_30664 = (state_30782[(15)]);
var inst_30666 = (state_30782[(16)]);
var inst_30665 = (state_30782[(17)]);
var inst_30679 = (state_30782[(2)]);
var inst_30680 = (inst_30666 + (1));
var tmp30794 = inst_30663;
var tmp30795 = inst_30664;
var tmp30796 = inst_30665;
var inst_30663__$1 = tmp30794;
var inst_30664__$1 = tmp30795;
var inst_30665__$1 = tmp30796;
var inst_30666__$1 = inst_30680;
var state_30782__$1 = (function (){var statearr_30801 = state_30782;
(statearr_30801[(13)] = inst_30663__$1);

(statearr_30801[(15)] = inst_30664__$1);

(statearr_30801[(16)] = inst_30666__$1);

(statearr_30801[(17)] = inst_30665__$1);

(statearr_30801[(18)] = inst_30679);

return statearr_30801;
})();
var statearr_30802_30881 = state_30782__$1;
(statearr_30802_30881[(2)] = null);

(statearr_30802_30881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (21))){
var inst_30704 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30806_30882 = state_30782__$1;
(statearr_30806_30882[(2)] = inst_30704);

(statearr_30806_30882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (31))){
var inst_30730 = (state_30782[(9)]);
var inst_30734 = done.call(null,null);
var inst_30735 = cljs.core.async.untap_STAR_.call(null,m,inst_30730);
var state_30782__$1 = (function (){var statearr_30807 = state_30782;
(statearr_30807[(19)] = inst_30734);

return statearr_30807;
})();
var statearr_30808_30883 = state_30782__$1;
(statearr_30808_30883[(2)] = inst_30735);

(statearr_30808_30883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (32))){
var inst_30722 = (state_30782[(20)]);
var inst_30724 = (state_30782[(21)]);
var inst_30725 = (state_30782[(11)]);
var inst_30723 = (state_30782[(12)]);
var inst_30737 = (state_30782[(2)]);
var inst_30738 = (inst_30725 + (1));
var tmp30803 = inst_30722;
var tmp30804 = inst_30724;
var tmp30805 = inst_30723;
var inst_30722__$1 = tmp30803;
var inst_30723__$1 = tmp30805;
var inst_30724__$1 = tmp30804;
var inst_30725__$1 = inst_30738;
var state_30782__$1 = (function (){var statearr_30809 = state_30782;
(statearr_30809[(20)] = inst_30722__$1);

(statearr_30809[(22)] = inst_30737);

(statearr_30809[(21)] = inst_30724__$1);

(statearr_30809[(11)] = inst_30725__$1);

(statearr_30809[(12)] = inst_30723__$1);

return statearr_30809;
})();
var statearr_30810_30884 = state_30782__$1;
(statearr_30810_30884[(2)] = null);

(statearr_30810_30884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (40))){
var inst_30750 = (state_30782[(23)]);
var inst_30754 = done.call(null,null);
var inst_30755 = cljs.core.async.untap_STAR_.call(null,m,inst_30750);
var state_30782__$1 = (function (){var statearr_30811 = state_30782;
(statearr_30811[(24)] = inst_30754);

return statearr_30811;
})();
var statearr_30812_30885 = state_30782__$1;
(statearr_30812_30885[(2)] = inst_30755);

(statearr_30812_30885[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (33))){
var inst_30741 = (state_30782[(25)]);
var inst_30743 = cljs.core.chunked_seq_QMARK_.call(null,inst_30741);
var state_30782__$1 = state_30782;
if(inst_30743){
var statearr_30813_30886 = state_30782__$1;
(statearr_30813_30886[(1)] = (36));

} else {
var statearr_30814_30887 = state_30782__$1;
(statearr_30814_30887[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (13))){
var inst_30673 = (state_30782[(26)]);
var inst_30676 = cljs.core.async.close_BANG_.call(null,inst_30673);
var state_30782__$1 = state_30782;
var statearr_30815_30888 = state_30782__$1;
(statearr_30815_30888[(2)] = inst_30676);

(statearr_30815_30888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (22))){
var inst_30694 = (state_30782[(8)]);
var inst_30697 = cljs.core.async.close_BANG_.call(null,inst_30694);
var state_30782__$1 = state_30782;
var statearr_30816_30889 = state_30782__$1;
(statearr_30816_30889[(2)] = inst_30697);

(statearr_30816_30889[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (36))){
var inst_30741 = (state_30782[(25)]);
var inst_30745 = cljs.core.chunk_first.call(null,inst_30741);
var inst_30746 = cljs.core.chunk_rest.call(null,inst_30741);
var inst_30747 = cljs.core.count.call(null,inst_30745);
var inst_30722 = inst_30746;
var inst_30723 = inst_30745;
var inst_30724 = inst_30747;
var inst_30725 = (0);
var state_30782__$1 = (function (){var statearr_30817 = state_30782;
(statearr_30817[(20)] = inst_30722);

(statearr_30817[(21)] = inst_30724);

(statearr_30817[(11)] = inst_30725);

(statearr_30817[(12)] = inst_30723);

return statearr_30817;
})();
var statearr_30818_30890 = state_30782__$1;
(statearr_30818_30890[(2)] = null);

(statearr_30818_30890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (41))){
var inst_30741 = (state_30782[(25)]);
var inst_30757 = (state_30782[(2)]);
var inst_30758 = cljs.core.next.call(null,inst_30741);
var inst_30722 = inst_30758;
var inst_30723 = null;
var inst_30724 = (0);
var inst_30725 = (0);
var state_30782__$1 = (function (){var statearr_30819 = state_30782;
(statearr_30819[(27)] = inst_30757);

(statearr_30819[(20)] = inst_30722);

(statearr_30819[(21)] = inst_30724);

(statearr_30819[(11)] = inst_30725);

(statearr_30819[(12)] = inst_30723);

return statearr_30819;
})();
var statearr_30820_30891 = state_30782__$1;
(statearr_30820_30891[(2)] = null);

(statearr_30820_30891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (43))){
var state_30782__$1 = state_30782;
var statearr_30821_30892 = state_30782__$1;
(statearr_30821_30892[(2)] = null);

(statearr_30821_30892[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (29))){
var inst_30766 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30822_30893 = state_30782__$1;
(statearr_30822_30893[(2)] = inst_30766);

(statearr_30822_30893[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (44))){
var inst_30775 = (state_30782[(2)]);
var state_30782__$1 = (function (){var statearr_30823 = state_30782;
(statearr_30823[(28)] = inst_30775);

return statearr_30823;
})();
var statearr_30824_30894 = state_30782__$1;
(statearr_30824_30894[(2)] = null);

(statearr_30824_30894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (6))){
var inst_30714 = (state_30782[(29)]);
var inst_30713 = cljs.core.deref.call(null,cs);
var inst_30714__$1 = cljs.core.keys.call(null,inst_30713);
var inst_30715 = cljs.core.count.call(null,inst_30714__$1);
var inst_30716 = cljs.core.reset_BANG_.call(null,dctr,inst_30715);
var inst_30721 = cljs.core.seq.call(null,inst_30714__$1);
var inst_30722 = inst_30721;
var inst_30723 = null;
var inst_30724 = (0);
var inst_30725 = (0);
var state_30782__$1 = (function (){var statearr_30825 = state_30782;
(statearr_30825[(20)] = inst_30722);

(statearr_30825[(29)] = inst_30714__$1);

(statearr_30825[(21)] = inst_30724);

(statearr_30825[(11)] = inst_30725);

(statearr_30825[(12)] = inst_30723);

(statearr_30825[(30)] = inst_30716);

return statearr_30825;
})();
var statearr_30826_30895 = state_30782__$1;
(statearr_30826_30895[(2)] = null);

(statearr_30826_30895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (28))){
var inst_30722 = (state_30782[(20)]);
var inst_30741 = (state_30782[(25)]);
var inst_30741__$1 = cljs.core.seq.call(null,inst_30722);
var state_30782__$1 = (function (){var statearr_30827 = state_30782;
(statearr_30827[(25)] = inst_30741__$1);

return statearr_30827;
})();
if(inst_30741__$1){
var statearr_30828_30896 = state_30782__$1;
(statearr_30828_30896[(1)] = (33));

} else {
var statearr_30829_30897 = state_30782__$1;
(statearr_30829_30897[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (25))){
var inst_30724 = (state_30782[(21)]);
var inst_30725 = (state_30782[(11)]);
var inst_30727 = (inst_30725 < inst_30724);
var inst_30728 = inst_30727;
var state_30782__$1 = state_30782;
if(cljs.core.truth_(inst_30728)){
var statearr_30830_30898 = state_30782__$1;
(statearr_30830_30898[(1)] = (27));

} else {
var statearr_30831_30899 = state_30782__$1;
(statearr_30831_30899[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (34))){
var state_30782__$1 = state_30782;
var statearr_30832_30900 = state_30782__$1;
(statearr_30832_30900[(2)] = null);

(statearr_30832_30900[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (17))){
var state_30782__$1 = state_30782;
var statearr_30833_30901 = state_30782__$1;
(statearr_30833_30901[(2)] = null);

(statearr_30833_30901[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (3))){
var inst_30780 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30782__$1,inst_30780);
} else {
if((state_val_30783 === (12))){
var inst_30709 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30834_30902 = state_30782__$1;
(statearr_30834_30902[(2)] = inst_30709);

(statearr_30834_30902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (2))){
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30782__$1,(4),ch);
} else {
if((state_val_30783 === (23))){
var state_30782__$1 = state_30782;
var statearr_30835_30903 = state_30782__$1;
(statearr_30835_30903[(2)] = null);

(statearr_30835_30903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (35))){
var inst_30764 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30836_30904 = state_30782__$1;
(statearr_30836_30904[(2)] = inst_30764);

(statearr_30836_30904[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (19))){
var inst_30683 = (state_30782[(7)]);
var inst_30687 = cljs.core.chunk_first.call(null,inst_30683);
var inst_30688 = cljs.core.chunk_rest.call(null,inst_30683);
var inst_30689 = cljs.core.count.call(null,inst_30687);
var inst_30663 = inst_30688;
var inst_30664 = inst_30687;
var inst_30665 = inst_30689;
var inst_30666 = (0);
var state_30782__$1 = (function (){var statearr_30837 = state_30782;
(statearr_30837[(13)] = inst_30663);

(statearr_30837[(15)] = inst_30664);

(statearr_30837[(16)] = inst_30666);

(statearr_30837[(17)] = inst_30665);

return statearr_30837;
})();
var statearr_30838_30905 = state_30782__$1;
(statearr_30838_30905[(2)] = null);

(statearr_30838_30905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (11))){
var inst_30663 = (state_30782[(13)]);
var inst_30683 = (state_30782[(7)]);
var inst_30683__$1 = cljs.core.seq.call(null,inst_30663);
var state_30782__$1 = (function (){var statearr_30839 = state_30782;
(statearr_30839[(7)] = inst_30683__$1);

return statearr_30839;
})();
if(inst_30683__$1){
var statearr_30840_30906 = state_30782__$1;
(statearr_30840_30906[(1)] = (16));

} else {
var statearr_30841_30907 = state_30782__$1;
(statearr_30841_30907[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (9))){
var inst_30711 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30842_30908 = state_30782__$1;
(statearr_30842_30908[(2)] = inst_30711);

(statearr_30842_30908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (5))){
var inst_30661 = cljs.core.deref.call(null,cs);
var inst_30662 = cljs.core.seq.call(null,inst_30661);
var inst_30663 = inst_30662;
var inst_30664 = null;
var inst_30665 = (0);
var inst_30666 = (0);
var state_30782__$1 = (function (){var statearr_30843 = state_30782;
(statearr_30843[(13)] = inst_30663);

(statearr_30843[(15)] = inst_30664);

(statearr_30843[(16)] = inst_30666);

(statearr_30843[(17)] = inst_30665);

return statearr_30843;
})();
var statearr_30844_30909 = state_30782__$1;
(statearr_30844_30909[(2)] = null);

(statearr_30844_30909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (14))){
var state_30782__$1 = state_30782;
var statearr_30845_30910 = state_30782__$1;
(statearr_30845_30910[(2)] = null);

(statearr_30845_30910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (45))){
var inst_30772 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30846_30911 = state_30782__$1;
(statearr_30846_30911[(2)] = inst_30772);

(statearr_30846_30911[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (26))){
var inst_30714 = (state_30782[(29)]);
var inst_30768 = (state_30782[(2)]);
var inst_30769 = cljs.core.seq.call(null,inst_30714);
var state_30782__$1 = (function (){var statearr_30847 = state_30782;
(statearr_30847[(31)] = inst_30768);

return statearr_30847;
})();
if(inst_30769){
var statearr_30848_30912 = state_30782__$1;
(statearr_30848_30912[(1)] = (42));

} else {
var statearr_30849_30913 = state_30782__$1;
(statearr_30849_30913[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (16))){
var inst_30683 = (state_30782[(7)]);
var inst_30685 = cljs.core.chunked_seq_QMARK_.call(null,inst_30683);
var state_30782__$1 = state_30782;
if(inst_30685){
var statearr_30850_30914 = state_30782__$1;
(statearr_30850_30914[(1)] = (19));

} else {
var statearr_30851_30915 = state_30782__$1;
(statearr_30851_30915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (38))){
var inst_30761 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30852_30916 = state_30782__$1;
(statearr_30852_30916[(2)] = inst_30761);

(statearr_30852_30916[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (30))){
var state_30782__$1 = state_30782;
var statearr_30853_30917 = state_30782__$1;
(statearr_30853_30917[(2)] = null);

(statearr_30853_30917[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (10))){
var inst_30664 = (state_30782[(15)]);
var inst_30666 = (state_30782[(16)]);
var inst_30672 = cljs.core._nth.call(null,inst_30664,inst_30666);
var inst_30673 = cljs.core.nth.call(null,inst_30672,(0),null);
var inst_30674 = cljs.core.nth.call(null,inst_30672,(1),null);
var state_30782__$1 = (function (){var statearr_30854 = state_30782;
(statearr_30854[(26)] = inst_30673);

return statearr_30854;
})();
if(cljs.core.truth_(inst_30674)){
var statearr_30855_30918 = state_30782__$1;
(statearr_30855_30918[(1)] = (13));

} else {
var statearr_30856_30919 = state_30782__$1;
(statearr_30856_30919[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (18))){
var inst_30707 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30857_30920 = state_30782__$1;
(statearr_30857_30920[(2)] = inst_30707);

(statearr_30857_30920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (42))){
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30782__$1,(45),dchan);
} else {
if((state_val_30783 === (37))){
var inst_30654 = (state_30782[(10)]);
var inst_30750 = (state_30782[(23)]);
var inst_30741 = (state_30782[(25)]);
var inst_30750__$1 = cljs.core.first.call(null,inst_30741);
var inst_30751 = cljs.core.async.put_BANG_.call(null,inst_30750__$1,inst_30654,done);
var state_30782__$1 = (function (){var statearr_30858 = state_30782;
(statearr_30858[(23)] = inst_30750__$1);

return statearr_30858;
})();
if(cljs.core.truth_(inst_30751)){
var statearr_30859_30921 = state_30782__$1;
(statearr_30859_30921[(1)] = (39));

} else {
var statearr_30860_30922 = state_30782__$1;
(statearr_30860_30922[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (8))){
var inst_30666 = (state_30782[(16)]);
var inst_30665 = (state_30782[(17)]);
var inst_30668 = (inst_30666 < inst_30665);
var inst_30669 = inst_30668;
var state_30782__$1 = state_30782;
if(cljs.core.truth_(inst_30669)){
var statearr_30861_30923 = state_30782__$1;
(statearr_30861_30923[(1)] = (10));

} else {
var statearr_30862_30924 = state_30782__$1;
(statearr_30862_30924[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___30870,cs,m,dchan,dctr,done))
;
return ((function (switch__29421__auto__,c__29533__auto___30870,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29422__auto__ = null;
var cljs$core$async$mult_$_state_machine__29422__auto____0 = (function (){
var statearr_30866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30866[(0)] = cljs$core$async$mult_$_state_machine__29422__auto__);

(statearr_30866[(1)] = (1));

return statearr_30866;
});
var cljs$core$async$mult_$_state_machine__29422__auto____1 = (function (state_30782){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_30782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e30867){if((e30867 instanceof Object)){
var ex__29425__auto__ = e30867;
var statearr_30868_30925 = state_30782;
(statearr_30868_30925[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30926 = state_30782;
state_30782 = G__30926;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29422__auto__ = function(state_30782){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29422__auto____1.call(this,state_30782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29422__auto____0;
cljs$core$async$mult_$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29422__auto____1;
return cljs$core$async$mult_$_state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___30870,cs,m,dchan,dctr,done))
})();
var state__29535__auto__ = (function (){var statearr_30869 = f__29534__auto__.call(null);
(statearr_30869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___30870);

return statearr_30869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___30870,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30927 = [];
var len__26066__auto___30930 = arguments.length;
var i__26067__auto___30931 = (0);
while(true){
if((i__26067__auto___30931 < len__26066__auto___30930)){
args30927.push((arguments[i__26067__auto___30931]));

var G__30932 = (i__26067__auto___30931 + (1));
i__26067__auto___30931 = G__30932;
continue;
} else {
}
break;
}

var G__30929 = args30927.length;
switch (G__30929) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30927.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25663__auto__ = (((m == null))?null:m);
var m__25664__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,m,ch);
} else {
var m__25664__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25663__auto__ = (((m == null))?null:m);
var m__25664__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,m,ch);
} else {
var m__25664__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25663__auto__ = (((m == null))?null:m);
var m__25664__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,m);
} else {
var m__25664__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25663__auto__ = (((m == null))?null:m);
var m__25664__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,m,state_map);
} else {
var m__25664__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25663__auto__ = (((m == null))?null:m);
var m__25664__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,m,mode);
} else {
var m__25664__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26073__auto__ = [];
var len__26066__auto___30944 = arguments.length;
var i__26067__auto___30945 = (0);
while(true){
if((i__26067__auto___30945 < len__26066__auto___30944)){
args__26073__auto__.push((arguments[i__26067__auto___30945]));

var G__30946 = (i__26067__auto___30945 + (1));
i__26067__auto___30945 = G__30946;
continue;
} else {
}
break;
}

var argseq__26074__auto__ = ((((3) < args__26073__auto__.length))?(new cljs.core.IndexedSeq(args__26073__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26074__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30938){
var map__30939 = p__30938;
var map__30939__$1 = ((((!((map__30939 == null)))?((((map__30939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30939):map__30939);
var opts = map__30939__$1;
var statearr_30941_30947 = state;
(statearr_30941_30947[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30939,map__30939__$1,opts){
return (function (val){
var statearr_30942_30948 = state;
(statearr_30942_30948[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30939,map__30939__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30943_30949 = state;
(statearr_30943_30949[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30934){
var G__30935 = cljs.core.first.call(null,seq30934);
var seq30934__$1 = cljs.core.next.call(null,seq30934);
var G__30936 = cljs.core.first.call(null,seq30934__$1);
var seq30934__$2 = cljs.core.next.call(null,seq30934__$1);
var G__30937 = cljs.core.first.call(null,seq30934__$2);
var seq30934__$3 = cljs.core.next.call(null,seq30934__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30935,G__30936,G__30937,seq30934__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31113 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31114){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31114 = meta31114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31115,meta31114__$1){
var self__ = this;
var _31115__$1 = this;
return (new cljs.core.async.t_cljs$core$async31113(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31114__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31115){
var self__ = this;
var _31115__$1 = this;
return self__.meta31114;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31113.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31114","meta31114",802595479,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31113";

cljs.core.async.t_cljs$core$async31113.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async/t_cljs$core$async31113");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31113 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31113(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31114){
return (new cljs.core.async.t_cljs$core$async31113(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31114));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31113(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29533__auto___31276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___31276,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___31276,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31213){
var state_val_31214 = (state_31213[(1)]);
if((state_val_31214 === (7))){
var inst_31131 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
var statearr_31215_31277 = state_31213__$1;
(statearr_31215_31277[(2)] = inst_31131);

(statearr_31215_31277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (20))){
var inst_31143 = (state_31213[(7)]);
var state_31213__$1 = state_31213;
var statearr_31216_31278 = state_31213__$1;
(statearr_31216_31278[(2)] = inst_31143);

(statearr_31216_31278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (27))){
var state_31213__$1 = state_31213;
var statearr_31217_31279 = state_31213__$1;
(statearr_31217_31279[(2)] = null);

(statearr_31217_31279[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (1))){
var inst_31119 = (state_31213[(8)]);
var inst_31119__$1 = calc_state.call(null);
var inst_31121 = (inst_31119__$1 == null);
var inst_31122 = cljs.core.not.call(null,inst_31121);
var state_31213__$1 = (function (){var statearr_31218 = state_31213;
(statearr_31218[(8)] = inst_31119__$1);

return statearr_31218;
})();
if(inst_31122){
var statearr_31219_31280 = state_31213__$1;
(statearr_31219_31280[(1)] = (2));

} else {
var statearr_31220_31281 = state_31213__$1;
(statearr_31220_31281[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (24))){
var inst_31187 = (state_31213[(9)]);
var inst_31166 = (state_31213[(10)]);
var inst_31173 = (state_31213[(11)]);
var inst_31187__$1 = inst_31166.call(null,inst_31173);
var state_31213__$1 = (function (){var statearr_31221 = state_31213;
(statearr_31221[(9)] = inst_31187__$1);

return statearr_31221;
})();
if(cljs.core.truth_(inst_31187__$1)){
var statearr_31222_31282 = state_31213__$1;
(statearr_31222_31282[(1)] = (29));

} else {
var statearr_31223_31283 = state_31213__$1;
(statearr_31223_31283[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (4))){
var inst_31134 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
if(cljs.core.truth_(inst_31134)){
var statearr_31224_31284 = state_31213__$1;
(statearr_31224_31284[(1)] = (8));

} else {
var statearr_31225_31285 = state_31213__$1;
(statearr_31225_31285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (15))){
var inst_31160 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
if(cljs.core.truth_(inst_31160)){
var statearr_31226_31286 = state_31213__$1;
(statearr_31226_31286[(1)] = (19));

} else {
var statearr_31227_31287 = state_31213__$1;
(statearr_31227_31287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (21))){
var inst_31165 = (state_31213[(12)]);
var inst_31165__$1 = (state_31213[(2)]);
var inst_31166 = cljs.core.get.call(null,inst_31165__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31167 = cljs.core.get.call(null,inst_31165__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31168 = cljs.core.get.call(null,inst_31165__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31213__$1 = (function (){var statearr_31228 = state_31213;
(statearr_31228[(13)] = inst_31167);

(statearr_31228[(10)] = inst_31166);

(statearr_31228[(12)] = inst_31165__$1);

return statearr_31228;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31213__$1,(22),inst_31168);
} else {
if((state_val_31214 === (31))){
var inst_31195 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
if(cljs.core.truth_(inst_31195)){
var statearr_31229_31288 = state_31213__$1;
(statearr_31229_31288[(1)] = (32));

} else {
var statearr_31230_31289 = state_31213__$1;
(statearr_31230_31289[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (32))){
var inst_31172 = (state_31213[(14)]);
var state_31213__$1 = state_31213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31213__$1,(35),out,inst_31172);
} else {
if((state_val_31214 === (33))){
var inst_31165 = (state_31213[(12)]);
var inst_31143 = inst_31165;
var state_31213__$1 = (function (){var statearr_31231 = state_31213;
(statearr_31231[(7)] = inst_31143);

return statearr_31231;
})();
var statearr_31232_31290 = state_31213__$1;
(statearr_31232_31290[(2)] = null);

(statearr_31232_31290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (13))){
var inst_31143 = (state_31213[(7)]);
var inst_31150 = inst_31143.cljs$lang$protocol_mask$partition0$;
var inst_31151 = (inst_31150 & (64));
var inst_31152 = inst_31143.cljs$core$ISeq$;
var inst_31153 = (inst_31151) || (inst_31152);
var state_31213__$1 = state_31213;
if(cljs.core.truth_(inst_31153)){
var statearr_31233_31291 = state_31213__$1;
(statearr_31233_31291[(1)] = (16));

} else {
var statearr_31234_31292 = state_31213__$1;
(statearr_31234_31292[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (22))){
var inst_31172 = (state_31213[(14)]);
var inst_31173 = (state_31213[(11)]);
var inst_31171 = (state_31213[(2)]);
var inst_31172__$1 = cljs.core.nth.call(null,inst_31171,(0),null);
var inst_31173__$1 = cljs.core.nth.call(null,inst_31171,(1),null);
var inst_31174 = (inst_31172__$1 == null);
var inst_31175 = cljs.core._EQ_.call(null,inst_31173__$1,change);
var inst_31176 = (inst_31174) || (inst_31175);
var state_31213__$1 = (function (){var statearr_31235 = state_31213;
(statearr_31235[(14)] = inst_31172__$1);

(statearr_31235[(11)] = inst_31173__$1);

return statearr_31235;
})();
if(cljs.core.truth_(inst_31176)){
var statearr_31236_31293 = state_31213__$1;
(statearr_31236_31293[(1)] = (23));

} else {
var statearr_31237_31294 = state_31213__$1;
(statearr_31237_31294[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (36))){
var inst_31165 = (state_31213[(12)]);
var inst_31143 = inst_31165;
var state_31213__$1 = (function (){var statearr_31238 = state_31213;
(statearr_31238[(7)] = inst_31143);

return statearr_31238;
})();
var statearr_31239_31295 = state_31213__$1;
(statearr_31239_31295[(2)] = null);

(statearr_31239_31295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (29))){
var inst_31187 = (state_31213[(9)]);
var state_31213__$1 = state_31213;
var statearr_31240_31296 = state_31213__$1;
(statearr_31240_31296[(2)] = inst_31187);

(statearr_31240_31296[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (6))){
var state_31213__$1 = state_31213;
var statearr_31241_31297 = state_31213__$1;
(statearr_31241_31297[(2)] = false);

(statearr_31241_31297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (28))){
var inst_31183 = (state_31213[(2)]);
var inst_31184 = calc_state.call(null);
var inst_31143 = inst_31184;
var state_31213__$1 = (function (){var statearr_31242 = state_31213;
(statearr_31242[(15)] = inst_31183);

(statearr_31242[(7)] = inst_31143);

return statearr_31242;
})();
var statearr_31243_31298 = state_31213__$1;
(statearr_31243_31298[(2)] = null);

(statearr_31243_31298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (25))){
var inst_31209 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
var statearr_31244_31299 = state_31213__$1;
(statearr_31244_31299[(2)] = inst_31209);

(statearr_31244_31299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (34))){
var inst_31207 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
var statearr_31245_31300 = state_31213__$1;
(statearr_31245_31300[(2)] = inst_31207);

(statearr_31245_31300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (17))){
var state_31213__$1 = state_31213;
var statearr_31246_31301 = state_31213__$1;
(statearr_31246_31301[(2)] = false);

(statearr_31246_31301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (3))){
var state_31213__$1 = state_31213;
var statearr_31247_31302 = state_31213__$1;
(statearr_31247_31302[(2)] = false);

(statearr_31247_31302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (12))){
var inst_31211 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31213__$1,inst_31211);
} else {
if((state_val_31214 === (2))){
var inst_31119 = (state_31213[(8)]);
var inst_31124 = inst_31119.cljs$lang$protocol_mask$partition0$;
var inst_31125 = (inst_31124 & (64));
var inst_31126 = inst_31119.cljs$core$ISeq$;
var inst_31127 = (inst_31125) || (inst_31126);
var state_31213__$1 = state_31213;
if(cljs.core.truth_(inst_31127)){
var statearr_31248_31303 = state_31213__$1;
(statearr_31248_31303[(1)] = (5));

} else {
var statearr_31249_31304 = state_31213__$1;
(statearr_31249_31304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (23))){
var inst_31172 = (state_31213[(14)]);
var inst_31178 = (inst_31172 == null);
var state_31213__$1 = state_31213;
if(cljs.core.truth_(inst_31178)){
var statearr_31250_31305 = state_31213__$1;
(statearr_31250_31305[(1)] = (26));

} else {
var statearr_31251_31306 = state_31213__$1;
(statearr_31251_31306[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (35))){
var inst_31198 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
if(cljs.core.truth_(inst_31198)){
var statearr_31252_31307 = state_31213__$1;
(statearr_31252_31307[(1)] = (36));

} else {
var statearr_31253_31308 = state_31213__$1;
(statearr_31253_31308[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (19))){
var inst_31143 = (state_31213[(7)]);
var inst_31162 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31143);
var state_31213__$1 = state_31213;
var statearr_31254_31309 = state_31213__$1;
(statearr_31254_31309[(2)] = inst_31162);

(statearr_31254_31309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (11))){
var inst_31143 = (state_31213[(7)]);
var inst_31147 = (inst_31143 == null);
var inst_31148 = cljs.core.not.call(null,inst_31147);
var state_31213__$1 = state_31213;
if(inst_31148){
var statearr_31255_31310 = state_31213__$1;
(statearr_31255_31310[(1)] = (13));

} else {
var statearr_31256_31311 = state_31213__$1;
(statearr_31256_31311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (9))){
var inst_31119 = (state_31213[(8)]);
var state_31213__$1 = state_31213;
var statearr_31257_31312 = state_31213__$1;
(statearr_31257_31312[(2)] = inst_31119);

(statearr_31257_31312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (5))){
var state_31213__$1 = state_31213;
var statearr_31258_31313 = state_31213__$1;
(statearr_31258_31313[(2)] = true);

(statearr_31258_31313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (14))){
var state_31213__$1 = state_31213;
var statearr_31259_31314 = state_31213__$1;
(statearr_31259_31314[(2)] = false);

(statearr_31259_31314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (26))){
var inst_31173 = (state_31213[(11)]);
var inst_31180 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31173);
var state_31213__$1 = state_31213;
var statearr_31260_31315 = state_31213__$1;
(statearr_31260_31315[(2)] = inst_31180);

(statearr_31260_31315[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (16))){
var state_31213__$1 = state_31213;
var statearr_31261_31316 = state_31213__$1;
(statearr_31261_31316[(2)] = true);

(statearr_31261_31316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (38))){
var inst_31203 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
var statearr_31262_31317 = state_31213__$1;
(statearr_31262_31317[(2)] = inst_31203);

(statearr_31262_31317[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (30))){
var inst_31167 = (state_31213[(13)]);
var inst_31166 = (state_31213[(10)]);
var inst_31173 = (state_31213[(11)]);
var inst_31190 = cljs.core.empty_QMARK_.call(null,inst_31166);
var inst_31191 = inst_31167.call(null,inst_31173);
var inst_31192 = cljs.core.not.call(null,inst_31191);
var inst_31193 = (inst_31190) && (inst_31192);
var state_31213__$1 = state_31213;
var statearr_31263_31318 = state_31213__$1;
(statearr_31263_31318[(2)] = inst_31193);

(statearr_31263_31318[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (10))){
var inst_31119 = (state_31213[(8)]);
var inst_31139 = (state_31213[(2)]);
var inst_31140 = cljs.core.get.call(null,inst_31139,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31141 = cljs.core.get.call(null,inst_31139,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31142 = cljs.core.get.call(null,inst_31139,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31143 = inst_31119;
var state_31213__$1 = (function (){var statearr_31264 = state_31213;
(statearr_31264[(16)] = inst_31140);

(statearr_31264[(7)] = inst_31143);

(statearr_31264[(17)] = inst_31141);

(statearr_31264[(18)] = inst_31142);

return statearr_31264;
})();
var statearr_31265_31319 = state_31213__$1;
(statearr_31265_31319[(2)] = null);

(statearr_31265_31319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (18))){
var inst_31157 = (state_31213[(2)]);
var state_31213__$1 = state_31213;
var statearr_31266_31320 = state_31213__$1;
(statearr_31266_31320[(2)] = inst_31157);

(statearr_31266_31320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (37))){
var state_31213__$1 = state_31213;
var statearr_31267_31321 = state_31213__$1;
(statearr_31267_31321[(2)] = null);

(statearr_31267_31321[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31214 === (8))){
var inst_31119 = (state_31213[(8)]);
var inst_31136 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31119);
var state_31213__$1 = state_31213;
var statearr_31268_31322 = state_31213__$1;
(statearr_31268_31322[(2)] = inst_31136);

(statearr_31268_31322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___31276,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29421__auto__,c__29533__auto___31276,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29422__auto__ = null;
var cljs$core$async$mix_$_state_machine__29422__auto____0 = (function (){
var statearr_31272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31272[(0)] = cljs$core$async$mix_$_state_machine__29422__auto__);

(statearr_31272[(1)] = (1));

return statearr_31272;
});
var cljs$core$async$mix_$_state_machine__29422__auto____1 = (function (state_31213){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_31213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e31273){if((e31273 instanceof Object)){
var ex__29425__auto__ = e31273;
var statearr_31274_31323 = state_31213;
(statearr_31274_31323[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31324 = state_31213;
state_31213 = G__31324;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29422__auto__ = function(state_31213){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29422__auto____1.call(this,state_31213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29422__auto____0;
cljs$core$async$mix_$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29422__auto____1;
return cljs$core$async$mix_$_state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___31276,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29535__auto__ = (function (){var statearr_31275 = f__29534__auto__.call(null);
(statearr_31275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___31276);

return statearr_31275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___31276,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25663__auto__ = (((p == null))?null:p);
var m__25664__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25664__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25663__auto__ = (((p == null))?null:p);
var m__25664__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,p,v,ch);
} else {
var m__25664__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31325 = [];
var len__26066__auto___31328 = arguments.length;
var i__26067__auto___31329 = (0);
while(true){
if((i__26067__auto___31329 < len__26066__auto___31328)){
args31325.push((arguments[i__26067__auto___31329]));

var G__31330 = (i__26067__auto___31329 + (1));
i__26067__auto___31329 = G__31330;
continue;
} else {
}
break;
}

var G__31327 = args31325.length;
switch (G__31327) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31325.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25663__auto__ = (((p == null))?null:p);
var m__25664__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,p);
} else {
var m__25664__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25663__auto__ = (((p == null))?null:p);
var m__25664__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25663__auto__)]);
if(!((m__25664__auto__ == null))){
return m__25664__auto__.call(null,p,v);
} else {
var m__25664__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25664__auto____$1 == null))){
return m__25664__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31333 = [];
var len__26066__auto___31458 = arguments.length;
var i__26067__auto___31459 = (0);
while(true){
if((i__26067__auto___31459 < len__26066__auto___31458)){
args31333.push((arguments[i__26067__auto___31459]));

var G__31460 = (i__26067__auto___31459 + (1));
i__26067__auto___31459 = G__31460;
continue;
} else {
}
break;
}

var G__31335 = args31333.length;
switch (G__31335) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31333.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25008__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25008__auto__)){
return or__25008__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25008__auto__,mults){
return (function (p1__31332_SHARP_){
if(cljs.core.truth_(p1__31332_SHARP_.call(null,topic))){
return p1__31332_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31332_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25008__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31336 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31337){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31337 = meta31337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31338,meta31337__$1){
var self__ = this;
var _31338__$1 = this;
return (new cljs.core.async.t_cljs$core$async31336(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31337__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31338){
var self__ = this;
var _31338__$1 = this;
return self__.meta31337;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31336.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31336.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31336.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31336.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31336.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31336.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31336.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31337","meta31337",-1635986534,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31336";

cljs.core.async.t_cljs$core$async31336.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async/t_cljs$core$async31336");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31336 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31336(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31337){
return (new cljs.core.async.t_cljs$core$async31336(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31337));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31336(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29533__auto___31462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___31462,mults,ensure_mult,p){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___31462,mults,ensure_mult,p){
return (function (state_31410){
var state_val_31411 = (state_31410[(1)]);
if((state_val_31411 === (7))){
var inst_31406 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31412_31463 = state_31410__$1;
(statearr_31412_31463[(2)] = inst_31406);

(statearr_31412_31463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (20))){
var state_31410__$1 = state_31410;
var statearr_31413_31464 = state_31410__$1;
(statearr_31413_31464[(2)] = null);

(statearr_31413_31464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (1))){
var state_31410__$1 = state_31410;
var statearr_31414_31465 = state_31410__$1;
(statearr_31414_31465[(2)] = null);

(statearr_31414_31465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (24))){
var inst_31389 = (state_31410[(7)]);
var inst_31398 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31389);
var state_31410__$1 = state_31410;
var statearr_31415_31466 = state_31410__$1;
(statearr_31415_31466[(2)] = inst_31398);

(statearr_31415_31466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (4))){
var inst_31341 = (state_31410[(8)]);
var inst_31341__$1 = (state_31410[(2)]);
var inst_31342 = (inst_31341__$1 == null);
var state_31410__$1 = (function (){var statearr_31416 = state_31410;
(statearr_31416[(8)] = inst_31341__$1);

return statearr_31416;
})();
if(cljs.core.truth_(inst_31342)){
var statearr_31417_31467 = state_31410__$1;
(statearr_31417_31467[(1)] = (5));

} else {
var statearr_31418_31468 = state_31410__$1;
(statearr_31418_31468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (15))){
var inst_31383 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31419_31469 = state_31410__$1;
(statearr_31419_31469[(2)] = inst_31383);

(statearr_31419_31469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (21))){
var inst_31403 = (state_31410[(2)]);
var state_31410__$1 = (function (){var statearr_31420 = state_31410;
(statearr_31420[(9)] = inst_31403);

return statearr_31420;
})();
var statearr_31421_31470 = state_31410__$1;
(statearr_31421_31470[(2)] = null);

(statearr_31421_31470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (13))){
var inst_31365 = (state_31410[(10)]);
var inst_31367 = cljs.core.chunked_seq_QMARK_.call(null,inst_31365);
var state_31410__$1 = state_31410;
if(inst_31367){
var statearr_31422_31471 = state_31410__$1;
(statearr_31422_31471[(1)] = (16));

} else {
var statearr_31423_31472 = state_31410__$1;
(statearr_31423_31472[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (22))){
var inst_31395 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
if(cljs.core.truth_(inst_31395)){
var statearr_31424_31473 = state_31410__$1;
(statearr_31424_31473[(1)] = (23));

} else {
var statearr_31425_31474 = state_31410__$1;
(statearr_31425_31474[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (6))){
var inst_31391 = (state_31410[(11)]);
var inst_31341 = (state_31410[(8)]);
var inst_31389 = (state_31410[(7)]);
var inst_31389__$1 = topic_fn.call(null,inst_31341);
var inst_31390 = cljs.core.deref.call(null,mults);
var inst_31391__$1 = cljs.core.get.call(null,inst_31390,inst_31389__$1);
var state_31410__$1 = (function (){var statearr_31426 = state_31410;
(statearr_31426[(11)] = inst_31391__$1);

(statearr_31426[(7)] = inst_31389__$1);

return statearr_31426;
})();
if(cljs.core.truth_(inst_31391__$1)){
var statearr_31427_31475 = state_31410__$1;
(statearr_31427_31475[(1)] = (19));

} else {
var statearr_31428_31476 = state_31410__$1;
(statearr_31428_31476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (25))){
var inst_31400 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31429_31477 = state_31410__$1;
(statearr_31429_31477[(2)] = inst_31400);

(statearr_31429_31477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (17))){
var inst_31365 = (state_31410[(10)]);
var inst_31374 = cljs.core.first.call(null,inst_31365);
var inst_31375 = cljs.core.async.muxch_STAR_.call(null,inst_31374);
var inst_31376 = cljs.core.async.close_BANG_.call(null,inst_31375);
var inst_31377 = cljs.core.next.call(null,inst_31365);
var inst_31351 = inst_31377;
var inst_31352 = null;
var inst_31353 = (0);
var inst_31354 = (0);
var state_31410__$1 = (function (){var statearr_31430 = state_31410;
(statearr_31430[(12)] = inst_31352);

(statearr_31430[(13)] = inst_31353);

(statearr_31430[(14)] = inst_31354);

(statearr_31430[(15)] = inst_31376);

(statearr_31430[(16)] = inst_31351);

return statearr_31430;
})();
var statearr_31431_31478 = state_31410__$1;
(statearr_31431_31478[(2)] = null);

(statearr_31431_31478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (3))){
var inst_31408 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31410__$1,inst_31408);
} else {
if((state_val_31411 === (12))){
var inst_31385 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31432_31479 = state_31410__$1;
(statearr_31432_31479[(2)] = inst_31385);

(statearr_31432_31479[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (2))){
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31410__$1,(4),ch);
} else {
if((state_val_31411 === (23))){
var state_31410__$1 = state_31410;
var statearr_31433_31480 = state_31410__$1;
(statearr_31433_31480[(2)] = null);

(statearr_31433_31480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (19))){
var inst_31391 = (state_31410[(11)]);
var inst_31341 = (state_31410[(8)]);
var inst_31393 = cljs.core.async.muxch_STAR_.call(null,inst_31391);
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31410__$1,(22),inst_31393,inst_31341);
} else {
if((state_val_31411 === (11))){
var inst_31365 = (state_31410[(10)]);
var inst_31351 = (state_31410[(16)]);
var inst_31365__$1 = cljs.core.seq.call(null,inst_31351);
var state_31410__$1 = (function (){var statearr_31434 = state_31410;
(statearr_31434[(10)] = inst_31365__$1);

return statearr_31434;
})();
if(inst_31365__$1){
var statearr_31435_31481 = state_31410__$1;
(statearr_31435_31481[(1)] = (13));

} else {
var statearr_31436_31482 = state_31410__$1;
(statearr_31436_31482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (9))){
var inst_31387 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31437_31483 = state_31410__$1;
(statearr_31437_31483[(2)] = inst_31387);

(statearr_31437_31483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (5))){
var inst_31348 = cljs.core.deref.call(null,mults);
var inst_31349 = cljs.core.vals.call(null,inst_31348);
var inst_31350 = cljs.core.seq.call(null,inst_31349);
var inst_31351 = inst_31350;
var inst_31352 = null;
var inst_31353 = (0);
var inst_31354 = (0);
var state_31410__$1 = (function (){var statearr_31438 = state_31410;
(statearr_31438[(12)] = inst_31352);

(statearr_31438[(13)] = inst_31353);

(statearr_31438[(14)] = inst_31354);

(statearr_31438[(16)] = inst_31351);

return statearr_31438;
})();
var statearr_31439_31484 = state_31410__$1;
(statearr_31439_31484[(2)] = null);

(statearr_31439_31484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (14))){
var state_31410__$1 = state_31410;
var statearr_31443_31485 = state_31410__$1;
(statearr_31443_31485[(2)] = null);

(statearr_31443_31485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (16))){
var inst_31365 = (state_31410[(10)]);
var inst_31369 = cljs.core.chunk_first.call(null,inst_31365);
var inst_31370 = cljs.core.chunk_rest.call(null,inst_31365);
var inst_31371 = cljs.core.count.call(null,inst_31369);
var inst_31351 = inst_31370;
var inst_31352 = inst_31369;
var inst_31353 = inst_31371;
var inst_31354 = (0);
var state_31410__$1 = (function (){var statearr_31444 = state_31410;
(statearr_31444[(12)] = inst_31352);

(statearr_31444[(13)] = inst_31353);

(statearr_31444[(14)] = inst_31354);

(statearr_31444[(16)] = inst_31351);

return statearr_31444;
})();
var statearr_31445_31486 = state_31410__$1;
(statearr_31445_31486[(2)] = null);

(statearr_31445_31486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (10))){
var inst_31352 = (state_31410[(12)]);
var inst_31353 = (state_31410[(13)]);
var inst_31354 = (state_31410[(14)]);
var inst_31351 = (state_31410[(16)]);
var inst_31359 = cljs.core._nth.call(null,inst_31352,inst_31354);
var inst_31360 = cljs.core.async.muxch_STAR_.call(null,inst_31359);
var inst_31361 = cljs.core.async.close_BANG_.call(null,inst_31360);
var inst_31362 = (inst_31354 + (1));
var tmp31440 = inst_31352;
var tmp31441 = inst_31353;
var tmp31442 = inst_31351;
var inst_31351__$1 = tmp31442;
var inst_31352__$1 = tmp31440;
var inst_31353__$1 = tmp31441;
var inst_31354__$1 = inst_31362;
var state_31410__$1 = (function (){var statearr_31446 = state_31410;
(statearr_31446[(12)] = inst_31352__$1);

(statearr_31446[(13)] = inst_31353__$1);

(statearr_31446[(14)] = inst_31354__$1);

(statearr_31446[(17)] = inst_31361);

(statearr_31446[(16)] = inst_31351__$1);

return statearr_31446;
})();
var statearr_31447_31487 = state_31410__$1;
(statearr_31447_31487[(2)] = null);

(statearr_31447_31487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (18))){
var inst_31380 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31448_31488 = state_31410__$1;
(statearr_31448_31488[(2)] = inst_31380);

(statearr_31448_31488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (8))){
var inst_31353 = (state_31410[(13)]);
var inst_31354 = (state_31410[(14)]);
var inst_31356 = (inst_31354 < inst_31353);
var inst_31357 = inst_31356;
var state_31410__$1 = state_31410;
if(cljs.core.truth_(inst_31357)){
var statearr_31449_31489 = state_31410__$1;
(statearr_31449_31489[(1)] = (10));

} else {
var statearr_31450_31490 = state_31410__$1;
(statearr_31450_31490[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___31462,mults,ensure_mult,p))
;
return ((function (switch__29421__auto__,c__29533__auto___31462,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_31454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31454[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_31454[(1)] = (1));

return statearr_31454;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_31410){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_31410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e31455){if((e31455 instanceof Object)){
var ex__29425__auto__ = e31455;
var statearr_31456_31491 = state_31410;
(statearr_31456_31491[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31492 = state_31410;
state_31410 = G__31492;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_31410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_31410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___31462,mults,ensure_mult,p))
})();
var state__29535__auto__ = (function (){var statearr_31457 = f__29534__auto__.call(null);
(statearr_31457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___31462);

return statearr_31457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___31462,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31493 = [];
var len__26066__auto___31496 = arguments.length;
var i__26067__auto___31497 = (0);
while(true){
if((i__26067__auto___31497 < len__26066__auto___31496)){
args31493.push((arguments[i__26067__auto___31497]));

var G__31498 = (i__26067__auto___31497 + (1));
i__26067__auto___31497 = G__31498;
continue;
} else {
}
break;
}

var G__31495 = args31493.length;
switch (G__31495) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31493.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31500 = [];
var len__26066__auto___31503 = arguments.length;
var i__26067__auto___31504 = (0);
while(true){
if((i__26067__auto___31504 < len__26066__auto___31503)){
args31500.push((arguments[i__26067__auto___31504]));

var G__31505 = (i__26067__auto___31504 + (1));
i__26067__auto___31504 = G__31505;
continue;
} else {
}
break;
}

var G__31502 = args31500.length;
switch (G__31502) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31500.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31507 = [];
var len__26066__auto___31578 = arguments.length;
var i__26067__auto___31579 = (0);
while(true){
if((i__26067__auto___31579 < len__26066__auto___31578)){
args31507.push((arguments[i__26067__auto___31579]));

var G__31580 = (i__26067__auto___31579 + (1));
i__26067__auto___31579 = G__31580;
continue;
} else {
}
break;
}

var G__31509 = args31507.length;
switch (G__31509) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31507.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29533__auto___31582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___31582,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___31582,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31548){
var state_val_31549 = (state_31548[(1)]);
if((state_val_31549 === (7))){
var state_31548__$1 = state_31548;
var statearr_31550_31583 = state_31548__$1;
(statearr_31550_31583[(2)] = null);

(statearr_31550_31583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (1))){
var state_31548__$1 = state_31548;
var statearr_31551_31584 = state_31548__$1;
(statearr_31551_31584[(2)] = null);

(statearr_31551_31584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (4))){
var inst_31512 = (state_31548[(7)]);
var inst_31514 = (inst_31512 < cnt);
var state_31548__$1 = state_31548;
if(cljs.core.truth_(inst_31514)){
var statearr_31552_31585 = state_31548__$1;
(statearr_31552_31585[(1)] = (6));

} else {
var statearr_31553_31586 = state_31548__$1;
(statearr_31553_31586[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (15))){
var inst_31544 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31554_31587 = state_31548__$1;
(statearr_31554_31587[(2)] = inst_31544);

(statearr_31554_31587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (13))){
var inst_31537 = cljs.core.async.close_BANG_.call(null,out);
var state_31548__$1 = state_31548;
var statearr_31555_31588 = state_31548__$1;
(statearr_31555_31588[(2)] = inst_31537);

(statearr_31555_31588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (6))){
var state_31548__$1 = state_31548;
var statearr_31556_31589 = state_31548__$1;
(statearr_31556_31589[(2)] = null);

(statearr_31556_31589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (3))){
var inst_31546 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31548__$1,inst_31546);
} else {
if((state_val_31549 === (12))){
var inst_31534 = (state_31548[(8)]);
var inst_31534__$1 = (state_31548[(2)]);
var inst_31535 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31534__$1);
var state_31548__$1 = (function (){var statearr_31557 = state_31548;
(statearr_31557[(8)] = inst_31534__$1);

return statearr_31557;
})();
if(cljs.core.truth_(inst_31535)){
var statearr_31558_31590 = state_31548__$1;
(statearr_31558_31590[(1)] = (13));

} else {
var statearr_31559_31591 = state_31548__$1;
(statearr_31559_31591[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (2))){
var inst_31511 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31512 = (0);
var state_31548__$1 = (function (){var statearr_31560 = state_31548;
(statearr_31560[(7)] = inst_31512);

(statearr_31560[(9)] = inst_31511);

return statearr_31560;
})();
var statearr_31561_31592 = state_31548__$1;
(statearr_31561_31592[(2)] = null);

(statearr_31561_31592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (11))){
var inst_31512 = (state_31548[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31548,(10),Object,null,(9));
var inst_31521 = chs__$1.call(null,inst_31512);
var inst_31522 = done.call(null,inst_31512);
var inst_31523 = cljs.core.async.take_BANG_.call(null,inst_31521,inst_31522);
var state_31548__$1 = state_31548;
var statearr_31562_31593 = state_31548__$1;
(statearr_31562_31593[(2)] = inst_31523);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31548__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (9))){
var inst_31512 = (state_31548[(7)]);
var inst_31525 = (state_31548[(2)]);
var inst_31526 = (inst_31512 + (1));
var inst_31512__$1 = inst_31526;
var state_31548__$1 = (function (){var statearr_31563 = state_31548;
(statearr_31563[(10)] = inst_31525);

(statearr_31563[(7)] = inst_31512__$1);

return statearr_31563;
})();
var statearr_31564_31594 = state_31548__$1;
(statearr_31564_31594[(2)] = null);

(statearr_31564_31594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (5))){
var inst_31532 = (state_31548[(2)]);
var state_31548__$1 = (function (){var statearr_31565 = state_31548;
(statearr_31565[(11)] = inst_31532);

return statearr_31565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31548__$1,(12),dchan);
} else {
if((state_val_31549 === (14))){
var inst_31534 = (state_31548[(8)]);
var inst_31539 = cljs.core.apply.call(null,f,inst_31534);
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31548__$1,(16),out,inst_31539);
} else {
if((state_val_31549 === (16))){
var inst_31541 = (state_31548[(2)]);
var state_31548__$1 = (function (){var statearr_31566 = state_31548;
(statearr_31566[(12)] = inst_31541);

return statearr_31566;
})();
var statearr_31567_31595 = state_31548__$1;
(statearr_31567_31595[(2)] = null);

(statearr_31567_31595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (10))){
var inst_31516 = (state_31548[(2)]);
var inst_31517 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31548__$1 = (function (){var statearr_31568 = state_31548;
(statearr_31568[(13)] = inst_31516);

return statearr_31568;
})();
var statearr_31569_31596 = state_31548__$1;
(statearr_31569_31596[(2)] = inst_31517);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31548__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (8))){
var inst_31530 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31570_31597 = state_31548__$1;
(statearr_31570_31597[(2)] = inst_31530);

(statearr_31570_31597[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___31582,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29421__auto__,c__29533__auto___31582,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_31574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31574[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_31574[(1)] = (1));

return statearr_31574;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_31548){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_31548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e31575){if((e31575 instanceof Object)){
var ex__29425__auto__ = e31575;
var statearr_31576_31598 = state_31548;
(statearr_31576_31598[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31599 = state_31548;
state_31548 = G__31599;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_31548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_31548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___31582,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29535__auto__ = (function (){var statearr_31577 = f__29534__auto__.call(null);
(statearr_31577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___31582);

return statearr_31577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___31582,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31601 = [];
var len__26066__auto___31657 = arguments.length;
var i__26067__auto___31658 = (0);
while(true){
if((i__26067__auto___31658 < len__26066__auto___31657)){
args31601.push((arguments[i__26067__auto___31658]));

var G__31659 = (i__26067__auto___31658 + (1));
i__26067__auto___31658 = G__31659;
continue;
} else {
}
break;
}

var G__31603 = args31601.length;
switch (G__31603) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31601.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29533__auto___31661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___31661,out){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___31661,out){
return (function (state_31633){
var state_val_31634 = (state_31633[(1)]);
if((state_val_31634 === (7))){
var inst_31612 = (state_31633[(7)]);
var inst_31613 = (state_31633[(8)]);
var inst_31612__$1 = (state_31633[(2)]);
var inst_31613__$1 = cljs.core.nth.call(null,inst_31612__$1,(0),null);
var inst_31614 = cljs.core.nth.call(null,inst_31612__$1,(1),null);
var inst_31615 = (inst_31613__$1 == null);
var state_31633__$1 = (function (){var statearr_31635 = state_31633;
(statearr_31635[(9)] = inst_31614);

(statearr_31635[(7)] = inst_31612__$1);

(statearr_31635[(8)] = inst_31613__$1);

return statearr_31635;
})();
if(cljs.core.truth_(inst_31615)){
var statearr_31636_31662 = state_31633__$1;
(statearr_31636_31662[(1)] = (8));

} else {
var statearr_31637_31663 = state_31633__$1;
(statearr_31637_31663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (1))){
var inst_31604 = cljs.core.vec.call(null,chs);
var inst_31605 = inst_31604;
var state_31633__$1 = (function (){var statearr_31638 = state_31633;
(statearr_31638[(10)] = inst_31605);

return statearr_31638;
})();
var statearr_31639_31664 = state_31633__$1;
(statearr_31639_31664[(2)] = null);

(statearr_31639_31664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (4))){
var inst_31605 = (state_31633[(10)]);
var state_31633__$1 = state_31633;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31633__$1,(7),inst_31605);
} else {
if((state_val_31634 === (6))){
var inst_31629 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31640_31665 = state_31633__$1;
(statearr_31640_31665[(2)] = inst_31629);

(statearr_31640_31665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (3))){
var inst_31631 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31633__$1,inst_31631);
} else {
if((state_val_31634 === (2))){
var inst_31605 = (state_31633[(10)]);
var inst_31607 = cljs.core.count.call(null,inst_31605);
var inst_31608 = (inst_31607 > (0));
var state_31633__$1 = state_31633;
if(cljs.core.truth_(inst_31608)){
var statearr_31642_31666 = state_31633__$1;
(statearr_31642_31666[(1)] = (4));

} else {
var statearr_31643_31667 = state_31633__$1;
(statearr_31643_31667[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (11))){
var inst_31605 = (state_31633[(10)]);
var inst_31622 = (state_31633[(2)]);
var tmp31641 = inst_31605;
var inst_31605__$1 = tmp31641;
var state_31633__$1 = (function (){var statearr_31644 = state_31633;
(statearr_31644[(11)] = inst_31622);

(statearr_31644[(10)] = inst_31605__$1);

return statearr_31644;
})();
var statearr_31645_31668 = state_31633__$1;
(statearr_31645_31668[(2)] = null);

(statearr_31645_31668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (9))){
var inst_31613 = (state_31633[(8)]);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31633__$1,(11),out,inst_31613);
} else {
if((state_val_31634 === (5))){
var inst_31627 = cljs.core.async.close_BANG_.call(null,out);
var state_31633__$1 = state_31633;
var statearr_31646_31669 = state_31633__$1;
(statearr_31646_31669[(2)] = inst_31627);

(statearr_31646_31669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (10))){
var inst_31625 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31647_31670 = state_31633__$1;
(statearr_31647_31670[(2)] = inst_31625);

(statearr_31647_31670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (8))){
var inst_31614 = (state_31633[(9)]);
var inst_31605 = (state_31633[(10)]);
var inst_31612 = (state_31633[(7)]);
var inst_31613 = (state_31633[(8)]);
var inst_31617 = (function (){var cs = inst_31605;
var vec__31610 = inst_31612;
var v = inst_31613;
var c = inst_31614;
return ((function (cs,vec__31610,v,c,inst_31614,inst_31605,inst_31612,inst_31613,state_val_31634,c__29533__auto___31661,out){
return (function (p1__31600_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31600_SHARP_);
});
;})(cs,vec__31610,v,c,inst_31614,inst_31605,inst_31612,inst_31613,state_val_31634,c__29533__auto___31661,out))
})();
var inst_31618 = cljs.core.filterv.call(null,inst_31617,inst_31605);
var inst_31605__$1 = inst_31618;
var state_31633__$1 = (function (){var statearr_31648 = state_31633;
(statearr_31648[(10)] = inst_31605__$1);

return statearr_31648;
})();
var statearr_31649_31671 = state_31633__$1;
(statearr_31649_31671[(2)] = null);

(statearr_31649_31671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___31661,out))
;
return ((function (switch__29421__auto__,c__29533__auto___31661,out){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_31653 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31653[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_31653[(1)] = (1));

return statearr_31653;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_31633){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_31633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e31654){if((e31654 instanceof Object)){
var ex__29425__auto__ = e31654;
var statearr_31655_31672 = state_31633;
(statearr_31655_31672[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31673 = state_31633;
state_31633 = G__31673;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_31633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_31633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___31661,out))
})();
var state__29535__auto__ = (function (){var statearr_31656 = f__29534__auto__.call(null);
(statearr_31656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___31661);

return statearr_31656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___31661,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31674 = [];
var len__26066__auto___31723 = arguments.length;
var i__26067__auto___31724 = (0);
while(true){
if((i__26067__auto___31724 < len__26066__auto___31723)){
args31674.push((arguments[i__26067__auto___31724]));

var G__31725 = (i__26067__auto___31724 + (1));
i__26067__auto___31724 = G__31725;
continue;
} else {
}
break;
}

var G__31676 = args31674.length;
switch (G__31676) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31674.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29533__auto___31727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___31727,out){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___31727,out){
return (function (state_31700){
var state_val_31701 = (state_31700[(1)]);
if((state_val_31701 === (7))){
var inst_31682 = (state_31700[(7)]);
var inst_31682__$1 = (state_31700[(2)]);
var inst_31683 = (inst_31682__$1 == null);
var inst_31684 = cljs.core.not.call(null,inst_31683);
var state_31700__$1 = (function (){var statearr_31702 = state_31700;
(statearr_31702[(7)] = inst_31682__$1);

return statearr_31702;
})();
if(inst_31684){
var statearr_31703_31728 = state_31700__$1;
(statearr_31703_31728[(1)] = (8));

} else {
var statearr_31704_31729 = state_31700__$1;
(statearr_31704_31729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (1))){
var inst_31677 = (0);
var state_31700__$1 = (function (){var statearr_31705 = state_31700;
(statearr_31705[(8)] = inst_31677);

return statearr_31705;
})();
var statearr_31706_31730 = state_31700__$1;
(statearr_31706_31730[(2)] = null);

(statearr_31706_31730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (4))){
var state_31700__$1 = state_31700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31700__$1,(7),ch);
} else {
if((state_val_31701 === (6))){
var inst_31695 = (state_31700[(2)]);
var state_31700__$1 = state_31700;
var statearr_31707_31731 = state_31700__$1;
(statearr_31707_31731[(2)] = inst_31695);

(statearr_31707_31731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (3))){
var inst_31697 = (state_31700[(2)]);
var inst_31698 = cljs.core.async.close_BANG_.call(null,out);
var state_31700__$1 = (function (){var statearr_31708 = state_31700;
(statearr_31708[(9)] = inst_31697);

return statearr_31708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31700__$1,inst_31698);
} else {
if((state_val_31701 === (2))){
var inst_31677 = (state_31700[(8)]);
var inst_31679 = (inst_31677 < n);
var state_31700__$1 = state_31700;
if(cljs.core.truth_(inst_31679)){
var statearr_31709_31732 = state_31700__$1;
(statearr_31709_31732[(1)] = (4));

} else {
var statearr_31710_31733 = state_31700__$1;
(statearr_31710_31733[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (11))){
var inst_31677 = (state_31700[(8)]);
var inst_31687 = (state_31700[(2)]);
var inst_31688 = (inst_31677 + (1));
var inst_31677__$1 = inst_31688;
var state_31700__$1 = (function (){var statearr_31711 = state_31700;
(statearr_31711[(10)] = inst_31687);

(statearr_31711[(8)] = inst_31677__$1);

return statearr_31711;
})();
var statearr_31712_31734 = state_31700__$1;
(statearr_31712_31734[(2)] = null);

(statearr_31712_31734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (9))){
var state_31700__$1 = state_31700;
var statearr_31713_31735 = state_31700__$1;
(statearr_31713_31735[(2)] = null);

(statearr_31713_31735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (5))){
var state_31700__$1 = state_31700;
var statearr_31714_31736 = state_31700__$1;
(statearr_31714_31736[(2)] = null);

(statearr_31714_31736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (10))){
var inst_31692 = (state_31700[(2)]);
var state_31700__$1 = state_31700;
var statearr_31715_31737 = state_31700__$1;
(statearr_31715_31737[(2)] = inst_31692);

(statearr_31715_31737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (8))){
var inst_31682 = (state_31700[(7)]);
var state_31700__$1 = state_31700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31700__$1,(11),out,inst_31682);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___31727,out))
;
return ((function (switch__29421__auto__,c__29533__auto___31727,out){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_31719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31719[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_31719[(1)] = (1));

return statearr_31719;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_31700){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_31700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e31720){if((e31720 instanceof Object)){
var ex__29425__auto__ = e31720;
var statearr_31721_31738 = state_31700;
(statearr_31721_31738[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31739 = state_31700;
state_31700 = G__31739;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_31700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_31700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___31727,out))
})();
var state__29535__auto__ = (function (){var statearr_31722 = f__29534__auto__.call(null);
(statearr_31722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___31727);

return statearr_31722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___31727,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31747 = (function (map_LT_,f,ch,meta31748){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31748 = meta31748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31749,meta31748__$1){
var self__ = this;
var _31749__$1 = this;
return (new cljs.core.async.t_cljs$core$async31747(self__.map_LT_,self__.f,self__.ch,meta31748__$1));
});

cljs.core.async.t_cljs$core$async31747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31749){
var self__ = this;
var _31749__$1 = this;
return self__.meta31748;
});

cljs.core.async.t_cljs$core$async31747.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31747.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31747.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31747.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31747.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31750 = (function (map_LT_,f,ch,meta31748,_,fn1,meta31751){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31748 = meta31748;
this._ = _;
this.fn1 = fn1;
this.meta31751 = meta31751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31752,meta31751__$1){
var self__ = this;
var _31752__$1 = this;
return (new cljs.core.async.t_cljs$core$async31750(self__.map_LT_,self__.f,self__.ch,self__.meta31748,self__._,self__.fn1,meta31751__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31752){
var self__ = this;
var _31752__$1 = this;
return self__.meta31751;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31740_SHARP_){
return f1.call(null,(((p1__31740_SHARP_ == null))?null:self__.f.call(null,p1__31740_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31750.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31748","meta31748",1950107529,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31747","cljs.core.async/t_cljs$core$async31747",-853746491,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31751","meta31751",-2070195146,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31750";

cljs.core.async.t_cljs$core$async31750.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async/t_cljs$core$async31750");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31750 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31750(map_LT___$1,f__$1,ch__$1,meta31748__$1,___$2,fn1__$1,meta31751){
return (new cljs.core.async.t_cljs$core$async31750(map_LT___$1,f__$1,ch__$1,meta31748__$1,___$2,fn1__$1,meta31751));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31750(self__.map_LT_,self__.f,self__.ch,self__.meta31748,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24996__auto__ = ret;
if(cljs.core.truth_(and__24996__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24996__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31747.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31747.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31748","meta31748",1950107529,null)], null);
});

cljs.core.async.t_cljs$core$async31747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31747";

cljs.core.async.t_cljs$core$async31747.cljs$lang$ctorPrWriter = (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async/t_cljs$core$async31747");
});

cljs.core.async.__GT_t_cljs$core$async31747 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31747(map_LT___$1,f__$1,ch__$1,meta31748){
return (new cljs.core.async.t_cljs$core$async31747(map_LT___$1,f__$1,ch__$1,meta31748));
});

}

return (new cljs.core.async.t_cljs$core$async31747(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31756 = (function (map_GT_,f,ch,meta31757){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31757 = meta31757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31758,meta31757__$1){
var self__ = this;
var _31758__$1 = this;
return (new cljs.core.async.t_cljs$core$async31756(self__.map_GT_,self__.f,self__.ch,meta31757__$1));
});

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31758){
var self__ = this;
var _31758__$1 = this;
return self__.meta31757;
});

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31757","meta31757",-2048637959,null)], null);
});

cljs.core.async.t_cljs$core$async31756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31756";

cljs.core.async.t_cljs$core$async31756.cljs$lang$ctorPrWriter = (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async/t_cljs$core$async31756");
});

cljs.core.async.__GT_t_cljs$core$async31756 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31756(map_GT___$1,f__$1,ch__$1,meta31757){
return (new cljs.core.async.t_cljs$core$async31756(map_GT___$1,f__$1,ch__$1,meta31757));
});

}

return (new cljs.core.async.t_cljs$core$async31756(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31762 = (function (filter_GT_,p,ch,meta31763){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31763 = meta31763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31764,meta31763__$1){
var self__ = this;
var _31764__$1 = this;
return (new cljs.core.async.t_cljs$core$async31762(self__.filter_GT_,self__.p,self__.ch,meta31763__$1));
});

cljs.core.async.t_cljs$core$async31762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31764){
var self__ = this;
var _31764__$1 = this;
return self__.meta31763;
});

cljs.core.async.t_cljs$core$async31762.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31762.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31762.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31762.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31763","meta31763",353393827,null)], null);
});

cljs.core.async.t_cljs$core$async31762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31762";

cljs.core.async.t_cljs$core$async31762.cljs$lang$ctorPrWriter = (function (this__25606__auto__,writer__25607__auto__,opt__25608__auto__){
return cljs.core._write.call(null,writer__25607__auto__,"cljs.core.async/t_cljs$core$async31762");
});

cljs.core.async.__GT_t_cljs$core$async31762 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31762(filter_GT___$1,p__$1,ch__$1,meta31763){
return (new cljs.core.async.t_cljs$core$async31762(filter_GT___$1,p__$1,ch__$1,meta31763));
});

}

return (new cljs.core.async.t_cljs$core$async31762(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31765 = [];
var len__26066__auto___31809 = arguments.length;
var i__26067__auto___31810 = (0);
while(true){
if((i__26067__auto___31810 < len__26066__auto___31809)){
args31765.push((arguments[i__26067__auto___31810]));

var G__31811 = (i__26067__auto___31810 + (1));
i__26067__auto___31810 = G__31811;
continue;
} else {
}
break;
}

var G__31767 = args31765.length;
switch (G__31767) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31765.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29533__auto___31813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___31813,out){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___31813,out){
return (function (state_31788){
var state_val_31789 = (state_31788[(1)]);
if((state_val_31789 === (7))){
var inst_31784 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31790_31814 = state_31788__$1;
(statearr_31790_31814[(2)] = inst_31784);

(statearr_31790_31814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (1))){
var state_31788__$1 = state_31788;
var statearr_31791_31815 = state_31788__$1;
(statearr_31791_31815[(2)] = null);

(statearr_31791_31815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (4))){
var inst_31770 = (state_31788[(7)]);
var inst_31770__$1 = (state_31788[(2)]);
var inst_31771 = (inst_31770__$1 == null);
var state_31788__$1 = (function (){var statearr_31792 = state_31788;
(statearr_31792[(7)] = inst_31770__$1);

return statearr_31792;
})();
if(cljs.core.truth_(inst_31771)){
var statearr_31793_31816 = state_31788__$1;
(statearr_31793_31816[(1)] = (5));

} else {
var statearr_31794_31817 = state_31788__$1;
(statearr_31794_31817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (6))){
var inst_31770 = (state_31788[(7)]);
var inst_31775 = p.call(null,inst_31770);
var state_31788__$1 = state_31788;
if(cljs.core.truth_(inst_31775)){
var statearr_31795_31818 = state_31788__$1;
(statearr_31795_31818[(1)] = (8));

} else {
var statearr_31796_31819 = state_31788__$1;
(statearr_31796_31819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (3))){
var inst_31786 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31788__$1,inst_31786);
} else {
if((state_val_31789 === (2))){
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31788__$1,(4),ch);
} else {
if((state_val_31789 === (11))){
var inst_31778 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31797_31820 = state_31788__$1;
(statearr_31797_31820[(2)] = inst_31778);

(statearr_31797_31820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (9))){
var state_31788__$1 = state_31788;
var statearr_31798_31821 = state_31788__$1;
(statearr_31798_31821[(2)] = null);

(statearr_31798_31821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (5))){
var inst_31773 = cljs.core.async.close_BANG_.call(null,out);
var state_31788__$1 = state_31788;
var statearr_31799_31822 = state_31788__$1;
(statearr_31799_31822[(2)] = inst_31773);

(statearr_31799_31822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (10))){
var inst_31781 = (state_31788[(2)]);
var state_31788__$1 = (function (){var statearr_31800 = state_31788;
(statearr_31800[(8)] = inst_31781);

return statearr_31800;
})();
var statearr_31801_31823 = state_31788__$1;
(statearr_31801_31823[(2)] = null);

(statearr_31801_31823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (8))){
var inst_31770 = (state_31788[(7)]);
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31788__$1,(11),out,inst_31770);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___31813,out))
;
return ((function (switch__29421__auto__,c__29533__auto___31813,out){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_31805 = [null,null,null,null,null,null,null,null,null];
(statearr_31805[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_31805[(1)] = (1));

return statearr_31805;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_31788){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_31788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e31806){if((e31806 instanceof Object)){
var ex__29425__auto__ = e31806;
var statearr_31807_31824 = state_31788;
(statearr_31807_31824[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31825 = state_31788;
state_31788 = G__31825;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_31788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_31788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___31813,out))
})();
var state__29535__auto__ = (function (){var statearr_31808 = f__29534__auto__.call(null);
(statearr_31808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___31813);

return statearr_31808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___31813,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31826 = [];
var len__26066__auto___31829 = arguments.length;
var i__26067__auto___31830 = (0);
while(true){
if((i__26067__auto___31830 < len__26066__auto___31829)){
args31826.push((arguments[i__26067__auto___31830]));

var G__31831 = (i__26067__auto___31830 + (1));
i__26067__auto___31830 = G__31831;
continue;
} else {
}
break;
}

var G__31828 = args31826.length;
switch (G__31828) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31826.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto__){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto__){
return (function (state_31998){
var state_val_31999 = (state_31998[(1)]);
if((state_val_31999 === (7))){
var inst_31994 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32000_32041 = state_31998__$1;
(statearr_32000_32041[(2)] = inst_31994);

(statearr_32000_32041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (20))){
var inst_31964 = (state_31998[(7)]);
var inst_31975 = (state_31998[(2)]);
var inst_31976 = cljs.core.next.call(null,inst_31964);
var inst_31950 = inst_31976;
var inst_31951 = null;
var inst_31952 = (0);
var inst_31953 = (0);
var state_31998__$1 = (function (){var statearr_32001 = state_31998;
(statearr_32001[(8)] = inst_31975);

(statearr_32001[(9)] = inst_31953);

(statearr_32001[(10)] = inst_31950);

(statearr_32001[(11)] = inst_31952);

(statearr_32001[(12)] = inst_31951);

return statearr_32001;
})();
var statearr_32002_32042 = state_31998__$1;
(statearr_32002_32042[(2)] = null);

(statearr_32002_32042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (1))){
var state_31998__$1 = state_31998;
var statearr_32003_32043 = state_31998__$1;
(statearr_32003_32043[(2)] = null);

(statearr_32003_32043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (4))){
var inst_31939 = (state_31998[(13)]);
var inst_31939__$1 = (state_31998[(2)]);
var inst_31940 = (inst_31939__$1 == null);
var state_31998__$1 = (function (){var statearr_32004 = state_31998;
(statearr_32004[(13)] = inst_31939__$1);

return statearr_32004;
})();
if(cljs.core.truth_(inst_31940)){
var statearr_32005_32044 = state_31998__$1;
(statearr_32005_32044[(1)] = (5));

} else {
var statearr_32006_32045 = state_31998__$1;
(statearr_32006_32045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (15))){
var state_31998__$1 = state_31998;
var statearr_32010_32046 = state_31998__$1;
(statearr_32010_32046[(2)] = null);

(statearr_32010_32046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (21))){
var state_31998__$1 = state_31998;
var statearr_32011_32047 = state_31998__$1;
(statearr_32011_32047[(2)] = null);

(statearr_32011_32047[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (13))){
var inst_31953 = (state_31998[(9)]);
var inst_31950 = (state_31998[(10)]);
var inst_31952 = (state_31998[(11)]);
var inst_31951 = (state_31998[(12)]);
var inst_31960 = (state_31998[(2)]);
var inst_31961 = (inst_31953 + (1));
var tmp32007 = inst_31950;
var tmp32008 = inst_31952;
var tmp32009 = inst_31951;
var inst_31950__$1 = tmp32007;
var inst_31951__$1 = tmp32009;
var inst_31952__$1 = tmp32008;
var inst_31953__$1 = inst_31961;
var state_31998__$1 = (function (){var statearr_32012 = state_31998;
(statearr_32012[(9)] = inst_31953__$1);

(statearr_32012[(14)] = inst_31960);

(statearr_32012[(10)] = inst_31950__$1);

(statearr_32012[(11)] = inst_31952__$1);

(statearr_32012[(12)] = inst_31951__$1);

return statearr_32012;
})();
var statearr_32013_32048 = state_31998__$1;
(statearr_32013_32048[(2)] = null);

(statearr_32013_32048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (22))){
var state_31998__$1 = state_31998;
var statearr_32014_32049 = state_31998__$1;
(statearr_32014_32049[(2)] = null);

(statearr_32014_32049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (6))){
var inst_31939 = (state_31998[(13)]);
var inst_31948 = f.call(null,inst_31939);
var inst_31949 = cljs.core.seq.call(null,inst_31948);
var inst_31950 = inst_31949;
var inst_31951 = null;
var inst_31952 = (0);
var inst_31953 = (0);
var state_31998__$1 = (function (){var statearr_32015 = state_31998;
(statearr_32015[(9)] = inst_31953);

(statearr_32015[(10)] = inst_31950);

(statearr_32015[(11)] = inst_31952);

(statearr_32015[(12)] = inst_31951);

return statearr_32015;
})();
var statearr_32016_32050 = state_31998__$1;
(statearr_32016_32050[(2)] = null);

(statearr_32016_32050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (17))){
var inst_31964 = (state_31998[(7)]);
var inst_31968 = cljs.core.chunk_first.call(null,inst_31964);
var inst_31969 = cljs.core.chunk_rest.call(null,inst_31964);
var inst_31970 = cljs.core.count.call(null,inst_31968);
var inst_31950 = inst_31969;
var inst_31951 = inst_31968;
var inst_31952 = inst_31970;
var inst_31953 = (0);
var state_31998__$1 = (function (){var statearr_32017 = state_31998;
(statearr_32017[(9)] = inst_31953);

(statearr_32017[(10)] = inst_31950);

(statearr_32017[(11)] = inst_31952);

(statearr_32017[(12)] = inst_31951);

return statearr_32017;
})();
var statearr_32018_32051 = state_31998__$1;
(statearr_32018_32051[(2)] = null);

(statearr_32018_32051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (3))){
var inst_31996 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31998__$1,inst_31996);
} else {
if((state_val_31999 === (12))){
var inst_31984 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32019_32052 = state_31998__$1;
(statearr_32019_32052[(2)] = inst_31984);

(statearr_32019_32052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (2))){
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31998__$1,(4),in$);
} else {
if((state_val_31999 === (23))){
var inst_31992 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32020_32053 = state_31998__$1;
(statearr_32020_32053[(2)] = inst_31992);

(statearr_32020_32053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (19))){
var inst_31979 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32021_32054 = state_31998__$1;
(statearr_32021_32054[(2)] = inst_31979);

(statearr_32021_32054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (11))){
var inst_31964 = (state_31998[(7)]);
var inst_31950 = (state_31998[(10)]);
var inst_31964__$1 = cljs.core.seq.call(null,inst_31950);
var state_31998__$1 = (function (){var statearr_32022 = state_31998;
(statearr_32022[(7)] = inst_31964__$1);

return statearr_32022;
})();
if(inst_31964__$1){
var statearr_32023_32055 = state_31998__$1;
(statearr_32023_32055[(1)] = (14));

} else {
var statearr_32024_32056 = state_31998__$1;
(statearr_32024_32056[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (9))){
var inst_31986 = (state_31998[(2)]);
var inst_31987 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31998__$1 = (function (){var statearr_32025 = state_31998;
(statearr_32025[(15)] = inst_31986);

return statearr_32025;
})();
if(cljs.core.truth_(inst_31987)){
var statearr_32026_32057 = state_31998__$1;
(statearr_32026_32057[(1)] = (21));

} else {
var statearr_32027_32058 = state_31998__$1;
(statearr_32027_32058[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (5))){
var inst_31942 = cljs.core.async.close_BANG_.call(null,out);
var state_31998__$1 = state_31998;
var statearr_32028_32059 = state_31998__$1;
(statearr_32028_32059[(2)] = inst_31942);

(statearr_32028_32059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (14))){
var inst_31964 = (state_31998[(7)]);
var inst_31966 = cljs.core.chunked_seq_QMARK_.call(null,inst_31964);
var state_31998__$1 = state_31998;
if(inst_31966){
var statearr_32029_32060 = state_31998__$1;
(statearr_32029_32060[(1)] = (17));

} else {
var statearr_32030_32061 = state_31998__$1;
(statearr_32030_32061[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (16))){
var inst_31982 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32031_32062 = state_31998__$1;
(statearr_32031_32062[(2)] = inst_31982);

(statearr_32031_32062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (10))){
var inst_31953 = (state_31998[(9)]);
var inst_31951 = (state_31998[(12)]);
var inst_31958 = cljs.core._nth.call(null,inst_31951,inst_31953);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31998__$1,(13),out,inst_31958);
} else {
if((state_val_31999 === (18))){
var inst_31964 = (state_31998[(7)]);
var inst_31973 = cljs.core.first.call(null,inst_31964);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31998__$1,(20),out,inst_31973);
} else {
if((state_val_31999 === (8))){
var inst_31953 = (state_31998[(9)]);
var inst_31952 = (state_31998[(11)]);
var inst_31955 = (inst_31953 < inst_31952);
var inst_31956 = inst_31955;
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31956)){
var statearr_32032_32063 = state_31998__$1;
(statearr_32032_32063[(1)] = (10));

} else {
var statearr_32033_32064 = state_31998__$1;
(statearr_32033_32064[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto__))
;
return ((function (switch__29421__auto__,c__29533__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29422__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29422__auto____0 = (function (){
var statearr_32037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32037[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29422__auto__);

(statearr_32037[(1)] = (1));

return statearr_32037;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29422__auto____1 = (function (state_31998){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_31998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e32038){if((e32038 instanceof Object)){
var ex__29425__auto__ = e32038;
var statearr_32039_32065 = state_31998;
(statearr_32039_32065[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32066 = state_31998;
state_31998 = G__32066;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29422__auto__ = function(state_31998){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29422__auto____1.call(this,state_31998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29422__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29422__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto__))
})();
var state__29535__auto__ = (function (){var statearr_32040 = f__29534__auto__.call(null);
(statearr_32040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto__);

return statearr_32040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto__))
);

return c__29533__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32067 = [];
var len__26066__auto___32070 = arguments.length;
var i__26067__auto___32071 = (0);
while(true){
if((i__26067__auto___32071 < len__26066__auto___32070)){
args32067.push((arguments[i__26067__auto___32071]));

var G__32072 = (i__26067__auto___32071 + (1));
i__26067__auto___32071 = G__32072;
continue;
} else {
}
break;
}

var G__32069 = args32067.length;
switch (G__32069) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32067.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32074 = [];
var len__26066__auto___32077 = arguments.length;
var i__26067__auto___32078 = (0);
while(true){
if((i__26067__auto___32078 < len__26066__auto___32077)){
args32074.push((arguments[i__26067__auto___32078]));

var G__32079 = (i__26067__auto___32078 + (1));
i__26067__auto___32078 = G__32079;
continue;
} else {
}
break;
}

var G__32076 = args32074.length;
switch (G__32076) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32074.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32081 = [];
var len__26066__auto___32132 = arguments.length;
var i__26067__auto___32133 = (0);
while(true){
if((i__26067__auto___32133 < len__26066__auto___32132)){
args32081.push((arguments[i__26067__auto___32133]));

var G__32134 = (i__26067__auto___32133 + (1));
i__26067__auto___32133 = G__32134;
continue;
} else {
}
break;
}

var G__32083 = args32081.length;
switch (G__32083) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32081.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29533__auto___32136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___32136,out){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___32136,out){
return (function (state_32107){
var state_val_32108 = (state_32107[(1)]);
if((state_val_32108 === (7))){
var inst_32102 = (state_32107[(2)]);
var state_32107__$1 = state_32107;
var statearr_32109_32137 = state_32107__$1;
(statearr_32109_32137[(2)] = inst_32102);

(statearr_32109_32137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (1))){
var inst_32084 = null;
var state_32107__$1 = (function (){var statearr_32110 = state_32107;
(statearr_32110[(7)] = inst_32084);

return statearr_32110;
})();
var statearr_32111_32138 = state_32107__$1;
(statearr_32111_32138[(2)] = null);

(statearr_32111_32138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (4))){
var inst_32087 = (state_32107[(8)]);
var inst_32087__$1 = (state_32107[(2)]);
var inst_32088 = (inst_32087__$1 == null);
var inst_32089 = cljs.core.not.call(null,inst_32088);
var state_32107__$1 = (function (){var statearr_32112 = state_32107;
(statearr_32112[(8)] = inst_32087__$1);

return statearr_32112;
})();
if(inst_32089){
var statearr_32113_32139 = state_32107__$1;
(statearr_32113_32139[(1)] = (5));

} else {
var statearr_32114_32140 = state_32107__$1;
(statearr_32114_32140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (6))){
var state_32107__$1 = state_32107;
var statearr_32115_32141 = state_32107__$1;
(statearr_32115_32141[(2)] = null);

(statearr_32115_32141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (3))){
var inst_32104 = (state_32107[(2)]);
var inst_32105 = cljs.core.async.close_BANG_.call(null,out);
var state_32107__$1 = (function (){var statearr_32116 = state_32107;
(statearr_32116[(9)] = inst_32104);

return statearr_32116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32107__$1,inst_32105);
} else {
if((state_val_32108 === (2))){
var state_32107__$1 = state_32107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32107__$1,(4),ch);
} else {
if((state_val_32108 === (11))){
var inst_32087 = (state_32107[(8)]);
var inst_32096 = (state_32107[(2)]);
var inst_32084 = inst_32087;
var state_32107__$1 = (function (){var statearr_32117 = state_32107;
(statearr_32117[(7)] = inst_32084);

(statearr_32117[(10)] = inst_32096);

return statearr_32117;
})();
var statearr_32118_32142 = state_32107__$1;
(statearr_32118_32142[(2)] = null);

(statearr_32118_32142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (9))){
var inst_32087 = (state_32107[(8)]);
var state_32107__$1 = state_32107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32107__$1,(11),out,inst_32087);
} else {
if((state_val_32108 === (5))){
var inst_32084 = (state_32107[(7)]);
var inst_32087 = (state_32107[(8)]);
var inst_32091 = cljs.core._EQ_.call(null,inst_32087,inst_32084);
var state_32107__$1 = state_32107;
if(inst_32091){
var statearr_32120_32143 = state_32107__$1;
(statearr_32120_32143[(1)] = (8));

} else {
var statearr_32121_32144 = state_32107__$1;
(statearr_32121_32144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (10))){
var inst_32099 = (state_32107[(2)]);
var state_32107__$1 = state_32107;
var statearr_32122_32145 = state_32107__$1;
(statearr_32122_32145[(2)] = inst_32099);

(statearr_32122_32145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (8))){
var inst_32084 = (state_32107[(7)]);
var tmp32119 = inst_32084;
var inst_32084__$1 = tmp32119;
var state_32107__$1 = (function (){var statearr_32123 = state_32107;
(statearr_32123[(7)] = inst_32084__$1);

return statearr_32123;
})();
var statearr_32124_32146 = state_32107__$1;
(statearr_32124_32146[(2)] = null);

(statearr_32124_32146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___32136,out))
;
return ((function (switch__29421__auto__,c__29533__auto___32136,out){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_32128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32128[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_32128[(1)] = (1));

return statearr_32128;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_32107){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_32107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e32129){if((e32129 instanceof Object)){
var ex__29425__auto__ = e32129;
var statearr_32130_32147 = state_32107;
(statearr_32130_32147[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32148 = state_32107;
state_32107 = G__32148;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_32107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_32107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___32136,out))
})();
var state__29535__auto__ = (function (){var statearr_32131 = f__29534__auto__.call(null);
(statearr_32131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___32136);

return statearr_32131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___32136,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32149 = [];
var len__26066__auto___32219 = arguments.length;
var i__26067__auto___32220 = (0);
while(true){
if((i__26067__auto___32220 < len__26066__auto___32219)){
args32149.push((arguments[i__26067__auto___32220]));

var G__32221 = (i__26067__auto___32220 + (1));
i__26067__auto___32220 = G__32221;
continue;
} else {
}
break;
}

var G__32151 = args32149.length;
switch (G__32151) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32149.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29533__auto___32223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___32223,out){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___32223,out){
return (function (state_32189){
var state_val_32190 = (state_32189[(1)]);
if((state_val_32190 === (7))){
var inst_32185 = (state_32189[(2)]);
var state_32189__$1 = state_32189;
var statearr_32191_32224 = state_32189__$1;
(statearr_32191_32224[(2)] = inst_32185);

(statearr_32191_32224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (1))){
var inst_32152 = (new Array(n));
var inst_32153 = inst_32152;
var inst_32154 = (0);
var state_32189__$1 = (function (){var statearr_32192 = state_32189;
(statearr_32192[(7)] = inst_32153);

(statearr_32192[(8)] = inst_32154);

return statearr_32192;
})();
var statearr_32193_32225 = state_32189__$1;
(statearr_32193_32225[(2)] = null);

(statearr_32193_32225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (4))){
var inst_32157 = (state_32189[(9)]);
var inst_32157__$1 = (state_32189[(2)]);
var inst_32158 = (inst_32157__$1 == null);
var inst_32159 = cljs.core.not.call(null,inst_32158);
var state_32189__$1 = (function (){var statearr_32194 = state_32189;
(statearr_32194[(9)] = inst_32157__$1);

return statearr_32194;
})();
if(inst_32159){
var statearr_32195_32226 = state_32189__$1;
(statearr_32195_32226[(1)] = (5));

} else {
var statearr_32196_32227 = state_32189__$1;
(statearr_32196_32227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (15))){
var inst_32179 = (state_32189[(2)]);
var state_32189__$1 = state_32189;
var statearr_32197_32228 = state_32189__$1;
(statearr_32197_32228[(2)] = inst_32179);

(statearr_32197_32228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (13))){
var state_32189__$1 = state_32189;
var statearr_32198_32229 = state_32189__$1;
(statearr_32198_32229[(2)] = null);

(statearr_32198_32229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (6))){
var inst_32154 = (state_32189[(8)]);
var inst_32175 = (inst_32154 > (0));
var state_32189__$1 = state_32189;
if(cljs.core.truth_(inst_32175)){
var statearr_32199_32230 = state_32189__$1;
(statearr_32199_32230[(1)] = (12));

} else {
var statearr_32200_32231 = state_32189__$1;
(statearr_32200_32231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (3))){
var inst_32187 = (state_32189[(2)]);
var state_32189__$1 = state_32189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32189__$1,inst_32187);
} else {
if((state_val_32190 === (12))){
var inst_32153 = (state_32189[(7)]);
var inst_32177 = cljs.core.vec.call(null,inst_32153);
var state_32189__$1 = state_32189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32189__$1,(15),out,inst_32177);
} else {
if((state_val_32190 === (2))){
var state_32189__$1 = state_32189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32189__$1,(4),ch);
} else {
if((state_val_32190 === (11))){
var inst_32169 = (state_32189[(2)]);
var inst_32170 = (new Array(n));
var inst_32153 = inst_32170;
var inst_32154 = (0);
var state_32189__$1 = (function (){var statearr_32201 = state_32189;
(statearr_32201[(7)] = inst_32153);

(statearr_32201[(8)] = inst_32154);

(statearr_32201[(10)] = inst_32169);

return statearr_32201;
})();
var statearr_32202_32232 = state_32189__$1;
(statearr_32202_32232[(2)] = null);

(statearr_32202_32232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (9))){
var inst_32153 = (state_32189[(7)]);
var inst_32167 = cljs.core.vec.call(null,inst_32153);
var state_32189__$1 = state_32189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32189__$1,(11),out,inst_32167);
} else {
if((state_val_32190 === (5))){
var inst_32153 = (state_32189[(7)]);
var inst_32157 = (state_32189[(9)]);
var inst_32162 = (state_32189[(11)]);
var inst_32154 = (state_32189[(8)]);
var inst_32161 = (inst_32153[inst_32154] = inst_32157);
var inst_32162__$1 = (inst_32154 + (1));
var inst_32163 = (inst_32162__$1 < n);
var state_32189__$1 = (function (){var statearr_32203 = state_32189;
(statearr_32203[(12)] = inst_32161);

(statearr_32203[(11)] = inst_32162__$1);

return statearr_32203;
})();
if(cljs.core.truth_(inst_32163)){
var statearr_32204_32233 = state_32189__$1;
(statearr_32204_32233[(1)] = (8));

} else {
var statearr_32205_32234 = state_32189__$1;
(statearr_32205_32234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (14))){
var inst_32182 = (state_32189[(2)]);
var inst_32183 = cljs.core.async.close_BANG_.call(null,out);
var state_32189__$1 = (function (){var statearr_32207 = state_32189;
(statearr_32207[(13)] = inst_32182);

return statearr_32207;
})();
var statearr_32208_32235 = state_32189__$1;
(statearr_32208_32235[(2)] = inst_32183);

(statearr_32208_32235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (10))){
var inst_32173 = (state_32189[(2)]);
var state_32189__$1 = state_32189;
var statearr_32209_32236 = state_32189__$1;
(statearr_32209_32236[(2)] = inst_32173);

(statearr_32209_32236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32190 === (8))){
var inst_32153 = (state_32189[(7)]);
var inst_32162 = (state_32189[(11)]);
var tmp32206 = inst_32153;
var inst_32153__$1 = tmp32206;
var inst_32154 = inst_32162;
var state_32189__$1 = (function (){var statearr_32210 = state_32189;
(statearr_32210[(7)] = inst_32153__$1);

(statearr_32210[(8)] = inst_32154);

return statearr_32210;
})();
var statearr_32211_32237 = state_32189__$1;
(statearr_32211_32237[(2)] = null);

(statearr_32211_32237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___32223,out))
;
return ((function (switch__29421__auto__,c__29533__auto___32223,out){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_32215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32215[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_32215[(1)] = (1));

return statearr_32215;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_32189){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_32189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e32216){if((e32216 instanceof Object)){
var ex__29425__auto__ = e32216;
var statearr_32217_32238 = state_32189;
(statearr_32217_32238[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32239 = state_32189;
state_32189 = G__32239;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_32189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_32189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___32223,out))
})();
var state__29535__auto__ = (function (){var statearr_32218 = f__29534__auto__.call(null);
(statearr_32218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___32223);

return statearr_32218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___32223,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32240 = [];
var len__26066__auto___32314 = arguments.length;
var i__26067__auto___32315 = (0);
while(true){
if((i__26067__auto___32315 < len__26066__auto___32314)){
args32240.push((arguments[i__26067__auto___32315]));

var G__32316 = (i__26067__auto___32315 + (1));
i__26067__auto___32315 = G__32316;
continue;
} else {
}
break;
}

var G__32242 = args32240.length;
switch (G__32242) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32240.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29533__auto___32318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29533__auto___32318,out){
return (function (){
var f__29534__auto__ = (function (){var switch__29421__auto__ = ((function (c__29533__auto___32318,out){
return (function (state_32284){
var state_val_32285 = (state_32284[(1)]);
if((state_val_32285 === (7))){
var inst_32280 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32286_32319 = state_32284__$1;
(statearr_32286_32319[(2)] = inst_32280);

(statearr_32286_32319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (1))){
var inst_32243 = [];
var inst_32244 = inst_32243;
var inst_32245 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32284__$1 = (function (){var statearr_32287 = state_32284;
(statearr_32287[(7)] = inst_32244);

(statearr_32287[(8)] = inst_32245);

return statearr_32287;
})();
var statearr_32288_32320 = state_32284__$1;
(statearr_32288_32320[(2)] = null);

(statearr_32288_32320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (4))){
var inst_32248 = (state_32284[(9)]);
var inst_32248__$1 = (state_32284[(2)]);
var inst_32249 = (inst_32248__$1 == null);
var inst_32250 = cljs.core.not.call(null,inst_32249);
var state_32284__$1 = (function (){var statearr_32289 = state_32284;
(statearr_32289[(9)] = inst_32248__$1);

return statearr_32289;
})();
if(inst_32250){
var statearr_32290_32321 = state_32284__$1;
(statearr_32290_32321[(1)] = (5));

} else {
var statearr_32291_32322 = state_32284__$1;
(statearr_32291_32322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (15))){
var inst_32274 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32292_32323 = state_32284__$1;
(statearr_32292_32323[(2)] = inst_32274);

(statearr_32292_32323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (13))){
var state_32284__$1 = state_32284;
var statearr_32293_32324 = state_32284__$1;
(statearr_32293_32324[(2)] = null);

(statearr_32293_32324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (6))){
var inst_32244 = (state_32284[(7)]);
var inst_32269 = inst_32244.length;
var inst_32270 = (inst_32269 > (0));
var state_32284__$1 = state_32284;
if(cljs.core.truth_(inst_32270)){
var statearr_32294_32325 = state_32284__$1;
(statearr_32294_32325[(1)] = (12));

} else {
var statearr_32295_32326 = state_32284__$1;
(statearr_32295_32326[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (3))){
var inst_32282 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32284__$1,inst_32282);
} else {
if((state_val_32285 === (12))){
var inst_32244 = (state_32284[(7)]);
var inst_32272 = cljs.core.vec.call(null,inst_32244);
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32284__$1,(15),out,inst_32272);
} else {
if((state_val_32285 === (2))){
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32284__$1,(4),ch);
} else {
if((state_val_32285 === (11))){
var inst_32248 = (state_32284[(9)]);
var inst_32252 = (state_32284[(10)]);
var inst_32262 = (state_32284[(2)]);
var inst_32263 = [];
var inst_32264 = inst_32263.push(inst_32248);
var inst_32244 = inst_32263;
var inst_32245 = inst_32252;
var state_32284__$1 = (function (){var statearr_32296 = state_32284;
(statearr_32296[(11)] = inst_32262);

(statearr_32296[(7)] = inst_32244);

(statearr_32296[(8)] = inst_32245);

(statearr_32296[(12)] = inst_32264);

return statearr_32296;
})();
var statearr_32297_32327 = state_32284__$1;
(statearr_32297_32327[(2)] = null);

(statearr_32297_32327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (9))){
var inst_32244 = (state_32284[(7)]);
var inst_32260 = cljs.core.vec.call(null,inst_32244);
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32284__$1,(11),out,inst_32260);
} else {
if((state_val_32285 === (5))){
var inst_32248 = (state_32284[(9)]);
var inst_32252 = (state_32284[(10)]);
var inst_32245 = (state_32284[(8)]);
var inst_32252__$1 = f.call(null,inst_32248);
var inst_32253 = cljs.core._EQ_.call(null,inst_32252__$1,inst_32245);
var inst_32254 = cljs.core.keyword_identical_QMARK_.call(null,inst_32245,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32255 = (inst_32253) || (inst_32254);
var state_32284__$1 = (function (){var statearr_32298 = state_32284;
(statearr_32298[(10)] = inst_32252__$1);

return statearr_32298;
})();
if(cljs.core.truth_(inst_32255)){
var statearr_32299_32328 = state_32284__$1;
(statearr_32299_32328[(1)] = (8));

} else {
var statearr_32300_32329 = state_32284__$1;
(statearr_32300_32329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (14))){
var inst_32277 = (state_32284[(2)]);
var inst_32278 = cljs.core.async.close_BANG_.call(null,out);
var state_32284__$1 = (function (){var statearr_32302 = state_32284;
(statearr_32302[(13)] = inst_32277);

return statearr_32302;
})();
var statearr_32303_32330 = state_32284__$1;
(statearr_32303_32330[(2)] = inst_32278);

(statearr_32303_32330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (10))){
var inst_32267 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32304_32331 = state_32284__$1;
(statearr_32304_32331[(2)] = inst_32267);

(statearr_32304_32331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (8))){
var inst_32248 = (state_32284[(9)]);
var inst_32244 = (state_32284[(7)]);
var inst_32252 = (state_32284[(10)]);
var inst_32257 = inst_32244.push(inst_32248);
var tmp32301 = inst_32244;
var inst_32244__$1 = tmp32301;
var inst_32245 = inst_32252;
var state_32284__$1 = (function (){var statearr_32305 = state_32284;
(statearr_32305[(7)] = inst_32244__$1);

(statearr_32305[(8)] = inst_32245);

(statearr_32305[(14)] = inst_32257);

return statearr_32305;
})();
var statearr_32306_32332 = state_32284__$1;
(statearr_32306_32332[(2)] = null);

(statearr_32306_32332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29533__auto___32318,out))
;
return ((function (switch__29421__auto__,c__29533__auto___32318,out){
return (function() {
var cljs$core$async$state_machine__29422__auto__ = null;
var cljs$core$async$state_machine__29422__auto____0 = (function (){
var statearr_32310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32310[(0)] = cljs$core$async$state_machine__29422__auto__);

(statearr_32310[(1)] = (1));

return statearr_32310;
});
var cljs$core$async$state_machine__29422__auto____1 = (function (state_32284){
while(true){
var ret_value__29423__auto__ = (function (){try{while(true){
var result__29424__auto__ = switch__29421__auto__.call(null,state_32284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29424__auto__;
}
break;
}
}catch (e32311){if((e32311 instanceof Object)){
var ex__29425__auto__ = e32311;
var statearr_32312_32333 = state_32284;
(statearr_32312_32333[(5)] = ex__29425__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32334 = state_32284;
state_32284 = G__32334;
continue;
} else {
return ret_value__29423__auto__;
}
break;
}
});
cljs$core$async$state_machine__29422__auto__ = function(state_32284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29422__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29422__auto____1.call(this,state_32284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29422__auto____0;
cljs$core$async$state_machine__29422__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29422__auto____1;
return cljs$core$async$state_machine__29422__auto__;
})()
;})(switch__29421__auto__,c__29533__auto___32318,out))
})();
var state__29535__auto__ = (function (){var statearr_32313 = f__29534__auto__.call(null);
(statearr_32313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29533__auto___32318);

return statearr_32313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29535__auto__);
});})(c__29533__auto___32318,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1525285175752