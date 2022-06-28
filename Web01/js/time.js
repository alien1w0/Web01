function newYear() {
    var newDay = new Date('2022-6-10 00:00:00')
    var countDate = new Date(newDay);
    var now = new Date().getTime()
    gap = countDate - now;
    var second = 1000
    var minute = second * 60
    var hour = minute * 60
    var day = hour * 24

    var d = Math.floor(gap / day)
    var h = Math.floor((gap % day) / hour)
    var m = Math.floor((gap % hour) / minute)
    var s = Math.floor((gap % minute) / second)


    // 此处可删除
    d = addZero(d)
    h = addZero(h)
    m = addZero(m)
    s = addZero(s)
    // func end
    // 倒计时
    document.getElementById('day').innerText = d
    document.getElementById('hour').innerText = h
    document.getElementById('minute').innerText = m
    document.getElementById('second').innerText = s
  }

  // 数字小于10前面就加0
  function addZero(num) {
    return num < 10 ? '0' + num : num
  }

  setInterval(() => {
    newYear()
  }, 1000)