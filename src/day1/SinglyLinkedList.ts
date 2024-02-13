import { Node } from "./../list-node";

export default class SinglyLinkedList<T> {
    public head: Node<T> | null = null;
    public length: number = 0;

    constructor() {}

    prepend(item: T): void {
        const newNode = new Node(item);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    append(item: T): void {
        const newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        if (!this.head) return undefined;
        if (this.head.value === item) {
            const value = this.head.value;
            this.head = this.head.next;
            this.length--;
            return value;
        }
        let current = this.head;
        while (current.next && current.next.value !== item) {
            current = current.next;
        }
        if (current.next) {
            const value = current.next.value;
            current.next = current.next.next;
            this.length--;
            return value;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current!.next;
        }
        return current!.value;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) return;
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        const newNode = new Node(item);
        let current = this.head;
        let previous = null;
        for (let i = 0; i < idx; i++) {
            previous = current;
            current = current!.next;
        }
        newNode.next = current;
        if (previous) previous.next = newNode;
        this.length++;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) {
            const value = this.head!.value;
            this.head = this.head!.next;
            this.length--;
            return value;
        }
        let current = this.head;
        let previous = null;
        for (let i = 0; i < idx; i++) {
            previous = current;
            current = current!.next;
        }
        if (previous!.next) {
            const value = current!.value;
            previous!.next = current!.next;
            this.length--;
            return value;
        }
        return undefined;
    }
}
