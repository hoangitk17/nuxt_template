export function debounce(this: any, func: () => any, delay = 300): () => void {
  let timer: NodeJS.Timeout

  return (...args: any): void => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // eslint-disable-next-line prettier/prettier
      func.apply(this, args);
    }, delay)
  }
}

export function throttle(
  this: any,
  func: () => void,
  limit: number
): () => void {
  let lastExecTime = 0
  let timer: NodeJS.Timeout | null = null

  return (...args: any): void => {
    const now = Date.now()

    if (now - lastExecTime < limit) {
      clearTimeout(timer!)
      timer = setTimeout(() => {
        lastExecTime = now
        func.apply(this, args)
      }, limit)
    } else {
      lastExecTime = now
      func.apply(this, args)
    }
  }
}
