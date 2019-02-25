var ev = require('events')

var evEmitter = new ev.EventEmitter()

var connectHandler = function connect () {
    console.log('连接成功！')
    evEmitter.emit('data_received')
}

evEmitter.on('connection', connectHandler)

evEmitter.on('data_received', () => {
    console.log('数据接收成功！')
})

evEmitter.emit('connection')

console.log('程序执行完毕！')