export const getNestedRows = (id, arr) => {
  return arr.filter(el => el.parentId === id);
}