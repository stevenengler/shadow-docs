(function() {var implementors = {};
implementors["atomic_refcell"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"atomic_refcell/struct.AtomicRefCell.html\" title=\"struct atomic_refcell::AtomicRefCell\">AtomicRefCell</a>&lt;T&gt;","synthetic":false,"types":["atomic_refcell::AtomicRefCell"]}];
implementors["getrandom"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/nonzero/struct.NonZeroU32.html\" title=\"struct core::num::nonzero::NonZeroU32\">NonZeroU32</a>&gt; for <a class=\"struct\" href=\"getrandom/struct.Error.html\" title=\"struct getrandom::Error\">Error</a>","synthetic":false,"types":["getrandom::error::Error"]}];
implementors["nix"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"nix/sys/aio/struct.AioCb.html\" title=\"struct nix::sys::aio::AioCb\">AioCb</a>&lt;'a&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"nix/sys/aio/struct.LioCb.html\" title=\"struct nix::sys::aio::LioCb\">LioCb</a>&lt;'a&gt;","synthetic":false,"types":["nix::sys::aio::LioCb"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"libc/unix/linux_like/struct.sigevent.html\" title=\"struct libc::unix::linux_like::sigevent\">sigevent</a>&gt; for <a class=\"struct\" href=\"nix/sys/signal/struct.SigEvent.html\" title=\"struct nix::sys::signal::SigEvent\">SigEvent</a>","synthetic":false,"types":["nix::sys::signal::sigevent::SigEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libc/unix/linux_like/linux/struct.ucred.html\" title=\"struct libc::unix::linux_like::linux::ucred\">ucred</a>&gt; for <a class=\"struct\" href=\"nix/sys/socket/struct.UnixCredentials.html\" title=\"struct nix::sys::socket::UnixCredentials\">UnixCredentials</a>","synthetic":false,"types":["nix::sys::socket::UnixCredentials"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libc/unix/linux_like/linux/gnu/struct.termios.html\" title=\"struct libc::unix::linux_like::linux::gnu::termios\">termios</a>&gt; for <a class=\"struct\" href=\"nix/sys/termios/struct.Termios.html\" title=\"struct nix::sys::termios::Termios\">Termios</a>","synthetic":false,"types":["nix::sys::termios::Termios"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libc/unix/struct.timespec.html\" title=\"struct libc::unix::timespec\">timespec</a>&gt; for <a class=\"struct\" href=\"nix/sys/time/struct.TimeSpec.html\" title=\"struct nix::sys::time::TimeSpec\">TimeSpec</a>","synthetic":false,"types":["nix::sys::time::TimeSpec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"nix/sys/time/struct.TimeSpec.html\" title=\"struct nix::sys::time::TimeSpec\">TimeSpec</a>","synthetic":false,"types":["nix::sys::time::TimeSpec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libc/unix/struct.timeval.html\" title=\"struct libc::unix::timeval\">timeval</a>&gt; for <a class=\"struct\" href=\"nix/sys/time/struct.TimeVal.html\" title=\"struct nix::sys::time::TimeVal\">TimeVal</a>","synthetic":false,"types":["nix::sys::time::TimeVal"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"nix/time/struct.ClockId.html\" title=\"struct nix::time::ClockId\">ClockId</a>","synthetic":false,"types":["nix::time::ClockId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"nix/unistd/struct.Pid.html\" title=\"struct nix::unistd::Pid\">Pid</a>&gt; for <a class=\"type\" href=\"nix/pty/type.SessionId.html\" title=\"type nix::pty::SessionId\">pid_t</a>","synthetic":false,"types":["libc::unix::pid_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"libc/unix/linux_like/linux/struct.passwd.html\" title=\"struct libc::unix::linux_like::linux::passwd\">passwd</a>&gt; for <a class=\"struct\" href=\"nix/unistd/struct.User.html\" title=\"struct nix::unistd::User\">User</a>","synthetic":false,"types":["nix::unistd::User"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"libc/unix/struct.group.html\" title=\"struct libc::unix::group\">group</a>&gt; for <a class=\"struct\" href=\"nix/unistd/struct.Group.html\" title=\"struct nix::unistd::Group\">Group</a>","synthetic":false,"types":["nix::unistd::Group"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a>&gt; for <a class=\"enum\" href=\"nix/enum.Error.html\" title=\"enum nix::Error\">Error</a>","synthetic":false,"types":["nix::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>&gt; for <a class=\"enum\" href=\"nix/enum.Error.html\" title=\"enum nix::Error\">Error</a>","synthetic":false,"types":["nix::Error"]}];
implementors["rand"] = [{"text":"impl&lt;X:&nbsp;<a class=\"trait\" href=\"rand/distributions/uniform/trait.SampleUniform.html\" title=\"trait rand::distributions::uniform::SampleUniform\">SampleUniform</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;X&gt;&gt; for <a class=\"struct\" href=\"rand/distributions/struct.Uniform.html\" title=\"struct rand::distributions::Uniform\">Uniform</a>&lt;X&gt;","synthetic":false,"types":["rand::distributions::uniform::Uniform"]},{"text":"impl&lt;X:&nbsp;<a class=\"trait\" href=\"rand/distributions/uniform/trait.SampleUniform.html\" title=\"trait rand::distributions::uniform::SampleUniform\">SampleUniform</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.RangeInclusive.html\" title=\"struct core::ops::range::RangeInclusive\">RangeInclusive</a>&lt;X&gt;&gt; for <a class=\"struct\" href=\"rand/distributions/struct.Uniform.html\" title=\"struct rand::distributions::Uniform\">Uniform</a>&lt;X&gt;","synthetic":false,"types":["rand::distributions::uniform::Uniform"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"rand/seq/index/enum.IndexVec.html\" title=\"enum rand::seq::index::IndexVec\">IndexVec</a>","synthetic":false,"types":["rand::seq::index::IndexVec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"rand/seq/index/enum.IndexVec.html\" title=\"enum rand::seq::index::IndexVec\">IndexVec</a>","synthetic":false,"types":["rand::seq::index::IndexVec"]}];
implementors["rand_chacha"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Core.html\" title=\"struct rand_chacha::ChaCha20Core\">ChaCha20Core</a>&gt; for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha20Rng.html\" title=\"struct rand_chacha::ChaCha20Rng\">ChaCha20Rng</a>","synthetic":false,"types":["rand_chacha::chacha::ChaCha20Rng"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"rand_chacha/struct.ChaCha12Core.html\" title=\"struct rand_chacha::ChaCha12Core\">ChaCha12Core</a>&gt; for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha12Rng.html\" title=\"struct rand_chacha::ChaCha12Rng\">ChaCha12Rng</a>","synthetic":false,"types":["rand_chacha::chacha::ChaCha12Rng"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"rand_chacha/struct.ChaCha8Core.html\" title=\"struct rand_chacha::ChaCha8Core\">ChaCha8Core</a>&gt; for <a class=\"struct\" href=\"rand_chacha/struct.ChaCha8Rng.html\" title=\"struct rand_chacha::ChaCha8Rng\">ChaCha8Rng</a>","synthetic":false,"types":["rand_chacha::chacha::ChaCha8Rng"]}];
implementors["rand_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/nonzero/struct.NonZeroU32.html\" title=\"struct core::num::nonzero::NonZeroU32\">NonZeroU32</a>&gt; for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>","synthetic":false,"types":["rand_core::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"getrandom/error/struct.Error.html\" title=\"struct getrandom::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>","synthetic":false,"types":["rand_core::error::Error"]}];
implementors["regex_syntax"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"regex_syntax/ast/struct.Error.html\" title=\"struct regex_syntax::ast::Error\">Error</a>&gt; for <a class=\"enum\" href=\"regex_syntax/enum.Error.html\" title=\"enum regex_syntax::Error\">Error</a>","synthetic":false,"types":["regex_syntax::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"regex_syntax/hir/struct.Error.html\" title=\"struct regex_syntax::hir::Error\">Error</a>&gt; for <a class=\"enum\" href=\"regex_syntax/enum.Error.html\" title=\"enum regex_syntax::Error\">Error</a>","synthetic":false,"types":["regex_syntax::error::Error"]}];
implementors["shadow_rs"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"shadow_rs/host/descriptor/enum.SyscallReturn.html\" title=\"enum shadow_rs::host::descriptor::SyscallReturn\">SyscallReturn</a>&gt; for <a class=\"struct\" href=\"shadow_rs/cshadow/struct._SysCallReturn.html\" title=\"struct shadow_rs::cshadow::_SysCallReturn\">_SysCallReturn</a>","synthetic":false,"types":["shadow_rs::cshadow::_SysCallReturn"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/descriptor/struct.FileStatus.html\" title=\"struct shadow_rs::host::descriptor::FileStatus\">FileStatus</a>","synthetic":false,"types":["shadow_rs::host::descriptor::FileStatus"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"shadow_rs/cshadow/struct._Trigger.html\" title=\"struct shadow_rs::cshadow::_Trigger\">_Trigger</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/syscall/struct.Trigger.html\" title=\"struct shadow_rs::host::syscall::Trigger\">Trigger</a>","synthetic":false,"types":["shadow_rs::host::syscall::Trigger"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"shadow_rs/host/syscall/struct.Trigger.html\" title=\"struct shadow_rs::host::syscall::Trigger\">Trigger</a>&gt; for <a class=\"struct\" href=\"shadow_rs/cshadow/struct._Trigger.html\" title=\"struct shadow_rs::cshadow::_Trigger\">_Trigger</a>","synthetic":false,"types":["shadow_rs::cshadow::_Trigger"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.PluginPtr.html\" title=\"struct shadow_rs::host::syscall_types::PluginPtr\">PluginPtr</a>&gt; for <a class=\"struct\" href=\"shadow_rs/cshadow/struct._PluginVirtualPtr.html\" title=\"struct shadow_rs::cshadow::_PluginVirtualPtr\">_PluginVirtualPtr</a>","synthetic":false,"types":["shadow_rs::cshadow::_PluginVirtualPtr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"shadow_rs/cshadow/struct._PluginVirtualPtr.html\" title=\"struct shadow_rs::cshadow::_PluginVirtualPtr\">_PluginVirtualPtr</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.PluginPtr.html\" title=\"struct shadow_rs::host::syscall_types::PluginPtr\">PluginPtr</a>","synthetic":false,"types":["shadow_rs::host::syscall_types::PluginPtr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.PluginPtr.html\" title=\"struct shadow_rs::host::syscall_types::PluginPtr\">PluginPtr</a>","synthetic":false,"types":["shadow_rs::host::syscall_types::PluginPtr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.PluginPtr.html\" title=\"struct shadow_rs::host::syscall_types::PluginPtr\">PluginPtr</a>","synthetic":false,"types":["shadow_rs::host::syscall_types::PluginPtr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.SysCallReg.html\" title=\"struct shadow_rs::host::syscall_types::SysCallReg\">SysCallReg</a>&gt; for <a class=\"union\" href=\"shadow_rs/cshadow/union._SysCallReg.html\" title=\"union shadow_rs::cshadow::_SysCallReg\">_SysCallReg</a>","synthetic":false,"types":["shadow_rs::cshadow::_SysCallReg"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.SysCallReg.html\" title=\"struct shadow_rs::host::syscall_types::SysCallReg\">SysCallReg</a>","synthetic":false,"types":["shadow_rs::host::syscall_types::SysCallReg"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.SysCallReg.html\" title=\"struct shadow_rs::host::syscall_types::SysCallReg\">SysCallReg</a>","synthetic":false,"types":["shadow_rs::host::syscall_types::SysCallReg"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.SysCallReg.html\" title=\"struct shadow_rs::host::syscall_types::SysCallReg\">SysCallReg</a>","synthetic":false,"types":["shadow_rs::host::syscall_types::SysCallReg"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.SysCallReg.html\" title=\"struct shadow_rs::host::syscall_types::SysCallReg\">SysCallReg</a>","synthetic":false,"types":["shadow_rs::host::syscall_types::SysCallReg"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.PluginPtr.html\" title=\"struct shadow_rs::host::syscall_types::PluginPtr\">PluginPtr</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.SysCallReg.html\" title=\"struct shadow_rs::host::syscall_types::SysCallReg\">SysCallReg</a>","synthetic":false,"types":["shadow_rs::host::syscall_types::SysCallReg"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.SysCallReg.html\" title=\"struct shadow_rs::host::syscall_types::SysCallReg\">SysCallReg</a>&gt; for <a class=\"struct\" href=\"shadow_rs/host/syscall_types/struct.PluginPtr.html\" title=\"struct shadow_rs::host::syscall_types::PluginPtr\">PluginPtr</a>","synthetic":false,"types":["shadow_rs::host::syscall_types::PluginPtr"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()