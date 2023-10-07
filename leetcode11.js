//Find the index of the first occurence of a string

const firstIndex = (haystack, needle) => {
  if (needle.length > haystack.length) return -1;
  return haystack.indexOf(needle);
};

const firstStringIndex = (haystack, needle) => {
  if (needle.length > haystack.length) return -1;
  for (i = 0; i <= haystack.length - needle.length; i++) {
    let found = true;
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] != needle[j]) {
        found = false;
      }
    }
    if (found) return i;
  }
  return -1;
};
console.log(firstStringIndex('sadbutsad', 'sad'));
