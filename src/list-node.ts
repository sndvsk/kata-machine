export class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class DoubleNode<T> {
    value: T;
    next: DoubleNode<T> | null | undefined = null;
    prev: DoubleNode<T> | null | undefined = null;

    constructor(value: T) {
        this.value = value;
    }
}
