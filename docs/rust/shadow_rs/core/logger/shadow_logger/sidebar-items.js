initSidebarItems({"constant":[["ASYNC_FLUSH_QD_LINES_THRESHOLD","Trigger an asynchronous flush when this many lines are queued."],["MIN_FLUSH_FREQUENCY","Logging thread flushes at least this often."],["SENDER",""],["SYNC_FLUSH_QD_LINES_THRESHOLD","Performs a synchronous flush when this many lines are queued.  i.e. if after reaching the `ASYNC_FLUSH_QD_LINES_THRESHOLD`, log lines are still coming in faster than they can actually be flushed, when we reach this limit we’ll pause and let it finish flushing rather than letting the queue continue growing."],["THREAD_ID",""],["THREAD_NAME",""]],"enum":[["LoggerCommand",""]],"fn":[["get_thread_name",""],["init","Initialize the Shadow logger."],["set_buffering_enabled",""]],"mod":[["export",""]],"static":[["SHADOW_LOGGER",""]],"struct":[["ShadowLogRecord",""],["ShadowLogger","A logger specialized for Shadow. It attaches simulation context to log entries (e.g. sim time, running process, etc.). It’s also designed for high performance to accomodate heavy logging from multiple threads."]]});