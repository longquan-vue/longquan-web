import flatten from 'lodash/flatten'
import assertType from './assertType'

export const treeEach = (list, getChildren, callback, parent) => {
  if (!list || !list.length) {
    return list
  }
  return list.forEach((item, index) => {
    callback(item, parent, index)

    treeEach(getChildren(item), getChildren, callback, item)
  })
}

export const treeToArray = (children, childrenFiled, format, parent) => {
  const getChildren = generateGetter(childrenFiled)

  return flatten(children.map(child => {
    child = format ? format(child, parent) : child
    const subChildren = getChildren(child)
    if (!subChildren || !subChildren.length) {
      return child
    }
    return [child, ...treeToArray(subChildren, childrenFiled, format, child)]
  }))
}

export const treeMap = (list, getChildren, format, setChildren, parent) => {
  if (!list || !list.length) {
    return list
  }
  return list.map((item, index) => {
    const formatItem = format ? format(item, parent, index) : item

    const children = getChildren(item)

    const formatChildren = treeMap(children, getChildren, format, setChildren, formatItem)

    setChildren && setChildren(formatItem, formatChildren)

    return formatItem
  })
}

export const findForTree = (list, find, options = {}) => {
  const {children = 'children'} = options

  const childrenGetter = generateGetter(children)

  function findFn(list, childrenGetter, find) {
    for (const i in list) {
      const item = list[i]

      if (find(item)) {
        return item
      }
      const children = childrenGetter(item)

      if (children) {
        const childrenItem = findFn(children, childrenGetter, find)
        if (childrenItem) {
          return childrenItem
        }
      }
    }
  }

  return findFn(list, childrenGetter, find)
}

function generateGetter(getter) {
  if (assertType(getter, String)) {
    return (data) => data[getter]
  } else if (assertType(getter, Function)) {
    return (data) => getter(data)
  }
  throw new Error('getter 无效', getter)
}
