export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h = document.createElement('h4');
        h.innerText = heading;
        li.append(h);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start')
            this.container.prepend(li);
        else
            this.container.append(li);
    }
}
