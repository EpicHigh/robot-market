import { useCallback, useMemo, useState } from 'react'

export interface MaterialUtils<Data> {
  add: (key: Data) => void
  remove: (key: Data) => void
  reset: () => void
}

export interface Actions<Data> extends MaterialUtils<Data> {
  has: (key: Data) => boolean
}

const useMaterial = <Data = string>(
  initialSet = new Set<Data>()
): [Set<Data>, Actions<Data>] => {
  const [materials, setSet] = useState(initialSet)

  const materialUtils = useMemo<MaterialUtils<Data>>(() => {
    const add = (item: Data) =>
      setSet((prevSet) => new Set([...Array.from(prevSet), item]))
    const remove = (item: Data) =>
      setSet(
        (prevSet) => new Set(Array.from(prevSet).filter((i) => i !== item))
      )

    return { add, remove, reset: () => setSet(initialSet) }
  }, [initialSet])

  const utils = {
    has: useCallback((item) => materials.has(item), [materials]),
    ...materialUtils,
  } as Actions<Data>

  return [materials, utils]
}

export default useMaterial
