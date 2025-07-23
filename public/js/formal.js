// 防抖
function debounce(fn, delay) {
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }
  
  // 复制提醒（ElementUI）
  const notifyCopy = debounce(() => {
    ELEMENT.Notification({
      title: '复制成功',
      message: '若要转载请保留原文链接！',
      position: 'top-left',
      offset: 50,
      duration: 5000
    });
  }, 300);
  
  document.addEventListener("copy", notifyCopy);
  
  // F12 提醒（但不屏蔽）
  const notifyDev = debounce(() => {
    ELEMENT.Notification({
      title: '你已被发现',
      message: '扒源要记住要遵循GPL协议！',
      position: 'top-left',
      offset: 50,
      duration: 5000
    });
  }, 300);
  
  document.onkeydown = function (e) {
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && [74, 73, 67].includes(e.keyCode)) || // Ctrl+Shift+J/I/C
      (e.ctrlKey && e.keyCode === 85) // Ctrl+U
    ) {
      notifyDev();
    }
  };
  