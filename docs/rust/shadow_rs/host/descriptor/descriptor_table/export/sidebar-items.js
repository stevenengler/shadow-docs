initSidebarItems({"fn":[["descriptortable_add","Store a descriptor object for later reference at the next available index in the table. The chosen table index is stored in the descriptor object and returned. The descriptor is guaranteed to be stored successfully."],["descriptortable_free","Free the table."],["descriptortable_get","Returns the descriptor at the given table index, or NULL if we are not storing a descriptor at the given index."],["descriptortable_iter",""],["descriptortable_new","Create an object that can be used to store all descriptors created by a process. When the table is no longer required, use descriptortable_free to release the reference."],["descriptortable_remove","Stop storing the descriptor so that it can no longer be referenced. The table index that was used to store the descriptor is cleared from the descriptor and may be assigned to new descriptors that are later added to the table."],["descriptortable_set","Store the given descriptor at given index. Any previous descriptor that was stored there will be removed and its table index will be cleared. This unrefs any existing descriptor stored at index as in remove(), and consumes a ref to the existing descriptor as in add()."],["descriptortable_shutdownHelper","This is a helper function that handles some corner cases where some descriptors are linked to each other and we must remove that link in order to ensure that the reference count reaches zero and they are properly freed. Otherwise the circular reference will prevent the free operation. TODO: remove this once the TCP layer is better designed."]]});