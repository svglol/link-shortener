import { v4 as uuidv4 } from 'uuid'

export function useUUID() {
  const uuid = useCookie('uuid', { maxAge: 2147483647 })
  uuid.value = uuid.value || uuidv4()
  return useState('uuid', () => uuid.value)
}
