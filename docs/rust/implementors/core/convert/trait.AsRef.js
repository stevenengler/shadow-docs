(function() {var implementors = {};
implementors["anyhow"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt; for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>","synthetic":false,"types":["anyhow::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static&gt; for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>","synthetic":false,"types":["anyhow::Error"]}];
implementors["bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>","synthetic":false,"types":["bytes::bytes::Bytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>","synthetic":false,"types":["bytes::bytes_mut::BytesMut"]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Owned"]}];
implementors["darling_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.Ident.html\" title=\"struct proc_macro2::Ident\">Ident</a>&gt; for <a class=\"struct\" href=\"darling_core/util/struct.IdentString.html\" title=\"struct darling_core::util::IdentString\">IdentString</a>","synthetic":false,"types":["darling_core::util::ident_string::IdentString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"darling_core/util/struct.IdentString.html\" title=\"struct darling_core::util::IdentString\">IdentString</a>","synthetic":false,"types":["darling_core::util::ident_string::IdentString"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"darling_core/util/struct.SpannedValue.html\" title=\"struct darling_core::util::SpannedValue\">SpannedValue</a>&lt;T&gt;","synthetic":false,"types":["darling_core::util::spanned_value::SpannedValue"]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/core/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/core/primitive.str.html\">str</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/core/primitive.str.html\">str</a>&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/core/primitive.slice.html\">[</a>Target<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/core/primitive.slice.html\">]</a>&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/core/primitive.slice.html\">[</a>Target<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/core/primitive.slice.html\">]</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/core/primitive.slice.html\">[</a>Target<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/core/primitive.slice.html\">]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["nix"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"nix/sys/signal/enum.Signal.html\" title=\"enum nix::sys::signal::Signal\">Signal</a>","synthetic":false,"types":["nix::sys::signal::Signal"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"libc/unix/linux_like/linux/gnu/b64/struct.sigset_t.html\" title=\"struct libc::unix::linux_like::linux::gnu::b64::sigset_t\">sigset_t</a>&gt; for <a class=\"struct\" href=\"nix/sys/signal/struct.SigSet.html\" title=\"struct nix::sys::signal::SigSet\">SigSet</a>","synthetic":false,"types":["nix::sys::signal::SigSet"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"libc/unix/struct.timespec.html\" title=\"struct libc::unix::timespec\">timespec</a>&gt; for <a class=\"struct\" href=\"nix/sys/time/struct.TimeSpec.html\" title=\"struct nix::sys::time::TimeSpec\">TimeSpec</a>","synthetic":false,"types":["nix::sys::time::TimeSpec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"libc/unix/struct.timeval.html\" title=\"struct libc::unix::timeval\">timeval</a>&gt; for <a class=\"struct\" href=\"nix/sys/time/struct.TimeVal.html\" title=\"struct nix::sys::time::TimeVal\">TimeVal</a>","synthetic":false,"types":["nix::sys::time::TimeVal"]}];
implementors["os_str_bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"os_str_bytes/struct.RawOsStr.html\" title=\"struct os_str_bytes::RawOsStr\">RawOsStr</a>&gt; for <a class=\"struct\" href=\"os_str_bytes/struct.RawOsStr.html\" title=\"struct os_str_bytes::RawOsStr\">RawOsStr</a>","synthetic":false,"types":["os_str_bytes::raw_str::RawOsStr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"os_str_bytes/struct.RawOsStr.html\" title=\"struct os_str_bytes::RawOsStr\">RawOsStr</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.str.html\">str</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"os_str_bytes/struct.RawOsStr.html\" title=\"struct os_str_bytes::RawOsStr\">RawOsStr</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.57.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"os_str_bytes/struct.RawOsStr.html\" title=\"struct os_str_bytes::RawOsStr\">RawOsStr</a>&gt; for <a class=\"struct\" href=\"os_str_bytes/struct.RawOsString.html\" title=\"struct os_str_bytes::RawOsString\">RawOsString</a>","synthetic":false,"types":["os_str_bytes::raw_str::RawOsString"]}];
implementors["regex_syntax"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"regex_syntax/hir/literal/struct.Literal.html\" title=\"struct regex_syntax::hir::literal::Literal\">Literal</a>","synthetic":false,"types":["regex_syntax::hir::literal::Literal"]}];
implementors["shadow_rs"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"enum\" href=\"shadow_rs/utility/byte_queue/enum.BytesWrapper.html\" title=\"enum shadow_rs::utility::byte_queue::BytesWrapper\">BytesWrapper</a>","synthetic":false,"types":["shadow_rs::utility::byte_queue::BytesWrapper"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()