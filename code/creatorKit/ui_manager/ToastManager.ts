import { LayerManager } from "./LayerManager";
import { Controller } from "./Controller";

/**
 * author: HePeiDong
 * date: 2020/7/4
 * name: Toast提示视图ui管理器
 * description: 队列存储方式。
 */
export default class ToastManager extends LayerManager {
    constructor(canDel: boolean) {
        super(canDel, Array);
    }

    addView(view: Controller): void {
        const list: Array<Controller> = this._list as Array<Controller>;
        list.push(view);
        this.addToCenterWindow(view.node);
    }

    delView(cleanup: boolean): boolean {
        const list: Array<Controller> = this._list as Array<Controller>;
        if (list.length > 0) {
            const view: Controller = list.shift();
            view.exitView(cleanup);
            return true;
        }
        return false;
    }
}