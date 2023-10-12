export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(el) {
        this._items.append(el)
    }

    addNewItem(el) {
        this._container.prepend(el);
    };

    renderItems(data) {
        data.forEach((item) => {
          this._renderer(item);
        })
    }    
}




