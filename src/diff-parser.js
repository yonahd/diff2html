(function (ctx, undefined) {
      var oldMode = /^old mode (\d{6})/;
      var newMode = /^new mode (\d{6})/;
      var deletedFileMode = /^deleted file mode (\d{6})/;
      var newFileMode = /^new file mode (\d{6})/;
      var copyFrom = /^copy from (.+)/;
      var copyTo = /^copy to (.+)/;
      var renameFrom = /^rename from (.+)/;
      var renameTo = /^rename to (.+)/;
      var similarityIndex = /^similarity index (\d+)%/;
      var dissimilarityIndex = /^dissimilarity index (\d+)%/;
      var index = /^index ([0-9a-z]+)..([0-9a-z]+) (\d{6})?/;
      var combinedIndex = /^index ([0-9a-z]+),([0-9a-z]+)..([0-9a-z]+)/;
      var combinedMode = /^mode (\d{6}),(\d{6})..(\d{6})/;
      var combinedNewFile = /^new file mode (\d{6})/;
      var combinedDeletedFile = /^deleted file mode (\d{6}),(\d{6})/;
  // expose this module
  ((typeof module !== 'undefined' && module.exports) ||
  (typeof exports !== 'undefined' && exports) ||
  (typeof window !== 'undefined' && window) ||
  (typeof self !== 'undefined' && self) ||
  (typeof $this !== 'undefined' && $this) ||
  Function('return this')())["DiffParser"] = new DiffParser();