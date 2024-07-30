import { Queue } from './queue.js'

function hotPotato(elementList, num) {
  const queue = new Queue()
  const elimitatedList = []

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 7)
result.eliminated.forEach((name) => {
  // console.log(`${name} foi eliminado`)
})
//console.log(result.winner)
