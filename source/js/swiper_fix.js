// 解决 Swiper 定位问题的函数
function fixSwiperPosition() {
    // 延迟执行，确保浏览器有足够时间完成最终布局计算
    // 100ms 是一个经验值，如果仍有问题可以增加到 300ms
    setTimeout(() => {
        // 查找 Swiper 容器
        // 根据你的 HTML 截图，Swiper 容器类名为 'swiper-container'
        const swiperElement = document.querySelector('.swiper-container');

        if (swiperElement && swiperElement.swiper) {
            // 如果 Swiper 实例已存在，则调用 update() 方法进行重新校准
            swiperElement.swiper.update();
            console.log('Swiper updated successfully after loading.');
        } else {
            // 如果 Swiper 实例找不到，或者实例还没有挂载到 DOM 元素上
            // 我们触发一个全局 resize 事件作为备用方案
            window.dispatchEvent(new Event('resize'));
            console.log('Swiper instance not found, triggering resize as fallback.');
        }
    }, 100); 
}

// 监听 window 的 load 事件。
// 'load' 事件在整个页面（包括所有依赖的资源如图片）加载完成后触发。
window.addEventListener('load', fixSwiperPosition);

// 绑定到 DOMContentLoaded 也可以作为辅助（在 DOM 结构加载完成后立即尝试）
// document.addEventListener('DOMContentLoaded', fixSwiperPosition);