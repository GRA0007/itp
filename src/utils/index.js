export const compare = (a, b) => {
  if (Array.isArray(a)) {
    return a.some(x => x.toLocaleLowerCase() === b.toLocaleLowerCase())
  } else {
    return a.toLocaleLowerCase() === b.toLocaleLowerCase()
  }
}
export const has = (a, b) => {
  if (Array.isArray(a)) {
    return a.some(x => x.toLocaleLowerCase().includes(b.toLocaleLowerCase()))
  } else {
    return a.toLocaleLowerCase().includes(b.toLocaleLowerCase())
  }
}