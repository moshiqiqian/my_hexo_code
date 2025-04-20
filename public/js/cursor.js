var CURSOR;

Math.lerp = (a, b, n) => (1 - n) * a + n * b;

const getStyle = (el, attr) => {
    try {
        return window.getComputedStyle
            ? window.getComputedStyle(el)[attr]
            : el.currentStyle[attr];
    } catch (e) {}
    return "";
};

class Cursor {
    constructor() {
        this.pos = {curr: null, prev: null};
        this.pt = []; // 恢复最初的 pt 逻辑
        this.create();
        this.init();
        this.render();
    }

    move(left, top) {
        this.cursor.style["left"] = `${left}px`;
        this.cursor.style["top"] = `${top}px`;
    }

    create() {
        if (!this.cursor) {
            this.cursor = document.createElement("div");
            this.cursor.id = "cursor";
            this.cursor.classList.add("hidden");
            document.body.append(this.cursor);
        }

        // 恢复最初的 pt 收集逻辑
        var el = document.getElementsByTagName('*');
        for (let i = 0; i < el.length; i++)
            if (getStyle(el[i], "cursor") == "pointer")
                this.pt.push(el[i].outerHTML);

        document.body.appendChild((this.scr = document.createElement("style")));
        // 恢复最初的默认光标 SVG 样式（青色小圆点）
        // 注意：为了兼容性，加了 !important
        this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='1.0' fill='rgb(57, 197, 187)'/></svg>") 4 4, auto !important;}`;
    }

    refresh() {
        // 清理之前的 style 标签
        if (this.scr && this.scr.parentNode) {
             this.scr.parentNode.removeChild(this.scr);
        }
        this.cursor.classList.remove("hover");
        this.cursor.classList.remove("active");
        this.pos = {curr: null, prev: null};
        this.pt = []; // 恢复最初的 pt 清理逻辑

        this.create();
        this.init();
        this.render();
    }

    init() {
        // === 新增函数：获取 body 的有效 zoom 级别 ===
        const getZoomLevel = () => {
            let zoom = getStyle(document.body, 'zoom');
            if (!zoom || zoom === 'normal') return 1; // 默认 zoom 是 1
            if (zoom.endsWith('%')) {
                return parseFloat(zoom) / 100;
            }
            // 处理数值形式的 zoom
            return parseFloat(zoom);
        };
        // ========================================

        // 恢复最初的 mouseover/mouseout 逻辑 (依赖 pt)
        document.onmouseover  = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.add("hover");
        document.onmouseout   = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.remove("hover");

        // === 修改 mousemove 逻辑，使用 zoom 修正坐标 ===
        document.onmousemove  = e => {
            const zoomLevel = getZoomLevel(); // 获取 zoom 级别
            // 计算修正后的坐标：原始坐标除以 zoom 级别
            // 然后减去 8px 的偏移以使光标中心对准指针
            const correctedX = (e.clientX / zoomLevel) - 8;
            const correctedY = (e.clientY / zoomLevel) - 8;

            if (this.pos.curr == null) {
                 // 第一次移动时，立即设置光标位置，使用修正后的坐标
                 this.move(correctedX, correctedY);
                 // 初始化 prev 使用修正后的坐标
                 this.pos.prev = { x: correctedX, y: correctedY };
            }
            // 更新 curr 位置，使用修正后的坐标
            this.pos.curr = {x: correctedX, y: correctedY};

            this.cursor.classList.remove("hidden");
        };
        // ==========================================

        document.onmouseenter = e => this.cursor.classList.remove("hidden");
        document.onmouseleave = e => this.cursor.classList.add("hidden");
        // 保留 mousedown 和 mouseup，控制 active 状态
        document.onmousedown  = e => this.cursor.classList.add("active");
        document.onmouseup    = e => this.cursor.classList.remove("active");
    }

    render() {
        // === 恢复最初的 render 逻辑 (不包含鲁棒性检查) ===
        if (this.pos.prev) {
            // 注意：这里的 lerp 仍然使用 curr (已修正的坐标)
            this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.15);
            this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.15);
            this.move(this.pos.prev.x, this.pos.prev.y);
        } else {
            this.pos.prev = this.pos.curr;
        }
        // =============================================

        requestAnimationFrame(() => this.render());
    }
}

(() => {
    if (typeof document !== 'undefined') {
        CURSOR = new Cursor();
        // 需要重新获取列表时，使用 CURSOR.refresh()
    }
})();