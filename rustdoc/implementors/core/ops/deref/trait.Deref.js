(function() {var implementors = {};
implementors["atomic_refcell"] = [{"text":"impl&lt;'b, T:&nbsp;?Sized&gt; Deref for AtomicRef&lt;'b, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'b, T:&nbsp;?Sized&gt; Deref for AtomicRefMut&lt;'b, T&gt;","synthetic":false,"types":[]}];
implementors["once_cell"] = [{"text":"impl&lt;T, F:&nbsp;FnOnce() -&gt; T&gt; Deref for Lazy&lt;T, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, F:&nbsp;FnOnce() -&gt; T&gt; Deref for Lazy&lt;T, F&gt;","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl Deref for Literal","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()