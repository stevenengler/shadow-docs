(function() {var implementors = {};
implementors["aho_corasick"] = [{"text":"impl&lt;S&gt; UnwindSafe for AhoCorasick&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b, S&gt; UnwindSafe for FindIter&lt;'a, 'b, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b, S&gt; UnwindSafe for FindOverlappingIter&lt;'a, 'b, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, R, S&gt; UnwindSafe for StreamFindIter&lt;'a, R, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AhoCorasickBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MatchKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MatchKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Builder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Searcher","synthetic":true,"types":[]},{"text":"impl&lt;'s, 'h&gt; UnwindSafe for FindIter&lt;'s, 'h&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Match","synthetic":true,"types":[]}];
implementors["getrandom"] = [{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["log_bindings"] = [{"text":"impl UnwindSafe for _Logger","synthetic":true,"types":[]},{"text":"impl UnwindSafe for __va_list_tag","synthetic":true,"types":[]}];
implementors["memchr"] = [{"text":"impl&lt;'a&gt; UnwindSafe for Memchr&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Memchr2&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Memchr3&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["nix"] = [{"text":"impl UnwindSafe for Dir","synthetic":true,"types":[]},{"text":"impl&lt;'d&gt; !UnwindSafe for Iter&lt;'d&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OwningIter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Entry","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Type","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Errno","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PosixFadviseAdvice","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AtFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OFlag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SealFlag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FdFlag","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for FcntlArg&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FlockArg","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SpliceFFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FallocateFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InterfaceAddress","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InterfaceAddressIterator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModuleInitFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeleteModuleFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MsFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MntFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MQ_OFlag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FdFlag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MqAttr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InterfaceFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PollFd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PollFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OpenptyResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ForkptyResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PtyMaster","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CloneFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CpuSet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AioFsyncMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LioOpcode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LioMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AioCancelStat","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Buffer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for AioCb&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for LioCb&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EpollFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EpollOp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EpollCreateFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EpollEvent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EfdFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MemFdCreateFlag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProtFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MapFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MRemapFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MmapAdvise","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MsFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MlockAllFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Persona","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Request","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Options","synthetic":true,"types":[]},{"text":"impl UnwindSafe for QuotaType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for QuotaFmt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for QuotaValidFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Dqblk","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RebootMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FdSet","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Fds&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SigEvent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Signal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SignalIterator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SaFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SigmaskHow","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SigSet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SigHandler","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SigAction","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SigevNotify","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SfdFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SignalFd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NetlinkAddr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AlgAddr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LinkAddr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VsockAddr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AddressFamily","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InetAddr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IpAddr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ipv4Addr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ipv6Addr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnixAddr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SockAddr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReuseAddr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReusePort","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TcpNoDelay","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Linger","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IpAddMembership","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IpDropMembership","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ipv6AddMembership","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ipv6DropMembership","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IpMulticastTtl","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IpMulticastLoop","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReceiveTimeout","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SendTimeout","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Broadcast","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OobInline","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SocketError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeepAlive","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PeerCredentials","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TcpKeepIdle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TcpKeepCount","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TcpKeepInterval","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RcvBuf","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SndBuf","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RcvBufForce","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SndBufForce","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SockType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AcceptConn","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BindToDevice","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OriginalDst","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReceiveTimestamp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IpTransparent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Mark","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PassCred","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TcpCongestion","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ipv4PacketInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ipv6RecvPacketInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UdpGsoSegment","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UdpGroSegment","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AlgSetAeadAuthSize","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for AlgSetKey&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SockType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SockProtocol","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SockFlag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MsgFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnixCredentials","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IpMembershipRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ipv6MembershipRequest","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for RecvMsg&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for CmsgIterator&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ControlMessageOwned","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ControlMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, I, C&gt; UnwindSafe for SendMmsgData&lt;'a, I, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, I&gt; !UnwindSafe for RecvMmsgData&lt;'a, I&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Shutdown","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SFlag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Mode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FchmodatFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UtimensatFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Statfs","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FsType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FsFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Statvfs","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SysInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Termios","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BaudRate","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetArg","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FlushArg","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FlowArg","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SpecialCharacterIndices","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InputFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OutputFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ControlFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LocalFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TimeSpec","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TimeVal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RemoteIoVec","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for IoVec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UtsName","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WaitPidFlag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WaitStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AddWatchFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InitFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Inotify","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WatchDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InotifyEvent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TimerFd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClockId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TimerFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TimerSetTimeFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Expiration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClockId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UContext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Uid","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Gid","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Pid","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ForkResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FchownatFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Whence","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LinkatFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnlinkatFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PathconfVar","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SysconfVar","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AccessFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for User","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Group","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["rand"] = [{"text":"impl UnwindSafe for Bernoulli","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BernoulliError","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; UnwindSafe for Uniform&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;X as SampleUniform&gt;::Sampler: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; UnwindSafe for UniformInt&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UniformChar","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; UnwindSafe for UniformFloat&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UniformDuration","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; UnwindSafe for WeightedIndex&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; UnwindSafe for WeightedIndex&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;X as SampleUniform&gt;::Sampler: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WeightedError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OpenClosed01","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Open01","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Alphanumeric","synthetic":true,"types":[]},{"text":"impl&lt;D, R, T&gt; UnwindSafe for DistIter&lt;D, R, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Standard","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; UnwindSafe for ReadRng&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ReadError","synthetic":true,"types":[]},{"text":"impl&lt;R, Rsdr&gt; UnwindSafe for ReseedingRng&lt;R, Rsdr&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rsdr: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as BlockRngCore&gt;::Results: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StepRng","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StdRng","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ThreadRng","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IndexVec","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for IndexVecIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IndexVecIntoIter","synthetic":true,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized, T&gt; UnwindSafe for SliceChooseIter&lt;'a, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["rand_chacha"] = [{"text":"impl UnwindSafe for ChaCha20Core","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChaCha20Rng","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChaCha12Core","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChaCha12Rng","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChaCha8Core","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChaCha8Rng","synthetic":true,"types":[]}];
implementors["rand_core"] = [{"text":"impl&lt;R:&nbsp;?Sized&gt; UnwindSafe for BlockRng&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as BlockRngCore&gt;::Results: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R:&nbsp;?Sized&gt; UnwindSafe for BlockRng64&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as BlockRngCore&gt;::Results: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OsRng","synthetic":true,"types":[]}];
implementors["regex"] = [{"text":"impl UnwindSafe for RegexBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegexSetBuilder","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for Match&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Regex","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; UnwindSafe for Matches&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; UnwindSafe for CaptureMatches&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; UnwindSafe for Split&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; UnwindSafe for SplitN&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r&gt; UnwindSafe for CaptureNames&lt;'r&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CaptureLocations","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for Captures&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 't&gt; UnwindSafe for SubCaptureMatches&lt;'c, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; !UnwindSafe for ReplacerRef&lt;'a, R&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for NoExpand&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegexSet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetMatches","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetMatchesIntoIter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for SetMatchesIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegexBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegexSetBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegexSet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetMatches","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetMatchesIntoIter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for SetMatchesIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for Match&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Regex","synthetic":true,"types":[]},{"text":"impl&lt;'r&gt; UnwindSafe for CaptureNames&lt;'r&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; UnwindSafe for Split&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; UnwindSafe for SplitN&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CaptureLocations","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for Captures&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 't&gt; UnwindSafe for SubCaptureMatches&lt;'c, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; UnwindSafe for CaptureMatches&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; UnwindSafe for Matches&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; !UnwindSafe for ReplacerRef&lt;'a, R&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for NoExpand&lt;'t&gt;","synthetic":true,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl UnwindSafe for ParserBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Parser","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Printer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Span","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Position","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WithComments","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Comment","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ast","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Alternation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Concat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LiteralKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SpecialLiteralKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HexLiteralKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Class","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassPerl","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassPerlKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassAscii","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassAsciiKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassUnicode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassUnicodeKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassUnicodeOpKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassBracketed","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSetItem","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSetRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSetUnion","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSetBinaryOp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSetBinaryOpKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Assertion","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AssertionKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Repetition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RepetitionOp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RepetitionKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RepetitionRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Group","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GroupKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CaptureName","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Flags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FlagsItem","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FlagsItemKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Flag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Literals","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Printer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TranslatorBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Translator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CaseFoldError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Hir","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HirKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Class","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassUnicode","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ClassUnicodeIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassUnicodeRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassBytes","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ClassBytesIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassBytesRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Anchor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WordBoundary","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Group","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GroupKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Repetition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RepetitionKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RepetitionRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParserBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Parser","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnicodeWordError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Utf8Sequence","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Utf8Range","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Utf8Sequences","synthetic":true,"types":[]}];
implementors["shadow_rs"] = [{"text":"impl UnwindSafe for _GTimer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _ShadowLogger","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _Process","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _Host","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PosixFileArc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _StatusListener","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _PluginVirtualPtr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _SysCallReg","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _SysCallArgs","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _SysCallCondition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _SysCallReturn","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _Futex","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _Thread","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _Timer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _TriggerObject","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _Trigger","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _Epoll","synthetic":true,"types":[]},{"text":"impl UnwindSafe for _SysCallHandler","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ShadowLogger","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for PipeFile","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for SharedBuf","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PosixFileArc","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for SyncSendPointer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SyscallReturn","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FileFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FileMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FileStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NewStatusListenerFilter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LegacyStatusListener","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for LegacyListenerHelper","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for StatusEventSource","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for PosixFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DescriptorFlags","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Descriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OwnedLegacyDescriptor","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for CompatDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Region","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MemoryManager","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ShmFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Trigger","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PluginPtrError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PluginPtr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SysCallReg","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CThread","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ByteChunk","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ByteQueue","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for EventQueue","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HandleId","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for Handle&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for EventSource&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for EventSourceInner&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;V&gt; UnwindSafe for Mutation&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; UnwindSafe for ItemIter&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; UnwindSafe for KeyIter&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;V&gt; UnwindSafe for IntervalMap&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sharing","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MappingPath","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Mapping","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()