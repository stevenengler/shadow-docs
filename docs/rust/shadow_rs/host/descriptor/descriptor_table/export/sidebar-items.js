initSidebarItems({"fn":[["descriptortable_free","Free the table."],["descriptortable_new","Create an object that can be used to store all descriptors created by a process. When the table is no longer required, use descriptortable_free to release the reference."],["descriptortable_removeAndCloseAll","Close all descriptors. The `host` option is a legacy option for legacy descriptors."],["descriptortable_set","Store the given descriptor at the given index. Any previous descriptor that was stored there will be returned. This consumes a ref to the given descriptor as in add(), and any returned descriptor must be freed manually."],["descriptortable_shutdownHelper","This is a helper function that handles some corner cases where some descriptors are linked to each other and we must remove that link in order to ensure that the reference count reaches zero and they are properly freed. Otherwise the circular reference will prevent the free operation. TODO: remove this once the TCP layer is better designed."]]});