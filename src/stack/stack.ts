type StorageStack<T> = {
    [index: number]: T
}

class Stack<T> {
    storage: StorageStack<T> = {}
    count = 0

    push(value: T) {
        this.storage[this.count] = value
        this.count++
    }

    pop() {
        if (this.count > 0) {
            const removedElement = this.storage[this.count - 1]
            delete this.storage[this.count]
            this.count--
            return removedElement
        } else {
            return undefined
        }
    }

    peek() {
        return this.storage[this.count - 1]
    }
}

const stack = new Stack<string>()

stack.push('test1')
stack.push('test2')
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())