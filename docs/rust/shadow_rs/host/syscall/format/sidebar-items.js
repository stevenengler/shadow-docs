initSidebarItems({"enum":[["SyscallVal","A syscall value, either data or a pointer."]],"fn":[["write_syscall","Format and write the syscall."]],"macro":[["safe_pointer_impl","Display the pointer without dereferencing any plugin memory. Useful for types like *void, or when we don’t care about the data."],["simple_array_impl","Display the array pointer and data. Accesses plugin memory. Can only be used for pod types."],["simple_debug_impl","Display the data using its `Debug` implementation."],["simple_display_impl","Display the data using its `Display` implementation."],["simple_pointer_impl","Display the pointer and data. Accesses plugin memory. Can only be used for pod types."]],"mod":[["export",""]],"struct":[["NoArg","A marker type for indicating there are no types left in the syscall arguments."],["SyscallArgsFmt","A formatting wrapper for six syscall arguments."],["SyscallPtr","A typed PluginPtr."],["SyscallResultFmt","A formatting wrapper for the syscall result."]],"trait":[["FromSyscallMem","A trait for objects that can be read from plugin memory."],["SyscallDataDisplay","Format trait for syscall data."],["SyscallPtrDisplay","Format trait for syscall pointers. Should be implemented on `SyscallPtr<*const T>` or `SyscallPtr<[T; K]>` types."],["TryFromSyscallReg","Convert from a `SysCallReg`."]]});