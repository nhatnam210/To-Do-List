import { createStore } from "./core.js";
import reducer from "./reducer.js";
import withLogger from "./logger.js";

//createStore cần truyền vào một hàm trả ra được cái giá trị khởi tạo state
//vậy nên khi ôm hàm logger vào reducer thì vẫn phải đảm bảo hàm logger trả ra được cái hàm, hàm này trả ra cái giá trị khởi tạo state
const{ attach, connect, dispatch } = createStore(withLogger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
} 