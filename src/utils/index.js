// If two values match exactly (a can be an array)
export const compare = (a, b) => {
  if (Array.isArray(a)) {
    return a.some(x => x.toLocaleLowerCase() === b.toLocaleLowerCase())
  } else {
    return a.toLocaleLowerCase() === b.toLocaleLowerCase()
  }
}

// If a (being an array) contains b
export const has = (a, b) => {
  if (Array.isArray(a)) {
    return a.some(x => x.toLocaleLowerCase().includes(b.toLocaleLowerCase()))
  } else {
    return a.toLocaleLowerCase().includes(b.toLocaleLowerCase())
  }
}

// Compare a and b and return -1, 1, or 0 for sorting, a or b can be arrays
export const sortCompare = (a, b) =>
  (Array.isArray(a) ? a[0] : a).localeCompare(Array.isArray(b) ? b[0] : b)