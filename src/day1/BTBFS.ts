export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        const current = q.shift();

        if (!current) {
            continue;
        }

        // search
        if (current?.value === needle) {
            return true;
        }

        if (current?.left) q.push(current?.left);
        if (current?.right) q.push(current?.right);
    }

    return false;
}
