import { defaultToString } from './utils.js'

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}

class HashTable {
  constructor(toStrfn = defaultToString) {
    this.toStrfn = toStrfn
    this.table = {}
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') return key

    const tableKey = this.toStrfn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }

  djb2HashCode(key) {
    const tableKey = this.toStrfn(key)
    let hash = 5381
    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i)
    }
    return hash % 1013
  }

  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }

  size() {
    return Object.values(this.table).length
  }

  isEmpty() {
    return this.size() === 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }

    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for (let i = 1; i < keys.length; i++) {
      objString += `{${objString},{${keys[i]} => ${this.table[
        keys[i]
      ].toString()}}`
    }
    return objString
  }
}

const hash = new HashTable()

// hash.put('Gandalf', 'gandalf@email.com')
// hash.put('John', 'johnf@email.com')
// hash.put('Tyrion', 'tyrionf@email.com')
// console.log(hash.hashCode('Gandalf') + ' - Gandalf')
// console.log(hash.hashCode('Jogn') + ' - Jogn')
// console.log(hash.hashCode('Tyrion') + ' - Tyrion')
hash.put('abc', 'abcf@email.com')
hash.hashCode('abc')
console.log(hash.size())
console.log(hash.isEmpty())
console.log(hash.toString())
