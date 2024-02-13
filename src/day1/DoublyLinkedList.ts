import { DoubleNode } from "./../list-node";

export default class DoublyLinkedList<T> {
    public head: DoubleNode<T> | null | undefined = null;
    public tail: DoubleNode<T> | null | undefined = null;
    public length: number = 0;

    constructor() {}

    prepend(item: T): void {
        const newNode = new DoubleNode(item);

        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    append(item: T): void {
        const newNode = new DoubleNode(item);

        this.length++;
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        for (let i = 0; current && i < this.length; ++i) {
            if (current.value === item) {
                break;
            }
            current = current.next;
        }

        if (!current) {
            return undefined;
        }

        return this.removeNode(current);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) return;
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        if (idx === this.length) {
            this.append(item);
            return;
        }

        this.length++;

        const newNode = new DoubleNode(item);
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current!.next;
        }

        newNode.next = current;
        newNode.prev = current!.prev;
        current!.prev = newNode;
        if (newNode.prev) {
            newNode.prev.next = current;
        }
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) {
            return undefined;
        }
        return this.removeNode(node);
    }

    private removeNode(node: DoubleNode<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;

        return node.value;
    }

    private getAt(idx: number): DoubleNode<T> | undefined | null {
        let current = this.head;
        for (let i = 0; current && i < idx; ++i) {
            current = current.next;
        }
        return current;
    }
}
